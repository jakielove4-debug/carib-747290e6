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
import traulsenRefrigerator from "@/assets/traulsen-refrigerator.jpg";
import trueRefrigerator from "@/assets/true-refrigerator.jpg";
import johnDeereX9 from "@/assets/john-deere-x9.jpg";
import caseIhHarvester from "@/assets/case-ih-harvester.jpg";
import hobartDishwasher from "@/assets/hobart-dishwasher.jpg";
import winterhalterDishwasher from "@/assets/winterhalter-dishwasher.jpg";
import winterhalterMtr from "@/assets/winterhalter-mtr.jpg";
import winterhalterCtr from "@/assets/winterhalter-ctr.jpg";
import winterhalterPt from "@/assets/winterhalter-pt.jpg";

const categories = [
  {
    title: "Premium Commercial Refrigerators",
    description: "High-end commercial refrigeration from industry leaders Traulsen, Hoshizaki, True, and Turbo Air.",
    products: [
      {
        name: "Traulsen G10012P Pass-Thru Refrigerator (24.85 cu. ft)",
        price: 8214,
        priceDisplay: "$8,214",
        description: "Premium 29.88\" pass-through refrigerator with superior cooling technology. Features stainless steel construction and energy-efficient design for demanding commercial environments.",
        image: traulsenRefrigerator,
      },
      {
        name: "True STG2R-2S SPEC SERIES® 2-Door Refrigerator (50.59 cu. ft)",
        price: 5584,
        priceDisplay: "$5,584",
        description: "SPEC SERIES® two-section reach-in refrigerator with bottom-mounted self-contained refrigeration. Energy Star certified with superior temperature control.",
        image: trueRefrigerator,
      },
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
    title: "Industrial Combine Harvesters",
    description: "High-capacity combine harvesters from John Deere and Case IH for large-scale farming operations.",
    products: [
      {
        name: "John Deere S100 Combine Harvester",
        price: 89500,
        priceDisplay: "$89,500",
        description: "Entry-level combine with reliable performance for mid-size operations. Features 150-bushel grain tank, efficient threshing system, and easy-to-use controls. Perfect for wheat, corn, and soybeans.",
        image: johnDeereX9,
      },
      {
        name: "John Deere S200 Combine Harvester",
        price: 95900,
        priceDisplay: "$95,900",
        description: "Enhanced combine with improved grain handling and advanced monitoring. Features 175-bushel grain tank, AutoTrac™ guidance system, and superior residue management for clean fields.",
        image: johnDeereX9,
      },
      {
        name: "Case IH Axial-Flow 4250 Combine",
        price: 78500,
        priceDisplay: "$78,500",
        description: "Compact Axial-Flow® combine with legendary single rotor technology for gentle, efficient threshing. Ideal for small to medium farms with 250-bushel grain tank capacity.",
        image: caseIhHarvester,
      },
      {
        name: "Case IH Axial-Flow 5250 Combine",
        price: 92000,
        priceDisplay: "$92,000",
        description: "Mid-range rotary combine with Axial-Flow® technology delivering superior grain quality. Features AFS Pro display, 300-bushel grain tank, and yield monitoring for precision agriculture.",
        image: caseIhHarvester,
      },
    ],
  },
  {
    title: "Industrial Dishwashers for Hotels & Mass Catering",
    description: "High-capacity conveyor and rack dishwashers from Hobart and Winterhalter for hotels, hospitals, and large-scale food service operations.",
    products: [
      {
        name: "Hobart CL44eN Conveyor Dishwasher (202 racks/hour)",
        price: 38500,
        priceDisplay: "$38,500",
        description: "Single tank high-temperature conveyor dishwasher processing 202 racks per hour. Features Opti-RinSe™ system using only 0.62 gallons per rack, Rapid Return conveyor drive, and Energy Star® certification. Ideal for hotels and large restaurants.",
        image: hobartDishwasher,
      },
      {
        name: "Hobart CL54eN Multi-Tank Conveyor Dishwasher",
        price: 52000,
        priceDisplay: "$52,000",
        description: "Premium multi-tank conveyor system with prewash, power wash, and rinse zones. Processes up to 250 racks/hour with advanced Opti-RinSe™ technology. Built for 24/7 hotel and hospital operations.",
        image: hobartDishwasher,
      },
      {
        name: "Winterhalter MTR Rack Conveyor (up to 355 racks/hour)",
        price: 65000,
        priceDisplay: "$65,000",
        description: "Top-of-the-line 2-4 tank rack conveyor system for the highest volume operations. Features Energy™ heat recovery, automatic basket recognition, and connected wash® IoT monitoring. Perfect for cruise ships and convention centers.",
        image: winterhalterMtr,
      },
      {
        name: "Winterhalter CTR Compact Rack Conveyor (195 racks/hour)",
        price: 42000,
        priceDisplay: "$42,000",
        description: "Compact 1-3 tank conveyor starting from 1,400mm length. Ideal for space-constrained kitchens requiring high-volume washing. Features integrated hood dryer option and ConnectedWash® smart monitoring.",
        image: winterhalterCtr,
      },
      {
        name: "Winterhalter PT-L Passthrough Dishwasher",
        price: 18500,
        priceDisplay: "$18,500",
        description: "Premium passthrough dishwasher with 60 racks/hour capacity. Features EnergyPlus heat pump technology reducing energy consumption by 75%. Double-wall insulated hood and touch-screen controls.",
        image: winterhalterPt,
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
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
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
          <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">
            Commercial Refrigeration, Harvesters & Industrial Equipment
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Premium commercial equipment for large-scale operations. From Hoshizaki and Turbo Air refrigerators 
            to John Deere & Case IH harvesters, plus Hobart and Winterhalter industrial dishwashers — 
            equipment built for maximum productivity and reliability.
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
            <h2 className="text-2xl font-semibold text-foreground mb-2">{category.title}</h2>
            {category.description && (
              <p className="text-muted-foreground mb-6">{category.description}</p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border"
                >
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-3">
                      {product.priceDisplay}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
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
