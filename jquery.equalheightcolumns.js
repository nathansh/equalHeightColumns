/*!
* equalHeightColumns 1.0-rc1
*
* Written by Nathan Shubert-Harbison, Domain7, in Vancouver, BC, Canada.
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/

* Date: March 28, 2014
*/

(function($) {
	
	var ehc = {
		defaults: {
			selector: ".column",
			outerHeight: false,
			responsive: true,
			excludeFullWidth: false
		},
		tallest: 0,
		watching: false,
		settings: '',
		
		sizeColumns: function(that) {

			return $(that).each(function() {

				//save width of container
				var containerWidth = $(this).width();
				    columns = $(this).find(ehc.settings.selector);

				// Reset tallest to 0
				ehc.tallest = 0;

				// Find the tallest value
				columns.each(function(index) {

					if( ehc.settings.excludeFullWidth && $(this).width() >= containerWidth ){
						//remove from columns var
						columns = columns.not(this);
						//continue
						return true;
					}

					// whether to use outerHeight or not
					if ( ehc.settings.outerHeight ) {
						if ( $(this).outerHeight() > ehc.tallest ) {
							ehc.tallest = $(this).outerHeight();
						}
					} else {
						if ( $(this).height() > ehc.tallest ) {
							ehc.tallest = $(this).height();
						}
					}

				});

				columns.css('height', ehc.tallest);

			}); // return this.each

		}, // sizeColumns

		watchResize: function(that) {

			ehc.watching = true;

			$(window).on('resize.ehc', function(event) {

				if(!ehc.watching) return;

				// Remove height previously set
				ehc.tallest = 0;
				$(that).find(ehc.settings.selector).each(function() {
					$(this).css('height', '');
				});

				// Calculate new heights
				ehc.sizeColumns(that);

			}); // $(window).on(resize.ehc....

		}, // watchResize

		methods: {
			
			kill: function(that) {

				ehc.watching = false;

				// Unbind window resize event handler
				$(window).off('resize.ehc');

				// Return elements with heights cleared
				return $(that).find(ehc.settings.selector).each(function() {
				  $(this).css('height', '');
				});

			}, // kill

			refresh: function(that) {
				
				ehc.methods.kill(that);
				ehc.sizeColumns(that);
				return ehc.watchResize(that);
				
			}, // refresh

			debug: function() {

				return ehc;
				
			}

		}

	}; // ehc

	$.fn.equalHeightColumns = function(options) {

		// Check if we're instantiating plugin with options or calling a method. Normal stuff first.
		if ( !ehc.methods[options] ) {

			// Merge settings
			ehc.settings = $.extend(ehc.defaults, options);

			// If we're responsive bind resize
			if ( ehc.settings.responsive ) {
				ehc.watchResize(this);
			}

			// Return main method
			return this.each(function() {
				ehc.sizeColumns(this);
			});

		} else { // options != kill
			
			return this.each(function() {
				ehc.methods[options].apply(undefined, [this]);
			});
			
		}

	}; // equalHeightColumns

}(jQuery));
