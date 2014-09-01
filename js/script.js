


// ROYALSLIDER
//////////////

(function ($) {
	$(window).load(function() {
		// Make Image maps responsive
    $('img[usemap]').rwdImageMaps();
	});

  $(document).ready(function() {

    $("#royal-slider-front").royalSlider({ // FRONTPAGE Image Slider
      autoScaleSlider: { 
        enabled: true
      },
      autoScaleSliderWidth: 1280,
      autoScaleSliderHeight: 420,
      autoPlay: {
         enabled: true,
         delay: 5500
       },
      controlNavigation: 'none',
      imageAlignCenter: true,
      imageScalePadding: 0,
      transitionType: 'move',
      loop: 'true',
      transitionSpeed: 1000
    });
    
    
    
    var autoPlay = true;
    var sliderInstance = $("#worldcarouselslider").royalSlider({ // CONTACT US Map Slider
      autoScaleSlider: { 
        enabled: true
      },
      autoPlay: {
         enabled: true,
         delay: 5000
      },
      controlNavigation: 'none',
      imageAlignCenter: true,
      imageScalePadding: 0,
      transitionType: 'fade',
      loop: 'true',
      transitionSpeed: 1000,
      arrowsNav: false,
      navigateByClick: false
    }).data("royalSlider");
    
    worldCarouselSetActiveNumber(1);
    var slideNumber = 2;
    if (sliderInstance != null) {
	    sliderInstance.ev.on('rsAfterSlideChange', function(event) {
	    	if (autoPlay) {
		    	worldCarouselSetActiveNumber(slideNumber);
					slideNumber++;
					if (slideNumber == 6) {
			    	slideNumber = 1;
					}	
	    	}
			});
    }
    
    
    function worldCarouselGoTo(number) {
			var mySliderInstance = $("#worldcarouselslider").data("royalSlider");
			mySliderInstance.goTo(number);
			if ((autoPlay == false) && (number == 0))
			{
				mySliderInstance.startAutoPlay();
				autoPlay = true;
			}
			else
			{
				mySliderInstance.stopAutoPlay();
				autoPlay = false;
			}
		}
		
		function worldCarouselSetActive(link) {
			$("ul.worldcarouselmenu li").each(function() {
				$(this).removeClass("active-trail").removeClass("active");
				$(this).children("a").removeClass("active-trail").removeClass("active");
			})
			$("ul.worldcarouselmenu li "+link).parent().addClass("active-trail").addClass("active");
			$("ul.worldcarouselmenu li "+link).addClass("active-trail").addClass("active");
		}
		
		function worldCarouselSetActiveNumber(number) {
			switch(number) {
				case 1: worldCarouselSetActive(".worldcarouselworld"); break;
				case 2: worldCarouselSetActive(".worldcarouseleurope"); break;
				case 3: worldCarouselSetActive(".worldcarouselafrica"); break;
				case 4: worldCarouselSetActive(".worldcarouselasia"); break;
				case 5: worldCarouselSetActive(".worldcarouselamerica"); break;
			}			
		}
	
		$(".worldcarouselworld").click(function() {
			worldCarouselSetActive(".worldcarouselworld");
			worldCarouselGoTo(0);
			autoPlay = false;
			return false;
		});
		
		$(".worldcarouseleurope").click(function() {
		  worldCarouselSetActive(".worldcarouseleurope");
		  worldCarouselGoTo(1);
			autoPlay = false;
			return false;
		});
		
		$(".worldcarouselafrica").click(function() {
			worldCarouselSetActive(".worldcarouselafrica");
			worldCarouselGoTo(2);
			autoPlay = false;
			return false;
		});
		
		$(".worldcarouselamerica").click(function() {
			worldCarouselSetActive(".worldcarouselamerica");
			worldCarouselGoTo(4);
			autoPlay = false;
			return false;
		});
		
		$(".worldcarouselasia").click(function() {
			worldCarouselSetActive(".worldcarouselasia");
			worldCarouselGoTo(3);
			autoPlay = false;
			return false;
		});
    
    
    $("#royal-slider-front-consultant").royalSlider({ // FRONTPAGE Consultant Spotlight
      autoScaleSlider: { 
        enabled: false
      },
      autoPlay: {
         enabled: true,
         delay: 8000
       },
      numImagesToPreload: 100,
      arrowsNav: false,
      controlNavigation: 'none',
      imageAlignCenter: false,
      imageScalePadding: 0,

      transitionType: 'fade',
      loop: true,
      transitionSpeed: 100
    });
    
  });
})(jQuery);