<!-- ===== PARTY ORDERS & DESSERT PLACE ===== -->
<section id="party-orders" class="section-padding" style="background-color:#1A0800;color:white;position:relative;overflow:hidden;" aria-label="Party Orders and Dessert Place">
  <div style="position:absolute;top:0;left:0;width:24rem;height:24rem;background:rgba(201,169,97,0.05);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>
  <div style="position:absolute;bottom:0;right:0;width:20rem;height:20rem;background:rgba(139,111,71,0.08);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>

  <div class="container-custom" style="position:relative;z-index:10;">

    <!-- Header -->
    <div class="section-header reveal">
      <span class="section-tag" style="background:rgba(201,169,97,0.15);border:1px solid rgba(201,169,97,0.3);color:#C9A961;display:inline-flex;align-items:center;gap:0.5rem;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Special Services &amp; Dessert Place
      </span>
      <h2 class="section-h2 white" style="font-family:'Playfair Display',Georgia,serif;">
        Celebrations, Bulk Orders <span class="text-gradient">&amp; Desserts</span>
      </h2>
      <p class="section-sub white">From custom party cakes to massive bulk sweet orders — and a full dessert menu to sit-in and enjoy.</p>
    </div>

    <!-- Two top cards -->
    <div class="party-top-grid">

      <!-- Party Cakes -->
      <div class="party-card reveal-left" style="background:linear-gradient(to bottom right,#2C1810,#1A0800);border:1px solid rgba(201,169,97,0.25);">
        <div class="party-card-icon-wrap">
          <div class="party-icon-box" style="background:rgba(201,169,97,0.2);border:1px solid rgba(201,169,97,0.3);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1"/><path d="M2 21h20"/><path d="M7 8v2"/><path d="M12 8v2"/><path d="M17 8v2"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
          </div>
          <div>
            <h3 class="party-card-title">Party Cake Orders</h3>
            <p class="party-card-subtitle" style="color:#C9A961;">Custom made for your celebration</p>
          </div>
        </div>
        <ul class="party-list flex-1">
          <?php $cakes = ['Custom birthday &amp; celebration cakes','Eggless cakes for all occasions','Tiered wedding &amp; anniversary cakes','Cupcakes &amp; mini cake boxes','Corporate event cakes','Same-day orders where possible'];
          foreach ( $cakes as $c ) : ?>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <?php echo $c; ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <a href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20order%20a%20party%20cake"
           target="_blank" rel="noopener noreferrer"
           class="btn-primary" style="width:100%;justify-content:center;">
          Order a Party Cake
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>

      <!-- Bulk Sweets -->
      <div class="party-card reveal-right" style="background:linear-gradient(to bottom right,#3D2010,#2C1810);border:1px solid rgba(139,111,71,0.4);">
        <div class="party-card-icon-wrap">
          <div class="party-icon-box" style="background:rgba(139,111,71,0.3);border:1px solid rgba(139,111,71,0.4);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A574" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          </div>
          <div>
            <h3 class="party-card-title">Bulk &amp; Party Sweets</h3>
            <p class="party-card-subtitle" style="color:#D4A574;">Any amount at competitive prices</p>
          </div>
        </div>
        <div class="party-price-highlight">
          <span class="party-price-value">200kg+</span>
          <div class="party-price-divider"></div>
          <div>
            <div class="party-price-label">Any quantity welcome</div>
            <div class="party-price-sub">Weddings · Dawats · Events · Businesses</div>
          </div>
        </div>
        <ul class="party-list flex-1">
          <?php $bulk = ['Any amount — from 5kg to 200kg+','Bengali sweets, barfi, laddu, jalebi','Competitive bulk pricing','Ideal for weddings, dawats &amp; events','Mishti doi in traditional clay pots','Custom packaging available'];
          foreach ( $bulk as $b ) : ?>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4A574" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <?php echo $b; ?>
          </li>
          <?php endforeach; ?>
        </ul>
        <a href="tel:07307899085"
           style="display:flex;align-items:center;justify-content:center;gap:0.5rem;width:100%;padding:0.75rem;border-radius:0.75rem;background:#8B6F47;color:white;font-weight:700;font-size:0.875rem;text-decoration:none;transition:all 0.3s ease;"
           onmouseover="this.style.background='#7A5F3A'" onmouseout="this.style.background='#8B6F47'">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call for Bulk Pricing
        </a>
      </div>
    </div>

    <!-- Dessert Place Card -->
    <div class="dessert-card reveal">
      <div class="dessert-header">
        <div class="dessert-icon-wrap">
          <div class="party-icon-box" style="background:linear-gradient(to bottom right,rgba(201,169,97,0.3),rgba(139,111,71,0.2));border:1px solid rgba(201,169,97,0.3);">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>
          </div>
          <div>
            <h3 style="font-size:1.5rem;font-weight:700;color:white;">Our Dessert Place</h3>
            <p style="color:#C9A961;font-size:0.875rem;font-weight:500;">Sit in &amp; enjoy something special</p>
          </div>
        </div>
        <div class="dessert-badge">
          <div class="dessert-badge-dot"></div>
          <span class="dessert-badge-text">Dine In Available</span>
        </div>
      </div>

      <div class="dessert-grid">
        <?php
        $desserts = [
          [ 'icon' => 'ice-cream', 'name' => 'Fresh Cream Cakes',    'note' => 'Daily baked, never frozen' ],
          [ 'icon' => 'coffee',    'name' => 'Cream Doughnuts',      'note' => 'Soft, pillowy &amp; freshly filled' ],
          [ 'icon' => 'coffee',    'name' => 'Arabian Coffee',       'note' => 'Rich cardamom brew' ],
          [ 'icon' => 'ice-cream', 'name' => 'Fresh Ice Cream',      'note' => 'Scooped to order' ],
          [ 'icon' => 'ice-cream', 'name' => 'Premium Milkshakes',   'note' => 'Real fruit &amp; ice cream' ],
          [ 'icon' => 'cake',      'name' => 'Dessert Plates',       'note' => 'Mixed sweet sharing platters' ],
        ];
        foreach ( $desserts as $d ) : ?>
        <div class="dessert-item">
          <div class="dessert-item-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <?php if ($d['icon'] === 'ice-cream') : ?>
              <path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"/>
              <?php elseif ($d['icon'] === 'coffee') : ?>
              <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
              <?php else : ?>
              <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2 1 2 1"/><path d="M2 21h20"/>
              <?php endif; ?>
            </svg>
          </div>
          <div>
            <div class="dessert-item-name"><?php echo $d['name']; ?></div>
            <div class="dessert-item-note"><?php echo $d['note']; ?></div>
          </div>
        </div>
        <?php endforeach; ?>
      </div>

      <div class="dessert-cta">
        <a href="https://wa.me/447307899085?text=Hi%20Banoful%2C%20I%27d%20like%20to%20know%20more%20about%20your%20dessert%20menu"
           target="_blank" rel="noopener noreferrer" class="btn-primary">
          View Dessert Menu
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
        <a href="tel:07307899085" class="btn-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          073 0789 9085
        </a>
      </div>
    </div>

  </div>
</section>
