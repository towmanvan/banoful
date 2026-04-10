import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';

// Lazy load below-the-fold sections for better initial load performance
const Products = lazy(() => import('./sections/Products'));
const PartyOrders = lazy(() => import('./sections/PartyOrders'));
const Benefits = lazy(() => import('./sections/Benefits'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const About = lazy(() => import('./sections/About'));
const CTA = lazy(() => import('./sections/CTA'));
const Footer = lazy(() => import('./sections/Footer'));

// Enhanced loading component
function SectionLoader() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="relative">
        <div className="w-12 h-12 border-3 border-banoful-ivory border-t-banoful-gold rounded-full animate-spin" />
        <div className="absolute -inset-2 border-2 border-banoful-gold/20 rounded-full animate-pulse" />
      </div>
    </div>
  );
}

function App() {
  // Preload critical resources and optimize performance
  useEffect(() => {
    // Preload hero image with high priority
    const heroImg = new Image();
    heroImg.src = '/hero-bg.jpg';

    // Preconnect to external domains for faster resource loading
    const preconnects = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnects.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      link.crossOrigin = 'anonymous';
      if (!document.querySelector(`link[href="${href}"]`)) {
        document.head.appendChild(link);
      }
    });

    // Prefetch other section images during idle time
    if ('requestIdleCallback' in window) {
      requestIdleCallback(
        () => {
          const images = [
            '/bengali-sweets.jpg',
            '/products-showcase.jpg',
            '/team-photo.jpg',
          ];

          images.forEach((src) => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
          });
        },
        { timeout: 2000 }
      );
    }

    // Add structured data for SEO — LocalBusiness + FoodEstablishment
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['FoodEstablishment', 'Store', 'LocalBusiness'],
      '@id': 'https://banoful.co.uk/#business',
      name: 'Banoful',
      alternateName: ['বনফুল', 'Banoful Chittagong', 'Banoful Sweets'],
      url: 'https://banoful.co.uk',
      logo: 'https://banoful.co.uk/Banoful%20Chittagong%20logo.png',
      image: [
        'https://banoful.co.uk/bengali-sweets.jpg',
        'https://banoful.co.uk/indian-sweets.jpg',
        'https://banoful.co.uk/mishti-doi.jpg',
        'https://banoful.co.uk/eggless-cakes.jpg',
      ],
      description:
        'Banoful (বনফুল) — London\'s home of authentic Bengali and Asian sweets, mishti doi, yogurt, eggless cakes, milkshakes and desserts. Freshly made daily. Halal and vegetarian. Serving East London since 1995.',
      telephone: '+447307899085',
      email: 'info@banoful.co.uk',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '20 Cambridge Heath Road',
        addressLocality: 'London',
        addressRegion: 'Greater London',
        postalCode: 'E1 5QH',
        addressCountry: 'GB',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '51.5195',
        longitude: '-0.0601',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday',
          ],
          opens: '10:30',
          closes: '23:00',
        },
      ],
      servesCuisine: [
        'Bengali',
        'South Asian',
        'Indian',
        'Pakistani',
        'Bangladeshi',
      ],
      hasMenu: 'https://banoful.co.uk/#products',
      priceRange: '£',
      currenciesAccepted: 'GBP',
      paymentAccepted: 'Cash, Credit Card, Debit Card',
      keywords:
        'Bengali sweets London, Asian sweets East London, mithai London, mishti doi London, sandesh London, rasgulla London, gulab jamun London, barfi London, halal sweets London, Bengali sweet shop, Asian sweet shop, East London sweets, eggless cakes London, milkshakes London, Bengali desserts London, Bangladeshi sweets London, desi sweets London, party sweets London, wedding sweets London, Chittagong sweets',
      areaServed: [
        { '@type': 'City', name: 'London' },
        { '@type': 'AdministrativeArea', name: 'East London' },
        { '@type': 'AdministrativeArea', name: 'Tower Hamlets' },
        { '@type': 'AdministrativeArea', name: 'Bethnal Green' },
        { '@type': 'AdministrativeArea', name: 'Whitechapel' },
        { '@type': 'AdministrativeArea', name: 'Hackney' },
        { '@type': 'AdministrativeArea', name: 'Bow' },
        { '@type': 'AdministrativeArea', name: 'Stepney' },
      ],
      foundingDate: '1995',
      sameAs: [
        'https://www.facebook.com/ChittagongBanoful',
        'https://www.instagram.com/banofulsweets/',
        'https://www.youtube.com/@banofultv',
        'https://x.com/banofulsweets',
        'https://www.tiktok.com/@banofulsweets',
        'https://www.threads.net/@banofulsweets',
      ],
    };

    // Product/Menu ItemList schema
    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Banoful Products — Bengali & Asian Sweets Menu',
      description: 'Authentic Bengali and Asian sweets, desserts and cakes made fresh daily in East London.',
      url: 'https://banoful.co.uk/#products',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Product',
            name: 'Bengali Sweets',
            description: 'Traditional Bengali mishti including sandesh, rasgulla, chomchom, kalojam and more. Made fresh daily.',
            image: 'https://banoful.co.uk/bengali-sweets.jpg',
            brand: { '@type': 'Brand', name: 'Banoful' },
            offers: { '@type': 'Offer', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Product',
            name: 'Indian & Pakistani Sweets',
            description: 'Classic Asian mithai including gulab jamun, barfi, ladoo, jalebi and halwa.',
            image: 'https://banoful.co.uk/indian-sweets.jpg',
            brand: { '@type': 'Brand', name: 'Banoful' },
            offers: { '@type': 'Offer', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Product',
            name: 'Mishti Doi & Natural Yogurt',
            description: 'Authentic Bengali mishti doi (sweet yogurt) and natural yogurt, made the traditional way.',
            image: 'https://banoful.co.uk/mishti-doi.jpg',
            brand: { '@type': 'Brand', name: 'Banoful' },
            offers: { '@type': 'Offer', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Product',
            name: 'Eggless Cakes',
            description: 'Beautiful eggless celebration cakes — perfect for halal-friendly birthdays, weddings and events.',
            image: 'https://banoful.co.uk/eggless-cakes.jpg',
            brand: { '@type': 'Brand', name: 'Banoful' },
            offers: { '@type': 'Offer', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'Product',
            name: 'Milkshakes & Desserts',
            description: 'Rich milkshakes and dessert drinks made with fresh ingredients.',
            brand: { '@type': 'Brand', name: 'Banoful' },
            offers: { '@type': 'Offer', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'Product',
            name: 'Organic Ghee',
            description: 'Pure organic ghee, traditionally prepared.',
            image: 'https://banoful.co.uk/organic-ghee.jpg',
            brand: { '@type': 'Brand', name: 'Banoful' },
            offers: { '@type': 'Offer', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' },
          },
        },
      ],
    };

    // BreadcrumbList schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://banoful.co.uk/',
        },
      ],
    };

    [localBusinessSchema, productSchema, breadcrumbSchema].forEach((schema, i) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `schema-${i}`;
      script.text = JSON.stringify(schema);
      if (!document.querySelector(`#schema-${i}`)) {
        document.head.appendChild(script);
      }
    });

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-banoful-cream">
      {/* Header - always visible, not lazy loaded */}
      <Header />

      <main>
        {/* Hero - critical, not lazy loaded */}
        <Hero />

        {/* Below-the-fold sections - lazy loaded for better performance */}
        <Suspense fallback={<SectionLoader />}>
          <Products />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <PartyOrders />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Benefits />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>

      {/* Footer - lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
