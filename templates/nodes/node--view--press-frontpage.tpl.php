<li>
	<div class="span4">
		<article>
			<div class="date">
			  <span class="day"><?php print format_date($node->created, 'custom', 'd'); ?></span>
			  <span class="month"><?php print format_date($node->created, 'custom', 'M'); ?></span>
		  </div>
			<h4><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h4>
			<p><?php
	      // Hide comments, tags, and links now so that we can render them later.
	      // hide($content['taxonomy_forums']);
	      // hide($content['comments']);
	      // hide($content['links']);
	      // hide($content['field_tags']);
	      // hide($content['field_image']);
	      $teaser = strip_tags(render($content['body']));
	    ?> 
	    <?php  echo substr($teaser, 0, 140)."...";?> <a href="<?php print $node_url; ?>" class="read-more"> <?php echo t('Read more'); ?><i class="icon-angle-right"></i></a></p>
		</article>
	</div>
</li>	