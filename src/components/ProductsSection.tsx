import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b4b9f78-ba0f-4ad7-a57d-a6ee2fb82c51_800w.jpg",
    badge: "Accessories",
    title: "Accessories",
    description: "Complete your offshore setup with high-quality fishing accessories designed for durability, performance, and reliability in demanding marine environments.",
    link: "/accessories",
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3acac5be-cd22-4ef1-b094-72fcb7753382_800w.jpg?w=800&q=80",
    badge: "Reels & Reels Accessories",
    title: "Reels & Reels Accessories",
    description: "Complement your setup with premium reel accessories designed to enhance durability, efficiency, and control—ensuring smooth operation, heavy-load performance, and long-term dependability on every offshore expedition.",
    link: "/reels-accessories",
  },
  {
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0e0a442-0de4-4039-9e73-1d09ca7c7d45_800w.jpg",
    badge: "Commercial Grade",
    title: "High-Value & Commercial-Grade Products",
    description: "Industrial equipment for commercial operations including electric pallet trucks, forklifts, stackers, and weighing solutions.",
    link: "/commercial-grade",
  },
  {
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    badge: "Refrigeration & Farming",
    title: "Commercial Refrigeration & Farming Equipment",
    description: "Professional-grade refrigeration from Hoshizaki and Turbo Air, plus compact track loaders and dumpers for farming operations.",
    link: "/refrigeration",
  },
];

const ProductsSection = () => {
  return (
    <section className="sm:px-6 mt-24 px-4" id="units">
      <div className="flex flex-col md:flex-row mb-12 items-end justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-4">
            The Future is Regenerative.
          </h2>
          <p className="font-light text-stone-500">
            We don't just list homes; we verify habitats. From off-grid solar capacity to high-speed
            fiber availability, we bridge the gap between nature and technology.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.title}
            {...product}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
