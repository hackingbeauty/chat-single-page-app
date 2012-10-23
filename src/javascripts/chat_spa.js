/*	jslint         browser : true, continue : true,
  	devel  : true, indent  : 2,    maxerr   : 50,
  	newcap : true, nomen   : true, plusplus : true,
	regexp : true, sloppy  : true, vars 	: true
  	white  : true
*/


/* global $, ChatSpa */

var ChatSPA = (function($) {

	var
		configMap = {
			extended_height: 434,
			extended_title: 'Click to retract',
			retracted_height: 16,
			retractekd_title: 'Click to extend',
			template_html: '<div class="chat-spa-slider"></div>'
		},
		$chatSlider,
		toggleSlider, onClickSlider, initModule;
		
	// DOM method
	toggleSlider = function(){
		var 
			slider_height = $chatSlider.height();
	
		// extend slider if fully retracted
		if(slider_height === configMap.retracted_height){
			$chatSlider
				.animate({height:configMap.extended_height})
				.attr('title', configMap.extended_title);
			return true;
		} 
		// retract slider if fully extended
		else if (slider_height === configMap.extended_height){
			$chatSlider
				.animate({height: configMap.retracted_height})
				.attr('title', configMap.retracted_title);
			return true;
		}
		// do not take action if slider is in transition
		return false;
	};
	
	// Event handler
	onClickSlider = function (event) {
		toggleSlider();
		return false;
	}
	
	// Public method
	initModule = function ($container) {
		$('#spa').html(
		  '<h1 style="display:inline-block; margin:25px;">'
		    + 'hello world!'
		  + '</h1>'
			); 
		};
		// $container.html(configMap.template_html);
		// $chatSlider = $container.find('.chat-spa-slider');
		// 
		// $chatSlider
		// 	.attr('title',configMap.retracted_title)
		// 	.click(onClickSlider);
		// return true;
	}
	
	return {initModule : initModule};
	
})(jQuery);

