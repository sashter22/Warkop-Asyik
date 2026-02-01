"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      // Efek blur/putih navbar pas scroll
      setScrolled(window.scrollY > 50);

      // LOGIKA DETEKSI SECTION AKTIF:
      // Kita cek semua section, mana yang lagi nangkring di depan mata
      const sections = ["home", "about", "menu", "location", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Kalau bagian atas section sudah masuk area layar (offset 100px)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Location", href: "#location" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 py-4 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-[60]">
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter uppercase"
        >
          <span className={scrolled || isOpen ? "text-zinc-900" : "text-white"}>
            WARKOP
          </span>
          <span className="text-amber-500 ml-1">ASYIK</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-xs font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${
                activeHash === item.href
                  ? "text-amber-500"
                  : scrolled
                    ? "text-zinc-600"
                    : "text-white/80"
              }`}
            >
              {item.name}
              {activeHash === item.href && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500" />
              )}
            </a>
          ))}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled || isOpen ? "text-zinc-900" : "text-white"}`}
        >
          <div className="w-6 h-5 relative flex flex-col justify-between items-end">
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"}`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : "w-6"}`}
            />
            <span
              className={`h-0.5 bg-current transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-6"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile side menu */}
      <>
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-500 md:hidden z-[40] ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 h-screen w-[75%] max-w-[300px] bg-white shadow-2xl transition-transform duration-500 ease-in-out md:hidden z-[50] flex flex-col p-10 pt-32 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6">
            {menuItems.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive ? "text-amber-500" : "text-zinc-400"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-1/2"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="mt-auto border-t border-zinc-100 pt-8">
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-loose">
              Citeureup, Jawa Barat <br />© Warkop Asyik 2026
            </p>
          </div>
        </div>
      </>
    </nav>
  );
}
