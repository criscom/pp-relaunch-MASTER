(function ($) {
  $(document).ready(function() {
   
   	function worldCarouselGoTo(number)
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
	});
	
	$(".worldcarouseleurope").click(function() {
		worldCarouselGoTo(1);
	});
	
	$(".worldcarouselafrica").click(function() {
		worldCarouselGoTo(2);
	});
	
	$(".worldcarouselamerica").click(function() {
		worldCarouselGoTo(4);
	});
	
	$(".worldcarouselasia").click(function() {
		worldCarouselGoTo(3);
	});
	
   
    //Men�anpassung Aktiv setzen von Men�s f�r Viewsseiten - 21.04.2011
    $("body.page-events-detail li.menu-386 a").addClass("active");
    $("body.node-type-article li.menu-386 a").addClass("active");
    $("body.section-media li.menu-386 a").addClass("active");
    $("body.section-articles li.menu-386 a").addClass("active");
    $("body.section-events li.menu-386 a").addClass("active");
    $("body.section-in-the-media li.menu-386 a").addClass("active");
    $("body.section-offices li.menu-545 a").addClass("active");
    $("body.section-regions li.menu-545 a").addClass("active");
    $("body.section-team li.menu-719 a").addClass("active");
    $("body.page-node-4 li.menu-385 a").addClass("active");
    // Events Menu Link in Sidebar aktiv setzen wenn Events Detail Node aufgerufen wird; criscom 18.10.2012 
    $("body.node-type-events li.menu-mlid-2132").addClass("active-trail");
    //mittleres Element wrappen
    $("ul.nice-menu > li > a").wrap('<div class="menumiddle" />');
    //davor f�r die linke Abrundung div hinzuf�gen
    $("ul.nice-menu > li").prepend('<div class="menuleft"></div>');
    //danach f�r die rechte Abrundung div hinzuf�gen
    $("ul.nice-menu > li").append('<div class="menuright"></div>');
    //davor f�r die linke Abrundung div hinzuf�gen
    $("div.breadcrumb").prepend('<img src="/sites/all/themes/pedersen_einstern_at/images/breadcrumb/breadcrumb_symbol.png" alt="Breadcrumb" /> ');
    $("h2.pane-title").append('<div class="pane-title-plus"></div> ');
    //danach f�r die rechte Abrundung div hinzuf�gen
    //$("div.breadcrumb").append('<div class="breadcrumbright"></div>');
    
    
    //Footer: >-Zeichen 
    $("div#block-menu-block-2 > div > div > ul > li > a").prepend("> ");
    
    //22.08.2012 criscom About us Brochure
    
    $("#trigger").click(function() {
    	$("#brochure").css("display","block");
    	$("#trigger").css("display","none");
    	});
    
    
    //wenn a-Element aktiv wird, m�ssen Elternelemente auch dementsprechend gekennzeichnet werden
    $("a.active").parent().parent().addClass("active");
    $("a.active").parent().addClass("active");
    $("ul.active").parent().addClass("active");
    //Breitenanpassung
    if (!$("ul > li > ul.active").prev().hasClass("active"))
    {
    	var $currentWidth = $("ul > li > ul.active").prev().width();
    	$("ul > li > ul.active").prev().width($currentWidth - 3);
    }
    
    /*if ($(".worldcarousel").width()==0)
    {
    	//$(".worldcarousel").css("width", "931px");
    	window.location.href = "/";
    }*/
    
    //Office-Men�, aktives Element
    $("div#block-menu-block-3 > div > div > ul > li.active-trail").prepend('<div class="officemenuactive"></div>&nbsp;&nbsp;');
    if (getInternetExplorerVersion()==7)
    {
    	$("div#block-menu-block-4 > div > div > ul > li.active-trail").prepend('<div class="officesubmenuactive"></div>');
    }
    else
    {
    	$("div#block-menu-block-4 > div > div > ul > li.active-trail").append('<div class="officesubmenuactive"></div>');
    }
    $("div#block-menu-block-3 > div > div.menu-block-wrapper").append('<div class="officemenuactivepath"></div>'); 
    if ($("div#block-menu-block-3").width()>0)
    {
    	var topoffice = $("div#block-menu-block-3 > div > div > ul > li.active-trail").position().top-305;
   		var leftoffice = $("div#block-menu-block-3 > div > div > ul > li.active-trail").width()+5;
   		if (getInternetExplorerVersion()==7)
   		{
   			topoffice = topoffice+30;
   			leftoffice = leftoffice -10;
   			$("div.officemenuactivepath").css("display","none");
   		}
   		if ((navigator.userAgent.indexOf("Firefox")!=-1)||(navigator.userAgent.indexOf("Opera") != -1))
		{
			$("div.officemenuactivepath").css("display","none");
		}
    	$("div.officemenuactivepath").css("top",topoffice); 
    	$("div.officemenuactivepath").css("left",leftoffice);
    }
    
    $("div#block-menu-block-4 > div > div.menu-block-wrapper").append('<div class="officesubmenuactivepath"></div>'); 
    if ($("div#block-menu-block-4").width()>0)
    {
    	var topsuboffice = $("div#block-menu-block-4 > div > div > ul > li.active-trail").position().top-$("div#block-menu-block-4 > div > div > ul").height()-100;
    	var leftsuboffice = $("div#block-menu-block-4 > div > div > ul > li.active-trail").width()+36;
    	if (getInternetExplorerVersion()==7)
   		{
   			/*topsuboffice = topsuboffice-390;
   			leftsuboffice = leftsuboffice - 400;*/
   			$("div.officesubmenuactivepath").css("display","none");
   		}
    	$("div.officesubmenuactivepath").css("top",topsuboffice); 
    	$("div.officesubmenuactivepath").css("left",leftsuboffice);
    }
    //Partners-Menu
    $("div#block-menu-block-5 > div > div.menu-block-wrapper").append('<div class="partnermenuactivepath"></div>'); 
    if ($("div#block-menu-block-5").width()>0)
    {
    	if ($("div#block-menu-block-5 > div > div > ul > li > ul > li.active").width()>0)
    	{
    		var toppartner = $("div#block-menu-block-5 > div > div > ul > li > ul > li.active").position().top-$("div#block-menu-block-5 > div > div > ul").height()-171;
    		var leftpartner = $("div#block-menu-block-5 > div > div > ul > li > ul > li.active").width()+70;
    	}
    	else
    	{
    		var toppartner = $("div#block-menu-block-5 > div > div > ul > li.active-trail").position().top-$("div#block-menu-block-5 > div > div > ul").height()-171;
    		var leftpartner = $("div#block-menu-block-5 > div > div > ul > li.active-trail").width()+46;
    	}
    	$("div.partnermenuactivepath").css("top",toppartner); 
    	$("div.partnermenuactivepath").css("left",leftpartner);
    }
    
    var pproyalSlider = $("#worldcarouselslider").royalSlider({
				directionNavAutoHide: false,
				directionNavEnabled: false,
				controlNavEnabled: false,                // Control navigation (bullets, thumbs)  enabled
				controlNavThumbs: false,
				slideTransitionSpeed:1000,
				slideshowDelay:7800,
				slideshowEnabled: true,
				controlNavThumbsNavigation:false,
				slideTransitionType: "fade",
				slideshowAutoStart: true,
				slideTransitionEasing:"easeOutExpo",
				nonDraggableClassEnabled: true,
				dragUsingMouse:false
			}).data("royalSlider");
    
    //Worldcarousel
    if (window.location.pathname == "/")
    {
    	if (getInternetExplorerVersion() > -1)
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
