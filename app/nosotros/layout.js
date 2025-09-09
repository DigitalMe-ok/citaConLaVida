/* import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Nosotros | Cita con la vida",
  description: "Iglesia evangelica",
};

export default function NosotrosLayout({ children }) {
  return (
      <>
        {children}
        </>
  );
}
 */
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
  title: "Nosotros | Cita con la vida",
  description: "Iglesia evangélica",
};

export default function NosotrosLayout({ children }) {
  return (
    <>
     {children}
      
    </>
  );
}
