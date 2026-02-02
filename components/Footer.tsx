// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-24 bg-zinc-950 text-white scroll-mt-20 relative overflow-hidden"
    >
      {/* Efek Cahaya Amber Samar (Biar Gak Mati Banget Hitamnya) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo dengan Garis Bawah Kecil */}
          <div className="mb-12 text-center">
            <h3 className="text-4xl font-black tracking-tighter uppercase mb-3">
              WARKOP <span className="text-amber-500">ASYIK</span>
            </h3>
            <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-4"></div>
            <p className="text-zinc-500 text-sm max-w-sm mx-auto leading-relaxed italic">
              "Tempat nongkrong santai, rasa juara, harga saudara."
            </p>
          </div>

          {/* Tombol WhatsApp dengan Glow Effect */}
          <div className="mb-20 w-full max-w-[280px] md:max-w-xs">
            <a
              href="https://wa.me/6289638715710?text=Halo%20Warkop%20Asyik!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-5 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-[1.03] active:scale-95 w-full"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform">
                💬
              </span>
              <span className="tracking-widest text-xs">HUBUNGI WHATSAPP</span>
            </a>
          </div>

          {/* Copyright dengan Jarak Huruf Extra */}
          <div className="w-full pt-12 border-t border-zinc-900/50 text-center">
            <p className="text-zinc-600 text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-medium">
              &copy; {new Date().getFullYear()} Warkop Asyik. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
