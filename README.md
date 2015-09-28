# scroll-manager

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A handler for scrolling inside elements with different eases

```js
var ScrollManager = require('scroll-manager');
this.scoller = new ScrollManager();
var options = {
	element: <some element>,
	offsetToScroll: <offset>,
	duration: <duration>,
	ease: <ease>
}

this.scoller.scrollTo(options, callback);
```

##Examples  
###ScrollTo  

```js
//This scroll the element to the offsetToScroll in the required duration with the default ease
this.scoller.scrollTo({element: document.body, to: 100, duration: 0.6});

//This scroll the element to the offsetToScroll in the required duration with the selected ease and finally execute the callback
this.scoller.scrollTo({element: document.body, to: 100, duration: 0.6, ease: 'easeOutCubic'}, callback);

```
###ScrollTop  

```js

//This scroll the element to the top in the required duration with the selected ease and finally execute the callback
this.scoller.scrollTop({element: document.body, duration: 0.6, ease: 'easeOutCubic'}, callback);

```
###ScrollBottom  

```js
//This scroll the element to the bottom in the required duration with the default ease
this.scoller.scrollBottom({element: document.body, duration: 0.6});

```
###ScrollEqual 

```js
//If you want to scroll with the same velocity without taking into acount the distance you can use:
this.scoller.scrollEqual({element: document.body, velocity: 100, to: 100, ease: 'easeOutCubic'});  
//This is useful if you want the user feel the difference between short and long distances.

```

### Available Eases  
'easeLinear'  
'easeInQuad'  
'easeOutQuad'  
'easeInOutQuad'  
'easeInCubic'  
'easeOutCubic'  
'easeInOutCubic'  

Note: If you dont choose any ease, easeLinear is going to be run.

## Usage

[![NPM](https://nodei.co/npm/scroll-manager.png)](https://www.npmjs.com/package/scroll-manager)
