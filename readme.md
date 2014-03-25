# equalHeightColumns

A lightweight jQuery plugin for creating equal height columns.

## Use

Include jQuery and target your columns container with `equalHeightColumns()`.

```html
<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.equalheightcolumns.js"></script>
<script>
  $(document).ready(function(){
    $("#columns_container").equalHeightColumns();
  });
</script>
```

Note that by default, the selector for columns within the targeted container is `.column`. You can specify a different selector using the options.

## Options and defaults

The following are the available options and default values.

```javascript
$("#container").equalHeightColumns({
	selector: ".column",
	outerHeight: false,
	responsive: true
});
```
as well as a kill method

```javascript
$("#container").equalHeightColumns('kill');
```

## responsive

When `responsive` is set to `true` the plugin will re-calculate heights as the browser is resized.

## outerHeight

You can set this option to `true` if you want the plugin to use `outerHeight()` instead of `height()`.

## kill method

If you're making a responsive site it's likely you'll want to have equal height columns at desktop width but then stack those elements on smaller screens. You'll no longer need or want these elements to have set heights, and the `kill` method is used to clear them. You call the `kill` method by calling `equalHeightColumns('kill')`. For example:

```javascript
$("#container").equalHeightColumns('kill');
```

For responsive sites you could use [harvey.js](http://harvesthq.github.io/harvey/) or [enquire.js](http://wicky.nillia.ms/enquire.js/) to initialize the plugin, and then call `kill` in a smaller media query call. If doing this, you should provide support for older browsers without media query by also instantiating `equalHeightColumns()` outside of harvey.js/enquire.js or in a [Modernizr test](http://modernizr.com/docs/#mq).