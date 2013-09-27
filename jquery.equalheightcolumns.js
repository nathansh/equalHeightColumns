/*!
* equalHeightColumns 1.0b2
*
* Written by Nathan Shubert-Harbison, Domain7, in Vancouver, BC, Canada.
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/

* Date: September 27, 2013
*/

(function($) {
	
	var ehc = {
		defaults: {
			selector: ".column",
			outerHeight: false,
			responsive: true
		},
		tallest: 0,
		
		sizeColumns: function(settings, that) {

			return $(that).each(function() {

				// Find the tallest value
				$(this).find(settings.selector).each(function(index) {

					// whether to use outerHeight or not
					if ( settings.outerHeight ) {
						if ( $(this).outerHeight() > ehc.tallest ) {
							ehc.tallest = $(this).outerHeight();
						}
					} else {
						if ( $(this).height() > ehc.tallest ) {
							ehc.tallest = $(this).height();
						}
					}

				}).height(ehc.tallest);

			}); // return this.each

		}, // sizeColumns

		watchResize: function(settings, that) {

			$(window).resize(function(event) {

				// Remove height previously set
				ehc.tallest = 0;
				$(that).find(settings.selector).each(function() {
					$(this).css('height', '');
				});

				// Calculate new heights
				ehc.sizeColumns(settings, that);

			}); // $(window).resize

		} // watchResize

	}; // ehc
	
	$.fn.equalHeightColumns = function(options) {
		
		// Merge settings
		var settings = $.extend(ehc.defaults, options);

		// If we're responsive bind resize
		if ( settings.responsive ) {
			ehc.watchResize(settings, this);
		}
		
		// Return main method
		return ehc.sizeColumns(settings, this);

	}; // equalHeightColumns
	
}(jQuery));