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

<!-- implement fontawesome stylesheet because of cross browser policy -->

<link rel="stylesheet" type="text/css" href="/sites/all/themes/einstern_2014/css/fonts/font-awesome/css/font-awesome.css?nkr4gr">

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
    
    <!-- commented out 20141027 after implementing Roboto on our own webserver -->
    <!-- <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'> -->

<!-- Implementing a workaround for Google Webfonts Problem in China -->
    <!-- http://chineseseoshifu.com/blog/google-fonts-instable-in-china.html -->
    
<!-- *** DOESN'T WORK with SSL certificate and https:// protocol *** -->
    <!-- <link href='http://fonts.useso.com/css?family=Roboto:400,300,300italic,400italic,500,500italic,700,700italic' rel='stylesheet' type='text/css'> -->

<!-- Below script can be commented out as we do not use it on the website -->
<!-- commented out 20141016 after checking with framework maintainer  -->
    <!-- <script src="//maps.google.com/maps/api/js?sensor=false"></script>-->
	
	<?php if (theme_get_setting('site_layout') == 'boxed'): ?>
	<script type='text/javascript'>jQuery(document).ready(function ($) { $('body').addClass('boxed'); });</script>
	<?php endif; ?>
	
	<?php global $user; if ( (theme_get_setting('site_layout') == 'wide') AND (theme_get_setting('sticky_header') == '1') AND ( !user_is_logged_in() ) ): ?>
	<script type='text/javascript' src='<?php global $parent_root; echo $parent_root; ?>/js/sticky.js'></script>
	<?php endif; ?>
	
<?php porto_user_css();?>  
<script type='text/javascript' src='<?php global $parent_root; echo $parent_root; ?>/vendor/modernizr.js'></script>
<link rel="publisher" href="https://plus.google.com/+pedersenandpartners">
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Organization",
  "name" : "Pedersen and Partners Executive Search",
  "url" : "https://www.pedersenandpartners.com",
  "sameAs" : [
    "https://www.facebook.com/pedersenandpartners/",
    "https://twitter.com/Pedersenptnrs",
    "https://plus.google.com/+pedersenandpartners",
    "https://www.linkedin.com/company/16339?trk=tyah",
    "https://www.youtube.com/channel/UCg17LTxtpY8jzdG7zy3IH2A",
    "https://www.xing.com/companies/pedersen%26partners"
  ]
}
</script>
</head>

<body class="<?php print $classes; ?>"<?php print $attributes;?>>
<!--[if lt IE 9]>
            <p class="browsehappy" style="text-align: center;">You are using an <strong>outdated</strong> browser. Please <a style="text-decoration: underline;" href="http://browsehappy.com/" target="_blank">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>
</body>

</html>