import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

import savurMountBracket from "@/assets/savur-mount-bracket.jpg";
import savurBowRetrieve from "@/assets/savur-bow-retrieve.jpg";

const products = [
  {
    id: "savur-mount-bracket",
    name: "Savur Bowfishing Mount Bracket",
    price: 199.99,
    description: "Premium mounting bracket for bowfishing applications. Designed for durability and precision.",
    image: savurMountBracket,
  },
  {
    id: "savur-bow-retrieve",
    name: "Savur Fishing Bow Retrieve",
    price: 299.99,
    description: "Advanced bow retrieve system for professional bowfishing. Built for reliability and performance.",
    image: savurBowRetrieve,
  },
];

const Savur = () => {
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        <Link
          to="/accessories/bow-retrievers"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Bow Retrievers
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">
            Savur Products
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mb-12">
            Premium bowfishing mount brackets and bow retrieve systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
              <p className="text-muted-foreground">{product.description}</p>
              <button 
                onClick={() => handleAddToCart(product)}
                className="mt-6 w-full py-3 rounded-xl border border-border text-foreground font-medium hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savur;
