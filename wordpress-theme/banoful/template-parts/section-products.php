<?php $img = get_template_directory_uri() . '/assets/images/'; ?>
<!-- ===== PRODUCTS ===== -->
<section id="products" class="section-padding" aria-label="Our Products">
  <div style="position:absolute;top:0;right:0;width:24rem;height:24rem;background:rgba(201,169,97,0.05);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>
  <div style="position:absolute;bottom:0;left:0;width:24rem;height:24rem;background:rgba(139,111,71,0.05);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>

  <div class="container-custom" style="position:relative;z-index:10;">

    <!-- Header -->
    <div class="section-header reveal">
      <span class="section-tag" style="background:rgba(201,169,97,0.1);color:#8B6F47;">Our Product Range</span>
      <h2 class="section-h2">Premium Product Range</h2>
      <p class="section-sub">From traditional Bengali sweets to modern eggless cakes — we have the authentic taste your customers crave</p>
    </div>

    <!-- Grid -->
    <div class="products-grid">

      <?php
      $products = [
        [
          'name'     => 'Bengali Mithai Collection',
          'category' => 'Traditional Sweets',
          'desc'     => 'Authentic Rasogolla, Cham Cham, Sandesh, Pantua, and more. Made fresh daily with traditional recipes passed down through generations.',
          'image'    => 'bengali-sweets.jpg',
          'badge'    => 'Bestseller',
          'features' => [ 'Halal', 'Fresh Daily', 'Traditional' ],
        ],
        [
          'name'     => 'Mishti Doi (Sweet Yogurt)',
          'category' => 'Sweet Yogurt',
          'desc'     => 'Famous Bengali sweet yogurt in traditional earthenware pots. Rich, creamy, and authentically prepared with no preservatives.',
          'image'    => 'mishti-doi.jpg',
          'badge'    => 'Premium',
          'features' => [ 'Signature', 'Clay Pot', 'No Preservatives' ],
        ],
        [
          'name'     => 'Eggless Cakes &amp; Pastries',
          'category' => 'Bakery',
          'desc'     => 'Premium eggless cakes, cupcakes, and pastries. Perfect for the South Asian vegetarian market and special occasions.',
          'image'    => 'eggless-cakes.jpg',
          'badge'    => 'Popular',
          'features' => [ 'Eggless', 'Vegetarian', 'Fresh Baked' ],
        ],
        [
          'name'     => 'Natural Yogurt &amp; Dahi',
          'category' => 'Dairy',
          'desc'     => 'Pure, thick natural yogurt made traditionally. Perfect for cooking, raita, and direct consumption. No added sugar.',
          'image'    => 'natural-yogurt.jpg',
          'badge'    => '',
          'features' => [ 'Natural', 'Thick Set', 'No Added Sugar' ],
        ],
        [
          'name'     => 'Milkshakes &amp; Desserts',
          'category' => 'Beverages &amp; Desserts',
          'desc'     => 'Indulge in our creamy, freshly made milkshakes and irresistible desserts. Made with real ingredients in exciting flavours.',
          'image'    => 'bengali-sweets.jpg',
          'badge'    => 'New',
          'features' => [ 'Real Ingredients', 'Made Fresh', 'Many Flavours' ],
        ],
        [
          'name'     => 'Indian &amp; Pakistani Sweets',
          'category' => 'Regional Specialties',
          'desc'     => 'Gulab Jamun, Barfi varieties, Laddu, Jalebi, and more. Catering to all South Asian tastes and festivals.',
          'image'    => 'indian-sweets.jpg',
          'badge'    => '',
          'features' => [ 'Multi-Regional', 'Premium', 'Festival Ready' ],
        ],
      ];

      foreach ( $products as $product ) : ?>
      <article class="product-card reveal">
        <div class="product-card-img">
          <img src="<?php echo esc_url( $img . $product['image'] ); ?>"
               alt="<?php echo esc_attr( strip_tags( $product['name'] ) ); ?>"
               loading="lazy" width="400" height="224" />
          <?php if ( $product['badge'] ) : ?>
          <span class="product-badge"><?php echo esc_html( $product['badge'] ); ?></span>
          <?php endif; ?>
        </div>
        <div class="product-card-body">
          <span class="product-category"><?php echo $product['category']; ?></span>
          <h3 class="product-name"><?php echo $product['name']; ?></h3>
          <p class="product-desc"><?php echo $product['desc']; ?></p>
          <div class="product-features">
            <?php foreach ( $product['features'] as $f ) : ?>
            <span class="product-feature">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              <?php echo esc_html( $f ); ?>
            </span>
            <?php endforeach; ?>
          </div>
          <a href="#contact" onclick="scrollToSection(event,'#contact')" class="product-cta">
            Find Out More
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </article>
      <?php endforeach; ?>
    </div>

    <!-- Bottom CTA -->
    <div class="reveal" style="text-align:center;margin-top:4rem;">
      <p style="color:#6B5D54;margin-bottom:1rem;">Looking for something specific? We can customise orders to your needs.</p>
      <a href="#contact" onclick="scrollToSection(event,'#contact')" class="btn-primary">
        Get in Touch
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </a>
    </div>

  </div>
</section>
