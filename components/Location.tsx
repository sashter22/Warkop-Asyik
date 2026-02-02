export default function Location() {
  const lat = -6.498362;
  const lng = 106.874725;

  return (
    <section id="location" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tighter uppercase">
            Our <span className="text-amber-500">Location</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-[40%] p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border-l-8 border-amber-500 shadow-sm flex flex-col justify-center">
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

            <a
              href={`https://www.google.com/maps?q=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-zinc-900 text-center font-bold py-4 px-8 rounded-2xl hover:bg-zinc-900 hover:text-amber-400 transition-all shadow-lg active:scale-95"
            >
              Petunjuk Jalan (Buka di Maps)
            </a>
          </div>

          <div className="lg:w-[60%] min-h-[400px] h-[450px] md:h-auto rounded-[2.5rem] overflow-hidden shadow-inner border border-slate-100 relative">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.893600000000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjknNTQuMSJTIDEwNsKwNTInMjkuMCJF!5e0!3m2!1sid!2sid!4v1706859567000!5m2!1sid!2sid`}
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
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
