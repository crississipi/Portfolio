# API Documentation

## POST /api/inquiries

Sends a portfolio inquiry to the configured `INQUIRY_EMAIL` address through Nodemailer.

### Authentication

No user authentication is required. Requests must include a same-origin `Origin` header. The endpoint also applies an in-memory limit of five requests per client IP per hour.

### Request body

```json
{
  "name": "Ada Lovelace",
  "mode": "email",
  "contact": "ada@example.com",
  "message": "I would like to discuss a project.",
  "website": ""
}
```

`mode` must be `email`, `viber`, or `facebook`. `name`, `contact`, and `message` are required and limited to 100, 254, and 4,000 characters respectively. `website` is a hidden honeypot field and must remain empty.

### Success response

`200 OK`

```json
{ "ok": true }
```

### Error responses

- `400 Bad Request`: Invalid JSON, missing/oversized fields, or invalid contact method.
- `403 Forbidden`: Missing or invalid request origin.
- `429 Too Many Requests`: Client exceeded the hourly request limit.
- `502 Bad Gateway`: SMTP delivery failed.
- `503 Service Unavailable`: SMTP environment variables are incomplete.

### Required environment variables

- `SMTP_HOST`
- `SMTP_PORT` (optional, defaults to `587`)
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM` (optional, defaults to `SMTP_USER`)
- `INQUIRY_EMAIL` (optional, defaults to `SMTP_USER`)
- `NEXT_PUBLIC_APP_URL` or `APP_URL` (recommended for production origin validation)
