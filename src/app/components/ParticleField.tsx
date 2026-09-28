import { motion } from "motion/react";

// ── Teal-palette floating particles for dark sections ──

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const particles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 5 + 2,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.3 + 0.1,
}));

export function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Hex grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="hex-pattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
            <polygon points="30,2 58,17 58,47 30,62 2,47 2,17" fill="none" stroke="#14b8a6" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-pattern)" />
      </svg>

      {/* Floating diamond particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -20, 0],
            x: [0, 8, -4, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width={p.size * 3} height={p.size * 3} viewBox="0 0 12 12" fill="none">
            <polygon points="6,0 12,6 6,12 0,6" fill="#14b8a6" opacity="0.5" />
          </svg>
        </motion.div>
      ))}

      {/* Glowing orbs */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(13,148,136,0.08) 0%, transparent 70%)",
          top: "-5%",
          right: "15%",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)",
          bottom: "10%",
          left: "5%",
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function MolecularRing() {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none hidden lg:block opacity-15">
      <motion.svg
        viewBox="0 0 200 200" className="w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="80" stroke="#14b8a6" strokeWidth="0.5" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="#14b8a6" strokeWidth="0.3" fill="none" strokeDasharray="4 8" />
        <circle cx="100" cy="100" r="40" stroke="#0d9488" strokeWidth="0.5" fill="none" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 80 * Math.cos(rad);
          const y = 100 + 80 * Math.sin(rad);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="#14b8a6" />
              <circle cx={x} cy={y} r="8" stroke="#14b8a6" strokeWidth="0.5" fill="none" />
            </g>
          );
        })}
        {[30, 90, 150, 210, 270, 330].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 100 + 60 * Math.cos(rad);
          const y = 100 + 60 * Math.sin(rad);
          return <circle key={`inner-${i}`} cx={x} cy={y} r="2.5" fill="#0d9488" opacity="0.7" />;
        })}
      </motion.svg>
    </div>
  );
}

export function GeometricLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05]">
      <svg className="absolute w-full h-full">
        <defs>
          <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#14b8a6" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
      </svg>
    </div>
  );
}
