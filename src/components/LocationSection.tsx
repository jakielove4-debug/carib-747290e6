import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="overflow-hidden text-white bg-stone-900 rounded-4xl mt-24 relative">
      <div className="absolute inset-0 opacity-40">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3acac5be-cd22-4ef1-b094-72fcb7753382_3840w.jpg"
          alt="Bali Coast"
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
            The Market Shift
          </span>
          <h2 className="text-4xl font-medium tracking-tight mb-6">Why?</h2>
          <p className="leading-relaxed text-lg font-light text-stone-300 mb-8">
            Users are demanding "community-in-a-box" and prioritizing on-site wellness amenities
            over square footage. Habitat.s indexes the data that actually matters to the modern
            buyer
          </p>

          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                <span className="text-sm font-bold">01</span>
              </div>
              <span className="text-stone-300">
                Define your Lifestyle: Stop filtering by square footage. Set your parameters for air
                quality, community vibe, and wellness amenities.
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                <span className="text-sm font-bold">02</span>
              </div>
              <span className="text-stone-300">
                Verified Intelligence: Real-time data on AQI (Air Quality), noise pollution, and
                verified internet upload speeds. No surprises.
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                <span className="text-sm font-bold">03</span>
              </div>
              <span className="text-stone-300">
                Sovereign Living: Identify properties with energy independence (solar/water) and
                regenerative design credentials.
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <TrendingUp className="w-6 h-6 text-emerald-400 mb-3" />
            <p className="text-sm text-stone-200">
              Legacy portals were built to sell concrete boxes. Habitat.s is built to find your
              sanctuary. See why the modern nomad is switching.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
