import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection, StaggerContainer, staggerItem } from "../components/AnimatedSection";

// White & Teal palette

const contactInfo = [
  { icon: MapPin, title: "Registered Office", details: ["No.32/54 Flat No.5", "Sreyas Champakam Apartments", "Abhiramapuram 3rd Street", "Teynampet, Chennai – 600018"] },
  { icon: Phone, title: "Direct Line", details: ["+91 89396 32702", "+91 95516 55524 (Alternate)", "WhatsApp Enabled"] },
  { icon: Mail, title: "Email Support", details: ["rgsminerals@gmail.com"] },
  { icon: Clock, title: "Operating Hours", details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"] },
];

const faqs = [
  { question: "What is your Minimum Order Quantity (MOQ) for global exports?", answer: "Our standard export MOQ is 1 Metric Ton for processed mica powders/flakes, and 200 kg for custom cut block or sheet segments. We can consolidate smaller orders for pilot testing projects." },
  { question: "Can we request custom particle sizes (mesh distributions) or custom cuts?", answer: "Yes. Our Jharkhand processing laboratory can calibrate grinding and mechanical sieves to match your precise target particle size distribution (PSD) curve or sheet thickness boundaries." },
  { question: "Do you supply MSDS sheets and Certificates of Analysis (COA)?", answer: "Absolutely. Every shipment is accompanied by a batch COA, detailing whiteness percentages, moisture content, specific gravity, and size distribution. Technical MSDS files are provided upon request." },
  { question: "How are sample packages shipped?", answer: "We package 500g to 2kg sample bags in heat-sealed moisture-barrier pouches and dispatch them internationally via DHL or FedEx Express. Standard samples are typically processed in 2-3 business days." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [state, handleSubmit] = useForm("xgavoepb");

  const inputStyle = {
    background: "#FFFFFF",
    border: "1px solid rgba(13,148,136,0.2)",
    color: "#1a1a2e",
    borderRadius: "12px",
  };
  const focusStyle = { borderColor: "#0d9488", boxShadow: "0 0 0 3px rgba(13,148,136,0.1)" };
  const blurStyle = { borderColor: "rgba(13,148,136,0.2)", boxShadow: "none" };

  return (
    <div style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>

      {/* HERO */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')",
          backgroundSize: "cover", backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,31,31,0.95), rgba(10,31,31,0.8))" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-5">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4">
            <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.6)" }} />
            <span className="text-xs font-bold uppercase tracking-[0.22em]" style={{ color: "#14b8a6" }}>Get In Touch</span>
            <div className="h-px w-12" style={{ background: "rgba(13,148,136,0.6)" }} />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-black uppercase leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(44px,7vw,84px)", color: "#1a1a2e", letterSpacing: "0.04em" }}>
            Contact Our <span style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Desk</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base font-light" style={{ color: "rgba(240,244,248,0.65)", lineHeight: 1.9 }}>
            Get in touch for custom grades, technical parameters, and global quotes.
          </motion.p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div key={info.title} variants={staggerItem}
                  whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(13,148,136,0.1), 0 0 0 1px rgba(13,148,136,0.15)" }}
                  className="p-8 text-center space-y-4 transition-all"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(13,148,136,0.1)", borderRadius: "16px" }}>
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.55 }}
                    className="w-12 h-12 mx-auto flex items-center justify-center"
                    style={{ background: "#ccfbf1", borderRadius: "12px" }}>
                    <Icon className="w-5 h-5" style={{ color: "#0d9488" }} />
                  </motion.div>
                  <h3 className="font-bold uppercase tracking-wider text-sm" style={{ color: "#1a1a2e" }}>{info.title}</h3>
                  <div className="space-y-1 text-sm font-light" style={{ color: "#475569", lineHeight: 1.8 }}>
                    {info.details.map((d) => <p key={d}>{d}</p>)}
                  </div>
                </motion.div>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-28 relative" style={{ background: "#F7FAFA", borderTop: "1px solid rgba(13,148,136,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-14">

            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#ccfbf1", borderRadius: "10px" }}>
                    <MessageSquare className="w-5 h-5" style={{ color: "#0d9488" }} />
                  </div>
                  <h2 className="font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(22px,2.5vw,34px)", color: "#1a1a2e", letterSpacing: "0.06em" }}>
                    Send Us a Message
                  </h2>
                </div>
                <p className="text-sm font-light" style={{ color: "#475569", lineHeight: 1.8 }}>
                  Complete the export inquiry form below, and our chemical engineers will respond within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { id: "cn", name: "name", label: "Full Name *", ph: "John Doe", type: "text", req: true },
                    { id: "cc", name: "company", label: "Company Name", ph: "ABC Corp", type: "text", req: false },
                  ].map((f) => (
                    <div key={f.id} className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>{f.label}</label>
                      <input id={f.id} name={f.name} type={f.type} placeholder={f.ph} required={f.req}
                        className="w-full px-4 py-3 text-sm font-light outline-none transition-all"
                        style={inputStyle} onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)} onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)} />
                      <ValidationError field={f.name} errors={state.errors} />
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { id: "ce", name: "email", label: "Email Address *", ph: "john@company.com", type: "email", req: true },
                    { id: "cp", name: "phone", label: "Phone Number *", ph: "+91 00000 00000", type: "tel", req: true },
                  ].map((f) => (
                    <div key={f.id} className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>{f.label}</label>
                      <input id={f.id} name={f.name} type={f.type} placeholder={f.ph} required={f.req}
                        className="w-full px-4 py-3 text-sm font-light outline-none transition-all"
                        style={inputStyle} onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)} onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)} />
                      <ValidationError field={f.name} errors={state.errors} />
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Subject *</label>
                  <input id="cs" name="subject" type="text" placeholder="Inquiry regarding Wet Ground Mesh 325..." required
                    className="w-full px-4 py-3 text-sm font-light outline-none transition-all"
                    style={inputStyle} onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)} onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)} />
                  <ValidationError field="subject" errors={state.errors} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Message / Requirements *</label>
                  <textarea id="cm" name="message" rows={6} placeholder="Describe your application and target quantity..." required
                    className="w-full px-4 py-3 text-sm font-light outline-none transition-all resize-none"
                    style={inputStyle} onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)} onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)} />
                  <ValidationError field="message" errors={state.errors} />
                </div>

                <AnimatePresence>
                  {state.succeeded && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="p-4 text-xs font-bold uppercase tracking-wide"
                      style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#16a34a", borderRadius: "12px" }}>
                      ✓ Enquiry sent! We'll respond within 24 hours.
                    </motion.div>
                  )}
                  {state.errors && state.errors.length > 0 && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="p-4 text-xs font-bold uppercase tracking-wide"
                      style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", color: "#dc2626", borderRadius: "12px" }}>
                      ✕ Please check the fields above and try again. If the issue continues, email rgsminerals@gmail.com.
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button type="submit" disabled={state.submitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(13,148,136,0.3)" }} whileTap={{ scale: 0.98 }}
                  className="w-full py-4 font-bold uppercase tracking-widest text-sm"
                  style={{ background: "linear-gradient(135deg, #0d9488, #14b8a6)", color: "#FFFFFF", borderRadius: "12px", border: "none", cursor: "pointer", opacity: state.submitting ? 0.7 : 1 }}>
                  {state.submitting ? "Sending…" : "Send Enquiry"}
                </motion.button>
              </form>
            </AnimatedSection>

            {/* Map + lines */}
            <AnimatedSection direction="right" delay={0.15} className="lg:col-span-5 space-y-8">
              <h3 className="font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: "#1a1a2e", letterSpacing: "0.06em" }}>Find Our Office</h3>
              <div className="h-72 overflow-hidden" style={{ borderRadius: "16px", border: "1px solid rgba(13,148,136,0.12)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9897155614537!2d80.26098!3d13.039778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5b0e9f0e7%3A0x6e8c4d0e8b0e9f0e!2sTeynampet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%" height="100%" style={{ border: 0 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="RGS Minerals Location" />
              </div>

              <div className="p-7 space-y-5" style={{ background: "#FFFFFF", borderLeft: "3px solid #0d9488", border: "1px solid rgba(13,148,136,0.1)", borderLeftColor: "#0d9488", borderRadius: "16px" }}>
                <h3 className="font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "#1a1a2e", letterSpacing: "0.06em" }}>Direct Support Lines</h3>
                <p className="text-xs font-light" style={{ color: "#475569" }}>Skip the form and dial our export representatives directly.</p>
                {[
                  { href: "tel:+918939632702", icon: Phone, label: "Primary", value: "+91 89396 32702" },
                  { href: "tel:+919551655524", icon: Phone, label: "Alternate", value: "+91 95516 55524" },
                  { href: "mailto:rgsminerals@gmail.com", icon: Mail, label: "Direct Email", value: "rgsminerals@gmail.com" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a key={item.href} href={item.href} whileHover={{ x: 4 }}
                      className="flex items-center gap-4 p-4 transition-all"
                      style={{ background: "#F7FAFA", border: "1px solid rgba(13,148,136,0.1)", borderRadius: "12px", textDecoration: "none" }}>
                      <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ background: "#ccfbf1", borderRadius: "10px" }}>
                        <Icon className="w-4 h-4" style={{ color: "#0d9488" }} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#0d9488" }}>{item.label}</div>
                        <div className="text-sm font-medium" style={{ color: "#1a1a2e" }}>{item.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28" style={{ background: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-widest"
              style={{ border: "1px solid rgba(13,148,136,0.2)", color: "#0d9488", background: "#ccfbf1", borderRadius: "10px" }}>
              <HelpCircle className="w-3.5 h-3.5" /> FAQ Desk
            </div>
            <h2 className="font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px,4vw,48px)", color: "#1a1a2e", letterSpacing: "0.04em" }}>
              Frequently Asked B2B Questions
            </h2>
            <p className="text-sm font-light" style={{ color: "#475569" }}>Lead times, shipping parameters, and testing samples.</p>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <AnimatedSection key={idx} delay={idx * 0.08}>
                  <div className="overflow-hidden transition-all"
                    style={{ border: `1px solid ${isOpen ? "rgba(13,148,136,0.3)" : "rgba(13,148,136,0.1)"}`, background: isOpen ? "#F7FAFA" : "#FFFFFF", borderRadius: "16px" }}>
                    <motion.button onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-7 py-5 flex items-center justify-between text-left cursor-pointer" style={{ background: "transparent", border: "none" }}>
                      <span className="text-sm font-bold pr-4" style={{ color: isOpen ? "#0d9488" : "#1a1a2e" }}>{faq.question}</span>
                      <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center"
                        style={{ background: isOpen ? "linear-gradient(135deg, #0d9488, #14b8a6)" : "#ccfbf1", color: isOpen ? "#FFFFFF" : "#0d9488", borderRadius: "8px" }}>
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </motion.button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="px-7 pb-7 pt-2 text-sm font-light leading-relaxed"
                            style={{ color: "#475569", borderTop: "1px solid rgba(13,148,136,0.08)", lineHeight: 1.9 }}>
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
