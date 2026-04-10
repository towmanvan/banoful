<?php $img = get_template_directory_uri() . '/assets/images/'; ?>
<!-- ===== HERO ===== -->
<section id="home" aria-label="Welcome to Banoful">

  <!-- Background -->
  <div class="hero-bg">
    <img src="<?php echo esc_url( $img ); ?>hero-bg.jpg"
         alt="Banoful Bengali Sweets — East London"
         width="1920" height="1080"
         loading="eager"
         fetchpriority="high" />
    <div class="hero-overlay-dark"></div>
    <div class="hero-overlay-grad"></div>
    <div class="hero-grid-fine"></div>
    <div class="hero-grid-major"></div>
    <div class="hero-dots"></div>
    <div class="hero-vignette"></div>
  </div>

  <!-- Content -->
  <div class="hero-content">
    <div class="container-custom">
      <div class="hero-grid">

        <!-- Left Column -->
        <div>
          <!-- Location pill -->
          <div class="hero-location-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            20 Cambridge Heath Road, London E1 5QH
          </div>

          <!-- Heading -->
          <h1 class="hero-h1">
            Authentic
            <span class="text-gradient"> Bengali</span><br>
            <span class="text-gradient">&amp; Asian</span> Sweets
          </h1>

          <!-- Divider -->
          <div class="hero-divider">
            <div class="hero-divider-line"></div>
            <span class="hero-divider-text">Est. 1995</span>
            <div class="hero-divider-line"></div>
          </div>

          <!-- Subtitle -->
          <p class="hero-subtitle">
            Freshly made Bengali sweets, mishti doi, eggless cakes,
            creamy milkshakes and desserts.
            <strong>Everything made super fresh every day.</strong>
          </p>

          <!-- Badges -->
          <div class="hero-badges">
            <?php
            $badges = [
              [ 'icon' => 'star',   'text' => 'Authentic Since 1995' ],
              [ 'icon' => 'shield', 'text' => 'Halal Certified' ],
              [ 'icon' => 'star',   'text' => 'FSA Approved' ],
              [ 'icon' => 'shield', 'text' => 'Eggless Options' ],
              [ 'icon' => 'shield', 'text' => '® UK Registered Trademark' ],
            ];
            foreach ( $badges as $b ) : ?>
            <div class="hero-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <?php if ( $b['icon'] === 'shield' ) : ?>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <?php else : ?>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                <?php endif; ?>
              </svg>
              <?php echo esc_html( $b['text'] ); ?>
            </div>
            <?php endforeach; ?>
          </div>

          <!-- CTAs -->
          <div class="hero-cta">
            <a href="#contact" onclick="scrollToSection(event,'#contact')" class="btn-primary">
              Visit Us Today
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20place%20an%20order"
               target="_blank" rel="noopener noreferrer" class="hero-wa-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Order on WhatsApp
            </a>
          </div>

          <!-- Stats -->
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-value">29+</div>
              <div class="hero-stat-label">Years of Craft</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-value">100%</div>
              <div class="hero-stat-label">Super Fresh</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-value">Daily</div>
              <div class="hero-stat-label">Made Fresh</div>
            </div>
          </div>

          <!-- Mobile-only timing info (hidden on desktop where info card shows) -->
          <div class="hero-mobile-timing">
            <div class="hero-mobile-timing-row">
              <div class="hero-card-icon" style="flex-shrink:0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div class="hero-card-label">Opening Hours</div>
                <div class="hero-card-value">7 Days a Week &nbsp;&bull;&nbsp; <span class="hero-card-gold">10:30am – 11pm</span></div>
              </div>
            </div>
            <div class="hero-mobile-timing-row" style="margin-top:0.75rem;">
              <div class="hero-card-icon" style="flex-shrink:0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div class="hero-card-label">Visit Us</div>
                <div class="hero-card-value">20 Cambridge Heath Road, London E1 5QH</div>
              </div>
            </div>
            <div class="hero-mobile-timing-row" style="margin-top:0.75rem;">
              <div class="hero-card-icon" style="flex-shrink:0;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <div class="hero-card-label">Call Us</div>
                <div class="hero-card-value"><a href="tel:07307899085" style="color:white;">073 0789 9085</a></div>
              </div>
            </div>
          </div>

        </div>

        <!-- Right Column — Info Card -->
        <div class="hero-info-card">
          <div class="hero-card-header">
            <div class="hero-card-open">
              <div class="hero-card-open-dot"></div>
              <span class="hero-card-open-text">Open Today</span>
            </div>
            <span style="color:rgba(255,255,255,0.8);font-size:0.75rem;">In-Store</span>
          </div>

          <div class="hero-card-divider"></div>

          <div class="hero-card-row">
            <div class="hero-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <div class="hero-card-label">Visit Us</div>
              <div class="hero-card-value">20 Cambridge Heath Road<br>London E1 5QH</div>
            </div>
          </div>

          <div class="hero-card-row">
            <div class="hero-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <div class="hero-card-label">Opening Hours</div>
              <div class="hero-card-value">
                7 Days a Week<br>
                <span class="hero-card-gold">10:30am – 11pm</span>
              </div>
              <div style="margin-top:0.75rem;padding-top:0.75rem;border-top:1px solid rgba(255,255,255,0.15);">
                <div style="color:rgba(255,255,255,0.6);font-size:0.625rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;">Our Sweets</div>
                <div class="hero-sweet-tags">
                  <span class="hero-sweet-tag main">Bengali ★ Main</span>
                  <span class="hero-sweet-tag secondary">Asian</span>
                  <span class="hero-sweet-tag secondary">Pakistani</span>
                  <span class="hero-sweet-tag secondary">Indian</span>
                  <span class="hero-sweet-tag secondary">Iranian</span>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-card-row">
            <div class="hero-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <div class="hero-card-label">Call Us</div>
              <div class="hero-card-value"><a href="tel:07307899085">073 0789 9085</a></div>
            </div>
          </div>

          <div class="hero-card-divider"></div>

          <div>
            <div style="color:rgba(255,255,255,0.8);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.75rem;">Fresh Today</div>
            <div class="hero-fresh-items">
              <?php foreach ( ['Bengali Sweets','Mishti Doi','Eggless Cakes','Milkshakes','Desserts'] as $item ) : ?>
              <span class="hero-fresh-item"><?php echo esc_html( $item ); ?></span>
              <?php endforeach; ?>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Scroll Indicator -->
  <div class="hero-scroll" aria-hidden="true">
    <div class="hero-scroll-inner">
      <div class="hero-scroll-dot"></div>
    </div>
  </div>

</section>
