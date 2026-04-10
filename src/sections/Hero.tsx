import { useEffect, useRef, memo } from 'react';
import { ArrowRight, Award, Shield, MapPin, Clock, Phone } from 'lucide-react';

const badges = [
  { icon: Award, text: 'Authentic Since 1995' },
  { icon: Shield, text: 'Halal Certified' },
  { icon: Award, text: 'FSA Approved' },
  { icon: Shield, text: 'Eggless Options' },
  { icon: Shield, text: '® UK Registered Trademark' },
];

const stats = [
  { value: '29+', label: 'Years of Craft' },
  { value: '100%', label: 'Super Fresh' },
  { value: 'Daily', label: 'Made Fresh' },
];

// Memoized to prevent unnecessary re-renders
const Hero = memo(function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      if (contentRef.current) {
        contentRef.current.classList.add('hero-content-visible');
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image + overlays + grid (all below text) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Bengali Sweets"
          className="w-full h-full object-cover scale-105"
          fetchPriority="high"
          decoding="async"
          loading="eager"
        />
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-[#1A0800]/80" />
        {/* Left-side darkening so left-column text always readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0800]/70 via-[#1A0800]/30 to-transparent" />
        {/* Full-hero gold grid — CSS only, zero extra requests */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,169,97,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.18) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Stronger grid lines every 4 cells to create major grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,169,97,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.32) 1px, transparent 1px)',
            backgroundSize: '192px 192px',
          }}
        />
        {/* Corner dot accent at grid intersections */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A961 1.5px, transparent 1.5px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Vignette — fade edges to keep focus on content */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(26,8,0,0.55) 100%)',
          }}
        />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C9A961]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#8B6F47]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 container-custom pt-36 pb-24 hero-content"
      >
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left — Main Content */}
          <div className="lg:col-span-3">
            {/* Location pill */}
            <div className="hero-item mb-6" style={{ animationDelay: '0.05s' }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A961]/15 border border-[#C9A961]/40 text-[#C9A961] text-sm font-medium">
                <MapPin className="w-3.5 h-3.5" />
                20 Cambridge Heath Road, London E1 5QH
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className="hero-item text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-5"
              style={{ animationDelay: '0.15s', fontFamily: 'Playfair Display, serif' }}
            >
              Authentic{' '}
              <span className="text-gradient">Bengali</span>
              <br />
              <span className="text-gradient">& Asian</span>{' '}Sweets
            </h1>

            {/* Divider */}
            <div className="hero-item flex items-center gap-4 mb-6" style={{ animationDelay: '0.2s' }}>
              <div className="h-px flex-1 max-w-[60px] bg-[#C9A961]/50" />
              <span className="text-[#C9A961] text-xs uppercase tracking-widest font-semibold">Est. 1995</span>
              <div className="h-px flex-1 max-w-[60px] bg-[#C9A961]/50" />
            </div>

            {/* Subtitle */}
            <p
              className="hero-item text-base md:text-lg text-white leading-relaxed mb-8 max-w-xl"
              style={{ animationDelay: '0.25s' }}
            >
              Freshly made Bengali sweets, mishti doi, eggless cakes,
              creamy milkshakes and desserts.{' '}
              <span className="text-[#C9A961] font-semibold">Everything made super fresh every day.</span>
            </p>

            {/* Badges */}
            <div
              className="hero-item flex flex-wrap gap-2 mb-10"
              style={{ animationDelay: '0.3s' }}
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/20 border border-white/40 text-white text-xs font-semibold backdrop-blur-sm hover:bg-white/30 hover:border-[#C9A961]/60 transition-all duration-300"
                >
                  <badge.icon className="w-3.5 h-3.5 text-[#C9A961]" />
                  {badge.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-item flex flex-wrap gap-4 mb-12"
              style={{ animationDelay: '0.35s' }}
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group"
              >
                Visit Us Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-white font-semibold text-sm hover:bg-[#25D366]/30 transition-all duration-300"
              >
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>

            {/* Stats row */}
            <div
              className="hero-item flex items-center gap-0 border border-white/30 rounded-2xl bg-black/50 backdrop-blur-md overflow-hidden max-w-sm"
              style={{ animationDelay: '0.4s' }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex-1 text-center py-4 px-3 ${index < stats.length - 1 ? 'border-r border-white/25' : ''}`}
                >
                  <div className="text-2xl font-bold text-[#C9A961]">{stat.value}</div>
                  <div className="text-[10px] text-white uppercase tracking-wide mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info Card */}
          <div className="hidden lg:block lg:col-span-2">
            <div
              className="hero-item rounded-3xl border border-white/25 bg-black/65 backdrop-blur-xl p-8 space-y-6"
              style={{ animationDelay: '0.5s' }}
            >
              {/* Open Now badge */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
                  <span className="text-green-400 text-sm font-semibold">Open Today</span>
                </div>
                <span className="text-white/80 text-xs">In-Store</span>
              </div>

              <div className="h-px bg-white/25" />

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C9A961]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#C9A961]" />
                </div>
                <div>
                  <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-white font-semibold text-sm leading-relaxed">
                    20 Cambridge Heath Road<br />London E1 5QH
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C9A961]/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#C9A961]" />
                </div>
                <div>
                  <p className="text-white/80 text-xs uppercase tracking-wider mb-2">Opening Hours</p>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-6 text-sm">
                      <span className="text-white">7 Days a Week</span>
                      <span className="text-[#C9A961] font-bold">10:30am – 11pm</span>
                    </div>
                  </div>
                  {/* Sweet types */}
                  <div className="mt-3 pt-3 border-t border-white/15">
                    <p className="text-white/60 text-[10px] uppercase tracking-wider mb-2">Our Sweets</p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-full bg-[#C9A961] text-[#1A0800] text-[10px] font-bold">Bengali ★ Main</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-medium">Asian</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-medium">Pakistani</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-medium">Indian</span>
                      <span className="px-2.5 py-1 rounded-full bg-white/15 border border-white/25 text-white text-[10px] font-medium">Iranian</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C9A961]/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#C9A961]" />
                </div>
                <div>
                  <p className="text-white/80 text-xs uppercase tracking-wider mb-1">Call Us</p>
                  <a href="tel:07307899085" className="text-white font-semibold text-sm hover:text-[#C9A961] transition-colors">
                    073 0789 9085
                  </a>
                </div>
              </div>

              <div className="h-px bg-white/25" />

              {/* Products teaser */}
              <div>
                <p className="text-white/80 text-xs uppercase tracking-wider mb-3">Fresh Today</p>
                <div className="flex flex-wrap gap-2">
                  {['Bengali Sweets', 'Mishti Doi', 'Eggless Cakes', 'Milkshakes', 'Desserts'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-[#C9A961]/25 border border-[#C9A961]/50 text-[#C9A961] text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <div className="w-1.5 h-3 rounded-full bg-[#C9A961] animate-pulse" />
        </div>
      </div>

      <style>{`
        .hero-content .hero-item {
          opacity: 0;
          transform: translateY(24px);
        }
        .hero-content-visible .hero-item {
          animation: heroFadeIn 0.7s ease-out forwards;
        }
        @keyframes heroFadeIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        .text-gradient {
          background: linear-gradient(135deg, #C9A961 0%, #D4A574 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
});

export default Hero;
