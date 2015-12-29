/* Javascript code for 15th anniversary landing page
 * created: 20150817
 * author: Philipp Hödl
 */
 
var $interval_id = false;
 
jQuery(function() {
  
  /*Config intervaltime*/
  $interval_time = 8000;
  
  $interval_id = setInterval(function() {
    jQuery( 'nav > .slide-next' ).trigger('click');
  }, $interval_time);

  var pp_slider = (function() {
  	
  	var $pp_container = jQuery( '#ps-container' ),
  	  $pp_navlocking = false,
  	  pp_clicked = 0,
  		$pp_contentwrapper = $pp_container.children( 'div.ps-contentwrapper' ),
  		// the items (description elements for the slides/products)
  		$pp_items = $pp_contentwrapper.children( 'div.ps-content' ),
  		itemsCount = $pp_items.length,
  		$pp_slidewrapper = $pp_container.children( 'div.ps-slidewrapper' ),
  		// the slides (product images)
  		$pp_slidescontainer = $pp_slidewrapper.find( 'div.ps-slides' ),
  		$pp_slides = $pp_slidescontainer.children( 'div' ),
  		// navigation arrows
  		$pp_navprev = $pp_slidewrapper.find( 'nav > a.ps-prev' ),
  		$pp_navnext = $pp_slidewrapper.find( 'nav > .slide-next' ),
  		// pp_current index for items and slides
  		pp_current = 0,
  		$pp_switch = jQuery('.switch-container li'),
  		// checks if the transition is in progress
  		pp_isAnimating = false,
  		// pp_support for CSS transitions
  		pp_support = Modernizr.csstransitions,
  		// transition end event
  		// https://github.com/twitter/bootstrap/issues/2870
  		pp_transEndEventNames = {
  			'WebkitTransition' : 'webkitTransitionEnd',
  			'MozTransition' : 'transitionend',
  			'OTransition' : 'oTransitionEnd',
  			'msTransition' : 'MSTransitionEnd',
  			'transition' : 'transitionend'
  		},
  		// its name
  		transEndEventName = pp_transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
  
  		init = function() {
    		
  			// show first item
  			var pp_currentItem = $pp_items.eq( pp_current ),
  				$pp_currentSlide = $pp_slides.eq( pp_current ),
  				initCSS = {
  					top : 0,
  					zIndex : 999,
  					opacity: 1
  				},
          initCSSslide = {
  					opacity : 1,
  					zIndex : 999
  				};
  
  			pp_currentItem.css( initCSS );
  			$pp_currentSlide.css( initCSSslide );
  			  		
  			// initialize some events
  			initEvents();
  
  		},
  		initEvents = function() {
    		
    		$pp_switch.on('click touchstart', function( event ) {
      		
      		clearInterval($interval_id);
      		
      		/*$interval_id = setInterval(function() {
            jQuery( 'nav > .slide-next' ).trigger('click');
          }, 5000);*/
      		 		
      		pp_clicked = jQuery(this).index();
      		
      		/*var $a = pp_clicked-pp_current;
      		var $b = pp_current-pp_clicked;
      		    		
      		if(pp_clicked < pp_current) {
        		$locking = $b - 1;
        		for(var i = 0; i<$b; i++) {
          		slide( 'prev' );
        		}
        		return false;
      		} else if(pp_clicked > pp_current) {
        		$locking = $a - 1;
        		for(var i = 0; i<$a; i++) {
          		slide( 'next' );
        		}
      		}*/
     
      		if(pp_clicked > pp_current) {
      		  slide('next', pp_clicked);
      		} else if(pp_clicked < pp_current) {
        		slide('prev', pp_clicked);
      		}
    		});
  
  			$pp_navnext.on( 'click', function( event ) {
  
  				if( !pp_isAnimating ) {
  					pp_clicked++;
  					slide( 'next' );
  				  
  				
  				}
  				return false;
  
  			} );
  
  			// transition end event
  			$pp_items.on( transEndEventName, removeTransition );
  			$pp_slides.on( transEndEventName, removeTransition );
  			
  		},
  		removeTransition = function() {
  
  			pp_isAnimating = false;
  			$pp_navlocking = false;
  			jQuery(this).removeClass('ps-move');
  			if(pp_current != 4) {
    		  jQuery('.ps-slidewrapper > nav .slide-next').removeClass('pp-hide');;
  			} else {
    			jQuery('.ps-slidewrapper > nav .navend').addClass('pp-show');
  			}
  
  		},
  		slide = function( dir, index ) {
        
        if(!$pp_navlocking) {
          $pp_navlocking = true;
          
    			pp_isAnimating = true;
    
    			var $pp_currentItem = $pp_items.eq( pp_current ),
    				$pp_currentSlide = $pp_slides.eq( pp_current );
    		
          $pp_switch.removeClass('active');
          jQuery('.ps-slidewrapper > nav .slide-next').addClass('pp-hide');
          jQuery('.ps-slidewrapper > nav .navend').addClass('pp-hide');
          
          if (typeof index != 'undefined') {
            pp_current = index;
          } else {
      			// update pp_current value
      			if( dir === 'next' ) {
      				( pp_current < itemsCount - 1 ) ? ++pp_current : pp_current = 0;
      
      			}
      			else if( dir === 'prev' ) {
      				( pp_current > 0 ) ? --pp_current : pp_current = itemsCount - 1;
      
      			}
    			
    			}
    			
          $pp_switch.eq(pp_current).addClass('active');
          
          if(pp_current != 4) {
            jQuery('.ps-slidewrapper > nav .slide-next').addClass('pp-hide');
            jQuery('.ps-slidewrapper > nav .navend').removeClass('pp-show');
          }
          
    				// new item that will be shown
    			var $newItem = $pp_items.eq( pp_current ),
    				// new slide that will be shown
    				$newSlide = $pp_slides.eq( pp_current );
    
    			// position the new item up or down the viewport depending on the direction
    			$newItem.css( {
    				top : ( dir === 'next' ) ? '100%' : '-100%',
    				zIndex : 999
    			} );
    			
    			if(pp_clicked == pp_current) {
      			$newItem.css('opacity', 1);
    			}
    			
    			$newSlide.css( {
    				//top : ( dir === 'next' ) ? '-100%' : '100%',
    				zIndex : 999,
    				opacity : 1
    			} );
    
    			setTimeout( function() {
    
    				// move the pp_current item and slide to the top or bottom depending on the direction 
    				$pp_currentItem.addClass( 'ps-move' ).css( {
    					top : ( dir === 'next' ) ? '-100%' : '100%',
    					zIndex : 1,
    				} );
            
    				$pp_currentSlide.addClass( 'ps-move' ).css( {
    					//top : ( dir === 'next' ) ? '100%' : '-100%',
    					zIndex : 999,
    					opacity: 0
    				} );
    
    				// move the new ones to the main viewport
    				$newItem.addClass( 'ps-move' ).css( 'top', 0 );
    				$newSlide.addClass( 'ps-move' ).css( 'opacity', 1 );
    
    				// if no CSS transitions set the pp_isAnimating flag to false
    				if( !pp_support ) {
    
    					pp_isAnimating = false;
        			$pp_navlocking = false;
        			jQuery(this).removeClass('ps-move');
        			if(pp_current != 4) {
          		  jQuery('.ps-slidewrapper > nav .slide-next').removeClass('pp-hide');;
        			} else {
          			jQuery('.ps-slidewrapper > nav .navend').addClass('pp-show');
        			}
    
    
    				}
    				
    				
    
    			}, 100 );
  			
  			}
  
  			// update nav images
  
  		};
  
  	return { init : init };
  
  })();
  pp_slider.init();
});
