<?php
/**
 * Banoful Theme Functions
 *
 * @package Banoful
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

// ── Theme Setup ──────────────────────────────────────────────────────────────
function banoful_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
    add_theme_support( 'custom-logo', [
        'height'      => 200,
        'width'       => 600,
        'flex-width'  => true,
        'flex-height' => true,
    ]);
    add_theme_support( 'automatic-feed-links' );

    register_nav_menus([
        'primary' => __( 'Primary Navigation', 'banoful' ),
    ]);
}
add_action( 'after_setup_theme', 'banoful_setup' );

// ── Enqueue Styles & Scripts ─────────────────────────────────────────────────
function banoful_enqueue_assets() {
    $ver = wp_get_theme()->get( 'Version' );
    $uri = get_template_directory_uri();

    // Google Fonts
    wp_enqueue_style( 'banoful-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600;700;800&family=Noto+Serif+Bengali:wght@400;500;600;700&display=swap',
        [], null
    );

    // Theme stylesheet
    wp_enqueue_style( 'banoful-style', get_stylesheet_uri(), [ 'banoful-fonts' ], $ver );

    // Custom CSS
    wp_enqueue_style( 'banoful-custom', $uri . '/assets/css/banoful.css', [ 'banoful-style' ], $ver );

    // Tailwind CDN (development / easy deployment)
    wp_enqueue_script( 'tailwind-cdn',
        'https://cdn.tailwindcss.com',
        [], null, false
    );

    // Main JS
    wp_enqueue_script( 'banoful-main', $uri . '/assets/js/main.js', [], $ver, true );

    // Pass data to JS
    wp_localize_script( 'banoful-main', 'banofulData', [
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'banoful_nonce' ),
        'siteUrl' => get_site_url(),
    ]);
}
add_action( 'wp_enqueue_scripts', 'banoful_enqueue_assets' );

// ── Tailwind Config inline ────────────────────────────────────────────────────
function banoful_tailwind_config() {
    if ( ! is_admin() ) : ?>
    <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'banoful-gold': '#C9A961',
            'banoful-gold-dark': '#A88B3D',
            'banoful-brown': '#8B6F47',
            'banoful-dark': '#2C1810',
            'banoful-cream': '#FFFDF7',
            'banoful-ivory': '#F5F1E8',
          },
          fontFamily: {
            playfair: ['"Playfair Display"', 'Georgia', 'serif'],
            inter: ['Inter', 'sans-serif'],
          },
        },
      },
    };
    </script>
    <?php endif;
}
add_action( 'wp_head', 'banoful_tailwind_config', 5 );

// ── JSON-LD Schema Markup ─────────────────────────────────────────────────────
function banoful_schema_markup() {
    if ( ! is_front_page() ) return;
    $schemas = [];

    // LocalBusiness + FoodEstablishment
    $schemas[] = [
        '@context' => 'https://schema.org',
        '@type'    => [ 'FoodEstablishment', 'Store', 'LocalBusiness' ],
        '@id'      => 'https://banoful.co.uk/#business',
        'name'     => 'Banoful',
        'alternateName' => [ 'বনফুল', 'Banoful Chittagong', 'Banoful Sweets' ],
        'url'      => 'https://banoful.co.uk',
        'logo'     => get_template_directory_uri() . '/assets/images/' . rawurlencode( 'Banoful Chittagong logo.png' ),
        'image'    => [
            get_template_directory_uri() . '/assets/images/bengali-sweets.jpg',
            get_template_directory_uri() . '/assets/images/indian-sweets.jpg',
            get_template_directory_uri() . '/assets/images/mishti-doi.jpg',
            get_template_directory_uri() . '/assets/images/eggless-cakes.jpg',
        ],
        'description' => "Banoful (বনফুল) — London's home of authentic Bengali and Asian sweets, mishti doi, yogurt, eggless cakes, milkshakes and desserts. Freshly made daily. Halal and vegetarian. Serving East London since 1995.",
        'telephone' => '+447307899085',
        'email'     => 'info@banoful.co.uk',
        'address'   => [
            '@type'           => 'PostalAddress',
            'streetAddress'   => '20 Cambridge Heath Road',
            'addressLocality' => 'London',
            'addressRegion'   => 'Greater London',
            'postalCode'      => 'E1 5QH',
            'addressCountry'  => 'GB',
        ],
        'geo' => [
            '@type'     => 'GeoCoordinates',
            'latitude'  => '51.5195',
            'longitude' => '-0.0601',
        ],
        'openingHoursSpecification' => [[
            '@type'     => 'OpeningHoursSpecification',
            'dayOfWeek' => [ 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday' ],
            'opens'     => '10:30',
            'closes'    => '23:00',
        ]],
        'servesCuisine' => [ 'Bengali', 'South Asian', 'Indian', 'Pakistani', 'Bangladeshi' ],
        'hasMenu'       => 'https://banoful.co.uk/#products',
        'priceRange'    => '£',
        'keywords'      => 'Bengali sweets London, Asian sweets East London, mithai London, mishti doi London, sandesh London, rasgulla London, gulab jamun London, barfi London, halal sweets London, eggless cakes London, Bengali sweet shop, East London sweets',
        'foundingDate'  => '1995',
        'areaServed'    => [
            [ '@type' => 'City', 'name' => 'London' ],
            [ '@type' => 'AdministrativeArea', 'name' => 'East London' ],
            [ '@type' => 'AdministrativeArea', 'name' => 'Tower Hamlets' ],
            [ '@type' => 'AdministrativeArea', 'name' => 'Bethnal Green' ],
            [ '@type' => 'AdministrativeArea', 'name' => 'Whitechapel' ],
        ],
        'sameAs' => [
            'https://www.facebook.com/ChittagongBanoful',
            'https://www.instagram.com/banofulsweets/',
            'https://www.youtube.com/@banofultv',
            'https://x.com/banofulsweets',
        ],
    ];

    // Products ItemList
    $schemas[] = [
        '@context'      => 'https://schema.org',
        '@type'         => 'ItemList',
        'name'          => 'Banoful Products — Bengali & Asian Sweets Menu',
        'description'   => 'Authentic Bengali and Asian sweets, desserts and cakes made fresh daily in East London.',
        'url'           => 'https://banoful.co.uk/#products',
        'itemListElement' => [
            [ '@type' => 'ListItem', 'position' => 1, 'item' => [ '@type' => 'Product', 'name' => 'Bengali Sweets', 'description' => 'Traditional Bengali mishti including sandesh, rasgulla, chomchom, kalojam and more. Made fresh daily.', 'brand' => [ '@type' => 'Brand', 'name' => 'Banoful' ], 'offers' => [ '@type' => 'Offer', 'priceCurrency' => 'GBP', 'availability' => 'https://schema.org/InStock' ] ] ],
            [ '@type' => 'ListItem', 'position' => 2, 'item' => [ '@type' => 'Product', 'name' => 'Indian & Pakistani Sweets', 'description' => 'Classic Asian mithai including gulab jamun, barfi, ladoo, jalebi and halwa.', 'brand' => [ '@type' => 'Brand', 'name' => 'Banoful' ], 'offers' => [ '@type' => 'Offer', 'priceCurrency' => 'GBP', 'availability' => 'https://schema.org/InStock' ] ] ],
            [ '@type' => 'ListItem', 'position' => 3, 'item' => [ '@type' => 'Product', 'name' => 'Mishti Doi & Natural Yogurt', 'description' => 'Authentic Bengali mishti doi (sweet yogurt) and natural yogurt, made the traditional way.', 'brand' => [ '@type' => 'Brand', 'name' => 'Banoful' ], 'offers' => [ '@type' => 'Offer', 'priceCurrency' => 'GBP', 'availability' => 'https://schema.org/InStock' ] ] ],
            [ '@type' => 'ListItem', 'position' => 4, 'item' => [ '@type' => 'Product', 'name' => 'Eggless Cakes', 'description' => 'Beautiful eggless celebration cakes — perfect for halal-friendly birthdays, weddings and events.', 'brand' => [ '@type' => 'Brand', 'name' => 'Banoful' ], 'offers' => [ '@type' => 'Offer', 'priceCurrency' => 'GBP', 'availability' => 'https://schema.org/InStock' ] ] ],
            [ '@type' => 'ListItem', 'position' => 5, 'item' => [ '@type' => 'Product', 'name' => 'Milkshakes & Desserts', 'description' => 'Rich milkshakes and dessert drinks made with fresh ingredients.', 'brand' => [ '@type' => 'Brand', 'name' => 'Banoful' ], 'offers' => [ '@type' => 'Offer', 'priceCurrency' => 'GBP', 'availability' => 'https://schema.org/InStock' ] ] ],
        ],
    ];

    // BreadcrumbList
    $schemas[] = [
        '@context'        => 'https://schema.org',
        '@type'           => 'BreadcrumbList',
        'itemListElement' => [[ '@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => 'https://banoful.co.uk/' ]],
    ];

    foreach ( $schemas as $schema ) {
        echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n";
    }
}
add_action( 'wp_head', 'banoful_schema_markup' );

// ── AJAX: Contact Form ────────────────────────────────────────────────────────
function banoful_handle_contact() {
    check_ajax_referer( 'banoful_nonce', 'nonce' );

    $name    = sanitize_text_field( $_POST['name'] ?? '' );
    $email   = sanitize_email( $_POST['email'] ?? '' );
    $phone   = sanitize_text_field( $_POST['phone'] ?? '' );
    $business = sanitize_text_field( $_POST['business'] ?? '' );
    $message = sanitize_textarea_field( $_POST['message'] ?? '' );

    if ( empty( $name ) || empty( $email ) || empty( $phone ) ) {
        wp_send_json_error( [ 'message' => 'Please fill in all required fields.' ] );
    }

    $to      = 'info@banoful.co.uk';
    $subject = 'New enquiry from ' . $name . ( $business ? ' (' . $business . ')' : '' );
    $body    = "Name: $name\nBusiness: $business\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = [ 'Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $email ];

    $sent = wp_mail( $to, $subject, $body, $headers );
    if ( $sent ) {
        wp_send_json_success( [ 'message' => 'Message sent successfully!' ] );
    } else {
        wp_send_json_error( [ 'message' => 'Could not send message. Please call us directly.' ] );
    }
}
add_action( 'wp_ajax_banoful_contact', 'banoful_handle_contact' );
add_action( 'wp_ajax_nopriv_banoful_contact', 'banoful_handle_contact' );

// ── Admin Notice: Missing Theme Images ───────────────────────────────────────
function banoful_check_images_notice() {
    if ( ! current_user_can( 'manage_options' ) ) return;

    $required_images = [
        'Banoful Chittagong logo.png',
        'hero-bg.jpg',
        'bengali-sweets.jpg',
        'indian-sweets.jpg',
        'mishti-doi.jpg',
        'eggless-cakes.jpg',
        'natural-yogurt.jpg',
        'organic-ghee.jpg',
    ];

    $img_dir  = get_template_directory() . '/assets/images/';
    $missing  = [];

    foreach ( $required_images as $file ) {
        if ( ! file_exists( $img_dir . $file ) ) {
            $missing[] = $file;
        }
    }

    if ( empty( $missing ) ) return;

    $theme_path = '/wp-content/themes/banoful/assets/images/';
    $list = implode( '</li><li>', array_map( 'esc_html', $missing ) );
    echo '<div class="notice notice-warning is-dismissible"><p>'
       . '<strong>Banoful Theme:</strong> The following images are missing. '
       . 'Upload them via FTP to <code>' . esc_html( $theme_path ) . '</code> on your server:</p>'
       . '<ul style="list-style:disc;margin-left:1.5rem;"><li>' . $list . '</li></ul>'
       . '<p>Images are in the theme zip under <code>banoful/assets/images/</code>. '
       . 'If your zip upload was too large, upload the images folder separately via FTP/SFTP or cPanel File Manager.</p>'
       . '</div>';
}
add_action( 'admin_notices', 'banoful_check_images_notice' );

// ── Remove emoji scripts (performance) ───────────────────────────────────────
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

// ── Remove unneeded WP head items ─────────────────────────────────────────────
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'rsd_link' );
