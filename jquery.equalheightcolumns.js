/*!
* equalHeightColumns 1.0b3
*
* Written by Nathan Shubert-Harbison, Domain7, in Vancouver, BC, Canada.
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/

* Date: March 25, 2014
*/

(function($) {
	
	var ehc = {
		defaults: {
			selector: ".column",
			outerHeight: false,
			responsive: true
		},
		tallest: 0,
		settings: '',
		
		sizeColumns: function(settings, that) {

			return $(that).each(function() {

				// Reset tallest to 0
				ehc.tallest = 0;

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

				}).css('height', ehc.tallest);

			}); // return this.each

		}, // sizeColumns

		watchResize: function(settings, that) {

			$(window).on('resize.ehc', function(event) {

				// Remove height previously set
				ehc.tallest = 0;
				$(that).find(settings.selector).each(function() {
					$(this).css('height', '');
				});

				// Calculate new heights
				ehc.sizeColumns(settings, that);

			}); // $(window).on(resize.ehc....

		}, // watchResize

		kill: function(that) {
			
			// Unbind window resize event handler
			$(window).off('resize.ehc');
			
			// Return elements with heights cleared
			return $(that).find(settings.selector).each(function() {
			  $(this).css('height', '');
			});
			
		} // kill

	}; // ehc
	
	$.fn.equalHeightColumns = function(options) {

		// Check if we're instantiating plugin with options or calling the kill method. Normal stuff frist.
		if ( options != 'kill' ) {

			// Merge settings
			settings = $.extend(ehc.defaults, options);

			// If we're responsive bind resize
			if ( settings.responsive ) {
				ehc.watchResize(settings, this);
			}

			// Return main method
			return ehc.sizeColumns(settings, this);

		} else { // options != kill
			
			// Return kill method
			return ehc.kill(this);
			
		}

	}; // equalHeightColumns
	
}(jQuery));
