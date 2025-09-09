// app/layouts/MinisterioLayout.jsx
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MinisterioLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
