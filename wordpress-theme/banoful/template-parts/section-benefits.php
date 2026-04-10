<!-- ===== WHY CHOOSE BANOFUL ===== -->
<section id="reseller" class="section-padding" style="background:linear-gradient(to bottom,#F5F1E8,#FFFDF7);position:relative;overflow:hidden;" aria-label="Why Choose Banoful">
  <div style="position:absolute;top:5rem;left:2.5rem;width:16rem;height:16rem;background:rgba(201,169,97,0.1);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>
  <div style="position:absolute;bottom:5rem;right:2.5rem;width:20rem;height:20rem;background:rgba(139,111,71,0.1);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>

  <div class="container-custom" style="position:relative;z-index:10;">

    <!-- Header -->
    <div class="section-header reveal">
      <span class="section-tag" style="background:rgba(139,111,71,0.1);color:#8B6F47;">Our Qualities</span>
      <h2 class="section-h2">Why Choose Banoful?</h2>
      <p class="section-sub">Experience the finest authentic sweets, eggless cakes, milkshakes and desserts — all super fresh</p>
    </div>

    <!-- Benefits Grid -->
    <div class="benefits-grid">
      <?php
      $benefits = [
        [ 'icon' => 'leaf',    'title' => 'Super Fresh Every Day',      'desc' => 'Every product is made fresh daily on the premises. No frozen, no preservatives — just the real thing, straight from our kitchen to you.', 'feats' => ['Made fresh daily','No preservatives','Best before same day'] ],
        [ 'icon' => 'award',   'title' => 'Authentic Quality',           'desc' => 'Traditional recipes passed down through generations. Your taste buds will feel the difference in every single bite.', 'feats' => ['Traditional methods','Premium ingredients','Consistent taste'] ],
        [ 'icon' => 'cake',    'title' => 'Eggless Cakes &amp; Pastries', 'desc' => 'Our full range of cakes and pastries are 100% eggless, making them perfect for the South Asian vegetarian community.', 'feats' => ['100% Eggless','Vegetarian friendly','Special occasion cakes'] ],
        [ 'icon' => 'coffee',  'title' => 'Milkshakes &amp; Desserts',    'desc' => 'Indulge in our creamy, freshly made milkshakes and delectable desserts. Crafted with real ingredients for an unforgettable taste.', 'feats' => ['Real ingredients','Made to order','Seasonal specials'] ],
        [ 'icon' => 'shield',  'title' => 'Hygiene &amp; Safety',         'desc' => 'Our FSA-approved facility maintains the highest standards of cleanliness and food safety. You can always eat with confidence.', 'feats' => ['FSA approved','Halal certified','HACCP compliant'] ],
        [ 'icon' => 'heart',   'title' => 'Loved by the Community',     'desc' => 'Serving East London and beyond since 1995. A trusted name in the Bengali and South Asian community for generations.', 'feats' => ['29+ years serving','Community favourite','Family owned'] ],
      ];

      $icons = [
        'leaf'   => '<path d="M17 8C8 10 5.9 16.17 3.82 22"/><path d="M17 8c-2.5 2.5-4 4.5-5 7.5"/><path d="M17 8c2 0 4 0 7-1"/><path d="M17 8c-1 2-3 4-5 6.5"/>',
        'award'  => '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>',
        'cake'   => '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/>',
        'coffee' => '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>',
        'shield' => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        'heart'  => '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
      ];
      foreach ( $benefits as $b ) : ?>
      <div class="benefit-card reveal">
        <div class="benefit-icon-box">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <?php echo $icons[ $b['icon'] ]; ?>
          </svg>
        </div>
        <h3 class="benefit-title"><?php echo $b['title']; ?></h3>
        <p class="benefit-desc"><?php echo $b['desc']; ?></p>
        <ul class="benefit-features">
          <?php foreach ( $b['feats'] as $f ) : ?>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <?php echo esc_html( $f ); ?>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
      <?php endforeach; ?>
    </div>

    <!-- Bar -->
    <div class="benefits-bar reveal">
      <div class="benefits-bar-grid">
        <?php
        $bar = ['Halal Certified Products','Fresh Made Daily','Community Favourite Since 1995','Gift Boxes Available'];
        foreach ( $bar as $item ) : ?>
        <div class="benefits-bar-item">
          <div class="benefits-bar-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6F47" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <span class="benefits-bar-text"><?php echo esc_html( $item ); ?></span>
        </div>
        <?php endforeach; ?>
      </div>
    </div>

    <!-- Highlight -->
    <div class="benefits-highlight reveal">
      <div class="benefits-highlight-inner">
        <h3 class="benefits-highlight-title">
          <span style="color:#C9A961;">Super Fresh</span> — Made Every Single Day
        </h3>
        <p class="benefits-highlight-desc">
          From traditional Bengali sweets to creamy milkshakes and eggless celebration cakes,
          everything at Banoful is crafted fresh on the day using premium, authentic ingredients.
        </p>
        <div class="benefits-highlight-stats">
          <div class="benefit-stat"><div class="benefit-stat-value">100%</div><div class="benefit-stat-label">Eggless Cakes</div></div>
          <div class="benefit-stat"><div class="benefit-stat-value">Daily</div><div class="benefit-stat-label">Fresh Production</div></div>
          <div class="benefit-stat"><div class="benefit-stat-value">Halal</div><div class="benefit-stat-label">Certified</div></div>
        </div>
      </div>
    </div>

  </div>
</section>
