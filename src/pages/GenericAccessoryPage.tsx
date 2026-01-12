import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const pageData: Record<string, { title: string; description: string }> = {
  "line-pullers": {
    title: "Line Pullers",
    description: "Professional line puller systems for efficient fishing operations.",
  },
  "mountains-hardware": {
    title: "Mountains Hardware",
    description: "Premium hardware solutions for fishing equipment.",
  },
  "netro-whiskers": {
    title: "Netro Whiskers",
    description: "High-quality whisker systems for fishing applications.",
  },
  "reels-kit": {
    title: "Reels Kit",
    description: "Complete reel kits for professional fishing setups.",
  },
  "shoot-true-roads": {
    title: "Shoot True Roads",
    description: "Precision shooting equipment for bowfishing.",
  },
};

const GenericAccessoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const data = category ? pageData[category] : null;

  if (!data) {
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
          <h1 className="text-4xl font-medium text-foreground">Category not found</h1>
        </div>
      </div>
    );
  }

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
            {data.title}
          </h1>
          <p className="text-lg font-light text-muted-foreground max-w-2xl mb-12">
            {data.description}
          </p>
        </motion.div>

        <div className="bg-card rounded-3xl p-12 border border-border text-center">
          <p className="text-muted-foreground text-lg">
            Products coming soon. Contact us for more information.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenericAccessoryPage;
