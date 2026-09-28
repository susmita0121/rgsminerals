import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowDown, Globe, Award, Package, TrendingUp, ShieldCheck, Truck, Sparkles, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion, useScroll, useTransform, useInView, animate, useMotionValue } from "motion/react";

// ── White & Teal ──

function Counter({ from = 0, to, suffix = "" }: { from?: number; to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  useEffect(() => {
    if (!inView) return;
    const c = animate(count, to, {
      duration: 2.2, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; },
    });
    return c.stop;
  }, [inView, to, suffix, count]);
  return <span ref={ref}>{from + suffix}</span>;
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function Stagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}
const staggerChild = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 25, suffix: "+", label: "Export Countries" },
];

const products = [
  { title: "Wet Ground Mica", desc: "Ultra-uniform 200–1250 mesh particle distributions through advanced hydraulic grinding.", img: "https://www.ratanmica.com/wp-content/uploads/2023/03/Wet-Ground-Mica-Powder.jpeg", link: "/products/wet-ground-mica" },
  { title: "Mica Flakes & Scrap", desc: "Hand-selected V-1 to V-10 grade Muscovite and Phlogopite for insulation and coatings.", img: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Flakes2.jpg", link: "/products/mica-flakes" },
  { title: "Mica Blocks & Sheets", desc: "Dielectric-grade blocks for capacitors, commutators, and aerospace applications.", img: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg", link: "/products/mica-blocks" },
  { title: "Micronised Powder", desc: "Jet-milled sub-micron fillers for cosmetics, specialty coatings, and polymer compounds.", img: "https://www.ratanmica.com/wp-content/uploads/2016/04/p_micronised_img1.jpg", link: "/products/micronised-mica-powder" },
];

const whyUsCards = [
  { icon: ShieldCheck, title: "Consistent Quality", desc: "Rigorous batch testing and precise processing ensure uniformity across every shipment." },
  { icon: Truck, title: "Reliable Supply", desc: "15,000+ tons annual capacity with multi-port shipping from Chennai." },
  { icon: Sparkles, title: "Professional Service", desc: "Dedicated export desk with 24-hour response and complete documentation." },
  { icon: Package, title: "Custom Solutions", desc: "Tailored mesh sizes, visual grades, and packaging to match your needs." },
];

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <div style={{ background: "#FFFFFF" }}>

      {/* ════════ HERO — Clean industrial with centered text ════════ */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "calc(100vh - 72px)", minHeight: 550, background: "#0a1f1f" }}>

        {/* Background image with subtle parallax */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
          <img
            src="https://images.unsplash.com/photo-1565715101856-7f3a3e6a5c2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="" className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: "brightness(0.4) saturate(0.7)" }} />
        </motion.div>

        {/* Simple dark overlay */}
        <div className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(180deg, rgba(10,31,31,0.5) 0%, rgba(10,31,31,0.7) 100%)" }} />

        {/* Hero content — centered */}
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-bold mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "#ffffff", fontFamily: "'Inter', sans-serif", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
            Premium Mica Products for{" "}
            <span style={{ color: "#5eead4" }}>Global Industries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base sm:text-lg font-light mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
            Trusted supplier of high-quality mica products with state-of-the-art manufacturing facilities
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg"
                style={{ background: "#0d9488", color: "#ffffff" }}>
                View Products <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button whileHover={{ background: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg border transition-all"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}>
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
            <ArrowDown className="w-5 h-5" style={{ color: "rgba(255,255,255,0.4)" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ════════ STATS ════════ */}
      <section style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <Stagger className="grid grid-cols-2 max-w-sm mx-auto gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={staggerChild} className="text-center">
                <div className="font-bold leading-none mb-2" style={{ fontSize: "clamp(40px,5vw,60px)", color: "#0d9488" }}>
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium uppercase tracking-wider" style={{ color: "#94a3b8" }}>{stat.label}</div>
              </motion.div>
            ))}
          </Stagger>
        </div>
        <div className="h-px mx-auto max-w-5xl" style={{ background: "rgba(0,0,0,0.06)" }} />
      </section>

      {/* ════════ ABOUT ════════ */}
      <section className="py-28" style={{ background: "#F7FAFA" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — key facts grid */}
            <FadeUp>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "20+", label: "Years of Experience", desc: "Operating since 2006 from Jharkhand's mineral heartland." },
                  { value: "25+", label: "Export Countries", desc: "Serving clients across Europe, Asia, Americas & Africa." },
                ].map((item) => (
                  <motion.div key={item.value} whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl space-y-2"
                    style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div className="text-2xl font-bold" style={{ color: "#0d9488" }}>{item.value}</div>
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: "#1a1a2e" }}>{item.label}</div>
                    <p className="text-xs font-light leading-relaxed" style={{ color: "#94a3b8" }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-0.5 w-8 rounded-full" style={{ background: "#0d9488" }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0d9488" }}>Who We Are</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "#1a1a2e" }}>
                  Precision Mineral Processing Since 2006
                </h2>
                <p className="text-[15px] font-light leading-relaxed" style={{ color: "#475569", lineHeight: 1.8 }}>
                  RGS Minerals Private Limited is a premier processor and global exporter of industrial mica. Strategically located in Jharkhand's mineral core with an export office in Chennai, we deliver consistent quality across 25+ countries.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Our Vision", text: "Most trusted global partner for industrial minerals." },
                    { label: "Our Mission", text: "Consistent purity and particle precision to every client." },
                  ].map((c) => (
                    <div key={c.label} className="p-4 rounded-xl space-y-1.5"
                      style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#0d9488" }}>{c.label}</span>
                      <p className="text-xs font-light" style={{ color: "#475569", lineHeight: 1.6 }}>{c.text}</p>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg mt-2"
                    style={{ background: "#0d9488", color: "#ffffff" }}>
                    Read More <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ════════ PRODUCTS ════════ */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-8 rounded-full" style={{ background: "rgba(13,148,136,0.4)" }} />
              <span className="text-xs font-semibold uppercase tracking-[0.15em]" style={{ color: "#0d9488" }}>What We Offer</span>
              <div className="h-0.5 w-8 rounded-full" style={{ background: "rgba(13,148,136,0.4)" }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1a1a2e" }}>Our Product Range</h2>
          </FadeUp>

          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <motion.div key={p.title} variants={staggerChild}>
                <Link to={p.link} className="group block h-full">
                  <motion.div whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }}
                    className="h-full rounded-2xl overflow-hidden flex flex-col transition-all"
                    style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)" }}>
                    <div className="h-52 overflow-hidden">
                      <motion.img src={p.img} alt={p.title} className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-sm mb-2 group-hover:text-[#0d9488] transition-colors" style={{ color: "#1a1a2e" }}>{p.title}</h3>
                        <p className="text-xs font-light leading-relaxed" style={{ color: "#475569" }}>{p.desc}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold group-hover:text-[#0d9488] transition-colors pt-3 border-t"
                        style={{ color: "#94a3b8", borderColor: "rgba(0,0,0,0.05)" }}>
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </Stagger>

          <FadeUp delay={0.15} className="text-center mt-12">
            <Link to="/products">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 text-sm font-semibold rounded-lg border transition-all hover:border-[#0d9488] hover:text-[#0d9488]"
                style={{ borderColor: "rgba(0,0,0,0.12)", color: "#475569" }}>
                View Full Catalog
              </motion.button>
            </Link>
          </FadeUp>
        </div>
      </section>



      {/* ════════ WHY CHOOSE US ════════ */}
      <section className="py-28" style={{ background: "#F7FAFA" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1a1a2e" }}>Why Choose Us</h2>
          </FadeUp>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUsCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div key={card.title} variants={staggerChild}
                  whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.06)" }}
                  className="p-7 rounded-2xl text-center space-y-4 transition-all"
                  style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center" style={{ background: "#ccfbf1" }}>
                    <Icon className="w-6 h-6" style={{ color: "#0d9488" }} />
                  </div>
                  <h3 className="font-semibold text-sm" style={{ color: "#1a1a2e" }}>{card.title}</h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: "#475569", lineHeight: 1.7 }}>{card.desc}</p>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#0a1f1f" }}>
        <img src="https://images.unsplash.com/photo-1610891015188-5369212db097?w=1920&q=80"
          alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.2) saturate(0.5)" }} />
        <div className="absolute inset-0" style={{ background: "rgba(10,31,31,0.8)" }} />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5" style={{ color: "#ffffff" }}>Ready to Source Premium Mica?</h2>
            <p className="text-base font-light mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
              Contact our export desk for custom specs, bulk pricing, and sample packs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg"
                  style={{ background: "#0d9488", color: "#ffffff" }}>
                  <Phone className="w-4 h-4" /> Request Quote
                </motion.button>
              </Link>
              <a href="https://wa.me/918939632702" target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ background: "rgba(255,255,255,0.08)" }} whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold rounded-lg border transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.2)", color: "#ffffff" }}>
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </motion.button>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ════════ CONTACT CARDS ════════ */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: "#1a1a2e" }}>Get In Touch</h2>
          </FadeUp>
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+91 89396 32702", href: "https://wa.me/918939632702" },
              { icon: Phone, label: "Alternate", value: "+91 95516 55524", href: "tel:+919551655524" },
              { icon: Mail, label: "Email", value: "rgsminerals@gmail.com", href: "mailto:rgsminerals@gmail.com" },
              { icon: MapPin, label: "Address", value: "Teynampet, Chennai – 600018", href: "https://maps.google.com/?q=Abhiramapuram+3rd+Street+Teynampet+Chennai" },
              { icon: Clock, label: "Hours", value: "Mon–Sat 9AM–6PM", href: "#" },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <motion.a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer" variants={staggerChild}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl text-center space-y-3 block transition-all"
                  style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center" style={{ background: "#ccfbf1" }}>
                    <Icon className="w-5 h-5" style={{ color: "#0d9488" }} />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#94a3b8" }}>{card.label}</div>
                  <div className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>{card.value}</div>
                </motion.a>
              );
            })}
          </Stagger>
        </div>
      </section>

    </div>
  );
}
