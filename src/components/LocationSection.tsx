import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Over 35 years of industry experience",
  "Strategic presence across the U.S., Caribbean, and Latin America",
  "Access to exclusive, high-performance fishing gear",
  "Trusted supplier for commercial, charter, and elite sport-fishing clients",
  "Commitment to quality, authenticity, and expert support",
];

const LocationSection = () => {
  return (
    <section className="overflow-hidden text-white bg-stone-900 rounded-4xl mt-24 relative">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3acac5be-cd22-4ef1-b094-72fcb7753382_3840w.jpg"
          alt="Offshore Fishing"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent" />

      <div className="sm:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 z-10 p-8 relative gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="uppercase block text-sm font-medium text-stone-400 tracking-wide mb-2">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-medium tracking-tight mb-6">Why Choose Carib Petroleum Inc.?</h2>
          
          <div className="mb-8 space-y-4">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5 flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-stone-300">{reason}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 mb-6">
            <h3 className="text-xl font-semibold mb-3">Equip Your Vessel with the Best</h3>
            <p className="text-sm text-stone-200">
              When performance matters and failure is not an option, Carib Petroleum Inc. delivers equipment that meets the highest standards of offshore fishing excellence.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <p className="text-stone-300 leading-relaxed">
              Explore our premium fishing gear and elevate your offshore experience. Complete your offshore setup with high-quality fishing accessories designed for durability, performance, and reliability in demanding marine environments. Our accessories are carefully selected to complement professional-grade reels, rods, and systems, ensuring seamless performance on every trip.
            </p>
            <p className="text-stone-400 mt-4 text-sm">
              From essential rigging components to specialized offshore add-ons, each accessory meets the standards required for professional operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
