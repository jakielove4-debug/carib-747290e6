import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const products = [
  {
    name: "Shimano Stella SW D",
    price: "$1,049",
    description: "Top-of-the-line spinning reel with HAGANE Body, InfinityXross gears, and superior corrosion resistance, built for heavy saltwater use.",
    category: "Shimano Stella SW Series",
  },
  {
    name: "Shimano Stella SW C STLSW18000HGC",
    price: "$1,349.99",
    description: "High-capacity saltwater spinning reel excellent for big fish like marlin and tuna.",
    category: "Shimano Stella SW Series",
  },
  {
    name: "Shimano Forcemaster A 9000",
    price: "$1,189.99",
    description: "Electric reel with 55 lb drag and electric assist for deep dropping or heavy tackle fishing.",
    category: "Electric Reels",
  },
  {
    name: "Elec-Tra-Mate TR-3012R Computer Controlled Single Spool Reel",
    price: "$2,700",
    description: "Aircraft-grade aluminum construction with computer control for precision fishing.",
    category: "High-Performance Game & Electric Reels",
  },
  {
    name: "Elec-Tra-Mate Brute 2000 Electric Reel",
    price: "$3,069",
    description: "Heavy-duty with easy spool swapping for commercial fishing applications.",
    category: "High-Performance Game & Electric Reels",
  },
  {
    name: "Kristal Fishing XF 655 M Electric Reel",
    price: "$3,449",
    description: "Deep drop and dredge performance with high line retrieval and power.",
    category: "High-Performance Game & Electric Reels",
  },
  {
    name: "Daiwa Marine Power Deep Drop Electric Reel",
    price: "≈ $3,499",
    description: "Powerful electric reel with corrosion-resistant design for demanding conditions.",
    category: "High-Performance Game & Electric Reels",
  },
  {
    name: "Hooker Electric Shimano Tiagra 130A Reel",
    price: "$3,848",
    description: "Premium electric combo reel with remote control functionality.",
    category: "High-Performance Game & Electric Reels",
  },
  {
    name: "Penn International 70VIS Electric Reel",
    price: "≈ $4,529",
    description: "Flagship high-power electric reel for tournament or commercial use.",
    category: "High-Performance Game & Electric Reels",
  },
];

const ReelsAccessories = () => {
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
            Reels & Reels Accessories
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mb-12">
            Complement your setup with premium reel accessories designed to enhance durability, efficiency, and control—ensuring smooth operation, heavy-load performance, and long-term dependability on every offshore expedition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <span className="text-xs font-semibold bg-muted rounded-full px-3 py-1 text-muted-foreground">
                {product.category}
              </span>
              <div className="h-40 bg-muted rounded-2xl my-4 flex items-center justify-center">
                <span className="text-muted-foreground">Product Image</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
              <p className="text-muted-foreground text-sm">{product.description}</p>
              <button className="mt-6 w-full py-3 rounded-xl border border-border text-foreground font-medium hover:bg-foreground hover:text-background transition-colors">
                Request Quote
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsAccessories;
