<?php
/**
 * @file
 * Contains theme override functions and preprocess functions for the theme.
 *
 * ABOUT THE TEMPLATE.PHP FILE
 *
 *   The template.php file is one of the most useful files when creating or
 *   modifying Drupal themes. You can modify or override Drupal's theme
 *   functions, intercept or make additional variables available to your theme,
 *   and create custom PHP logic. For more information, please visit the Theme
 *   Developer's Guide on Drupal.org: http://drupal.org/theme-guide
 *
 * OVERRIDING THEME FUNCTIONS
 *
 *   The Drupal theme system uses special theme functions to generate HTML
 *   output automatically. Often we wish to customize this HTML output. To do
 *   this, we have to override the theme function. You have to first find the
 *   theme function that generates the output, and then "catch" it and modify it
 *   here. The easiest way to do it is to copy the original function in its
 *   entirety and paste it here, changing the prefix from theme_ to einstern_2014_.
 *   For example:
 *
 *     original: theme_breadcrumb()
 *     theme override: einstern_2014_breadcrumb()
 *
 *   where einstern_2014 is the name of your sub-theme. For example, the
 *   zen_classic theme would define a zen_classic_breadcrumb() function.
 *
 *   If you would like to override either of the two theme functions used in Zen
 *   core, you should first look at how Zen core implements those functions:
 *     theme_breadcrumbs()      in zen/template.php
 *     theme_menu_local_tasks() in zen/template.php
 *
 *   For more information, please visit the Theme Developer's Guide on
 *   Drupal.org: http://drupal.org/node/173880
 *
 * CREATE OR MODIFY VARIABLES FOR YOUR THEME
 *
 *   Each tpl.php template file has several variables which hold various pieces
 *   of content. You can modify those variables (or add new ones) before they
 *   are used in the template files by using preprocess functions.
 *
 *   This makes THEME_preprocess_HOOK() functions the most powerful functions
 *   available to themers.
 *
 *   It works by having one preprocess function for each template file or its
 *   derivatives (called template suggestions). For example:
 *     THEME_preprocess_page    alters the variables for page.tpl.php
 *     THEME_preprocess_node    alters the variables for node.tpl.php or
 *                              for node-forum.tpl.php
 *     THEME_preprocess_comment alters the variables for comment.tpl.php
 *     THEME_preprocess_block   alters the variables for block.tpl.php
 *
 *   For more information on preprocess functions and template suggestions,
 *   please visit the Theme Developer's Guide on Drupal.org:
 *   http://drupal.org/node/223440
 *   and http://drupal.org/node/190815#template-suggestions
 */


/**
 * Override or insert variables into the html templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("html" in this case.)
 */
/* -- Delete this line if you want to use this function
function einstern_2014_preprocess_html(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // The body tag's classes are controlled by the $classes_array variable. To
  // remove a class from $classes_array, use array_diff().
  //$variables['classes_array'] = array_diff($variables['classes_array'], array('class-to-remove'));
}
// */

/**
 * Override or insert variables into the page templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
/* -- Delete this line if you want to use this function
function einstern_2014_preprocess_page(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the node templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */
/* -- Delete this line if you want to use this function
function einstern_2014_preprocess_node(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');

  // Optionally, run node-type-specific preprocess functions, like
  // einstern_2014_preprocess_node_page() or einstern_2014_preprocess_node_story().
  $function = __FUNCTION__ . '_' . $variables['node']->type;
  if (function_exists($function)) {
    $function($variables, $hook);
  }
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function einstern_2014_preprocess_comment(&$variables, $hook) {
  $variables['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $variables
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function einstern_2014_preprocess_block(&$variables, $hook) {
  // Add a count to all the blocks in the region.
  $variables['classes_array'][] = 'count-' . $variables['block_id'];
}
// */

/*** Dominik, 04.03.2010: for displaying other classes in the menu */
/*function einstern_2014_menu_item($link, $has_children, $menu = '', $in_active_trail = FALSE, $extra_class = NULL) {
  $class = ($menu ? 'expanded' : ($has_children ? 'collapsed' : 'leaf'));
  if (!empty($extra_class))
    $class .= ' '. $extra_class;
  if ($in_active_trail)
    $class .= ' active-trail';
  $class .= ' ' . preg_replace('/[^a-zA-Z0-9]/', '', strtolower(strip_tags($link)));

  return '<li class="'. $class .'"><div class="menuleft"></div><div class="menucontent">'. $link . $menu .'</div><div class="menuright"></div></li>\n';
}*/


/*function einstern_2014_preprocess_page(&$vars) {
    //print_r($vars);
    $links = $vars['main_menu'];
    
    foreach ($links as $key => $link) {
        $links[$key]['html'] = true;
        $links[$key]['title'] = '<span>'. $link['title'] . '</span>';
    }
    
    $vars['main-menu'] = $links;
}*/

/*function einstern_2014_menu_item($link, $has_children, $menu = '', $in_active_trail = FALSE, $extra_class = NULL) {
  $class = ($menu ? 'expanded' : ($has_children ? 'collapsed' : 'leaf'));
  if (!empty($extra_class)) {
    $class .= ' '. $extra_class;
  }
  if ($in_active_trail) {
    $class .= ' active-trail';
  }
  return '<li class="'. $class .'">'. $link . (($menu) ? '<div class="drop">'.$menu.'</div>' : '') ."</li>\n";
}*/

// function einstern_2014_preprocess_html(&$variables) {
//   // Avoid search engines to index dev and stage domains.
//   $restricted_domains = array('dev.pedersenandpartners.com', 'stage.pedersenandpartners.com', 'editorial.pedersenandpartners.com'); 
//   if (in_array($_SERVER['HTTP_HOST'], $restricted_domains)) {
//     $meta_robot = array(
//       '#tag' => 'meta',
//       '#attributes' => array(
//         'name' => 'robots',
//         'content' => 'noindex, nofollow'
//       ),
//     );
//     drupal_add_html_head($meta_robot);
//   }
// }

/* added by criscom 02.04.2011 - um Content Type spezifische Templates anzulegen: im Templates Ordner page.tpl.php duplizieren und zB für CT offices umbennen in: page--offices.tpl.php */

function einstern_2014_preprocess_page(&$vars, $hook) {
  if (isset($vars['node'])) {
  // If the node type is "blog" the template suggestion will be "page--node--blog.tpl.php".
   $vars['theme_hook_suggestions'][] = 'page__' . str_replace('_', '--', $vars['node']->type);
  }
}

function einstern_2014_file_link($variables) {
  $file = $variables['file'];
  $icon_directory = $variables['icon_directory'];

  $url = file_create_url($file->uri);
  $icon = theme('file_icon', array('file' => $file, 'icon_directory' => $icon_directory));

  // Set options as per anchor format described at
  // http://microformats.org/wiki/file-format-examples
  $options = array(
    'attributes' => array(
      'type' => $file->filemime . '; length=' . $file->filesize,
    ),
  );

  // Use the description as the link text if available.
  if (empty($file->description)) {
    $link_text = $file->filename;
  }
  else {
    $link_text = $file->description;
    $options['attributes']['title'] = check_plain($file->filename);
  }

  //open files of particular mime types in new window
  $new_window_mimetypes = array('application/pdf','text/plain');
  if (in_array($file->filemime, $new_window_mimetypes)) {
    $options['attributes']['target'] = '_blank';
  }

  return '<span class="file">' . $icon . ' ' . l($link_text, $url, $options) . '</span>';
}

/**
 * Customize search form.
 */
// function pedersen_einstern_form_alter(&$form, &$form_state, $form_id) {
//   if ($form_id == 'search_api_page_search_form_search_content') {
  
//     unset($form['search_block_form']['#title']);
    
//     $form['search_block_form']['#title_display'] = 'invisible';
//     $form_default = t('Search...');
//     $form['search_block_form']['#default_value'] = $form_default;
//     $form['submit_1'] = array('#type' => 'image_button', '#src' => base_path() . drupal_get_path('theme', 'porto') . '/img/search_icon.png', '#alt' => 'search');
//     $form['search_block_form']['#attributes'] = array('onblur' => "if (this.value == '') {this.value = '{$form_default}';}", 'onfocus' => "if (this.value == '{$form_default}') {this.value = '';}" );
    
//     dpm($form);
//   }
// }

/**
 * Customize Search API search form.
 */
function einstern_2014_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_api_page_search_form_search_content') {
  
    unset($form['search_api_page_search_form_search_content']['#title']);
    
    $form['keys_1']['#title_display'] = 'invisible';
    $form_default = t('Search...');
    $form['keys_1']['#default_value'] = $form_default;
    $form['submit_1'] = array('#type' => 'image_button', '#src' => base_path() . drupal_get_path('theme', 'einstern_2014') . '/images/search_icon.png', '#alt' => 'search', '#prefix' => '<div class="form-actions">', '#suffix' => '</div>');
    $form['keys_1']['#attributes'] = array('onblur' => "if (this.value == '') {this.value = '{$form_default}';}", 'onfocus' => "if (this.value == '{$form_default}') {this.value = '';}" );
    // $form['submit_1'] = array('#prefix' => '<div class="form-actions criscom">', '#suffix' => '</div>');
    
    // dpm($form);
  }
}

//function einstern_2014_drupal_page_header() {
//  $headers_sent = &drupal_static(__FUNCTION__, FALSE);
//  if ($headers_sent) {
//    return TRUE;
//  }
//  $headers_sent = TRUE;
//
//  $default_headers = array(
//    'Expires' => 'Sun, 19 Nov 1978 05:00:00 GMT', 
//    'Last-Modified' => gmdate(DATE_RFC1123, REQUEST_TIME), 
//    'Cache-Control' => 'no-cache, must-revalidate, post-check=0, pre-check=0', 
//    'ETag' => '"' . REQUEST_TIME . '"',
//  );
//  drupal_send_headers($default_headers);
//}
