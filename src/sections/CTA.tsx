import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
    // Show success dialog
    setIsDialogOpen(true);
    // Reset form
    setFormData({
      name: '',
      business: '',
      email: '',
      phone: '',
      message: '',
    });
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
                  className="w-full btn-primary justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-center text-xs text-[#6B5D54]">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-[#2C1810]">
              Application Submitted!
            </DialogTitle>
            <DialogDescription className="text-center text-[#6B5D54]">
              Thank you for getting in touch with Banoful. We'll respond to your message as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="btn-primary"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTA;
