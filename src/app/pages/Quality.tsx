import { Factory, Warehouse, Package, ClipboardCheck, ShieldCheck, Award, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { AnimatedSection, StaggerContainer, staggerItem } from "../components/AnimatedSection";

const facilities = [
  {
    icon: Factory,
    title: "Manufacturing Facility",
    description: "Equipped with automated wet grinding pulverisers, air classifiers, and dry-milling plants to output mesh grades down to sub-microns.",
  },
  {
    icon: Warehouse,
    title: "Storage Infrastructure",
    description: "Dedicated warehouses for separate storage of incoming raw blocks, processed flakes, and high-purity bagged powders, avoiding contamination.",
  },
  {
    icon: Package,
    title: "Packaging Unit",
    description: "Controlled environment bagging machines packing in multi-wall paper, polypropylene, or giant bulk bags with heat-sealed liners.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control Lab",
    description: "Equipped with dry sieve shakers, laser particle size analysers, moisture testers, and colorimeters for exact specification verification.",
  },
];

const processes = [
  { step: "01", title: "Raw Block Screening",      description: "Incoming ores are visually checked for heavy mineral stains and hand-selected based on visual grades (V-1 to V-10)." },
  { step: "02", title: "Particle Sizing (Milling)", description: "Mica undergoes pulverization and screening. Mesh fractions are controlled to match specific target particle distribution curves." },
  { step: "03", title: "Moisture & Color Analysis", description: "Samples are analyzed for volatile moisture levels (target <1%) and color consistency (whiteness/brightness test)." },
  { step: "04", title: "Chemical Purity (XRF)",    description: "Random laboratory batches undergo chemical analysis to confirm silicon, aluminum, and potassium content." },
  { step: "05", title: "Protected Sealing",         description: "Mica is packed under anti-contamination standards, with thermal-barrier seals checking bag weight and integrity." },
  { step: "06", title: "Batch Certification",       description: "Every shipment is certified with a Certificate of Analysis (COA) matching raw mine records for complete transparency." },
];



export default function Quality() {
  return (
    <div style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO — dark bg ── */}
      <section
        style={{
          position: "relative",
          height: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/ab/Precision_metal_machining_and_welding_for_heavy_industrial_components.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(10,31,31,0.95) 0%, rgba(10,31,31,0.80) 100%)",
        }} />

        {/* Rotating ring */}
        <motion.div
          style={{ position: "absolute", top: 32, right: 64, width: 112, height: 112, opacity: 0.12 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="#14b8a6" strokeWidth="1" strokeDasharray="10 14" />
            <polygon points="50,10 90,70 10,70" stroke="#14b8a6" strokeWidth="0.8" fill="none" opacity="0.55" />
          </svg>
        </motion.div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 896, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          {/* Teal badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              marginBottom: 20,
              border: "1px solid #14b8a6",
              color: "#14b8a6",
              background: "rgba(13,148,136,0.08)",
              borderRadius: 12,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <ShieldCheck style={{ width: 14, height: 14 }} /> Quality Assured Standards
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(38px, 6vw, 74px)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#f0f4f8",
              lineHeight: 1.05,
              margin: "0 0 16px",
            }}
          >
            Quality &amp;{" "}
            <span style={{ color: "#14b8a6" }}>Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            style={{ fontSize: 16, fontWeight: 300, color: "rgba(240,244,248,0.6)", margin: 0 }}
          >
            World-class sorting, grinding, and batch testing facilities.
          </motion.p>
        </div>
      </section>

      {/* ── INTRO — white bg ── */}
      <section style={{ padding: "112px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <AnimatedSection>
            {/* Teal-pale award circle */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              style={{
                width: 72,
                height: 72,
                margin: "0 auto 32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#ccfbf1",
                borderRadius: "50%",
              }}
            >
              <Award style={{ width: 32, height: 32, color: "#0d9488" }} />
            </motion.div>

            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#1a1a2e",
              margin: "0 0 24px",
            }}>
              Strict Batch Quality Assurance
            </h2>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.75, color: "#475569", margin: 0 }}>
              At RGS Minerals, we understand that chemical safety, whiteness consistency, and exact mesh distributions are critical to your production lines. Our Jharkhand processing facility operates under strict quality checks, testing raw mica all the way to dispatch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QA PROCESS STEPS — off-white bg ── */}
      <section style={{ padding: "112px 0", background: "#F7FAFA", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(13,148,136,0.08)" }}>
        {/* Subtle hex pattern */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.03, pointerEvents: "none" }}>
          <svg style={{ width: "100%", height: "100%" }}>
            <defs>
              <pattern id="qa-hex" x="0" y="0" width="50" height="43" patternUnits="userSpaceOnUse">
                <polygon points="25,2 48,14 48,38 25,50 2,38 2,14" fill="none" stroke="#0d9488" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#qa-hex)" />
          </svg>
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 40, background: "rgba(13,148,136,0.4)" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9488" }}>
                  QA Sequence
                </span>
                <div style={{ height: 1, width: 40, background: "rgba(13,148,136,0.4)" }} />
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "#1a1a2e",
                margin: "0 0 12px",
              }}>
                Multi-Stage Quality Flow
              </h2>
              <p style={{ fontSize: 14, fontWeight: 300, color: "#475569", maxWidth: 480, margin: "0 auto" }}>
                How our laboratory and sorting yard process and certify every mineral container.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processes.map((proc, i) => (
              <motion.div
                key={proc.step}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(13,148,136,0.1)",
                }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  padding: "28px",
                  background: "#FFFFFF",
                  border: "1px solid rgba(13,148,136,0.1)",
                  borderRadius: 16,
                  transition: "box-shadow 0.3s ease",
                }}
              >
                {/* Teal step badge — top-right corner */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 40,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 900,
                    borderRadius: "0 16px 0 12px",
                    background: "linear-gradient(135deg, #0d9488, #14b8a6)",
                    color: "#FFFFFF",
                  }}
                >
                  {proc.step}
                </div>

                {/* Check icon */}
                <div style={{
                  width: 36,
                  height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ccfbf1",
                  borderRadius: 10,
                  marginBottom: 16,
                }}>
                  <CheckCircle style={{ width: 18, height: 18, color: "#0d9488" }} />
                </div>

                <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1a2e", margin: "0 0 10px" }}>
                  {proc.title}
                </h3>
                <p style={{ fontSize: 12, fontWeight: 300, lineHeight: 1.65, color: "#475569", margin: 0 }}>
                  {proc.description}
                </p>

                {/* Bottom accent line on hover */}
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: 2,
                    background: "linear-gradient(90deg, #0d9488, #14b8a6)",
                    width: "0%",
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FACILITIES — white bg ── */}
      <section style={{ padding: "112px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ height: 1, width: 40, background: "rgba(13,148,136,0.4)" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#0d9488" }}>
                  Facility Overview
                </span>
                <div style={{ height: 1, width: 40, background: "rgba(13,148,136,0.4)" }} />
              </div>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "#1a1a2e",
                margin: 0,
              }}>
                Our Processing Infrastructure
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <AnimatedSection key={fac.title} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(13,148,136,0.08)" }}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid rgba(13,148,136,0.1)",
                      borderRadius: 16,
                      padding: "28px",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <div style={{
                      width: 44, height: 44,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#ccfbf1", borderRadius: 12, marginBottom: 16,
                    }}>
                      <Icon style={{ width: 22, height: 22, color: "#0d9488" }} />
                    </div>
                    <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1a1a2e", margin: "0 0 10px" }}>
                      {fac.title}
                    </h3>
                    <p style={{ fontSize: 13, fontWeight: 300, lineHeight: 1.7, color: "#475569", margin: 0 }}>
                      {fac.description}
                    </p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA — teal gradient bg ── */}
      <section style={{ padding: "96px 0", background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <AnimatedSection>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(30px, 4vw, 54px)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}>
              Experience Quality You Can Trust
            </h2>
            <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 auto 36px" }}>
              Partner with a certified exporter. Contact us to receive sample packs and lab verification files.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 40px",
                  background: "#0a1f1f",
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: 12,
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                Contact Export Desk <ArrowRight style={{ width: 16, height: 16 }} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
