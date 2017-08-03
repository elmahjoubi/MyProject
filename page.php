<?php
/**
* The template for displaying all pages
*
* This is the template that displays all pages by default.
* Please note that this is the WordPress construct of pages
* and that other 'pages' on your WordPress site may use a
* different template.
*
* @link https://codex.wordpress.org/Template_Hierarchy
*
* @package ecole_primaire
*/

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main">

		<?php
		$page = $post->ID;
		switch ($page) {
			case 2:
			get_template_part( 'template-parts/content', 'home' );
			break;
			case 5:
			get_template_part( 'template-parts/content', 'ecole' );
			break;
			case 7:
			get_template_part( 'template-parts/content', 'professeurs' );
			break;
			case 9:
			get_template_part( 'template-parts/content', 'programmes' );
			break;
			case 11:
			get_template_part( 'template-parts/content', 'contact' );
			break;
			case 37:
			get_template_part( 'template-parts/content', 'blog' );
			break;
			default:
			get_template_part( 'template-parts/content', 'home' );
			break;
		}

?>
</main><!-- #main -->
</div><!-- #primary -->

<?php

get_footer();
