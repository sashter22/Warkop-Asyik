// src/components/Home.tsx
export default function HomeHero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gambar Kopi dari Unsplash (Bebas Hak Cipta) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay biar tulisan tetap terbaca */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic uppercase leading-none">
          <span className="text-white">Ngopi, Nyantai,</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 drop-shadow-lg">
            Nikmat
          </span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl mx-auto font-light leading-relaxed">
          Tempat pelarian paling pas dari penatnya dunia. Nikmati kopi pilihan
          dan obrolan hangat dalam satu meja.
        </p>
      </div>
    </section>
  );
}
