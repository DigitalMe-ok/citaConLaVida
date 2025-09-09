import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Ministerio de Hombres | Cita con la Vida",
  description: "Actividades, reuniones y visión del Ministerio de Hombres.",
};

export default function HombresLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
