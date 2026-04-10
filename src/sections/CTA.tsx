import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi Banoful, I'd like to get in touch.`,
      ``,
      `Name: ${formData.name}`,
      formData.business ? `Business: ${formData.business}` : null,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formData.message ? `\nMessage: ${formData.message}` : null,
    ].filter(Boolean).join('\n');

    window.open(
      `https://wa.me/447307899085?text=${encodeURIComponent(lines)}`,
      '_blank',
      'noopener,noreferrer'
    );

    setFormData({ name: '', business: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-[#8B6F47] to-[#6B5539] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-white/20 rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="reveal inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#C9A961] text-sm font-medium mb-4 border border-white/20">
              Get Started Today
            </span>
            <h2 className="reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Visit Us or Get in Touch
            </h2>
            <p className="reveal stagger-2 text-white/80 text-lg leading-relaxed mb-8">
              Come and taste the difference at our shop on Cambridge Heath Road, London E1 5QH.
              Super fresh Bengali sweets, eggless cakes, milkshakes and desserts — ready for you every day.
            </p>

            {/* Contact Options */}
            <div className="reveal stagger-3 space-y-4">
              <a
                href="tel:07307899085"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#2C1810]" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Call us directly</div>
                  <div className="text-white font-semibold group-hover:text-[#C9A961] transition-colors">
                    073 0789 9085
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@banoful.co.uk"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#2C1810]" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">Email us</div>
                  <div className="text-white font-semibold group-hover:text-[#C9A961] transition-colors">
                    info@banoful.co.uk
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/447307899085"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-sm">WhatsApp Orders</div>
                  <div className="text-white font-semibold group-hover:text-[#25D366] transition-colors">
                    Quick Response Guaranteed
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="reveal stagger-4">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#2C1810] mb-2">
                Send Us a Message
              </h3>
              <p className="text-[#6B5D54] text-sm mb-6">
                Have a question or special order? We'll get back to you quickly
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D5] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20 outline-none transition-all text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1">
                      Business Name (Optional)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D5] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20 outline-none transition-all text-sm"
                      placeholder="Your Store Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D5] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C1810] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E0D5] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20 outline-none transition-all text-sm"
                      placeholder="07307899085"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#2C1810] mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E0D5] focus:border-[#8B6F47] focus:ring-2 focus:ring-[#8B6F47]/20 outline-none transition-all text-sm resize-none"
                    placeholder="Tell us about your business and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Send via WhatsApp
                </button>

                <p className="text-center text-xs text-[#6B5D54]">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CTA;
