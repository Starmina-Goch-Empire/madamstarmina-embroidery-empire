import heroImg from "@/assets/hero-tailoring.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Professional African tailoring workshop with Agbada embroidery" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 gradient-navy opacity-80" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <p className="text-gold font-sans text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
        Tailoring & Monogram / Embroidery
      </p>
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Madam Starmina<br />
        <span className="text-gold-gradient">Goch Empire</span>
      </h1>
      <p className="text-primary-foreground/70 max-w-xl mx-auto text-base md:text-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Premium tailoring supplies, traditional wear components, and professional embroidery services — trusted by tailors across Lagos and beyond.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
        <a
          href="#products"
          className="gradient-gold text-accent-foreground font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
        >
          Explore Products
        </a>
        <a
          href="#contact"
          className="border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg hover:bg-primary-foreground/10 transition-colors text-sm uppercase tracking-wider"
        >
          Visit Us
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
