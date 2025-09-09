// app/ministerios/adicciones/layout.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Ministerio de Adicciones | Cita con la Vida",
  description:
    "Un espacio de apoyo, fe y restauración para quienes buscan libertad y sanidad en Cristo.",
};

export default function AdiccionesLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
