import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const products = [
  {
    name: "Savur Bowfishing Mount Bracket",
    price: "$199.99",
    description: "Premium mounting bracket for bowfishing applications. Designed for durability and precision.",
  },
  {
    name: "Savur Fishing Bow Retrieve",
    price: "Contact for pricing",
    description: "Advanced bow retrieve system for professional bowfishing. Built for reliability and performance.",
  },
];

const Savur = () => {
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
              <div className="h-48 bg-muted rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-muted-foreground">Product Image</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
              <p className="text-muted-foreground">{product.description}</p>
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

export default Savur;
