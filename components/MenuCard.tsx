// src/components/MenuCard.tsx
export default function MenuCard({ item }: { item: any }) {
  return (
    <div className="p-8 bg-white rounded-3xl border border-zinc-100 border-l-[6px] border-l-amber-500 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col items-start relative overflow-hidden">
      {/* Icon/Emoji Mentah */}
      <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-300">
        {item.icon || "🍽️"}
      </div>

      {/* Nama Menu (Pastikan pakai .nama) */}
      <h3 className="font-bold text-zinc-900 text-xl mb-2">{item.nama}</h3>

      {/* Deskripsi Menu */}
      <p className="text-zinc-500 text-sm leading-relaxed mb-6">{item.desc}</p>

      {/* Garis aksen bawah kecil (pemanis tambahan) */}
      <div className="mt-auto w-8 h-1 bg-amber-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
    </div>
  );
}
