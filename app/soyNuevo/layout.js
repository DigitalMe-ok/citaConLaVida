import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Soy Nuevo | Cita con la Vida"
};

export default function SoyNuevoLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
