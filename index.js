module.exports = ScrollManager;

function ScrollManager() {
  if (!(this instanceof ScrollManager)) 
    return new ScrollManager(inc);
}

ScrollManager.prototype.scrollTo = function(element, to, duration, ease) {
    var start = element.scrollTop,
    change = to - start;
    var startTime = new Date();

    if(!ease)
      console.warn('[scroll-manager]: No ease defined, animation is going to run with linear ease');

    var animateScroll = function(elapsedTime) {
        var currentTime = new Date();
        elapsedTime = (currentTime.getTime() - startTime.getTime())/1000;
        var position;
        switch(ease){
          case 'linearTween':
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
          default:
            position = easeLinear(elapsedTime, start, change, duration);
        }

        element.scrollTop = position; 
        if (elapsedTime < duration) {
            setTimeout(function() {
                animateScroll(elapsedTime);
            }, this.increment);
        }
    }.bind(this);
    
    animateScroll(0);
};


var easeLinear = function (currentTime, start, change, duration) {
  return change * currentTime/duration + start;
};

var easeInQuad = function (currentTime, start, change, duration) {
  currentTime /= duration;
  return change * currentTime * currentTime + start;
};

var easeOutQuad = function (currentTime, start, change, duration) {
  currentTime /= duration;
  return -change * currentTime * (currentTime-2) + start;
};

var easeInOutQuad = function (currentTime, start, change, duration) {
  currentTime /= duration/2;
  if (currentTime < 1) return change/2 * currentTime * currentTime + start;
  currentTime--;
  return -change/2 * (currentTime * ( currentTime - 2) - 1) + start;
};

var easeInCubic = function (currentTime, start, change, duration) {
  currentTime /= duration;
  return change * currentTime * currentTime * currentTime + start;
};

var easeOutCubic = function (currentTime, start, change, duration) {
    currentTime /= duration;
    currentTime--;
    return change * (currentTime * currentTime * currentTime + 1) + start;
};

var easeInOutCubic = function (currentTime, start, change, duration) {
  currentTime /= duration/2;
  if (currentTime < 1) return change/2 * currentTime * currentTime * currentTime + start;
  currentTime -= 2;
  return change/2 * (currentTime * currentTime * currentTime + 2) + start;
};