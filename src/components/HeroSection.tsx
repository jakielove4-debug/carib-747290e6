import { motion } from "framer-motion";
import { ArrowRight, Instagram, Phone, ArrowUpRight, Menu } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="min-h-[700px] overflow-hidden bg-stone-900 w-full h-[95vh] rounded-4xl relative shadow-2xl">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1618425789617-2764b8bea7e7?w=2560&q=80"
        alt="Modern Villa"
        className="transition-transform duration-[20s] hover:scale-105 ease-linear opacity-90 w-full h-full object-cover absolute inset-0"
      />

      {/* Gradient Overlay */}
      <div className="bg-gradient-to-b from-black/30 via-transparent to-black/60 absolute inset-0" />

      {/* Navigation Bar */}
      <nav className="z-20 flex sm:px-10 pt-6 px-6 pb-6 relative items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <span className="text-lg font-medium text-white tracking-tight">
            Carib Petroleum inc
          </span>
        </div>

        {/* Desktop Menu (Pill Shape) */}
        <div className="hidden md:flex gap-1 glass-nav py-1.5 px-2 items-center">
          <a
            href="#about"
            className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full py-2 px-5"
          >
            About US
          </a>
          <a
            href="#units"
            className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full py-2 px-5"
          >
            Equipment
          </a>
          <a
            href="#video"
            className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full py-2 px-5"
          >
            Product
          </a>
          <a
            href="#contact"
            className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full py-2 px-5"
          >
            Contact
          </a>
          <a
            href="/tracking"
            className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full py-2 px-5"
          >
            Track Shipment
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 bg-white/10 backdrop-blur-md rounded-full text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Social/Contact Icons (Top Right) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="tel:3055634807"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-white pl-5 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105"
          >
            <span className="text-sm font-medium text-stone-900">Get a quote</span>
            <span className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-4 right-4 glass-card rounded-2xl p-4 z-30"
        >
          <div className="flex flex-col gap-2">
            <a href="#about" className="text-white py-2 px-4 hover:bg-white/10 rounded-lg">About US</a>
            <a href="#units" className="text-white py-2 px-4 hover:bg-white/10 rounded-lg">Equipment</a>
            <a href="#video" className="text-white py-2 px-4 hover:bg-white/10 rounded-lg">Product</a>
            <a href="#contact" className="text-white py-2 px-4 hover:bg-white/10 rounded-lg">Contact</a>
            <a href="/tracking" className="text-white py-2 px-4 hover:bg-white/10 rounded-lg">Track Shipment</a>
          </div>
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="sm:p-10 z-10 flex flex-col md:flex-row gap-8 w-full p-6 pb-12 absolute bottom-0 left-0 items-end justify-between">
        {/* Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-2xl"
        >
          <span className="inline-block uppercase text-xs font-medium text-white tracking-wider bg-white/20 border border-white/10 rounded-full mb-4 py-1 px-3 backdrop-blur-md">
            Commercial fishing product hub
          </span>
          <h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">
            Powering Oceans. Equipping Champion
          </h1>
          <p className="leading-relaxed text-lg font-light text-white/80 max-w-lg mb-8">
            Not for casual anglers—built for those who chase giants.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-4 bg-white text-stone-900 pl-6 pr-2 py-2 rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
          >
            <span className="text-base font-medium">Get the presentation</span>
            <span className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
              <ArrowRight className="w-5 h-5 text-white" />
            </span>
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default HeroSection;
