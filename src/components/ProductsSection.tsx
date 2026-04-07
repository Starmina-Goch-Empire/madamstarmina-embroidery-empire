import { Tag, Shirt, Award } from "lucide-react";
import accessoriesImg from "@/assets/accessories-display.jpg";
import agbadaImg from "@/assets/agbada-display.jpg";
import embroideryImg from "@/assets/embroidery-detail.jpg";

const categories = [
  {
    icon: Tag,
    title: "Essential Tools",
    image: accessoriesImg,
    items: ["Tag Guns", "Tag Needles & Pins", "Lint Rollers", "Teflon Shoes", "Labeller Machines"],
  },
  {
    icon: Shirt,
    title: "Traditional Wear Components",
    image: agbadaImg,
    items: ["Original & Imported Agbada", "Flaps & Pockets", "Cap Tips", "Pocket Pins", "Buckles"],
  },
  {
    icon: Award,
    title: "Branding & Finishing",
    image: embroideryImg,
    items: ["Custom Labels", "Badges", "Shirt Clips & Cartons", "Pastor Collars", "Washing Instructions"],
  },
];

const ProductsSection = () => (
  <section id="products" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-2">Our Products</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Tailoring <span className="text-gold-gradient">Supplies & Materials</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Quality tools, traditional wear components, and finishing accessories for professional tailors.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.title} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-border">
            <div className="h-52 overflow-hidden">
              <img src={cat.image} alt={cat.title} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                  <cat.icon size={20} className="text-accent-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
