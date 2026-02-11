import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, Globe, ShieldCheck, Truck, BadgeDollarSign, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";

import medicalRespiratory from "@/assets/medical-respiratory.jpg";
import medicalCardiac from "@/assets/medical-cardiac.jpg";
import medicalOrthopedic from "@/assets/medical-orthopedic.jpg";
import medicalFeeding from "@/assets/medical-feeding.jpg";
import medicalVision from "@/assets/medical-vision.jpg";
import medicalHearing from "@/assets/medical-hearing.jpg";
import medicalEndocrine from "@/assets/medical-endocrine.jpg";
import medicalMental from "@/assets/medical-mental.jpg";

interface EquipmentItem {
  name: string;
  description: string;
  price: string;
}

interface Category {
  title: string;
  items: EquipmentItem[];
}

interface Section {
  heading: string;
  image: string;
  categories: Category[];
}

const sections: Section[] = [
  {
    heading: "Respiratory & Airway Disorders",
    image: medicalRespiratory,
    categories: [
      {
        title: "Asthma Care Equipment",
        items: [
          { name: "Home Nebulizer System", description: "Compact nebulizer for daily asthma management", price: "$185 – $320" },
          { name: "Portable Oxygen Concentrator", description: "Lightweight unit for mobility and home use", price: "$1,650 – $2,800" },
          { name: "Digital Peak Flow Meter", description: "Advanced monitoring with mobile app sync", price: "$85 – $160" },
        ],
      },
      {
        title: "Chronic Lung Disease / Tracheostomy",
        items: [
          { name: "Home Ventilator", description: "Medical‑grade ventilator for long‑term respiratory support", price: "$4,500 – $9,800" },
          { name: "Suction Machine", description: "Adjustable suction for airway clearance", price: "$420 – $780" },
          { name: "Pulse Oximeter", description: "Continuous oxygen saturation monitoring", price: "$55 – $130" },
          { name: "Backup Power Supply", description: "Medical‑grade battery backup system", price: "$680 – $1,200" },
        ],
      },
    ],
  },
  {
    heading: "Congenital Heart Disease",
    image: medicalCardiac,
    categories: [
      {
        title: "Cardiac Monitoring & Support",
        items: [
          { name: "Home Cardiac Monitor", description: "Continuous ECG & heart rate monitoring", price: "$1,100 – $2,400" },
          { name: "Pulse Oximeter", description: "Pediatric & adult compatible", price: "$65 – $150" },
          { name: "Infusion Pump", description: "Precision delivery of cardiac medications", price: "$1,800 – $3,600" },
        ],
      },
    ],
  },
  {
    heading: "Orthopedic & Musculoskeletal Conditions",
    image: medicalOrthopedic,
    categories: [
      {
        title: "Spinal Disorders",
        items: [
          { name: "Cervical Orthotic Braces", description: "Adjustable medical‑grade neck support", price: "$120 – $380" },
          { name: "Postural Support Systems", description: "Custom alignment and posture correction", price: "$450 – $1,200" },
          { name: "Home Traction Devices", description: "Physician‑prescribed spinal traction", price: "$900 – $2,100" },
          { name: "Orthopedic Beds / Mattresses", description: "Pressure‑relief & spinal alignment", price: "$2,200 – $5,500" },
        ],
      },
      {
        title: "Muscular Dystrophy / Spinal Muscular Atrophy",
        items: [
          { name: "Power Wheelchair", description: "Fully motorized with adaptive controls", price: "$3,800 – $9,500" },
          { name: "Cough Assist Machine", description: "Secretion clearance therapy", price: "$3,200 – $5,900" },
          { name: "BiPAP Non‑Invasive Ventilator", description: "Assisted breathing support", price: "$2,100 – $4,300" },
          { name: "Adjustable Hospital Bed", description: "Multi‑position medical bed", price: "$2,500 – $6,800" },
        ],
      },
    ],
  },
  {
    heading: "Feeding & Gastrointestinal Disorders",
    image: medicalFeeding,
    categories: [
      {
        title: "Feeding Difficulties / Failure to Thrive",
        items: [
          { name: "Feeding Pumps", description: "Precise enteral nutrition delivery", price: "$980 – $2,100" },
          { name: "Gastrostomy Tube Kits", description: "Complete sterile feeding kits", price: "$120 – $290" },
          { name: "Adaptive Feeding Tools", description: "Thickening devices & special utensils", price: "$45 – $160" },
        ],
      },
    ],
  },
  {
    heading: "Vision Impairments",
    image: medicalVision,
    categories: [
      {
        title: "Blindness / Severe Visual Impairment",
        items: [
          { name: "Electronic Magnifiers", description: "Portable & desktop options", price: "$350 – $1,200" },
          { name: "Braille Displays", description: "Refreshable Braille readers", price: "$2,800 – $6,500" },
          { name: "Text‑to‑Speech Devices", description: "OCR‑enabled reading systems", price: "$420 – $1,800" },
        ],
      },
    ],
  },
  {
    heading: "Hearing Loss",
    image: medicalHearing,
    categories: [
      {
        title: "Moderate–Severe Hearing Loss",
        items: [
          { name: "Digital Hearing Aids", description: "Programmable multi‑channel devices", price: "$850 – $3,200" },
          { name: "FM Classroom Systems", description: "Wireless hearing assistance", price: "$1,400 – $3,900" },
        ],
      },
    ],
  },
  {
    heading: "Endocrine & Renal Conditions",
    image: medicalEndocrine,
    categories: [
      {
        title: "Type 1 Diabetes",
        items: [
          { name: "Insulin Pump", description: "Continuous insulin delivery", price: "$3,500 – $7,200" },
          { name: "Continuous Glucose Monitor", description: "Real‑time glucose tracking", price: "$1,100 – $3,000" },
          { name: "Emergency Glucagon Device", description: "Fast‑acting hypoglycemia treatment", price: "$290 – $420" },
        ],
      },
      {
        title: "Renal Failure",
        items: [
          { name: "Home Dialysis Machine", description: "Compact dialysis system", price: "$9,800 – $18,000" },
          { name: "Blood Pressure Monitor", description: "Clinical accuracy home monitoring", price: "$85 – $240" },
          { name: "Fluid Monitoring Devices", description: "Precision intake & output tracking", price: "$260 – $680" },
        ],
      },
    ],
  },
  {
    heading: "Behavioral & Mental Health Conditions",
    image: medicalMental,
    categories: [
      {
        title: "Severe Anxiety / ADHD",
        items: [
          { name: "Neurofeedback Systems", description: "Brain activity training equipment", price: "$2,500 – $6,800" },
          { name: "Biofeedback Devices", description: "Stress & anxiety regulation tools", price: "$680 – $2,100" },
          { name: "Weighted Therapeutic Devices", description: "Calming sensory products", price: "$75 – $320" },
        ],
      },
    ],
  },
];

const features = [
  { icon: ShieldCheck, label: "New, factory‑sealed equipment" },
  { icon: HeartPulse, label: "Warranty & after‑sales support" },
  { icon: Truck, label: "Nationwide & international shipping" },
  { icon: BadgeDollarSign, label: "Bulk, insurance & institutional pricing" },
];

const EquipmentTable = ({ items }: { items: EquipmentItem[] }) => (
  <div className="overflow-x-auto rounded-xl border border-stone-200">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-stone-100 text-stone-700">
          <th className="text-left py-3 px-4 font-semibold">Equipment</th>
          <th className="text-left py-3 px-4 font-semibold hidden sm:table-cell">Description</th>
          <th className="text-right py-3 px-4 font-semibold whitespace-nowrap">Price (USD)</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <tr key={item.name} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
            <td className="py-3 px-4 font-medium text-stone-900">
              {item.name}
              <p className="text-xs text-stone-400 sm:hidden mt-0.5">{item.description}</p>
            </td>
            <td className="py-3 px-4 text-stone-500 hidden sm:table-cell">{item.description}</td>
            <td className="py-3 px-4 text-right font-semibold text-stone-800 whitespace-nowrap">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MedicalEquipment = () => {
  return (
    <div className="sm:p-4 lg:p-6 max-w-[1600px] mx-auto p-2">
      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative rounded-4xl overflow-hidden bg-gradient-to-br from-teal-800 via-teal-900 to-stone-900 min-h-[400px] flex flex-col justify-end p-8 sm:p-12 mb-12"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-5xl font-medium text-white tracking-tight mb-4"
          >
            Medical & Assistive Equipment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-white/70 text-lg max-w-2xl font-light"
          >
            Reliable, certified medical equipment for home & clinical use—supporting patients with chronic conditions, disabilities, and long‑term care needs.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-3 mt-8"
          >
            {features.map(({ icon: Icon, label }) => (
              <motion.span
                key={label}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 text-white text-xs font-medium rounded-full py-2 px-4"
              >
                <Icon className="w-4 h-4" /> {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.header>

      {/* Categories */}
      <section className="px-4 sm:px-6 mb-16">
        <Accordion type="multiple" defaultValue={[sections[0].heading]} className="space-y-4">
          {sections.map((section, sIdx) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: sIdx * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <AccordionItem value={section.heading} className="border border-stone-200 rounded-2xl px-6 overflow-hidden hover:border-stone-300 transition-colors">
                <AccordionTrigger className="text-xl font-semibold text-stone-900 hover:no-underline">
                  {section.heading}
                </AccordionTrigger>
                <AccordionContent>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8 pb-4"
                  >
                    <div className="h-48 sm:h-56 rounded-xl overflow-hidden mb-6">
                      <motion.img
                        src={section.image}
                        alt={section.heading}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                    {section.categories.map((cat) => (
                      <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-base font-semibold text-stone-700 mb-3">{cat.title}</h3>
                        <EquipmentTable items={cat.items} />
                      </motion.div>
                    ))}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-stone-50 rounded-3xl p-8 sm:p-12"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight mb-6">
            Why Choose Carib Equipment?
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Trusted Suppliers", desc: "Medical‑grade products from certified manufacturers" },
              { title: "Competitive Pricing", desc: "Bulk discounts & institutional pricing available" },
              { title: "Professional Guidance", desc: "Expert equipment consultation and support" },
              { title: "Fast Fulfillment", desc: "Secure ordering with rapid nationwide shipping" },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-sm text-stone-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-teal-900 rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">
            Contact Us for Quotes, Insurance Billing, or Bulk Orders
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mt-6"
          >
            <motion.a
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:info@caribequipment.com"
              className="inline-flex items-center gap-2 bg-white text-teal-900 font-medium rounded-full py-3 px-6 hover:bg-white/90 transition-colors"
            >
              <Mail className="w-4 h-4" /> info@caribequipment.com
            </motion.a>
            <motion.a
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="tel:4692751548"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-medium rounded-full py-3 px-6 hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" /> (469) 275‑1548
            </motion.a>
            <motion.a
              variants={fadeUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="https://caribequipment.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-medium rounded-full py-3 px-6 hover:bg-white/20 transition-colors"
            >
              <Globe className="w-4 h-4" /> caribequipment.com
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalEquipment;
