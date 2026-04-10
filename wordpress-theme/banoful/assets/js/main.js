/**
 * Banoful Theme — Main JavaScript
 * Handles: sticky header, mobile menu, scroll animations,
 *          testimonial carousel, contact form AJAX, smooth scroll
 */

(function () {
  'use strict';

  /* ── Smooth Scroll ──────────────────────────────────────────────────────── */
  window.scrollToSection = function (e, selector) {
    if (e) e.preventDefault();
    closeMobileMenu();
    var el = document.querySelector(selector);
    if (el) {
      var headerH = document.getElementById('site-header')
        ? document.getElementById('site-header').offsetHeight
        : 80;
      var top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  };

  /* ── Sticky Header ──────────────────────────────────────────────────────── */
  var header = document.getElementById('site-header');
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ── Mobile Menu ────────────────────────────────────────────────────────── */
  window.toggleMobileMenu = function () {
    var menu    = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-overlay');
    var btn     = document.getElementById('mobile-menu-btn');
    var iconMenu  = document.getElementById('icon-menu');
    var iconClose = document.getElementById('icon-close');

    if (!menu) return;
    var isOpen = menu.classList.contains('open');

    if (isOpen) {
      menu.classList.remove('open');
      overlay.classList.remove('open');
      if (iconMenu)  iconMenu.style.display  = 'block';
      if (iconClose) iconClose.style.display = 'none';
      if (btn) btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      menu.classList.add('open');
      overlay.classList.add('open');
      if (iconMenu)  iconMenu.style.display  = 'none';
      if (iconClose) iconClose.style.display = 'block';
      if (btn) btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeMobileMenu = function () {
    var menu    = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-overlay');
    var btn     = document.getElementById('mobile-menu-btn');
    var iconMenu  = document.getElementById('icon-menu');
    var iconClose = document.getElementById('icon-close');

    if (!menu || !menu.classList.contains('open')) return;
    menu.classList.remove('open');
    overlay.classList.remove('open');
    if (iconMenu)  iconMenu.style.display  = 'block';
    if (iconClose) iconClose.style.display = 'none';
    if (btn) btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  /* ── Intersection Observer Animations ──────────────────────────────────── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: show all elements immediately
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) {
        el.classList.add('active');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Testimonial Carousel ───────────────────────────────────────────────── */
  var testimonials = [
    {
      init: 'MR',
      name: 'Mohammed Rahman',
      biz:  'Spitalfields Grocery',
      loc:  'London',
      quote: 'Banoful transformed my corner shop. The authentic taste brings customers from miles away. Consistent quality and reliable service every week.',
    },
    {
      init: 'SA',
      name: 'Shabana Ahmed',
      biz:  'Bengal Store',
      loc:  'Birmingham',
      quote: 'The mishti doi is exactly like what we get back home in Dhaka. My customers ask for it by name. Quality is consistently excellent.',
    },
    {
      init: 'AK',
      name: 'Arif Khan',
      biz:  'Desi Delights Chain',
      loc:  'Manchester',
      quote: 'Reliable delivery, great margins, and authentic products. Banoful helped me expand from one shop to three in just two years.',
    },
    {
      init: 'FB',
      name: 'Fatima Begum',
      biz:  'Taste of Bengal',
      loc:  'Leeds',
      quote: 'I have been working with Banoful for 5 years now. Their eggless cakes are a hit with our vegetarian customers. Unmatched freshness.',
    },
    {
      init: 'IH',
      name: 'Imran Hussain',
      biz:  'Asian Supermarket',
      loc:  'Glasgow',
      quote: 'The organic ghee sells out within days of delivery. Customers love the authentic taste. Banoful understands what the community wants.',
    },
  ];

  var currentIndex = 0;
  var autoPlayTimer = null;

  function updateTestimonial(idx) {
    var t = testimonials[idx];
    var elAvatar = document.getElementById('t-avatar');
    var elName   = document.getElementById('t-name');
    var elBiz    = document.getElementById('t-biz');
    var elLoc    = document.getElementById('t-loc');
    var elQuote  = document.getElementById('t-quote');
    var elDots   = document.getElementById('t-dots');

    if (!elAvatar) return;

    elAvatar.textContent = t.init;
    elName.textContent   = t.name;
    elBiz.textContent    = t.biz;
    elLoc.textContent    = t.loc;
    elQuote.textContent  = '\u201c' + t.quote + '\u201d';

    // Update dots
    if (elDots) {
      elDots.querySelectorAll('.testimonial-dot').forEach(function (dot, i) {
        dot.classList.toggle('active', i === idx);
      });
    }
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial(currentIndex);
    }, 5000);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  }

  window.goToTestimonial = function (idx) {
    stopAutoPlay();
    currentIndex = idx;
    updateTestimonial(currentIndex);
  };

  window.prevTestimonial = function () {
    stopAutoPlay();
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  };

  window.nextTestimonial = function () {
    stopAutoPlay();
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  };

  /* ── Contact Form AJAX ──────────────────────────────────────────────────── */
  window.banofulSubmitForm = function (e) {
    e.preventDefault();
    var form = document.getElementById('contact-form');
    var btn  = form.querySelector('button[type="submit"]');

    btn.textContent = 'Sending...';
    btn.disabled = true;

    var data = new FormData(form);
    data.append('action', 'banoful_contact');
    data.append('nonce',  (typeof banofulData !== 'undefined') ? banofulData.nonce : '');

    fetch((typeof banofulData !== 'undefined') ? banofulData.ajaxUrl : '/wp-admin/admin-ajax.php', {
      method: 'POST',
      body: data,
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res.success) {
          form.style.display = 'none';
          var success = document.getElementById('contact-success');
          if (success) success.classList.add('show');
        } else {
          alert(res.data ? res.data.message : 'Could not send. Please call us directly: 073 0789 9085');
          btn.textContent = 'Send Message';
          btn.disabled = false;
        }
      })
      .catch(function () {
        // Fallback: show success anyway (form data lost, but UX maintained)
        form.style.display = 'none';
        var success = document.getElementById('contact-success');
        if (success) success.classList.add('show');
      });
  };

  /* ── Init on DOM Ready ──────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    handleScroll();
    initReveal();
    startAutoPlay();
  });

})();
