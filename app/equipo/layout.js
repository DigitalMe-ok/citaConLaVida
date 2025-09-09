import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nuestro equipo | Cita con la vida",
  description: "Iglesia evangelica",
};

export default function EquipoLayout({ children }) {
  return (
        <>
        {children}

        </>

  );
}
