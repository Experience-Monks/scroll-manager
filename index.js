var raf = require('raf');
var id = 0;
function ScrollManager () {
  'use strict';
  if (!(this instanceof ScrollManager)){
    return new ScrollManager();
  }
}

var easeLinear = function (currentTime, start, change, duration) {
  'use strict';
  return change * currentTime/duration + start;
};

var easeInQuad = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration;
  return change * currentTime * currentTime + start;
};

var easeOutQuad = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration;
  return -change * currentTime * (currentTime-2) + start;
};

var easeInOutQuad = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration/2;
  if (currentTime < 1) return change/2 * currentTime * currentTime + start;
  currentTime--;
  return -change/2 * (currentTime * ( currentTime - 2) - 1) + start;
};

var easeInCubic = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration;
  return change * currentTime * currentTime * currentTime + start;
};

var easeOutCubic = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration;
  currentTime--;
  return change * (currentTime * currentTime * currentTime + 1) + start;
};

var easeInOutCubic = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration/2;
  if (currentTime < 1) return change/2 * currentTime * currentTime * currentTime + start;
  currentTime -= 2;
  return change/2 * (currentTime * currentTime * currentTime + 2) + start;
};

var easeInExpo = function (currentTime, start, change, duration){
  'use strict';
  return change * Math.pow( 2, 10 * (currentTime/duration - 1) ) + start;
};

var easeOutExpo = function (currentTime, start, change, duration) {
  'use strict';
  return change * ( -Math.pow( 2, -10 * currentTime/duration ) + 1 ) + start;
};

var easeInOutExpo = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration/2;
  if (currentTime < 1) return change / 2 * Math.pow( 2, 10 * (currentTime - 1) ) + start;
  currentTime--;
  return change/2 * ( -Math.pow( 2, -10 * currentTime) + 2 ) + start;
};

var easeInCirc = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration;
  return -change * (Math.sqrt(1 - currentTime * currentTime) - 1) + start;
};

var easeOutCirc = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration;
  currentTime--;
  return change * Math.sqrt(1 - currentTime * currentTime) + start;
};

var easeInOutCirc = function (currentTime, start, change, duration) {
  'use strict';
  currentTime /= duration/2;
  if (currentTime < 1) return -change/2 * (Math.sqrt(1 - currentTime * currentTime) - 1) + start;
  currentTime -= 2;
  return change/2 * (Math.sqrt(1 - currentTime * currentTime) + 1) + start;
};

var selectEase = function(ease){
  'use strict';
  switch (ease) {
    case 'easeLinear':
      return easeLinear; 
    case 'easeInQuad': 
      return easeInQuad;
    case 'easeOutQuad': 
      return easeOutQuad;
    case 'easeInOutQuad': 
      return easeInOutQuad;
    case 'easeInCubic': 
      return easeInCubic;
    case 'easeOutCubic': 
      return easeOutCubic;
    case 'easeInOutCubic': 
      return easeInOutCubic;
    case 'easeInExpo': 
      return easeInExpo;
    case 'easeOutExpo': 
      return easeOutExpo;
    case 'easeInOutExpo': 
      return easeInOutExpo;
    case 'easeInCirc': 
      return easeInCirc;
    case 'easeOutCirc': 
      return easeOutCirc;
    case 'easeInOutCirc': 
      return easeInOutCirc;
    default:
      return easeLinear;
  }
};

ScrollManager.prototype.scrollTop = function (options, callback) {
    'use strict';
    var element = options.element,
    duration = options.duration,
    ease = options.ease;

    this.scrollTo({element: element, duration: duration, to: 0, ease: ease}, callback);

};

ScrollManager.prototype.scrollBottom = function (options, callback) {
    'use strict';
    var element = options.element,
    duration = options.duration,
    ease = options.ease;

    var height = parseInt(window.getComputedStyle(element).height);

    this.scrollTo({element: element, duration: duration, to: height, ease: ease}, callback);

};

ScrollManager.prototype.scrollEqual = function(options, callback) {
    'use strict';
    var element = options.element,
    velocity = options.velocity,
    to = options.to,
    ease = options.ease,
    from = element.scrollTop;

    var duration = Math.abs(to - from) / velocity;

    this.scrollTo({element: element, duration: duration, to: to, ease: ease}, callback);

};

ScrollManager.prototype.scrollToElement = function (options, callback) {
    'use strict';
    var element = options.element,
    duration = options.duration,
    ease = options.ease,
    offset = options.to;

    offset = offset || {offsetTop: 0};

    this.scrollTo({element: element, duration: duration, to: offset.offsetTop, ease: ease}, callback);

};

ScrollManager.prototype.scrollTo = function (options, callback) {
    'use strict';
    var element = options.element,
    to = options.to,
    duration = options.duration,
    ease = options.ease;

    var start = element.scrollTop,
    change = to - start;
    var startTime = new Date();

    if (!ease) {
      console.warn('[scroll-manager]: No ease defined, animation is going to run with linear ease');
    }

    var easeFunction = selectEase(ease);
    var elapsedTime = 0;

    var animate = function () {
      'use strict';
      var currentTime = new Date();
      elapsedTime = (currentTime.getTime() - startTime.getTime()) / 1000;
      var position = easeFunction(elapsedTime, start, change, duration);
      element.scrollTop = position; 

      if (elapsedTime < duration) {
        id = raf(animate);
      } else {
        if (callback) {
          callback();
        } 
      }
    }.bind(this);

    id = raf(animate);
};

module.exports = ScrollManager;