<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <?php if ( is_front_page() ) : ?>
  <title>Banoful (বনফুল) | Authentic Bengali &amp; Asian Sweets | East London</title>
  <meta name="description" content="Banoful (বনফুল) — London's home of authentic Bengali sweets, Asian mithai, mishti doi, eggless cakes &amp; milkshakes. Freshly made daily at 20 Cambridge Heath Road, East London E1. Open 7 days, 10:30am–11pm. Halal &amp; vegetarian." />
  <meta name="keywords" content="Bengali sweets London, Asian sweets East London, Banoful, বনফুল, mithai London, Indian sweets London, Pakistani sweets London, mishti doi London, sandesh London, rasgulla London, gulab jamun London, barfi London, halal sweets London, Bengali sweet shop London, Asian sweet shop East London, Bengali sweets E1, sweets Cambridge Heath Road, eggless cakes London, milkshakes London, Bengali desserts London, fresh sweets London, Bangladeshi sweets London, desi sweets London, sweet shop London, mithai shop London, Bengali food London, Asian food East London, Chittagong sweets, party sweets London, wedding sweets London, event catering sweets London, best sweets London" />
  <?php else : wp_title( '|', true, 'right' ); endif; ?>

  <meta name="author" content="Banoful Limited" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <link rel="canonical" href="<?php echo esc_url( home_url( '/' ) ); ?>" />

  <!-- Geo / Local SEO -->
  <meta name="geo.region" content="GB-ENG" />
  <meta name="geo.placename" content="London" />
  <meta name="geo.position" content="51.5195;-0.0601" />
  <meta name="ICBM" content="51.5195, -0.0601" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_GB" />
  <meta property="og:url" content="https://banoful.co.uk/" />
  <meta property="og:site_name" content="Banoful" />
  <meta property="og:title" content="Banoful (বনফুল) | Authentic Bengali &amp; Asian Sweets | East London" />
  <meta property="og:description" content="London's home of authentic Bengali sweets, Asian mithai, mishti doi, eggless cakes &amp; milkshakes. Freshly made daily at 20 Cambridge Heath Road, East London. Open 7 days, 10:30am–11pm." />
  <meta property="og:image" content="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@banofulsweets" />
  <meta name="twitter:title" content="Banoful (বনফুল) | Authentic Bengali &amp; Asian Sweets | East London" />
  <meta name="twitter:description" content="London's home of authentic Bengali sweets, Asian mithai, mishti doi, eggless cakes &amp; milkshakes. Open 7 days, 10:30am–11pm." />
  <meta name="twitter:image" content="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/og-image.jpg" />

  <!-- PWA -->
  <meta name="theme-color" content="#C9A961" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="default" />
  <meta name="apple-mobile-web-app-title" content="Banoful" />

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/favicon.png" />
  <link rel="apple-touch-icon" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/images/apple-touch-icon.png" />

  <!-- Preconnect -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Mobile Menu Overlay -->
<div id="mobile-overlay" onclick="closeMobileMenu()"></div>

<!-- Mobile Slide Menu -->
<nav id="mobile-menu" aria-label="Mobile Navigation">
  <ul class="mobile-nav-list">
    <li><a href="#home"         onclick="scrollToSection(event,'#home')">Home</a></li>
    <li><a href="#products"     onclick="scrollToSection(event,'#products')">Our Menu</a></li>
    <li><a href="#party-orders" onclick="scrollToSection(event,'#party-orders')" class="highlight">Party Orders</a></li>
    <li><a href="#party-orders" onclick="scrollToSection(event,'#party-orders')">Dessert Place</a></li>
    <li><a href="#about"        onclick="scrollToSection(event,'#about')">About</a></li>
    <li><a href="#contact"      onclick="scrollToSection(event,'#contact')">Contact</a></li>
  </ul>
  <div class="mobile-nav-divider">
    <a href="tel:07307899085" class="contact-option" style="margin-bottom:0.75rem;">
      <div class="contact-option-icon" style="background-color:#C9A961;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A0800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </div>
      <span style="color:#2C1810;font-weight:600;">073 0789 9085</span>
    </a>
    <a href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20place%20an%20order" target="_blank" rel="noopener noreferrer"
       class="btn-primary" style="width:100%;justify-content:center;margin-top:0.75rem;">
      Order Now on WhatsApp
    </a>
  </div>
</nav>

<!-- Site Header -->
<header id="site-header" role="banner">
  <div class="container-custom">
    <div class="header-inner">

      <!-- Logo -->
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" aria-label="Banoful — Home">
        <?php if ( has_custom_logo() ) {
            the_custom_logo();
        } else { ?>
        <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . rawurlencode( 'Banoful Chittagong logo.png' ) ); ?>"
             alt="Banoful Chittagong Logo"
             width="160" height="48"
             loading="eager"
             fetchpriority="high" />
        <?php } ?>
      </a>

      <!-- Desktop Nav -->
      <nav aria-label="Primary Navigation">
        <ul class="nav-menu">
          <li><a href="#home"         onclick="scrollToSection(event,'#home')">Home</a></li>
          <li><a href="#products"     onclick="scrollToSection(event,'#products')">Our Menu</a></li>
          <li><a href="#party-orders" onclick="scrollToSection(event,'#party-orders')" class="highlight">Party Orders</a></li>
          <li><a href="#party-orders" onclick="scrollToSection(event,'#party-orders')">Dessert Place</a></li>
          <li><a href="#about"        onclick="scrollToSection(event,'#about')">About</a></li>
          <li><a href="#contact"      onclick="scrollToSection(event,'#contact')">Contact</a></li>
        </ul>
      </nav>

      <!-- Desktop CTA -->
      <div class="header-cta">
        <a href="tel:07307899085" class="header-phone">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          073 0789 9085
        </a>
        <a href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20place%20an%20order"
           target="_blank" rel="noopener noreferrer" class="btn-order">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          Order Now
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu" onclick="toggleMobileMenu()">
        <svg id="icon-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        <svg id="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

    </div>
  </div>
</header>
