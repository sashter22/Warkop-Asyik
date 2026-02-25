// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Warkop Asyik - Tempat Ngopi & Makan Seblak Hits di Citeureup",
  description:
    "Cari tempat nongkrong asyik di Citeureup? Warkop Asyik sedia kopi mantap, seblak pedas, dan aneka cemilan. Lokasi strategis di Karang Asem Timur.",
  keywords: [
    "Warkop Citeureup",
    "Kopi Bogor",
    "Seblak Citeureup",
    "Tempat Nongkrong Bogor",
    "Warkop Asyik",
  ],
  // TINGGAL TAMBAHIN INI AJA, KANG:
  verification: {
    google: "C7DTJi-DYv2phdD54oMvnPeDwqg86AaYDF0Hj2Fk2lY",
  },
  openGraph: {
    title: "Warkop Asyik - Citeureup",
    description: "Tempat ngopi paling asyik di Citeureup Bogor.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        <Navbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
