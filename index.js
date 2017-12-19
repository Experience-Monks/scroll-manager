var raf = require('raf');

function ScrollManager () {
  'use strict';
  if (!(this instanceof ScrollManager)){
    return new ScrollManager();
  }
  this.id = 0;
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

var isBody = function(el) {
  return document.body === el;
};


ScrollManager.prototype.scrollTop = function (options, callback) {
    'use strict';
    var element = options.element,
    duration = options.duration,
    ease = options.ease;

    this.scrollTo({element: element, duration: duration, direction:'vertical', to: 0, ease: ease}, callback);

};

ScrollManager.prototype.scrollBottom = function (options, callback) {
    'use strict';
    var element = options.element,
    duration = options.duration,
    ease = options.ease;

    var height = parseInt(window.getComputedStyle(element).height);

    this.scrollTo({element: element, duration: duration, direction:'vertical', to: height, ease: ease}, callback);

};

ScrollManager.prototype.scrollLeft = function (options, callback) {
    'use strict';
    var element = options.element,
    duration = options.duration,
    ease = options.ease;

    this.scrollTo({element: element, duration: duration, direction:'horizontal', to: 0, ease: ease}, callback);

};

ScrollManager.prototype.scrollRight = function (options, callback) {
    'use strict';
    var element = options.element,
    duration = options.duration,
    ease = options.ease;

    var width = parseInt(window.getComputedStyle(element).width);

    this.scrollTo({element: element, duration: duration, direction:'horizontal', to: width, ease: ease}, callback);

};

ScrollManager.prototype.scrollEqual = function(options, callback) {
    'use strict';
    var element = options.element,
    velocity = options.velocity,
    direction = options.direction,
    to = options.to,
    ease = options.ease;
    var from = (direction === 'horizontal') ? element.scrollLeft: element.scrollTop;
    var duration = Math.abs(to - from) / velocity;

    this.scrollTo({element: element, direction: direction, duration: duration, to: to, ease: ease}, callback);

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
    direction = options.direction,
    ease = options.ease;
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);


    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      if (isBody(element)) {
        element = element.parentElement;
      }
    }

    var start;

    if (isChrome) {
        start = (direction === 'horizontal') ? element.scrollLeft: element.scrollTop;

    } else {
        start = (direction === 'horizontal') ? window.scrollX: window.scrollY;
    }
    var change = to - start;
    var startTime = new Date();

    if (!ease) {
      console.warn('[scroll-manager]: No ease defined, animation is going to run with linear ease');
    }

    var easeFunction = selectEase(ease);
    var elapsedTime = 0;

    var animate;
    if (direction === 'horizontal') {
      animate = function () {
        var currentTime = new Date();
        elapsedTime = (currentTime.getTime() - startTime.getTime()) / 1000;
        var position = easeFunction(elapsedTime, start, change, duration);

        if (isChrome) {
            window.scrollTo(position, 0);
        } else {
            element.scrollLeft = position;
        }

        if (elapsedTime < duration) {
          this.id = raf(animate);
        } else {
          if (callback) {
            callback();
          }
        }
      }.bind(this);
    } else {
      animate = function () {
        var currentTime = new Date();
        elapsedTime = (currentTime.getTime() - startTime.getTime()) / 1000;
        var position = easeFunction(elapsedTime, start, change, duration);

        if (isChrome) {
            window.scrollTo(0, position);
        } else {
            element.scrollTop = position;
        }

        if (elapsedTime < duration) {
          this.id = raf(animate);
        } else {
          if (callback) {
            callback();
          }
        }
      }.bind(this);
    }
    this.id = raf(animate);
};

module.exports = ScrollManager;
