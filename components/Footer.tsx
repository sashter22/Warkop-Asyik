// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 bg-white border-t border-zinc-100 scroll-mt-20"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Tombol utama */}
        <div className="mb-10">
          <a
            href="https://wa.me/6289638715710"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold py-4 px-10 rounded-full hover:bg-[#128C7E] transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <span className="text-xl">💬</span> Hubungi via WhatsApp
          </a>
        </div>

        <p className="text-zinc-400 text-[10px] tracking-[0.2em] uppercase">
          &copy; {new Date().getFullYear()} Warkop Asyik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
