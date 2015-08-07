(function ($) {
  $(document).ready(function() {

  // Reorder team members on Riga/Latvia office 22.07.2015
    // Position Evita on first place (was second place)

jQuery('.page-node-44 .view-office-team-members .views-row-1').before(jQuery('.page-node-44 .view-office-team-members .views-row-2'));

jQuery('.page-node-44 .view-office-team-members .views-row-1').addClass('views-row-2a').removeClass('views-row-1');
jQuery('.page-node-44 .view-office-team-members .views-row-2').addClass('views-row-1').removeClass('views-row-2');
jQuery('.page-node-44 .view-office-team-members .views-row-2a').addClass('views-row-2').removeClass('views-row-2a');

    // Reorder team members on Chisinau office 30.06.2015
    // Position Margarita Melniciuc on second place (was fourth place)

jQuery('.page-node-40 .view-office-team-members .views-row-2').before(jQuery('.page-node-40 .view-office-team-members .views-row-4'));

jQuery('.page-node-40 .view-office-team-members .views-row-2').addClass('views-row-3a').removeClass('views-row-2');
jQuery('.page-node-40 .view-office-team-members .views-row-4').addClass('views-row-2').removeClass('views-row-4');
jQuery('.page-node-40 .view-office-team-members .views-row-3').addClass('views-row-4').removeClass('views-row-3');
jQuery('.page-node-40 .view-office-team-members .views-row-3a').addClass('views-row-3').removeClass('views-row-3a');

// Frontpage Slideshow big image slider
    $('.front .view-frontpage-slider .rsOverflow').prepend('<div class="rsBg"><div class="rsBgimg"></div></div>');
    $('.front .view-frontpage-slider .rsOverflow').append('<div class="rsBgBottom"><div class="rsBgBottomimg"></div></div>');
    // $('.views-field-field-bild-slider').append('<div class="projektimghover slideshow"></div>');

    // Finland office: change heading for Darcy Murray 02.12.2014

    $("body.page-node-46 h3.team-members").html('Contact Person');

    // Finland office: change job title for Darcy Murray 11.12.2014

    $("body.page-node-46 .field-name-field-job-title").html('Partner & COO');
    
// Frontpage Consultant Spotlight slider
// adds <i class="icon-angle-right"></i> after Read more

  // $('.view-frontpage-consultant-spotlight').children('div.field-name-body').children('div.field-items').children('div.field-item').children('a.more-link').append('<i class="icon-angle-right"></i>');
    // Wrapt die ersten drei Produkte in ein Div
    // $(".group-footer").children("div.field-name-field-produkte-einbinden").children("div.field-items").children("div.field-item:lt(3)").wrapAll('<div class="li_group first" />');
    // $(".group-footer").children("div.field-name-field-produkte-einbinden").children("div.field-items").children("div.field-item:gt(3)").wrapAll('<div class="li_group second" />');
   
  /*function worldCarouselGoTo(number)
	{
		var mySliderInstance = $("#worldcarouselslider").data("royalSlider");
		mySliderInstance.goTo(number);
		if (number == 0)
		{
			mySliderInstance.resumeSlideshow();
		}
		else
		{
			mySliderInstance.stopSlideshow();
		}
	}
	
	$(".worldcarouselworld").click(function() {
		worldCarouselGoTo(0);
		return false;
	});
	
	$(".worldcarouseleurope").click(function() {
	  worldCarouselGoTo(1);
		return false;
	});
	
	$(".worldcarouselafrica").click(function() {
		worldCarouselGoTo(2);
		return false;
	});
	
	$(".worldcarouselamerica").click(function() {
		worldCarouselGoTo(4);
		return false;
	});
	
	$(".worldcarouselasia").click(function() {
		worldCarouselGoTo(3);
		return false;
	});*/
	
   
    
    
    // added Unpublished Text for Team pages 24.05.2013
    $("body.node-type-team #block-system-main > .content > .node-unpublished").prepend('<div class="unpublished">Unpublished</div>');

    // added Unpublished Text for Office pages 09.03.2014 
    $("body.node-type-offices #block-system-main > .content > .node-unpublished").prepend('<div class="unpublished">Unpublished</div>');


    // criscom 25.10.2012 see below
 
 	// Our offices worldwide Contact Us landing page LISTED ALPHABETICALLY BY CITY
 
 	$("#block-views-contact-us-block").children("div.content").children("div.view").children("div.view-content").children("div.views-row:lt(17)").wrapAll('<div class="li_group first" />');
 	$("#block-views-contact-us-block").children("div.content").children("div.view").children("div.view-content").children("div.views-row:lt(18)").wrapAll('<div class="li_group second" />');
 	$("#block-views-contact-us-block").children("div.content").children("div.view").children("div.view-content").children("div.views-row:lt(19)").wrapAll('<div class="li_group third" />');
 	
 	// criscom Contac us landing page Listed by COUNTRY wraps first 26 cities in div and second 26 cities in div 25.10.2012 adapted 03.11.2012; again adapted 01.04.2013 moving Kazakhstan to right column i+25 ==> i+24
 	
 	var lis = $("#block-views-contact-us-block-1 div.content div.view div.view-content div.item-list");
 	for (var i = 0; i < lis.length; i+=26) {
 		lis.slice(i, i+26).wrapAll("<div class='li_group'></div>");
 		}
 
  // criscom 25.10.2012 Contact Us landing page LISTED BY REGION
     
     $("#block-views-contact-us-block-2 div.content div.view div.view-content div.item-list:nth-child(1)").wrap('<div class="europe-wrapper" />');
     $("#block-views-contact-us-block-2 div.content div.view div.view-content div.item-list:nth-child(1)").addClass("europe"); //adds "europe" to class view-grouping
     $("#block-views-contact-us-block-2 div.content div.view div.view-content div.item-list:nth-child(2)").addClass("middle-east-africa");
     $("#block-views-contact-us-block-2 div.content div.view div.view-content div.item-list:nth-child(3)").addClass("asia");
     $("#block-views-contact-us-block-2 div.content div.view div.view-content div.item-list:nth-child(4)").addClass("america");
      
 //    $("#block-views-contact-us-block div.content div.view div.view-content div.views-row:lt(21)").wrapAll('<div class="li_group" />');
 //    $("#block-views-contact-us-block div.content div.view div.view-content div.views-row:gt(20):lt(37)").wrapAll('<div class="li_group" />');
 //    $("#block-views-contact-us-block div.content div.view div.view-content div.views-row:gt(36)").wrapAll('<div class="li_group" />');
 
 	
 	// by Country Doppelpunkt zb nach Land Armenia: Yerevan
 	
 	 $("#block-views-contact-us-block-1 div.content div.view div.view-content div.li_group div.item-list p").append(":");
// 	 $("#block-views-contact-us-block-2 div.content div.view div.view-content div.item-list p").append(":");
 	
     // criscom 25.10.2012 Contact Us landing page Listed by country
     
    // $("#block-views-contact-us-block-1 div.content div.view div.view-content div.item-list:nth-child(1)").prepend('<div class="first-column">');
    //     $("#block-views-contact-us-block-1 div.content div.view div.view-content div.item-list:nth-child(25n)").wrapAll('<div class="first-column">');
 
 
 
    
    
    //Footer: >-Zeichen 
    // $("div#block-menu-block-2 > div > div > ul > li > a").prepend("> ");
    
    //22.08.2012 criscom About us Brochure
    
    $("#trigger").click(function() {
    	$("#brochure").css("display","block");
    	$("#trigger").css("display","none");
    	});
    
    
    //wenn a-Element aktiv wird, mŸssen Elternelemente auch dementsprechend gekennzeichnet werden
    // $("a.active").parent().parent().addClass("active");
    // $("a.active").parent().addClass("active");
    // $("ul.active").parent().addClass("active");
    // //Breitenanpassung
    // if (!$("ul > li > ul.active").prev().hasClass("active"))
    // {
    // 	var $currentWidth = $("ul > li > ul.active").prev().width();
    // 	$("ul > li > ul.active").prev().width($currentWidth - 3);  
    // }

    //Breitananpassung About us > Our Firm criscom 09.05.2013
    // if (!$("body.page-node-2 ul > li > ul.active").prev().hasClass("active"))
    // {
    //   var $currentWidth = $("body.page-node-2 ul > li > ul.active").prev().width();
    //   $("body.page-node-2 ul > li > ul.active").prev().width($currentWidth + 4);  
    // }    
    
        //Breitananpassung About us > Assurances 09.05.2013
    // if (!$("body.page-node-8 ul > li > ul.active").prev().hasClass("active"))
    // {
    //   var $currentWidth = $("body.page-node-8 ul > li > ul.active").prev().width();
    //   $("body.page-node-8 ul > li > ul.active").prev().width($currentWidth + 4);  
    // }

    /*if ($(".worldcarousel").width()==0)
    {
    	//$(".worldcarousel").css("width", "931px");
    	window.location.href = "/";
    }*/
    
    //Office-Menü, aktives Element
  //   $("div#block-menu-block-3 > div > div > ul > li.active-trail").prepend('<div class="officemenuactive"></div>&nbsp;&nbsp;');
  //   if (getInternetExplorerVersion()==7)
  //   {
  //   	$("div#block-menu-block-4 > div > div > ul > li.active-trail").prepend('<div class="officesubmenuactive"></div>');
  //   }
  //   else
  //   {
  //   	$("div#block-menu-block-4 > div > div > ul > li.active-trail").append('<div class="officesubmenuactive"></div>');
  //   }
  //   $("div#block-menu-block-3 > div > div.menu-block-wrapper").append('<div class="officemenuactivepath"></div>'); 
  //   if ($("div#block-menu-block-3").width()>0)
  //   {
  //   	var topoffice = $("div#block-menu-block-3 > div > div > ul > li.active-trail").position().top-305;
  //  		var leftoffice = $("div#block-menu-block-3 > div > div > ul > li.active-trail").width()+5;
  //  		if (getInternetExplorerVersion()==7)
  //  		{
  //  			topoffice = topoffice+30;
  //  			leftoffice = leftoffice -10;
  //  			$("div.officemenuactivepath").css("display","none");
  //  		}
  //  		if ((navigator.userAgent.indexOf("Firefox")!=-1)||(navigator.userAgent.indexOf("Opera") != -1))
		// {
		// 	$("div.officemenuactivepath").css("display","none");
		// }
  //   	$("div.officemenuactivepath").css("top",topoffice); 
  //   	$("div.officemenuactivepath").css("left",leftoffice);
  //   }
    
  //   $("div#block-menu-block-4 > div > div.menu-block-wrapper").append('<div class="officesubmenuactivepath"></div>'); 
  //   if ($("div#block-menu-block-4").width()>0)
  //   {
  //   	var topsuboffice = $("div#block-menu-block-4 > div > div > ul > li.active-trail").position().top-$("div#block-menu-block-4 > div > div > ul").height()-100;
  //   	var leftsuboffice = $("div#block-menu-block-4 > div > div > ul > li.active-trail").width()+36;
  //   	if (getInternetExplorerVersion()==7)
  //  		{
  //  			/*topsuboffice = topsuboffice-390;
  //  			leftsuboffice = leftsuboffice - 400;*/
  //  			$("div.officesubmenuactivepath").css("display","none");
  //  		}
  //   	$("div.officesubmenuactivepath").css("top",topsuboffice); 
  //   	$("div.officesubmenuactivepath").css("left",leftsuboffice);
  //   }
    //Partners-Menu
    // $("div#block-menu-block-5 > div > div.menu-block-wrapper").append('<div class="partnermenuactivepath"></div>'); 
    // if ($("div#block-menu-block-5").width()>0)
    // {
    // 	if ($("div#block-menu-block-5 > div > div > ul > li > ul > li.active").width()>0)
    // 	{
    // 		var toppartner = $("div#block-menu-block-5 > div > div > ul > li > ul > li.active").position().top-$("div#block-menu-block-5 > div > div > ul").height()-171;
    // 		var leftpartner = $("div#block-menu-block-5 > div > div > ul > li > ul > li.active").width()+70;
    // 	}
    // 	else
    // 	{
    // 		var toppartner = $("div#block-menu-block-5 > div > div > ul > li.active-trail").position().top-$("div#block-menu-block-5 > div > div > ul").height()-171;
    // 		var leftpartner = $("div#block-menu-block-5 > div > div > ul > li.active-trail").width()+46;
    // 	}
    // 	$("div.partnermenuactivepath").css("top",toppartner); 
    // 	$("div.partnermenuactivepath").css("left",leftpartner);
    // }
    
    /* Verhindert, dass Add this einen Cookie auf der Website setzt - 05.03.2013 */
    var addthis_config = addthis_config||{};
    addthis_config.data_use_cookies = false;
    
   //  var pproyalSlider = $("#worldcarouselslider").royalSlider({
			// 	directionNavAutoHide: false,
			// 	directionNavEnabled: false,
			// 	controlNavEnabled: false,                // Control navigation (bullets, thumbs)  enabled
			// 	controlNavThumbs: false,
			// 	slideTransitionSpeed:1000,
			// 	slideshowDelay:7800,
			// 	slideshowEnabled: true,
			// 	controlNavThumbsNavigation:false,
			// 	slideTransitionType: "fade",
			// 	slideshowAutoStart: true,
			// 	slideTransitionEasing:"easeOutExpo",
			// 	nonDraggableClassEnabled: true,
			// 	dragUsingMouse:false
			// }).data("royalSlider");
    
    //Worldcarousel
    if (window.location.pathname == "/")
    {
    	if (false) // getInternetExplorerVersion() < 7)
    	{
    		$("#worldcarouselslider").crossSlide({sleep: 8, fade: 1, doubleFade:true}, [
  				{ src: '/sites/default/files/public/images/worldmap.gif'/*, href: 'http://www.pedersenandpartners.com/regions/world' */},
  				{ src: '/sites/default/files/public/map/europe.gif'/*, href: 'http://www.pedersenandpartners.com/regions/europe-cis'*/},
  				{ src: '/sites/default/files/public/map/africa.gif'/*, href: 'http://www.pedersenandpartners.com/regions/middle-east-africa'*/},
  				{ src: '/sites/default/files/public/map/asia.gif'/*, href: 'http://www.pedersenandpartners.com/regions/asia'*/ },
  				{ src: '/sites/default/files/public/map/americas.gif'/*, href: 'http://www.pedersenandpartners.com/regions/americas'*/ }
			]);
    	}
    	else
    	{
    		/*$("#worldcarouselslider").crossSlide({sleep: 8, fade: 1, doubleFade:true}, [
  				{ src: '/sites/default/files/public/images/worldmap.png', href: 'http://www.pedersenandpartners.com/regions/world' },
  				{ src: '/sites/default/files/public/map/europe.png', href: 'http://www.pedersenandpartners.com/regions/europe-cis'},
  				{ src: '/sites/default/files/public/map/africa.png', href: 'http://www.pedersenandpartners.com/regions/middle-east-africa'},
  				{ src: '/sites/default/files/public/map/asia.png', href: 'http://www.pedersenandpartners.com/regions/asia' },
  				{ src: '/sites/default/files/public/map/americas.png'/*, href: 'http://www.pedersenandpartners.com/regions/americas' }
			]);*/
			
			/*var pproyalSlider = $("#worldcarouselslider").royalSlider({
				directionNavAutoHide: false,
				controlNavEnabled: false,                // Control navigation (bullets, thumbs)  enabled
				controlNavThumbs: false,
				slideTransitionSpeed:2000,
				slideshowEnabled: true,
				slideshowAutoStart: true
			}).data("royalSlider");
			
			pproyalSlider.resumeSlideshow();*/
		}
		//Maps einbauen: usemap="#Map"
		//$("img.carouselimg").attr("useMap","#Map");
	}
   });
   
})(jQuery);

function getInternetExplorerVersion()
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
{
	var rv = -1; // Return value assumes failure.
	if (navigator.appName == 'Microsoft Internet Explorer')
	{
	    var ua = navigator.userAgent;
	    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
   		if (re.exec(ua) != null)
		    rv = parseFloat( RegExp.$1 );
	}
	return rv;
	/*var IE=-1;
	if (document.documentMode)
	{
		IE = document.documentMode;
	}
	else
	{
		IE = 5;
		if (document.compatMode)
		{
			if (document.compatMode == "CSS1Compat")
			{
				IE = 7;
			}
		}
	}
	return IE;*/
}

jQuery(window).load(function() {
	jQuery('#royal-slider-front-consultant .rsSlide .more-link').each(function() {
		jQuery(this).append('<i class="icon-angle-right"></i>');
	});
});

setTimeout(jQuery('#royal-slider-front-consultant .rsSlide .views-row-9 .more-link').each(function() {
		jQuery(this).append('<i class="icon-angle-right"></i>');
	}),	5000);