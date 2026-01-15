import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

import hoshizakiR3aHs from "@/assets/hoshizaki-r3a-hs.jpg";
import hoshizakiR3aFg from "@/assets/hoshizaki-r3a-fg.jpg";
import hoshizakiPt2a from "@/assets/hoshizaki-pt2a.jpg";
import turboAirM3r72 from "@/assets/turbo-air-m3r72.jpg";
import turboAirM3r47 from "@/assets/turbo-air-m3r47.jpg";
import baumalightTrl620d from "@/assets/baumalight-trl620d.jpg";
import cormidiC85 from "@/assets/cormidi-c85.jpg";

const categories = [
  {
    title: "Commercial Refrigerators",
    description: "Professional-grade refrigeration solutions for restaurants, farms, and industrial operations.",
    products: [
      {
        name: "Hoshizaki R3A‑HS 82.5″ Steelheart Refrigerator",
        price: 12300,
        priceDisplay: "$12,300",
        description: "Premium stainless steel three-door reach-in refrigerator with superior cooling performance and durability for demanding commercial environments.",
        image: hoshizakiR3aHs,
      },
      {
        name: "Hoshizaki R3A‑FG 82.5″ Glass Door Refrigerator",
        price: 13500,
        priceDisplay: "$13,500",
        description: "Three-door glass display refrigerator with LED lighting, perfect for showcasing products while maintaining optimal temperatures.",
        image: hoshizakiR3aFg,
      },
      {
        name: "Hoshizaki PT2A‑HS‑HS 55″ Pass‑Thru Refrigerator",
        price: 11196,
        priceDisplay: "$11,196",
        description: "Two-section pass-through design allows access from both sides, ideal for high-volume commercial kitchens and service lines.",
        image: hoshizakiPt2a,
      },
      {
        name: "Turbo Air M3R72‑6‑N Reach‑In Refrigerator",
        price: 8600,
        priceDisplay: "$8,600",
        description: "Three-section reach-in with stainless steel, great capacity, and self-cleaning condenser — excellent for daily farm storage needs.",
        image: turboAirM3r72,
      },
      {
        name: "Turbo Air M3R47‑2‑N Reach‑In Refrigerator",
        price: 7900,
        priceDisplay: "$7,900",
        description: "Two-door solid reach-in from a respected commercial line, robust cooling, and durable build for reliable everyday performance.",
        image: turboAirM3r47,
      },
    ],
  },
  {
    title: "Skid Steer Loaders",
    description: "Compact, powerful machines for tight spaces and heavy-duty farm work.",
    products: [
      {
        name: "Baumalight TRL620D Mini Track Loader",
        price: 32600,
        priceDisplay: "$32,600",
        description: "COMPACT SIZE RELIABLE PERFORMANCE THAT GETS THE JOB DONE. The Baumalight TRL620D tracked mini skidsteer is engineered for operators who need a powerful, compact machine that navigates tight spaces with ease. Built around a rugged 24.5 HP Kubota diesel engine and a professional hydrostatic drive system, the TRL620D delivers smooth control, steady hydraulic power, and dependable performance on every job. Its all-metal frame, durable rubber tracks, and stand-in operator platform make it ideal for maneuvering in confined areas without sacrificing stability or strength.",
        image: baumalightTrl620d,
      },
    ],
  },
  {
    title: "Wheel Loaders",
    description: "Heavy-duty loaders built for professionals demanding quality and reliability.",
    products: [
      {
        name: "Cormidi C85 Track Dumper-Loader",
        price: 18000,
        priceDisplay: "$18,000",
        description: "The CORMIDI C85 Track Dumper-Loader series are built for the Pro's, so if looking for the lowest priced track dumper this is not the option…built for quality first and foremost. Whether loading trailers, grading surfaces, or handling heavy material, the C85 gives you the confidence to work efficiently while maintaining precision and control.",
        image: cormidiC85,
      },
    ],
  },
];

const Refrigeration = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: { name: string; price: number; priceDisplay: string; description: string; image: string }) => {
    addItem({
      id: product.name.toLowerCase().replace(/\s+/g, '-'),
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-medium text-stone-900 tracking-tight mb-4">
            Commercial Refrigeration & Farming Equipment
          </h1>
          <p className="text-lg text-stone-500 max-w-3xl">
            Professional-grade refrigeration and farming machinery for commercial operations. 
            From Hoshizaki and Turbo Air refrigerators to Baumalight and Cormidi loaders — 
            equipment built for reliability and performance.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-semibold text-stone-900 mb-2">{category.title}</h2>
            {category.description && (
              <p className="text-stone-500 mb-6">{category.description}</p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-stone-100"
                >
                  <div className="aspect-square overflow-hidden bg-stone-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-stone-900 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-stone-900 mb-3">
                      {product.priceDisplay}
                    </p>
                    <p className="text-sm text-stone-500 mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-stone-900 text-white py-3 rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Refrigeration;
