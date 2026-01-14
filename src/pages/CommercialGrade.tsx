import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

import electricPalletTruck from "@/assets/electric-pallet-truck.jpg";
import walkiePalletJack from "@/assets/walkie-pallet-jack.jpg";
import electricForklift from "@/assets/electric-forklift.jpg";
import heavyForklift from "@/assets/heavy-forklift.jpg";
import narrowPalletJack from "@/assets/narrow-pallet-jack.jpg";
import straddleStacker from "@/assets/straddle-stacker.jpg";
import conveyorSystem from "@/assets/conveyor-system.jpg";
import palletScale from "@/assets/pallet-scale.jpg";

const categories = [
  {
    title: "Electric Pallet Trucks / Powered Pallet Jacks",
    products: [
      {
        name: "2000 kg Electric Pallet Truck (Warehouse Pallet Jack)",
        price: 2675,
        priceDisplay: "Approx $2,550 – $2,800",
        description: "Used for efficient transport of heavy pallets in industrial environments. Price depends on supplier.",
        image: electricPalletTruck,
      },
      {
        name: "Electric Walkie Pallet Jack (≈4400 lb capacity)",
        price: 2500,
        priceDisplay: "$2,500",
        description: "Efficient pallet transport solution for warehouse operations.",
        image: walkiePalletJack,
      },
    ],
  },
  {
    title: "Electric Forklifts & Heavy Lifting",
    description: "Key for lifting, stacking, loading, and unloading large cargo.",
    products: [
      {
        name: "Electric Forklift 3000 kg (~6600 lb) with Lithium Battery",
        price: 4025,
        priceDisplay: "$4,025",
        description: "Entry-level industrial electric forklift option.",
        image: electricForklift,
      },
      {
        name: "Higher-Capacity Forklift (7 ton + diesel or electric)",
        price: 18000,
        priceDisplay: "Typically $18,000+",
        description: "Heavy-duty models designed for heavy cargo handling.",
        image: heavyForklift,
      },
    ],
  },
  {
    title: "Straddle Stackers & Powered Stackers",
    products: [
      {
        name: "EKKO EP18JNLI Electric Narrow Pallet Jack (4,000 lb capacity)",
        price: 2743,
        priceDisplay: "$2,743",
        description: "Narrow aisle pallet jack for tight spaces.",
        image: narrowPalletJack,
      },
      {
        name: "Full Powered Straddle Stacker (2800 lb)",
        price: 6329,
        priceDisplay: "$6,329",
        description: "Full-powered stacking solution for warehouse operations.",
        image: straddleStacker,
      },
    ],
  },
  {
    title: "Industrial Conveyor & Automation Systems",
    products: [
      {
        name: "Vertical Pallet Lifter / Conveyor System",
        price: 22000,
        priceDisplay: "$22,000",
        description: "Industrial-grade conveyor system for automated pallet handling.",
        image: conveyorSystem,
      },
    ],
  },
  {
    title: "Pallet Truck Scales / Weighing Solutions",
    description: "Essential when shipping by weight class or freight class.",
    products: [
      {
        name: "PTSplus 5000a Pallet Truck Scale (5000 lb capacity)",
        price: 2995,
        priceDisplay: "$2,995",
        description: "Integrated weighing solution for pallet trucks.",
        image: palletScale,
      },
    ],
  },
];

const CommercialGrade = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: { name: string; price: number; image: string }) => {
    addItem({
      id: product.name.replace(/\s+/g, '-').toLowerCase(),
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">
            High-Value & Commercial-Grade Products
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mb-12">
            Industrial equipment for commercial operations. Electric pallet trucks, forklifts, stackers, and weighing solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-2">
                {category.title}
              </h2>
              {category.description && (
                <p className="text-muted-foreground mb-6">{category.description}</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product) => (
                  <div
                    key={product.name}
                    className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-40 rounded-2xl mb-4 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xl font-bold text-primary mb-4">{product.priceDisplay}</p>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="mt-6 w-full py-3 rounded-xl border border-border text-foreground font-medium hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommercialGrade;
