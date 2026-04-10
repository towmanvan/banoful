<?php
/**
 * Fallback template — Banoful
 * WordPress loads this if no more-specific template is found.
 * For a front-page site this should never be used.
 */
get_header();
?>
<main style="padding-top:5rem;min-height:60vh;display:flex;align-items:center;justify-content:center;">
  <div style="text-align:center;">
    <h1 style="font-size:2rem;color:#2C1810;margin-bottom:1rem;">Welcome to Banoful</h1>
    <p style="color:#6B5D54;">Authentic Bengali &amp; Asian Sweets — East London</p>
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="display:inline-block;margin-top:1.5rem;background:#C9A961;color:#1A0800;padding:0.75rem 1.5rem;border-radius:0.5rem;font-weight:700;">Go to Homepage</a>
  </div>
</main>
<?php get_footer(); ?>
