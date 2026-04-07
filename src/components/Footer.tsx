const Footer = () => (
  <footer className="bg-primary py-10">
    <div className="container mx-auto px-4 text-center">
      <p className="font-serif text-lg text-primary-foreground font-semibold mb-2">
        Madam Starmina <span className="text-gold-gradient">Goch Empire</span>
      </p>
      <p className="text-primary-foreground/60 text-sm">
        Tailoring Supplies · Monogramming · Embroidery
      </p>
      <p className="text-primary-foreground/40 text-xs mt-6">
        © {new Date().getFullYear()} Madam Starmina Goch Empire. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
