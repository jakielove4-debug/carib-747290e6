import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const accessories = [
  { name: "Bow Retrievers", link: "/accessories/bow-retrievers" },
  { name: "Cases", link: "/accessories/cases" },
  { name: "Gaff Hooks", link: "/accessories/gaff-hooks" },
  { name: "Line Pullers", link: "/accessories/line-pullers" },
  { name: "Mountains Hardware", link: "/accessories/mountains-hardware" },
  { name: "Netro Whiskers", link: "/accessories/netro-whiskers" },
  { name: "Reels Kit", link: "/accessories/reels-kit" },
  { name: "Shoot True Roads", link: "/accessories/shoot-true-roads" },
  { name: "Arrow Lockers", link: "/accessories/arrow-lockers" },
];

const Accessories = () => {
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
            Accessories
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mb-12">
            Complete your offshore setup with high-quality fishing accessories designed for durability, performance, and reliability in demanding marine environments. Our accessories are carefully selected to complement professional-grade reels, rods, and systems, ensuring seamless performance on every trip.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {accessories.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className="group block bg-card hover:shadow-xl transition-all duration-300 rounded-3xl p-6 border border-border"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;
