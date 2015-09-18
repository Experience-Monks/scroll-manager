# scroll-manager

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A handler for scrolling inside elements with different eases

```js
var ScrollManager = require('scroll-manager');

this.scoller = new ScrollManager();

this.scoller.scrollTo(element, offsetToScroll, duration, ease(optional));

//Examples

this.scoller.scrollTo(document.body, 0, 0.6);

this.scoller.scrollTo(document.body, 0, 0.6, 'easeOutCubic');
```

## Available Eases
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
