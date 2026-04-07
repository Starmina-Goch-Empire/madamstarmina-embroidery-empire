import { MapPin, Phone } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">Get In Touch</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Contact <span className="text-gold-gradient">Us</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border p-8 md:p-12 shadow-sm">
        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center shrink-0">
              <MapPin size={22} className="text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">Our Location</h3>
              <p className="text-muted-foreground">32, Idumagbo, First Floor, beside FCMB<br />Eko Island, Lagos, Nigeria</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center shrink-0">
              <Phone size={22} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground mb-1">Call / WhatsApp</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:08142525424" className="text-secondary hover:underline">08142525424</a>
                <a href="tel:08120303433" className="text-secondary hover:underline">08120303433</a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/2348142525424"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center gradient-gold text-accent-foreground font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Chat on WhatsApp
          </a>
          <a
            href="tel:08142525424"
            className="flex-1 text-center gradient-navy text-primary-foreground font-semibold px-6 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm uppercase tracking-wider"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
