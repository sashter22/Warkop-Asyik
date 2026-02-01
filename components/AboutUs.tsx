// src/components/AboutUs.tsx
export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white scroll-mt-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {" "}
        {/* Tambah padding biar konten lebih ke tengah */}
        <div className="grid lg:grid-cols-12 items-center gap-12 lg:gap-16">
          {/* SISI KIRI: VISUAL (Dibuat lebih menonjol) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] lg:max-w-none">
              {/* Dekorasi Belakang (Dibuat lebih besar) */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-100 rounded-[3rem] -z-10"></div>

              {/* Frame Foto Utama */}
              <div className="aspect-[3/4] bg-zinc-50 rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <div className="w-full h-full flex items-center justify-center text-zinc-300 font-medium italic p-12 text-center leading-relaxed">
                  [ Foto Suasana Hangat Warkop Asyik ]
                </div>
              </div>

              {/* Badge SINCE 2026 (Diperhalus posisinya) */}
              <div className="absolute -top-8 -left-8 bg-amber-500 text-white py-4 px-6 rounded-2xl shadow-xl rotate-[-12deg] z-20 border-4 border-white">
                <span className="font-black text-lg uppercase tracking-tight">
                  Since 2025
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Our Story
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 mb-8 tracking-tighter uppercase leading-[0.9]">
              Lebih dari <br />
              <span className="text-amber-500 italic">Sekadar Warkop</span>
            </h2>

            <div className="space-y-6 text-zinc-500 leading-relaxed text-lg text-justify max-w-2xl">
              <p>
                Warkop Asyik bukan sekeder tempat minum kopi. Kami adalah ruang
                singgah di tengah ramainya suasana Citeureup yang dirancang
                khusus untuk kenyamanan Anda.
              </p>
              <p>
                Berawal dari keinginan untuk menciptakan titik temu yang hangat,
                kami hadir dengan aroma kopi yang menenangkan dan keakraban yang
                tulus. Kami percaya setiap cangkir kopi memiliki ceritanya
                sendiri.
              </p>
              <p className="p-6 bg-zinc-50 rounded-2xl border-l-4 border-amber-500 italic text-zinc-700">
                "Baik Anda butuh tempat melepas penat, mencari inspirasi, atau
                sekadar menikmati semangkuk{" "}
                <span className="text-amber-600 font-bold">
                  Seblak pedas yang autentik
                </span>
                , Warkop Asyik adalah rumah kedua Anda."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
