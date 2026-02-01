export default function Location() {
  // Koordinat lokasi warkop
  const lat = -6.498362;
  const lng = 106.874725;

  return (
    <section id="location" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* HEADER KE TENGAH */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tighter uppercase">
            Our <span className="text-amber-500">Location</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Kartu Alamat */}
          <div className="lg:w-1/2 p-10 bg-slate-50 rounded-3xl border-l-8 border-amber-500 shadow-sm flex flex-col justify-center">
            <div className="mb-6">
              <h4 className="font-bold text-xl text-zinc-900 mb-2">
                📍 Alamat
              </h4>
              <p className="text-zinc-600 font-medium">
                Jl. Branta Mulya No.24, Karang Asem Timur, Citeureup, Bogor
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-xl text-zinc-900 mb-2">
                ⏰ Jam Buka
              </h4>
              <p className="text-zinc-600 font-medium">08.00 - 22.00 WIB</p>
            </div>

            {/* Link Google Maps Presisi */}
            <a
              href={`https://www.google.com/maps?q=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-zinc-900 text-center font-bold py-4 px-8 rounded-2xl hover:bg-zinc-900 hover:text-amber-400 transition-all shadow-lg active:scale-95"
            >
              Petunjuk Jalan (Buka di Maps)
            </a>
          </div>

          {/* Wrapper Google Maps dengan Embed Koordinat */}
          <div className="lg:w-1/2 min-h-[400px] rounded-3xl overflow-hidden shadow-sm border border-slate-100">
            <iframe
              src={`https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
