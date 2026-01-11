import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="mt-24 mb-12">
      <div className="sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:gap-24 bg-card border border-stone-100 rounded-4xl p-8 shadow-xl gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg font-light text-stone-500 max-w-md mb-10">
            We're here to help you select the right equipment for your vessel, operation, or fishing
            goals. Whether you're outfitting a commercial fleet, upgrading offshore gear, or seeking
            expert guidance, our team is ready to assist.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 group items-center">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm text-stone-400">Email</span>
                <a
                  href="mailto:info@habitats.com"
                  className="hover:underline text-lg font-medium text-stone-900"
                >
                  info@habitats.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm text-stone-400">Phone</span>
                <a
                  href="tel:+6281239838440"
                  className="text-lg font-medium text-stone-900 hover:underline"
                >
                  +62 812 3983 8440
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 bg-stone-50 rounded-3xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">
                Phone
              </label>
              <input
                type="tel"
                className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="hover:bg-stone-800 transition-colors flex gap-2 group font-medium text-white bg-stone-900 w-full rounded-xl mt-4 py-4 items-center justify-center"
            >
              Get Quote
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
