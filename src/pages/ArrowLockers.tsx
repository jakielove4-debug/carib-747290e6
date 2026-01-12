import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const products = [
  {
    name: "RPM Arrow Locker",
    price: "$200.99",
    description: "The Locker single arrow quiver attaches to the riser using the sight bar or quiver holes. Rugged nylon construction holds arrow shafts securely. Includes stainless steel mounting hardware.",
  },
  {
    name: "Gargod Puller / Locker Combo",
    price: "$44.99",
    description: "The Gargod line puller is machined from strong 6061 aluminum and features the RPM arrow locker quiver. The line puller incorporates a 3⁄8\" standoff which allows the arrow (once in the locker) to clear the bow's arrow rest mounting bracket. The Gargod line puller/locker combo will attach to any RH or LH bow's sight mounting holes. Stainless hardware is included. As with all our products.",
  },
];

const ArrowLockers = () => {
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
            Arrow Lockers
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mb-12">
            Premium arrow locker systems for bowfishing applications.
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

export default ArrowLockers;
