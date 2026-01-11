import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";

const features = [
  "Premium, Commercial-Grade Equipment",
  "Authorized Access to Elite Brands",
  "Built for Extreme Offshore Conditions",
  "Strategic Global Reach",
];

const VideoSection = () => {
  return (
    <section
      id="video"
      className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-6"
    >
      {/* Video Column */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-black"
      >
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d39f590-8fe6-419c-9f3a-9291159b4018_1600w.png"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
          alt="Video thumbnail"
        />
        <div className="flex absolute inset-0 items-center justify-center">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
            <div className="flex bg-white w-14 h-14 rounded-full pl-1 items-center justify-center">
              <Play className="w-6 h-6 fill-stone-900 text-stone-900" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-6">
          Why Choose US
        </h2>
        <div className="prose prose-stone mb-8">
          <p className="leading-relaxed text-lg font-light text-stone-500">
            Founded in 1986, Carib Petroleum Inc. brings nearly four decades of operational
            excellence across the U.S., Caribbean, Central, and South America. Our long-standing
            presence means reliability, industry knowledge, and a reputation built on results.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" />
              <span className="text-stone-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200">
          <p className="text-xl font-medium text-stone-900 italic">
            "For us, reputation matters more than a quick deal."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
