<!-- ===== CONTACT / CTA ===== -->
<section id="contact" class="section-padding" style="background:linear-gradient(to bottom right,#8B6F47,#6B5539);position:relative;overflow:hidden;" aria-label="Contact Banoful">
  <div style="position:absolute;top:0;left:0;width:24rem;height:24rem;background:rgba(201,169,97,0.1);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>
  <div style="position:absolute;bottom:0;right:0;width:20rem;height:20rem;background:rgba(255,255,255,0.05);border-radius:50%;filter:blur(3rem);pointer-events:none;"></div>

  <div class="container-custom" style="position:relative;z-index:10;">
    <div class="contact-grid">

      <!-- Left -->
      <div>
        <span class="section-tag reveal" style="background:rgba(255,255,255,0.1);color:#C9A961;border:1px solid rgba(255,255,255,0.2);">Get in Touch</span>
        <h2 class="section-h2 white reveal stagger-1">Visit Us or Get in Touch</h2>
        <p class="section-sub white reveal stagger-2" style="margin-bottom:2rem;">
          Come and taste the difference at our shop on Cambridge Heath Road, London E1 5QH.
          Super fresh Bengali sweets, eggless cakes, milkshakes and desserts — ready for you every day.
        </p>

        <div class="reveal stagger-3">
          <a href="tel:07307899085" class="contact-option">
            <div class="contact-option-icon" style="background-color:#C9A961;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C1810" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <div class="contact-option-label">Call us directly</div>
              <div class="contact-option-value">073 0789 9085</div>
            </div>
          </a>
          <a href="mailto:info@banoful.co.uk" class="contact-option">
            <div class="contact-option-icon" style="background-color:#C9A961;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2C1810" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div class="contact-option-label">Email us</div>
              <div class="contact-option-value">info@banoful.co.uk</div>
            </div>
          </a>
          <a href="https://wa.me/447307899085" target="_blank" rel="noopener noreferrer" class="contact-option">
            <div class="contact-option-icon" style="background-color:#25D366;">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <div class="contact-option-label">WhatsApp Orders</div>
              <div class="contact-option-value" style="color:#25D366;">Quick Response Guaranteed</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Right — Contact Form -->
      <div class="reveal stagger-4">
        <div class="contact-form-wrap">
          <h3 class="contact-form-title">Send Us a Message</h3>
          <p class="contact-form-subtitle">Have a question or special order? We'll get back to you quickly.</p>

          <div id="contact-success" class="form-success">
            <div class="form-success-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h4 style="font-size:1.25rem;font-weight:700;color:#2C1810;margin-bottom:0.5rem;">Message Sent!</h4>
            <p style="color:#6B5D54;font-size:0.875rem;">Thank you for getting in touch. We'll respond as soon as possible.</p>
          </div>

          <form id="contact-form" onsubmit="banofulSubmitForm(event)">
            <div class="form-row">
              <div class="form-group">
                <label for="contact-name">Full Name *</label>
                <input type="text" id="contact-name" name="name" required placeholder="Your Name" />
              </div>
              <div class="form-group">
                <label for="contact-business">Business (Optional)</label>
                <input type="text" id="contact-business" name="business" placeholder="Your Business" />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="contact-email">Email Address *</label>
                <input type="email" id="contact-email" name="email" required placeholder="your@email.com" />
              </div>
              <div class="form-group">
                <label for="contact-phone">Phone Number *</label>
                <input type="tel" id="contact-phone" name="phone" required placeholder="07XXX XXXXXX" />
              </div>
            </div>
            <div class="form-group" style="margin-bottom:1rem;">
              <label for="contact-message">Message (Optional)</label>
              <textarea id="contact-message" name="message" rows="3" placeholder="Tell us about your order or question..."></textarea>
            </div>
            <?php wp_nonce_field( 'banoful_nonce', 'banoful_nonce_field' ); ?>
            <button type="submit" class="form-submit">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
            <p class="form-legal">By submitting, you agree to our Privacy Policy and Terms of Service.</p>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>
