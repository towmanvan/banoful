import { useRef, useEffect, useState, memo } from 'react';
import { ArrowRight, Sparkles, Leaf, Flame, Heart, Star } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
  features: string[];
  icons: React.ElementType[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Bengali Mithai Collection',
    category: 'Traditional Sweets',
    description: 'Authentic Rasogolla, Cham Cham, Sandesh, Pantua, and more. Made fresh daily with traditional recipes passed down through generations.',
    image: '/bengali-sweets.jpg',
    badge: 'Bestseller',
    features: ['Halal', 'Fresh Daily', 'Traditional'],
    icons: [Sparkles, Heart, Star],
  },
  {
    id: 2,
    name: 'Mishti Doi (Sweet Yogurt)',
    category: 'Sweet Yogurt',
    description: 'Famous Bengali sweet yogurt in traditional earthenware pots. Rich, creamy, and authentically prepared with no preservatives.',
    image: '/mishti-doi.jpg',
    badge: 'Premium',
    features: ['Signature', 'Clay Pot', 'No Preservatives'],
    icons: [Heart, Leaf, Star],
  },
  {
    id: 3,
    name: 'Eggless Cakes & Pastries',
    category: 'Bakery',
    description: 'Premium eggless cakes, cupcakes, and pastries. Perfect for the South Asian vegetarian market and special occasions.',
    image: '/eggless-cakes.jpg',
    badge: 'Popular',
    features: ['Eggless', 'Vegetarian', 'Fresh Baked'],
    icons: [Sparkles, Heart, Flame],
  },
  {
    id: 4,
    name: 'Natural Yogurt & Dahi',
    category: 'Dairy',
    description: 'Pure, thick natural yogurt made traditionally. Perfect for cooking, raita, and direct consumption. No added sugar.',
    image: '/natural-yogurt.jpg',
    features: ['Natural', 'Thick Set', 'No Added Sugar'],
    icons: [Leaf, Heart, Star],
  },
  {
    id: 5,
    name: 'Milkshakes & Desserts',
    category: 'Beverages & Desserts',
    description: 'Indulge in our creamy, freshly made milkshakes and irresistible desserts. Made with real ingredients in exciting flavours — the perfect sweet treat.',
    image: '/bengali-sweets.jpg',
    badge: 'New',
    features: ['Real Ingredients', 'Made Fresh', 'Many Flavours'],
    icons: [Sparkles, Heart, Star],
  },
  {
    id: 6,
    name: 'Indian & Pakistani Sweets',
    category: 'Regional Specialties',
    description: 'Gulab Jamun, Barfi varieties, Laddu, Jalebi, and more. Catering to all South Asian tastes and festivals.',
    image: '/indian-sweets.jpg',
    features: ['Multi-Regional', 'Premium', 'Festival Ready'],
    icons: [Flame, Heart, Star],
  },
];

// Memoized product card for performance
const ProductCard = memo(function ProductCard({ 
  product, 
  index 
}: { 
  product: Product; 
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(card);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-lift h-full flex flex-col gpu-accelerate">
        {/* Image with lazy loading */}
        <div className="relative h-56 overflow-hidden">
          <LazyImage
            src={product.image}
            alt={product.name}
            className="w-full h-full"
            placeholderColor="#F5F1E8"
          />
          {product.badge && (
            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#C9A961] text-[#2C1810] text-xs font-bold shadow-lg gpu-accelerate">
              {product.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <span className="text-xs font-semibold text-[#8B6F47] uppercase tracking-wider mb-2">
            {product.category}
          </span>
          <h3 className="text-xl font-bold text-[#2C1810] mb-3 hover:text-[#8B6F47] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#6B5D54] text-sm leading-relaxed mb-4 flex-1">
            {product.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-5">
            {product.features.map((feature, idx) => {
              const IconComponent = product.icons[idx % product.icons.length];
              return (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5F1E8] text-[#6B5D54] text-xs font-medium"
                >
                  <IconComponent className="w-3 h-3" />
                  {feature}
                </span>
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToContact}
            className="w-full py-3 rounded-xl bg-[#8B6F47] text-white font-semibold text-sm hover:bg-[#C9A961] hover:text-[#2C1810] transition-all duration-300 flex items-center justify-center gap-2 group/btn gpu-accelerate"
          >
            Contact for Pricing
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
});

const Products = memo(function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const header = sectionRef.current;
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.unobserve(header);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className="section-padding bg-[#FFFDF7] relative overflow-hidden content-visibility-auto"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#C9A961]/10 text-[#8B6F47] text-sm font-medium mb-4">
            Our Product Range
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-4">
            Premium Product Range
          </h2>
          <p className="text-[#6B5D54] text-lg">
            From traditional Bengali sweets to modern eggless cakes - we supply the 
            authentic taste your customers crave
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 text-center transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-[#6B5D54] mb-4">
            Looking for something specific? We can customize orders to your needs.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2"
          >
            Request Custom Order
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
});

export default Products;
