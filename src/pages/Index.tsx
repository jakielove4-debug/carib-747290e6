import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LocationSection from "@/components/LocationSection";
import ProductsSection from "@/components/ProductsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="sm:p-4 lg:p-6 max-w-[1600px] mx-auto p-2">
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <ProductsSection />
      <LeadMagnetSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
