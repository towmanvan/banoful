import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  business: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mohammed Rahman',
    business: 'Spitalfields Grocery',
    location: 'London',
    quote: 'Banoful transformed my corner shop. The authentic taste brings customers from miles away. Consistent quality and reliable service every week. My sales have increased by 40% since partnering with them.',
    rating: 5,
    avatar: 'MR',
  },
  {
    id: 2,
    name: 'Shabana Ahmed',
    business: 'Bengal Store',
    location: 'Birmingham',
    quote: 'The mishti doi is exactly like what we get back home in Dhaka. My customers ask for it by name. Quality is consistently excellent and the clay pots add that authentic touch.',
    rating: 5,
    avatar: 'SA',
  },
  {
    id: 3,
    name: 'Arif Khan',
    business: 'Desi Delights Chain',
    location: 'Manchester',
    quote: 'Reliable delivery, great margins, and authentic products. Banoful helped me expand from one shop to three in just two years. Their support team is always there when I need them.',
    rating: 5,
    avatar: 'AK',
  },
  {
    id: 4,
    name: 'Fatima Begum',
    business: 'Taste of Bengal',
    location: 'Leeds',
    quote: 'I have been working with Banoful for 5 years now. Their eggless cakes are a hit with our vegetarian customers. The freshness and quality is unmatched in the market.',
    rating: 5,
    avatar: 'FB',
  },
  {
    id: 5,
    name: 'Imran Hussain',
    business: 'Asian Supermarket',
    location: 'Glasgow',
    quote: 'The organic ghee sells out within days of delivery. Customers love the authentic taste and the fact that it is grass-fed. Banoful understands what the community wants.',
    rating: 5,
    avatar: 'IH',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#FFFDF7] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 text-[#C9A961]/10">
        <Quote className="w-32 h-32" />
      </div>
      <div className="absolute bottom-10 right-10 text-[#C9A961]/10 rotate-180">
        <Quote className="w-32 h-32" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-[#C9A961]/10 text-[#8B6F47] text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-4">
            What Our Resellers Say
          </h2>
          <p className="reveal stagger-2 text-[#6B5D54] text-lg">
            Join hundreds of successful retailers growing their business with Banoful
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="reveal mb-12">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A961]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              {/* Avatar & Info */}
              <div className="text-center md:text-left">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6B5539] flex items-center justify-center text-2xl font-bold text-[#C9A961] mx-auto md:mx-0 mb-4 shadow-lg">
                  {testimonials[activeIndex].avatar}
                </div>
                <h4 className="text-xl font-bold text-[#2C1810]">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-[#8B6F47] font-medium">
                  {testimonials[activeIndex].business}
                </p>
                <p className="text-[#6B5D54] text-sm">
                  {testimonials[activeIndex].location}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-3">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A961] text-[#C9A961]" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="md:col-span-2">
                <Quote className="w-10 h-10 text-[#C9A961] mb-4" />
                <p className="text-lg md:text-xl text-[#2C1810] leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F5F1E8]">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-[#8B6F47] w-8'
                        : 'bg-[#D4C4A8] hover:bg-[#8B6F47]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full border border-[#D4C4A8] flex items-center justify-center text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white hover:border-[#8B6F47] transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-[#D4C4A8] flex items-center justify-center text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white hover:border-[#8B6F47] transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`reveal stagger-${index + 1}`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6B5539] flex items-center justify-center text-sm font-bold text-[#C9A961]">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2C1810] text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#6B5D54] text-xs">
                      {testimonial.business}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C9A961] text-[#C9A961]" />
                  ))}
                </div>
                <p className="text-[#6B5D54] text-sm leading-relaxed line-clamp-4">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
