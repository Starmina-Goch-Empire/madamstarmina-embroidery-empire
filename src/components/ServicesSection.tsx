import { Scissors, Pen } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Expert bespoke tailoring for traditional and contemporary styles. We craft Agbada, Kaftan, and Senator outfits to your exact measurements with premium fabrics.",
  },
  {
    icon: Pen,
    title: "Monogram & Embroidery",
    description: "Professional monogramming and intricate embroidery services. Elevate your garments with custom initials, patterns, and decorative designs using premium threads.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-28 bg-muted">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">What We Do</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Our <span className="text-gold-gradient">Services</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-xl gradient-navy flex items-center justify-center mb-6">
              <s.icon size={26} className="text-primary-foreground" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
