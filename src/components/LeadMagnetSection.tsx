import { motion } from "framer-motion";
import { Download } from "lucide-react";

const LeadMagnetSection = () => {
  return (
    <section className="mt-24">
      <div className="sm:p-12 lg:p-20 flex flex-col overflow-hidden text-center bg-stone-100 rounded-4xl p-8 relative items-center">
        {/* Decorative blurred circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl"
        >
          <span className="text-stone-500 font-medium uppercase text-xs tracking-wider mb-4 block">
            Exclusive Offer
          </span>
          <h2 className="sm:text-5xl text-3xl font-medium text-stone-900 tracking-tight mb-6">
            Unlock Access to elite fishing Equipment reserved for expert
          </h2>
          <p className="text-lg font-light text-stone-600 mb-8">
            Unlock access to elite offshore fishing equipment reserved for serious anglers and
            professionals. Our exclusive offers provide limited-time opportunities on premium reels,
            advanced systems, and complete offshore setups—without compromising performance or
            quality. Availability is limited. When the opportunity arises, it's because we've
            secured something exceptional.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 hover:bg-stone-800 transition-all hover:scale-105 shadow-stone-900/10 text-white bg-stone-900 rounded-full py-4 px-8 shadow-lg"
          >
            <span>Contact us for a quote</span>
            <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
