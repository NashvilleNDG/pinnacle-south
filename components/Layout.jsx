import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children, headerVariant = "auto" }) {
  return (
    <div className="min-h-screen bg-cream text-textDark">
      <Header variant={headerVariant} />
      <main className="pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}

