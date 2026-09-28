import { Outlet, Link, useLocation } from "react-router";
import { Mail, Phone, MapPin, Menu, X, Instagram, ArrowUp, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logoSrc from "../../imports/Screenshot_2026-05-30_123424.png";
import SmoothScroll from "./SmoothScroll";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);
  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/quality", label: "Quality & Infrastructure" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* ── NAVBAR — white bg, always visible logo ── */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
          style={{
            background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "0 1px 0 rgba(0,0,0,0.05)",
          }}
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex justify-between items-center h-[72px]">
              {/* Logo — always visible */}
              <Link to="/" className="flex items-center gap-3 group">
                <motion.img
                  src={logoSrc} alt="RGS Minerals"
                  className="h-9 w-auto"
                  style={{ display: "block" }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                <div>
                  <div className="text-[15px] font-bold tracking-tight" style={{ color: "#1a1a2e" }}>
                    RGS Minerals
                  </div>
                  <div className="text-[10px] font-semibold tracking-wider" style={{ color: "#0d9488" }}>
                    Private Limited
                  </div>
                </div>
              </Link>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link key={link.path} to={link.path}
                      className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-300"
                      style={{ color: isActive ? "#0d9488" : "#475569" }}
                      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#0d9488"; }}
                      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#475569"; }}>
                      {link.label}
                      {isActive && (
                        <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                          style={{ background: "#0d9488" }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-2.5 text-[13px] font-semibold rounded-lg flex items-center gap-2 transition-all"
                    style={{ background: "#0d9488", color: "#ffffff" }}>
                    Get Quote <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>
                </Link>
              </div>

              {/* Mobile toggle */}
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2" style={{ color: "#1a1a2e" }}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t"
                style={{ background: "#ffffff", borderColor: "rgba(0,0,0,0.06)" }}
              >
                <div className="px-5 py-4 flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div key={link.path} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                      <Link to={link.path}
                        className="block px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                        style={{
                          color: location.pathname === link.path ? "#0d9488" : "#475569",
                          background: location.pathname === link.path ? "rgba(13,148,136,0.05)" : "transparent",
                        }}>
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <div className="mt-3 px-4">
                    <Link to="/contact">
                      <button className="w-full py-3 text-sm font-semibold rounded-lg" style={{ background: "#0d9488", color: "#ffffff" }}>
                        Get Quote
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Main content — push below fixed nav */}
        <main className="flex-1 pt-[72px]"><Outlet /></main>

        {/* ── FOOTER ── */}
        <footer style={{ background: "#0a1f1f" }}>
          <div className="h-0.5" style={{ background: "linear-gradient(90deg, #0d9488, #14b8a6, #0d9488)" }} />
          <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
              {/* Brand */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <img src={logoSrc} alt="RGS Minerals" className="h-10 w-auto" style={{ filter: "invert(1) brightness(2)" }} />
                  <div>
                    <div className="text-base font-bold" style={{ color: "#f0f4f8" }}>RGS Minerals</div>
                    <div className="text-[10px] font-semibold tracking-wider" style={{ color: "#14b8a6" }}>Private Limited</div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed font-light" style={{ color: "#94a3b8" }}>
                  Premium mica minerals from India's mineral heartland — processed with precision, shipped globally.
                </p>
                <a href="https://www.instagram.com/rgsminerals/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold hover:text-[#14b8a6] transition-colors" style={{ color: "#94a3b8" }}>
                  <Instagram className="w-4 h-4" style={{ color: "#14b8a6" }} /> @rgsminerals
                </a>
              </div>

              {/* Quick links */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-6" style={{ color: "#14b8a6" }}>Quick Links</h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="text-sm font-light hover:text-[#14b8a6] transition-colors" style={{ color: "#94a3b8" }}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-6" style={{ color: "#14b8a6" }}>Our Minerals</h3>
                <ul className="space-y-3 text-sm font-light" style={{ color: "#94a3b8" }}>
                  {["Wet Ground Mica Powder", "Mica Flakes", "Phlogopite Scrap", "Muscovite Sheets", "Micronised Fillers"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] mb-6" style={{ color: "#14b8a6" }}>Contact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#14b8a6" }} />
                    <span className="text-sm font-light" style={{ color: "#94a3b8" }}>No.32/54 Flat No.5, Sreyas Champakam Apartments, Abhiramapuram 3rd Street, Teynampet, Chennai – 600018</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#14b8a6" }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: "#f0f4f8" }}>+91 89396 32702</div>
                      <div className="text-sm font-medium mt-1" style={{ color: "#f0f4f8" }}>+91 95516 55524</div>
                      <div className="text-[10px] font-semibold tracking-wider mt-0.5" style={{ color: "#14b8a6" }}>WHATSAPP / ALTERNATE</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#14b8a6" }} />
                    <span className="text-sm font-light" style={{ color: "#94a3b8" }}>rgsminerals@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>


            <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-light"
              style={{ borderColor: "rgba(255,255,255,0.06)", color: "#94a3b8" }}>
              <span>© {new Date().getFullYear()} RGS Minerals Private Limited. All rights reserved.</span>
              <div className="flex items-center gap-5">
                <Link to="/about" className="hover:text-[#14b8a6] transition-colors">Privacy</Link>
                <Link to="/contact" className="hover:text-[#14b8a6] transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* BACK TO TOP */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: "#0d9488", color: "#ffffff" }}>
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}
