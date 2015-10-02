module.exports = ScrollManager;

function ScrollManager () {
  'use strict';
  if (!(this instanceof ScrollManager)){
    return new ScrollManager();
  }
}

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

    var element = options.element,
    velocity = options.velocity,
    to = options.to,
    ease = options.ease,
    from = element.scrollTop;

    var duration = Math.abs(to - from) / velocity;

    this.scrollTo({element: element, duration: duration, to: to, ease: ease}, callback);

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

    var animate = function (elapsedTime) {
        var currentTime = new Date();
        elapsedTime = (currentTime.getTime() - startTime.getTime()) / 1000;
        var position;
        switch (ease) {
          case 'easeLinear':
            position = easeLinear(elapsedTime, start, change, duration); 
            break;
          case 'easeInQuad': 
            position = easeInQuad(elapsedTime, start, change, duration);
            break;
          case 'easeOutQuad': 
            position = easeOutQuad(elapsedTime, start, change, duration);
            break;
          case 'easeInOutQuad': 
            position = easeInOutQuad(elapsedTime, start, change, duration);
            break;
          case 'easeInCubic': 
            position = easeInCubic(elapsedTime, start, change, duration);
            break;
          case 'easeOutCubic': 
            position = easeOutCubic(elapsedTime, start, change, duration);
            break;
          case 'easeInOutCubic': 
            position = easeInOutCubic(elapsedTime, start, change, duration);
            break;
          case 'easeInExpo': 
            position = easeInExpo(elapsedTime, start, change, duration);
            break;
          case 'easeOutExpo': 
            position = easeOutExpo(elapsedTime, start, change, duration);
            break;
          case 'easeInOutExpo': 
            position = easeInOutExpo(elapsedTime, start, change, duration);
            break;
          case 'easeInCirc': 
            position = easeInCirc(elapsedTime, start, change, duration);
            break;
          case 'easeOutCirc': 
            position = easeOutCirc(elapsedTime, start, change, duration);
            break;
          case 'easeInOutCirc': 
            position = easeInOutCirc(elapsedTime, start, change, duration);
            break;
          default:
            position = easeLinear(elapsedTime, start, change, duration);
            break;
        }

        element.scrollTop = position; 
        if (elapsedTime < duration) {
            setTimeout(function() {
                animate(elapsedTime);
            }, null);
        } else {
          if (callback) {
            callback();
          } 
        }
    }.bind(this);
    
    animate(0);
};

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
  currentTime /= duration;
  return -change * (Math.sqrt(1 - currentTime * currentTime) - 1) + start;
};

var easeOutCirc = function (currentTime, start, change, duration) {
  currentTime /= duration;
  currentTime--;
  return change * Math.sqrt(1 - currentTime * currentTime) + start;
};

var easeInOutCirc = function (currentTime, start, change, duration) {
  currentTime /= duration/2;
  if (currentTime < 1) return -change/2 * (Math.sqrt(1 - currentTime * currentTime) - 1) + start;
  currentTime -= 2;
  return change/2 * (Math.sqrt(1 - currentTime * currentTime) + 1) + start;
};