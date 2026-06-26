import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import MobileBanner from "./components/layout/MobileBanner.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import ServicesSection from "./components/sections/ServicesSection.jsx";
import { siteConfig } from "./config/siteConfig";

export default function App() {
  return (
    <>
      <Navbar config={siteConfig} />
      <main id="main-content">
        <HeroSection config={siteConfig} />
        <ServicesSection config={siteConfig} />
        <AboutSection config={siteConfig} />
        <ContactSection config={siteConfig} />
      </main>
      <Footer config={siteConfig} />
      <MobileBanner label={siteConfig.mobileBanner.label} href={siteConfig.mobileBanner.href} />
    </>
  );
}
