import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  image: string;
  badge: string;
  title: string;
  description: string;
  delay?: number;
}

const ProductCard = ({ image, badge, title, description, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group hover:shadow-xl transition-all duration-300 bg-card rounded-3xl p-2 relative shadow-sm"
    >
      <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
        <img
          src={image}
          className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover"
          alt={title}
        />
        <div className="text-xs font-semibold bg-white/90 rounded-full py-1 px-3 absolute top-4 right-4 backdrop-blur">
          {badge}
        </div>
      </div>
      <div className="px-4 pb-6">
        <h3 className="text-xl font-semibold text-stone-900 mb-2">{title}</h3>
        <p className="text-sm text-stone-500 mb-4">{description}</p>
        <button className="hover:bg-stone-900 hover:text-white transition-colors flex gap-2 font-medium text-stone-900 w-full border border-stone-200 rounded-xl py-3 items-center justify-center">
          Check Details <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
