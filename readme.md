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

```javascript
selector: ".column",
outerHeight: false
```

## outerHeight

You can set this option to `true` if you want the plugin to use `outerHeight()` instead of `height()`.

## Roadmap

This plugin doesn't currently respond to browser resize. This is a feature I'm planning on adding.