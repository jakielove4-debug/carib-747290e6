const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-6 border-t border-stone-200 py-8 px-6 items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-stone-900 tracking-tight">Carib Petroleum Inc</span>
      </div>

      <div className="flex gap-8 text-sm font-medium text-stone-500">
        <a href="/policy" className="hover:text-stone-900 transition-colors">
          Rules and Policy
        </a>
        <a href="/faq" className="hover:text-stone-900 transition-colors">
          FAQ
        </a>
        <a href="#video" className="hover:text-stone-900 transition-colors">
          Product
        </a>
        <a href="#contact" className="hover:text-stone-900 transition-colors">
          Contact
        </a>
      </div>

      <div className="text-xs text-stone-400">© 2026 Carib Petroleum Inc</div>
    </footer>
  );
};

export default Footer;
