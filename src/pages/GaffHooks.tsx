import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const products = [
  {
    name: "AMS Gaff Hook",
    price: "$100",
    description: "Professional-grade gaff hook designed for heavy-duty use. Built for durability and performance in demanding offshore conditions.",
  },
];

const GaffHooks = () => {
  return (
    <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1600px] mx-auto">
        <Link
          to="/accessories"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Accessories
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">
            Gaff Hooks
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mb-12">
            Professional gaff hooks for offshore fishing applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

export default GaffHooks;
