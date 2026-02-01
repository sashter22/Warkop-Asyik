// src/data/menu.ts
export interface MenuItem {
  id: number;
  nama: string;
  desc: string;
  icon: string;
}

export const menuWarkop: MenuItem[] = [
  { id: 1, nama: "Susu", desc: "Susu segar hangat atau dingin", icon: "🥛" },
  { id: 2, nama: "Kopi Susu", desc: "Kopi mantap campur susu", icon: "🥤" },
  {
    id: 3,
    nama: "Kopi Hitam",
    desc: "Kopi hitam murni bikin melek",
    icon: "☕",
  },
  { id: 4, nama: "Teh Manis", desc: "Teh seduh segar gula asli", icon: "🍵" },
  { id: 5, nama: "Nutrisari", desc: "Seger jeruk Nutrisari", icon: "🍊" },
  { id: 6, nama: "Gorengan", desc: "Gorengan panas renyah", icon: "🥨" },
  { id: 7, nama: "Mie Rebus", desc: "Mie rebus telur & sawi", icon: "🍜" },
  { id: 8, nama: "Mie Goreng", desc: "Mie goreng gurih pedas", icon: "🍝" },
  { id: 9, nama: "Pecel Ayam", desc: "Pecel Ayam sambal lalap", icon: "🍗" },
  { id: 10, nama: "Pecel Lele", desc: "Lele goreng garing jos", icon: "🐟" },
  { id: 11, nama: "Ayam Penyet", desc: "Ayam penyet pedas nampol", icon: "🌶️" },
  { id: 12, nama: "Jasjus", desc: "Minuman Jasjus segar", icon: "🍹" },
  { id: 13, nama: "Seblak", desc: "Pedasnya nagih!!", icon: "🥣" },
];
