import { Target, Eye, Award, Shield, History, TrendingUp, Layers } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedSection, StaggerContainer, staggerItem } from "../components/AnimatedSection";

const milestones = [
  { year: "2006", title: "Establishment in Jharkhand", description: "Founded our primary sorting yard and hand-selection facility in Jharkhand's mineral-rich mica belt." },
  { year: "2012", title: "Wet Grinding Processing Plant", description: "Commissioned our first hydraulic wet grinding processing plant to produce high-purity mica powder." },
  { year: "2024", title: "Advanced Micronisation Unit", description: "Installed next-gen jet-milling micronisers to supply ultra-fine sub-micron fillers for premium polymer industries." },
];

const values = [
  { icon: Award, title: "Excellence", description: "Over 20 years of maintaining high standards in physical sizing accuracy, screening quality, and customer service." },
  { icon: Shield, title: "Integrity", description: "Transparent chemical reporting, exact visual grading matches, and robust logistics commitments." },
  { icon: TrendingUp, title: "Innovation", description: "Continuous research in particle size distribution optimizations and surface-treated mica compatibility." },
  { icon: Layers, title: "Traceability", description: "Raw material tracking from mine source to final bagged batch, ensuring chemical safety and purity profiles." },
];

const stats = [
  { value: "20+", label: "Years of Sourcing" },
  { value: "25+", label: "Export Countries" },
  { value: "100%", label: "Chemical Purity QA" },
];

export default function About() {
  return (
    <div style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>

      {/* HERO — dark bg */}
      <section className="relative h-[440px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,31,31,0.95) 0%, rgba(10,31,31,0.75) 100%)" }} />
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full"><defs><pattern id="about-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#14b8a6" /></pattern></defs><rect width="100%" height="100%" fill="url(#about-dots)" /></svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ background: "#14b8a6" }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#14b8a6" }}>
              <History className="w-3.5 h-3.5 inline mr-2" />Established 2006
            </span>
            <div className="h-px w-12" style={{ background: "#14b8a6" }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-black uppercase leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(44px,7vw,84px)", color: "#f0f4f8", letterSpacing: "0.04em" }}>
            About RGS <span style={{ color: "#14b8a6" }}>Minerals</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base font-light" style={{ color: "rgba(240,244,248,0.6)", lineHeight: 1.9 }}>
            Building global trust through mineral quality and processing reliability.
          </motion.p>
        </div>
      </section>

      {/* WHO WE ARE — white bg */}
      <section className="py-32" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#0d9488" }}>Our Identity</span>
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
            </div>
            <h2 className="font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(30px,4vw,52px)", color: "#1a1a2e", letterSpacing: "0.04em" }}>Who We Are</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 font-light leading-relaxed" style={{ color: "#475569", fontSize: "15px", lineHeight: 1.9 }}>
              <p>RGS Minerals Private Limited stands as a premier processor and global exporter of industrial mica. Combining raw material advantages with sophisticated screening equipment, we cater to B2B clients in electrical insulation, high-performance coatings, and composite plastics.</p>
              <p>Our processing facility, strategically located in Jharkhand, India, stands in the mineral core of the subcontinent. This location grants us direct access to high-crystallinity Muscovite and Phlogopite deposits, ensuring our products hold superior electrical dielectric strength and heat boundaries from the source.</p>
              <p>Under leadership focused on long-term client relations, we specialize in high-mesh wet ground powders, high-reflection flakes, and custom block shapes. Our Chennai export office handles streamlined global logistics, providing seamless clearance and container shipping across international ports.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STATS — off-white bg */}
      <section className="py-20 relative" style={{ background: "#F7FAFA", borderTop: "1px solid rgba(13,148,136,0.1)", borderBottom: "1px solid rgba(13,148,136,0.1)" }}>
        <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #0d9488, transparent)" }} />
        <StaggerContainer className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x"
          style={{ borderColor: "rgba(13,148,136,0.1)" } as React.CSSProperties}>
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="text-center py-12 px-8">
              <div className="font-black mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px,5vw,60px)", color: "#0d9488" }}>{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: "#94a3b8" }}>{stat.label}</div>
            </motion.div>
          ))}
        </StaggerContainer>
      </section>

      {/* TIMELINE — white bg */}
      <section className="py-32" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#0d9488" }}>Our History</span>
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
            </div>
            <h2 className="font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(30px,4vw,52px)", color: "#1a1a2e", letterSpacing: "0.04em" }}>Timeline of Milestones</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "rgba(13,148,136,0.2)" }} />
            <div className="space-y-14">
              {milestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.1} direction={isEven ? "left" : "right"}>
                    <div className={`relative flex items-start gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-row pl-20 md:pl-0`}>
                      <div className={`hidden md:flex flex-1 ${isEven ? "justify-end pr-12" : "justify-start pl-12"}`}>
                        <span className="font-black text-4xl pt-1" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#0d9488" }}>{item.year}</span>
                      </div>
                      {/* Teal diamond node */}
                      <div className="absolute left-[34px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                        <motion.div whileInView={{ scale: [0, 1.3, 1] }} transition={{ duration: 0.5 }}
                          className="w-4 h-4 rotate-45" style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)" }} />
                      </div>
                      <div className={`flex-1 ${isEven ? "md:pl-12" : "md:pr-12"}`}>
                        <motion.div whileHover={{ x: isEven ? 4 : -4 }} className="p-7 rounded-2xl transition-all"
                          style={{ background: "#FFFFFF", border: "1px solid rgba(13,148,136,0.1)", boxShadow: "0 4px 24px rgba(13,148,136,0.06)" }}>
                          <div className="md:hidden font-black text-2xl mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", color: "#0d9488" }}>{item.year}</div>
                          <h3 className="font-bold uppercase tracking-wide text-sm mb-2" style={{ color: "#1a1a2e" }}>{item.title}</h3>
                          <p className="text-sm font-light leading-relaxed" style={{ color: "#475569", lineHeight: 1.8 }}>{item.description}</p>
                        </motion.div>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION — white bg */}
      <section className="py-28 relative" style={{ background: "#FFFFFF", borderTop: "1px solid rgba(13,148,136,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Eye, color: "#0d9488", title: "Our Vision", text: "To stand globally as the most trusted partner for electrical and thermal grade minerals, setting benchmarks in chemical purity, particle sorting precision, and environmentally responsible extraction practices." },
              { icon: Target, color: "#0d9488", title: "Our Mission", text: "To supply premium processed mica tailored to the requirements of automotive, cosmetic, and electric insulation fields. We invest consistently in processing technology and batch laboratory tracking to guarantee consistency." },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={card.title} delay={i * 0.15}>
                  <motion.div whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(13,148,136,0.12)" }}
                    className="p-10 space-y-6 rounded-2xl transition-all" style={{ background: "#FFFFFF", border: "1px solid rgba(13,148,136,0.1)", borderTop: "3px solid #0d9488" }}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "#ccfbf1" }}>
                        <Icon className="w-6 h-6" style={{ color: "#0d9488" }} />
                      </div>
                      <h3 className="font-black uppercase tracking-wider" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", color: "#1a1a2e", letterSpacing: "0.06em" }}>{card.title}</h3>
                    </div>
                    <p className="text-sm font-light leading-relaxed" style={{ color: "#475569", lineHeight: 1.9 }}>{card.text}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE VALUES — off-white bg */}
      <section className="py-32" style={{ background: "#F7FAFA" }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#0d9488" }}>Our Principles</span>
              <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.4)" }} />
            </div>
            <h2 className="font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(30px,4vw,52px)", color: "#1a1a2e", letterSpacing: "0.04em" }}>Our Core Values</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={staggerItem}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(13,148,136,0.1)" }}
                  className="p-8 text-center space-y-5 rounded-2xl transition-all" style={{ background: "#FFFFFF", border: "1px solid rgba(13,148,136,0.1)" }}>
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.55 }}
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                    style={{ background: "#ccfbf1" }}>
                    <Icon className="w-7 h-7" style={{ color: "#0d9488" }} />
                  </motion.div>
                  <h3 className="font-bold uppercase tracking-wider text-sm" style={{ color: "#1a1a2e" }}>{value.title}</h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: "#475569", lineHeight: 1.8 }}>{value.description}</p>
                  <motion.div className="h-px origin-center mx-auto w-12" style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)", scaleX: 0 }}
                    whileHover={{ scaleX: 1 }} transition={{ duration: 0.4 }} />
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

    </div>
  );
}
