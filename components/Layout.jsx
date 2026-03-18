import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children, headerVariant = "auto" }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-textDark">
      <Header variant={headerVariant} />
      <main className="pt-[72px] sm:pt-[88px]">{children}</main>
      <Footer />
    </div>
  );
}

