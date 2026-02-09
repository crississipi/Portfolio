export default function BackgroundTiles() {
  const TILE = 24; // Grid size

  // ==========================================
  // CUSTOM CYBER PALETTE
  // ==========================================
  // 1. Void Black       #0B0D10 (Base)
  // 2. Deep Ultraviolet #4C3A8F
  // 3. Neon Violet      #8B5CF6
  // 4. Electric Cyan    #2ED3FF
  // 5. Cyber Pink       #FF4FA3
  // 6. Neon Amber       #FF8A3D
  // 7. Graphite Shadow  #1C2230
  // 8. Void Black       #0B0D10 (Loop End)

  const valuesColor =
    "#0B0D10;#4C3A8F;#8B5CF6;#2ED3FF;#FF4FA3;#FF8A3D;#0B0D10";

  // We have 7 transitions in the color sequence above.
  // We need 7 corresponding keySplines for smooth liquid easing.
  const keySplines = 
    "0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1";

  return (
    <svg
      // Updated background to "Void Black" (#0B0D10)
      className="fixed inset-0 w-full h-full z-0 bg-[#0B0D10]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        {/* ===================== */}
        {/* 2. SOFT BLUR          */}
        {/* ===================== */}
        <filter id="glassBlur">
          <feGaussianBlur stdDeviation="200" />
        </filter>

        {/* ===================== */}
        {/* 3. PULSING GRADIENT   */}
        {/* ===================== */}
        <radialGradient id="pulsingGradient">
          {/* CORE STOP: Animates through your Neon/Cyber palette */}
          <stop offset="0%" stopColor="#0B0D10">
            <animate
              attributeName="stop-color"
              values={valuesColor}
              dur="60s" // Slightly slower to let the neon colors breathe
              repeatCount="indefinite"
              calcMode="spline"
              keySplines={keySplines}
            />
          </stop>

          {/* MID STOP: Ensures the color body is visible before fading */}
          <stop offset="35%" stopColor="#0B0D10">
             <animate
              attributeName="stop-color"
              values={valuesColor}
              dur="60s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines={keySplines}
            />
          </stop>

          {/* EDGE STOP: Fully transparent */}
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        {/* ===================== */}
        {/* 4. GRID PATTERN       */}
        {/* ===================== */}
        <pattern
          id="gridPattern"
          width={TILE}
          height={TILE}
          patternUnits="userSpaceOnUse"
        >
          {/* Grid background slightly lighter than Void Black for contrast */}
          <rect
            width={TILE}
            height={TILE}
            fill="#141820" // Deep Charcoal
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.5"
          />
        </pattern>

        {/* ===================== */}
        {/* 5. CORNER DOT MASK    */}
        {/* ===================== */}
        <mask id="cornerDotMask">
          <rect width="100%" height="100%" fill="white" />
          <pattern
            id="cornerDots"
            width={TILE}
            height={TILE}
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0" cy="0" r="1.5" fill="black" />
            <circle cx={TILE} cy="0" r="1.5" fill="black" />
            <circle cx="0" cy={TILE} r="1.5" fill="black" />
            <circle cx={TILE} cy={TILE} r="1.5" fill="black" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cornerDots)" />
        </mask>
      </defs>

      {/* ===================== */}
      {/* LAYER 1: THE ORB      */}
      {/* ===================== */}
      <circle
        cx="50%"
        cy="100%"
        fill="url(#pulsingGradient)"
        filter="url(#glassBlur)"
        className="opacity-70" // Increased opacity to make Neons pop
      >
        <animate
          attributeName="r"
          values="50%; 58%; 50%"
          dur="30s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
        />
      </circle>

      {/* ===================== */}
      {/* LAYER 2: GRID + NOISE */}
      {/* ===================== */}
      <rect
        width="100%"
        height="100%"
        fill="url(#gridPattern)"
        mask="url(#cornerDotMask)"
        filter="url(#grain)"
        style={{ mixBlendMode: 'overlay' }}
      />
      
      {/* Grid Reinforcement */}
      <rect
        width="100%"
        height="100%"
        fill="url(#gridPattern)"
        mask="url(#cornerDotMask)"
        opacity="0.25"
      />
    </svg>
  );
}