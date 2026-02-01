import { menuWarkop } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tighter uppercase">
            Menu <span className="text-amber-500">List</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {menuWarkop.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
