<?php
/**
 * @file
 * Porto's HTML template.
 */
?>
<!DOCTYPE html>
<!--[if lt IE 7]> <html class="ie6 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 7]>    <html class="ie7 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if IE 8]>    <html class="ie8 ie" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <![endif]-->
<!--[if gt IE 8]> <!--> <html class="" lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"> <!--<![endif]-->
<head>
<meta http-equiv="Expires" content="604800"/>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>
  
  <!-- IE Fix for HTML5 Tags -->
  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
  
  <!--[if IE]>
		<link rel="stylesheet" href="<?php global $parent_root; echo $parent_root; ?>/css/ie.css">
	<![endif]-->

	<!--[if lte IE 8]>
		<script src="<?php global $parent_root; echo $parent_root; ?>/vendor/respond.js"></script>
	<![endif]-->

<!-- ADD THIS integration -->
<!-- added 20140722 -->
	<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4fba63575becca74"></script>

	<!-- Web Fonts  -->
	<!-- <link href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css"> -->
<link href='https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'>	<script src="//maps.google.com/maps/api/js?sensor=false"></script>
	
	<?php if (theme_get_setting('site_layout') == 'boxed'): ?>
	<script type='text/javascript'>jQuery(document).ready(function ($) { $('body').addClass('boxed'); });</script>
	<?php endif; ?>
	
	<?php global $user; if ( (theme_get_setting('site_layout') == 'wide') AND (theme_get_setting('sticky_header') == '1') AND ( !user_is_logged_in() ) ): ?>
	<script type='text/javascript' src='<?php global $parent_root; echo $parent_root; ?>/js/sticky.js'></script>
	<?php endif; ?>
	
<?php porto_user_css();?>  
<script type='text/javascript' src='<?php global $parent_root; echo $parent_root; ?>/vendor/modernizr.js'></script>
</head>

<body class="<?php print $classes; ?>"<?php print $attributes;?>>
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>
</body>

</html>