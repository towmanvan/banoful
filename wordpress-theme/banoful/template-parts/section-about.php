<?php $img = get_template_directory_uri() . '/assets/images/'; ?>
<!-- ===== ABOUT ===== -->
<section id="about" class="section-padding" style="background-color:#FFFDF7;position:relative;overflow:hidden;" aria-label="About Banoful">
  <div style="position:absolute;top:0;right:0;width:24rem;height:24rem;background:rgba(201,169,97,0.05);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>
  <div style="position:absolute;bottom:0;left:0;width:20rem;height:20rem;background:rgba(139,111,71,0.05);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>

  <div class="container-custom" style="position:relative;z-index:10;">
    <div class="about-grid">

      <!-- Left -->
      <div>
        <span class="section-tag reveal" style="background:rgba(201,169,97,0.1);color:#8B6F47;">About Banoful</span>
        <h2 class="section-h2 reveal stagger-1">
          Preserving Authentic Bengali Sweet Traditions Since
          <span class="text-gradient"> 1995</span>
        </h2>
        <div class="about-text reveal stagger-2">
          <p>Banoful was founded with a simple mission: to bring the authentic taste of Bengali sweets to the heart of East London. What started as a small family kitchen has grown into one of the community's most loved sweet shops.</p>
          <p>Our name "Banoful" (বনফুল) means "wild flower" in Bengali, representing the natural, pure ingredients we use in all our products. Every sweet, eggless cake, milkshake and dessert carries the legacy of traditional recipes passed down through generations.</p>
          <p>Find us at <strong>20 Cambridge Heath Road, London E1 5QH</strong>. Everything is made super fresh on the day — come in and taste the difference for yourself.</p>
        </div>
        <div class="cert-list reveal stagger-3">
          <?php foreach ( ['Halal Certified','FSA Approved','HACCP Compliant','ISO 22000'] as $c ) : ?>
          <div class="cert-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <?php echo esc_html( $c ); ?>
          </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Right -->
      <div class="reveal-right">
        <div class="about-img-wrap">
          <div class="about-img">
            <img src="<?php echo esc_url( $img ); ?>bengali-sweets.jpg"
                 alt="Banoful — Authentic Bengali Sweets Production"
                 loading="lazy" width="600" height="450" />
          </div>
          <div class="about-stats-card">
            <div class="about-stats-inner">
              <?php
              $stats = [
                [ 'icon' => 'calendar', 'val' => '29+',   'label' => 'Years of Excellence' ],
                [ 'icon' => 'users',    'val' => '1000+', 'label' => 'Happy Customers' ],
                [ 'icon' => 'award',    'val' => '15+',   'label' => 'Product Categories' ],
                [ 'icon' => 'map-pin',  'val' => 'E1 5QH','label' => 'Cambridge Heath Rd' ],
              ];
              $icons = [
                'calendar' => '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
                'users'    => '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
                'award'    => '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>',
                'map-pin'  => '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
              ];
              foreach ($stats as $s) : ?>
              <div class="about-stat">
                <div class="about-stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <?php echo $icons[ $s['icon'] ]; ?>
                  </svg>
                </div>
                <div class="about-stat-value"><?php echo esc_html( $s['val'] ); ?></div>
                <div class="about-stat-label"><?php echo esc_html( $s['label'] ); ?></div>
              </div>
              <?php endforeach; ?>
            </div>
          </div>
          <div class="about-badge" aria-hidden="true">
            <div class="about-badge-text">
              <div class="about-badge-value">100%</div>
              <div class="about-badge-label">Authentic</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Values -->
    <div class="about-values-grid reveal">
      <?php
      $values = [
        [ 'title' => 'Traditional Recipes',  'desc' => 'Every product is made using authentic recipes passed down through generations of sweet makers.' ],
        [ 'title' => 'Premium Ingredients', 'desc' => 'We source only the finest quality ingredients, from pure milk to premium saffron and cardamom.' ],
        [ 'title' => 'Hygiene First',        'desc' => 'Our FSA-approved facility maintains the highest standards of cleanliness and food safety.' ],
      ];
      foreach ($values as $v) : ?>
      <div class="about-value-card hover-lift">
        <h3 class="about-value-title"><?php echo esc_html( $v['title'] ); ?></h3>
        <p class="about-value-desc"><?php echo esc_html( $v['desc'] ); ?></p>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>
