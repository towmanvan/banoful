import { useEffect, useRef } from 'react';
import {
  Cake,
  Coffee,
  IceCream,
  Package,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
} from 'lucide-react';

const partyCakes = [
  'Custom birthday & celebration cakes',
  'Eggless cakes for all occasions',
  'Tiered wedding & anniversary cakes',
  'Cupcakes & mini cake boxes',
  'Corporate event cakes',
  'Same-day orders where possible',
];

const bulkSweets = [
  'Any amount — from 5kg to 200kg+',
  'Bengali sweets, barfi, laddu, jalebi',
  'Competitive bulk pricing',
  'Ideal for weddings, dawats & events',
  'Mishti doi in traditional clay pots',
  'Custom packaging available',
];

const dessertMenu = [
  { icon: IceCream, item: 'Fresh Cream Cakes', note: 'Daily baked, never frozen' },
  { icon: Coffee, item: 'Cream Doughnuts', note: 'Soft, pillowy & freshly filled' },
  { icon: Coffee, item: 'Arabian Coffee', note: 'Rich cardamom brew' },
  { icon: IceCream, item: 'Fresh Ice Cream', note: 'Scooped to order' },
  { icon: IceCream, item: 'Premium Milkshakes', note: 'Real fruit & ice cream' },
  { icon: Cake, item: 'Dessert Plates', note: 'Mixed sweet sharing platters' },
];

const PartyOrders = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="party-orders"
      ref={sectionRef}
      className="section-padding bg-[#1A0800] text-white relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#8B6F47]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* ── Section Header ── */}
        <div className="reveal text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A961]/15 border border-[#C9A961]/30 text-[#C9A961] text-sm font-semibold mb-4">
            <Star className="w-3.5 h-3.5" />
            Special Services &amp; Dessert Place
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Celebrations, Bulk Orders{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C9A961, #E6C97A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>& Desserts</span>
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            From custom party cakes to massive bulk sweet orders — and a full dessert menu to sit-in and enjoy.
          </p>
        </div>

        {/* ── Top Two Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Party Cake Orders */}
          <div className="reveal-left rounded-3xl border border-[#C9A961]/25 bg-gradient-to-br from-[#2C1810] to-[#1A0800] p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A961]/20 border border-[#C9A961]/30 flex items-center justify-center flex-shrink-0">
                <Cake className="w-7 h-7 text-[#C9A961]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Party Cake Orders</h3>
                <p className="text-[#C9A961] text-sm font-medium">Custom made for your celebration</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {partyCakes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A961] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20order%20a%20party%20cake"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#C9A961] hover:bg-[#B8933A] text-[#1A0800] font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              Order a Party Cake
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Bulk / Party Sweets */}
          <div className="reveal-right rounded-3xl border border-[#8B6F47]/40 bg-gradient-to-br from-[#3D2010] to-[#2C1810] p-8 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#8B6F47]/30 border border-[#8B6F47]/40 flex items-center justify-center flex-shrink-0">
                <Package className="w-7 h-7 text-[#D4A574]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bulk & Party Sweets</h3>
                <p className="text-[#D4A574] text-sm font-medium">Any amount at competitive prices</p>
              </div>
            </div>
            {/* Price highlight */}
            <div className="flex items-center gap-3 mb-6 px-4 py-3 rounded-xl bg-[#C9A961]/10 border border-[#C9A961]/25">
              <span className="text-3xl font-bold text-[#C9A961]">200kg+</span>
              <div className="h-8 w-px bg-[#C9A961]/30" />
              <div>
                <p className="text-white text-sm font-semibold">Any quantity welcome</p>
                <p className="text-white/50 text-xs">Weddings · Dawats · Events · Businesses</p>
              </div>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {bulkSweets.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A574] flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="tel:07307899085"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#8B6F47] hover:bg-[#7A5F3A] text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call for Bulk Pricing
            </a>
          </div>
        </div>

        {/* ── Dessert Place Card ── */}
        <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-r from-[#2C1810] via-[#3D1A08] to-[#2C1810] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A961]/30 to-[#8B6F47]/20 border border-[#C9A961]/30 flex items-center justify-center flex-shrink-0">
                <Coffee className="w-7 h-7 text-[#C9A961]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Our Dessert Place</h3>
                <p className="text-[#C9A961] text-sm font-medium">Sit in &amp; enjoy something special</p>
              </div>
            </div>
            <div className="md:ml-auto flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-bold uppercase tracking-wide">Dine In Available</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dessertMenu.map((d, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C9A961]/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A961]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A961]/25 transition-colors">
                  <d.icon className="w-5 h-5 text-[#C9A961]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{d.item}</p>
                  <p className="text-white/50 text-xs">{d.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dessert%20menu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#C9A961] hover:bg-[#B8933A] text-[#1A0800] font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg"
            >
              View Dessert Menu
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:07307899085"
              className="flex items-center justify-center gap-2 flex-1 sm:flex-none px-6 py-3 rounded-xl border border-white/25 text-white hover:bg-white/10 font-semibold text-sm transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-[#C9A961]" />
              073 0789 9085
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartyOrders;
