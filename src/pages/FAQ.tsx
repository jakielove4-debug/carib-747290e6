import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What types of products does Carib Petroleum Inc. sell?", a: "We specialize in premium commercial fishing equipment, electric reels, bowfishing accessories, industrial warehouse equipment, plus commercial refrigeration systems, John Deere and Case IH harvesters, and Hobart and Winterhalter industrial dishwashers for hospitality and agriculture industries." },
  { q: "Do you ship internationally?", a: "Yes, with facilities in Miami, Curaçao, and Colombia, we offer international shipping across the Americas and Caribbean. Contact us for specific shipping quotes." },
  { q: "Are your products covered by warranty?", a: "All products come with manufacturer warranties. Specific warranty terms vary by product and brand. Contact us for detailed warranty information on specific items." },
  { q: "Can I get bulk pricing for commercial orders?", a: "Yes, we offer competitive pricing for commercial and fleet orders. Contact our sales team for volume discounts and custom quotes." },
  { q: "How long does shipping take?", a: "Domestic US shipping typically takes 3-7 business days. International shipping times vary based on destination. Express options are available." },
  { q: "Do you offer installation or setup services?", a: "For industrial equipment including commercial refrigerators, harvesters, and dishwashers, we can arrange installation and setup services in select regions. Contact us for availability in your area." },
  { q: "What payment methods do you accept?", a: "We accept major credit cards, wire transfers, and can arrange financing for large orders. Business accounts are also available." },
  { q: "Can I return a product?", a: "Yes, unopened products in original packaging can be returned within 30 days. Restocking fees may apply. See our full policy for details." },
  { q: "What commercial refrigeration brands do you carry?", a: "We supply premium refrigeration from Hoshizaki, Traulsen, True, and Turbo Air — all designed for restaurants, supermarkets, farms, and food distribution facilities with precise temperature control and energy efficiency." },
  { q: "What harvesting equipment do you offer?", a: "We provide John Deere and Case IH combine harvesters, known worldwide for their reliability and advanced harvesting technology, suitable for farming operations of all sizes." },
  { q: "What industrial dishwashers are available?", a: "We supply Hobart and Winterhalter industrial dishwashers for hotels, hospitals, and large-scale kitchens. These systems deliver powerful cleaning while minimizing water and energy consumption." },
];

const FAQ = () => (
  <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
    <div className="max-w-[900px] mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-lg font-light text-muted-foreground mb-12">Find answers to common questions about our products and services.</p>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6">
            <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </div>
);

export default FAQ;
