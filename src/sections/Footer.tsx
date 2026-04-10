import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Products', href: '#products' },
    { name: 'Visit Us', href: '#contact' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const productLinks = [
    { name: 'Bengali Sweets', href: '#products' },
    { name: 'Indian & Pakistani Sweets', href: '#products' },
    { name: 'Mishti Doi & Yogurt', href: '#products' },
    { name: 'Eggless Cakes', href: '#products' },
    { name: 'Milkshakes & Desserts', href: '#products' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2C1810] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B6F47]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C9A961]/5 rounded-full blur-3xl" />

      {/* Social Media Banner */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A961]/15 border border-[#C9A961]/30 text-[#C9A961] text-sm font-medium mb-3">
              <Heart className="w-3.5 h-3.5" />
              Follow Our Journey
            </span>
            <h3 className="text-xl font-bold text-white">Stay Connected with Banoful</h3>
            <p className="text-white/50 text-sm mt-1">Daily updates, new sweets &amp; behind-the-scenes content</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
            {[
              {
                icon: Facebook,
                label: 'Facebook',
                handle: '@ChittagongBanoful',
                href: 'https://www.facebook.com/ChittagongBanoful',
                color: 'from-[#1877F2]/20 to-[#1877F2]/5',
                border: 'border-[#1877F2]/30',
                iconColor: '#1877F2',
              },
              {
                icon: Instagram,
                label: 'Instagram',
                handle: '@banofulsweets',
                href: 'https://www.instagram.com/banofulsweets/',
                color: 'from-[#E1306C]/20 to-[#833AB4]/5',
                border: 'border-[#E1306C]/30',
                iconColor: '#E1306C',
              },
              {
                icon: Twitter,
                label: 'TikTok',
                handle: '@banofulsweets',
                href: 'https://www.tiktok.com/banofulsweets',
                color: 'from-white/10 to-white/5',
                border: 'border-white/20',
                iconColor: '#ffffff',
              },
              {
                icon: Youtube,
                label: 'YouTube',
                handle: '@banofultv',
                href: 'https://www.youtube.com/@banofultv',
                color: 'from-[#FF0000]/20 to-[#FF0000]/5',
                border: 'border-[#FF0000]/30',
                iconColor: '#FF0000',
              },
              {
                icon: Twitter,
                label: 'X (Twitter)',
                handle: '@banofulsweets',
                href: 'https://x.com/banofulsweets',
                color: 'from-white/10 to-white/5',
                border: 'border-white/20',
                iconColor: '#ffffff',
              },
              {
                icon: Instagram,
                label: 'Threads',
                handle: '@banofulsweets',
                href: 'https://www.threads.net/@banofulsweets',
                color: 'from-white/10 to-white/5',
                border: 'border-white/15',
                iconColor: '#aaaaaa',
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center gap-3 p-5 rounded-2xl bg-gradient-to-br ${s.color} border ${s.border} hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${s.iconColor}20` }}
                >
                  <s.icon className="w-5 h-5" style={{ color: s.iconColor }} />
                </div>
                <div className="text-center">
                  <div className="text-white text-sm font-semibold">{s.label}</div>
                  <div className="text-white/50 text-xs">{s.handle}</div>
                </div>
              </a>
            ))}
          </div>
          {/* Trademark Notice — directly under social media grid */}
          <div className="mt-6 max-w-4xl mx-auto flex items-start gap-3 px-4 py-4 rounded-2xl bg-[#C9A961]/10 border border-[#C9A961]/25">
            <span className="text-[#C9A961] text-lg font-bold flex-shrink-0 mt-0.5">®</span>
            <p className="text-[#C9A961]/90 text-xs leading-relaxed">
              <strong className="text-[#C9A961] font-bold">Banoful® is the only UK Registered Trademark.</strong>{' '}
              We are the sole authorised Banoful in the United Kingdom. Any unauthorised use of the Banoful name,
              logo or brand by any individual or business constitutes trademark infringement and will face full legal consequences.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img
                src="/Banoful Chittagong logo.png"
                alt="Banoful Chittagong Logo"
                className="h-32 w-auto max-w-[320px] object-contain drop-shadow-lg"
                style={{ background: 'transparent' }}
                fetchpriority="high"
                decoding="async"
                loading="eager"
              />
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Authentic Bengali & Asian sweets, eggless cakes, milkshakes and desserts — all super fresh.
              Serving the community from Cambridge Heath Road, East London since 1995.
            </p>
            
            {/* Social Links */}
            <div>
              <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-medium">Follow us</p>
              <div className="flex items-center gap-2">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/ChittagongBanoful', label: 'Facebook' },
                  { icon: Instagram, href: 'https://www.instagram.com/banofulsweets/', label: 'Instagram' },
                  { icon: Twitter, href: 'https://www.tiktok.com/banofulsweets', label: 'TikTok' },
                  { icon: Youtube, href: 'https://www.youtube.com/@banofultv', label: 'YouTube' },
                  { icon: Twitter, href: 'https://x.com/banofulsweets', label: 'X' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center hover:border-[#C9A961]/50 hover:bg-[#C9A961]/10 transition-all duration-300 group"
                  >
                    <social.icon className="w-4 h-4 text-white/60 group-hover:text-[#C9A961] transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#C9A961]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-[#C9A961] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#C9A961]">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-[#C9A961] transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#C9A961]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A961] flex-shrink-0 mt-0.5" />
                <div className="text-white/70 text-sm">
                  <strong className="text-white block mb-1">Our Shop:</strong>
                  20 Cambridge Heath Road<br />
                  London E1 5QH<br />
                  United Kingdom
                </div>
              </li>
              <li>
                <a
                  href="tel:07307899085"
                  className="flex items-center gap-3 text-white/70 hover:text-[#C9A961] transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 text-[#C9A961]" />
                  073 0789 9085
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@banoful.co.uk"
                  className="flex items-center gap-3 text-white/70 hover:text-[#C9A961] transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 text-[#C9A961]" />
                  info@banoful.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm">
                <Clock className="w-5 h-5 text-[#C9A961]" />
                <div>
                  <span className="block text-white font-semibold">7 Days a Week</span>
                  <span className="block text-[#C9A961] font-bold">10:30am – 11pm</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/50 text-sm">
                © 2026 Banoful Ltd. All rights reserved. | 
                <a href="#" className="hover:text-[#C9A961] transition-colors ml-1">Privacy Policy</a> | 
                <a href="#" className="hover:text-[#C9A961] transition-colors ml-1">Terms of Service</a>
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center hover:bg-[#C9A961] hover:text-[#2C1810] transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I'd%20like%20to%20place%20an%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-50 group"
        aria-label="Order via WhatsApp"
      >
        <svg
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-[#2C1810] text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Order via WhatsApp
        </span>
      </a>
    </footer>
  );
};

export default Footer;
