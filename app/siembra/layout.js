import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Sembrar | Cita con la Vida",
  description: "Actividades, reuniones y visión de Cita kids.",
};

export default function SiembraLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
