import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const allowedModes = new Set(["email", "viber", "facebook"]);
const requestLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_LENGTHS = { name: 100, contact: 254, message: 4000 } as const;

const jsonError = (message: string, status: number) =>
  NextResponse.json({ error: message }, { status });

const isValidText = (value: unknown, maxLength: number): value is string =>
  typeof value === "string" && value.trim().length > 0 && value.length <= maxLength && !/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value);

const isAllowedOrigin = (request: NextRequest) => {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  const configuredOrigin = process.env.NEXT_PUBLIC_APP_URL ?? process.env.APP_URL;
  if (configuredOrigin && origin === configuredOrigin.replace(/\/$/, "")) return true;

  const host = request.headers.get("host");
  const forwardedProtocol = request.headers.get("x-forwarded-proto") ?? "https";
  return host ? origin === `${forwardedProtocol}://${host}` : false;
};

const isRateLimited = (request: NextRequest) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientKey = forwardedFor?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";
  const now = Date.now();
  const recentRequests = (requestLog.get(clientKey) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(clientKey, recentRequests);
    return true;
  }

  requestLog.set(clientKey, [...recentRequests, now]);
  return false;
};

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !Number.isInteger(port) || !user || !password) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });
};

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) return jsonError("Invalid request origin.", 403);
  if (isRateLimited(request)) return jsonError("Too many inquiries. Please try again later.", 429);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON payload.", 400);
  }

  if (!payload || typeof payload !== "object") return jsonError("Invalid request body.", 400);

  const { name, contact, message, mode, website } = payload as Record<string, unknown>;
  if (typeof website === "string" && website.trim()) return NextResponse.json({ ok: true });
  if (!isValidText(name, MAX_LENGTHS.name) || !isValidText(contact, MAX_LENGTHS.contact) || !isValidText(message, MAX_LENGTHS.message)) {
    return jsonError("Name, contact, and message are required and must be within the allowed length.", 400);
  }
  if (typeof mode !== "string" || !allowedModes.has(mode)) return jsonError("Invalid contact method.", 400);

  const transporter = getTransporter();
  const recipient = process.env.INQUIRY_EMAIL ?? process.env.SMTP_USER;
  if (!transporter || !recipient) {
    console.error("[INQUIRIES_API] SMTP configuration is incomplete.");
    return jsonError("Inquiry service is temporarily unavailable.", 503);
  }

  const senderEmail = mode === "email" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim())
    ? contact.trim()
    : undefined;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
      to: recipient,
      replyTo: senderEmail,
      subject: `Portfolio inquiry from ${name.trim()}`,
      text: [`Name: ${name.trim()}`, `Contact via: ${mode}`, `Contact: ${contact.trim()}`, "", message.trim()].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[INQUIRIES_API] Failed to send inquiry.", error instanceof Error ? error.message : "Unknown error");
    return jsonError("Unable to send inquiry.", 502);
  }
}
