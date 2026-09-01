export default function BackgroundTiles() {
  const tileSize = 32;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      <svg
        className="h-full w-full opacity-90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ambientGlow" cx="50%" cy="20%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="35%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <pattern id="gridPattern" width={tileSize} height={tileSize} patternUnits="userSpaceOnUse">
            <rect width={tileSize} height={tileSize} fill="transparent" />
            <path
              d={`M ${tileSize} 0 L 0 0 0 ${tileSize}`}
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.8"
            />
          </pattern>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="90" />
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#gridPattern)" opacity="0.9" />
        <circle cx="50%" cy="12%" r="26rem" fill="url(#ambientGlow)" filter="url(#softBlur)" />
        <circle cx="20%" cy="72%" r="16rem" fill="rgba(255,255,255,0.05)" filter="url(#softBlur)" />
        <circle cx="82%" cy="68%" r="18rem" fill="rgba(255,255,255,0.05)" filter="url(#softBlur)" />
      </svg>
    </div>
  );
}
