import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoSrc from "../../imports/Screenshot_2026-05-30_123424.png";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#0a1f1f" }}
        >
          {/* Animated ring */}
          <motion.div
            className="absolute"
            style={{ width: 160, height: 160 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 160 160" className="w-full h-full">
              <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(13,148,136,0.1)" strokeWidth="1" />
              <circle cx="80" cy="80" r="70" fill="none" stroke="#14b8a6" strokeWidth="2"
                strokeDasharray="100 340" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Logo */}
          <motion.img
            src={logoSrc}
            alt="RGS Minerals"
            className="w-16 h-16 object-contain brightness-0 invert"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Company name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-center"
          >
            <div className="text-lg font-black tracking-[0.25em] uppercase" style={{ color: "#f0f4f8", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem" }}>
              RGS Minerals
            </div>
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase mt-1" style={{ color: "#14b8a6" }}>
              Private Limited
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div className="mt-10 w-48 h-0.5 overflow-hidden rounded-full" style={{ background: "rgba(13,148,136,0.15)" }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #0d9488, #14b8a6)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
