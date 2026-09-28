import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Package, FileText, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "../components/AnimatedSection";

export default function ProductDetail() {
  const { productId } = useParams();
  const [selectedImg, setSelectedImg] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const productData: Record<string, any> = {
    "wet-ground-mica": { name: "Wet Ground Mica", description: "High-purity wet ground mica processed through advanced wet grinding technology for superior quality and consistency.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2023/03/Wet-Ground-Mica-Powder.jpeg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2023/03/Wet-Ground-Mica-Powder.jpeg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Ground-Mica.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Powder.jpg"], overview: "Our wet ground mica is produced using state-of-the-art wet grinding processes that ensure uniform particle size distribution and exceptional purity. This product is ideal for applications requiring high-quality mica with excellent dispersion properties and consistent performance.", specifications: [{ property: "Purity", value: "High grade" }, { property: "Particle Size", value: "Customizable" }, { property: "Color", value: "Natural white to light brown" }, { property: "Form", value: "Powder" }, { property: "Processing Method", value: "Wet grinding" }], applications: ["Paints & Coatings", "Plastics", "Rubber", "Drilling Fluids"], packaging: "Available in 25kg, 50kg bags, and bulk containers as per customer requirements" },
    "mica-blocks": { name: "Mica Blocks", description: "Premium quality mica blocks available in various sizes, ideal for electrical insulation and industrial applications.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Splittings2.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Processed-Mica.jpg"], overview: "Our mica blocks are carefully selected and processed to meet stringent quality standards. These blocks offer excellent electrical insulation properties and are suitable for high-temperature applications.", specifications: [{ property: "Type", value: "Natural mica blocks" }, { property: "Size Range", value: "Customizable" }, { property: "Dielectric Strength", value: "High" }, { property: "Temperature Resistance", value: "Excellent" }, { property: "Quality Grade", value: "Premium" }], applications: ["Electrical Insulation", "Industrial Manufacturing", "High-temperature Applications"], packaging: "Securely packed in wooden boxes or as per customer specifications" },
    "mica-scrap": { name: "Mica Scrap", description: "High-grade mica scrap suitable for various industrial processes and value-added product manufacturing.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Scrap.jpg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Scrap.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Phlogopite-Mica-Scrap-1.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg"], overview: "Quality mica scrap sourced from our processing operations, suitable for further processing into various mica products or as raw material for industrial applications.", specifications: [{ property: "Type", value: "Mixed mica scrap" }, { property: "Quality", value: "Industrial grade" }, { property: "Moisture Content", value: "Low" }, { property: "Form", value: "Irregular pieces" }, { property: "Usage", value: "Raw material processing" }], applications: ["Raw Material", "Further Processing", "Industrial Manufacturing"], packaging: "Bulk packaging in jumbo bags or containers" },
    "mica-flakes": { name: "Mica Flakes", description: "Natural mica flakes with excellent reflective properties, perfect for decorative and industrial purposes.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Flakes2.jpg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Flakes2.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Splittings2.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Flexible-Mica.jpg"], overview: "Our mica flakes provide exceptional sparkle and reflective properties, making them ideal for decorative applications, cosmetics, and automotive coatings.", specifications: [{ property: "Flake Size", value: "Various grades available" }, { property: "Luster", value: "High" }, { property: "Purity", value: "Premium grade" }, { property: "Color Options", value: "Natural silver, gold tones" }, { property: "Form", value: "Flakes" }], applications: ["Cosmetics", "Decorative Coatings", "Automotive Finishes", "Craft Applications"], packaging: "Available in 1kg, 5kg, 25kg packaging options" },
    "mica-powder": { name: "Mica Powder", description: "Fine mica powder with uniform particle size distribution for cosmetics, paints, and industrial applications.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Powder.jpg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Powder.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Ground-Mica.jpg", "https://www.ratanmica.com/wp-content/uploads/2023/03/Wet-Ground-Mica-Powder.jpeg"], overview: "Premium mica powder processed to achieve consistent particle size and exceptional quality for diverse industrial and cosmetic applications.", specifications: [{ property: "Mesh Size", value: "Multiple grades (200-400 mesh)" }, { property: "Purity", value: "High grade" }, { property: "Color", value: "Natural white" }, { property: "Moisture", value: "Less than 1%" }, { property: "Form", value: "Fine powder" }], applications: ["Cosmetics", "Paints", "Plastics", "Rubber", "Construction"], packaging: "Packed in 25kg bags with moisture barrier" },
    "micronised-mica-powder": { name: "Micronised Mica Powder", description: "Ultra-fine micronised mica powder with exceptional smoothness and particle uniformity for specialized uses.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2016/04/p_micronised_img1.jpg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2016/04/p_micronised_img1.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Powder.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Ground-Mica.jpg"], overview: "Our micronised mica powder is processed using advanced micronisation technology to achieve ultra-fine particle sizes, ideal for premium applications requiring superior smoothness and dispersion.", specifications: [{ property: "Particle Size", value: "Ultra-fine (sub-micron)" }, { property: "Purity", value: "Premium grade" }, { property: "Surface Treatment", value: "Available" }, { property: "Brightness", value: "High" }, { property: "Form", value: "Ultra-fine powder" }], applications: ["Premium Cosmetics", "Specialty Coatings", "High-end Plastics", "Advanced Materials"], packaging: "Packed in 20kg bags with special moisture protection" },
    "phlogopite-mica": { name: "Phlogopite Mica", description: "Premium phlogopite mica known for excellent thermal and electrical insulation properties and chemical stability.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2016/04/Phlogopite-Mica-Scrap-1.jpg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2016/04/Phlogopite-Mica-Scrap-1.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Splittings2.jpg"], overview: "Phlogopite mica offers superior performance in high-temperature applications and excellent chemical resistance, making it the preferred choice for demanding industrial environments.", specifications: [{ property: "Type", value: "Phlogopite (Amber mica)" }, { property: "Temperature Resistance", value: "Up to 1000°C" }, { property: "Dielectric Strength", value: "Excellent" }, { property: "Chemical Resistance", value: "Superior" }, { property: "Grade", value: "Industrial/Electrical" }], applications: ["Electrical Insulation", "High Temperature Applications", "Chemical Resistant Components", "Industrial Manufacturing"], packaging: "Customized packaging based on product form and customer requirements" },
    "ruby-mica": { name: "Ruby Mica", description: "High-quality ruby mica with distinctive characteristics, suitable for specialized industrial and commercial applications.", mainImage: "https://www.ratanmica.com/wp-content/uploads/2016/04/V1-Quality-Mica.jpg", gallery: ["https://www.ratanmica.com/wp-content/uploads/2016/04/V1-Quality-Mica.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Silvered-Mica.jpg", "https://www.ratanmica.com/wp-content/uploads/2016/04/Mica-Blocks2-1.jpg"], overview: "Ruby mica is characterized by its unique properties and is used in specialized applications requiring specific performance characteristics.", specifications: [{ property: "Type", value: "Ruby mica (Muscovite)" }, { property: "Quality", value: "Premium grade" }, { property: "Color", value: "Ruby/Reddish tint" }, { property: "Clarity", value: "High" }, { property: "Grade", value: "Electronics/Specialty" }], applications: ["Electronics", "Specialty Products", "Premium Applications", "Technical Components"], packaging: "Carefully packed to preserve quality, customizable packaging available" },
  };

  const product = productData[productId || ""] || productData["wet-ground-mica"];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    const data = Object.fromEntries(new FormData(form));
    data.product_name = product.name;
    try {
      const response = await fetch("https://formspree.io/f/xgavoepb", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (response.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const relatedProducts = Object.entries(productData)
    .filter(([id]) => id !== productId)
    .slice(0, 3);

  const inputStyle = {
    background: "#ffffff",
    border: "1px solid rgba(13,148,136,0.2)",
    color: "#1a1a2e",
    borderRadius: "12px",
  };

  return (
    <div style={{ background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>

      {/* ── BREADCRUMB ── */}
      <div className="py-4 border-b" style={{ background: "#F7FAFA", borderColor: "rgba(0,0,0,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors hover:text-[#0d9488]"
            style={{ color: "#94a3b8" }}>
            <ArrowLeft className="h-4 w-4" style={{ color: "#14b8a6" }} />
            Back to Products
          </Link>
        </div>
      </div>

      {/* ── MAIN PRODUCT INFO ── */}
      <section className="py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-14">

            {/* Gallery */}
            <AnimatedSection direction="left" className="lg:col-span-6 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div key={selectedImg}
                  initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden h-96 rounded-2xl"
                  style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                  <img src={product.gallery[selectedImg]} alt={product.name}
                    className="w-full h-full object-cover" />
                </motion.div>
              </AnimatePresence>
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((img: string, idx: number) => (
                  <motion.button key={idx} onClick={() => setSelectedImg(idx)}
                    whileHover={{ scale: 1.04 }}
                    className="overflow-hidden h-24 rounded-xl transition-all cursor-pointer"
                    style={{
                      border: `2px solid ${selectedImg === idx ? "#14b8a6" : "rgba(0,0,0,0.06)"}`,
                      boxShadow: selectedImg === idx ? "0 0 12px rgba(13,148,136,0.2)" : "none",
                    }}>
                    <img src={img} alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                      style={{ opacity: selectedImg === idx ? 1 : 0.6 }} />
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-6 space-y-7">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-0.5 w-8 rounded-full" style={{ background: "#14b8a6" }} />
                  <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#0d9488" }}>Product Details</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: "#1a1a2e" }}>
                  {product.name}
                </h1>
                <p className="text-[15px] font-light leading-relaxed" style={{ color: "#475569", lineHeight: 1.8 }}>
                  {product.description}
                </p>
              </div>

              {/* Overview */}
              <div className="space-y-3 pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: "#1a1a2e" }}>
                  <FileText className="h-4 w-4" style={{ color: "#14b8a6" }} /> Product Overview
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#475569", lineHeight: 1.8 }}>{product.overview}</p>
              </div>

              {/* Applications */}
              <div className="space-y-3 pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ color: "#1a1a2e" }}>
                  <Package className="h-4 w-4" style={{ color: "#14b8a6" }} /> Key Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app: string) => (
                    <span key={app} className="px-3 py-1.5 text-xs font-semibold rounded-lg"
                      style={{ background: "#ccfbf1", color: "#0d9488" }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Packaging */}
              <div className="pt-5 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                <p className="text-sm font-light" style={{ color: "#475569" }}>
                  <span className="font-bold" style={{ color: "#0d9488" }}>Packaging: </span>
                  {product.packaging}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── SPECIFICATIONS TABLE ── */}
      <section className="py-20" style={{ background: "#F7FAFA" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-0.5 w-8 rounded-full" style={{ background: "#14b8a6" }} />
              <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#0d9488" }}>Technical Data</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#1a1a2e" }}>
              Product Specifications
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl overflow-hidden" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)" }}>
              {product.specifications.map((spec: { property: string; value: string }, idx: number) => (
                <motion.div key={spec.property}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }} viewport={{ once: true }}
                  className="grid grid-cols-2 border-b last:border-b-0 transition-colors hover:bg-[#F7FAFA]"
                  style={{ borderColor: "rgba(0,0,0,0.05)" }}>
                  <div className="px-6 py-4 text-xs font-bold uppercase tracking-wider border-r"
                    style={{ color: "#0d9488", borderColor: "rgba(0,0,0,0.05)" }}>
                    {spec.property}
                  </div>
                  <div className="px-6 py-4 text-sm font-medium" style={{ color: "#1a1a2e" }}>
                    {spec.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section className="py-24" style={{ background: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 space-y-3">
            <div className="flex items-center justify-center gap-3">
              <div className="h-0.5 w-10 rounded-full" style={{ background: "rgba(13,148,136,0.4)" }} />
              <span className="text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#0d9488" }}>Request Sample</span>
              <div className="h-0.5 w-10 rounded-full" style={{ background: "rgba(13,148,136,0.4)" }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#1a1a2e" }}>
              Enquire About {product.name}
            </h2>
            <p className="text-sm font-light" style={{ color: "#475569" }}>
              Fill in your requirements and our technical team will respond within 24 hours.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl"
              style={{ background: "#F7FAFA", border: "1px solid rgba(0,0,0,0.06)" }}>
              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { id: "pd-name", name: "name", label: "Full Name *", placeholder: "Your name", type: "text", required: true },
                  { id: "pd-company", name: "company", label: "Company", placeholder: "Company name", type: "text", required: false },
                ].map((f) => (
                  <div key={f.id} className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#94a3b8" }}>{f.label}</label>
                    <input id={f.id} name={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                      className="w-full px-4 py-3 text-sm font-light outline-none transition-all"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#0d9488"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(13,148,136,0.1)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(13,148,136,0.2)"; e.currentTarget.style.boxShadow = "none"; }} />
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  { id: "pd-email", name: "email", label: "Email *", placeholder: "your@email.com", type: "email", required: true },
                  { id: "pd-phone", name: "phone", label: "Phone *", placeholder: "+91 XXXXX XXXXX", type: "tel", required: true },
                ].map((f) => (
                  <div key={f.id} className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#94a3b8" }}>{f.label}</label>
                    <input id={f.id} name={f.name} type={f.type} placeholder={f.placeholder} required={f.required}
                      className="w-full px-4 py-3 text-sm font-light outline-none transition-all"
                      style={inputStyle}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "#0d9488"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(13,148,136,0.1)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(13,148,136,0.2)"; e.currentTarget.style.boxShadow = "none"; }} />
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Quantity Required</label>
                <input id="pd-quantity" name="quantity" type="text" placeholder="e.g. 5 MT per month"
                  className="w-full px-4 py-3 text-sm font-light outline-none transition-all"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#0d9488"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(13,148,136,0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(13,148,136,0.2)"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#94a3b8" }}>Message / Requirements *</label>
                <textarea id="pd-message" name="message" rows={5} placeholder="Describe your application, grade requirements..." required
                  className="w-full px-4 py-3 text-sm font-light outline-none transition-all resize-none"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#0d9488"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(13,148,136,0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(13,148,136,0.2)"; e.currentTarget.style.boxShadow = "none"; }} />
              </div>

              <AnimatePresence>
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="p-4 text-xs font-bold uppercase tracking-wide rounded-xl"
                    style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#16a34a" }}>
                    ✓ Enquiry sent! We'll respond within 24 hours.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="p-4 text-xs font-bold uppercase tracking-wide rounded-xl"
                    style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.2)", color: "#dc2626" }}>
                    ✕ Something went wrong. Email us at rgsminerals@gmail.com
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button type="submit" disabled={status === "submitting"}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full py-4 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 rounded-xl"
                style={{ background: "#0d9488", color: "#ffffff", opacity: status === "submitting" ? 0.7 : 1 }}>
                <Send className="w-4 h-4" />
                {status === "submitting" ? "Sending…" : "Send Product Enquiry"}
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section className="py-20" style={{ background: "#F7FAFA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#1a1a2e" }}>Related Products</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {relatedProducts.map(([id, p]: [string, any], i) => (
              <AnimatedSection key={id} delay={i * 0.1}>
                <Link to={`/products/${id}`} className="group block">
                  <motion.div whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.06)" }}
                    className="rounded-2xl overflow-hidden transition-all"
                    style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div className="h-44 overflow-hidden">
                      <motion.img src={p.mainImage} alt={p.name}
                        className="w-full h-full object-cover" whileHover={{ scale: 1.07 }}
                        transition={{ duration: 0.5 }} />
                    </div>
                    <div className="p-5 space-y-2">
                      <h3 className="font-semibold text-sm group-hover:text-[#0d9488] transition-colors" style={{ color: "#1a1a2e" }}>
                        {p.name}
                      </h3>
                      <p className="text-xs font-light line-clamp-2" style={{ color: "#475569" }}>{p.description}</p>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
