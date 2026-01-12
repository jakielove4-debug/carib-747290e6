import { motion } from "framer-motion";
import { Play, CheckCircle2 } from "lucide-react";

const whyChooseUs = [
  { title: "Decades of Proven Experience", description: "Founded in 1986, Carib Petroleum Inc. brings nearly four decades of operational excellence across the U.S., Caribbean, Central, and South America." },
  { title: "Premium, Commercial-Grade Equipment", description: "We specialize in high-performance offshore fishing gear designed for serious anglers, charter captains, and commercial operations." },
  { title: "Authorized Access to Elite Brands", description: "As a trusted retailer of Lindgren-Pitman (LP) equipment, we provide access to some of the most advanced electric fishing systems in the world." },
  { title: "Built for Extreme Offshore Conditions", description: "Our products are engineered to perform under heavy loads, deep drops, and harsh marine environments." },
  { title: "Strategic Global Reach", description: "With headquarters in Miami, Florida and distribution facilities in Curaçao and Colombia, we ensure efficient logistics and timely delivery." },
  { title: "Expert Support & Trusted Guidance", description: "We provide knowledge-backed recommendations to help customers choose the right gear for their vessel and fishing conditions." },
  { title: "Trusted by Professionals Worldwide", description: "Our clients include commercial operators, charter fleets, tournament anglers, and offshore professionals." },
  { title: "Uncompromising Quality & Integrity", description: "Quality, authenticity, and customer trust are the foundation of everything we do." },
];

const VideoSection = () => {
  return (
    <section id="video" className="mt-24 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-black">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d39f590-8fe6-419c-9f3a-9291159b4018_1600w.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" alt="Video thumbnail" />
          <div className="flex absolute inset-0 items-center justify-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
              <div className="flex bg-white w-14 h-14 rounded-full pl-1 items-center justify-center">
                <Play className="w-6 h-6 fill-stone-900 text-stone-900" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-6">Why Choose Carib Petroleum Inc.</h2>
          <div className="space-y-4 mb-8">
            {whyChooseUs.slice(0, 4).map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" />
                <span className="text-stone-700">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-stone-200">
            <p className="text-xl font-medium text-stone-900 italic">"When performance is critical and failure is not an option, professionals choose Carib Petroleum Inc."</p>
          </div>
        </motion.div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyChooseUs.map((item, index) => (
          <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h3 className="text-lg font-semibold text-stone-900 mb-3">{item.title}</h3>
            <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
