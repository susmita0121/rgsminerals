import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry from "react-responsive-masonry";
import { X, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  height?: string;
}

interface MasonryGalleryProps {
  images: GalleryImage[];
  columns?: number;
  gutter?: string;
}

export default function MasonryGallery({ images, columns = 3, gutter = "12px" }: MasonryGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = useCallback((idx: number) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const next = useCallback(() => setLightbox((prev) => (prev !== null ? (prev + 1) % images.length : null)), [images.length]);
  const prev = useCallback(() => setLightbox((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null)), [images.length]);

  return (
    <>
      <Masonry columnsCount={columns} gutter={gutter}>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => openLightbox(idx)}
          >
            <motion.img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover"
              style={{ height: img.height || "auto", minHeight: 200 }}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f1f]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-between p-5">
              <span className="text-xs font-bold uppercase tracking-widest text-white">{img.alt}</span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(13,148,136,0.8)", backdropFilter: "blur(10px)" }}>
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </Masonry>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] flex items-center justify-center"
            style={{ background: "rgba(10,31,31,0.95)", backdropFilter: "blur(20px)" }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center z-50 transition-all hover:scale-110"
              style={{ background: "rgba(13,148,136,0.2)", border: "1px solid rgba(13,148,136,0.3)" }}>
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev/Next */}
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-50 transition-all hover:scale-110 text-2xl text-white"
              style={{ background: "rgba(13,148,136,0.2)", border: "1px solid rgba(13,148,136,0.3)" }}>
              ‹
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center z-50 transition-all hover:scale-110 text-2xl text-white"
              style={{ background: "rgba(13,148,136,0.2)", border: "1px solid rgba(13,148,136,0.3)" }}>
              ›
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
            />

            {/* Caption */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="absolute bottom-8 text-center">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#14b8a6" }}>
                {images[lightbox].alt}
              </span>
              <span className="ml-4 text-xs" style={{ color: "#94a3b8" }}>
                {lightbox + 1} / {images.length}
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
