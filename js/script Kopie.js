(function ($) {
  $(document).ready(function() {

// Image maps

    $('img[usemap]').rwdImageMaps();

// Royal Sliders
    $("#royal-slider-front").royalSlider({
      autoScaleSlider: { 
        enabled: false
      },
      autoPlay: {
         enabled: true
       },
      controlNavigation: 'none',
      imageAlignCenter: true,
      imageScalePadding: 0,
      transitionType: 'fade',
      loop: 'true',
      transitionSpeed: 2400
    });
    $("#royal-slider-front-press").royalSlider({
      autoScaleSlider: { 
        enabled: false
      },
      autoPlay: {
         enabled: false
       },
      arrowsNav: false,
      controlNavigation: 'bullets',
      imageAlignCenter: false,
      imageScalePadding: 0,
      transitionType: 'move',
      loop: 'true',
      transitionSpeed: 1000
    });
    $("#royal-slider-front-consultant").royalSlider({
      autoScaleSlider: { 
        enabled: false
      },
      autoPlay: {
         enabled: true
       },
      arrowsNav: false,
      controlNavigation: 'none',
      imageAlignCenter: false,
      imageScalePadding: 0,
      transitionType: 'move',
      loop: 'false',
      transitionSpeed: 3400
    });
  });
})(jQuery);