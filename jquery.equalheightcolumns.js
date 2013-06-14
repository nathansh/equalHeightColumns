/*!
* equalHeightColumns 1.0b
*
* Written by Nathan Shubert-Harbison, Domain7, in Vancouver, BC, Canada.
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/

* Date: June 14, 2013
*/

(function($) {
	
	$.fn.equalHeightColumns = function(options) {
		
		var settings = $.extend({
			selector: ".column",
			outerHeight: false
		}, options);

		var tallest = 0;

		return this.each(function() {
			
			// Find the tallest value
			$(this).find(settings.selector).each(function(index) {

				// whether to use outerHeight or not
				if ( settings.outerHeight ) {
					if ( $(this).outerHeight() > tallest ) {
						tallest = $(this).outerHeight();
					}
				} else {
					if ( $(this).height() > tallest ) {
						tallest = $(this).height();
					}
				}

			}).height(tallest);
			
		}); // return this.each
		
	}; // equalHeightColumns
	
}(jQuery));