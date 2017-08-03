<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package ecole_primaire
 */

get_header(); ?>

	<div id="primary" class="content-area container">
		<main id="main" class="site-main">

		<?php
		if ( have_posts() ) : ?>

			<header class="page-header">

	        <h1>Blog</h1>
	        <p>Le Lorem Ipsum est simplement du faux texte</p>
					<div>
						<a href="<?php echo get_page_link(37);?>">Toutes les catégories</a> |
						<?php
							$args = array(
							'orderby' => 'name',
							);
							$categories = get_categories( $args);
							foreach ( $categories as $category ) {
							echo '<a href="' . get_category_link( $category->term_id ) . '">' . $category->name . '</a> | ';
							}
						?>
					</div>
			</header><!-- .page-header -->

			  <div class="row">
					<?php
					/* Start the Loop */
					while ( have_posts() ) : the_post();?>

					<div class="col-md-4">
						<div style="height:190px;width:100%; overflow:hidden;border:1px solid #ccc"> <?php the_post_thumbnail('img-blog');?></div>
						<div><?php the_title('<h2>','</h2>') ?></div>
						<div><?php the_excerpt() ?></div>
					</div>

					<?php endwhile;?>

			<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
//get_sidebar();
get_footer();
