#jquery-radiate

##Version History

1.0 - first version (11/28/2011)

##Usage

jquery-radiate adds two methods to jQuery objects: `radiate([options] [, callback])` and `unradiate([duration] [, callback])`. `radiate` (optionally) takes a javascript object as its first argument. Here are all the properties that can be controlled through the options object:

* `blur` : the maximum number of pixels for the blur radius of the glow (integer)
* `spread` : the maximum number of pixels for the spread radius of the glow (integer)
* `color` : the color of the glow, specified in any CSS-supported way (string)
* `duration` : the amount of time (in milliseconds) the glow animation takes to complete (integer)

The `unradiate` method will remove the glow effect from an element that already has it applied. Since the glow effect is a CSS3 `box-shadow` hack, this will also remove all shadows applied through that property. The first argument of `unradiate` is the duration of time (in milliseconds) it will take to remove the glow, and should be specified as an integer.

Both `radiate` and `unradiate` will accept a function as their last argument (even if nothing is passed for `options` or `duration`), which will be executed once the animation is complete. The callback function is called with no arguments passed.