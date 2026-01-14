import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Policy = () => (
  <div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
    <div className="max-w-[900px] mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl sm:text-5xl font-medium text-foreground tracking-tight mb-4">Rules and Policy</h1>
        <p className="text-lg font-light text-muted-foreground mb-12">Please review our policies before making a purchase.</p>
      </motion.div>
      <div className="prose prose-stone max-w-none space-y-8">
        <section className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold mb-4">Shipping Policy</h2>
          <p className="text-muted-foreground">Orders are processed within 1-3 business days. Shipping times vary: US domestic 3-7 days, International 7-21 days. Express shipping available at checkout. Large industrial equipment may require freight shipping with extended delivery times.</p>
        </section>
        <section className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold mb-4">Return Policy</h2>
          <p className="text-muted-foreground">Returns accepted within 30 days of delivery for unopened items in original packaging. A 15% restocking fee applies. Defective products are eligible for replacement or full refund. Custom or special-order items are non-returnable. Contact support to initiate a return.</p>
        </section>
        <section className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold mb-4">Warranty</h2>
          <p className="text-muted-foreground">All products carry manufacturer warranties. Warranty periods range from 1-5 years depending on the product. Warranty covers manufacturing defects only. Damage from misuse, modifications, or normal wear is not covered.</p>
        </section>
        <section className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Terms</h2>
          <p className="text-muted-foreground">We accept Visa, MasterCard, American Express, wire transfers, and PayPal. Orders over $10,000 may qualify for financing. Business accounts with net-30 terms available upon credit approval.</p>
        </section>
        <section className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-muted-foreground">We protect your personal information and never sell customer data to third parties. Information collected is used solely for order processing, shipping, and customer communication. Secure SSL encryption protects all transactions.</p>
        </section>
      </div>
    </div>
  </div>
);

export default Policy;
