<?php $img = get_template_directory_uri() . '/assets/images/'; ?>
<!-- ===== FOOTER ===== -->
<footer id="site-footer" role="contentinfo">

  <!-- Social Media Banner -->
  <div class="footer-social-section">
    <div class="container-custom">
      <div class="footer-social-header">
        <div class="footer-social-badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          Follow Our Journey
        </div>
        <h3 class="footer-social-title">Stay Connected with Banoful</h3>
        <p class="footer-social-sub">Daily updates, new sweets &amp; behind-the-scenes content</p>
      </div>

      <div class="social-grid">
        <?php
        $socials = [
          [ 'label' => 'Facebook',   'handle' => '@ChittagongBanoful', 'href' => 'https://www.facebook.com/ChittagongBanoful',   'color' => 'rgba(24,119,242,0.2)',  'border' => 'rgba(24,119,242,0.3)',  'icon_color' => '#1877F2', 'bg_icon' => 'rgba(24,119,242,0.2)' ],
          [ 'label' => 'Instagram',  'handle' => '@banofulsweets',    'href' => 'https://www.instagram.com/banofulsweets/',    'color' => 'rgba(225,48,108,0.2)',  'border' => 'rgba(225,48,108,0.3)', 'icon_color' => '#E1306C', 'bg_icon' => 'rgba(225,48,108,0.2)' ],
          [ 'label' => 'TikTok',     'handle' => '@banofulsweets',    'href' => 'https://www.tiktok.com/@banofulsweets',      'color' => 'rgba(255,255,255,0.1)', 'border' => 'rgba(255,255,255,0.2)', 'icon_color' => '#ffffff', 'bg_icon' => 'rgba(255,255,255,0.1)' ],
          [ 'label' => 'YouTube',    'handle' => '@banofultv',        'href' => 'https://www.youtube.com/@banofultv',         'color' => 'rgba(255,0,0,0.2)',    'border' => 'rgba(255,0,0,0.3)',    'icon_color' => '#FF0000', 'bg_icon' => 'rgba(255,0,0,0.2)' ],
          [ 'label' => 'X (Twitter)','handle' => '@banofulsweets',    'href' => 'https://x.com/banofulsweets',              'color' => 'rgba(255,255,255,0.1)', 'border' => 'rgba(255,255,255,0.2)', 'icon_color' => '#ffffff', 'bg_icon' => 'rgba(255,255,255,0.1)' ],
          [ 'label' => 'Threads',    'handle' => '@banofulsweets',    'href' => 'https://www.threads.net/@banofulsweets',    'color' => 'rgba(255,255,255,0.05)','border' => 'rgba(255,255,255,0.15)', 'icon_color' => '#aaaaaa', 'bg_icon' => 'rgba(255,255,255,0.1)' ],
        ];
        foreach ($socials as $s) : ?>
        <a href="<?php echo esc_url( $s['href'] ); ?>" target="_blank" rel="noopener noreferrer"
           class="social-card"
           style="background:linear-gradient(to bottom right,<?php echo $s['color']; ?>,transparent);border-color:<?php echo $s['border']; ?>;"
           aria-label="<?php echo esc_attr( $s['label'] ); ?> — <?php echo esc_attr( $s['handle'] ); ?>">
          <div class="social-card-icon" style="background-color:<?php echo $s['bg_icon']; ?>;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="<?php echo $s['icon_color']; ?>" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <?php if ($s['label']==='Facebook') : ?>
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              <?php elseif ($s['label']==='Instagram' || $s['label']==='Threads') : ?>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              <?php elseif ($s['label']==='TikTok') : ?>
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
              <?php elseif ($s['label']==='YouTube') : ?>
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              <?php else : ?>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              <?php endif; ?>
            </svg>
          </div>
          <div style="text-align:center;">
            <div class="social-card-name"><?php echo esc_html( $s['label'] ); ?></div>
            <div class="social-card-handle"><?php echo esc_html( $s['handle'] ); ?></div>
          </div>
        </a>
        <?php endforeach; ?>
      </div>

      <!-- Trademark -->
      <div class="trademark-box" style="margin-top:1.5rem;">
        <span class="trademark-symbol">®</span>
        <p class="trademark-text">
          <strong>Banoful® is the only UK Registered Trademark.</strong>
          We are the sole authorised Banoful in the United Kingdom. Any unauthorised use of the Banoful name,
          logo or brand by any individual or business constitutes trademark infringement and will face full legal consequences.
        </p>
      </div>
    </div>
  </div>

  <!-- Main Footer -->
  <div class="footer-main">
    <div class="container-custom">
      <div class="footer-grid">

        <!-- Brand -->
        <div>
          <div class="footer-logo">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
              <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/' . rawurlencode( 'Banoful Chittagong logo.png' ) ); ?>"
                   alt="Banoful Chittagong Logo"
                   loading="lazy" width="320" height="128" />
            </a>
          </div>
          <p class="footer-desc">
            Authentic Bengali &amp; Asian sweets, eggless cakes, milkshakes and desserts — all super fresh.
            Serving the community from Cambridge Heath Road, East London since 1995.
          </p>
          <div class="footer-socials-label">Follow us</div>
          <div class="footer-socials">
            <a href="https://www.facebook.com/ChittagongBanoful" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/banofulsweets/" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@banofultv" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </a>
            <a href="https://x.com/banofulsweets" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="X (Twitter)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@banofulsweets" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="footer-col-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="#home"         onclick="scrollToSection(event,'#home')">Home</a></li>
            <li><a href="#products"     onclick="scrollToSection(event,'#products')">Our Products</a></li>
            <li><a href="#party-orders" onclick="scrollToSection(event,'#party-orders')">Party Orders</a></li>
            <li><a href="#about"        onclick="scrollToSection(event,'#about')">About Us</a></li>
            <li><a href="#contact"      onclick="scrollToSection(event,'#contact')">Contact</a></li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4 class="footer-col-title">Products</h4>
          <ul class="footer-links">
            <li><a href="#products" onclick="scrollToSection(event,'#products')">Bengali Sweets</a></li>
            <li><a href="#products" onclick="scrollToSection(event,'#products')">Indian &amp; Pakistani Sweets</a></li>
            <li><a href="#products" onclick="scrollToSection(event,'#products')">Mishti Doi &amp; Yogurt</a></li>
            <li><a href="#products" onclick="scrollToSection(event,'#products')">Eggless Cakes</a></li>
            <li><a href="#products" onclick="scrollToSection(event,'#products')">Milkshakes &amp; Desserts</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="footer-col-title">Contact Us</h4>
          <div class="footer-contact-item">
            <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <div class="footer-contact-text">
              <strong class="footer-contact-strong">Our Shop:</strong>
              20 Cambridge Heath Road<br>London E1 5QH<br>United Kingdom
            </div>
          </div>
          <div class="footer-contact-item">
            <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <a href="tel:07307899085" class="footer-contact-link">073 0789 9085</a>
          </div>
          <div class="footer-contact-item">
            <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <a href="mailto:info@banoful.co.uk" class="footer-contact-link">info@banoful.co.uk</a>
          </div>
          <div class="footer-contact-item">
            <svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <div class="footer-contact-text">
              <span style="color:white;font-weight:600;">7 Days a Week</span><br>
              <span class="footer-hours-value">10:30am – 11pm</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="footer-bottom">
    <div class="container-custom">
      <div class="footer-bottom-inner">
        <p class="footer-copy">
          &copy; <?php echo date( 'Y' ); ?> Banoful Ltd. All rights reserved. |
          <a href="<?php echo esc_url( get_privacy_policy_url() ); ?>">Privacy Policy</a> |
          <a href="#">Terms of Service</a>
        </p>
        <button class="scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Scroll to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
        </button>
      </div>
    </div>
  </div>

</footer>

<!-- Floating WhatsApp -->
<a id="wa-float" href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I'd%20like%20to%20place%20an%20order"
   target="_blank" rel="noopener noreferrer" aria-label="Order via WhatsApp">
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
  <span class="wa-tooltip">Order via WhatsApp</span>
</a>

<?php wp_footer(); ?>
</body>
</html>
