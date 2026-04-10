import { useEffect, useRef } from 'react';
import { Award, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const stats = [
  { icon: Calendar, value: '29+', label: 'Years of Excellence' },
  { icon: Users, value: '1000+', label: 'Happy Customers' },
  { icon: Award, value: '15+', label: 'Product Categories' },
  { icon: MapPin, value: 'E1 5QH', label: 'Cambridge Heath Rd' },
];

const certifications = [
  'Halal Certified',
  'FSA Approved',
  'HACCP Compliant',
  'ISO 22000',
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-[#FFFDF7] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B6F47]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="reveal inline-block px-4 py-1.5 rounded-full bg-[#C9A961]/10 text-[#8B6F47] text-sm font-medium mb-4">
              About Banoful
            </span>
            <h2 className="reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-6">
              Preserving Authentic Bengali Sweet Traditions Since{' '}
              <span className="text-gradient">1995</span>
            </h2>
            <div className="reveal stagger-2 space-y-4 text-[#6B5D54] leading-relaxed">
              <p>
                Banoful was founded with a simple mission: to bring the authentic taste of 
                Bengali sweets to the heart of East London. What started as a small family kitchen has 
                grown into one of the community's most loved sweet shops.
              </p>
              <p>
                Our name "Banoful" (বনফুল) means "wild flower" in Bengali, representing 
                the natural, pure ingredients we use in all our products. Every sweet, eggless cake, 
                milkshake and dessert carries the legacy of traditional recipes passed down through generations.
              </p>
              <p>
                Find us at <strong>20 Cambridge Heath Road, London E1 5QH</strong>. 
                Everything is made super fresh on the day — come in and taste the difference for yourself.
              </p>
            </div>

            {/* Certifications */}
            <div className="reveal stagger-3 mt-8">
              <h4 className="font-semibold text-[#2C1810] mb-4">Our Certifications</h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5F1E8] text-[#8B6F47] text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="reveal-right">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/bengali-sweets.jpg"
                  alt="Banuful Production"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-6 h-6 text-[#C9A961] mx-auto mb-2" />
                      <div className="text-2xl font-bold text-[#8B6F47]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#6B5D54]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#C9A961] to-[#D4A574] rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2C1810]">100%</div>
                  <div className="text-[10px] text-[#2C1810] font-medium">Authentic</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="reveal mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Traditional Recipes',
              description: 'Every product is made using authentic recipes passed down through generations of sweet makers.',
            },
            {
              title: 'Premium Ingredients',
              description: 'We source only the finest quality ingredients, from pure milk to premium saffron and cardamom.',
            },
            {
              title: 'Hygiene First',
              description: 'Our FSA-approved facility maintains the highest standards of cleanliness and food safety.',
            },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white shadow-lg hover-lift"
            >
              <h3 className="text-xl font-bold text-[#2C1810] mb-3">{value.title}</h3>
              <p className="text-[#6B5D54] text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
