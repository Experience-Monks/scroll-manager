# scroll-manager
![logo](https://raw.githubusercontent.com/maximobelen/assets/master/images/scroll-manager/scroll-manager.png)  

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A handler for scrolling inside elements with different eases  
  
  Take a look to the demo --> [Demo](http://jam3.github.io/scroll-manager/)

```js
var ScrollManager = require('scroll-manager');
this.scroller = new ScrollManager();

var elementTo = document.getElementById('elementID');
var callback = function(){
  console.log("I'm done with scroll stuff");
};

var options = {
  duration: 0.8,
  to: elementTo.offsetTop
  element: document.body,
  ease: 'easeLinear'
};

this.scroller.scrollTo(options, callback);
```

##Examples  
###ScrollTo  

```js
//This scroll the element to the offsetToScroll in the required duration with the default ease
this.scroller.scrollTo({element: document.body, to: 100, duration: 0.6});

//This scroll the element to the offsetToScroll in the required duration with the selected ease and finally execute the callback
this.scroller.scrollTo({element: document.body, to: 100, duration: 0.6, ease: 'easeOutCubic'}, callback);

```
###ScrollTop  

```js

//This scroll the element to the top in the required duration with the selected ease and finally execute the callback
this.scroller.scrollTop({element: document.body, duration: 0.6, ease: 'easeOutCubic'}, callback);

```
###ScrollBottom  

```js
//This scroll the element to the bottom in the required duration with the default ease
this.scroller.scrollBottom({element: document.body, duration: 0.6});

```
###ScrollEqual 

```js
//If you want to scroll with the same velocity without taking into acount the duration you can use:
this.scroller.scrollEqual({element: document.body, velocity: 100, to: 100, ease: 'easeOutCubic'});  
//This is useful if you want the user feel the difference between short and long distances.

```

###ScrollToElement 

```js
//If you want to scroll to an element without using the offset you can use:
var element = document.getElementById('elementID');
this.scroller.scrollToElement({element: document.body, to: element, duration: 0.6, ease: 'easeOutExpo'});

```

### Available Eases  
'easeLinear'  
'easeInQuad'  
'easeOutQuad'  
'easeInOutQuad'  
'easeInCubic'  
'easeOutCubic'  
'easeInOutCubic'  
'easeInExpo'  
'easeOutExpo'  
'easeInOutExpo'  
'easeInCirc'  
'easeOutCirc'  
'easeInOutCirc'  

Note: If you dont choose any ease, easeLinear is going to be run.

## Usage

[![NPM](https://nodei.co/npm/scroll-manager.png)](https://www.npmjs.com/package/scroll-manager)
