import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Shield, Zap, Flame, Layers, HelpCircle, Compass, Award, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection, StaggerContainer, staggerItem } from "../components/AnimatedSection";
import { GeometricLines } from "../components/ParticleField";

const properties = [
  { icon: Zap, title: "Dielectric Strength", tagline: "Unmatched electrical resistance", description: "Mica has a dielectric strength exceeding 1,000 to 2,000 volts per mil (0.025 mm) without electrical breakdown. This makes it an invaluable raw material in manufacturing high-voltage capacitors, electrical commutators, and power transmission insulators.", metric: ">1500 V/mil", benefit: "Prevents short-circuits and electrical arcs in high-frequency power devices." },
  { icon: Flame, title: "Thermal Resistance", tagline: "Stands up to extreme heat", description: "Muscovite mica remains stable and retains its chemical structure at temperatures up to 600°C, while Phlogopite mica withstands temperatures up to 1,000°C. It is non-flammable, has extremely low thermal conductivity, and acts as a heat shield.", metric: "Up to 1000°C", benefit: "Provides reliable thermal barrier protection for industrial heating elements and aerospace parts." },
  { icon: Shield, title: "Chemical Inertness", tagline: "Corrosion and acid proof", description: "Mica minerals are virtually inert to water, acids, alkalis, solvents, and mineral oils. They do not corrode, decompose, or age when exposed to chemical vapors, making them ideal fillers for industrial paints and protective coatings.", metric: "100% Inert", benefit: "Protects metal surfaces from oxidation and harsh chemical exposures." },
  { icon: Layers, title: "Basal Cleavage", tagline: "Splits into ultra-thin sheets", description: "Mica exhibits perfect basal cleavage, allowing it to split along parallel planes into atomically flat, flexible, and transparent sheets as thin as 1/1000th of an inch. These sheets retain high mechanical strength and elasticity.", metric: "Flat to Microns", benefit: "Enables fabrication of precise micro-insulation components and cosmetic shimmer flakes." },
];

const gradingStandards = [
  { grade: "V-1 & V-2", title: "Ruby Clear & Clear/Slightly Stained", description: "Hard, optically clear sheets free of air bubbles, mineral stains, and cracks. Primarily used in high-precision electronics, capacitors, and optical instrument windows.", quality: "Highest Optical Grade", usage: "Aerospace & High-Freq Electronics" },
  { grade: "V-3 to V-5", title: "Fair Stained to Good Stained", description: "May contain light air bubbles or slight vegetable stains. Offers excellent electrical properties and mechanical strength at a balanced cost.", quality: "Electrical & Heating Grade", usage: "Commutator Segments & Washers" },
  { grade: "V-6 & V-7", title: "Heavily Stained & Densely Stained", description: "Contains significant air pockets and mineral/iron inclusions. Highly suitable for lower-voltage applications and structural heating element supports.", quality: "Thermal Insulation Grade", usage: "Heater Bands & Toasters" },
  { grade: "V-8 to V-10", title: "Black Spotted & Black Stained", description: "Exhibits heavy iron spots and dark mineral inclusions. Possesses excellent heat resistance and is generally processed into ground scrap, flakes, or powders.", quality: "Industrial Raw Material", usage: "Mica Powder & Pearlescent Pigments" },
];

const specs = [
  { parameter: "Chemical Group", muscovite: "Potassium Phyllosilicate", phlogopite: "Magnesium Potassium Silicate" },
  { parameter: "Chemical Formula", muscovite: "KAl2(AlSi3O10)(F,OH)2", phlogopite: "KMg3(AlSi3O10)(F,OH)2" },
  { parameter: "Max Operating Temp", muscovite: "600°C (1112°F)", phlogopite: "1000°C (1832°F)" },
  { parameter: "Specific Gravity", muscovite: "2.76 - 3.00", phlogopite: "2.78 - 2.85" },
  { parameter: "Mohs Hardness", muscovite: "2.5 - 3.0", phlogopite: "2.5 - 3.0" },
  { parameter: "Color Range", muscovite: "Clear, Greenish, Ruby-Red", phlogopite: "Amber, Dark Brown, Yellowish" },
  { parameter: "Dielectric Strength (V/mil)", muscovite: "1500 - 3000", phlogopite: "1000 - 1500" },
  { parameter: "Acid Resistance", muscovite: "Excellent", phlogopite: "Moderate (decomposed by H2SO4)" },
];

const tabs = [
  { id: "properties", label: "Physical Properties" },
  { id: "grading", label: "Visual Grading" },
  { id: "comparison", label: "Muscovite vs Phlogopite" },
  { id: "applications", label: "Applications" },
];

const applications = [
  { icon: Zap, title: "Electrical & Electronics", items: ["High-voltage capacitors", "Commutator segments", "Radio frequency coils", "Transformer insulators"] },
  { icon: Flame, title: "Thermal Applications", items: ["Heating element supports", "Toaster mica plates", "Industrial furnace liners", "Aerospace heat shields"] },
  { icon: Shield, title: "Paints & Coatings", items: ["Anti-corrosion primers", "Marine coatings", "Automotive refinish", "Industrial protective paint"] },
  { icon: Compass, title: "Cosmetics & Plastics", items: ["Pearlescent pigments", "Shimmering eye shadows", "Plastic fillers", "Rubber reinforcement"] },
];

export default function MicaDetails() {
  const [activeTab, setActiveTab] = useState("properties");
  const [activeProperty, setActiveProperty] = useState(0);

  return (
    <div style={{ background: "#0a1f1f", fontFamily: "'Inter', sans-serif" }}>

      {/* ── HERO ── */}
      <section
        className="relative h-[460px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,10,12,0.90)" }} />
        <GeometricLines />

        {/* Animated molecular art */}
        <motion.div className="absolute top-6 left-10 w-32 h-32 opacity-10"
          animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
          <svg viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="55" stroke="#14b8a6" strokeWidth="0.8" strokeDasharray="8 12" />
            <circle cx="60" cy="60" r="35" stroke="#0ea5e9" strokeWidth="0.8" />
            {[0, 60, 120, 180, 240, 300].map((a, i) => {
              const r = (a * Math.PI) / 180;
              return <circle key={i} cx={60 + 55 * Math.cos(r)} cy={60 + 55 * Math.sin(r)} r="4" fill="#14b8a6" />;
            })}
          </svg>
        </motion.div>
        <motion.div className="absolute bottom-8 right-12 w-24 h-24 opacity-10"
          animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
          <svg viewBox="0 0 80 80" fill="none">
            <polygon points="40,4 76,62 4,62" stroke="#14b8a6" strokeWidth="1" />
            <polygon points="40,20 62,58 18,58" stroke="#0ea5e9" strokeWidth="0.7" />
          </svg>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
            style={{ border: "1px solid rgba(13,148,136,0.35)", color: "#14b8a6", background: "rgba(13,148,136,0.07)" }}
          >
            <HelpCircle className="w-3.5 h-3.5" /> Mineral Science
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="font-black uppercase leading-tight"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e", letterSpacing: "0.06em" }}
          >
            Mica{" "}
            <span style={{ background: "linear-gradient(135deg, #0d9488, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Details
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base font-light leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(240,244,248,0.6)" }}
          >
            An in-depth reference guide to mica's chemical composition, physical properties, grading classifications, and industrial applications.
          </motion.p>
        </div>
      </section>

      {/* ── TAB NAVIGATION ── */}
      <div
        className="sticky top-[73px] z-40 border-b"
        style={{ background: "rgba(17,17,20,0.95)", backdropFilter: "blur(20px)", borderColor: "rgba(13,148,136,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative px-6 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors flex-shrink-0"
                  style={{ color: isActive ? "#14b8a6" : "rgba(240,244,248,0.5)" }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#1a1a2e"; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(240,244,248,0.5)"; }}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="mica-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: "linear-gradient(90deg, #14b8a6, #0ea5e9)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── TAB CONTENT ── */}
      <AnimatePresence mode="wait">
        {activeTab === "properties" && (
          <motion.div
            key="properties"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <section className="py-24" style={{ background: "#0a1f1f" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16 space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>Why Mica?</span>
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                  </div>
                  <h2 className="font-black uppercase" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e", letterSpacing: "0.06em" }}>
                    Key Physical Properties
                  </h2>
                </AnimatedSection>

                {/* Property selector */}
                <div className="grid lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4 space-y-3">
                    {properties.map((prop, i) => {
                      const Icon = prop.icon;
                      const isActive = activeProperty === i;
                      return (
                        <motion.button
                          key={prop.title}
                          onClick={() => setActiveProperty(i)}
                          whileHover={{ x: 4 }}
                          className="w-full p-5 text-left flex items-center gap-4 transition-all"
                          style={{
                            background: isActive ? "rgba(13,148,136,0.08)" : "#F7FAFA",
                            border: `1px solid ${isActive ? "rgba(13,148,136,0.35)" : "rgba(240,244,248,0.06)"}`,
                            boxShadow: isActive ? "0 0 20px rgba(13,148,136,0.1)" : "none",
                          }}
                        >
                          <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center"
                            style={{ background: isActive ? "rgba(13,148,136,0.15)" : "rgba(240,244,248,0.04)", border: `1px solid ${isActive ? "rgba(13,148,136,0.4)" : "rgba(240,244,248,0.06)"}` }}>
                            <Icon className="w-5 h-5" style={{ color: isActive ? "#14b8a6" : "rgba(240,244,248,0.4)" }} />
                          </div>
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider" style={{ color: isActive ? "#14b8a6" : "rgba(240,244,248,0.6)" }}>{prop.title}</div>
                            <div className="text-xs font-light mt-0.5" style={{ color: "rgba(240,244,248,0.35)" }}>{prop.tagline}</div>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProperty}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35 }}
                        className="p-8 space-y-6 h-full"
                        style={{ background: "#F7FAFA", border: "1px solid rgba(13,148,136,0.15)" }}
                      >
                        {(() => {
                          const prop = properties[activeProperty];
                          const Icon = prop.icon;
                          return (
                            <>
                              <div className="flex items-start gap-5">
                                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center"
                                  style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.15), rgba(232,84,26,0.05))", border: "1px solid rgba(13,148,136,0.3)" }}>
                                  <Icon className="w-7 h-7" style={{ color: "#14b8a6" }} />
                                </div>
                                <div>
                                  <h3 className="font-black uppercase mb-1" style={{ fontSize: "1.4rem", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e", letterSpacing: "0.06em" }}>
                                    {prop.title}
                                  </h3>
                                  <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>{prop.tagline}</div>
                                </div>
                              </div>
                              <p className="text-sm leading-relaxed font-light" style={{ color: "rgba(240,244,248,0.6)" }}>{prop.description}</p>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="p-4" style={{ background: "rgba(13,148,136,0.06)", border: "1px solid rgba(13,148,136,0.15)" }}>
                                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#14b8a6" }}>Metric</div>
                                  <div className="font-black" style={{ fontSize: "1.5rem", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e" }}>{prop.metric}</div>
                                </div>
                                <div className="p-4" style={{ background: "rgba(232,84,26,0.04)", border: "1px solid rgba(232,84,26,0.12)" }}>
                                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#0ea5e9" }}>Benefit</div>
                                  <div className="text-xs font-light leading-relaxed" style={{ color: "rgba(240,244,248,0.55)" }}>{prop.benefit}</div>
                                </div>
                              </div>
                            </>
                          );
                        })()}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === "grading" && (
          <motion.div
            key="grading"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <section className="py-24" style={{ background: "#0a1f1f" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16 space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>Classification System</span>
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                  </div>
                  <h2 className="font-black uppercase" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e", letterSpacing: "0.06em" }}>
                    Visual Quality Grading
                  </h2>
                  <p className="text-sm font-light max-w-xl mx-auto" style={{ color: "rgba(240,244,248,0.45)" }}>
                    Global mica grading follows the V-1 to V-10 classification system for quality and clarity.
                  </p>
                </AnimatedSection>

                <StaggerContainer className="grid md:grid-cols-2 gap-6">
                  {gradingStandards.map((grade, i) => (
                    <motion.div
                      key={grade.grade}
                      variants={staggerItem}
                      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(13,148,136,0.2)" }}
                      className="p-7 space-y-4 transition-all"
                      style={{ background: "#F7FAFA", border: "1px solid rgba(240,244,248,0.06)" }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span
                            className="inline-block px-3 py-1 text-xs font-black uppercase tracking-widest mb-2"
                            style={{ background: i < 2 ? "linear-gradient(135deg, #14b8a6, #38bdf8)" : i < 3 ? "linear-gradient(135deg, #0ea5e9, #14b8a6)" : "rgba(240,244,248,0.1)", color: i < 3 ? "#0a1f1f" : "rgba(240,244,248,0.5)" }}
                          >
                            {grade.grade}
                          </span>
                          <h3 className="font-bold uppercase tracking-wide text-sm" style={{ color: "#1a1a2e" }}>{grade.title}</h3>
                        </div>
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.15)" }}>
                          <Award className="w-4 h-4" style={{ color: "#14b8a6" }} />
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed font-light" style={{ color: "rgba(240,244,248,0.5)" }}>{grade.description}</p>
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3" style={{ background: "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.12)" }}>
                          <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#14b8a6" }}>Quality</div>
                          <div className="text-xs font-light" style={{ color: "rgba(240,244,248,0.55)" }}>{grade.quality}</div>
                        </div>
                        <div className="p-3" style={{ background: "rgba(240,244,248,0.02)", border: "1px solid rgba(240,244,248,0.06)" }}>
                          <div className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color: "#0ea5e9" }}>Usage</div>
                          <div className="text-xs font-light" style={{ color: "rgba(240,244,248,0.55)" }}>{grade.usage}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </StaggerContainer>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === "comparison" && (
          <motion.div
            key="comparison"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <section className="py-24" style={{ background: "#0a1f1f" }}>
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16 space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>Technical Comparison</span>
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                  </div>
                  <h2 className="font-black uppercase" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e", letterSpacing: "0.06em" }}>
                    Muscovite vs Phlogopite
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <div className="overflow-hidden" style={{ border: "1px solid rgba(13,148,136,0.15)" }}>
                    {/* Header */}
                    <div className="grid grid-cols-3 border-b" style={{ borderColor: "rgba(13,148,136,0.15)", background: "rgba(13,148,136,0.05)" }}>
                      <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest" style={{ color: "rgba(240,244,248,0.4)" }}>Parameter</div>
                      <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest border-x" style={{ color: "#14b8a6", borderColor: "rgba(13,148,136,0.15)" }}>Muscovite</div>
                      <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest" style={{ color: "#0ea5e9" }}>Phlogopite</div>
                    </div>
                    {specs.map((row, idx) => (
                      <motion.div
                        key={row.parameter}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-3 border-b last:border-b-0 transition-colors"
                        style={{ borderColor: "rgba(13,148,136,0.06)", background: idx % 2 === 0 ? "transparent" : "rgba(13,148,136,0.02)" }}
                        whileHover={{ background: "rgba(13,148,136,0.05)" }}
                      >
                        <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider" style={{ color: "rgba(240,244,248,0.5)" }}>{row.parameter}</div>
                        <div className="px-6 py-4 text-sm font-light border-x" style={{ color: "rgba(240,244,248,0.7)", borderColor: "rgba(13,148,136,0.06)" }}>{row.muscovite}</div>
                        <div className="px-6 py-4 text-sm font-light" style={{ color: "rgba(240,244,248,0.7)" }}>{row.phlogopite}</div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === "applications" && (
          <motion.div
            key="applications"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <section className="py-24" style={{ background: "#0a1f1f" }}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16 space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>Industry Use Cases</span>
                    <div className="h-px w-10" style={{ background: "rgba(13,148,136,0.5)" }} />
                  </div>
                  <h2 className="font-black uppercase" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e", letterSpacing: "0.06em" }}>
                    Industrial Applications
                  </h2>
                </AnimatedSection>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {applications.map((app) => {
                    const Icon = app.icon;
                    return (
                      <motion.div
                        key={app.title}
                        variants={staggerItem}
                        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(13,148,136,0.2)" }}
                        className="p-6 space-y-5 transition-all"
                        style={{ background: "#F7FAFA", border: "1px solid rgba(240,244,248,0.06)" }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}
                          className="w-12 h-12 flex items-center justify-center"
                          style={{ background: "linear-gradient(135deg, rgba(13,148,136,0.15), rgba(232,84,26,0.05))", border: "1px solid rgba(13,148,136,0.25)" }}
                        >
                          <Icon className="w-5 h-5" style={{ color: "#14b8a6" }} />
                        </motion.div>
                        <h3 className="font-bold uppercase tracking-wider text-sm" style={{ color: "#1a1a2e" }}>{app.title}</h3>
                        <ul className="space-y-2">
                          {app.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs font-light" style={{ color: "rgba(240,244,248,0.5)" }}>
                              <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: "#14b8a6" }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </StaggerContainer>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA ── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#F7FAFA", borderTop: "1px solid rgba(13,148,136,0.1)" }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(13,148,136,0.06) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>Ready to Source?</span>
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
            </div>
            <h2 className="font-black uppercase mb-4" style={{ fontSize: "clamp(28px, 4vw, 52px)", fontFamily: "'Bebas Neue', sans-serif", color: "#1a1a2e", letterSpacing: "0.06em" }}>
              Need Technical Specifications?
            </h2>
            <p className="font-light leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "rgba(240,244,248,0.5)", fontSize: "15px" }}>
              Our technical team provides detailed chemical analysis reports, COAs, and MSDS files. Contact us to explore our full product catalog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(13,148,136,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-10 py-4 font-bold uppercase tracking-widest text-sm"
                  style={{ background: "linear-gradient(135deg, #0d9488, #0ea5e9)", color: "#0a1f1f" }}
                >
                  Browse Products <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, background: "rgba(13,148,136,0.06)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-10 py-4 font-bold uppercase tracking-widest text-sm border transition-all"
                  style={{ border: "1px solid rgba(13,148,136,0.35)", color: "#14b8a6" }}
                >
                  Request COA / MSDS
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
