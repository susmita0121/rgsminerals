import { motion } from "motion/react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
  style?: React.CSSProperties;
}

export default function GlassCard({ children, className = "", dark = false, hover = true, style }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: dark
        ? "0 32px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(13,148,136,0.3)"
        : "0 32px 64px rgba(0,0,0,0.08), 0 0 0 1px rgba(13,148,136,0.2)"
      } : undefined}
      className={`rounded-2xl overflow-hidden transition-all duration-500 ${className}`}
      style={{
        background: dark
          ? "rgba(13,148,136,0.06)"
          : "rgba(255,255,255,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: dark
          ? "1px solid rgba(13,148,136,0.15)"
          : "1px solid rgba(13,148,136,0.12)",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}
