import { useRef, useEffect, useState, memo } from 'react';
import { 
  Leaf, 
  Award, 
  Cake, 
  Coffee, 
  Factory, 
  Heart,
  CheckCircle2,
  Clock,
  Star,
  Package
} from 'lucide-react';

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const benefits: Benefit[] = [
  {
    icon: Leaf,
    title: 'Super Fresh Every Day',
    description: 'Every product is made fresh daily on the premises. No frozen, no preservatives — just the real thing, straight from our kitchen to you.',
    features: ['Made fresh daily', 'No preservatives', 'Best before same day'],
  },
  {
    icon: Award,
    title: 'Authentic Quality',
    description: 'Traditional recipes passed down through generations. Your taste buds will feel the difference in every single bite.',
    features: ['Traditional methods', 'Premium ingredients', 'Consistent taste'],
  },
  {
    icon: Cake,
    title: 'Eggless Cakes & Pastries',
    description: 'Our full range of cakes and pastries are 100% eggless, making them perfect for the South Asian vegetarian community and special occasions.',
    features: ['100% Eggless', 'Vegetarian friendly', 'Special occasion cakes'],
  },
  {
    icon: Coffee,
    title: 'Milkshakes & Desserts',
    description: 'Indulge in our creamy, freshly made milkshakes and delectable desserts. Crafted with real ingredients for an unforgettable taste.',
    features: ['Real ingredients', 'Made to order', 'Seasonal specials'],
  },
  {
    icon: Factory,
    title: 'Hygiene & Safety',
    description: 'Our FSA-approved facility maintains the highest standards of cleanliness and food safety. You can always eat with confidence.',
    features: ['FSA approved', 'Halal certified', 'HACCP compliant'],
  },
  {
    icon: Heart,
    title: 'Loved by the Community',
    description: 'Serving East London and beyond since 1995. A trusted name in the Bengali and South Asian community for generations.',
    features: ['29+ years serving', 'Community favourite', 'Family owned'],
  },
];

const additionalBenefits = [
  { icon: CheckCircle2, text: 'Halal Certified Products' },
  { icon: Clock, text: 'Fresh Made Daily' },
  { icon: Star, text: 'Community Favourite Since 1995' },
  { icon: Package, text: 'Gift Boxes Available' },
];

// Memoized benefit card
const BenefitCard = memo(function BenefitCard({ 
  benefit, 
  index 
}: { 
  benefit: Benefit; 
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

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 80}ms`,
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift h-full relative overflow-hidden gpu-accelerate">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A961]/20 to-[#8B6F47]/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B6F47] to-[#6B5539] flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform duration-300 gpu-accelerate">
            <benefit.icon className="w-8 h-8 text-[#C9A961]" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-[#2C1810] mb-3 hover:text-[#8B6F47] transition-colors">
            {benefit.title}
          </h3>
          <p className="text-[#6B5D54] text-sm leading-relaxed mb-5">
            {benefit.description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {benefit.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-[#6B5D54]"
              >
                <CheckCircle2 className="w-4 h-4 text-[#C9A961] flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

const Benefits = memo(function Benefits() {
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

  return (
    <section
      id="reseller"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-[#F5F1E8] to-[#FFFDF7] relative overflow-hidden content-visibility-auto"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#C9A961]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#8B6F47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B6F47]/10 text-[#8B6F47] text-sm font-medium mb-4">
            Partner With Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-4">
            Why Choose Banoful?
          </h2>
          <p className="text-[#6B5D54] text-lg">
            Experience the finest authentic sweets, eggless cakes, milkshakes and desserts — all super fresh
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Additional Benefits Bar */}
        <div 
          className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalBenefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-[#F5F1E8] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#8B6F47]" />
                </div>
                <span className="text-sm font-medium text-[#2C1810] hidden sm:block">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Profit Margin Highlight */}
        <div 
          className={`mt-16 bg-gradient-to-r from-[#8B6F47] to-[#6B5539] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden transition-all duration-600 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#C9A961] rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              <span className="text-[#C9A961]">Super Fresh</span> — Made Every Single Day
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              From traditional Bengali sweets to creamy milkshakes and eggless celebration cakes,
              everything at Banoful is crafted fresh on the day using premium, authentic ingredients.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A961]">100%</div>
                <div className="text-white/70 text-sm">Eggless Cakes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A961]">Daily</div>
                <div className="text-white/70 text-sm">Fresh Production</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A961]">Halal</div>
                <div className="text-white/70 text-sm">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Benefits;
