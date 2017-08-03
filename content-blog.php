<?php

/*
Template Name: Blog
*/

get_header();
 ?>

 <?php
$query = new WP_query(array(
  'cat' => -1,
));
?>

<div class="container">
  <div class="row">
    <div class="col-md-12">
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
    </div>
  </div>
  <div class="row">
    <?php while ($query->have_posts() ) : $query->the_post(); ?>
    <div class="col-md-4">
      <div style="height:190px;width:100%; overflow:hidden;border:1px solid #ccc"> <?php the_post_thumbnail('img-blog');?></div>
      <div><?php the_title('<h2>','</h2>') ?></div>
      <div><?php the_excerpt() ?></div>
    </div>
    <?php endwhile; ?>
  </div>
</div>

 <?php wp_reset_postdata(); ?>

 <?php get_footer() ?>
