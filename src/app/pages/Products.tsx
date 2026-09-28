import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection, StaggerContainer, staggerItem } from "../components/AnimatedSection";

// ── Palette ──────────────────────────────────────────────────────────────────
// White bg    : #FFFFFF
// Off-white   : #F7FAFA
// Dark        : #0a1f1f
// Teal        : #0d9488 / #14b8a6
// Teal pale   : #ccfbf1
// Text dark   : #1a1a2e
// Text body   : #475569
// Text muted  : #94a3b8
// ─────────────────────────────────────────────────────────────────────────────

const categories = [
  { id: "all",     label: "All Products" },
  { id: "powders", label: "Processed Powders" },
  { id: "sheets",  label: "Sheets & Blocks" },
  { id: "raw",     label: "Flakes & Raw Scrap" },
];

const products = [
  {
    id: "wet-ground-mica",
    name: "Wet Ground Mica",
    category: "powders",
    description: "High-purity wet ground mica processed through advanced wet grinding technology for superior quality and consistency.",
    image: "https://www.ratanmica.com/wp-content/uploads/2023/03/Wet-Ground-Mica-Powder.jpeg",
    applications: ["Paints & Coatings", "Plastics", "Rubber"],
  },
  {
    id: "mica-blocks",
    name: "Mica Blocks",
    category: "sheets",
    description: "Premium quality mica blocks available in various sizes, ideal for electrical insulation and industrial applications.",
    image: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg",
    applications: ["Electrical Insulation", "Industrial Use", "Manufacturing"],
  },
  {
    id: "mica-scrap",
    name: "Mica Scrap",
    category: "raw",
    description: "High-grade mica scrap suitable for various industrial processes and value-added product manufacturing.",
    image: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Scrap.jpg",
    applications: ["Raw Material", "Processing", "Recycling"],
  },
  {
    id: "mica-flakes",
    name: "Mica Flakes",
    category: "raw",
    description: "Natural mica flakes with excellent reflective properties, perfect for decorative and industrial purposes.",
    image: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Flakes2.jpg",
    applications: ["Cosmetics", "Decorative", "Automotive"],
  },
  {
    id: "mica-powder",
    name: "Mica Powder",
    category: "powders",
    description: "Fine mica powder with uniform particle size distribution for cosmetics, paints, and industrial applications.",
    image: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Powder.jpg",
    applications: ["Cosmetics", "Paints", "Plastics"],
  },
  {
    id: "micronised-mica-powder",
    name: "Micronised Mica Powder",
    category: "powders",
    description: "Ultra-fine micronised mica powder with exceptional smoothness and particle uniformity for specialized uses.",
    image: "https://www.ratanmica.com/wp-content/uploads/2016/04/p_micronised_img1.jpg",
    applications: ["Premium Cosmetics", "Specialty Coatings", "High-end Products"],
  },
  {
    id: "phlogopite-mica",
    name: "Phlogopite Mica",
    category: "raw",
    description: "Premium phlogopite mica known for excellent thermal and electrical insulation properties and chemical stability.",
    image: "https://www.ratanmica.com/wp-content/uploads/2016/04/Phlogopite-Mica-Scrap-1.jpg",
    applications: ["Electrical Insulation", "High Temperature", "Chemical Resistant"],
  },
  {
    id: "ruby-mica",
    name: "Ruby Mica",
    category: "sheets",
    description: "High-quality ruby mica with distinctive characteristics, suitable for specialized industrial and commercial applications.",
    image: "https://www.ratanmica.com/wp-content/uploads/2016/04/V1-Quality-Mica.jpg",
    applications: ["Electronics", "Specialty Products", "Premium Applications"],
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = products.filter((p) =>
    selectedCategory === "all" ? true : p.category === selectedCategory
  );

  return (
    <div style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          height: "380px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          backgroundImage: "url('https://images.unsplash.com/photo-1610891015188-5369212db097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(10,31,31,0.94) 0%, rgba(10,31,31,0.82) 100%)",
        }} />

        {/* Spinning hex decoration */}
        <motion.div
          style={{ position: "absolute", top: 24, right: 48, width: 96, height: 96, opacity: 0.12 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 80 80" fill="none">
            <polygon points="40,4 76,24 76,64 40,84 4,64 4,24" stroke="#14b8a6" strokeWidth="1.5" />
            <polygon points="40,18 62,30 62,54 40,66 18,54 18,30" stroke="#14b8a6" strokeWidth="0.8" opacity="0.5" />
          </svg>
        </motion.div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 896, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}
          >
            <div style={{ height: 1, width: 40, background: "rgba(13,148,136,0.55)" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#14b8a6" }}>
              Product Catalog
            </span>
            <div style={{ height: 1, width: 40, background: "rgba(13,148,136,0.55)" }} />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 6vw, 76px)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#1a1a2e",
              lineHeight: 1.05,
              margin: "0 0 16px",
            }}
          >
            Our{" "}
            <span style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            style={{ fontSize: 16, fontWeight: 300, color: "#94a3b8", margin: 0 }}
          >
            Premium mica categories engineered for global industrial demands.
          </motion.p>
        </div>
      </section>

      {/* ── CATALOG ── */}
      <section style={{ padding: "112px 0", background: "#F7FAFA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(28px, 3vw, 42px)",
                fontWeight: 400,
                letterSpacing: "0.06em",
                color: "#1a1a2e",
                margin: "0 0 12px",
              }}>
                Complete Range of Mica Products
              </h2>
              <p style={{ fontSize: 14, fontWeight: 400, color: "#475569", maxWidth: 480, margin: "0 auto" }}>
                We process, size, and supply a diverse mineral portfolio. Filter by category below.
              </p>
            </div>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection delay={0.1}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, marginBottom: 56 }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      padding: "10px 24px",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      borderRadius: "12px",
                      border: isActive ? "1px solid #0d9488" : "1px solid rgba(13,148,136,0.3)",
                      background: isActive ? "linear-gradient(135deg, #0d9488, #14b8a6)" : "#FFFFFF",
                      color: isActive ? "#FFFFFF" : "#0d9488",
                      transition: "all 0.25s ease",
                      outline: "none",
                      boxShadow: isActive ? "0 4px 16px rgba(13,148,136,0.25)" : "0 1px 4px rgba(0,0,0,0.04)",
                    }}
                  >
                    {cat.label}
                  </motion.button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Products grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link to={`/products/${product.id}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                    <motion.div
                      whileHover={{
                        y: -8,
                        boxShadow: "0 20px 48px rgba(13,148,136,0.12), 0 0 0 1px rgba(13,148,136,0.18)",
                      }}
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid rgba(13,148,136,0.1)",
                        borderRadius: "16px",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        transition: "box-shadow 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      {/* Image */}
                      <div style={{ height: 224, overflow: "hidden", position: "relative" }}>
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div style={{
                          position: "absolute", inset: 0,
                          background: "linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 55%)",
                        }} />
                      </div>

                      {/* Body */}
                      <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16 }}>
                        <div>
                          <h3 style={{
                            fontSize: 15,
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                            color: "#1a1a2e",
                            margin: "0 0 8px",
                          }}>
                            {product.name}
                          </h3>
                          <p style={{ fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: "#475569", margin: 0 }}>
                            {product.description}
                          </p>
                        </div>

                        <div>
                          {/* Application tags */}
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                            {product.applications.map((app) => (
                              <span
                                key={app}
                                style={{
                                  fontSize: 10,
                                  fontWeight: 600,
                                  letterSpacing: "0.05em",
                                  textTransform: "uppercase",
                                  padding: "3px 10px",
                                  background: "#ccfbf1",
                                  borderRadius: "6px",
                                  color: "#0d9488",
                                }}
                              >
                                {app}
                              </span>
                            ))}
                          </div>

                          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0d9488" }}>
                            Details &amp; Specs <ArrowRight style={{ width: 14, height: 14 }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", background: "linear-gradient(135deg, #0d9488, #14b8a6)" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <AnimatedSection>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(32px, 4vw, 54px)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#FFFFFF",
              margin: "0 0 16px",
            }}>
              Need a Custom Grading Mesh?
            </h2>
            <p style={{ fontSize: 16, fontWeight: 400, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 auto 36px" }}>
              Our Jharkhand production team can customize particle sizing, screen cuts, and packaging layouts for your manufacturing lines.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 40px",
                  background: "#FFFFFF",
                  color: "#0d9488",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                Submit Spec Request <ArrowRight style={{ width: 16, height: 16 }} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
