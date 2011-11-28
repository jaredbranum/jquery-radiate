/*
 * jquery-radiate: a jquery plugin to add animated glow effects to block-level elements
 * version 1.0
 *
 * Copyright 2011 Jared Branum (www.jaredbranum.com)
 * Licensed under the MIT License. See LICENSE file for more info.
 */

(function($){
  $.fn.radiate = function(options, callback){
    var jqObj = this
      , blur = 40
      , spread = 10
      , color = '#ffff99'
      , direction = 'outer'
      , duration = 750;
    if (arguments.length){
      if (options && typeof options == "object"){
        blur = (options.blur == undefined) ? blur : options.blur;
        spread = (options.spread == undefined) ? spread : options.spread;
        color = (options.color == undefined) ? color : options.color;
        direction = (options.direction == undefined) ? direction : options.direction;
        duration = (options.duration == undefined) ? duration : options.duration;
      }
      if (arguments[arguments.length - 1] != callback && typeof arguments[arguments.length - 1] == "function"){
        callback = arguments[arguments.length - 1];
      }
    }
    $({ percent: 0 }).animate({ percent: 100 },{
      duration: duration,
      step: function(now, fx){
        blurNow = (now / 100.0) * blur;
        spreadNow = (now / 100.0) * spread;
        jqObj.css({ 'box-shadow' : '0 0 ' + blurNow + 'px ' + spreadNow + 'px ' + color });
      },
      complete: function(){
        if (callback && typeof callback == "function"){
          callback();
        }
      }
    });
    return jqObj;
  };

  $.fn.unradiate = function(duration_, callback){
    var jqObj = this
      , cssString = jqObj.css('box-shadow')
      , blur, spread, color, direction, duration = 750
      , blurAndSpread;
    if (arguments.length){
      if (duration_ && typeof duration_ == "number"){
        duration = duration_;
      }
      if (arguments[arguments.length - 1] != callback && typeof arguments[arguments.length - 1] == "function"){
        callback = arguments[arguments.length - 1];
      }
    }
    blurAndSpread = /0px\s0px\s(.*)px\s(.*)px/.exec(cssString);
    if (blurAndSpread.length < 3 || !(/(rgb\(\d{1,3}\,\s?\d{1,3},\s\d{1,3}\))/.test(cssString))){
      return jqObj;
    }
    color = /(rgb\(\d{1,3},\s?\d{1,3},\s\d{1,3}\))/.exec(cssString)[1];
    blur = blurAndSpread[1];
    spread = blurAndSpread[2];
    $({ percent: 0 }).animate({ percent: 100 },{
      duration: duration,
      step: function(now, fx){
        blurNow = blur - ((now / 100.0) * blur);
        spreadNow = spread - ((now / 100.0) * spread);
        jqObj.css({ 'box-shadow' : '0 0 ' + blurNow + 'px ' + spreadNow + 'px ' + color });
      },
      complete: function(){
        if (callback && typeof callback == "function"){
          callback();
        }
      }
    });
    return jqObj;
  };
})(jQuery);