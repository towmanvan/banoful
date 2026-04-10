<?php
/**
 * Front Page Template — Banoful One-Page Site
 * @package Banoful
 */
get_header();
?>

<?php get_template_part( 'template-parts/section', 'hero' ); ?>
<?php get_template_part( 'template-parts/section', 'products' ); ?>
<?php get_template_part( 'template-parts/section', 'party-orders' ); ?>
<?php get_template_part( 'template-parts/section', 'benefits' ); ?>
<?php get_template_part( 'template-parts/section', 'testimonials' ); ?>
<?php get_template_part( 'template-parts/section', 'about' ); ?>
<?php get_template_part( 'template-parts/section', 'cta' ); ?>

<?php get_footer(); ?>
