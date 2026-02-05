import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="sm:px-6 mt-24 px-4" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-6">
            OUR HISTORY
          </h2>
          <p className="leading-relaxed text-lg font-light text-stone-500 mb-8">
            Founded in 1986 by Carlos Gamboa, Carib Petroleum Inc. was established to market and
            distribute oil products across the United States, Caribbean countries, Central America,
            and South America. Over nearly four decades, the company has expanded beyond energy
            distribution to become a trusted supplier of premium marine and fishing equipment for
            professionals and enthusiasts alike. Today, Carib Petroleum Inc. operates from its
            headquarters in Miami, Florida, supported by strategic storage and distribution
            facilities in Curaçao and Colombia. Leveraging our strong logistics network and deep
            regional expertise, we now retail a carefully curated selection of high-performance
            fishing products, including fishing nets, reels, rods, waders, collectibles, and
            exclusive offshore gear designed for the world's most demanding fishing environments.
          </p>
          <p className="leading-relaxed text-base text-stone-500 mb-8">
            Premium Fishing Gear for Serious Anglers At Carib Petroleum Inc., we specialize in
            top-tier, commercial-grade fishing equipment trusted by big-game anglers, charter
            captains, and offshore professionals. Our product lineup reflects our commitment to
            performance, durability, and innovation, ensuring our customers are equipped for success
            in deep waters.
          </p>
          
          <h3 className="text-xl font-medium text-stone-900 mt-8 mb-4">
            Refrigeration, Harvesters & Industrial Dishwashers
          </h3>
          <p className="leading-relaxed text-base text-stone-500 mb-4">
            At Carib Petroleum Inc, we go beyond energy solutions to supply high-performance commercial and agricultural equipment that supports businesses across hospitality, agriculture, and food service industries.
          </p>
          <p className="leading-relaxed text-base text-stone-500 mb-4">
            <strong className="text-stone-700">Premium Commercial Refrigeration:</strong> We supply reliable, energy-efficient commercial refrigerators and cold-storage solutions designed for restaurants, supermarkets, farms, warehouses, and food distribution facilities.
          </p>
          <p className="leading-relaxed text-base text-stone-500 mb-4">
            <strong className="text-stone-700">Agricultural Harvesting Equipment:</strong> We provide access to trusted John Deere and Case IH harvesters, known worldwide for their performance, reliability, and advanced harvesting technology.
          </p>
          <p className="leading-relaxed text-base text-stone-500 mb-4">
            <strong className="text-stone-700">Industrial Dishwashing Systems:</strong> For hotels, restaurants, hospitals, and large-scale kitchens, we supply Hobart and Winterhalter industrial dishwashers engineered for speed, sanitation, and efficiency.
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:col-span-7 relative"
        >
          <div className="relative h-[500px] w-full rounded-4xl overflow-hidden group">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b81e0ac5-1388-4ec2-b844-870d3726bc9f_3840w.jpg"
              alt="Interior Design"
              className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-block">
                <p className="text-stone-900 font-medium">
                  Modern aesthetics with natural materials
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
