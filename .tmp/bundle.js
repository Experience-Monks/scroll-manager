(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/maximo/Documents/repositories/scroll-manager/index.js":[function(require,module,exports){
'use strict';
var domready = require('detect-dom-ready');
var framework = require( './lib/framework' );

domready(function() {
  framework.init();
});

},{"./lib/framework":"/Users/maximo/Documents/repositories/scroll-manager/lib/framework/index.js","detect-dom-ready":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/detect-dom-ready/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/lib/framework/index.js":[function(require,module,exports){
'use strict';
var bigwheel = require( 'bigwheel' );

module.exports = bigwheel( function( done ) {

	done( {

		initSection: require('../sections/Preloader'),

		routes: require( './routes' )
	});
});

},{"../sections/Preloader":"/Users/maximo/Documents/repositories/scroll-manager/lib/sections/Preloader/index.js","./routes":"/Users/maximo/Documents/repositories/scroll-manager/lib/framework/routes.js","bigwheel":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/lib/framework/routes.js":[function(require,module,exports){
'use strict';
module.exports = {
  '/': { section: [require('../sections/Landing')], useURL: true, duplicate: true},
  '/:bid': { section: [require('../sections/Landing')], useURL: true, duplicate: true}
};

},{"../sections/Landing":"/Users/maximo/Documents/repositories/scroll-manager/lib/sections/Landing/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/lib/model/index.js":[function(require,module,exports){
'use strict';
module.exports = {
	"/": {

  },
  'landing': {
    'title':'landing',
    'model': {
      'text': {
        'title':'scroll-manager',
        'summary': {
          'start': 'scroll-manager its a module that allows you to scroll inside elements with different eases. Now its time to said welcome to scroll-manager demo or... just',
          'console': '$ npm install scroll-manager',
          'end':'and try it yourself ;)'
        }
      },
      'button': {
        'title': 'Start',
        'options': {
          'viewName': 'firstExample',
          'type': 'scrollTo',
          'duration': 0.8,
          'element': document.body, 
          'ease': 'easeOutExpo'
        }
      }
    }
  },
  'examples':{
    'firstExample': {
      'title':'firstExample',
      'model':{
        'text': {
          'title':'scrollTo()',
          'summary': 'Scroll with a linear ease',
          'sourceCode': 'var offset = document.getElementById(\'secondExample\');\n\nvar options = {\n  duration: 0.7,\n  to: offset.\n  element: document.body,\n  ease: \'easeLinear\'\n};\n\nthis.scroller.scrollTo(options);'
        },
        'button': {
          'title': 'Go!',
          'options': {
            'viewName': 'secondExample',
            'type': 'scrollTo',
            'duration': 0.7,
            'element': document.body, 
            'ease': 'easeLinear'
          }
        }
      }
    },
    'secondExample': {
      'title':'secondExample',
      'model':{
        'text': {
          'title':'scrollTo()',
          'summary': 'Scroll with a ExpoOut ease',
          'sourceCode': 'var offset = document.getElementById(\'thirdExample\');\n\nvar options = {\n  duration: 1.5,\n  to: offset.\n  element: document.body,\n  ease: \'easeOutExpo\'\n};\n\nthis.scroller.scrollTo(options);'
        },
        'button': {
          'title': 'Go!',
          'options': {
            'viewName': 'thirdExample',
            'type': 'scrollTo',
            'duration': 1.5,
            'element': document.body, 
            'ease': 'easeOutExpo'
          }
        }
      }
    },
    'thirdExample': {
      'title':'thirdExample',
      'model':{
        'text': {
          'title':'scrollBottom()',
          'summary': 'Scroll to the bottom of the element',
          'sourceCode': 'var options = {\n  duration: 0.7,\n  element: document.body,\n  ease: \'easeInQuad\'\n};\n\nthis.scroller.scrollBottom(options);'
        },
        'button': {
          'title': 'Go Bottom!',
          'options': {
            'viewName': 'bottomExample',
            'type': 'scrollBottom',
            'duration': 1.2,
            'element': document.body, 
            'ease': 'easeInQuad'
          }
        }
      }
    },
    'forthExample':{
      'title':'forthExample',
      'model':{
        'text': {
          'title':'scrollTop()',
          'summary': 'Scroll to the top of the element',
          'sourceCode': 'var options = {\n  duration: 1,\n  element: document.body,\n  ease: \'easeOutQuad\'\n};\n\nthis.scroller.scrollTop(options);'
        },
        'button': {
          'title': 'Go Top!',
          'options': {
            'viewName': 'landing',
            'type': 'scrollTop',
            'duration': 1,
            'element': document.body, 
            'ease': 'easeOutQuad'
          }
        }
      }
    },
    'fifthExample':{
      'title':'fifthExample',
      'model':{
        'text': {
          'title':'scrollEqual()',
          'summary': 'Scroll with the same velocity without taking into account the duration of the animation',
          'sourceCode': 'var offset = document.getElementById(\'forthExample\');\n\nvar options = {\n  velocity: 400,\n  to: offset.\n  element: document.body,\n  ease: \'easeLinear\'\n};\n\nthis.scroller.scrollEqual(options);'
        },
        'button': {
          'title': 'Go!',
          'options': {
            'viewName': 'forthExample',
            'type': 'scrollEqual',
            'velocity': 400,
            'element': document.body, 
            'ease': 'easeLinear'
          }
        }
      }
    },
    'bottomExample':{
      'title':'bottomExample',
      'model':{
        'text': {
          'title':'scrollBottom take you here! :)',
          'summary': 'Go back to another example',
          'sourceCode': 'var offset = document.getElementById(\'fifthExample\');\n\nvar options = {\n  duration: 1.2,\n  to: offset.\n  element: document.body,\n  ease: \'easeOutExpo\'\n};\n\nthis.scroller.scrollEqual(options);'

        },
        'button': {
          'title': 'Continue!',
          'options': {
            'viewName': 'fifthExample',
            'type': 'scrollTo',
            'duration': 1.2,
            'element': document.body, 
            'ease': 'easeOutExpo'
          }
        }
      }
    }
  }
};

},{}],"/Users/maximo/Documents/repositories/scroll-manager/lib/sections/Landing/index.js":[function(require,module,exports){
'use strict';


var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var model = require( '../../model' );
var Example = require('../../ui/Example');
var LandingView = require('../../ui/LandingView');
function Landing() {}


Landing.prototype = {

	init: function( req, done ) {
		
			
			this.dom = domify(hbs.compile("<div id=\"Landing\">\n  <a href=\"https://github.com/Jam3/scroll-manager\">\n  <img style=\"position: absolute; top: 0; left: 0; border: 0;\" src=\"assets/images/fork-me-on-github.png\" \n  alt=\"Fork me on GitHub\"></a>\n  <div class=\"view-container\">\n    <div id=\"landing\"></div>\n    <div id=\"firstExample\"></div>\n    <div id=\"secondExample\"></div>\n    <div id=\"thirdExample\"></div>\n    <div id=\"forthExample\"></div>\n    <div id=\"fifthExample\"></div>\n    <div id=\"bottomExample\"></div>\n  </div>\n</div>")(model[ req.route ]));
			document.body.appendChild(this.dom);

			var viewContainer = this.dom.getElementsByClassName('view-container')[0];
			var landingView = new LandingView(req, done, model.landing.model, model.landing.title);
			viewContainer.children.namedItem(model.landing.title).appendChild(landingView.dom);
			
			var example;
			for (example in model.examples) {
				var exampleToAdd = new Example(req, done, model.examples[example].model, model.examples[example].title);
				viewContainer.children.namedItem(model.examples[example].title).appendChild(exampleToAdd.dom);
			}
		
			done();
		
	},

  resize: function(w,h) {

  },

	animateIn: function( req, done ) {
		// this.goToSection(req.params.bid);
		done();
    
	},

	animateOut: function( req, done ) {

		done();
	},

	destroy: function( req, done ) {

		
    this.dom.parentNode.removeChild(this.dom);

		done();
	}
};

module.exports = Landing;

},{"../../model":"/Users/maximo/Documents/repositories/scroll-manager/lib/model/index.js","../../ui/Example":"/Users/maximo/Documents/repositories/scroll-manager/lib/ui/Example/index.js","../../ui/LandingView":"/Users/maximo/Documents/repositories/scroll-manager/lib/ui/LandingView/index.js","domify":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/domify/index.js","handlebars":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/lib/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/lib/sections/Preloader/index.js":[function(require,module,exports){
'use strict';


var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var model = require( '../../model' );


function Preloader(onComplete) {
  this.preloaded = onComplete;
}


Preloader.prototype = {

	init: function( req, done ) {
		
		
			this.dom = domify(hbs.compile("<div id=\"Preloader\"></div>")());
			document.body.appendChild(this.dom);
			done();
		
	},

  resize: function(w,h) {

  },

	animateIn: function( req, done ) {

		done();
    
    this.preloaded();
    
	},

	animateOut: function( req, done ) {

		done();
	},

	destroy: function( req, done ) {

		
    this.dom.parentNode.removeChild(this.dom);

		done();
	}
};

module.exports = Preloader;

},{"../../model":"/Users/maximo/Documents/repositories/scroll-manager/lib/model/index.js","domify":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/domify/index.js","handlebars":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/lib/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/lib/ui/Example/index.js":[function(require,module,exports){
'use strict';


var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var ScrollButton = require('../ScrollButton');

function Example(req, done, model, viewName) {
  this.model = model;
  this.viewName = viewName;
  this.init(req, done);
}


Example.prototype = {

  init: function( req, done) {
    
    
      this.dom = domify(hbs.compile("<div id=\"Example\">\n  <h1>{{text.title}}</h1>\n  <div class=\"text-container\">\n    <span>{{text.summary}}</span>\n  </div>\n  <div class=\"source-code-container\">\n    <pre class=\"black-console\">{{text.sourceCode}}</pre>\n  </div>\n</div>")(this.model));
      document.body.appendChild(this.dom);
      var button = new ScrollButton(req, done, this.model.button);
      this.dom.appendChild(button.container);
      done();
  },

  resize: function(w,h) {

  },

  animateIn: function( req, done ) {

    done();
    
  },

  animateOut: function( req, done ) {

    done();
  },

  destroy: function( req, done ) {

    
    this.dom.parentNode.removeChild(this.dom);

    done();
  }
};

module.exports = Example;

},{"../ScrollButton":"/Users/maximo/Documents/repositories/scroll-manager/lib/ui/ScrollButton/index.js","domify":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/domify/index.js","handlebars":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/lib/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/lib/ui/LandingView/index.js":[function(require,module,exports){
'use strict';


var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var ScrollButton = require('../ScrollButton');

function LandingView(req, done, model, viewName) {
  this.model = model;
  this.viewName = viewName;
  this.init(req, done);
}


LandingView.prototype = {

  init: function( req, done) {
    
    
      this.dom = domify(hbs.compile("<div id=\"LandingView\">\n  <h1>{{text.title}}</h1>\n  <div class=\"text-container\">\n    <span>{{text.summary.start}}</span>\n    <span class=\"console\">{{text.summary.console}}</span>\n    <span>{{text.summary.end}}</span>\n  </div>\n</div>")(this.model));
      document.body.appendChild(this.dom);
      var button = new ScrollButton(req, done, this.model.button);
      this.dom.appendChild(button.container);
      done();
  },

  resize: function(w,h) {

  },

  animateIn: function( req, done ) {

    done();
    
  },

  animateOut: function( req, done ) {

    done();
  },

  destroy: function( req, done ) {

    
    this.dom.parentNode.removeChild(this.dom);

    done();
  }
};

module.exports = LandingView;

},{"../ScrollButton":"/Users/maximo/Documents/repositories/scroll-manager/lib/ui/ScrollButton/index.js","domify":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/domify/index.js","handlebars":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/lib/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/lib/ui/ScrollButton/index.js":[function(require,module,exports){
'use strict';


var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var scrollManager = require('scroll-manager');

function ScrollButton(req, done, model ) {
  this.model = model;
  this.viewName = this.model.options.viewName;
  this.init(req, done);
}


ScrollButton.prototype = {

  init: function(req, done) {
    
      this.container = domify(hbs.compile("<div id=\"ScrollButton\">\n  <p class=\"button-text\">{{title}}</p>\n</div>")(this.model));
      document.body.appendChild(this.container);
      this.scroller = new scrollManager();

      this.addListeners();
      done();
    
  },

  addListeners: function() {
    this.container.addEventListener('mousedown', function() {
      this.doScroll(this.model.options.type);
    }.bind(this));
  },

  doScroll: function(scrollType) {
    var offset = document.getElementById(this.viewName);
    this.options = {
      'element': this.model.options.element,
      'ease': this.model.options.ease
    };

    switch(scrollType){
      case 'scrollTo':
        offset = offset || {offsetTop: 0};
        this.options.to = offset.offsetTop;
        this.options.duration = this.model.options.duration;
        this.scroller.scrollTo(this.options);
        break;
      case 'scrollTop':
        this.options.duration = this.model.options.duration;
        this.scroller.scrollTop(this.options);
        break;
      case 'scrollBottom':
        this.options.duration = this.model.options.duration;
        this.scroller.scrollBottom(this.options);
        break;
      case 'scrollEqual':
        offset = offset || {offsetTop: 0};
        this.options.to = offset.offsetTop;
        this.options.velocity = this.model.options.velocity;
        this.scroller.scrollEqual(this.options);
        break;
      default:
        this.scroller.scrollTo(this.options);
        break;
    }
  },

  resize: function(w,h) {

  },

  animateIn: function(req, done) {

    done();

  },

  animateOut: function( req, done ) {
    

    done();

  },

  destroy: function() {

    
    this.dom.parentNode.removeChild(this.dom);
    done();

  }
};

module.exports = ScrollButton;

},{"domify":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/domify/index.js","handlebars":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/lib/index.js","scroll-manager":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/scroll-manager/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/index.js":[function(require,module,exports){
(function (global){
/** @module bigwheel */

var vm = require('bw-vm');
var viewmediator = require('bw-viewmediator');
var router = require('bw-router');
var on = require('dom-event');
var EventEmitter = require('events').EventEmitter;

/**
 * When instantiating bigwheel you must pass in a setup function.
 *
 * In this function you may do any preparation that must be done for your
 * application such as creating a global Canvas element or something else.
 *
 * The setup function must either return a settings object for bigwheel or
 * this function must receive a callback which you will call with the settings
 * object. Furthermore you can pass back a promise from this settings function
 * which will receive the settings object.
 *
 * The following documents what can be passed in the settings object:
 * ```javascript
 * {
 * 	///// REQUIRED /////
 *
 * 	// routes defines all the routes for your website it can also define a 
 * 	// 404 section which will be opened if the route is incorrect
 *  routes: {
 *  	postHash: '#!', // this string is appended before the route. 
 *  	                // by default it's value is '#!'
 * 		'/': someSection,
 * 		'/someOther': someOtherSection,
 * 		'404': sectionFourOhFour
 *  },
 *  
 *  ///// OPTIONAL /////
 *  initSection: preSection, // this could be a section that is run always
 *  						 // before routes are even evaluated. This is
 *  						 // usefulf for site preloaders or landing pages
 *  						 // such as age verification (something the user
 *  						 // must see)
 * 
 * 	autoResize: true, // by default this value is true. When this value is
 * 					  // true a resize listener is added to the window
 * 					  // whenever the window changes size it's width and
 * 					  // height is passed to all instantiated sections
 * }
 * ```
 * 
 * @class bigwheel
 * @param  {Function} settingsFunc This settings function will be used to
 * initialize bigwheel.
 */
function bigwheel(settingsFunc) {

	if(!(this instanceof bigwheel))
		return new bigwheel(settingsFunc);

	this.settingsFunc = settingsFunc;
	EventEmitter.call(this);

}

bigwheel.prototype = Object.create(EventEmitter.prototype);

/**
 * init must be called to start the framework. This was done to allow for
 * a developer to have full control of when bigwheel starts doing it's thing.
 */
bigwheel.prototype.init = function() {

	var onSettingComplete = function(settings) {

		var s = this.s = settings;

		if(s === undefined)
			throw new Error('Your settings function must return a settings Object');

		if(s.routes === undefined)
			throw new Error('Your settings object must define routes');

		s.autoResize = s.autoResize === undefined ? true : s.autoResize;

		// setup the router
		this.router = settings.router || router(settings.routes);
		this.router.on('route', this.show.bind(this));

		// Re-dispatch routes
		this.router.on('route',this.emit.bind(this,'route'));
		this.router.on('sub_create',this.emit.bind(this,'sub_create'));
		this.router.on('sub_destroy',this.emit.bind(this,'sub_destroy'));

		// handle adding and removing sub routers to the global
		// object for easier retrieval
		this.subFrameworks = {};

		// setup the view manager
		this.vm = vm(this.s);

		// check if 
		if(s.autoResize && global.innerWidth !== undefined && global.innerHeight !== undefined) {

			on(global, 'resize', this.onResize.bind(this));

			this.onResize();
		}
		
		// handle if there is an init section this should be shown even before
		// the router resolves
		if(s.initSection)
			this.show({section: s.initSection.bind(undefined, this.router.init.bind(this.router))});
		else
			this.router.init();
	}.bind(this);


	var rVal = this.settingsFunc(onSettingComplete);

	// check if promises are used instead
	// it might be good to remove this since theres no
	// need for promises in this case
	if(rVal && rVal.then)
		rVal.then(onSettingComplete);
	// check if just an object was returned which has .routes
	else if(rVal && rVal.routes)
		onSettingComplete(rVal);

	return this;
};



bigwheel.prototype.sub = function(name, routes) {

	var subFrameworks = this.subFrameworks;
	var sub;
	var settings;

	// if there's a subframework with this same name just return it
	if(subFrameworks[ name ]) {

		sub = subFrameworks[ name ];
	// otherwise if we have routes then create a new one
	} else if(routes) {

		// if there is already a subframework with this name just return it
		settings = {
			routes: routes
		};

		settings.router = this.router.sub(routes);

		sub = new bigwheel(function() {
			return settings;
		});

		// if a name was passed save it for later reference
		if(name) {
			subFrameworks[ name ] = sub;

			// if a sub router gets destroyed we should check if its
			// for this sub framework and destroy it
			this.router.on('sub_destroy', function(info) {

				if(info.router === settings.router) {
					subFrameworks[ name ].destroy();
					delete subFrameworks[ name ];
				}				
			});
		}

		sub.init();
	}

	return sub;
};

/**
 * go can be called to go to another section.
 * 
 * @param  {String} to This is the route you want to go to.
 *
 * @example
 * ```javascript
 * framework.go('/landing');
 * ```
 */
bigwheel.prototype.go = function(to) {

	this.router.go(to);

	return this;
};

/**
 * Destroys bighweel
 */
bigwheel.prototype.destroy = function() {

	this.router.removeAllListeners('sub_destroy');
	this.router.removeAllListeners('sub_create');
	this.router.removeAllListeners('route');
	this.router.destroy();

};

/**
 * Resize can be called at any time. The values passed in for
 * width and height will be passed to the currently instantiated
 * sections.
 *
 * If `autoResize` was not passed in or it was true then resize
 * will automatically be called when the window of the browser
 * resizes.
 * 
 * @param  {Number} w width value you'd like to pass to the sections
 * @param  {Number} h height value you'd like to pass to the sections
 */
bigwheel.prototype.resize = function(w, h) {

	this.vm.resize(w, h);
};

bigwheel.prototype.show = function(info) {
	var section = info.section;
	var req = info.route;

	// this is the original router callback passed in
	if(this.onRouteCallBack)
		this.onRouteCallBack(section, req);


	// check if section is an array or function or object
	if(Array.isArray(section)) {

		var sections = [];

		for(var i = 0, len = section.length; i < len; i++) {

			if(typeof section[ i ] == 'object') {

				sections[ i ] = section[ i ];
			} else if(typeof section[ i ] == 'function') {

				sections[ i ] = new section[ i ]();
			}	
		}

		this.doShow(viewmediator.apply(undefined, sections), req);
	} else if(typeof section == 'object') {

		this.doShow(section, req);
	} else if(typeof section == 'function') {

		this.doShow(new section(), req);
	}

};

bigwheel.prototype.doShow = function(section, req) {

	this.vm.show(section, req);
};

bigwheel.prototype.onResize = function() {

	this.resize(global.innerWidth, global.innerHeight);
};

module.exports = bigwheel;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"bw-router":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-router/index.js","bw-viewmediator":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-viewmediator/index.js","bw-vm":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-vm/index.js","dom-event":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/dom-event/index.js","events":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-router/index.js":[function(require,module,exports){
(function (global){
var on = require('dom-event');
var off = on.off;
var routes = require('routes');
var EventEmitter = require('events').EventEmitter;
var noop = function() {};

function router(settings) {

	if( !( this instanceof router ) ) {

		return new router(settings);
	}

	var s = this.s = settings || {};

	s.postHash = s.postHash || '!';

	this.lastRoute = null;
	this.childRouter = null;
	this.childFullRoute = null;
	this.childBaseRoute = null;
	this.router = routes();

	EventEmitter.call(this);
}

var p = router.prototype = Object.create(EventEmitter.prototype);

p.init = function() {

	var s = this.s;
	var i;

	// figure out a start section
	if( s[ '/' ] === undefined ) {

		// find the first path which would be a section
		for(i in s) {

			if( i[ 0 ] == '/' ) {

				s.start = i;

				break;
			}
		}
	} else {

		s.start = '/';
	}


	// now setup routes
	for(i in s) {

		if( i[ 0 ] == '/' || i == '404') {

			this.router.addRoute(i, noop);
		}
	}

	this.onURL = this.onURL.bind(this);

	if( global.location ) {
		on(global, 'hashchange', this.onURL);
	}

	this.onURL(); // force a hash change to start things up
	
	return this;
};

p.sub = function(settings) {

	// remove all veriable parts from lastRoute
	var splitIdx1 = this.lastRoute.indexOf('*');
	var splitIdx2 = this.lastRoute.indexOf(':');
	var splitIdx;

	if(splitIdx1 === -1 && splitIdx2 === -1) {
		throw new Error('when creating a sub router the parent route should have a variable route using either : or *');
	} else {
		splitIdx1 = splitIdx1 !== -1 ? splitIdx1 : this.lastRoute.length;
		splitIdx2 = splitIdx2 !== -1 ? splitIdx2 : this.lastRoute.length;
		splitIdx = splitIdx1 < splitIdx2 ? splitIdx1 : splitIdx2;
	}

	this.childFullRoute = this.lastRoute;
	this.childBaseRoute = this.lastRoute.substring(0, splitIdx - 1);

	settings.postHash = this.s.postHash + this.childBaseRoute;

	this.childRouter = new router(settings);

	this.emit('sub_create', {
		route: this.childFullRoute,
		router: this.childRouter
	});

	return this.childRouter;
};

p.destroySub = function(route) {

	// this.childBaseRoute
	if(this.childRouter && route.indexOf(this.childBaseRoute) !== 0) {
		this.childRouter.destroy();

		this.emit('sub_destroy', {
			route: this.childFullRoute,
			router: this.childRouter
		});

		this.childFullRoute = null;
		this.childBaseRoute = null;
		this.childRouter = null;
	}
};

p.destroy = function() {

	if(global.location) {
		off(global, 'hashchange', this.onURL);	
	}
};

p.add = function(route, section) {

	var s = this.s;

	s[ route ] = section;

	return this;
};

p.go = function(routeStr) {

	var routeData;
	var section;
	var newURL;
	var doURLChange;

	if( routeStr.charAt(0) != '/' ) {
		routeStr = '/' + routeStr;
	}

	newURL = this.s.postHash + routeStr;
	routeData = this.getRouteData(routeStr) || this.getRouteData('404');
	section = this.getSection(routeData);
	doURLChange = this.useURL(section);

	// if this is not a section descriptor or it is a descriptor and we should updateURL
	if( global.location && doURLChange ) {
		if(global.location.hash.replace(/^#/, '') != newURL) {
			global.location.hash = newURL;
		} else if(section.duplicate || !section.useURL) {
			// Check if duplicate is set. The check is done here since, onhashchange event triggers 
			// only when url changes and therefore cannot check to allow duplicate/repeating route

			// Additionally check if useURL is set to false. If not, the route is not triggered by
			// url changes
			this.doRoute(routeData, section, routeStr);
		} 
	} else if( !global.location || !doURLChange ) {
		this.doRoute(routeData, section, routeStr);
	}
};

p.doRoute = function(routeData, section, path) {

	var s = this.s;

	// check if this is a redirect
	if( typeof section == 'string' ) {

		this.go(section);
	} else { 

		if(routeData.route !== this.lastResolvedRoute || section.duplicate) {

			this.lastResolvedRoute = routeData.route;

			// otherwise treat it as a regular section
			// if this is a object definition vs a section definition (regular section or array)
			this.emit('route', {
				section: section.section || section,
				route: routeData,
				path: path
			});
		}
	} 
};

p.getRouteData = function(routeStr) {

	var routeData = this.router.match(routeStr);

	if(routeData) {
		this.lastRoute = routeData.route;
		this.destroySub(routeData.route);
	}

	return routeData;
};

p.getSection = function(routeData) {

	if(routeData) {

		return this.s[ routeData.route ];
	} else {

		return null;
	}
};

p.useURL = function(section) {

	return section && 
		   ( section.section === undefined ||  // if this is not a section descriptor update url
		   ( section.section && section.useURL || section.useURL === undefined ) ); //is descriptor and has useURL or undefined
};

p.onURL = function() {

	var routeStr = '/';
	var routeData;
	var section;

	if( global.location && global.location.hash !== '' ) {

		// if we've already looked at this url then just get out of this function
		if(global.location.hash === this.resolved) {
			return;
		}

		this.resolved = global.location.hash;
		routeStr = global.location.hash.substr(1 + this.s.postHash.length);
	}

	routeData = this.getRouteData(routeStr) || this.getRouteData('404');
	section = this.getSection(routeData);

	// see if we can deep link into this section (either normal or 404 section)
	if( this.useURL(section) ) {
		this.doRoute(routeData, section, routeStr);
	// else check if there's a 404 if so then go there
	} else if( this.s['404'] ){

		routeData = this.getRouteData('404');
		section = this.getSection(routeData);
		this.doRoute(routeData, section, routeStr);
	}
};

module.exports = router;
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"dom-event":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-router/node_modules/dom-event/index.js","events":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js","routes":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-router/node_modules/routes/dist/routes.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-router/node_modules/dom-event/index.js":[function(require,module,exports){
module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {
  !element.addEventListener && (event = 'on' + event);
  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
  return callback;
}

function off (element, event, callback, capture) {
  !element.removeEventListener && (event = 'on' + event);
  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
  return callback;
}

},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-router/node_modules/routes/dist/routes.js":[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.routes=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var localRoutes = [];


/**
 * Convert path to route object
 *
 * A string or RegExp should be passed,
 * will return { re, src, keys} obj
 *
 * @param  {String / RegExp} path
 * @return {Object}
 */

var Route = function(path){
  //using 'new' is optional

  var src, re, keys = [];

  if(path instanceof RegExp){
    re = path;
    src = path.toString();
  }else{
    re = pathToRegExp(path, keys);
    src = path;
  }

  return {
  	 re: re,
  	 src: path.toString(),
  	 keys: keys
  }
};

/**
 * Normalize the given path string,
 * returning a regular expression.
 *
 * An empty array should be passed,
 * which will contain the placeholder
 * key names. For example "/user/:id" will
 * then contain ["id"].
 *
 * @param  {String} path
 * @param  {Array} keys
 * @return {RegExp}
 */
var pathToRegExp = function (path, keys) {
	path = path
		.concat('/?')
		.replace(/\/\(/g, '(?:/')
		.replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?|\*/g, function(_, slash, format, key, capture, optional){
			if (_ === "*"){
				keys.push(undefined);
				return _;
			}

			keys.push(key);
			slash = slash || '';
			return ''
				+ (optional ? '' : slash)
				+ '(?:'
				+ (optional ? slash : '')
				+ (format || '') + (capture || '([^/]+?)') + ')'
				+ (optional || '');
		})
		.replace(/([\/.])/g, '\\$1')
		.replace(/\*/g, '(.*)');
	return new RegExp('^' + path + '$', 'i');
};

/**
 * Attempt to match the given request to
 * one of the routes. When successful
 * a  {fn, params, splats} obj is returned
 *
 * @param  {Array} routes
 * @param  {String} uri
 * @return {Object}
 */
var match = function (routes, uri, startAt) {
	var captures, i = startAt || 0;

	for (var len = routes.length; i < len; ++i) {
		var route = routes[i],
		    re = route.re,
		    keys = route.keys,
		    splats = [],
		    params = {};

		if (captures = uri.match(re)) {
			for (var j = 1, len = captures.length; j < len; ++j) {
				var key = keys[j-1],
					val = typeof captures[j] === 'string'
						? unescape(captures[j])
						: captures[j];
				if (key) {
					params[key] = val;
				} else {
					splats.push(val);
				}
			}
			return {
				params: params,
				splats: splats,
				route: route.src,
				next: i + 1
			};
		}
	}
};

/**
 * Default "normal" router constructor.
 * accepts path, fn tuples via addRoute
 * returns {fn, params, splats, route}
 *  via match
 *
 * @return {Object}
 */

var Router = function(){
  //using 'new' is optional
  return {
    routes: [],
    routeMap : {},
    addRoute: function(path, fn){
      if (!path) throw new Error(' route requires a path');
      if (!fn) throw new Error(' route ' + path.toString() + ' requires a callback');

      var route = Route(path);
      route.fn = fn;

      this.routes.push(route);
      this.routeMap[path] = fn;
    },

    match: function(pathname, startAt){
      var route = match(this.routes, pathname, startAt);
      if(route){
        route.fn = this.routeMap[route.route];
        route.next = this.match.bind(this, pathname, route.next)
      }
      return route;
    }
  }
};

Router.Route = Route
Router.pathToRegExp = pathToRegExp
Router.match = match
// back compat
Router.Router = Router

module.exports = Router

},{}]},{},[1])
(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-viewmediator/index.js":[function(require,module,exports){
function mediator() {

  if(!( this instanceof mediator )) {

    var rVal = Object.create(mediator.prototype);
    mediator.apply(rVal, arguments);
    return rVal;
  }

  this.items = Array.prototype.slice.call(arguments);
}

mediator.prototype = {

  init: function(data, done) {
    this.callAll('init', data, done);
  },

  resize: function(w, h) {

    for(var i = 0, len = this.items.length; i < len; i++) {

      if(typeof this.items[ i ].resize === 'function') {
        this.items[ i ].resize(w, h);
      }
    }
  },

  animateIn: function(data, done) {
    this.callAll('animateIn', data, done);    
  },

  animateOut: function(data, done) {
    this.callAll('animateOut', data, done);
  },

  destroy: function(data, done) {
    this.callAll('destroy', data, done);
  },

  callAll: function(func, data, done) {

    var numCalled = 0;
    var numToCall = 0;
    var i;
    var len;

    this.items.forEach(function(section) {

      if(typeof section[ func ] === 'function') {
        numToCall++;
      }
    });

    // if there are no functions to call simply just return
    if(numToCall === 0) {

      done();
    } else {

      this.items.forEach(function(section) {

        if(typeof section[ func ] === 'function') {
          section[ func ].call(section, data, onSectionDone);
        }
      });
    }

    function onSectionDone() {

      if(++numCalled === numToCall) {
        done();
      }
    }
  }
};

module.exports = mediator;
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/bw-vm/index.js":[function(require,module,exports){
function ViewManager( settings ) {

  if( !( this instanceof ViewManager ) ) {
    return new ViewManager( settings );
  }

  var s = this.s = settings || {};

  s.overlap = s.overlap === undefined ? true : s.overlap;
  s.width = s.width || 980;
  s.height = s.height || 570;

  this.cContent = null;
  this.nContent = null;
}

var p = ViewManager.prototype = {

  show: function( content, data, onComplete ) {

    // check if data was passed in
    if( onComplete === undefined &&
      typeof data == 'function' ) {

      onComplete = data;
      data = null;
    }

    this.data = data;

    if( content != this.nContent && content != this.cContent ) {

      if( this.nContent && this.nContent.destroy )
        this.nContent.destroy(this.data, function() { });

      this.nContent = content;

      if( content.init ) {

        content.init( this.data, this.swap.bind( this, this.nContent, onComplete ) ); 
      } else {

        this.swap( this.nContent, onComplete );
      }
    }
  },

  clear: function( onComplete ) {

    if( this.nContent && this.nContent.destroy ) {
      this.nContent.destroy( this.data, function() { } );
    }

    if( this.cContent ) {

      var onOldOut = function( oldContent ) {

        if( oldContent.destroy ) {
          oldContent.destroy( this.data , function() { } );
        }

        if( onComplete ) {
          onComplete( oldContent );
        }
      }.bind( this, this.cContent );

      // now take out countent
      if( this.cContent.animateOut ) {
        this.cContent.animateOut( this.data , onOldOut );
      } else {
        onOldOut();
      }
    }
  },

  resize: function( width, height ) {

    var s = this.s;

    s.width = width;
    s.height = height;

    if( this.cContent && this.cContent.resize )
      this.cContent.resize( width, height );
  },

  swap: function( newContent, onComplete ) {

    if( newContent == this.nContent ) {

      var s = this.s;
      var oldContent = this.cContent;
      var onOldOut;

      var onNewIn = function() {

        if( s.onEndAniIn ) {
          s.onEndAniIn( newContent, oldContent );
        }

        if( onComplete ) {
          onComplete( newContent, oldContent );
        }
      };

      var bringInNewContent = function() {

        if( s.onStartAniIn ) {
          s.onStartAniIn( newContent, this.cContent );
        }

        this.cContent = newContent;
        this.nContent = null;

        if( newContent.animateIn ) {
          newContent.animateIn( this.data, onNewIn );  
        } else {
          onNewIn();
        }
      }.bind( this );

      var takeOutOldContent = function() {

        if( s.onStartAniOut ) {
          s.onStartAniOut( newContent, oldContent );
        }

        // if there's an animateOut function execute it on oldContent
        if( oldContent.animateOut ) {
          oldContent.animateOut( this.data, onOldOut );
        } else {
          onOldOut();
        }
      }.bind( this );

      var destroyOldContent = function() {

        if( s.onEndAniOut ) {
          s.onEndAniOut( newContent, oldContent );
        }

        if( oldContent.destroy ) {
          oldContent.destroy( this.data, function() { } );
        }
      }.bind( this );


      // resize the newContent if it has a resize method
      if( newContent.resize ) {
        newContent.resize( s.width, s.height );
      }

      // check if there's content on screen already
      if( this.cContent ) {

        if( s.overlap ) {

          onOldOut = destroyOldContent;
        } else {

          onOldOut = function() {

            destroyOldContent();
            bringInNewContent();
          }.bind(this);
        }

        // call the callback to notify that we've started animating out
        takeOutOldContent();

        if( s.overlap ) {

          bringInNewContent();
        }
      // else we don't have current content just bring in the new
      } else {

        bringInNewContent();
      }
    }
  }
};

Object.defineProperty(p, 'overlap', {
  get: function() {
    return this.s.overlap;
  },

  set: function(value) {
    this.s.overlap = value;
  }
});

module.exports = ViewManager;
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/bigwheel/node_modules/dom-event/index.js":[function(require,module,exports){
module.exports = on;
module.exports.on = on;
module.exports.off = off;

function on (element, event, callback, capture) {

  if( element instanceof NodeList ) {

    for( var i = 0, len = element.length; i < len; i++ ) {

      oneOn(element[ i ], event, callback, capture);
    }
  } else {

    oneOn(element, event, callback, capture);  
  }

  return callback;
}

function off (element, event, callback, capture) {

  if( element instanceof NodeList ) {

    for( var i = 0, len = element.length; i < len; i++ ) {

      oneOff(element[ i ], event, callback, capture);
    }
  } else {

    oneOff( element, event, callback, capture );
  }
  
  return callback;
}

function oneOn (element, event, callback, capture) {

  (element.addEventListener || element.attachEvent).call(element, event, callback, capture);
}

function oneOff (element, event, callback, capture) {

  (element.removeEventListener || element.detachEvent).call(element, event, callback, capture);
}
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/detect-dom-ready/index.js":[function(require,module,exports){
/*
 * detect-dom-ready
 * http://github.amexpub.com/modules/detect-dom-ready
 *
 * Copyright (c) 2013 AmexPub. All rights reserved.
 */

module.exports = require('./lib/detect-dom-ready');

},{"./lib/detect-dom-ready":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/detect-dom-ready/lib/detect-dom-ready.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/detect-dom-ready/lib/detect-dom-ready.js":[function(require,module,exports){
/*
 * detect-dom-ready
 * http://github.amexpub.com/modules
 *
 * Copyright (c) 2013 Amex Pub. All rights reserved.
 */

'use strict';

module.exports = function(callback){
    // if ( this.readyBound ) {return;}
    // this.readyBound = true;

    if(document.addEventListener){
        document.addEventListener( "DOMContentLoaded", function(){
            //remove listener
            callback();
            return;
        }, false );
    }
    else if(document.attachEvent){
        document.attachEvent("onreadystatechange", function(){
            if ( document.readyState === "complete" ) {
                //remove listener
                callback();
                return;
            }
        });

        if ( document.documentElement.doScroll && window === window.top ){
            try{
                // If IE is used, use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                document.documentElement.doScroll("left");

            }
            catch( error ) {
                callback();
                return;
            }
            // and execute any waiting functions
            callback();
            return;
        }
    }
};
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/domify/index.js":[function(require,module,exports){

/**
 * Expose `parse`.
 */

module.exports = parse;

/**
 * Tests for browser support.
 */

var innerHTMLBug = false;
var bugTestDiv;
if (typeof document !== 'undefined') {
  bugTestDiv = document.createElement('div');
  // Setup
  bugTestDiv.innerHTML = '  <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
  // Make sure that link elements get serialized correctly by innerHTML
  // This requires a wrapper element in IE
  innerHTMLBug = !bugTestDiv.getElementsByTagName('link').length;
  bugTestDiv = undefined;
}

/**
 * Wrap map from jquery.
 */

var map = {
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  // for script/link/style tags to work in IE6-8, you have to wrap
  // in a div with a non-whitespace character in front, ha!
  _default: innerHTMLBug ? [1, 'X<div>', '</div>'] : [0, '', '']
};

map.td =
map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option =
map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead =
map.tbody =
map.colgroup =
map.caption =
map.tfoot = [1, '<table>', '</table>'];

map.polyline =
map.ellipse =
map.polygon =
map.circle =
map.text =
map.line =
map.path =
map.rect =
map.g = [1, '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">','</svg>'];

/**
 * Parse `html` and return a DOM Node instance, which could be a TextNode,
 * HTML DOM Node of some kind (<div> for example), or a DocumentFragment
 * instance, depending on the contents of the `html` string.
 *
 * @param {String} html - HTML string to "domify"
 * @param {Document} doc - The `document` instance to create the Node for
 * @return {DOMNode} the TextNode, DOM Node, or DocumentFragment instance
 * @api private
 */

function parse(html, doc) {
  if ('string' != typeof html) throw new TypeError('String expected');

  // default to the global `document` object
  if (!doc) doc = document;

  // tag name
  var m = /<([\w:]+)/.exec(html);
  if (!m) return doc.createTextNode(html);

  html = html.replace(/^\s+|\s+$/g, ''); // Remove leading/trailing whitespace

  var tag = m[1];

  // body support
  if (tag == 'body') {
    var el = doc.createElement('html');
    el.innerHTML = html;
    return el.removeChild(el.lastChild);
  }

  // wrap map
  var wrap = map[tag] || map._default;
  var depth = wrap[0];
  var prefix = wrap[1];
  var suffix = wrap[2];
  var el = doc.createElement('div');
  el.innerHTML = prefix + html + suffix;
  while (depth--) el = el.lastChild;

  // one element
  if (el.firstChild == el.lastChild) {
    return el.removeChild(el.firstChild);
  }

  // several elements
  var fragment = doc.createDocumentFragment();
  while (el.firstChild) {
    fragment.appendChild(el.removeChild(el.firstChild));
  }

  return fragment;
}

},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/grunt-browserify/node_modules/browserify/lib/_empty.js":[function(require,module,exports){

},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/grunt-browserify/node_modules/browserify/node_modules/events/events.js":[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/grunt-browserify/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars.js":[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var Handlebars = require("./handlebars.runtime")["default"];

// Compiler imports
var AST = require("./handlebars/compiler/ast")["default"];
var Parser = require("./handlebars/compiler/base").parser;
var parse = require("./handlebars/compiler/base").parse;
var Compiler = require("./handlebars/compiler/compiler").Compiler;
var compile = require("./handlebars/compiler/compiler").compile;
var precompile = require("./handlebars/compiler/compiler").precompile;
var JavaScriptCompiler = require("./handlebars/compiler/javascript-compiler")["default"];

var _create = Handlebars.create;
var create = function() {
  var hb = _create();

  hb.compile = function(input, options) {
    return compile(input, options, hb);
  };
  hb.precompile = function (input, options) {
    return precompile(input, options, hb);
  };

  hb.AST = AST;
  hb.Compiler = Compiler;
  hb.JavaScriptCompiler = JavaScriptCompiler;
  hb.Parser = Parser;
  hb.parse = parse;

  return hb;
};

Handlebars = create();
Handlebars.create = create;

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
},{"./handlebars.runtime":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars.runtime.js","./handlebars/compiler/ast":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js","./handlebars/compiler/base":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/base.js","./handlebars/compiler/compiler":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js","./handlebars/compiler/javascript-compiler":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars.runtime.js":[function(require,module,exports){
"use strict";
/*globals Handlebars: true */
var base = require("./handlebars/base");

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
var SafeString = require("./handlebars/safe-string")["default"];
var Exception = require("./handlebars/exception")["default"];
var Utils = require("./handlebars/utils");
var runtime = require("./handlebars/runtime");

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
var create = function() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = SafeString;
  hb.Exception = Exception;
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function(spec) {
    return runtime.template(spec, hb);
  };

  return hb;
};

var Handlebars = create();
Handlebars.create = create;

Handlebars['default'] = Handlebars;

exports["default"] = Handlebars;
},{"./handlebars/base":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/base.js","./handlebars/exception":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js","./handlebars/runtime":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/runtime.js","./handlebars/safe-string":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/safe-string.js","./handlebars/utils":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/base.js":[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];

var VERSION = "2.0.0";
exports.VERSION = VERSION;var COMPILER_REVISION = 6;
exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1'
};
exports.REVISION_CHANGES = REVISION_CHANGES;
var isArray = Utils.isArray,
    isFunction = Utils.isFunction,
    toString = Utils.toString,
    objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials) {
  this.helpers = helpers || {};
  this.partials = partials || {};

  registerDefaultHelpers(this);
}

exports.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: logger,
  log: log,

  registerHelper: function(name, fn) {
    if (toString.call(name) === objectType) {
      if (fn) { throw new Exception('Arg not supported with multiple helpers'); }
      Utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function(name) {
    delete this.helpers[name];
  },

  registerPartial: function(name, partial) {
    if (toString.call(name) === objectType) {
      Utils.extend(this.partials,  name);
    } else {
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function(name) {
    delete this.partials[name];
  }
};

function registerDefaultHelpers(instance) {
  instance.registerHelper('helperMissing', function(/* [args, ]options */) {
    if(arguments.length === 1) {
      // A missing field in a {{foo}} constuct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new Exception("Missing helper: '" + arguments[arguments.length-1].name + "'");
    }
  });

  instance.registerHelper('blockHelperMissing', function(context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if(context === true) {
      return fn(this);
    } else if(context === false || context == null) {
      return inverse(this);
    } else if (isArray(context)) {
      if(context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
        options = {data: data};
      }

      return fn(context, options);
    }
  });

  instance.registerHelper('each', function(context, options) {
    if (!options) {
      throw new Exception('Must pass iterator to #each');
    }

    var fn = options.fn, inverse = options.inverse;
    var i = 0, ret = "", data;

    var contextPath;
    if (options.data && options.ids) {
      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = createFrame(options.data);
    }

    if(context && typeof context === 'object') {
      if (isArray(context)) {
        for(var j = context.length; i<j; i++) {
          if (data) {
            data.index = i;
            data.first = (i === 0);
            data.last  = (i === (context.length-1));

            if (contextPath) {
              data.contextPath = contextPath + i;
            }
          }
          ret = ret + fn(context[i], { data: data });
        }
      } else {
        for(var key in context) {
          if(context.hasOwnProperty(key)) {
            if(data) {
              data.key = key;
              data.index = i;
              data.first = (i === 0);

              if (contextPath) {
                data.contextPath = contextPath + key;
              }
            }
            ret = ret + fn(context[key], {data: data});
            i++;
          }
        }
      }
    }

    if(i === 0){
      ret = inverse(this);
    }

    return ret;
  });

  instance.registerHelper('if', function(conditional, options) {
    if (isFunction(conditional)) { conditional = conditional.call(this); }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function(conditional, options) {
    return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
  });

  instance.registerHelper('with', function(context, options) {
    if (isFunction(context)) { context = context.call(this); }

    var fn = options.fn;

    if (!Utils.isEmpty(context)) {
      if (options.data && options.ids) {
        var data = createFrame(options.data);
        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
        options = {data:data};
      }

      return fn(context, options);
    } else {
      return options.inverse(this);
    }
  });

  instance.registerHelper('log', function(message, options) {
    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
    instance.log(level, message);
  });

  instance.registerHelper('lookup', function(obj, field) {
    return obj && obj[field];
  });
}

var logger = {
  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

  // State enum
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  level: 3,

  // can be overridden in the host environment
  log: function(level, message) {
    if (logger.level <= level) {
      var method = logger.methodMap[level];
      if (typeof console !== 'undefined' && console[method]) {
        console[method].call(console, message);
      }
    }
  }
};
exports.logger = logger;
var log = logger.log;
exports.log = log;
var createFrame = function(object) {
  var frame = Utils.extend({}, object);
  frame._parent = object;
  return frame;
};
exports.createFrame = createFrame;
},{"./exception":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js","./utils":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js":[function(require,module,exports){
"use strict";
var Exception = require("../exception")["default"];

function LocationInfo(locInfo) {
  locInfo = locInfo || {};
  this.firstLine   = locInfo.first_line;
  this.firstColumn = locInfo.first_column;
  this.lastColumn  = locInfo.last_column;
  this.lastLine    = locInfo.last_line;
}

var AST = {
  ProgramNode: function(statements, strip, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "program";
    this.statements = statements;
    this.strip = strip;
  },

  MustacheNode: function(rawParams, hash, open, strip, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "mustache";
    this.strip = strip;

    // Open may be a string parsed from the parser or a passed boolean flag
    if (open != null && open.charAt) {
      // Must use charAt to support IE pre-10
      var escapeFlag = open.charAt(3) || open.charAt(2);
      this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
    } else {
      this.escaped = !!open;
    }

    if (rawParams instanceof AST.SexprNode) {
      this.sexpr = rawParams;
    } else {
      // Support old AST API
      this.sexpr = new AST.SexprNode(rawParams, hash);
    }

    // Support old AST API that stored this info in MustacheNode
    this.id = this.sexpr.id;
    this.params = this.sexpr.params;
    this.hash = this.sexpr.hash;
    this.eligibleHelper = this.sexpr.eligibleHelper;
    this.isHelper = this.sexpr.isHelper;
  },

  SexprNode: function(rawParams, hash, locInfo) {
    LocationInfo.call(this, locInfo);

    this.type = "sexpr";
    this.hash = hash;

    var id = this.id = rawParams[0];
    var params = this.params = rawParams.slice(1);

    // a mustache is definitely a helper if:
    // * it is an eligible helper, and
    // * it has at least one parameter or hash segment
    this.isHelper = !!(params.length || hash);

    // a mustache is an eligible helper if:
    // * its id is simple (a single part, not `this` or `..`)
    this.eligibleHelper = this.isHelper || id.isSimple;

    // if a mustache is an eligible helper but not a definite
    // helper, it is ambiguous, and will be resolved in a later
    // pass or at runtime.
  },

  PartialNode: function(partialName, context, hash, strip, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type         = "partial";
    this.partialName  = partialName;
    this.context      = context;
    this.hash = hash;
    this.strip = strip;

    this.strip.inlineStandalone = true;
  },

  BlockNode: function(mustache, program, inverse, strip, locInfo) {
    LocationInfo.call(this, locInfo);

    this.type = 'block';
    this.mustache = mustache;
    this.program  = program;
    this.inverse  = inverse;
    this.strip = strip;

    if (inverse && !program) {
      this.isInverse = true;
    }
  },

  RawBlockNode: function(mustache, content, close, locInfo) {
    LocationInfo.call(this, locInfo);

    if (mustache.sexpr.id.original !== close) {
      throw new Exception(mustache.sexpr.id.original + " doesn't match " + close, this);
    }

    content = new AST.ContentNode(content, locInfo);

    this.type = 'block';
    this.mustache = mustache;
    this.program = new AST.ProgramNode([content], {}, locInfo);
  },

  ContentNode: function(string, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "content";
    this.original = this.string = string;
  },

  HashNode: function(pairs, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "hash";
    this.pairs = pairs;
  },

  IdNode: function(parts, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "ID";

    var original = "",
        dig = [],
        depth = 0,
        depthString = '';

    for(var i=0,l=parts.length; i<l; i++) {
      var part = parts[i].part;
      original += (parts[i].separator || '') + part;

      if (part === ".." || part === "." || part === "this") {
        if (dig.length > 0) {
          throw new Exception("Invalid path: " + original, this);
        } else if (part === "..") {
          depth++;
          depthString += '../';
        } else {
          this.isScoped = true;
        }
      } else {
        dig.push(part);
      }
    }

    this.original = original;
    this.parts    = dig;
    this.string   = dig.join('.');
    this.depth    = depth;
    this.idName   = depthString + this.string;

    // an ID is simple if it only has one part, and that part is not
    // `..` or `this`.
    this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

    this.stringModeValue = this.string;
  },

  PartialNameNode: function(name, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "PARTIAL_NAME";
    this.name = name.original;
  },

  DataNode: function(id, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "DATA";
    this.id = id;
    this.stringModeValue = id.stringModeValue;
    this.idName = '@' + id.stringModeValue;
  },

  StringNode: function(string, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "STRING";
    this.original =
      this.string =
      this.stringModeValue = string;
  },

  NumberNode: function(number, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "NUMBER";
    this.original =
      this.number = number;
    this.stringModeValue = Number(number);
  },

  BooleanNode: function(bool, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "BOOLEAN";
    this.bool = bool;
    this.stringModeValue = bool === "true";
  },

  CommentNode: function(comment, locInfo) {
    LocationInfo.call(this, locInfo);
    this.type = "comment";
    this.comment = comment;

    this.strip = {
      inlineStandalone: true
    };
  }
};


// Must be exported as an object rather than the root of the module as the jison lexer
// most modify the object to operate properly.
exports["default"] = AST;
},{"../exception":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/base.js":[function(require,module,exports){
"use strict";
var parser = require("./parser")["default"];
var AST = require("./ast")["default"];
var Helpers = require("./helpers");
var extend = require("../utils").extend;

exports.parser = parser;

var yy = {};
extend(yy, Helpers, AST);

function parse(input) {
  // Just return if an already-compile AST was passed in.
  if (input.constructor === AST.ProgramNode) { return input; }

  parser.yy = yy;

  return parser.parse(input);
}

exports.parse = parse;
},{"../utils":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/utils.js","./ast":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/ast.js","./helpers":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js","./parser":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/compiler.js":[function(require,module,exports){
"use strict";
var Exception = require("../exception")["default"];
var isArray = require("../utils").isArray;

var slice = [].slice;

function Compiler() {}

exports.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
// function in a context. This is necessary for mustache compatibility, which
// requires that context functions in blocks are evaluated by blockHelperMissing,
// and then proceed as if the resulting value was provided to blockHelperMissing.

Compiler.prototype = {
  compiler: Compiler,

  equals: function(other) {
    var len = this.opcodes.length;
    if (other.opcodes.length !== len) {
      return false;
    }

    for (var i = 0; i < len; i++) {
      var opcode = this.opcodes[i],
          otherOpcode = other.opcodes[i];
      if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
        return false;
      }
    }

    // We know that length is the same between the two arrays because they are directly tied
    // to the opcode behavior above.
    len = this.children.length;
    for (i = 0; i < len; i++) {
      if (!this.children[i].equals(other.children[i])) {
        return false;
      }
    }

    return true;
  },

  guid: 0,

  compile: function(program, options) {
    this.opcodes = [];
    this.children = [];
    this.depths = {list: []};
    this.options = options;
    this.stringParams = options.stringParams;
    this.trackIds = options.trackIds;

    // These changes will propagate to the other compiler components
    var knownHelpers = this.options.knownHelpers;
    this.options.knownHelpers = {
      'helperMissing': true,
      'blockHelperMissing': true,
      'each': true,
      'if': true,
      'unless': true,
      'with': true,
      'log': true,
      'lookup': true
    };
    if (knownHelpers) {
      for (var name in knownHelpers) {
        this.options.knownHelpers[name] = knownHelpers[name];
      }
    }

    return this.accept(program);
  },

  accept: function(node) {
    return this[node.type](node);
  },

  program: function(program) {
    var statements = program.statements;

    for(var i=0, l=statements.length; i<l; i++) {
      this.accept(statements[i]);
    }
    this.isSimple = l === 1;

    this.depths.list = this.depths.list.sort(function(a, b) {
      return a - b;
    });

    return this;
  },

  compileProgram: function(program) {
    var result = new this.compiler().compile(program, this.options);
    var guid = this.guid++, depth;

    this.usePartial = this.usePartial || result.usePartial;

    this.children[guid] = result;

    for(var i=0, l=result.depths.list.length; i<l; i++) {
      depth = result.depths.list[i];

      if(depth < 2) { continue; }
      else { this.addDepth(depth - 1); }
    }

    return guid;
  },

  block: function(block) {
    var mustache = block.mustache,
        program = block.program,
        inverse = block.inverse;

    if (program) {
      program = this.compileProgram(program);
    }

    if (inverse) {
      inverse = this.compileProgram(inverse);
    }

    var sexpr = mustache.sexpr;
    var type = this.classifySexpr(sexpr);

    if (type === "helper") {
      this.helperSexpr(sexpr, program, inverse);
    } else if (type === "simple") {
      this.simpleSexpr(sexpr);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('blockValue', sexpr.id.original);
    } else {
      this.ambiguousSexpr(sexpr, program, inverse);

      // now that the simple mustache is resolved, we need to
      // evaluate it by executing `blockHelperMissing`
      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);
      this.opcode('emptyHash');
      this.opcode('ambiguousBlockValue');
    }

    this.opcode('append');
  },

  hash: function(hash) {
    var pairs = hash.pairs, i, l;

    this.opcode('pushHash');

    for(i=0, l=pairs.length; i<l; i++) {
      this.pushParam(pairs[i][1]);
    }
    while(i--) {
      this.opcode('assignToHash', pairs[i][0]);
    }
    this.opcode('popHash');
  },

  partial: function(partial) {
    var partialName = partial.partialName;
    this.usePartial = true;

    if (partial.hash) {
      this.accept(partial.hash);
    } else {
      this.opcode('push', 'undefined');
    }

    if (partial.context) {
      this.accept(partial.context);
    } else {
      this.opcode('getContext', 0);
      this.opcode('pushContext');
    }

    this.opcode('invokePartial', partialName.name, partial.indent || '');
    this.opcode('append');
  },

  content: function(content) {
    if (content.string) {
      this.opcode('appendContent', content.string);
    }
  },

  mustache: function(mustache) {
    this.sexpr(mustache.sexpr);

    if(mustache.escaped && !this.options.noEscape) {
      this.opcode('appendEscaped');
    } else {
      this.opcode('append');
    }
  },

  ambiguousSexpr: function(sexpr, program, inverse) {
    var id = sexpr.id,
        name = id.parts[0],
        isBlock = program != null || inverse != null;

    this.opcode('getContext', id.depth);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    this.ID(id);

    this.opcode('invokeAmbiguous', name, isBlock);
  },

  simpleSexpr: function(sexpr) {
    var id = sexpr.id;

    if (id.type === 'DATA') {
      this.DATA(id);
    } else if (id.parts.length) {
      this.ID(id);
    } else {
      // Simplified ID for `this`
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);
      this.opcode('pushContext');
    }

    this.opcode('resolvePossibleLambda');
  },

  helperSexpr: function(sexpr, program, inverse) {
    var params = this.setupFullMustacheParams(sexpr, program, inverse),
        id = sexpr.id,
        name = id.parts[0];

    if (this.options.knownHelpers[name]) {
      this.opcode('invokeKnownHelper', params.length, name);
    } else if (this.options.knownHelpersOnly) {
      throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
    } else {
      id.falsy = true;

      this.ID(id);
      this.opcode('invokeHelper', params.length, id.original, id.isSimple);
    }
  },

  sexpr: function(sexpr) {
    var type = this.classifySexpr(sexpr);

    if (type === "simple") {
      this.simpleSexpr(sexpr);
    } else if (type === "helper") {
      this.helperSexpr(sexpr);
    } else {
      this.ambiguousSexpr(sexpr);
    }
  },

  ID: function(id) {
    this.addDepth(id.depth);
    this.opcode('getContext', id.depth);

    var name = id.parts[0];
    if (!name) {
      // Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
      this.opcode('pushContext');
    } else {
      this.opcode('lookupOnContext', id.parts, id.falsy, id.isScoped);
    }
  },

  DATA: function(data) {
    this.options.data = true;
    this.opcode('lookupData', data.id.depth, data.id.parts);
  },

  STRING: function(string) {
    this.opcode('pushString', string.string);
  },

  NUMBER: function(number) {
    this.opcode('pushLiteral', number.number);
  },

  BOOLEAN: function(bool) {
    this.opcode('pushLiteral', bool.bool);
  },

  comment: function() {},

  // HELPERS
  opcode: function(name) {
    this.opcodes.push({ opcode: name, args: slice.call(arguments, 1) });
  },

  addDepth: function(depth) {
    if(depth === 0) { return; }

    if(!this.depths[depth]) {
      this.depths[depth] = true;
      this.depths.list.push(depth);
    }
  },

  classifySexpr: function(sexpr) {
    var isHelper   = sexpr.isHelper;
    var isEligible = sexpr.eligibleHelper;
    var options    = this.options;

    // if ambiguous, we can possibly resolve the ambiguity now
    // An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
    if (isEligible && !isHelper) {
      var name = sexpr.id.parts[0];

      if (options.knownHelpers[name]) {
        isHelper = true;
      } else if (options.knownHelpersOnly) {
        isEligible = false;
      }
    }

    if (isHelper) { return "helper"; }
    else if (isEligible) { return "ambiguous"; }
    else { return "simple"; }
  },

  pushParams: function(params) {
    for(var i=0, l=params.length; i<l; i++) {
      this.pushParam(params[i]);
    }
  },

  pushParam: function(val) {
    if (this.stringParams) {
      if(val.depth) {
        this.addDepth(val.depth);
      }
      this.opcode('getContext', val.depth || 0);
      this.opcode('pushStringParam', val.stringModeValue, val.type);

      if (val.type === 'sexpr') {
        // Subexpressions get evaluated and passed in
        // in string params mode.
        this.sexpr(val);
      }
    } else {
      if (this.trackIds) {
        this.opcode('pushId', val.type, val.idName || val.stringModeValue);
      }
      this.accept(val);
    }
  },

  setupFullMustacheParams: function(sexpr, program, inverse) {
    var params = sexpr.params;
    this.pushParams(params);

    this.opcode('pushProgram', program);
    this.opcode('pushProgram', inverse);

    if (sexpr.hash) {
      this.hash(sexpr.hash);
    } else {
      this.opcode('emptyHash');
    }

    return params;
  }
};

function precompile(input, options, env) {
  if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
    throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
  }

  options = options || {};
  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var ast = env.parse(input);
  var environment = new env.Compiler().compile(ast, options);
  return new env.JavaScriptCompiler().compile(environment, options);
}

exports.precompile = precompile;function compile(input, options, env) {
  if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
    throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
  }

  options = options || {};

  if (!('data' in options)) {
    options.data = true;
  }
  if (options.compat) {
    options.useDepths = true;
  }

  var compiled;

  function compileInput() {
    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
    return env.template(templateSpec);
  }

  // Template is only compiled on first use and cached after that point.
  var ret = function(context, options) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled.call(this, context, options);
  };
  ret._setup = function(options) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._setup(options);
  };
  ret._child = function(i, data, depths) {
    if (!compiled) {
      compiled = compileInput();
    }
    return compiled._child(i, data, depths);
  };
  return ret;
}

exports.compile = compile;function argEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (isArray(a) && isArray(b) && a.length === b.length) {
    for (var i = 0; i < a.length; i++) {
      if (!argEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
}
},{"../exception":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js","../utils":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/helpers.js":[function(require,module,exports){
"use strict";
var Exception = require("../exception")["default"];

function stripFlags(open, close) {
  return {
    left: open.charAt(2) === '~',
    right: close.charAt(close.length-3) === '~'
  };
}

exports.stripFlags = stripFlags;
function prepareBlock(mustache, program, inverseAndProgram, close, inverted, locInfo) {
  /*jshint -W040 */
  if (mustache.sexpr.id.original !== close.path.original) {
    throw new Exception(mustache.sexpr.id.original + ' doesn\'t match ' + close.path.original, mustache);
  }

  var inverse = inverseAndProgram && inverseAndProgram.program;

  var strip = {
    left: mustache.strip.left,
    right: close.strip.right,

    // Determine the standalone candiacy. Basically flag our content as being possibly standalone
    // so our parent can determine if we actually are standalone
    openStandalone: isNextWhitespace(program.statements),
    closeStandalone: isPrevWhitespace((inverse || program).statements)
  };

  if (mustache.strip.right) {
    omitRight(program.statements, null, true);
  }

  if (inverse) {
    var inverseStrip = inverseAndProgram.strip;

    if (inverseStrip.left) {
      omitLeft(program.statements, null, true);
    }
    if (inverseStrip.right) {
      omitRight(inverse.statements, null, true);
    }
    if (close.strip.left) {
      omitLeft(inverse.statements, null, true);
    }

    // Find standalone else statments
    if (isPrevWhitespace(program.statements)
        && isNextWhitespace(inverse.statements)) {

      omitLeft(program.statements);
      omitRight(inverse.statements);
    }
  } else {
    if (close.strip.left) {
      omitLeft(program.statements, null, true);
    }
  }

  if (inverted) {
    return new this.BlockNode(mustache, inverse, program, strip, locInfo);
  } else {
    return new this.BlockNode(mustache, program, inverse, strip, locInfo);
  }
}

exports.prepareBlock = prepareBlock;
function prepareProgram(statements, isRoot) {
  for (var i = 0, l = statements.length; i < l; i++) {
    var current = statements[i],
        strip = current.strip;

    if (!strip) {
      continue;
    }

    var _isPrevWhitespace = isPrevWhitespace(statements, i, isRoot, current.type === 'partial'),
        _isNextWhitespace = isNextWhitespace(statements, i, isRoot),

        openStandalone = strip.openStandalone && _isPrevWhitespace,
        closeStandalone = strip.closeStandalone && _isNextWhitespace,
        inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

    if (strip.right) {
      omitRight(statements, i, true);
    }
    if (strip.left) {
      omitLeft(statements, i, true);
    }

    if (inlineStandalone) {
      omitRight(statements, i);

      if (omitLeft(statements, i)) {
        // If we are on a standalone node, save the indent info for partials
        if (current.type === 'partial') {
          current.indent = (/([ \t]+$)/).exec(statements[i-1].original) ? RegExp.$1 : '';
        }
      }
    }
    if (openStandalone) {
      omitRight((current.program || current.inverse).statements);

      // Strip out the previous content node if it's whitespace only
      omitLeft(statements, i);
    }
    if (closeStandalone) {
      // Always strip the next node
      omitRight(statements, i);

      omitLeft((current.inverse || current.program).statements);
    }
  }

  return statements;
}

exports.prepareProgram = prepareProgram;function isPrevWhitespace(statements, i, isRoot) {
  if (i === undefined) {
    i = statements.length;
  }

  // Nodes that end with newlines are considered whitespace (but are special
  // cased for strip operations)
  var prev = statements[i-1],
      sibling = statements[i-2];
  if (!prev) {
    return isRoot;
  }

  if (prev.type === 'content') {
    return (sibling || !isRoot ? (/\r?\n\s*?$/) : (/(^|\r?\n)\s*?$/)).test(prev.original);
  }
}
function isNextWhitespace(statements, i, isRoot) {
  if (i === undefined) {
    i = -1;
  }

  var next = statements[i+1],
      sibling = statements[i+2];
  if (!next) {
    return isRoot;
  }

  if (next.type === 'content') {
    return (sibling || !isRoot ? (/^\s*?\r?\n/) : (/^\s*?(\r?\n|$)/)).test(next.original);
  }
}

// Marks the node to the right of the position as omitted.
// I.e. {{foo}}' ' will mark the ' ' node as omitted.
//
// If i is undefined, then the first child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitRight(statements, i, multiple) {
  var current = statements[i == null ? 0 : i + 1];
  if (!current || current.type !== 'content' || (!multiple && current.rightStripped)) {
    return;
  }

  var original = current.string;
  current.string = current.string.replace(multiple ? (/^\s+/) : (/^[ \t]*\r?\n?/), '');
  current.rightStripped = current.string !== original;
}

// Marks the node to the left of the position as omitted.
// I.e. ' '{{foo}} will mark the ' ' node as omitted.
//
// If i is undefined then the last child will be marked as such.
//
// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
// content is met.
function omitLeft(statements, i, multiple) {
  var current = statements[i == null ? statements.length - 1 : i - 1];
  if (!current || current.type !== 'content' || (!multiple && current.leftStripped)) {
    return;
  }

  // We omit the last node if it's whitespace only and not preceeded by a non-content node.
  var original = current.string;
  current.string = current.string.replace(multiple ? (/\s+$/) : (/[ \t]+$/), '');
  current.leftStripped = current.string !== original;
  return current.leftStripped;
}
},{"../exception":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/javascript-compiler.js":[function(require,module,exports){
"use strict";
var COMPILER_REVISION = require("../base").COMPILER_REVISION;
var REVISION_CHANGES = require("../base").REVISION_CHANGES;
var Exception = require("../exception")["default"];

function Literal(value) {
  this.value = value;
}

function JavaScriptCompiler() {}

JavaScriptCompiler.prototype = {
  // PUBLIC API: You can override these methods in a subclass to provide
  // alternative compiled forms for name lookup and buffering semantics
  nameLookup: function(parent, name /* , type*/) {
    if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
      return parent + "." + name;
    } else {
      return parent + "['" + name + "']";
    }
  },
  depthedLookup: function(name) {
    this.aliases.lookup = 'this.lookup';

    return 'lookup(depths, "' + name + '")';
  },

  compilerInfo: function() {
    var revision = COMPILER_REVISION,
        versions = REVISION_CHANGES[revision];
    return [revision, versions];
  },

  appendToBuffer: function(string) {
    if (this.environment.isSimple) {
      return "return " + string + ";";
    } else {
      return {
        appendToBuffer: true,
        content: string,
        toString: function() { return "buffer += " + string + ";"; }
      };
    }
  },

  initializeBuffer: function() {
    return this.quotedString("");
  },

  namespace: "Handlebars",
  // END PUBLIC API

  compile: function(environment, options, context, asObject) {
    this.environment = environment;
    this.options = options;
    this.stringParams = this.options.stringParams;
    this.trackIds = this.options.trackIds;
    this.precompile = !asObject;

    this.name = this.environment.name;
    this.isChild = !!context;
    this.context = context || {
      programs: [],
      environments: []
    };

    this.preamble();

    this.stackSlot = 0;
    this.stackVars = [];
    this.aliases = {};
    this.registers = { list: [] };
    this.hashes = [];
    this.compileStack = [];
    this.inlineStack = [];

    this.compileChildren(environment, options);

    this.useDepths = this.useDepths || environment.depths.list.length || this.options.compat;

    var opcodes = environment.opcodes,
        opcode,
        i,
        l;

    for (i = 0, l = opcodes.length; i < l; i++) {
      opcode = opcodes[i];

      this[opcode.opcode].apply(this, opcode.args);
    }

    // Flush any trailing content that might be pending.
    this.pushSource('');

    /* istanbul ignore next */
    if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
      throw new Exception('Compile completed with content left on stack');
    }

    var fn = this.createFunctionContext(asObject);
    if (!this.isChild) {
      var ret = {
        compiler: this.compilerInfo(),
        main: fn
      };
      var programs = this.context.programs;
      for (i = 0, l = programs.length; i < l; i++) {
        if (programs[i]) {
          ret[i] = programs[i];
        }
      }

      if (this.environment.usePartial) {
        ret.usePartial = true;
      }
      if (this.options.data) {
        ret.useData = true;
      }
      if (this.useDepths) {
        ret.useDepths = true;
      }
      if (this.options.compat) {
        ret.compat = true;
      }

      if (!asObject) {
        ret.compiler = JSON.stringify(ret.compiler);
        ret = this.objectLiteral(ret);
      }

      return ret;
    } else {
      return fn;
    }
  },

  preamble: function() {
    // track the last context pushed into place to allow skipping the
    // getContext opcode when it would be a noop
    this.lastContext = 0;
    this.source = [];
  },

  createFunctionContext: function(asObject) {
    var varDeclarations = '';

    var locals = this.stackVars.concat(this.registers.list);
    if(locals.length > 0) {
      varDeclarations += ", " + locals.join(", ");
    }

    // Generate minimizer alias mappings
    for (var alias in this.aliases) {
      if (this.aliases.hasOwnProperty(alias)) {
        varDeclarations += ', ' + alias + '=' + this.aliases[alias];
      }
    }

    var params = ["depth0", "helpers", "partials", "data"];

    if (this.useDepths) {
      params.push('depths');
    }

    // Perform a second pass over the output to merge content when possible
    var source = this.mergeSource(varDeclarations);

    if (asObject) {
      params.push(source);

      return Function.apply(this, params);
    } else {
      return 'function(' + params.join(',') + ') {\n  ' + source + '}';
    }
  },
  mergeSource: function(varDeclarations) {
    var source = '',
        buffer,
        appendOnly = !this.forceBuffer,
        appendFirst;

    for (var i = 0, len = this.source.length; i < len; i++) {
      var line = this.source[i];
      if (line.appendToBuffer) {
        if (buffer) {
          buffer = buffer + '\n    + ' + line.content;
        } else {
          buffer = line.content;
        }
      } else {
        if (buffer) {
          if (!source) {
            appendFirst = true;
            source = buffer + ';\n  ';
          } else {
            source += 'buffer += ' + buffer + ';\n  ';
          }
          buffer = undefined;
        }
        source += line + '\n  ';

        if (!this.environment.isSimple) {
          appendOnly = false;
        }
      }
    }

    if (appendOnly) {
      if (buffer || !source) {
        source += 'return ' + (buffer || '""') + ';\n';
      }
    } else {
      varDeclarations += ", buffer = " + (appendFirst ? '' : this.initializeBuffer());
      if (buffer) {
        source += 'return buffer + ' + buffer + ';\n';
      } else {
        source += 'return buffer;\n';
      }
    }

    if (varDeclarations) {
      source = 'var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n  ') + source;
    }

    return source;
  },

  // [blockValue]
  //
  // On stack, before: hash, inverse, program, value
  // On stack, after: return value of blockHelperMissing
  //
  // The purpose of this opcode is to take a block of the form
  // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
  // replace it on the stack with the result of properly
  // invoking blockHelperMissing.
  blockValue: function(name) {
    this.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    var params = [this.contextName(0)];
    this.setupParams(name, 0, params);

    var blockName = this.popStack();
    params.splice(1, 0, blockName);

    this.push('blockHelperMissing.call(' + params.join(', ') + ')');
  },

  // [ambiguousBlockValue]
  //
  // On stack, before: hash, inverse, program, value
  // Compiler value, before: lastHelper=value of last found helper, if any
  // On stack, after, if no lastHelper: same as [blockValue]
  // On stack, after, if lastHelper: value
  ambiguousBlockValue: function() {
    this.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

    // We're being a bit cheeky and reusing the options value from the prior exec
    var params = [this.contextName(0)];
    this.setupParams('', 0, params, true);

    this.flushInline();

    var current = this.topStack();
    params.splice(1, 0, current);

    this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
  },

  // [appendContent]
  //
  // On stack, before: ...
  // On stack, after: ...
  //
  // Appends the string value of `content` to the current buffer
  appendContent: function(content) {
    if (this.pendingContent) {
      content = this.pendingContent + content;
    }

    this.pendingContent = content;
  },

  // [append]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Coerces `value` to a String and appends it to the current buffer.
  //
  // If `value` is truthy, or 0, it is coerced into a string and appended
  // Otherwise, the empty string is appended
  append: function() {
    // Force anything that is inlined onto the stack so we don't have duplication
    // when we examine local
    this.flushInline();
    var local = this.popStack();
    this.pushSource('if (' + local + ' != null) { ' + this.appendToBuffer(local) + ' }');
    if (this.environment.isSimple) {
      this.pushSource("else { " + this.appendToBuffer("''") + " }");
    }
  },

  // [appendEscaped]
  //
  // On stack, before: value, ...
  // On stack, after: ...
  //
  // Escape `value` and append it to the buffer
  appendEscaped: function() {
    this.aliases.escapeExpression = 'this.escapeExpression';

    this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
  },

  // [getContext]
  //
  // On stack, before: ...
  // On stack, after: ...
  // Compiler value, after: lastContext=depth
  //
  // Set the value of the `lastContext` compiler value to the depth
  getContext: function(depth) {
    this.lastContext = depth;
  },

  // [pushContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext, ...
  //
  // Pushes the value of the current context onto the stack.
  pushContext: function() {
    this.pushStackLiteral(this.contextName(this.lastContext));
  },

  // [lookupOnContext]
  //
  // On stack, before: ...
  // On stack, after: currentContext[name], ...
  //
  // Looks up the value of `name` on the current context and pushes
  // it onto the stack.
  lookupOnContext: function(parts, falsy, scoped) {
    /*jshint -W083 */
    var i = 0,
        len = parts.length;

    if (!scoped && this.options.compat && !this.lastContext) {
      // The depthed query is expected to handle the undefined logic for the root level that
      // is implemented below, so we evaluate that directly in compat mode
      this.push(this.depthedLookup(parts[i++]));
    } else {
      this.pushContext();
    }

    for (; i < len; i++) {
      this.replaceStack(function(current) {
        var lookup = this.nameLookup(current, parts[i], 'context');
        // We want to ensure that zero and false are handled properly if the context (falsy flag)
        // needs to have the special handling for these values.
        if (!falsy) {
          return ' != null ? ' + lookup + ' : ' + current;
        } else {
          // Otherwise we can use generic falsy handling
          return ' && ' + lookup;
        }
      });
    }
  },

  // [lookupData]
  //
  // On stack, before: ...
  // On stack, after: data, ...
  //
  // Push the data lookup operator
  lookupData: function(depth, parts) {
    /*jshint -W083 */
    if (!depth) {
      this.pushStackLiteral('data');
    } else {
      this.pushStackLiteral('this.data(data, ' + depth + ')');
    }

    var len = parts.length;
    for (var i = 0; i < len; i++) {
      this.replaceStack(function(current) {
        return ' && ' + this.nameLookup(current, parts[i], 'data');
      });
    }
  },

  // [resolvePossibleLambda]
  //
  // On stack, before: value, ...
  // On stack, after: resolved value, ...
  //
  // If the `value` is a lambda, replace it on the stack by
  // the return value of the lambda
  resolvePossibleLambda: function() {
    this.aliases.lambda = 'this.lambda';

    this.push('lambda(' + this.popStack() + ', ' + this.contextName(0) + ')');
  },

  // [pushStringParam]
  //
  // On stack, before: ...
  // On stack, after: string, currentContext, ...
  //
  // This opcode is designed for use in string mode, which
  // provides the string value of a parameter along with its
  // depth rather than resolving it immediately.
  pushStringParam: function(string, type) {
    this.pushContext();
    this.pushString(type);

    // If it's a subexpression, the string result
    // will be pushed after this opcode.
    if (type !== 'sexpr') {
      if (typeof string === 'string') {
        this.pushString(string);
      } else {
        this.pushStackLiteral(string);
      }
    }
  },

  emptyHash: function() {
    this.pushStackLiteral('{}');

    if (this.trackIds) {
      this.push('{}'); // hashIds
    }
    if (this.stringParams) {
      this.push('{}'); // hashContexts
      this.push('{}'); // hashTypes
    }
  },
  pushHash: function() {
    if (this.hash) {
      this.hashes.push(this.hash);
    }
    this.hash = {values: [], types: [], contexts: [], ids: []};
  },
  popHash: function() {
    var hash = this.hash;
    this.hash = this.hashes.pop();

    if (this.trackIds) {
      this.push('{' + hash.ids.join(',') + '}');
    }
    if (this.stringParams) {
      this.push('{' + hash.contexts.join(',') + '}');
      this.push('{' + hash.types.join(',') + '}');
    }

    this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
  },

  // [pushString]
  //
  // On stack, before: ...
  // On stack, after: quotedString(string), ...
  //
  // Push a quoted version of `string` onto the stack
  pushString: function(string) {
    this.pushStackLiteral(this.quotedString(string));
  },

  // [push]
  //
  // On stack, before: ...
  // On stack, after: expr, ...
  //
  // Push an expression onto the stack
  push: function(expr) {
    this.inlineStack.push(expr);
    return expr;
  },

  // [pushLiteral]
  //
  // On stack, before: ...
  // On stack, after: value, ...
  //
  // Pushes a value onto the stack. This operation prevents
  // the compiler from creating a temporary variable to hold
  // it.
  pushLiteral: function(value) {
    this.pushStackLiteral(value);
  },

  // [pushProgram]
  //
  // On stack, before: ...
  // On stack, after: program(guid), ...
  //
  // Push a program expression onto the stack. This takes
  // a compile-time guid and converts it into a runtime-accessible
  // expression.
  pushProgram: function(guid) {
    if (guid != null) {
      this.pushStackLiteral(this.programExpression(guid));
    } else {
      this.pushStackLiteral(null);
    }
  },

  // [invokeHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // Pops off the helper's parameters, invokes the helper,
  // and pushes the helper's return value onto the stack.
  //
  // If the helper is not found, `helperMissing` is called.
  invokeHelper: function(paramSize, name, isSimple) {
    this.aliases.helperMissing = 'helpers.helperMissing';

    var nonHelper = this.popStack();
    var helper = this.setupHelper(paramSize, name);

    var lookup = (isSimple ? helper.name + ' || ' : '') + nonHelper + ' || helperMissing';
    this.push('((' + lookup + ').call(' + helper.callParams + '))');
  },

  // [invokeKnownHelper]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of helper invocation
  //
  // This operation is used when the helper is known to exist,
  // so a `helperMissing` fallback is not required.
  invokeKnownHelper: function(paramSize, name) {
    var helper = this.setupHelper(paramSize, name);
    this.push(helper.name + ".call(" + helper.callParams + ")");
  },

  // [invokeAmbiguous]
  //
  // On stack, before: hash, inverse, program, params..., ...
  // On stack, after: result of disambiguation
  //
  // This operation is used when an expression like `{{foo}}`
  // is provided, but we don't know at compile-time whether it
  // is a helper or a path.
  //
  // This operation emits more code than the other options,
  // and can be avoided by passing the `knownHelpers` and
  // `knownHelpersOnly` flags at compile-time.
  invokeAmbiguous: function(name, helperCall) {
    this.aliases.functionType = '"function"';
    this.aliases.helperMissing = 'helpers.helperMissing';
    this.useRegister('helper');

    var nonHelper = this.popStack();

    this.emptyHash();
    var helper = this.setupHelper(0, name, helperCall);

    var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

    this.push(
      '((helper = (helper = ' + helperName + ' || ' + nonHelper + ') != null ? helper : helperMissing'
        + (helper.paramsInit ? '),(' + helper.paramsInit : '') + '),'
      + '(typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper))');
  },

  // [invokePartial]
  //
  // On stack, before: context, ...
  // On stack after: result of partial invocation
  //
  // This operation pops off a context, invokes a partial with that context,
  // and pushes the result of the invocation back.
  invokePartial: function(name, indent) {
    var params = [this.nameLookup('partials', name, 'partial'), "'" + indent + "'", "'" + name + "'", this.popStack(), this.popStack(), "helpers", "partials"];

    if (this.options.data) {
      params.push("data");
    } else if (this.options.compat) {
      params.push('undefined');
    }
    if (this.options.compat) {
      params.push('depths');
    }

    this.push("this.invokePartial(" + params.join(", ") + ")");
  },

  // [assignToHash]
  //
  // On stack, before: value, ..., hash, ...
  // On stack, after: ..., hash, ...
  //
  // Pops a value off the stack and assigns it to the current hash
  assignToHash: function(key) {
    var value = this.popStack(),
        context,
        type,
        id;

    if (this.trackIds) {
      id = this.popStack();
    }
    if (this.stringParams) {
      type = this.popStack();
      context = this.popStack();
    }

    var hash = this.hash;
    if (context) {
      hash.contexts.push("'" + key + "': " + context);
    }
    if (type) {
      hash.types.push("'" + key + "': " + type);
    }
    if (id) {
      hash.ids.push("'" + key + "': " + id);
    }
    hash.values.push("'" + key + "': (" + value + ")");
  },

  pushId: function(type, name) {
    if (type === 'ID' || type === 'DATA') {
      this.pushString(name);
    } else if (type === 'sexpr') {
      this.pushStackLiteral('true');
    } else {
      this.pushStackLiteral('null');
    }
  },

  // HELPERS

  compiler: JavaScriptCompiler,

  compileChildren: function(environment, options) {
    var children = environment.children, child, compiler;

    for(var i=0, l=children.length; i<l; i++) {
      child = children[i];
      compiler = new this.compiler();

      var index = this.matchExistingProgram(child);

      if (index == null) {
        this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
        index = this.context.programs.length;
        child.index = index;
        child.name = 'program' + index;
        this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
        this.context.environments[index] = child;

        this.useDepths = this.useDepths || compiler.useDepths;
      } else {
        child.index = index;
        child.name = 'program' + index;
      }
    }
  },
  matchExistingProgram: function(child) {
    for (var i = 0, len = this.context.environments.length; i < len; i++) {
      var environment = this.context.environments[i];
      if (environment && environment.equals(child)) {
        return i;
      }
    }
  },

  programExpression: function(guid) {
    var child = this.environment.children[guid],
        depths = child.depths.list,
        useDepths = this.useDepths,
        depth;

    var programParams = [child.index, 'data'];

    if (useDepths) {
      programParams.push('depths');
    }

    return 'this.program(' + programParams.join(', ') + ')';
  },

  useRegister: function(name) {
    if(!this.registers[name]) {
      this.registers[name] = true;
      this.registers.list.push(name);
    }
  },

  pushStackLiteral: function(item) {
    return this.push(new Literal(item));
  },

  pushSource: function(source) {
    if (this.pendingContent) {
      this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
      this.pendingContent = undefined;
    }

    if (source) {
      this.source.push(source);
    }
  },

  pushStack: function(item) {
    this.flushInline();

    var stack = this.incrStack();
    this.pushSource(stack + " = " + item + ";");
    this.compileStack.push(stack);
    return stack;
  },

  replaceStack: function(callback) {
    var prefix = '',
        inline = this.isInline(),
        stack,
        createdStack,
        usedLiteral;

    /* istanbul ignore next */
    if (!this.isInline()) {
      throw new Exception('replaceStack on non-inline');
    }

    // We want to merge the inline statement into the replacement statement via ','
    var top = this.popStack(true);

    if (top instanceof Literal) {
      // Literals do not need to be inlined
      prefix = stack = top.value;
      usedLiteral = true;
    } else {
      // Get or create the current stack name for use by the inline
      createdStack = !this.stackSlot;
      var name = !createdStack ? this.topStackName() : this.incrStack();

      prefix = '(' + this.push(name) + ' = ' + top + ')';
      stack = this.topStack();
    }

    var item = callback.call(this, stack);

    if (!usedLiteral) {
      this.popStack();
    }
    if (createdStack) {
      this.stackSlot--;
    }
    this.push('(' + prefix + item + ')');
  },

  incrStack: function() {
    this.stackSlot++;
    if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
    return this.topStackName();
  },
  topStackName: function() {
    return "stack" + this.stackSlot;
  },
  flushInline: function() {
    var inlineStack = this.inlineStack;
    if (inlineStack.length) {
      this.inlineStack = [];
      for (var i = 0, len = inlineStack.length; i < len; i++) {
        var entry = inlineStack[i];
        if (entry instanceof Literal) {
          this.compileStack.push(entry);
        } else {
          this.pushStack(entry);
        }
      }
    }
  },
  isInline: function() {
    return this.inlineStack.length;
  },

  popStack: function(wrapped) {
    var inline = this.isInline(),
        item = (inline ? this.inlineStack : this.compileStack).pop();

    if (!wrapped && (item instanceof Literal)) {
      return item.value;
    } else {
      if (!inline) {
        /* istanbul ignore next */
        if (!this.stackSlot) {
          throw new Exception('Invalid stack pop');
        }
        this.stackSlot--;
      }
      return item;
    }
  },

  topStack: function() {
    var stack = (this.isInline() ? this.inlineStack : this.compileStack),
        item = stack[stack.length - 1];

    if (item instanceof Literal) {
      return item.value;
    } else {
      return item;
    }
  },

  contextName: function(context) {
    if (this.useDepths && context) {
      return 'depths[' + context + ']';
    } else {
      return 'depth' + context;
    }
  },

  quotedString: function(str) {
    return '"' + str
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
      .replace(/\u2029/g, '\\u2029') + '"';
  },

  objectLiteral: function(obj) {
    var pairs = [];

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        pairs.push(this.quotedString(key) + ':' + obj[key]);
      }
    }

    return '{' + pairs.join(',') + '}';
  },

  setupHelper: function(paramSize, name, blockHelper) {
    var params = [],
        paramsInit = this.setupParams(name, paramSize, params, blockHelper);
    var foundHelper = this.nameLookup('helpers', name, 'helper');

    return {
      params: params,
      paramsInit: paramsInit,
      name: foundHelper,
      callParams: [this.contextName(0)].concat(params).join(", ")
    };
  },

  setupOptions: function(helper, paramSize, params) {
    var options = {}, contexts = [], types = [], ids = [], param, inverse, program;

    options.name = this.quotedString(helper);
    options.hash = this.popStack();

    if (this.trackIds) {
      options.hashIds = this.popStack();
    }
    if (this.stringParams) {
      options.hashTypes = this.popStack();
      options.hashContexts = this.popStack();
    }

    inverse = this.popStack();
    program = this.popStack();

    // Avoid setting fn and inverse if neither are set. This allows
    // helpers to do a check for `if (options.fn)`
    if (program || inverse) {
      if (!program) {
        program = 'this.noop';
      }

      if (!inverse) {
        inverse = 'this.noop';
      }

      options.fn = program;
      options.inverse = inverse;
    }

    // The parameters go on to the stack in order (making sure that they are evaluated in order)
    // so we need to pop them off the stack in reverse order
    var i = paramSize;
    while (i--) {
      param = this.popStack();
      params[i] = param;

      if (this.trackIds) {
        ids[i] = this.popStack();
      }
      if (this.stringParams) {
        types[i] = this.popStack();
        contexts[i] = this.popStack();
      }
    }

    if (this.trackIds) {
      options.ids = "[" + ids.join(",") + "]";
    }
    if (this.stringParams) {
      options.types = "[" + types.join(",") + "]";
      options.contexts = "[" + contexts.join(",") + "]";
    }

    if (this.options.data) {
      options.data = "data";
    }

    return options;
  },

  // the params and contexts arguments are passed in arrays
  // to fill in
  setupParams: function(helperName, paramSize, params, useRegister) {
    var options = this.objectLiteral(this.setupOptions(helperName, paramSize, params));

    if (useRegister) {
      this.useRegister('options');
      params.push('options');
      return 'options=' + options;
    } else {
      params.push(options);
      return '';
    }
  }
};

var reservedWords = (
  "break else new var" +
  " case finally return void" +
  " catch for switch while" +
  " continue function this with" +
  " default if throw" +
  " delete in try" +
  " do instanceof typeof" +
  " abstract enum int short" +
  " boolean export interface static" +
  " byte extends long super" +
  " char final native synchronized" +
  " class float package throws" +
  " const goto private transient" +
  " debugger implements protected volatile" +
  " double import public let yield"
).split(" ");

var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

for(var i=0, l=reservedWords.length; i<l; i++) {
  compilerWords[reservedWords[i]] = true;
}

JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
  return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
};

exports["default"] = JavaScriptCompiler;
},{"../base":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/base.js","../exception":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/parser.js":[function(require,module,exports){
"use strict";
/* jshint ignore:start */
/* istanbul ignore next */
/* Jison generated parser */
var handlebars = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"root":3,"program":4,"EOF":5,"program_repetition0":6,"statement":7,"mustache":8,"block":9,"rawBlock":10,"partial":11,"CONTENT":12,"COMMENT":13,"openRawBlock":14,"END_RAW_BLOCK":15,"OPEN_RAW_BLOCK":16,"sexpr":17,"CLOSE_RAW_BLOCK":18,"openBlock":19,"block_option0":20,"closeBlock":21,"openInverse":22,"block_option1":23,"OPEN_BLOCK":24,"CLOSE":25,"OPEN_INVERSE":26,"inverseAndProgram":27,"INVERSE":28,"OPEN_ENDBLOCK":29,"path":30,"OPEN":31,"OPEN_UNESCAPED":32,"CLOSE_UNESCAPED":33,"OPEN_PARTIAL":34,"partialName":35,"param":36,"partial_option0":37,"partial_option1":38,"sexpr_repetition0":39,"sexpr_option0":40,"dataName":41,"STRING":42,"NUMBER":43,"BOOLEAN":44,"OPEN_SEXPR":45,"CLOSE_SEXPR":46,"hash":47,"hash_repetition_plus0":48,"hashSegment":49,"ID":50,"EQUALS":51,"DATA":52,"pathSegments":53,"SEP":54,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},
productions_: [0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: yy.prepareProgram($$[$0-1].statements, true); return $$[$0-1]; 
break;
case 2:this.$ = new yy.ProgramNode(yy.prepareProgram($$[$0]), {}, this._$);
break;
case 3:this.$ = $$[$0];
break;
case 4:this.$ = $$[$0];
break;
case 5:this.$ = $$[$0];
break;
case 6:this.$ = $$[$0];
break;
case 7:this.$ = new yy.ContentNode($$[$0], this._$);
break;
case 8:this.$ = new yy.CommentNode($$[$0], this._$);
break;
case 9:this.$ = new yy.RawBlockNode($$[$0-2], $$[$0-1], $$[$0], this._$);
break;
case 10:this.$ = new yy.MustacheNode($$[$0-1], null, '', '', this._$);
break;
case 11:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], false, this._$);
break;
case 12:this.$ = yy.prepareBlock($$[$0-3], $$[$0-2], $$[$0-1], $$[$0], true, this._$);
break;
case 13:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 14:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 15:this.$ = { strip: yy.stripFlags($$[$0-1], $$[$0-1]), program: $$[$0] };
break;
case 16:this.$ = {path: $$[$0-1], strip: yy.stripFlags($$[$0-2], $$[$0])};
break;
case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], yy.stripFlags($$[$0-2], $$[$0]), this._$);
break;
case 19:this.$ = new yy.PartialNode($$[$0-3], $$[$0-2], $$[$0-1], yy.stripFlags($$[$0-4], $$[$0]), this._$);
break;
case 20:this.$ = new yy.PartialNode($$[$0-2], undefined, $$[$0-1], yy.stripFlags($$[$0-3], $$[$0]), this._$);
break;
case 21:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
break;
case 22:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
break;
case 23:this.$ = $$[$0];
break;
case 24:this.$ = new yy.StringNode($$[$0], this._$);
break;
case 25:this.$ = new yy.NumberNode($$[$0], this._$);
break;
case 26:this.$ = new yy.BooleanNode($$[$0], this._$);
break;
case 27:this.$ = $$[$0];
break;
case 28:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
break;
case 29:this.$ = new yy.HashNode($$[$0], this._$);
break;
case 30:this.$ = [$$[$0-2], $$[$0]];
break;
case 31:this.$ = new yy.PartialNameNode($$[$0], this._$);
break;
case 32:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
break;
case 33:this.$ = new yy.PartialNameNode(new yy.NumberNode($$[$0], this._$));
break;
case 34:this.$ = new yy.DataNode($$[$0], this._$);
break;
case 35:this.$ = new yy.IdNode($$[$0], this._$);
break;
case 36: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
break;
case 37:this.$ = [{part: $$[$0]}];
break;
case 38:this.$ = [];
break;
case 39:$$[$0-1].push($$[$0]);
break;
case 48:this.$ = [];
break;
case 49:$$[$0-1].push($$[$0]);
break;
case 52:this.$ = [$$[$0]];
break;
case 53:$$[$0-1].push($$[$0]);
break;
}
},
table: [{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],
defaultActions: {4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == "undefined") {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            var errStr = "";
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            if (ranges) {
                yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
            }
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};
/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        if (this.options.ranges) this.yylloc.range = [0,0];
        this.offset = 0;
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) this.yylloc.range[1]++;

        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length-1);
        this.matched = this.matched.substr(0, this.matched.length-1);

        if (lines.length-1) this.yylineno -= lines.length-1;
        var r = this.yylloc.range;

        this.yylloc = {first_line: this.yylloc.first_line,
          last_line: this.yylineno+1,
          first_column: this.yylloc.first_column,
          last_column: lines ?
              (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
              this.yylloc.first_column - len
          };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
less:function (n) {
        this.unput(this.match.slice(n));
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/(?:\r\n?|\n).*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
            this.yytext += match[0];
            this.match += match[0];
            this.matches = match;
            this.yyleng = this.yytext.length;
            if (this.options.ranges) {
                this.yylloc.range = [this.offset, this.offset += this.yyleng];
            }
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (this.done && this._input) this.done = false;
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


function strip(start, end) {
  return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
}


var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:
                                   if(yy_.yytext.slice(-2) === "\\\\") {
                                     strip(0,1);
                                     this.begin("mu");
                                   } else if(yy_.yytext.slice(-1) === "\\") {
                                     strip(0,1);
                                     this.begin("emu");
                                   } else {
                                     this.begin("mu");
                                   }
                                   if(yy_.yytext) return 12;
                                 
break;
case 1:return 12;
break;
case 2:
                                   this.popState();
                                   return 12;
                                 
break;
case 3:
                                  yy_.yytext = yy_.yytext.substr(5, yy_.yyleng-9);
                                  this.popState();
                                  return 15;
                                 
break;
case 4: return 12; 
break;
case 5:strip(0,4); this.popState(); return 13;
break;
case 6:return 45;
break;
case 7:return 46;
break;
case 8: return 16; 
break;
case 9:
                                  this.popState();
                                  this.begin('raw');
                                  return 18;
                                 
break;
case 10:return 34;
break;
case 11:return 24;
break;
case 12:return 29;
break;
case 13:this.popState(); return 28;
break;
case 14:this.popState(); return 28;
break;
case 15:return 26;
break;
case 16:return 26;
break;
case 17:return 32;
break;
case 18:return 31;
break;
case 19:this.popState(); this.begin('com');
break;
case 20:strip(3,5); this.popState(); return 13;
break;
case 21:return 31;
break;
case 22:return 51;
break;
case 23:return 50;
break;
case 24:return 50;
break;
case 25:return 54;
break;
case 26:// ignore whitespace
break;
case 27:this.popState(); return 33;
break;
case 28:this.popState(); return 25;
break;
case 29:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 42;
break;
case 30:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 42;
break;
case 31:return 52;
break;
case 32:return 44;
break;
case 33:return 44;
break;
case 34:return 43;
break;
case 35:return 50;
break;
case 36:yy_.yytext = strip(1,2); return 50;
break;
case 37:return 'INVALID';
break;
case 38:return 5;
break;
}
};
lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
lexer.conditions = {"mu":{"rules":[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[5],"inclusive":false},"raw":{"rules":[3,4],"inclusive":false},"INITIAL":{"rules":[0,1,38],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();exports["default"] = handlebars;
/* jshint ignore:end */
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/printer.js":[function(require,module,exports){
"use strict";
var Visitor = require("./visitor")["default"];

function print(ast) {
  return new PrintVisitor().accept(ast);
}

exports.print = print;function PrintVisitor() {
  this.padding = 0;
}

exports.PrintVisitor = PrintVisitor;PrintVisitor.prototype = new Visitor();

PrintVisitor.prototype.pad = function(string) {
  var out = "";

  for(var i=0,l=this.padding; i<l; i++) {
    out = out + "  ";
  }

  out = out + string + "\n";
  return out;
};

PrintVisitor.prototype.program = function(program) {
  var out = "",
      statements = program.statements,
      i, l;

  for(i=0, l=statements.length; i<l; i++) {
    out = out + this.accept(statements[i]);
  }

  this.padding--;

  return out;
};

PrintVisitor.prototype.block = function(block) {
  var out = "";

  out = out + this.pad("BLOCK:");
  this.padding++;
  out = out + this.accept(block.mustache);
  if (block.program) {
    out = out + this.pad("PROGRAM:");
    this.padding++;
    out = out + this.accept(block.program);
    this.padding--;
  }
  if (block.inverse) {
    if (block.program) { this.padding++; }
    out = out + this.pad("{{^}}");
    this.padding++;
    out = out + this.accept(block.inverse);
    this.padding--;
    if (block.program) { this.padding--; }
  }
  this.padding--;

  return out;
};

PrintVisitor.prototype.sexpr = function(sexpr) {
  var params = sexpr.params, paramStrings = [], hash;

  for(var i=0, l=params.length; i<l; i++) {
    paramStrings.push(this.accept(params[i]));
  }

  params = "[" + paramStrings.join(", ") + "]";

  hash = sexpr.hash ? " " + this.accept(sexpr.hash) : "";

  return this.accept(sexpr.id) + " " + params + hash;
};

PrintVisitor.prototype.mustache = function(mustache) {
  return this.pad("{{ " + this.accept(mustache.sexpr) + " }}");
};

PrintVisitor.prototype.partial = function(partial) {
  var content = this.accept(partial.partialName);
  if(partial.context) {
    content += " " + this.accept(partial.context);
  }
  if (partial.hash) {
    content += " " + this.accept(partial.hash);
  }
  return this.pad("{{> " + content + " }}");
};

PrintVisitor.prototype.hash = function(hash) {
  var pairs = hash.pairs;
  var joinedPairs = [], left, right;

  for(var i=0, l=pairs.length; i<l; i++) {
    left = pairs[i][0];
    right = this.accept(pairs[i][1]);
    joinedPairs.push( left + "=" + right );
  }

  return "HASH{" + joinedPairs.join(", ") + "}";
};

PrintVisitor.prototype.STRING = function(string) {
  return '"' + string.string + '"';
};

PrintVisitor.prototype.NUMBER = function(number) {
  return "NUMBER{" + number.number + "}";
};

PrintVisitor.prototype.BOOLEAN = function(bool) {
  return "BOOLEAN{" + bool.bool + "}";
};

PrintVisitor.prototype.ID = function(id) {
  var path = id.parts.join("/");
  if(id.parts.length > 1) {
    return "PATH:" + path;
  } else {
    return "ID:" + path;
  }
};

PrintVisitor.prototype.PARTIAL_NAME = function(partialName) {
    return "PARTIAL:" + partialName.name;
};

PrintVisitor.prototype.DATA = function(data) {
  return "@" + this.accept(data.id);
};

PrintVisitor.prototype.content = function(content) {
  return this.pad("CONTENT[ '" + content.string + "' ]");
};

PrintVisitor.prototype.comment = function(comment) {
  return this.pad("{{! '" + comment.comment + "' }}");
};
},{"./visitor":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js":[function(require,module,exports){
"use strict";
function Visitor() {}

Visitor.prototype = {
  constructor: Visitor,

  accept: function(object) {
    return this[object.type](object);
  }
};

exports["default"] = Visitor;
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js":[function(require,module,exports){
"use strict";

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var line;
  if (node && node.firstLine) {
    line = node.firstLine;

    message += ' - ' + line + ':' + node.firstColumn;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  if (line) {
    this.lineNumber = line;
    this.column = node.firstColumn;
  }
}

Exception.prototype = new Error();

exports["default"] = Exception;
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/runtime.js":[function(require,module,exports){
"use strict";
var Utils = require("./utils");
var Exception = require("./exception")["default"];
var COMPILER_REVISION = require("./base").COMPILER_REVISION;
var REVISION_CHANGES = require("./base").REVISION_CHANGES;
var createFrame = require("./base").createFrame;

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = REVISION_CHANGES[currentRevision],
          compilerVersions = REVISION_CHANGES[compilerRevision];
      throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
            "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
            "Please update your runtime to a newer version ("+compilerInfo[1]+").");
    }
  }
}

exports.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new Exception("No environment passed to template");
  }
  if (!templateSpec || !templateSpec.main) {
    throw new Exception('Unknown template object: ' + typeof templateSpec);
  }

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  var invokePartialWrapper = function(partial, indent, name, context, hash, helpers, partials, data, depths) {
    if (hash) {
      context = Utils.extend({}, context, hash);
    }

    var result = env.VM.invokePartial.call(this, partial, name, context, helpers, partials, data, depths);

    if (result == null && env.compile) {
      var options = { helpers: helpers, partials: partials, data: data, depths: depths };
      partials[name] = env.compile(partial, { data: data !== undefined, compat: templateSpec.compat }, env);
      result = partials[name](context, options);
    }
    if (result != null) {
      if (indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
    }
  };

  // Just add water
  var container = {
    lookup: function(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function(i) {
      return templateSpec[i];
    },

    programs: [],
    program: function(i, data, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths) {
        programWrapper = program(this, i, fn, data, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = program(this, i, fn);
      }
      return programWrapper;
    },

    data: function(data, depth) {
      while (data && depth--) {
        data = data._parent;
      }
      return data;
    },
    merge: function(param, common) {
      var ret = param || common;

      if (param && common && (param !== common)) {
        ret = Utils.extend({}, common, param);
      }

      return ret;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  var ret = function(context, options) {
    options = options || {};
    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths;
    if (templateSpec.useDepths) {
      depths = options.depths ? [context].concat(options.depths) : [context];
    }

    return templateSpec.main.call(container, context, container.helpers, container.partials, data, depths);
  };
  ret.isTop = true;

  ret._setup = function(options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
    }
  };

  ret._child = function(i, data, depths) {
    if (templateSpec.useDepths && !depths) {
      throw new Exception('must pass parent depths');
    }

    return program(container, i, templateSpec[i], data, depths);
  };
  return ret;
}

exports.template = template;function program(container, i, fn, data, depths) {
  var prog = function(context, options) {
    options = options || {};

    return fn.call(container, context, container.helpers, container.partials, options.data || data, depths && [context].concat(depths));
  };
  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  return prog;
}

exports.program = program;function invokePartial(partial, name, context, helpers, partials, data, depths) {
  var options = { partial: true, helpers: helpers, partials: partials, data: data, depths: depths };

  if(partial === undefined) {
    throw new Exception("The partial " + name + " could not be found");
  } else if(partial instanceof Function) {
    return partial(context, options);
  }
}

exports.invokePartial = invokePartial;function noop() { return ""; }

exports.noop = noop;function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? createFrame(data) : {};
    data.root = context;
  }
  return data;
}
},{"./base":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/base.js","./exception":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/exception.js","./utils":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/utils.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/safe-string.js":[function(require,module,exports){
"use strict";
// Build out our basic SafeString type
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = function() {
  return "" + this.string;
};

exports["default"] = SafeString;
},{}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/utils.js":[function(require,module,exports){
"use strict";
/*jshint -W004 */
var SafeString = require("./safe-string")["default"];

var escape = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
};

var badChars = /[&<>"'`]/g;
var possible = /[&<>"'`]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

exports.extend = extend;var toString = Object.prototype.toString;
exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
var isFunction = function(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
var isFunction;
exports.isFunction = isFunction;
/* istanbul ignore next */
var isArray = Array.isArray || function(value) {
  return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
};
exports.isArray = isArray;

function escapeExpression(string) {
  // don't escape SafeStrings, since they're already safe
  if (string instanceof SafeString) {
    return string.toString();
  } else if (string == null) {
    return "";
  } else if (!string) {
    return string + '';
  }

  // Force a string conversion as this will be done by the append regardless and
  // the regex test will do this transparently behind the scenes, causing issues if
  // an object's to string has escaped characters in it.
  string = "" + string;

  if(!possible.test(string)) { return string; }
  return string.replace(badChars, escapeChar);
}

exports.escapeExpression = escapeExpression;function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

exports.isEmpty = isEmpty;function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}

exports.appendContextPath = appendContextPath;
},{"./safe-string":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/safe-string.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/lib/index.js":[function(require,module,exports){
// USAGE:
// var handlebars = require('handlebars');

// var local = handlebars.create();

var handlebars = require('../dist/cjs/handlebars')["default"];

handlebars.Visitor = require('../dist/cjs/handlebars/compiler/visitor')["default"];

var printer = require('../dist/cjs/handlebars/compiler/printer');
handlebars.PrintVisitor = printer.PrintVisitor;
handlebars.print = printer.print;

module.exports = handlebars;

// Publish a Node.js require() handler for .handlebars and .hbs files
/* istanbul ignore else */
if (typeof require !== 'undefined' && require.extensions) {
  var extension = function(module, filename) {
    var fs = require("fs");
    var templateString = fs.readFileSync(filename, "utf8");
    module.exports = handlebars.compile(templateString);
  };
  require.extensions[".handlebars"] = extension;
  require.extensions[".hbs"] = extension;
}

},{"../dist/cjs/handlebars":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars.js","../dist/cjs/handlebars/compiler/printer":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/printer.js","../dist/cjs/handlebars/compiler/visitor":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/handlebars/dist/cjs/handlebars/compiler/visitor.js","fs":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/grunt-browserify/node_modules/browserify/lib/_empty.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/scroll-manager/index.js":[function(require,module,exports){
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
},{"raf":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/scroll-manager/node_modules/raf/index.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/scroll-manager/node_modules/raf/index.js":[function(require,module,exports){
var now = require('performance-now')
  , global = typeof window === 'undefined' ? {} : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = global['request' + suffix]
  , caf = global['cancel' + suffix] || global['cancelRequest' + suffix]

for(var i = 0; i < vendors.length && !raf; i++) {
  raf = global[vendors[i] + 'Request' + suffix]
  caf = global[vendors[i] + 'Cancel' + suffix]
      || global[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(global, fn)
}
module.exports.cancel = function() {
  caf.apply(global, arguments)
}

},{"performance-now":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/scroll-manager/node_modules/raf/node_modules/performance-now/lib/performance-now.js"}],"/Users/maximo/Documents/repositories/scroll-manager/node_modules/scroll-manager/node_modules/raf/node_modules/performance-now/lib/performance-now.js":[function(require,module,exports){
(function (process){
// Generated by CoffeeScript 1.7.1
(function() {
  var getNanoSeconds, hrtime, loadTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - loadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    loadTime = getNanoSeconds();
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

}).call(this,require('_process'))

},{"_process":"/Users/maximo/Documents/repositories/scroll-manager/node_modules/grunt-browserify/node_modules/browserify/node_modules/process/browser.js"}]},{},["/Users/maximo/Documents/repositories/scroll-manager/index.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9mcmFtZXdvcmsvaW5kZXguanMiLCJsaWIvZnJhbWV3b3JrL3JvdXRlcy5qcyIsImxpYi9tb2RlbC9pbmRleC5qcyIsImxpYi9zZWN0aW9ucy9MYW5kaW5nL2luZGV4LmpzIiwibGliL3NlY3Rpb25zL1ByZWxvYWRlci9pbmRleC5qcyIsImxpYi91aS9FeGFtcGxlL2luZGV4LmpzIiwibGliL3VpL0xhbmRpbmdWaWV3L2luZGV4LmpzIiwibGliL3VpL1Njcm9sbEJ1dHRvbi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iaWd3aGVlbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iaWd3aGVlbC9ub2RlX21vZHVsZXMvYnctcm91dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JpZ3doZWVsL25vZGVfbW9kdWxlcy9idy1yb3V0ZXIvbm9kZV9tb2R1bGVzL2RvbS1ldmVudC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iaWd3aGVlbC9ub2RlX21vZHVsZXMvYnctcm91dGVyL25vZGVfbW9kdWxlcy9yb3V0ZXMvZGlzdC9yb3V0ZXMuanMiLCJub2RlX21vZHVsZXMvYmlnd2hlZWwvbm9kZV9tb2R1bGVzL2J3LXZpZXdtZWRpYXRvci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iaWd3aGVlbC9ub2RlX21vZHVsZXMvYnctdm0vaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmlnd2hlZWwvbm9kZV9tb2R1bGVzL2RvbS1ldmVudC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZXRlY3QtZG9tLXJlYWR5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RldGVjdC1kb20tcmVhZHkvbGliL2RldGVjdC1kb20tcmVhZHkuanMiLCJub2RlX21vZHVsZXMvZG9taWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbGliL19lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwibm9kZV9tb2R1bGVzL2dydW50LWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2NvbXBpbGVyL2FzdC5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvY29tcGlsZXIvYmFzZS5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvY29tcGlsZXIvY29tcGlsZXIuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2NvbXBpbGVyL2hlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2NvbXBpbGVyL2phdmFzY3JpcHQtY29tcGlsZXIuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2NvbXBpbGVyL3BhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvY29tcGlsZXIvcHJpbnRlci5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvY29tcGlsZXIvdmlzaXRvci5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvZXhjZXB0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvdXRpbHMuanMiLCJub2RlX21vZHVsZXMvaGFuZGxlYmFycy9saWIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2Nyb2xsLW1hbmFnZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2Nyb2xsLW1hbmFnZXIvbm9kZV9tb2R1bGVzL3JhZi9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zY3JvbGwtbWFuYWdlci9ub2RlX21vZHVsZXMvcmFmL25vZGVfbW9kdWxlcy9wZXJmb3JtYW5jZS1ub3cvbGliL3BlcmZvcm1hbmNlLW5vdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDL1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQy9KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDak1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ244QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRvbXJlYWR5ID0gcmVxdWlyZSgnZGV0ZWN0LWRvbS1yZWFkeScpO1xudmFyIGZyYW1ld29yayA9IHJlcXVpcmUoICcuL2xpYi9mcmFtZXdvcmsnICk7XG5cbmRvbXJlYWR5KGZ1bmN0aW9uKCkge1xuICBmcmFtZXdvcmsuaW5pdCgpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYmlnd2hlZWwgPSByZXF1aXJlKCAnYmlnd2hlZWwnICk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmlnd2hlZWwoIGZ1bmN0aW9uKCBkb25lICkge1xuXG5cdGRvbmUoIHtcblxuXHRcdGluaXRTZWN0aW9uOiByZXF1aXJlKCcuLi9zZWN0aW9ucy9QcmVsb2FkZXInKSxcblxuXHRcdHJvdXRlczogcmVxdWlyZSggJy4vcm91dGVzJyApXG5cdH0pO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgJy8nOiB7IHNlY3Rpb246IFtyZXF1aXJlKCcuLi9zZWN0aW9ucy9MYW5kaW5nJyldLCB1c2VVUkw6IHRydWUsIGR1cGxpY2F0ZTogdHJ1ZX0sXG4gICcvOmJpZCc6IHsgc2VjdGlvbjogW3JlcXVpcmUoJy4uL3NlY3Rpb25zL0xhbmRpbmcnKV0sIHVzZVVSTDogdHJ1ZSwgZHVwbGljYXRlOiB0cnVlfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIi9cIjoge1xuXG4gIH0sXG4gICdsYW5kaW5nJzoge1xuICAgICd0aXRsZSc6J2xhbmRpbmcnLFxuICAgICdtb2RlbCc6IHtcbiAgICAgICd0ZXh0Jzoge1xuICAgICAgICAndGl0bGUnOidzY3JvbGwtbWFuYWdlcicsXG4gICAgICAgICdzdW1tYXJ5Jzoge1xuICAgICAgICAgICdzdGFydCc6ICdzY3JvbGwtbWFuYWdlciBpdHMgYSBtb2R1bGUgdGhhdCBhbGxvd3MgeW91IHRvIHNjcm9sbCBpbnNpZGUgZWxlbWVudHMgd2l0aCBkaWZmZXJlbnQgZWFzZXMuIE5vdyBpdHMgdGltZSB0byBzYWlkIHdlbGNvbWUgdG8gc2Nyb2xsLW1hbmFnZXIgZGVtbyBvci4uLiBqdXN0JyxcbiAgICAgICAgICAnY29uc29sZSc6ICckIG5wbSBpbnN0YWxsIHNjcm9sbC1tYW5hZ2VyJyxcbiAgICAgICAgICAnZW5kJzonYW5kIHRyeSBpdCB5b3Vyc2VsZiA7KSdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdidXR0b24nOiB7XG4gICAgICAgICd0aXRsZSc6ICdTdGFydCcsXG4gICAgICAgICdvcHRpb25zJzoge1xuICAgICAgICAgICd2aWV3TmFtZSc6ICdmaXJzdEV4YW1wbGUnLFxuICAgICAgICAgICd0eXBlJzogJ3Njcm9sbFRvJyxcbiAgICAgICAgICAnZHVyYXRpb24nOiAwLjgsXG4gICAgICAgICAgJ2VsZW1lbnQnOiBkb2N1bWVudC5ib2R5LCBcbiAgICAgICAgICAnZWFzZSc6ICdlYXNlT3V0RXhwbydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ2V4YW1wbGVzJzp7XG4gICAgJ2ZpcnN0RXhhbXBsZSc6IHtcbiAgICAgICd0aXRsZSc6J2ZpcnN0RXhhbXBsZScsXG4gICAgICAnbW9kZWwnOntcbiAgICAgICAgJ3RleHQnOiB7XG4gICAgICAgICAgJ3RpdGxlJzonc2Nyb2xsVG8oKScsXG4gICAgICAgICAgJ3N1bW1hcnknOiAnU2Nyb2xsIHdpdGggYSBsaW5lYXIgZWFzZScsXG4gICAgICAgICAgJ3NvdXJjZUNvZGUnOiAndmFyIG9mZnNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcJ3NlY29uZEV4YW1wbGVcXCcpO1xcblxcbnZhciBvcHRpb25zID0ge1xcbiAgZHVyYXRpb246IDAuNyxcXG4gIHRvOiBvZmZzZXQuXFxuICBlbGVtZW50OiBkb2N1bWVudC5ib2R5LFxcbiAgZWFzZTogXFwnZWFzZUxpbmVhclxcJ1xcbn07XFxuXFxudGhpcy5zY3JvbGxlci5zY3JvbGxUbyhvcHRpb25zKTsnXG4gICAgICAgIH0sXG4gICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ0dvIScsXG4gICAgICAgICAgJ29wdGlvbnMnOiB7XG4gICAgICAgICAgICAndmlld05hbWUnOiAnc2Vjb25kRXhhbXBsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdzY3JvbGxUbycsXG4gICAgICAgICAgICAnZHVyYXRpb24nOiAwLjcsXG4gICAgICAgICAgICAnZWxlbWVudCc6IGRvY3VtZW50LmJvZHksIFxuICAgICAgICAgICAgJ2Vhc2UnOiAnZWFzZUxpbmVhcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICdzZWNvbmRFeGFtcGxlJzoge1xuICAgICAgJ3RpdGxlJzonc2Vjb25kRXhhbXBsZScsXG4gICAgICAnbW9kZWwnOntcbiAgICAgICAgJ3RleHQnOiB7XG4gICAgICAgICAgJ3RpdGxlJzonc2Nyb2xsVG8oKScsXG4gICAgICAgICAgJ3N1bW1hcnknOiAnU2Nyb2xsIHdpdGggYSBFeHBvT3V0IGVhc2UnLFxuICAgICAgICAgICdzb3VyY2VDb2RlJzogJ3ZhciBvZmZzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXCd0aGlyZEV4YW1wbGVcXCcpO1xcblxcbnZhciBvcHRpb25zID0ge1xcbiAgZHVyYXRpb246IDEuNSxcXG4gIHRvOiBvZmZzZXQuXFxuICBlbGVtZW50OiBkb2N1bWVudC5ib2R5LFxcbiAgZWFzZTogXFwnZWFzZU91dEV4cG9cXCdcXG59O1xcblxcbnRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG8ob3B0aW9ucyk7J1xuICAgICAgICB9LFxuICAgICAgICAnYnV0dG9uJzoge1xuICAgICAgICAgICd0aXRsZSc6ICdHbyEnLFxuICAgICAgICAgICdvcHRpb25zJzoge1xuICAgICAgICAgICAgJ3ZpZXdOYW1lJzogJ3RoaXJkRXhhbXBsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdzY3JvbGxUbycsXG4gICAgICAgICAgICAnZHVyYXRpb24nOiAxLjUsXG4gICAgICAgICAgICAnZWxlbWVudCc6IGRvY3VtZW50LmJvZHksIFxuICAgICAgICAgICAgJ2Vhc2UnOiAnZWFzZU91dEV4cG8nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAndGhpcmRFeGFtcGxlJzoge1xuICAgICAgJ3RpdGxlJzondGhpcmRFeGFtcGxlJyxcbiAgICAgICdtb2RlbCc6e1xuICAgICAgICAndGV4dCc6IHtcbiAgICAgICAgICAndGl0bGUnOidzY3JvbGxCb3R0b20oKScsXG4gICAgICAgICAgJ3N1bW1hcnknOiAnU2Nyb2xsIHRvIHRoZSBib3R0b20gb2YgdGhlIGVsZW1lbnQnLFxuICAgICAgICAgICdzb3VyY2VDb2RlJzogJ3ZhciBvcHRpb25zID0ge1xcbiAgZHVyYXRpb246IDAuNyxcXG4gIGVsZW1lbnQ6IGRvY3VtZW50LmJvZHksXFxuICBlYXNlOiBcXCdlYXNlSW5RdWFkXFwnXFxufTtcXG5cXG50aGlzLnNjcm9sbGVyLnNjcm9sbEJvdHRvbShvcHRpb25zKTsnXG4gICAgICAgIH0sXG4gICAgICAgICdidXR0b24nOiB7XG4gICAgICAgICAgJ3RpdGxlJzogJ0dvIEJvdHRvbSEnLFxuICAgICAgICAgICdvcHRpb25zJzoge1xuICAgICAgICAgICAgJ3ZpZXdOYW1lJzogJ2JvdHRvbUV4YW1wbGUnLFxuICAgICAgICAgICAgJ3R5cGUnOiAnc2Nyb2xsQm90dG9tJyxcbiAgICAgICAgICAgICdkdXJhdGlvbic6IDEuMixcbiAgICAgICAgICAgICdlbGVtZW50JzogZG9jdW1lbnQuYm9keSwgXG4gICAgICAgICAgICAnZWFzZSc6ICdlYXNlSW5RdWFkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJ2ZvcnRoRXhhbXBsZSc6e1xuICAgICAgJ3RpdGxlJzonZm9ydGhFeGFtcGxlJyxcbiAgICAgICdtb2RlbCc6e1xuICAgICAgICAndGV4dCc6IHtcbiAgICAgICAgICAndGl0bGUnOidzY3JvbGxUb3AoKScsXG4gICAgICAgICAgJ3N1bW1hcnknOiAnU2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQnLFxuICAgICAgICAgICdzb3VyY2VDb2RlJzogJ3ZhciBvcHRpb25zID0ge1xcbiAgZHVyYXRpb246IDEsXFxuICBlbGVtZW50OiBkb2N1bWVudC5ib2R5LFxcbiAgZWFzZTogXFwnZWFzZU91dFF1YWRcXCdcXG59O1xcblxcbnRoaXMuc2Nyb2xsZXIuc2Nyb2xsVG9wKG9wdGlvbnMpOydcbiAgICAgICAgfSxcbiAgICAgICAgJ2J1dHRvbic6IHtcbiAgICAgICAgICAndGl0bGUnOiAnR28gVG9wIScsXG4gICAgICAgICAgJ29wdGlvbnMnOiB7XG4gICAgICAgICAgICAndmlld05hbWUnOiAnbGFuZGluZycsXG4gICAgICAgICAgICAndHlwZSc6ICdzY3JvbGxUb3AnLFxuICAgICAgICAgICAgJ2R1cmF0aW9uJzogMSxcbiAgICAgICAgICAgICdlbGVtZW50JzogZG9jdW1lbnQuYm9keSwgXG4gICAgICAgICAgICAnZWFzZSc6ICdlYXNlT3V0UXVhZCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICdmaWZ0aEV4YW1wbGUnOntcbiAgICAgICd0aXRsZSc6J2ZpZnRoRXhhbXBsZScsXG4gICAgICAnbW9kZWwnOntcbiAgICAgICAgJ3RleHQnOiB7XG4gICAgICAgICAgJ3RpdGxlJzonc2Nyb2xsRXF1YWwoKScsXG4gICAgICAgICAgJ3N1bW1hcnknOiAnU2Nyb2xsIHdpdGggdGhlIHNhbWUgdmVsb2NpdHkgd2l0aG91dCB0YWtpbmcgaW50byBhY2NvdW50IHRoZSBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uJyxcbiAgICAgICAgICAnc291cmNlQ29kZSc6ICd2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwnZm9ydGhFeGFtcGxlXFwnKTtcXG5cXG52YXIgb3B0aW9ucyA9IHtcXG4gIHZlbG9jaXR5OiA0MDAsXFxuICB0bzogb2Zmc2V0LlxcbiAgZWxlbWVudDogZG9jdW1lbnQuYm9keSxcXG4gIGVhc2U6IFxcJ2Vhc2VMaW5lYXJcXCdcXG59O1xcblxcbnRoaXMuc2Nyb2xsZXIuc2Nyb2xsRXF1YWwob3B0aW9ucyk7J1xuICAgICAgICB9LFxuICAgICAgICAnYnV0dG9uJzoge1xuICAgICAgICAgICd0aXRsZSc6ICdHbyEnLFxuICAgICAgICAgICdvcHRpb25zJzoge1xuICAgICAgICAgICAgJ3ZpZXdOYW1lJzogJ2ZvcnRoRXhhbXBsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdzY3JvbGxFcXVhbCcsXG4gICAgICAgICAgICAndmVsb2NpdHknOiA0MDAsXG4gICAgICAgICAgICAnZWxlbWVudCc6IGRvY3VtZW50LmJvZHksIFxuICAgICAgICAgICAgJ2Vhc2UnOiAnZWFzZUxpbmVhcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICdib3R0b21FeGFtcGxlJzp7XG4gICAgICAndGl0bGUnOidib3R0b21FeGFtcGxlJyxcbiAgICAgICdtb2RlbCc6e1xuICAgICAgICAndGV4dCc6IHtcbiAgICAgICAgICAndGl0bGUnOidzY3JvbGxCb3R0b20gdGFrZSB5b3UgaGVyZSEgOiknLFxuICAgICAgICAgICdzdW1tYXJ5JzogJ0dvIGJhY2sgdG8gYW5vdGhlciBleGFtcGxlJyxcbiAgICAgICAgICAnc291cmNlQ29kZSc6ICd2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXFwnZmlmdGhFeGFtcGxlXFwnKTtcXG5cXG52YXIgb3B0aW9ucyA9IHtcXG4gIGR1cmF0aW9uOiAxLjIsXFxuICB0bzogb2Zmc2V0LlxcbiAgZWxlbWVudDogZG9jdW1lbnQuYm9keSxcXG4gIGVhc2U6IFxcJ2Vhc2VPdXRFeHBvXFwnXFxufTtcXG5cXG50aGlzLnNjcm9sbGVyLnNjcm9sbEVxdWFsKG9wdGlvbnMpOydcblxuICAgICAgICB9LFxuICAgICAgICAnYnV0dG9uJzoge1xuICAgICAgICAgICd0aXRsZSc6ICdDb250aW51ZSEnLFxuICAgICAgICAgICdvcHRpb25zJzoge1xuICAgICAgICAgICAgJ3ZpZXdOYW1lJzogJ2ZpZnRoRXhhbXBsZScsXG4gICAgICAgICAgICAndHlwZSc6ICdzY3JvbGxUbycsXG4gICAgICAgICAgICAnZHVyYXRpb24nOiAxLjIsXG4gICAgICAgICAgICAnZWxlbWVudCc6IGRvY3VtZW50LmJvZHksIFxuICAgICAgICAgICAgJ2Vhc2UnOiAnZWFzZU91dEV4cG8nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBoYnMgPSByZXF1aXJlKCAnaGFuZGxlYmFycycgKTtcbnZhciBkb21pZnkgPSByZXF1aXJlKCAnZG9taWZ5JyApO1xudmFyIG1vZGVsID0gcmVxdWlyZSggJy4uLy4uL21vZGVsJyApO1xudmFyIEV4YW1wbGUgPSByZXF1aXJlKCcuLi8uLi91aS9FeGFtcGxlJyk7XG52YXIgTGFuZGluZ1ZpZXcgPSByZXF1aXJlKCcuLi8uLi91aS9MYW5kaW5nVmlldycpO1xuZnVuY3Rpb24gTGFuZGluZygpIHt9XG5cblxuTGFuZGluZy5wcm90b3R5cGUgPSB7XG5cblx0aW5pdDogZnVuY3Rpb24oIHJlcSwgZG9uZSApIHtcblx0XHRcblx0XHRcdFxuXHRcdFx0dGhpcy5kb20gPSBkb21pZnkoaGJzLmNvbXBpbGUoXCI8ZGl2IGlkPVxcXCJMYW5kaW5nXFxcIj5cXG4gIDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9KYW0zL3Njcm9sbC1tYW5hZ2VyXFxcIj5cXG4gIDxpbWcgc3R5bGU9XFxcInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBib3JkZXI6IDA7XFxcIiBzcmM9XFxcImFzc2V0cy9pbWFnZXMvZm9yay1tZS1vbi1naXRodWIucG5nXFxcIiBcXG4gIGFsdD1cXFwiRm9yayBtZSBvbiBHaXRIdWJcXFwiPjwvYT5cXG4gIDxkaXYgY2xhc3M9XFxcInZpZXctY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBpZD1cXFwibGFuZGluZ1xcXCI+PC9kaXY+XFxuICAgIDxkaXYgaWQ9XFxcImZpcnN0RXhhbXBsZVxcXCI+PC9kaXY+XFxuICAgIDxkaXYgaWQ9XFxcInNlY29uZEV4YW1wbGVcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJ0aGlyZEV4YW1wbGVcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJmb3J0aEV4YW1wbGVcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJmaWZ0aEV4YW1wbGVcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJib3R0b21FeGFtcGxlXFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiKShtb2RlbFsgcmVxLnJvdXRlIF0pKTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb20pO1xuXG5cdFx0XHR2YXIgdmlld0NvbnRhaW5lciA9IHRoaXMuZG9tLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ZpZXctY29udGFpbmVyJylbMF07XG5cdFx0XHR2YXIgbGFuZGluZ1ZpZXcgPSBuZXcgTGFuZGluZ1ZpZXcocmVxLCBkb25lLCBtb2RlbC5sYW5kaW5nLm1vZGVsLCBtb2RlbC5sYW5kaW5nLnRpdGxlKTtcblx0XHRcdHZpZXdDb250YWluZXIuY2hpbGRyZW4ubmFtZWRJdGVtKG1vZGVsLmxhbmRpbmcudGl0bGUpLmFwcGVuZENoaWxkKGxhbmRpbmdWaWV3LmRvbSk7XG5cdFx0XHRcblx0XHRcdHZhciBleGFtcGxlO1xuXHRcdFx0Zm9yIChleGFtcGxlIGluIG1vZGVsLmV4YW1wbGVzKSB7XG5cdFx0XHRcdHZhciBleGFtcGxlVG9BZGQgPSBuZXcgRXhhbXBsZShyZXEsIGRvbmUsIG1vZGVsLmV4YW1wbGVzW2V4YW1wbGVdLm1vZGVsLCBtb2RlbC5leGFtcGxlc1tleGFtcGxlXS50aXRsZSk7XG5cdFx0XHRcdHZpZXdDb250YWluZXIuY2hpbGRyZW4ubmFtZWRJdGVtKG1vZGVsLmV4YW1wbGVzW2V4YW1wbGVdLnRpdGxlKS5hcHBlbmRDaGlsZChleGFtcGxlVG9BZGQuZG9tKTtcblx0XHRcdH1cblx0XHRcblx0XHRcdGRvbmUoKTtcblx0XHRcblx0fSxcblxuICByZXNpemU6IGZ1bmN0aW9uKHcsaCkge1xuXG4gIH0sXG5cblx0YW5pbWF0ZUluOiBmdW5jdGlvbiggcmVxLCBkb25lICkge1xuXHRcdC8vIHRoaXMuZ29Ub1NlY3Rpb24ocmVxLnBhcmFtcy5iaWQpO1xuXHRcdGRvbmUoKTtcbiAgICBcblx0fSxcblxuXHRhbmltYXRlT3V0OiBmdW5jdGlvbiggcmVxLCBkb25lICkge1xuXG5cdFx0ZG9uZSgpO1xuXHR9LFxuXG5cdGRlc3Ryb3k6IGZ1bmN0aW9uKCByZXEsIGRvbmUgKSB7XG5cblx0XHRcbiAgICB0aGlzLmRvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZG9tKTtcblxuXHRcdGRvbmUoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYW5kaW5nO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBoYnMgPSByZXF1aXJlKCAnaGFuZGxlYmFycycgKTtcbnZhciBkb21pZnkgPSByZXF1aXJlKCAnZG9taWZ5JyApO1xudmFyIG1vZGVsID0gcmVxdWlyZSggJy4uLy4uL21vZGVsJyApO1xuXG5cbmZ1bmN0aW9uIFByZWxvYWRlcihvbkNvbXBsZXRlKSB7XG4gIHRoaXMucHJlbG9hZGVkID0gb25Db21wbGV0ZTtcbn1cblxuXG5QcmVsb2FkZXIucHJvdG90eXBlID0ge1xuXG5cdGluaXQ6IGZ1bmN0aW9uKCByZXEsIGRvbmUgKSB7XG5cdFx0XG5cdFx0XG5cdFx0XHR0aGlzLmRvbSA9IGRvbWlmeShoYnMuY29tcGlsZShcIjxkaXYgaWQ9XFxcIlByZWxvYWRlclxcXCI+PC9kaXY+XCIpKCkpO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XG5cdFx0XHRkb25lKCk7XG5cdFx0XG5cdH0sXG5cbiAgcmVzaXplOiBmdW5jdGlvbih3LGgpIHtcblxuICB9LFxuXG5cdGFuaW1hdGVJbjogZnVuY3Rpb24oIHJlcSwgZG9uZSApIHtcblxuXHRcdGRvbmUoKTtcbiAgICBcbiAgICB0aGlzLnByZWxvYWRlZCgpO1xuICAgIFxuXHR9LFxuXG5cdGFuaW1hdGVPdXQ6IGZ1bmN0aW9uKCByZXEsIGRvbmUgKSB7XG5cblx0XHRkb25lKCk7XG5cdH0sXG5cblx0ZGVzdHJveTogZnVuY3Rpb24oIHJlcSwgZG9uZSApIHtcblxuXHRcdFxuICAgIHRoaXMuZG9tLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kb20pO1xuXG5cdFx0ZG9uZSgpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByZWxvYWRlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuXG52YXIgaGJzID0gcmVxdWlyZSggJ2hhbmRsZWJhcnMnICk7XG52YXIgZG9taWZ5ID0gcmVxdWlyZSggJ2RvbWlmeScgKTtcbnZhciBTY3JvbGxCdXR0b24gPSByZXF1aXJlKCcuLi9TY3JvbGxCdXR0b24nKTtcblxuZnVuY3Rpb24gRXhhbXBsZShyZXEsIGRvbmUsIG1vZGVsLCB2aWV3TmFtZSkge1xuICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIHRoaXMudmlld05hbWUgPSB2aWV3TmFtZTtcbiAgdGhpcy5pbml0KHJlcSwgZG9uZSk7XG59XG5cblxuRXhhbXBsZS5wcm90b3R5cGUgPSB7XG5cbiAgaW5pdDogZnVuY3Rpb24oIHJlcSwgZG9uZSkge1xuICAgIFxuICAgIFxuICAgICAgdGhpcy5kb20gPSBkb21pZnkoaGJzLmNvbXBpbGUoXCI8ZGl2IGlkPVxcXCJFeGFtcGxlXFxcIj5cXG4gIDxoMT57e3RleHQudGl0bGV9fTwvaDE+XFxuICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNvbnRhaW5lclxcXCI+XFxuICAgIDxzcGFuPnt7dGV4dC5zdW1tYXJ5fX08L3NwYW4+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInNvdXJjZS1jb2RlLWNvbnRhaW5lclxcXCI+XFxuICAgIDxwcmUgY2xhc3M9XFxcImJsYWNrLWNvbnNvbGVcXFwiPnt7dGV4dC5zb3VyY2VDb2RlfX08L3ByZT5cXG4gIDwvZGl2PlxcbjwvZGl2PlwiKSh0aGlzLm1vZGVsKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tKTtcbiAgICAgIHZhciBidXR0b24gPSBuZXcgU2Nyb2xsQnV0dG9uKHJlcSwgZG9uZSwgdGhpcy5tb2RlbC5idXR0b24pO1xuICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQoYnV0dG9uLmNvbnRhaW5lcik7XG4gICAgICBkb25lKCk7XG4gIH0sXG5cbiAgcmVzaXplOiBmdW5jdGlvbih3LGgpIHtcblxuICB9LFxuXG4gIGFuaW1hdGVJbjogZnVuY3Rpb24oIHJlcSwgZG9uZSApIHtcblxuICAgIGRvbmUoKTtcbiAgICBcbiAgfSxcblxuICBhbmltYXRlT3V0OiBmdW5jdGlvbiggcmVxLCBkb25lICkge1xuXG4gICAgZG9uZSgpO1xuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKCByZXEsIGRvbmUgKSB7XG5cbiAgICBcbiAgICB0aGlzLmRvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZG9tKTtcblxuICAgIGRvbmUoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5cbnZhciBoYnMgPSByZXF1aXJlKCAnaGFuZGxlYmFycycgKTtcbnZhciBkb21pZnkgPSByZXF1aXJlKCAnZG9taWZ5JyApO1xudmFyIFNjcm9sbEJ1dHRvbiA9IHJlcXVpcmUoJy4uL1Njcm9sbEJ1dHRvbicpO1xuXG5mdW5jdGlvbiBMYW5kaW5nVmlldyhyZXEsIGRvbmUsIG1vZGVsLCB2aWV3TmFtZSkge1xuICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIHRoaXMudmlld05hbWUgPSB2aWV3TmFtZTtcbiAgdGhpcy5pbml0KHJlcSwgZG9uZSk7XG59XG5cblxuTGFuZGluZ1ZpZXcucHJvdG90eXBlID0ge1xuXG4gIGluaXQ6IGZ1bmN0aW9uKCByZXEsIGRvbmUpIHtcbiAgICBcbiAgICBcbiAgICAgIHRoaXMuZG9tID0gZG9taWZ5KGhicy5jb21waWxlKFwiPGRpdiBpZD1cXFwiTGFuZGluZ1ZpZXdcXFwiPlxcbiAgPGgxPnt7dGV4dC50aXRsZX19PC9oMT5cXG4gIDxkaXYgY2xhc3M9XFxcInRleHQtY29udGFpbmVyXFxcIj5cXG4gICAgPHNwYW4+e3t0ZXh0LnN1bW1hcnkuc3RhcnR9fTwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImNvbnNvbGVcXFwiPnt7dGV4dC5zdW1tYXJ5LmNvbnNvbGV9fTwvc3Bhbj5cXG4gICAgPHNwYW4+e3t0ZXh0LnN1bW1hcnkuZW5kfX08L3NwYW4+XFxuICA8L2Rpdj5cXG48L2Rpdj5cIikodGhpcy5tb2RlbCkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmRvbSk7XG4gICAgICB2YXIgYnV0dG9uID0gbmV3IFNjcm9sbEJ1dHRvbihyZXEsIGRvbmUsIHRoaXMubW9kZWwuYnV0dG9uKTtcbiAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKGJ1dHRvbi5jb250YWluZXIpO1xuICAgICAgZG9uZSgpO1xuICB9LFxuXG4gIHJlc2l6ZTogZnVuY3Rpb24odyxoKSB7XG5cbiAgfSxcblxuICBhbmltYXRlSW46IGZ1bmN0aW9uKCByZXEsIGRvbmUgKSB7XG5cbiAgICBkb25lKCk7XG4gICAgXG4gIH0sXG5cbiAgYW5pbWF0ZU91dDogZnVuY3Rpb24oIHJlcSwgZG9uZSApIHtcblxuICAgIGRvbmUoKTtcbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiggcmVxLCBkb25lICkge1xuXG4gICAgXG4gICAgdGhpcy5kb20ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRvbSk7XG5cbiAgICBkb25lKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGFuZGluZ1ZpZXc7XG4iLCIndXNlIHN0cmljdCc7XG5cblxudmFyIGhicyA9IHJlcXVpcmUoICdoYW5kbGViYXJzJyApO1xudmFyIGRvbWlmeSA9IHJlcXVpcmUoICdkb21pZnknICk7XG52YXIgc2Nyb2xsTWFuYWdlciA9IHJlcXVpcmUoJ3Njcm9sbC1tYW5hZ2VyJyk7XG5cbmZ1bmN0aW9uIFNjcm9sbEJ1dHRvbihyZXEsIGRvbmUsIG1vZGVsICkge1xuICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIHRoaXMudmlld05hbWUgPSB0aGlzLm1vZGVsLm9wdGlvbnMudmlld05hbWU7XG4gIHRoaXMuaW5pdChyZXEsIGRvbmUpO1xufVxuXG5cblNjcm9sbEJ1dHRvbi5wcm90b3R5cGUgPSB7XG5cbiAgaW5pdDogZnVuY3Rpb24ocmVxLCBkb25lKSB7XG4gICAgXG4gICAgICB0aGlzLmNvbnRhaW5lciA9IGRvbWlmeShoYnMuY29tcGlsZShcIjxkaXYgaWQ9XFxcIlNjcm9sbEJ1dHRvblxcXCI+XFxuICA8cCBjbGFzcz1cXFwiYnV0dG9uLXRleHRcXFwiPnt7dGl0bGV9fTwvcD5cXG48L2Rpdj5cIikodGhpcy5tb2RlbCkpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICB0aGlzLnNjcm9sbGVyID0gbmV3IHNjcm9sbE1hbmFnZXIoKTtcblxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICAgIGRvbmUoKTtcbiAgICBcbiAgfSxcblxuICBhZGRMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb1Njcm9sbCh0aGlzLm1vZGVsLm9wdGlvbnMudHlwZSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICBkb1Njcm9sbDogZnVuY3Rpb24oc2Nyb2xsVHlwZSkge1xuICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnZpZXdOYW1lKTtcbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAnZWxlbWVudCc6IHRoaXMubW9kZWwub3B0aW9ucy5lbGVtZW50LFxuICAgICAgJ2Vhc2UnOiB0aGlzLm1vZGVsLm9wdGlvbnMuZWFzZVxuICAgIH07XG5cbiAgICBzd2l0Y2goc2Nyb2xsVHlwZSl7XG4gICAgICBjYXNlICdzY3JvbGxUbyc6XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCB7b2Zmc2V0VG9wOiAwfTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvID0gb2Zmc2V0Lm9mZnNldFRvcDtcbiAgICAgICAgdGhpcy5vcHRpb25zLmR1cmF0aW9uID0gdGhpcy5tb2RlbC5vcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsVG9wJzpcbiAgICAgICAgdGhpcy5vcHRpb25zLmR1cmF0aW9uID0gdGhpcy5tb2RlbC5vcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbFRvcCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbEJvdHRvbSc6XG4gICAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA9IHRoaXMubW9kZWwub3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zY3JvbGxlci5zY3JvbGxCb3R0b20odGhpcy5vcHRpb25zKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxFcXVhbCc6XG4gICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCB7b2Zmc2V0VG9wOiAwfTtcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvID0gb2Zmc2V0Lm9mZnNldFRvcDtcbiAgICAgICAgdGhpcy5vcHRpb25zLnZlbG9jaXR5ID0gdGhpcy5tb2RlbC5vcHRpb25zLnZlbG9jaXR5O1xuICAgICAgICB0aGlzLnNjcm9sbGVyLnNjcm9sbEVxdWFsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zY3JvbGxlci5zY3JvbGxUbyh0aGlzLm9wdGlvbnMpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgcmVzaXplOiBmdW5jdGlvbih3LGgpIHtcblxuICB9LFxuXG4gIGFuaW1hdGVJbjogZnVuY3Rpb24ocmVxLCBkb25lKSB7XG5cbiAgICBkb25lKCk7XG5cbiAgfSxcblxuICBhbmltYXRlT3V0OiBmdW5jdGlvbiggcmVxLCBkb25lICkge1xuICAgIFxuXG4gICAgZG9uZSgpO1xuXG4gIH0sXG5cbiAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cbiAgICBcbiAgICB0aGlzLmRvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZG9tKTtcbiAgICBkb25lKCk7XG5cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGxCdXR0b247XG4iLCIvKiogQG1vZHVsZSBiaWd3aGVlbCAqL1xyXG5cclxudmFyIHZtID0gcmVxdWlyZSgnYnctdm0nKTtcclxudmFyIHZpZXdtZWRpYXRvciA9IHJlcXVpcmUoJ2J3LXZpZXdtZWRpYXRvcicpO1xyXG52YXIgcm91dGVyID0gcmVxdWlyZSgnYnctcm91dGVyJyk7XHJcbnZhciBvbiA9IHJlcXVpcmUoJ2RvbS1ldmVudCcpO1xyXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gaW5zdGFudGlhdGluZyBiaWd3aGVlbCB5b3UgbXVzdCBwYXNzIGluIGEgc2V0dXAgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEluIHRoaXMgZnVuY3Rpb24geW91IG1heSBkbyBhbnkgcHJlcGFyYXRpb24gdGhhdCBtdXN0IGJlIGRvbmUgZm9yIHlvdXJcclxuICogYXBwbGljYXRpb24gc3VjaCBhcyBjcmVhdGluZyBhIGdsb2JhbCBDYW52YXMgZWxlbWVudCBvciBzb21ldGhpbmcgZWxzZS5cclxuICpcclxuICogVGhlIHNldHVwIGZ1bmN0aW9uIG11c3QgZWl0aGVyIHJldHVybiBhIHNldHRpbmdzIG9iamVjdCBmb3IgYmlnd2hlZWwgb3JcclxuICogdGhpcyBmdW5jdGlvbiBtdXN0IHJlY2VpdmUgYSBjYWxsYmFjayB3aGljaCB5b3Ugd2lsbCBjYWxsIHdpdGggdGhlIHNldHRpbmdzXHJcbiAqIG9iamVjdC4gRnVydGhlcm1vcmUgeW91IGNhbiBwYXNzIGJhY2sgYSBwcm9taXNlIGZyb20gdGhpcyBzZXR0aW5ncyBmdW5jdGlvblxyXG4gKiB3aGljaCB3aWxsIHJlY2VpdmUgdGhlIHNldHRpbmdzIG9iamVjdC5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBkb2N1bWVudHMgd2hhdCBjYW4gYmUgcGFzc2VkIGluIHRoZSBzZXR0aW5ncyBvYmplY3Q6XHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICoge1xyXG4gKiBcdC8vLy8vIFJFUVVJUkVEIC8vLy8vXHJcbiAqXHJcbiAqIFx0Ly8gcm91dGVzIGRlZmluZXMgYWxsIHRoZSByb3V0ZXMgZm9yIHlvdXIgd2Vic2l0ZSBpdCBjYW4gYWxzbyBkZWZpbmUgYSBcclxuICogXHQvLyA0MDQgc2VjdGlvbiB3aGljaCB3aWxsIGJlIG9wZW5lZCBpZiB0aGUgcm91dGUgaXMgaW5jb3JyZWN0XHJcbiAqICByb3V0ZXM6IHtcclxuICogIFx0cG9zdEhhc2g6ICcjIScsIC8vIHRoaXMgc3RyaW5nIGlzIGFwcGVuZGVkIGJlZm9yZSB0aGUgcm91dGUuIFxyXG4gKiAgXHQgICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCBpdCdzIHZhbHVlIGlzICcjISdcclxuICogXHRcdCcvJzogc29tZVNlY3Rpb24sXHJcbiAqIFx0XHQnL3NvbWVPdGhlcic6IHNvbWVPdGhlclNlY3Rpb24sXHJcbiAqIFx0XHQnNDA0Jzogc2VjdGlvbkZvdXJPaEZvdXJcclxuICogIH0sXHJcbiAqICBcclxuICogIC8vLy8vIE9QVElPTkFMIC8vLy8vXHJcbiAqICBpbml0U2VjdGlvbjogcHJlU2VjdGlvbiwgLy8gdGhpcyBjb3VsZCBiZSBhIHNlY3Rpb24gdGhhdCBpcyBydW4gYWx3YXlzXHJcbiAqICBcdFx0XHRcdFx0XHQgLy8gYmVmb3JlIHJvdXRlcyBhcmUgZXZlbiBldmFsdWF0ZWQuIFRoaXMgaXNcclxuICogIFx0XHRcdFx0XHRcdCAvLyB1c2VmdWxmIGZvciBzaXRlIHByZWxvYWRlcnMgb3IgbGFuZGluZyBwYWdlc1xyXG4gKiAgXHRcdFx0XHRcdFx0IC8vIHN1Y2ggYXMgYWdlIHZlcmlmaWNhdGlvbiAoc29tZXRoaW5nIHRoZSB1c2VyXHJcbiAqICBcdFx0XHRcdFx0XHQgLy8gbXVzdCBzZWUpXHJcbiAqIFxyXG4gKiBcdGF1dG9SZXNpemU6IHRydWUsIC8vIGJ5IGRlZmF1bHQgdGhpcyB2YWx1ZSBpcyB0cnVlLiBXaGVuIHRoaXMgdmFsdWUgaXNcclxuICogXHRcdFx0XHRcdCAgLy8gdHJ1ZSBhIHJlc2l6ZSBsaXN0ZW5lciBpcyBhZGRlZCB0byB0aGUgd2luZG93XHJcbiAqIFx0XHRcdFx0XHQgIC8vIHdoZW5ldmVyIHRoZSB3aW5kb3cgY2hhbmdlcyBzaXplIGl0J3Mgd2lkdGggYW5kXHJcbiAqIFx0XHRcdFx0XHQgIC8vIGhlaWdodCBpcyBwYXNzZWQgdG8gYWxsIGluc3RhbnRpYXRlZCBzZWN0aW9uc1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKiBcclxuICogQGNsYXNzIGJpZ3doZWVsXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBzZXR0aW5nc0Z1bmMgVGhpcyBzZXR0aW5ncyBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgdG9cclxuICogaW5pdGlhbGl6ZSBiaWd3aGVlbC5cclxuICovXHJcbmZ1bmN0aW9uIGJpZ3doZWVsKHNldHRpbmdzRnVuYykge1xyXG5cclxuXHRpZighKHRoaXMgaW5zdGFuY2VvZiBiaWd3aGVlbCkpXHJcblx0XHRyZXR1cm4gbmV3IGJpZ3doZWVsKHNldHRpbmdzRnVuYyk7XHJcblxyXG5cdHRoaXMuc2V0dGluZ3NGdW5jID0gc2V0dGluZ3NGdW5jO1xyXG5cdEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xyXG5cclxufVxyXG5cclxuYmlnd2hlZWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudEVtaXR0ZXIucHJvdG90eXBlKTtcclxuXHJcbi8qKlxyXG4gKiBpbml0IG11c3QgYmUgY2FsbGVkIHRvIHN0YXJ0IHRoZSBmcmFtZXdvcmsuIFRoaXMgd2FzIGRvbmUgdG8gYWxsb3cgZm9yXHJcbiAqIGEgZGV2ZWxvcGVyIHRvIGhhdmUgZnVsbCBjb250cm9sIG9mIHdoZW4gYmlnd2hlZWwgc3RhcnRzIGRvaW5nIGl0J3MgdGhpbmcuXHJcbiAqL1xyXG5iaWd3aGVlbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHR2YXIgb25TZXR0aW5nQ29tcGxldGUgPSBmdW5jdGlvbihzZXR0aW5ncykge1xyXG5cclxuXHRcdHZhciBzID0gdGhpcy5zID0gc2V0dGluZ3M7XHJcblxyXG5cdFx0aWYocyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgc2V0dGluZ3MgZnVuY3Rpb24gbXVzdCByZXR1cm4gYSBzZXR0aW5ncyBPYmplY3QnKTtcclxuXHJcblx0XHRpZihzLnJvdXRlcyA9PT0gdW5kZWZpbmVkKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgc2V0dGluZ3Mgb2JqZWN0IG11c3QgZGVmaW5lIHJvdXRlcycpO1xyXG5cclxuXHRcdHMuYXV0b1Jlc2l6ZSA9IHMuYXV0b1Jlc2l6ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHMuYXV0b1Jlc2l6ZTtcclxuXHJcblx0XHQvLyBzZXR1cCB0aGUgcm91dGVyXHJcblx0XHR0aGlzLnJvdXRlciA9IHNldHRpbmdzLnJvdXRlciB8fCByb3V0ZXIoc2V0dGluZ3Mucm91dGVzKTtcclxuXHRcdHRoaXMucm91dGVyLm9uKCdyb3V0ZScsIHRoaXMuc2hvdy5iaW5kKHRoaXMpKTtcclxuXHJcblx0XHQvLyBSZS1kaXNwYXRjaCByb3V0ZXNcclxuXHRcdHRoaXMucm91dGVyLm9uKCdyb3V0ZScsdGhpcy5lbWl0LmJpbmQodGhpcywncm91dGUnKSk7XHJcblx0XHR0aGlzLnJvdXRlci5vbignc3ViX2NyZWF0ZScsdGhpcy5lbWl0LmJpbmQodGhpcywnc3ViX2NyZWF0ZScpKTtcclxuXHRcdHRoaXMucm91dGVyLm9uKCdzdWJfZGVzdHJveScsdGhpcy5lbWl0LmJpbmQodGhpcywnc3ViX2Rlc3Ryb3knKSk7XHJcblxyXG5cdFx0Ly8gaGFuZGxlIGFkZGluZyBhbmQgcmVtb3Zpbmcgc3ViIHJvdXRlcnMgdG8gdGhlIGdsb2JhbFxyXG5cdFx0Ly8gb2JqZWN0IGZvciBlYXNpZXIgcmV0cmlldmFsXHJcblx0XHR0aGlzLnN1YkZyYW1ld29ya3MgPSB7fTtcclxuXHJcblx0XHQvLyBzZXR1cCB0aGUgdmlldyBtYW5hZ2VyXHJcblx0XHR0aGlzLnZtID0gdm0odGhpcy5zKTtcclxuXHJcblx0XHQvLyBjaGVjayBpZiBcclxuXHRcdGlmKHMuYXV0b1Jlc2l6ZSAmJiBnbG9iYWwuaW5uZXJXaWR0aCAhPT0gdW5kZWZpbmVkICYmIGdsb2JhbC5pbm5lckhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cdFx0XHRvbihnbG9iYWwsICdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xyXG5cclxuXHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLyBoYW5kbGUgaWYgdGhlcmUgaXMgYW4gaW5pdCBzZWN0aW9uIHRoaXMgc2hvdWxkIGJlIHNob3duIGV2ZW4gYmVmb3JlXHJcblx0XHQvLyB0aGUgcm91dGVyIHJlc29sdmVzXHJcblx0XHRpZihzLmluaXRTZWN0aW9uKVxyXG5cdFx0XHR0aGlzLnNob3coe3NlY3Rpb246IHMuaW5pdFNlY3Rpb24uYmluZCh1bmRlZmluZWQsIHRoaXMucm91dGVyLmluaXQuYmluZCh0aGlzLnJvdXRlcikpfSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMucm91dGVyLmluaXQoKTtcclxuXHR9LmJpbmQodGhpcyk7XHJcblxyXG5cclxuXHR2YXIgclZhbCA9IHRoaXMuc2V0dGluZ3NGdW5jKG9uU2V0dGluZ0NvbXBsZXRlKTtcclxuXHJcblx0Ly8gY2hlY2sgaWYgcHJvbWlzZXMgYXJlIHVzZWQgaW5zdGVhZFxyXG5cdC8vIGl0IG1pZ2h0IGJlIGdvb2QgdG8gcmVtb3ZlIHRoaXMgc2luY2UgdGhlcmVzIG5vXHJcblx0Ly8gbmVlZCBmb3IgcHJvbWlzZXMgaW4gdGhpcyBjYXNlXHJcblx0aWYoclZhbCAmJiByVmFsLnRoZW4pXHJcblx0XHRyVmFsLnRoZW4ob25TZXR0aW5nQ29tcGxldGUpO1xyXG5cdC8vIGNoZWNrIGlmIGp1c3QgYW4gb2JqZWN0IHdhcyByZXR1cm5lZCB3aGljaCBoYXMgLnJvdXRlc1xyXG5cdGVsc2UgaWYoclZhbCAmJiByVmFsLnJvdXRlcylcclxuXHRcdG9uU2V0dGluZ0NvbXBsZXRlKHJWYWwpO1xyXG5cclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuXHJcblxyXG5cclxuYmlnd2hlZWwucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKG5hbWUsIHJvdXRlcykge1xyXG5cclxuXHR2YXIgc3ViRnJhbWV3b3JrcyA9IHRoaXMuc3ViRnJhbWV3b3JrcztcclxuXHR2YXIgc3ViO1xyXG5cdHZhciBzZXR0aW5ncztcclxuXHJcblx0Ly8gaWYgdGhlcmUncyBhIHN1YmZyYW1ld29yayB3aXRoIHRoaXMgc2FtZSBuYW1lIGp1c3QgcmV0dXJuIGl0XHJcblx0aWYoc3ViRnJhbWV3b3Jrc1sgbmFtZSBdKSB7XHJcblxyXG5cdFx0c3ViID0gc3ViRnJhbWV3b3Jrc1sgbmFtZSBdO1xyXG5cdC8vIG90aGVyd2lzZSBpZiB3ZSBoYXZlIHJvdXRlcyB0aGVuIGNyZWF0ZSBhIG5ldyBvbmVcclxuXHR9IGVsc2UgaWYocm91dGVzKSB7XHJcblxyXG5cdFx0Ly8gaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHN1YmZyYW1ld29yayB3aXRoIHRoaXMgbmFtZSBqdXN0IHJldHVybiBpdFxyXG5cdFx0c2V0dGluZ3MgPSB7XHJcblx0XHRcdHJvdXRlczogcm91dGVzXHJcblx0XHR9O1xyXG5cclxuXHRcdHNldHRpbmdzLnJvdXRlciA9IHRoaXMucm91dGVyLnN1Yihyb3V0ZXMpO1xyXG5cclxuXHRcdHN1YiA9IG5ldyBiaWd3aGVlbChmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuIHNldHRpbmdzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gaWYgYSBuYW1lIHdhcyBwYXNzZWQgc2F2ZSBpdCBmb3IgbGF0ZXIgcmVmZXJlbmNlXHJcblx0XHRpZihuYW1lKSB7XHJcblx0XHRcdHN1YkZyYW1ld29ya3NbIG5hbWUgXSA9IHN1YjtcclxuXHJcblx0XHRcdC8vIGlmIGEgc3ViIHJvdXRlciBnZXRzIGRlc3Ryb3llZCB3ZSBzaG91bGQgY2hlY2sgaWYgaXRzXHJcblx0XHRcdC8vIGZvciB0aGlzIHN1YiBmcmFtZXdvcmsgYW5kIGRlc3Ryb3kgaXRcclxuXHRcdFx0dGhpcy5yb3V0ZXIub24oJ3N1Yl9kZXN0cm95JywgZnVuY3Rpb24oaW5mbykge1xyXG5cclxuXHRcdFx0XHRpZihpbmZvLnJvdXRlciA9PT0gc2V0dGluZ3Mucm91dGVyKSB7XHJcblx0XHRcdFx0XHRzdWJGcmFtZXdvcmtzWyBuYW1lIF0uZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0ZGVsZXRlIHN1YkZyYW1ld29ya3NbIG5hbWUgXTtcclxuXHRcdFx0XHR9XHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0c3ViLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzdWI7XHJcbn07XHJcblxyXG4vKipcclxuICogZ28gY2FuIGJlIGNhbGxlZCB0byBnbyB0byBhbm90aGVyIHNlY3Rpb24uXHJcbiAqIFxyXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHRvIFRoaXMgaXMgdGhlIHJvdXRlIHlvdSB3YW50IHRvIGdvIHRvLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGZyYW1ld29yay5nbygnL2xhbmRpbmcnKTtcclxuICogYGBgXHJcbiAqL1xyXG5iaWd3aGVlbC5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbih0bykge1xyXG5cclxuXHR0aGlzLnJvdXRlci5nbyh0byk7XHJcblxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlc3Ryb3lzIGJpZ2h3ZWVsXHJcbiAqL1xyXG5iaWd3aGVlbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHR0aGlzLnJvdXRlci5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3N1Yl9kZXN0cm95Jyk7XHJcblx0dGhpcy5yb3V0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCdzdWJfY3JlYXRlJyk7XHJcblx0dGhpcy5yb3V0ZXIucmVtb3ZlQWxsTGlzdGVuZXJzKCdyb3V0ZScpO1xyXG5cdHRoaXMucm91dGVyLmRlc3Ryb3koKTtcclxuXHJcbn07XHJcblxyXG4vKipcclxuICogUmVzaXplIGNhbiBiZSBjYWxsZWQgYXQgYW55IHRpbWUuIFRoZSB2YWx1ZXMgcGFzc2VkIGluIGZvclxyXG4gKiB3aWR0aCBhbmQgaGVpZ2h0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjdXJyZW50bHkgaW5zdGFudGlhdGVkXHJcbiAqIHNlY3Rpb25zLlxyXG4gKlxyXG4gKiBJZiBgYXV0b1Jlc2l6ZWAgd2FzIG5vdCBwYXNzZWQgaW4gb3IgaXQgd2FzIHRydWUgdGhlbiByZXNpemVcclxuICogd2lsbCBhdXRvbWF0aWNhbGx5IGJlIGNhbGxlZCB3aGVuIHRoZSB3aW5kb3cgb2YgdGhlIGJyb3dzZXJcclxuICogcmVzaXplcy5cclxuICogXHJcbiAqIEBwYXJhbSAge051bWJlcn0gdyB3aWR0aCB2YWx1ZSB5b3UnZCBsaWtlIHRvIHBhc3MgdG8gdGhlIHNlY3Rpb25zXHJcbiAqIEBwYXJhbSAge051bWJlcn0gaCBoZWlnaHQgdmFsdWUgeW91J2QgbGlrZSB0byBwYXNzIHRvIHRoZSBzZWN0aW9uc1xyXG4gKi9cclxuYmlnd2hlZWwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcclxuXHJcblx0dGhpcy52bS5yZXNpemUodywgaCk7XHJcbn07XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGluZm8pIHtcclxuXHR2YXIgc2VjdGlvbiA9IGluZm8uc2VjdGlvbjtcclxuXHR2YXIgcmVxID0gaW5mby5yb3V0ZTtcclxuXHJcblx0Ly8gdGhpcyBpcyB0aGUgb3JpZ2luYWwgcm91dGVyIGNhbGxiYWNrIHBhc3NlZCBpblxyXG5cdGlmKHRoaXMub25Sb3V0ZUNhbGxCYWNrKVxyXG5cdFx0dGhpcy5vblJvdXRlQ2FsbEJhY2soc2VjdGlvbiwgcmVxKTtcclxuXHJcblxyXG5cdC8vIGNoZWNrIGlmIHNlY3Rpb24gaXMgYW4gYXJyYXkgb3IgZnVuY3Rpb24gb3Igb2JqZWN0XHJcblx0aWYoQXJyYXkuaXNBcnJheShzZWN0aW9uKSkge1xyXG5cclxuXHRcdHZhciBzZWN0aW9ucyA9IFtdO1xyXG5cclxuXHRcdGZvcih2YXIgaSA9IDAsIGxlbiA9IHNlY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHJcblx0XHRcdGlmKHR5cGVvZiBzZWN0aW9uWyBpIF0gPT0gJ29iamVjdCcpIHtcclxuXHJcblx0XHRcdFx0c2VjdGlvbnNbIGkgXSA9IHNlY3Rpb25bIGkgXTtcclxuXHRcdFx0fSBlbHNlIGlmKHR5cGVvZiBzZWN0aW9uWyBpIF0gPT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuXHRcdFx0XHRzZWN0aW9uc1sgaSBdID0gbmV3IHNlY3Rpb25bIGkgXSgpO1xyXG5cdFx0XHR9XHRcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRvU2hvdyh2aWV3bWVkaWF0b3IuYXBwbHkodW5kZWZpbmVkLCBzZWN0aW9ucyksIHJlcSk7XHJcblx0fSBlbHNlIGlmKHR5cGVvZiBzZWN0aW9uID09ICdvYmplY3QnKSB7XHJcblxyXG5cdFx0dGhpcy5kb1Nob3coc2VjdGlvbiwgcmVxKTtcclxuXHR9IGVsc2UgaWYodHlwZW9mIHNlY3Rpb24gPT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuXHRcdHRoaXMuZG9TaG93KG5ldyBzZWN0aW9uKCksIHJlcSk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmJpZ3doZWVsLnByb3RvdHlwZS5kb1Nob3cgPSBmdW5jdGlvbihzZWN0aW9uLCByZXEpIHtcclxuXHJcblx0dGhpcy52bS5zaG93KHNlY3Rpb24sIHJlcSk7XHJcbn07XHJcblxyXG5iaWd3aGVlbC5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbigpIHtcclxuXHJcblx0dGhpcy5yZXNpemUoZ2xvYmFsLmlubmVyV2lkdGgsIGdsb2JhbC5pbm5lckhlaWdodCk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGJpZ3doZWVsOyIsInZhciBvbiA9IHJlcXVpcmUoJ2RvbS1ldmVudCcpO1xyXG52YXIgb2ZmID0gb24ub2ZmO1xyXG52YXIgcm91dGVzID0gcmVxdWlyZSgncm91dGVzJyk7XHJcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XHJcbnZhciBub29wID0gZnVuY3Rpb24oKSB7fTtcclxuXHJcbmZ1bmN0aW9uIHJvdXRlcihzZXR0aW5ncykge1xyXG5cclxuXHRpZiggISggdGhpcyBpbnN0YW5jZW9mIHJvdXRlciApICkge1xyXG5cclxuXHRcdHJldHVybiBuZXcgcm91dGVyKHNldHRpbmdzKTtcclxuXHR9XHJcblxyXG5cdHZhciBzID0gdGhpcy5zID0gc2V0dGluZ3MgfHwge307XHJcblxyXG5cdHMucG9zdEhhc2ggPSBzLnBvc3RIYXNoIHx8ICchJztcclxuXHJcblx0dGhpcy5sYXN0Um91dGUgPSBudWxsO1xyXG5cdHRoaXMuY2hpbGRSb3V0ZXIgPSBudWxsO1xyXG5cdHRoaXMuY2hpbGRGdWxsUm91dGUgPSBudWxsO1xyXG5cdHRoaXMuY2hpbGRCYXNlUm91dGUgPSBudWxsO1xyXG5cdHRoaXMucm91dGVyID0gcm91dGVzKCk7XHJcblxyXG5cdEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xyXG59XHJcblxyXG52YXIgcCA9IHJvdXRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xyXG5cclxucC5pbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBzID0gdGhpcy5zO1xyXG5cdHZhciBpO1xyXG5cclxuXHQvLyBmaWd1cmUgb3V0IGEgc3RhcnQgc2VjdGlvblxyXG5cdGlmKCBzWyAnLycgXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdC8vIGZpbmQgdGhlIGZpcnN0IHBhdGggd2hpY2ggd291bGQgYmUgYSBzZWN0aW9uXHJcblx0XHRmb3IoaSBpbiBzKSB7XHJcblxyXG5cdFx0XHRpZiggaVsgMCBdID09ICcvJyApIHtcclxuXHJcblx0XHRcdFx0cy5zdGFydCA9IGk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSBlbHNlIHtcclxuXHJcblx0XHRzLnN0YXJ0ID0gJy8nO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIG5vdyBzZXR1cCByb3V0ZXNcclxuXHRmb3IoaSBpbiBzKSB7XHJcblxyXG5cdFx0aWYoIGlbIDAgXSA9PSAnLycgfHwgaSA9PSAnNDA0Jykge1xyXG5cclxuXHRcdFx0dGhpcy5yb3V0ZXIuYWRkUm91dGUoaSwgbm9vcCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLm9uVVJMID0gdGhpcy5vblVSTC5iaW5kKHRoaXMpO1xyXG5cclxuXHRpZiggZ2xvYmFsLmxvY2F0aW9uICkge1xyXG5cdFx0b24oZ2xvYmFsLCAnaGFzaGNoYW5nZScsIHRoaXMub25VUkwpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5vblVSTCgpOyAvLyBmb3JjZSBhIGhhc2ggY2hhbmdlIHRvIHN0YXJ0IHRoaW5ncyB1cFxyXG5cdFxyXG5cdHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxucC5zdWIgPSBmdW5jdGlvbihzZXR0aW5ncykge1xyXG5cclxuXHQvLyByZW1vdmUgYWxsIHZlcmlhYmxlIHBhcnRzIGZyb20gbGFzdFJvdXRlXHJcblx0dmFyIHNwbGl0SWR4MSA9IHRoaXMubGFzdFJvdXRlLmluZGV4T2YoJyonKTtcclxuXHR2YXIgc3BsaXRJZHgyID0gdGhpcy5sYXN0Um91dGUuaW5kZXhPZignOicpO1xyXG5cdHZhciBzcGxpdElkeDtcclxuXHJcblx0aWYoc3BsaXRJZHgxID09PSAtMSAmJiBzcGxpdElkeDIgPT09IC0xKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3doZW4gY3JlYXRpbmcgYSBzdWIgcm91dGVyIHRoZSBwYXJlbnQgcm91dGUgc2hvdWxkIGhhdmUgYSB2YXJpYWJsZSByb3V0ZSB1c2luZyBlaXRoZXIgOiBvciAqJyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHNwbGl0SWR4MSA9IHNwbGl0SWR4MSAhPT0gLTEgPyBzcGxpdElkeDEgOiB0aGlzLmxhc3RSb3V0ZS5sZW5ndGg7XHJcblx0XHRzcGxpdElkeDIgPSBzcGxpdElkeDIgIT09IC0xID8gc3BsaXRJZHgyIDogdGhpcy5sYXN0Um91dGUubGVuZ3RoO1xyXG5cdFx0c3BsaXRJZHggPSBzcGxpdElkeDEgPCBzcGxpdElkeDIgPyBzcGxpdElkeDEgOiBzcGxpdElkeDI7XHJcblx0fVxyXG5cclxuXHR0aGlzLmNoaWxkRnVsbFJvdXRlID0gdGhpcy5sYXN0Um91dGU7XHJcblx0dGhpcy5jaGlsZEJhc2VSb3V0ZSA9IHRoaXMubGFzdFJvdXRlLnN1YnN0cmluZygwLCBzcGxpdElkeCAtIDEpO1xyXG5cclxuXHRzZXR0aW5ncy5wb3N0SGFzaCA9IHRoaXMucy5wb3N0SGFzaCArIHRoaXMuY2hpbGRCYXNlUm91dGU7XHJcblxyXG5cdHRoaXMuY2hpbGRSb3V0ZXIgPSBuZXcgcm91dGVyKHNldHRpbmdzKTtcclxuXHJcblx0dGhpcy5lbWl0KCdzdWJfY3JlYXRlJywge1xyXG5cdFx0cm91dGU6IHRoaXMuY2hpbGRGdWxsUm91dGUsXHJcblx0XHRyb3V0ZXI6IHRoaXMuY2hpbGRSb3V0ZXJcclxuXHR9KTtcclxuXHJcblx0cmV0dXJuIHRoaXMuY2hpbGRSb3V0ZXI7XHJcbn07XHJcblxyXG5wLmRlc3Ryb3lTdWIgPSBmdW5jdGlvbihyb3V0ZSkge1xyXG5cclxuXHQvLyB0aGlzLmNoaWxkQmFzZVJvdXRlXHJcblx0aWYodGhpcy5jaGlsZFJvdXRlciAmJiByb3V0ZS5pbmRleE9mKHRoaXMuY2hpbGRCYXNlUm91dGUpICE9PSAwKSB7XHJcblx0XHR0aGlzLmNoaWxkUm91dGVyLmRlc3Ryb3koKTtcclxuXHJcblx0XHR0aGlzLmVtaXQoJ3N1Yl9kZXN0cm95Jywge1xyXG5cdFx0XHRyb3V0ZTogdGhpcy5jaGlsZEZ1bGxSb3V0ZSxcclxuXHRcdFx0cm91dGVyOiB0aGlzLmNoaWxkUm91dGVyXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNoaWxkRnVsbFJvdXRlID0gbnVsbDtcclxuXHRcdHRoaXMuY2hpbGRCYXNlUm91dGUgPSBudWxsO1xyXG5cdFx0dGhpcy5jaGlsZFJvdXRlciA9IG51bGw7XHJcblx0fVxyXG59O1xyXG5cclxucC5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdGlmKGdsb2JhbC5sb2NhdGlvbikge1xyXG5cdFx0b2ZmKGdsb2JhbCwgJ2hhc2hjaGFuZ2UnLCB0aGlzLm9uVVJMKTtcdFxyXG5cdH1cclxufTtcclxuXHJcbnAuYWRkID0gZnVuY3Rpb24ocm91dGUsIHNlY3Rpb24pIHtcclxuXHJcblx0dmFyIHMgPSB0aGlzLnM7XHJcblxyXG5cdHNbIHJvdXRlIF0gPSBzZWN0aW9uO1xyXG5cclxuXHRyZXR1cm4gdGhpcztcclxufTtcclxuXHJcbnAuZ28gPSBmdW5jdGlvbihyb3V0ZVN0cikge1xyXG5cclxuXHR2YXIgcm91dGVEYXRhO1xyXG5cdHZhciBzZWN0aW9uO1xyXG5cdHZhciBuZXdVUkw7XHJcblx0dmFyIGRvVVJMQ2hhbmdlO1xyXG5cclxuXHRpZiggcm91dGVTdHIuY2hhckF0KDApICE9ICcvJyApIHtcclxuXHRcdHJvdXRlU3RyID0gJy8nICsgcm91dGVTdHI7XHJcblx0fVxyXG5cclxuXHRuZXdVUkwgPSB0aGlzLnMucG9zdEhhc2ggKyByb3V0ZVN0cjtcclxuXHRyb3V0ZURhdGEgPSB0aGlzLmdldFJvdXRlRGF0YShyb3V0ZVN0cikgfHwgdGhpcy5nZXRSb3V0ZURhdGEoJzQwNCcpO1xyXG5cdHNlY3Rpb24gPSB0aGlzLmdldFNlY3Rpb24ocm91dGVEYXRhKTtcclxuXHRkb1VSTENoYW5nZSA9IHRoaXMudXNlVVJMKHNlY3Rpb24pO1xyXG5cclxuXHQvLyBpZiB0aGlzIGlzIG5vdCBhIHNlY3Rpb24gZGVzY3JpcHRvciBvciBpdCBpcyBhIGRlc2NyaXB0b3IgYW5kIHdlIHNob3VsZCB1cGRhdGVVUkxcclxuXHRpZiggZ2xvYmFsLmxvY2F0aW9uICYmIGRvVVJMQ2hhbmdlICkge1xyXG5cdFx0aWYoZ2xvYmFsLmxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgIT0gbmV3VVJMKSB7XHJcblx0XHRcdGdsb2JhbC5sb2NhdGlvbi5oYXNoID0gbmV3VVJMO1xyXG5cdFx0fSBlbHNlIGlmKHNlY3Rpb24uZHVwbGljYXRlIHx8ICFzZWN0aW9uLnVzZVVSTCkge1xyXG5cdFx0XHQvLyBDaGVjayBpZiBkdXBsaWNhdGUgaXMgc2V0LiBUaGUgY2hlY2sgaXMgZG9uZSBoZXJlIHNpbmNlLCBvbmhhc2hjaGFuZ2UgZXZlbnQgdHJpZ2dlcnMgXHJcblx0XHRcdC8vIG9ubHkgd2hlbiB1cmwgY2hhbmdlcyBhbmQgdGhlcmVmb3JlIGNhbm5vdCBjaGVjayB0byBhbGxvdyBkdXBsaWNhdGUvcmVwZWF0aW5nIHJvdXRlXHJcblxyXG5cdFx0XHQvLyBBZGRpdGlvbmFsbHkgY2hlY2sgaWYgdXNlVVJMIGlzIHNldCB0byBmYWxzZS4gSWYgbm90LCB0aGUgcm91dGUgaXMgbm90IHRyaWdnZXJlZCBieVxyXG5cdFx0XHQvLyB1cmwgY2hhbmdlc1xyXG5cdFx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XHJcblx0XHR9IFxyXG5cdH0gZWxzZSBpZiggIWdsb2JhbC5sb2NhdGlvbiB8fCAhZG9VUkxDaGFuZ2UgKSB7XHJcblx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XHJcblx0fVxyXG59O1xyXG5cclxucC5kb1JvdXRlID0gZnVuY3Rpb24ocm91dGVEYXRhLCBzZWN0aW9uLCBwYXRoKSB7XHJcblxyXG5cdHZhciBzID0gdGhpcy5zO1xyXG5cclxuXHQvLyBjaGVjayBpZiB0aGlzIGlzIGEgcmVkaXJlY3RcclxuXHRpZiggdHlwZW9mIHNlY3Rpb24gPT0gJ3N0cmluZycgKSB7XHJcblxyXG5cdFx0dGhpcy5nbyhzZWN0aW9uKTtcclxuXHR9IGVsc2UgeyBcclxuXHJcblx0XHRpZihyb3V0ZURhdGEucm91dGUgIT09IHRoaXMubGFzdFJlc29sdmVkUm91dGUgfHwgc2VjdGlvbi5kdXBsaWNhdGUpIHtcclxuXHJcblx0XHRcdHRoaXMubGFzdFJlc29sdmVkUm91dGUgPSByb3V0ZURhdGEucm91dGU7XHJcblxyXG5cdFx0XHQvLyBvdGhlcndpc2UgdHJlYXQgaXQgYXMgYSByZWd1bGFyIHNlY3Rpb25cclxuXHRcdFx0Ly8gaWYgdGhpcyBpcyBhIG9iamVjdCBkZWZpbml0aW9uIHZzIGEgc2VjdGlvbiBkZWZpbml0aW9uIChyZWd1bGFyIHNlY3Rpb24gb3IgYXJyYXkpXHJcblx0XHRcdHRoaXMuZW1pdCgncm91dGUnLCB7XHJcblx0XHRcdFx0c2VjdGlvbjogc2VjdGlvbi5zZWN0aW9uIHx8IHNlY3Rpb24sXHJcblx0XHRcdFx0cm91dGU6IHJvdXRlRGF0YSxcclxuXHRcdFx0XHRwYXRoOiBwYXRoXHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0gXHJcbn07XHJcblxyXG5wLmdldFJvdXRlRGF0YSA9IGZ1bmN0aW9uKHJvdXRlU3RyKSB7XHJcblxyXG5cdHZhciByb3V0ZURhdGEgPSB0aGlzLnJvdXRlci5tYXRjaChyb3V0ZVN0cik7XHJcblxyXG5cdGlmKHJvdXRlRGF0YSkge1xyXG5cdFx0dGhpcy5sYXN0Um91dGUgPSByb3V0ZURhdGEucm91dGU7XHJcblx0XHR0aGlzLmRlc3Ryb3lTdWIocm91dGVEYXRhLnJvdXRlKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByb3V0ZURhdGE7XHJcbn07XHJcblxyXG5wLmdldFNlY3Rpb24gPSBmdW5jdGlvbihyb3V0ZURhdGEpIHtcclxuXHJcblx0aWYocm91dGVEYXRhKSB7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuc1sgcm91dGVEYXRhLnJvdXRlIF07XHJcblx0fSBlbHNlIHtcclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn07XHJcblxyXG5wLnVzZVVSTCA9IGZ1bmN0aW9uKHNlY3Rpb24pIHtcclxuXHJcblx0cmV0dXJuIHNlY3Rpb24gJiYgXHJcblx0XHQgICAoIHNlY3Rpb24uc2VjdGlvbiA9PT0gdW5kZWZpbmVkIHx8ICAvLyBpZiB0aGlzIGlzIG5vdCBhIHNlY3Rpb24gZGVzY3JpcHRvciB1cGRhdGUgdXJsXHJcblx0XHQgICAoIHNlY3Rpb24uc2VjdGlvbiAmJiBzZWN0aW9uLnVzZVVSTCB8fCBzZWN0aW9uLnVzZVVSTCA9PT0gdW5kZWZpbmVkICkgKTsgLy9pcyBkZXNjcmlwdG9yIGFuZCBoYXMgdXNlVVJMIG9yIHVuZGVmaW5lZFxyXG59O1xyXG5cclxucC5vblVSTCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHR2YXIgcm91dGVTdHIgPSAnLyc7XHJcblx0dmFyIHJvdXRlRGF0YTtcclxuXHR2YXIgc2VjdGlvbjtcclxuXHJcblx0aWYoIGdsb2JhbC5sb2NhdGlvbiAmJiBnbG9iYWwubG9jYXRpb24uaGFzaCAhPT0gJycgKSB7XHJcblxyXG5cdFx0Ly8gaWYgd2UndmUgYWxyZWFkeSBsb29rZWQgYXQgdGhpcyB1cmwgdGhlbiBqdXN0IGdldCBvdXQgb2YgdGhpcyBmdW5jdGlvblxyXG5cdFx0aWYoZ2xvYmFsLmxvY2F0aW9uLmhhc2ggPT09IHRoaXMucmVzb2x2ZWQpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucmVzb2x2ZWQgPSBnbG9iYWwubG9jYXRpb24uaGFzaDtcclxuXHRcdHJvdXRlU3RyID0gZ2xvYmFsLmxvY2F0aW9uLmhhc2guc3Vic3RyKDEgKyB0aGlzLnMucG9zdEhhc2gubGVuZ3RoKTtcclxuXHR9XHJcblxyXG5cdHJvdXRlRGF0YSA9IHRoaXMuZ2V0Um91dGVEYXRhKHJvdXRlU3RyKSB8fCB0aGlzLmdldFJvdXRlRGF0YSgnNDA0Jyk7XHJcblx0c2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihyb3V0ZURhdGEpO1xyXG5cclxuXHQvLyBzZWUgaWYgd2UgY2FuIGRlZXAgbGluayBpbnRvIHRoaXMgc2VjdGlvbiAoZWl0aGVyIG5vcm1hbCBvciA0MDQgc2VjdGlvbilcclxuXHRpZiggdGhpcy51c2VVUkwoc2VjdGlvbikgKSB7XHJcblx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XHJcblx0Ly8gZWxzZSBjaGVjayBpZiB0aGVyZSdzIGEgNDA0IGlmIHNvIHRoZW4gZ28gdGhlcmVcclxuXHR9IGVsc2UgaWYoIHRoaXMuc1snNDA0J10gKXtcclxuXHJcblx0XHRyb3V0ZURhdGEgPSB0aGlzLmdldFJvdXRlRGF0YSgnNDA0Jyk7XHJcblx0XHRzZWN0aW9uID0gdGhpcy5nZXRTZWN0aW9uKHJvdXRlRGF0YSk7XHJcblx0XHR0aGlzLmRvUm91dGUocm91dGVEYXRhLCBzZWN0aW9uLCByb3V0ZVN0cik7XHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSBvbjtcbm1vZHVsZS5leHBvcnRzLm9uID0gb247XG5tb2R1bGUuZXhwb3J0cy5vZmYgPSBvZmY7XG5cbmZ1bmN0aW9uIG9uIChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcbiAgIWVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciAmJiAoZXZlbnQgPSAnb24nICsgZXZlbnQpO1xuICAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyIHx8IGVsZW1lbnQuYXR0YWNoRXZlbnQpLmNhbGwoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKTtcbiAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBvZmYgKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSkge1xuICAhZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyICYmIChldmVudCA9ICdvbicgKyBldmVudCk7XG4gIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIgfHwgZWxlbWVudC5kZXRhY2hFdmVudCkuY2FsbChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuICByZXR1cm4gY2FsbGJhY2s7XG59XG4iLCIhZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShlKTtlbHNle3ZhciBmO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/Zj13aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9mPWdsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKGY9c2VsZiksZi5yb3V0ZXM9ZSgpfX0oZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cbnZhciBsb2NhbFJvdXRlcyA9IFtdO1xuXG5cbi8qKlxuICogQ29udmVydCBwYXRoIHRvIHJvdXRlIG9iamVjdFxuICpcbiAqIEEgc3RyaW5nIG9yIFJlZ0V4cCBzaG91bGQgYmUgcGFzc2VkLFxuICogd2lsbCByZXR1cm4geyByZSwgc3JjLCBrZXlzfSBvYmpcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmcgLyBSZWdFeHB9IHBhdGhcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG52YXIgUm91dGUgPSBmdW5jdGlvbihwYXRoKXtcbiAgLy91c2luZyAnbmV3JyBpcyBvcHRpb25hbFxuXG4gIHZhciBzcmMsIHJlLCBrZXlzID0gW107XG5cbiAgaWYocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cCl7XG4gICAgcmUgPSBwYXRoO1xuICAgIHNyYyA9IHBhdGgudG9TdHJpbmcoKTtcbiAgfWVsc2V7XG4gICAgcmUgPSBwYXRoVG9SZWdFeHAocGF0aCwga2V5cyk7XG4gICAgc3JjID0gcGF0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gIFx0IHJlOiByZSxcbiAgXHQgc3JjOiBwYXRoLnRvU3RyaW5nKCksXG4gIFx0IGtleXM6IGtleXNcbiAgfVxufTtcblxuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLFxuICogcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IHNob3VsZCBiZSBwYXNzZWQsXG4gKiB3aGljaCB3aWxsIGNvbnRhaW4gdGhlIHBsYWNlaG9sZGVyXG4gKiBrZXkgbmFtZXMuIEZvciBleGFtcGxlIFwiL3VzZXIvOmlkXCIgd2lsbFxuICogdGhlbiBjb250YWluIFtcImlkXCJdLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gcGF0aFxuICogQHBhcmFtICB7QXJyYXl9IGtleXNcbiAqIEByZXR1cm4ge1JlZ0V4cH1cbiAqL1xudmFyIHBhdGhUb1JlZ0V4cCA9IGZ1bmN0aW9uIChwYXRoLCBrZXlzKSB7XG5cdHBhdGggPSBwYXRoXG5cdFx0LmNvbmNhdCgnLz8nKVxuXHRcdC5yZXBsYWNlKC9cXC9cXCgvZywgJyg/Oi8nKVxuXHRcdC5yZXBsYWNlKC8oXFwvKT8oXFwuKT86KFxcdyspKD86KFxcKC4qP1xcKSkpPyhcXD8pP3xcXCovZywgZnVuY3Rpb24oXywgc2xhc2gsIGZvcm1hdCwga2V5LCBjYXB0dXJlLCBvcHRpb25hbCl7XG5cdFx0XHRpZiAoXyA9PT0gXCIqXCIpe1xuXHRcdFx0XHRrZXlzLnB1c2godW5kZWZpbmVkKTtcblx0XHRcdFx0cmV0dXJuIF87XG5cdFx0XHR9XG5cblx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdFx0c2xhc2ggPSBzbGFzaCB8fCAnJztcblx0XHRcdHJldHVybiAnJ1xuXHRcdFx0XHQrIChvcHRpb25hbCA/ICcnIDogc2xhc2gpXG5cdFx0XHRcdCsgJyg/Oidcblx0XHRcdFx0KyAob3B0aW9uYWwgPyBzbGFzaCA6ICcnKVxuXHRcdFx0XHQrIChmb3JtYXQgfHwgJycpICsgKGNhcHR1cmUgfHwgJyhbXi9dKz8pJykgKyAnKSdcblx0XHRcdFx0KyAob3B0aW9uYWwgfHwgJycpO1xuXHRcdH0pXG5cdFx0LnJlcGxhY2UoLyhbXFwvLl0pL2csICdcXFxcJDEnKVxuXHRcdC5yZXBsYWNlKC9cXCovZywgJyguKiknKTtcblx0cmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcGF0aCArICckJywgJ2knKTtcbn07XG5cbi8qKlxuICogQXR0ZW1wdCB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVxdWVzdCB0b1xuICogb25lIG9mIHRoZSByb3V0ZXMuIFdoZW4gc3VjY2Vzc2Z1bFxuICogYSAge2ZuLCBwYXJhbXMsIHNwbGF0c30gb2JqIGlzIHJldHVybmVkXG4gKlxuICogQHBhcmFtICB7QXJyYXl9IHJvdXRlc1xuICogQHBhcmFtICB7U3RyaW5nfSB1cmlcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xudmFyIG1hdGNoID0gZnVuY3Rpb24gKHJvdXRlcywgdXJpLCBzdGFydEF0KSB7XG5cdHZhciBjYXB0dXJlcywgaSA9IHN0YXJ0QXQgfHwgMDtcblxuXHRmb3IgKHZhciBsZW4gPSByb3V0ZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcblx0XHR2YXIgcm91dGUgPSByb3V0ZXNbaV0sXG5cdFx0ICAgIHJlID0gcm91dGUucmUsXG5cdFx0ICAgIGtleXMgPSByb3V0ZS5rZXlzLFxuXHRcdCAgICBzcGxhdHMgPSBbXSxcblx0XHQgICAgcGFyYW1zID0ge307XG5cblx0XHRpZiAoY2FwdHVyZXMgPSB1cmkubWF0Y2gocmUpKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMSwgbGVuID0gY2FwdHVyZXMubGVuZ3RoOyBqIDwgbGVuOyArK2opIHtcblx0XHRcdFx0dmFyIGtleSA9IGtleXNbai0xXSxcblx0XHRcdFx0XHR2YWwgPSB0eXBlb2YgY2FwdHVyZXNbal0gPT09ICdzdHJpbmcnXG5cdFx0XHRcdFx0XHQ/IHVuZXNjYXBlKGNhcHR1cmVzW2pdKVxuXHRcdFx0XHRcdFx0OiBjYXB0dXJlc1tqXTtcblx0XHRcdFx0aWYgKGtleSkge1xuXHRcdFx0XHRcdHBhcmFtc1trZXldID0gdmFsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHNwbGF0cy5wdXNoKHZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBhcmFtczogcGFyYW1zLFxuXHRcdFx0XHRzcGxhdHM6IHNwbGF0cyxcblx0XHRcdFx0cm91dGU6IHJvdXRlLnNyYyxcblx0XHRcdFx0bmV4dDogaSArIDFcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIERlZmF1bHQgXCJub3JtYWxcIiByb3V0ZXIgY29uc3RydWN0b3IuXG4gKiBhY2NlcHRzIHBhdGgsIGZuIHR1cGxlcyB2aWEgYWRkUm91dGVcbiAqIHJldHVybnMge2ZuLCBwYXJhbXMsIHNwbGF0cywgcm91dGV9XG4gKiAgdmlhIG1hdGNoXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbnZhciBSb3V0ZXIgPSBmdW5jdGlvbigpe1xuICAvL3VzaW5nICduZXcnIGlzIG9wdGlvbmFsXG4gIHJldHVybiB7XG4gICAgcm91dGVzOiBbXSxcbiAgICByb3V0ZU1hcCA6IHt9LFxuICAgIGFkZFJvdXRlOiBmdW5jdGlvbihwYXRoLCBmbil7XG4gICAgICBpZiAoIXBhdGgpIHRocm93IG5ldyBFcnJvcignIHJvdXRlIHJlcXVpcmVzIGEgcGF0aCcpO1xuICAgICAgaWYgKCFmbikgdGhyb3cgbmV3IEVycm9yKCcgcm91dGUgJyArIHBhdGgudG9TdHJpbmcoKSArICcgcmVxdWlyZXMgYSBjYWxsYmFjaycpO1xuXG4gICAgICB2YXIgcm91dGUgPSBSb3V0ZShwYXRoKTtcbiAgICAgIHJvdXRlLmZuID0gZm47XG5cbiAgICAgIHRoaXMucm91dGVzLnB1c2gocm91dGUpO1xuICAgICAgdGhpcy5yb3V0ZU1hcFtwYXRoXSA9IGZuO1xuICAgIH0sXG5cbiAgICBtYXRjaDogZnVuY3Rpb24ocGF0aG5hbWUsIHN0YXJ0QXQpe1xuICAgICAgdmFyIHJvdXRlID0gbWF0Y2godGhpcy5yb3V0ZXMsIHBhdGhuYW1lLCBzdGFydEF0KTtcbiAgICAgIGlmKHJvdXRlKXtcbiAgICAgICAgcm91dGUuZm4gPSB0aGlzLnJvdXRlTWFwW3JvdXRlLnJvdXRlXTtcbiAgICAgICAgcm91dGUubmV4dCA9IHRoaXMubWF0Y2guYmluZCh0aGlzLCBwYXRobmFtZSwgcm91dGUubmV4dClcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9XG4gIH1cbn07XG5cblJvdXRlci5Sb3V0ZSA9IFJvdXRlXG5Sb3V0ZXIucGF0aFRvUmVnRXhwID0gcGF0aFRvUmVnRXhwXG5Sb3V0ZXIubWF0Y2ggPSBtYXRjaFxuLy8gYmFjayBjb21wYXRcblJvdXRlci5Sb3V0ZXIgPSBSb3V0ZXJcblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZXJcblxufSx7fV19LHt9LFsxXSlcbigxKVxufSk7IiwiZnVuY3Rpb24gbWVkaWF0b3IoKSB7XG5cbiAgaWYoISggdGhpcyBpbnN0YW5jZW9mIG1lZGlhdG9yICkpIHtcblxuICAgIHZhciByVmFsID0gT2JqZWN0LmNyZWF0ZShtZWRpYXRvci5wcm90b3R5cGUpO1xuICAgIG1lZGlhdG9yLmFwcGx5KHJWYWwsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHJWYWw7XG4gIH1cblxuICB0aGlzLml0ZW1zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbn1cblxubWVkaWF0b3IucHJvdG90eXBlID0ge1xuXG4gIGluaXQ6IGZ1bmN0aW9uKGRhdGEsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxBbGwoJ2luaXQnLCBkYXRhLCBkb25lKTtcbiAgfSxcblxuICByZXNpemU6IGZ1bmN0aW9uKHcsIGgpIHtcblxuICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IHRoaXMuaXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblxuICAgICAgaWYodHlwZW9mIHRoaXMuaXRlbXNbIGkgXS5yZXNpemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5pdGVtc1sgaSBdLnJlc2l6ZSh3LCBoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgYW5pbWF0ZUluOiBmdW5jdGlvbihkYXRhLCBkb25lKSB7XG4gICAgdGhpcy5jYWxsQWxsKCdhbmltYXRlSW4nLCBkYXRhLCBkb25lKTsgICAgXG4gIH0sXG5cbiAgYW5pbWF0ZU91dDogZnVuY3Rpb24oZGF0YSwgZG9uZSkge1xuICAgIHRoaXMuY2FsbEFsbCgnYW5pbWF0ZU91dCcsIGRhdGEsIGRvbmUpO1xuICB9LFxuXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uKGRhdGEsIGRvbmUpIHtcbiAgICB0aGlzLmNhbGxBbGwoJ2Rlc3Ryb3knLCBkYXRhLCBkb25lKTtcbiAgfSxcblxuICBjYWxsQWxsOiBmdW5jdGlvbihmdW5jLCBkYXRhLCBkb25lKSB7XG5cbiAgICB2YXIgbnVtQ2FsbGVkID0gMDtcbiAgICB2YXIgbnVtVG9DYWxsID0gMDtcbiAgICB2YXIgaTtcbiAgICB2YXIgbGVuO1xuXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKHNlY3Rpb24pIHtcblxuICAgICAgaWYodHlwZW9mIHNlY3Rpb25bIGZ1bmMgXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBudW1Ub0NhbGwrKztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBmdW5jdGlvbnMgdG8gY2FsbCBzaW1wbHkganVzdCByZXR1cm5cbiAgICBpZihudW1Ub0NhbGwgPT09IDApIHtcblxuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbihzZWN0aW9uKSB7XG5cbiAgICAgICAgaWYodHlwZW9mIHNlY3Rpb25bIGZ1bmMgXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHNlY3Rpb25bIGZ1bmMgXS5jYWxsKHNlY3Rpb24sIGRhdGEsIG9uU2VjdGlvbkRvbmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNlY3Rpb25Eb25lKCkge1xuXG4gICAgICBpZigrK251bUNhbGxlZCA9PT0gbnVtVG9DYWxsKSB7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7IiwiZnVuY3Rpb24gVmlld01hbmFnZXIoIHNldHRpbmdzICkge1xuXG4gIGlmKCAhKCB0aGlzIGluc3RhbmNlb2YgVmlld01hbmFnZXIgKSApIHtcbiAgICByZXR1cm4gbmV3IFZpZXdNYW5hZ2VyKCBzZXR0aW5ncyApO1xuICB9XG5cbiAgdmFyIHMgPSB0aGlzLnMgPSBzZXR0aW5ncyB8fCB7fTtcblxuICBzLm92ZXJsYXAgPSBzLm92ZXJsYXAgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzLm92ZXJsYXA7XG4gIHMud2lkdGggPSBzLndpZHRoIHx8IDk4MDtcbiAgcy5oZWlnaHQgPSBzLmhlaWdodCB8fCA1NzA7XG5cbiAgdGhpcy5jQ29udGVudCA9IG51bGw7XG4gIHRoaXMubkNvbnRlbnQgPSBudWxsO1xufVxuXG52YXIgcCA9IFZpZXdNYW5hZ2VyLnByb3RvdHlwZSA9IHtcblxuICBzaG93OiBmdW5jdGlvbiggY29udGVudCwgZGF0YSwgb25Db21wbGV0ZSApIHtcblxuICAgIC8vIGNoZWNrIGlmIGRhdGEgd2FzIHBhc3NlZCBpblxuICAgIGlmKCBvbkNvbXBsZXRlID09PSB1bmRlZmluZWQgJiZcbiAgICAgIHR5cGVvZiBkYXRhID09ICdmdW5jdGlvbicgKSB7XG5cbiAgICAgIG9uQ29tcGxldGUgPSBkYXRhO1xuICAgICAgZGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblxuICAgIGlmKCBjb250ZW50ICE9IHRoaXMubkNvbnRlbnQgJiYgY29udGVudCAhPSB0aGlzLmNDb250ZW50ICkge1xuXG4gICAgICBpZiggdGhpcy5uQ29udGVudCAmJiB0aGlzLm5Db250ZW50LmRlc3Ryb3kgKVxuICAgICAgICB0aGlzLm5Db250ZW50LmRlc3Ryb3kodGhpcy5kYXRhLCBmdW5jdGlvbigpIHsgfSk7XG5cbiAgICAgIHRoaXMubkNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICBpZiggY29udGVudC5pbml0ICkge1xuXG4gICAgICAgIGNvbnRlbnQuaW5pdCggdGhpcy5kYXRhLCB0aGlzLnN3YXAuYmluZCggdGhpcywgdGhpcy5uQ29udGVudCwgb25Db21wbGV0ZSApICk7IFxuICAgICAgfSBlbHNlIHtcblxuICAgICAgICB0aGlzLnN3YXAoIHRoaXMubkNvbnRlbnQsIG9uQ29tcGxldGUgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY2xlYXI6IGZ1bmN0aW9uKCBvbkNvbXBsZXRlICkge1xuXG4gICAgaWYoIHRoaXMubkNvbnRlbnQgJiYgdGhpcy5uQ29udGVudC5kZXN0cm95ICkge1xuICAgICAgdGhpcy5uQ29udGVudC5kZXN0cm95KCB0aGlzLmRhdGEsIGZ1bmN0aW9uKCkgeyB9ICk7XG4gICAgfVxuXG4gICAgaWYoIHRoaXMuY0NvbnRlbnQgKSB7XG5cbiAgICAgIHZhciBvbk9sZE91dCA9IGZ1bmN0aW9uKCBvbGRDb250ZW50ICkge1xuXG4gICAgICAgIGlmKCBvbGRDb250ZW50LmRlc3Ryb3kgKSB7XG4gICAgICAgICAgb2xkQ29udGVudC5kZXN0cm95KCB0aGlzLmRhdGEgLCBmdW5jdGlvbigpIHsgfSApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIG9uQ29tcGxldGUgKSB7XG4gICAgICAgICAgb25Db21wbGV0ZSggb2xkQ29udGVudCApO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQoIHRoaXMsIHRoaXMuY0NvbnRlbnQgKTtcblxuICAgICAgLy8gbm93IHRha2Ugb3V0IGNvdW50ZW50XG4gICAgICBpZiggdGhpcy5jQ29udGVudC5hbmltYXRlT3V0ICkge1xuICAgICAgICB0aGlzLmNDb250ZW50LmFuaW1hdGVPdXQoIHRoaXMuZGF0YSAsIG9uT2xkT3V0ICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbk9sZE91dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZXNpemU6IGZ1bmN0aW9uKCB3aWR0aCwgaGVpZ2h0ICkge1xuXG4gICAgdmFyIHMgPSB0aGlzLnM7XG5cbiAgICBzLndpZHRoID0gd2lkdGg7XG4gICAgcy5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICBpZiggdGhpcy5jQ29udGVudCAmJiB0aGlzLmNDb250ZW50LnJlc2l6ZSApXG4gICAgICB0aGlzLmNDb250ZW50LnJlc2l6ZSggd2lkdGgsIGhlaWdodCApO1xuICB9LFxuXG4gIHN3YXA6IGZ1bmN0aW9uKCBuZXdDb250ZW50LCBvbkNvbXBsZXRlICkge1xuXG4gICAgaWYoIG5ld0NvbnRlbnQgPT0gdGhpcy5uQ29udGVudCApIHtcblxuICAgICAgdmFyIHMgPSB0aGlzLnM7XG4gICAgICB2YXIgb2xkQ29udGVudCA9IHRoaXMuY0NvbnRlbnQ7XG4gICAgICB2YXIgb25PbGRPdXQ7XG5cbiAgICAgIHZhciBvbk5ld0luID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYoIHMub25FbmRBbmlJbiApIHtcbiAgICAgICAgICBzLm9uRW5kQW5pSW4oIG5ld0NvbnRlbnQsIG9sZENvbnRlbnQgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBvbkNvbXBsZXRlICkge1xuICAgICAgICAgIG9uQ29tcGxldGUoIG5ld0NvbnRlbnQsIG9sZENvbnRlbnQgKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGJyaW5nSW5OZXdDb250ZW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYoIHMub25TdGFydEFuaUluICkge1xuICAgICAgICAgIHMub25TdGFydEFuaUluKCBuZXdDb250ZW50LCB0aGlzLmNDb250ZW50ICk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNDb250ZW50ID0gbmV3Q29udGVudDtcbiAgICAgICAgdGhpcy5uQ29udGVudCA9IG51bGw7XG5cbiAgICAgICAgaWYoIG5ld0NvbnRlbnQuYW5pbWF0ZUluICkge1xuICAgICAgICAgIG5ld0NvbnRlbnQuYW5pbWF0ZUluKCB0aGlzLmRhdGEsIG9uTmV3SW4gKTsgIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9uTmV3SW4oKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKCB0aGlzICk7XG5cbiAgICAgIHZhciB0YWtlT3V0T2xkQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmKCBzLm9uU3RhcnRBbmlPdXQgKSB7XG4gICAgICAgICAgcy5vblN0YXJ0QW5pT3V0KCBuZXdDb250ZW50LCBvbGRDb250ZW50ICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGVyZSdzIGFuIGFuaW1hdGVPdXQgZnVuY3Rpb24gZXhlY3V0ZSBpdCBvbiBvbGRDb250ZW50XG4gICAgICAgIGlmKCBvbGRDb250ZW50LmFuaW1hdGVPdXQgKSB7XG4gICAgICAgICAgb2xkQ29udGVudC5hbmltYXRlT3V0KCB0aGlzLmRhdGEsIG9uT2xkT3V0ICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb25PbGRPdXQoKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKCB0aGlzICk7XG5cbiAgICAgIHZhciBkZXN0cm95T2xkQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmKCBzLm9uRW5kQW5pT3V0ICkge1xuICAgICAgICAgIHMub25FbmRBbmlPdXQoIG5ld0NvbnRlbnQsIG9sZENvbnRlbnQgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCBvbGRDb250ZW50LmRlc3Ryb3kgKSB7XG4gICAgICAgICAgb2xkQ29udGVudC5kZXN0cm95KCB0aGlzLmRhdGEsIGZ1bmN0aW9uKCkgeyB9ICk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCggdGhpcyApO1xuXG5cbiAgICAgIC8vIHJlc2l6ZSB0aGUgbmV3Q29udGVudCBpZiBpdCBoYXMgYSByZXNpemUgbWV0aG9kXG4gICAgICBpZiggbmV3Q29udGVudC5yZXNpemUgKSB7XG4gICAgICAgIG5ld0NvbnRlbnQucmVzaXplKCBzLndpZHRoLCBzLmhlaWdodCApO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiB0aGVyZSdzIGNvbnRlbnQgb24gc2NyZWVuIGFscmVhZHlcbiAgICAgIGlmKCB0aGlzLmNDb250ZW50ICkge1xuXG4gICAgICAgIGlmKCBzLm92ZXJsYXAgKSB7XG5cbiAgICAgICAgICBvbk9sZE91dCA9IGRlc3Ryb3lPbGRDb250ZW50O1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgb25PbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgZGVzdHJveU9sZENvbnRlbnQoKTtcbiAgICAgICAgICAgIGJyaW5nSW5OZXdDb250ZW50KCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgdG8gbm90aWZ5IHRoYXQgd2UndmUgc3RhcnRlZCBhbmltYXRpbmcgb3V0XG4gICAgICAgIHRha2VPdXRPbGRDb250ZW50KCk7XG5cbiAgICAgICAgaWYoIHMub3ZlcmxhcCApIHtcblxuICAgICAgICAgIGJyaW5nSW5OZXdDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIC8vIGVsc2Ugd2UgZG9uJ3QgaGF2ZSBjdXJyZW50IGNvbnRlbnQganVzdCBicmluZyBpbiB0aGUgbmV3XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGJyaW5nSW5OZXdDb250ZW50KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocCwgJ292ZXJsYXAnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucy5vdmVybGFwO1xuICB9LFxuXG4gIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLnMub3ZlcmxhcCA9IHZhbHVlO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3TWFuYWdlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IG9uO1xubW9kdWxlLmV4cG9ydHMub24gPSBvbjtcbm1vZHVsZS5leHBvcnRzLm9mZiA9IG9mZjtcblxuZnVuY3Rpb24gb24gKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSkge1xuXG4gIGlmKCBlbGVtZW50IGluc3RhbmNlb2YgTm9kZUxpc3QgKSB7XG5cbiAgICBmb3IoIHZhciBpID0gMCwgbGVuID0gZWxlbWVudC5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblxuICAgICAgb25lT24oZWxlbWVudFsgaSBdLCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuICAgIH1cbiAgfSBlbHNlIHtcblxuICAgIG9uZU9uKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSk7ICBcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gb2ZmIChlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcblxuICBpZiggZWxlbWVudCBpbnN0YW5jZW9mIE5vZGVMaXN0ICkge1xuXG4gICAgZm9yKCB2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnQubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cbiAgICAgIG9uZU9mZihlbGVtZW50WyBpIF0sIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuXG4gICAgb25lT2ZmKCBlbGVtZW50LCBldmVudCwgY2FsbGJhY2ssIGNhcHR1cmUgKTtcbiAgfVxuICBcbiAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBvbmVPbiAoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cbiAgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciB8fCBlbGVtZW50LmF0dGFjaEV2ZW50KS5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSk7XG59XG5cbmZ1bmN0aW9uIG9uZU9mZiAoZWxlbWVudCwgZXZlbnQsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG5cbiAgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCBlbGVtZW50LmRldGFjaEV2ZW50KS5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgY2FwdHVyZSk7XG59IiwiLypcbiAqIGRldGVjdC1kb20tcmVhZHlcbiAqIGh0dHA6Ly9naXRodWIuYW1leHB1Yi5jb20vbW9kdWxlcy9kZXRlY3QtZG9tLXJlYWR5XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzIEFtZXhQdWIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9kZXRlY3QtZG9tLXJlYWR5Jyk7XG4iLCIvKlxuICogZGV0ZWN0LWRvbS1yZWFkeVxuICogaHR0cDovL2dpdGh1Yi5hbWV4cHViLmNvbS9tb2R1bGVzXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzIEFtZXggUHViLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgLy8gaWYgKCB0aGlzLnJlYWR5Qm91bmQgKSB7cmV0dXJuO31cbiAgICAvLyB0aGlzLnJlYWR5Qm91bmQgPSB0cnVlO1xuXG4gICAgaWYoZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy9yZW1vdmUgbGlzdGVuZXJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0sIGZhbHNlICk7XG4gICAgfVxuICAgIGVsc2UgaWYoZG9jdW1lbnQuYXR0YWNoRXZlbnQpe1xuICAgICAgICBkb2N1bWVudC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgKSB7XG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgJiYgd2luZG93ID09PSB3aW5kb3cudG9wICl7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgLy8gSWYgSUUgaXMgdXNlZCwgdXNlIHRoZSB0cmljayBieSBEaWVnbyBQZXJpbmlcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vamF2YXNjcmlwdC5ud2JveC5jb20vSUVDb250ZW50TG9hZGVkL1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbChcImxlZnRcIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoKCBlcnJvciApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFuZCBleGVjdXRlIGFueSB3YWl0aW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn07IiwiXG4vKipcbiAqIEV4cG9zZSBgcGFyc2VgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7XG5cbi8qKlxuICogVGVzdHMgZm9yIGJyb3dzZXIgc3VwcG9ydC5cbiAqL1xuXG52YXIgaW5uZXJIVE1MQnVnID0gZmFsc2U7XG52YXIgYnVnVGVzdERpdjtcbmlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gIGJ1Z1Rlc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgLy8gU2V0dXBcbiAgYnVnVGVzdERpdi5pbm5lckhUTUwgPSAnICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj1cIi9hXCI+YTwvYT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPic7XG4gIC8vIE1ha2Ugc3VyZSB0aGF0IGxpbmsgZWxlbWVudHMgZ2V0IHNlcmlhbGl6ZWQgY29ycmVjdGx5IGJ5IGlubmVySFRNTFxuICAvLyBUaGlzIHJlcXVpcmVzIGEgd3JhcHBlciBlbGVtZW50IGluIElFXG4gIGlubmVySFRNTEJ1ZyA9ICFidWdUZXN0RGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJykubGVuZ3RoO1xuICBidWdUZXN0RGl2ID0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIFdyYXAgbWFwIGZyb20ganF1ZXJ5LlxuICovXG5cbnZhciBtYXAgPSB7XG4gIGxlZ2VuZDogWzEsICc8ZmllbGRzZXQ+JywgJzwvZmllbGRzZXQ+J10sXG4gIHRyOiBbMiwgJzx0YWJsZT48dGJvZHk+JywgJzwvdGJvZHk+PC90YWJsZT4nXSxcbiAgY29sOiBbMiwgJzx0YWJsZT48dGJvZHk+PC90Ym9keT48Y29sZ3JvdXA+JywgJzwvY29sZ3JvdXA+PC90YWJsZT4nXSxcbiAgLy8gZm9yIHNjcmlwdC9saW5rL3N0eWxlIHRhZ3MgdG8gd29yayBpbiBJRTYtOCwgeW91IGhhdmUgdG8gd3JhcFxuICAvLyBpbiBhIGRpdiB3aXRoIGEgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyIGluIGZyb250LCBoYSFcbiAgX2RlZmF1bHQ6IGlubmVySFRNTEJ1ZyA/IFsxLCAnWDxkaXY+JywgJzwvZGl2PiddIDogWzAsICcnLCAnJ11cbn07XG5cbm1hcC50ZCA9XG5tYXAudGggPSBbMywgJzx0YWJsZT48dGJvZHk+PHRyPicsICc8L3RyPjwvdGJvZHk+PC90YWJsZT4nXTtcblxubWFwLm9wdGlvbiA9XG5tYXAub3B0Z3JvdXAgPSBbMSwgJzxzZWxlY3QgbXVsdGlwbGU9XCJtdWx0aXBsZVwiPicsICc8L3NlbGVjdD4nXTtcblxubWFwLnRoZWFkID1cbm1hcC50Ym9keSA9XG5tYXAuY29sZ3JvdXAgPVxubWFwLmNhcHRpb24gPVxubWFwLnRmb290ID0gWzEsICc8dGFibGU+JywgJzwvdGFibGU+J107XG5cbm1hcC5wb2x5bGluZSA9XG5tYXAuZWxsaXBzZSA9XG5tYXAucG9seWdvbiA9XG5tYXAuY2lyY2xlID1cbm1hcC50ZXh0ID1cbm1hcC5saW5lID1cbm1hcC5wYXRoID1cbm1hcC5yZWN0ID1cbm1hcC5nID0gWzEsICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCI+JywnPC9zdmc+J107XG5cbi8qKlxuICogUGFyc2UgYGh0bWxgIGFuZCByZXR1cm4gYSBET00gTm9kZSBpbnN0YW5jZSwgd2hpY2ggY291bGQgYmUgYSBUZXh0Tm9kZSxcbiAqIEhUTUwgRE9NIE5vZGUgb2Ygc29tZSBraW5kICg8ZGl2PiBmb3IgZXhhbXBsZSksIG9yIGEgRG9jdW1lbnRGcmFnbWVudFxuICogaW5zdGFuY2UsIGRlcGVuZGluZyBvbiB0aGUgY29udGVudHMgb2YgdGhlIGBodG1sYCBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgLSBIVE1MIHN0cmluZyB0byBcImRvbWlmeVwiXG4gKiBAcGFyYW0ge0RvY3VtZW50fSBkb2MgLSBUaGUgYGRvY3VtZW50YCBpbnN0YW5jZSB0byBjcmVhdGUgdGhlIE5vZGUgZm9yXG4gKiBAcmV0dXJuIHtET01Ob2RlfSB0aGUgVGV4dE5vZGUsIERPTSBOb2RlLCBvciBEb2N1bWVudEZyYWdtZW50IGluc3RhbmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShodG1sLCBkb2MpIHtcbiAgaWYgKCdzdHJpbmcnICE9IHR5cGVvZiBodG1sKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdHJpbmcgZXhwZWN0ZWQnKTtcblxuICAvLyBkZWZhdWx0IHRvIHRoZSBnbG9iYWwgYGRvY3VtZW50YCBvYmplY3RcbiAgaWYgKCFkb2MpIGRvYyA9IGRvY3VtZW50O1xuXG4gIC8vIHRhZyBuYW1lXG4gIHZhciBtID0gLzwoW1xcdzpdKykvLmV4ZWMoaHRtbCk7XG4gIGlmICghbSkgcmV0dXJuIGRvYy5jcmVhdGVUZXh0Tm9kZShodG1sKTtcblxuICBodG1sID0gaHRtbC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7IC8vIFJlbW92ZSBsZWFkaW5nL3RyYWlsaW5nIHdoaXRlc3BhY2VcblxuICB2YXIgdGFnID0gbVsxXTtcblxuICAvLyBib2R5IHN1cHBvcnRcbiAgaWYgKHRhZyA9PSAnYm9keScpIHtcbiAgICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnaHRtbCcpO1xuICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVsLnJlbW92ZUNoaWxkKGVsLmxhc3RDaGlsZCk7XG4gIH1cblxuICAvLyB3cmFwIG1hcFxuICB2YXIgd3JhcCA9IG1hcFt0YWddIHx8IG1hcC5fZGVmYXVsdDtcbiAgdmFyIGRlcHRoID0gd3JhcFswXTtcbiAgdmFyIHByZWZpeCA9IHdyYXBbMV07XG4gIHZhciBzdWZmaXggPSB3cmFwWzJdO1xuICB2YXIgZWwgPSBkb2MuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsLmlubmVySFRNTCA9IHByZWZpeCArIGh0bWwgKyBzdWZmaXg7XG4gIHdoaWxlIChkZXB0aC0tKSBlbCA9IGVsLmxhc3RDaGlsZDtcblxuICAvLyBvbmUgZWxlbWVudFxuICBpZiAoZWwuZmlyc3RDaGlsZCA9PSBlbC5sYXN0Q2hpbGQpIHtcbiAgICByZXR1cm4gZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XG4gIH1cblxuICAvLyBzZXZlcmFsIGVsZW1lbnRzXG4gIHZhciBmcmFnbWVudCA9IGRvYy5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCkpO1xuICB9XG5cbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuIixudWxsLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfVxuICAgICAgdGhyb3cgVHlwZUVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgbGVuOyBpKyspXG4gICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXG4gICAgbGlzdGVuZXJzID0gaGFuZGxlci5zbGljZSgpO1xuICAgIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKVxuICAgICAgbGlzdGVuZXJzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIG07XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgaWYgKHRoaXMuX2V2ZW50cy5uZXdMaXN0ZW5lcilcbiAgICB0aGlzLmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgaXNGdW5jdGlvbihsaXN0ZW5lci5saXN0ZW5lcikgP1xuICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA6IGxpc3RlbmVyKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAvLyBPcHRpbWl6ZSB0aGUgY2FzZSBvZiBvbmUgbGlzdGVuZXIuIERvbid0IG5lZWQgdGhlIGV4dHJhIGFycmF5IG9iamVjdC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgZWxzZSBpZiAoaXNPYmplY3QodGhpcy5fZXZlbnRzW3R5cGVdKSlcbiAgICAvLyBJZiB3ZSd2ZSBhbHJlYWR5IGdvdCBhbiBhcnJheSwganVzdCBhcHBlbmQuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlXG4gICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgdGhpcy5fZXZlbnRzW3R5cGVdID0gW3RoaXMuX2V2ZW50c1t0eXBlXSwgbGlzdGVuZXJdO1xuXG4gIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pICYmICF0aGlzLl9ldmVudHNbdHlwZV0ud2FybmVkKSB7XG4gICAgdmFyIG07XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9tYXhMaXN0ZW5lcnMpKSB7XG4gICAgICBtID0gdGhpcy5fbWF4TGlzdGVuZXJzO1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgaWYgKG0gJiYgbSA+IDAgJiYgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCA+IG0pIHtcbiAgICAgIHRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5lcnJvcignKG5vZGUpIHdhcm5pbmc6IHBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgJyArXG4gICAgICAgICAgICAgICAgICAgICdsZWFrIGRldGVjdGVkLiAlZCBsaXN0ZW5lcnMgYWRkZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAnVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXQuJyxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLmxlbmd0aCk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUudHJhY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm90IHN1cHBvcnRlZCBpbiBJRSAxMFxuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgaWYgKCFpc0Z1bmN0aW9uKGxpc3RlbmVyKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ2xpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuXG4gIHZhciBmaXJlZCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGcoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBnKTtcblxuICAgIGlmICghZmlyZWQpIHtcbiAgICAgIGZpcmVkID0gdHJ1ZTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgZy5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICB0aGlzLm9uKHR5cGUsIGcpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gZW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWRcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbGlzdCwgcG9zaXRpb24sIGxlbmd0aCwgaTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXR1cm4gdGhpcztcblxuICBsaXN0ID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuICBsZW5ndGggPSBsaXN0Lmxlbmd0aDtcbiAgcG9zaXRpb24gPSAtMTtcblxuICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHxcbiAgICAgIChpc0Z1bmN0aW9uKGxpc3QubGlzdGVuZXIpICYmIGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG5cbiAgfSBlbHNlIGlmIChpc09iamVjdChsaXN0KSkge1xuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tID4gMDspIHtcbiAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fFxuICAgICAgICAgIChsaXN0W2ldLmxpc3RlbmVyICYmIGxpc3RbaV0ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSkge1xuICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbiA8IDApXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgbGlzdC5sZW5ndGggPSAwO1xuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpXG4gICAgICB0aGlzLmVtaXQoJ3JlbW92ZUxpc3RlbmVyJywgdHlwZSwgbGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGtleSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIC8vIG5vdCBsaXN0ZW5pbmcgZm9yIHJlbW92ZUxpc3RlbmVyLCBubyBuZWVkIHRvIGVtaXRcbiAgaWYgKCF0aGlzLl9ldmVudHMucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICAgIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBmb3IgKGtleSBpbiB0aGlzLl9ldmVudHMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoa2V5KTtcbiAgICB9XG4gICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzRnVuY3Rpb24obGlzdGVuZXJzKSkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBMSUZPIG9yZGVyXG4gICAgd2hpbGUgKGxpc3RlbmVycy5sZW5ndGgpXG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tsaXN0ZW5lcnMubGVuZ3RoIC0gMV0pO1xuICB9XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCF0aGlzLl9ldmVudHMgfHwgIXRoaXMuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSBbXTtcbiAgZWxzZSBpZiAoaXNGdW5jdGlvbih0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIHJldCA9IFt0aGlzLl9ldmVudHNbdHlwZV1dO1xuICBlbHNlXG4gICAgcmV0ID0gdGhpcy5fZXZlbnRzW3R5cGVdLnNsaWNlKCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgdmFyIHJldDtcbiAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1t0eXBlXSlcbiAgICByZXQgPSAwO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKGVtaXR0ZXIuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gMTtcbiAgZWxzZVxuICAgIHJldCA9IGVtaXR0ZXIuX2V2ZW50c1t0eXBlXS5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypnbG9iYWxzIEhhbmRsZWJhcnM6IHRydWUgKi9cbnZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy5ydW50aW1lXCIpW1wiZGVmYXVsdFwiXTtcblxuLy8gQ29tcGlsZXIgaW1wb3J0c1xudmFyIEFTVCA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvY29tcGlsZXIvYXN0XCIpW1wiZGVmYXVsdFwiXTtcbnZhciBQYXJzZXIgPSByZXF1aXJlKFwiLi9oYW5kbGViYXJzL2NvbXBpbGVyL2Jhc2VcIikucGFyc2VyO1xudmFyIHBhcnNlID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy9jb21waWxlci9iYXNlXCIpLnBhcnNlO1xudmFyIENvbXBpbGVyID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy9jb21waWxlci9jb21waWxlclwiKS5Db21waWxlcjtcbnZhciBjb21waWxlID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy9jb21waWxlci9jb21waWxlclwiKS5jb21waWxlO1xudmFyIHByZWNvbXBpbGUgPSByZXF1aXJlKFwiLi9oYW5kbGViYXJzL2NvbXBpbGVyL2NvbXBpbGVyXCIpLnByZWNvbXBpbGU7XG52YXIgSmF2YVNjcmlwdENvbXBpbGVyID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy9jb21waWxlci9qYXZhc2NyaXB0LWNvbXBpbGVyXCIpW1wiZGVmYXVsdFwiXTtcblxudmFyIF9jcmVhdGUgPSBIYW5kbGViYXJzLmNyZWF0ZTtcbnZhciBjcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhiID0gX2NyZWF0ZSgpO1xuXG4gIGhiLmNvbXBpbGUgPSBmdW5jdGlvbihpbnB1dCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21waWxlKGlucHV0LCBvcHRpb25zLCBoYik7XG4gIH07XG4gIGhiLnByZWNvbXBpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgaGIpO1xuICB9O1xuXG4gIGhiLkFTVCA9IEFTVDtcbiAgaGIuQ29tcGlsZXIgPSBDb21waWxlcjtcbiAgaGIuSmF2YVNjcmlwdENvbXBpbGVyID0gSmF2YVNjcmlwdENvbXBpbGVyO1xuICBoYi5QYXJzZXIgPSBQYXJzZXI7XG4gIGhiLnBhcnNlID0gcGFyc2U7XG5cbiAgcmV0dXJuIGhiO1xufTtcblxuSGFuZGxlYmFycyA9IGNyZWF0ZSgpO1xuSGFuZGxlYmFycy5jcmVhdGUgPSBjcmVhdGU7XG5cbkhhbmRsZWJhcnNbJ2RlZmF1bHQnXSA9IEhhbmRsZWJhcnM7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSGFuZGxlYmFyczsiLCJcInVzZSBzdHJpY3RcIjtcbi8qZ2xvYmFscyBIYW5kbGViYXJzOiB0cnVlICovXG52YXIgYmFzZSA9IHJlcXVpcmUoXCIuL2hhbmRsZWJhcnMvYmFzZVwiKTtcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbnZhciBTYWZlU3RyaW5nID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy9zYWZlLXN0cmluZ1wiKVtcImRlZmF1bHRcIl07XG52YXIgRXhjZXB0aW9uID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy9leGNlcHRpb25cIilbXCJkZWZhdWx0XCJdO1xudmFyIFV0aWxzID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy91dGlsc1wiKTtcbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4vaGFuZGxlYmFycy9ydW50aW1lXCIpO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbnZhciBjcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufTtcblxudmFyIEhhbmRsZWJhcnMgPSBjcmVhdGUoKTtcbkhhbmRsZWJhcnMuY3JlYXRlID0gY3JlYXRlO1xuXG5IYW5kbGViYXJzWydkZWZhdWx0J10gPSBIYW5kbGViYXJzO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEhhbmRsZWJhcnM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbnZhciBFeGNlcHRpb24gPSByZXF1aXJlKFwiLi9leGNlcHRpb25cIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgVkVSU0lPTiA9IFwiMi4wLjBcIjtcbmV4cG9ydHMuVkVSU0lPTiA9IFZFUlNJT047dmFyIENPTVBJTEVSX1JFVklTSU9OID0gNjtcbmV4cG9ydHMuQ09NUElMRVJfUkVWSVNJT04gPSBDT01QSUxFUl9SRVZJU0lPTjtcbnZhciBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJ1xufTtcbmV4cG9ydHMuUkVWSVNJT05fQ0hBTkdFUyA9IFJFVklTSU9OX0NIQU5HRVM7XG52YXIgaXNBcnJheSA9IFV0aWxzLmlzQXJyYXksXG4gICAgaXNGdW5jdGlvbiA9IFV0aWxzLmlzRnVuY3Rpb24sXG4gICAgdG9TdHJpbmcgPSBVdGlscy50b1N0cmluZyxcbiAgICBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmZ1bmN0aW9uIEhhbmRsZWJhcnNFbnZpcm9ubWVudChoZWxwZXJzLCBwYXJ0aWFscykge1xuICB0aGlzLmhlbHBlcnMgPSBoZWxwZXJzIHx8IHt9O1xuICB0aGlzLnBhcnRpYWxzID0gcGFydGlhbHMgfHwge307XG5cbiAgcmVnaXN0ZXJEZWZhdWx0SGVscGVycyh0aGlzKTtcbn1cblxuZXhwb3J0cy5IYW5kbGViYXJzRW52aXJvbm1lbnQgPSBIYW5kbGViYXJzRW52aXJvbm1lbnQ7SGFuZGxlYmFyc0Vudmlyb25tZW50LnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IEhhbmRsZWJhcnNFbnZpcm9ubWVudCxcblxuICBsb2dnZXI6IGxvZ2dlcixcbiAgbG9nOiBsb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgVXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIFV0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCAgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0SGVscGVycyhpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaGVscGVyTWlzc2luZycsIGZ1bmN0aW9uKC8qIFthcmdzLCBdb3B0aW9ucyAqLykge1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3R1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJNaXNzaW5nIGhlbHBlcjogJ1wiICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGgtMV0ubmFtZSArIFwiJ1wiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgdmFyIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYoY29udGV4dCA9PT0gZmFsc2UgfHwgY29udGV4dCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gaW52ZXJzZSh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgIGlmKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIHZhciBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IFV0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2VhY2gnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuLCBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlO1xuICAgIHZhciBpID0gMCwgcmV0ID0gXCJcIiwgZGF0YTtcblxuICAgIHZhciBjb250ZXh0UGF0aDtcbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IFV0aWxzLmFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGlmKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IodmFyIGogPSBjb250ZXh0Lmxlbmd0aDsgaTxqOyBpKyspIHtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgZGF0YS5pbmRleCA9IGk7XG4gICAgICAgICAgICBkYXRhLmZpcnN0ID0gKGkgPT09IDApO1xuICAgICAgICAgICAgZGF0YS5sYXN0ICA9IChpID09PSAoY29udGV4dC5sZW5ndGgtMSkpO1xuXG4gICAgICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGNvbnRleHRQYXRoICsgaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0ID0gcmV0ICsgZm4oY29udGV4dFtpXSwgeyBkYXRhOiBkYXRhIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IodmFyIGtleSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgaWYoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICAgIGRhdGEua2V5ID0ga2V5O1xuICAgICAgICAgICAgICBkYXRhLmluZGV4ID0gaTtcbiAgICAgICAgICAgICAgZGF0YS5maXJzdCA9IChpID09PSAwKTtcblxuICAgICAgICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBrZXk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRba2V5XSwge2RhdGE6IGRhdGF9KTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihpID09PSAwKXtcbiAgICAgIHJldCA9IGludmVyc2UodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2lmJywgZnVuY3Rpb24oY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihjb25kaXRpb25hbCkpIHsgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpOyB9XG5cbiAgICAvLyBEZWZhdWx0IGJlaGF2aW9yIGlzIHRvIHJlbmRlciB0aGUgcG9zaXRpdmUgcGF0aCBpZiB0aGUgdmFsdWUgaXMgdHJ1dGh5IGFuZCBub3QgZW1wdHkuXG4gICAgLy8gVGhlIGBpbmNsdWRlWmVyb2Agb3B0aW9uIG1heSBiZSBzZXQgdG8gdHJlYXQgdGhlIGNvbmR0aW9uYWwgYXMgcHVyZWx5IG5vdCBlbXB0eSBiYXNlZCBvbiB0aGVcbiAgICAvLyBiZWhhdmlvciBvZiBpc0VtcHR5LiBFZmZlY3RpdmVseSB0aGlzIGRldGVybWluZXMgaWYgMCBpcyBoYW5kbGVkIGJ5IHRoZSBwb3NpdGl2ZSBwYXRoIG9yIG5lZ2F0aXZlLlxuICAgIGlmICgoIW9wdGlvbnMuaGFzaC5pbmNsdWRlWmVybyAmJiAhY29uZGl0aW9uYWwpIHx8IFV0aWxzLmlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIHJldHVybiBpbnN0YW5jZS5oZWxwZXJzWydpZiddLmNhbGwodGhpcywgY29uZGl0aW9uYWwsIHtmbjogb3B0aW9ucy5pbnZlcnNlLCBpbnZlcnNlOiBvcHRpb25zLmZuLCBoYXNoOiBvcHRpb25zLmhhc2h9KTtcbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgdmFyIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghVXRpbHMuaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgICB2YXIgZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOmRhdGF9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9nJywgZnVuY3Rpb24obWVzc2FnZSwgb3B0aW9ucykge1xuICAgIHZhciBsZXZlbCA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCA/IHBhcnNlSW50KG9wdGlvbnMuZGF0YS5sZXZlbCwgMTApIDogMTtcbiAgICBpbnN0YW5jZS5sb2cobGV2ZWwsIG1lc3NhZ2UpO1xuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG5cbnZhciBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogeyAwOiAnZGVidWcnLCAxOiAnaW5mbycsIDI6ICd3YXJuJywgMzogJ2Vycm9yJyB9LFxuXG4gIC8vIFN0YXRlIGVudW1cbiAgREVCVUc6IDAsXG4gIElORk86IDEsXG4gIFdBUk46IDIsXG4gIEVSUk9SOiAzLFxuICBsZXZlbDogMyxcblxuICAvLyBjYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuICBsb2c6IGZ1bmN0aW9uKGxldmVsLCBtZXNzYWdlKSB7XG4gICAgaWYgKGxvZ2dlci5sZXZlbCA8PSBsZXZlbCkge1xuICAgICAgdmFyIG1ldGhvZCA9IGxvZ2dlci5tZXRob2RNYXBbbGV2ZWxdO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgICAgY29uc29sZVttZXRob2RdLmNhbGwoY29uc29sZSwgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuZXhwb3J0cy5sb2dnZXIgPSBsb2dnZXI7XG52YXIgbG9nID0gbG9nZ2VyLmxvZztcbmV4cG9ydHMubG9nID0gbG9nO1xudmFyIGNyZWF0ZUZyYW1lID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBmcmFtZSA9IFV0aWxzLmV4dGVuZCh7fSwgb2JqZWN0KTtcbiAgZnJhbWUuX3BhcmVudCA9IG9iamVjdDtcbiAgcmV0dXJuIGZyYW1lO1xufTtcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBFeGNlcHRpb24gPSByZXF1aXJlKFwiLi4vZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcblxuZnVuY3Rpb24gTG9jYXRpb25JbmZvKGxvY0luZm8pIHtcbiAgbG9jSW5mbyA9IGxvY0luZm8gfHwge307XG4gIHRoaXMuZmlyc3RMaW5lICAgPSBsb2NJbmZvLmZpcnN0X2xpbmU7XG4gIHRoaXMuZmlyc3RDb2x1bW4gPSBsb2NJbmZvLmZpcnN0X2NvbHVtbjtcbiAgdGhpcy5sYXN0Q29sdW1uICA9IGxvY0luZm8ubGFzdF9jb2x1bW47XG4gIHRoaXMubGFzdExpbmUgICAgPSBsb2NJbmZvLmxhc3RfbGluZTtcbn1cblxudmFyIEFTVCA9IHtcbiAgUHJvZ3JhbU5vZGU6IGZ1bmN0aW9uKHN0YXRlbWVudHMsIHN0cmlwLCBsb2NJbmZvKSB7XG4gICAgTG9jYXRpb25JbmZvLmNhbGwodGhpcywgbG9jSW5mbyk7XG4gICAgdGhpcy50eXBlID0gXCJwcm9ncmFtXCI7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB0aGlzLnN0cmlwID0gc3RyaXA7XG4gIH0sXG5cbiAgTXVzdGFjaGVOb2RlOiBmdW5jdGlvbihyYXdQYXJhbXMsIGhhc2gsIG9wZW4sIHN0cmlwLCBsb2NJbmZvKSB7XG4gICAgTG9jYXRpb25JbmZvLmNhbGwodGhpcywgbG9jSW5mbyk7XG4gICAgdGhpcy50eXBlID0gXCJtdXN0YWNoZVwiO1xuICAgIHRoaXMuc3RyaXAgPSBzdHJpcDtcblxuICAgIC8vIE9wZW4gbWF5IGJlIGEgc3RyaW5nIHBhcnNlZCBmcm9tIHRoZSBwYXJzZXIgb3IgYSBwYXNzZWQgYm9vbGVhbiBmbGFnXG4gICAgaWYgKG9wZW4gIT0gbnVsbCAmJiBvcGVuLmNoYXJBdCkge1xuICAgICAgLy8gTXVzdCB1c2UgY2hhckF0IHRvIHN1cHBvcnQgSUUgcHJlLTEwXG4gICAgICB2YXIgZXNjYXBlRmxhZyA9IG9wZW4uY2hhckF0KDMpIHx8IG9wZW4uY2hhckF0KDIpO1xuICAgICAgdGhpcy5lc2NhcGVkID0gZXNjYXBlRmxhZyAhPT0gJ3snICYmIGVzY2FwZUZsYWcgIT09ICcmJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lc2NhcGVkID0gISFvcGVuO1xuICAgIH1cblxuICAgIGlmIChyYXdQYXJhbXMgaW5zdGFuY2VvZiBBU1QuU2V4cHJOb2RlKSB7XG4gICAgICB0aGlzLnNleHByID0gcmF3UGFyYW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdXBwb3J0IG9sZCBBU1QgQVBJXG4gICAgICB0aGlzLnNleHByID0gbmV3IEFTVC5TZXhwck5vZGUocmF3UGFyYW1zLCBoYXNoKTtcbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0IG9sZCBBU1QgQVBJIHRoYXQgc3RvcmVkIHRoaXMgaW5mbyBpbiBNdXN0YWNoZU5vZGVcbiAgICB0aGlzLmlkID0gdGhpcy5zZXhwci5pZDtcbiAgICB0aGlzLnBhcmFtcyA9IHRoaXMuc2V4cHIucGFyYW1zO1xuICAgIHRoaXMuaGFzaCA9IHRoaXMuc2V4cHIuaGFzaDtcbiAgICB0aGlzLmVsaWdpYmxlSGVscGVyID0gdGhpcy5zZXhwci5lbGlnaWJsZUhlbHBlcjtcbiAgICB0aGlzLmlzSGVscGVyID0gdGhpcy5zZXhwci5pc0hlbHBlcjtcbiAgfSxcblxuICBTZXhwck5vZGU6IGZ1bmN0aW9uKHJhd1BhcmFtcywgaGFzaCwgbG9jSW5mbykge1xuICAgIExvY2F0aW9uSW5mby5jYWxsKHRoaXMsIGxvY0luZm8pO1xuXG4gICAgdGhpcy50eXBlID0gXCJzZXhwclwiO1xuICAgIHRoaXMuaGFzaCA9IGhhc2g7XG5cbiAgICB2YXIgaWQgPSB0aGlzLmlkID0gcmF3UGFyYW1zWzBdO1xuICAgIHZhciBwYXJhbXMgPSB0aGlzLnBhcmFtcyA9IHJhd1BhcmFtcy5zbGljZSgxKTtcblxuICAgIC8vIGEgbXVzdGFjaGUgaXMgZGVmaW5pdGVseSBhIGhlbHBlciBpZjpcbiAgICAvLyAqIGl0IGlzIGFuIGVsaWdpYmxlIGhlbHBlciwgYW5kXG4gICAgLy8gKiBpdCBoYXMgYXQgbGVhc3Qgb25lIHBhcmFtZXRlciBvciBoYXNoIHNlZ21lbnRcbiAgICB0aGlzLmlzSGVscGVyID0gISEocGFyYW1zLmxlbmd0aCB8fCBoYXNoKTtcblxuICAgIC8vIGEgbXVzdGFjaGUgaXMgYW4gZWxpZ2libGUgaGVscGVyIGlmOlxuICAgIC8vICogaXRzIGlkIGlzIHNpbXBsZSAoYSBzaW5nbGUgcGFydCwgbm90IGB0aGlzYCBvciBgLi5gKVxuICAgIHRoaXMuZWxpZ2libGVIZWxwZXIgPSB0aGlzLmlzSGVscGVyIHx8IGlkLmlzU2ltcGxlO1xuXG4gICAgLy8gaWYgYSBtdXN0YWNoZSBpcyBhbiBlbGlnaWJsZSBoZWxwZXIgYnV0IG5vdCBhIGRlZmluaXRlXG4gICAgLy8gaGVscGVyLCBpdCBpcyBhbWJpZ3VvdXMsIGFuZCB3aWxsIGJlIHJlc29sdmVkIGluIGEgbGF0ZXJcbiAgICAvLyBwYXNzIG9yIGF0IHJ1bnRpbWUuXG4gIH0sXG5cbiAgUGFydGlhbE5vZGU6IGZ1bmN0aW9uKHBhcnRpYWxOYW1lLCBjb250ZXh0LCBoYXNoLCBzdHJpcCwgbG9jSW5mbykge1xuICAgIExvY2F0aW9uSW5mby5jYWxsKHRoaXMsIGxvY0luZm8pO1xuICAgIHRoaXMudHlwZSAgICAgICAgID0gXCJwYXJ0aWFsXCI7XG4gICAgdGhpcy5wYXJ0aWFsTmFtZSAgPSBwYXJ0aWFsTmFtZTtcbiAgICB0aGlzLmNvbnRleHQgICAgICA9IGNvbnRleHQ7XG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgICB0aGlzLnN0cmlwID0gc3RyaXA7XG5cbiAgICB0aGlzLnN0cmlwLmlubGluZVN0YW5kYWxvbmUgPSB0cnVlO1xuICB9LFxuXG4gIEJsb2NrTm9kZTogZnVuY3Rpb24obXVzdGFjaGUsIHByb2dyYW0sIGludmVyc2UsIHN0cmlwLCBsb2NJbmZvKSB7XG4gICAgTG9jYXRpb25JbmZvLmNhbGwodGhpcywgbG9jSW5mbyk7XG5cbiAgICB0aGlzLnR5cGUgPSAnYmxvY2snO1xuICAgIHRoaXMubXVzdGFjaGUgPSBtdXN0YWNoZTtcbiAgICB0aGlzLnByb2dyYW0gID0gcHJvZ3JhbTtcbiAgICB0aGlzLmludmVyc2UgID0gaW52ZXJzZTtcbiAgICB0aGlzLnN0cmlwID0gc3RyaXA7XG5cbiAgICBpZiAoaW52ZXJzZSAmJiAhcHJvZ3JhbSkge1xuICAgICAgdGhpcy5pc0ludmVyc2UgPSB0cnVlO1xuICAgIH1cbiAgfSxcblxuICBSYXdCbG9ja05vZGU6IGZ1bmN0aW9uKG11c3RhY2hlLCBjb250ZW50LCBjbG9zZSwgbG9jSW5mbykge1xuICAgIExvY2F0aW9uSW5mby5jYWxsKHRoaXMsIGxvY0luZm8pO1xuXG4gICAgaWYgKG11c3RhY2hlLnNleHByLmlkLm9yaWdpbmFsICE9PSBjbG9zZSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihtdXN0YWNoZS5zZXhwci5pZC5vcmlnaW5hbCArIFwiIGRvZXNuJ3QgbWF0Y2ggXCIgKyBjbG9zZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgY29udGVudCA9IG5ldyBBU1QuQ29udGVudE5vZGUoY29udGVudCwgbG9jSW5mbyk7XG5cbiAgICB0aGlzLnR5cGUgPSAnYmxvY2snO1xuICAgIHRoaXMubXVzdGFjaGUgPSBtdXN0YWNoZTtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgQVNULlByb2dyYW1Ob2RlKFtjb250ZW50XSwge30sIGxvY0luZm8pO1xuICB9LFxuXG4gIENvbnRlbnROb2RlOiBmdW5jdGlvbihzdHJpbmcsIGxvY0luZm8pIHtcbiAgICBMb2NhdGlvbkluZm8uY2FsbCh0aGlzLCBsb2NJbmZvKTtcbiAgICB0aGlzLnR5cGUgPSBcImNvbnRlbnRcIjtcbiAgICB0aGlzLm9yaWdpbmFsID0gdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH0sXG5cbiAgSGFzaE5vZGU6IGZ1bmN0aW9uKHBhaXJzLCBsb2NJbmZvKSB7XG4gICAgTG9jYXRpb25JbmZvLmNhbGwodGhpcywgbG9jSW5mbyk7XG4gICAgdGhpcy50eXBlID0gXCJoYXNoXCI7XG4gICAgdGhpcy5wYWlycyA9IHBhaXJzO1xuICB9LFxuXG4gIElkTm9kZTogZnVuY3Rpb24ocGFydHMsIGxvY0luZm8pIHtcbiAgICBMb2NhdGlvbkluZm8uY2FsbCh0aGlzLCBsb2NJbmZvKTtcbiAgICB0aGlzLnR5cGUgPSBcIklEXCI7XG5cbiAgICB2YXIgb3JpZ2luYWwgPSBcIlwiLFxuICAgICAgICBkaWcgPSBbXSxcbiAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICBkZXB0aFN0cmluZyA9ICcnO1xuXG4gICAgZm9yKHZhciBpPTAsbD1wYXJ0cy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICB2YXIgcGFydCA9IHBhcnRzW2ldLnBhcnQ7XG4gICAgICBvcmlnaW5hbCArPSAocGFydHNbaV0uc2VwYXJhdG9yIHx8ICcnKSArIHBhcnQ7XG5cbiAgICAgIGlmIChwYXJ0ID09PSBcIi4uXCIgfHwgcGFydCA9PT0gXCIuXCIgfHwgcGFydCA9PT0gXCJ0aGlzXCIpIHtcbiAgICAgICAgaWYgKGRpZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIkludmFsaWQgcGF0aDogXCIgKyBvcmlnaW5hbCwgdGhpcyk7XG4gICAgICAgIH0gZWxzZSBpZiAocGFydCA9PT0gXCIuLlwiKSB7XG4gICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgICBkZXB0aFN0cmluZyArPSAnLi4vJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmlzU2NvcGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlnLnB1c2gocGFydCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vcmlnaW5hbCA9IG9yaWdpbmFsO1xuICAgIHRoaXMucGFydHMgICAgPSBkaWc7XG4gICAgdGhpcy5zdHJpbmcgICA9IGRpZy5qb2luKCcuJyk7XG4gICAgdGhpcy5kZXB0aCAgICA9IGRlcHRoO1xuICAgIHRoaXMuaWROYW1lICAgPSBkZXB0aFN0cmluZyArIHRoaXMuc3RyaW5nO1xuXG4gICAgLy8gYW4gSUQgaXMgc2ltcGxlIGlmIGl0IG9ubHkgaGFzIG9uZSBwYXJ0LCBhbmQgdGhhdCBwYXJ0IGlzIG5vdFxuICAgIC8vIGAuLmAgb3IgYHRoaXNgLlxuICAgIHRoaXMuaXNTaW1wbGUgPSBwYXJ0cy5sZW5ndGggPT09IDEgJiYgIXRoaXMuaXNTY29wZWQgJiYgZGVwdGggPT09IDA7XG5cbiAgICB0aGlzLnN0cmluZ01vZGVWYWx1ZSA9IHRoaXMuc3RyaW5nO1xuICB9LFxuXG4gIFBhcnRpYWxOYW1lTm9kZTogZnVuY3Rpb24obmFtZSwgbG9jSW5mbykge1xuICAgIExvY2F0aW9uSW5mby5jYWxsKHRoaXMsIGxvY0luZm8pO1xuICAgIHRoaXMudHlwZSA9IFwiUEFSVElBTF9OQU1FXCI7XG4gICAgdGhpcy5uYW1lID0gbmFtZS5vcmlnaW5hbDtcbiAgfSxcblxuICBEYXRhTm9kZTogZnVuY3Rpb24oaWQsIGxvY0luZm8pIHtcbiAgICBMb2NhdGlvbkluZm8uY2FsbCh0aGlzLCBsb2NJbmZvKTtcbiAgICB0aGlzLnR5cGUgPSBcIkRBVEFcIjtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5zdHJpbmdNb2RlVmFsdWUgPSBpZC5zdHJpbmdNb2RlVmFsdWU7XG4gICAgdGhpcy5pZE5hbWUgPSAnQCcgKyBpZC5zdHJpbmdNb2RlVmFsdWU7XG4gIH0sXG5cbiAgU3RyaW5nTm9kZTogZnVuY3Rpb24oc3RyaW5nLCBsb2NJbmZvKSB7XG4gICAgTG9jYXRpb25JbmZvLmNhbGwodGhpcywgbG9jSW5mbyk7XG4gICAgdGhpcy50eXBlID0gXCJTVFJJTkdcIjtcbiAgICB0aGlzLm9yaWdpbmFsID1cbiAgICAgIHRoaXMuc3RyaW5nID1cbiAgICAgIHRoaXMuc3RyaW5nTW9kZVZhbHVlID0gc3RyaW5nO1xuICB9LFxuXG4gIE51bWJlck5vZGU6IGZ1bmN0aW9uKG51bWJlciwgbG9jSW5mbykge1xuICAgIExvY2F0aW9uSW5mby5jYWxsKHRoaXMsIGxvY0luZm8pO1xuICAgIHRoaXMudHlwZSA9IFwiTlVNQkVSXCI7XG4gICAgdGhpcy5vcmlnaW5hbCA9XG4gICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB0aGlzLnN0cmluZ01vZGVWYWx1ZSA9IE51bWJlcihudW1iZXIpO1xuICB9LFxuXG4gIEJvb2xlYW5Ob2RlOiBmdW5jdGlvbihib29sLCBsb2NJbmZvKSB7XG4gICAgTG9jYXRpb25JbmZvLmNhbGwodGhpcywgbG9jSW5mbyk7XG4gICAgdGhpcy50eXBlID0gXCJCT09MRUFOXCI7XG4gICAgdGhpcy5ib29sID0gYm9vbDtcbiAgICB0aGlzLnN0cmluZ01vZGVWYWx1ZSA9IGJvb2wgPT09IFwidHJ1ZVwiO1xuICB9LFxuXG4gIENvbW1lbnROb2RlOiBmdW5jdGlvbihjb21tZW50LCBsb2NJbmZvKSB7XG4gICAgTG9jYXRpb25JbmZvLmNhbGwodGhpcywgbG9jSW5mbyk7XG4gICAgdGhpcy50eXBlID0gXCJjb21tZW50XCI7XG4gICAgdGhpcy5jb21tZW50ID0gY29tbWVudDtcblxuICAgIHRoaXMuc3RyaXAgPSB7XG4gICAgICBpbmxpbmVTdGFuZGFsb25lOiB0cnVlXG4gICAgfTtcbiAgfVxufTtcblxuXG4vLyBNdXN0IGJlIGV4cG9ydGVkIGFzIGFuIG9iamVjdCByYXRoZXIgdGhhbiB0aGUgcm9vdCBvZiB0aGUgbW9kdWxlIGFzIHRoZSBqaXNvbiBsZXhlclxuLy8gbW9zdCBtb2RpZnkgdGhlIG9iamVjdCB0byBvcGVyYXRlIHByb3Blcmx5LlxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBU1Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgcGFyc2VyID0gcmVxdWlyZShcIi4vcGFyc2VyXCIpW1wiZGVmYXVsdFwiXTtcbnZhciBBU1QgPSByZXF1aXJlKFwiLi9hc3RcIilbXCJkZWZhdWx0XCJdO1xudmFyIEhlbHBlcnMgPSByZXF1aXJlKFwiLi9oZWxwZXJzXCIpO1xudmFyIGV4dGVuZCA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKS5leHRlbmQ7XG5cbmV4cG9ydHMucGFyc2VyID0gcGFyc2VyO1xuXG52YXIgeXkgPSB7fTtcbmV4dGVuZCh5eSwgSGVscGVycywgQVNUKTtcblxuZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgLy8gSnVzdCByZXR1cm4gaWYgYW4gYWxyZWFkeS1jb21waWxlIEFTVCB3YXMgcGFzc2VkIGluLlxuICBpZiAoaW5wdXQuY29uc3RydWN0b3IgPT09IEFTVC5Qcm9ncmFtTm9kZSkgeyByZXR1cm4gaW5wdXQ7IH1cblxuICBwYXJzZXIueXkgPSB5eTtcblxuICByZXR1cm4gcGFyc2VyLnBhcnNlKGlucHV0KTtcbn1cblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlOyIsIlwidXNlIHN0cmljdFwiO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuLi9leGNlcHRpb25cIilbXCJkZWZhdWx0XCJdO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKFwiLi4vdXRpbHNcIikuaXNBcnJheTtcblxudmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbmZ1bmN0aW9uIENvbXBpbGVyKCkge31cblxuZXhwb3J0cy5Db21waWxlciA9IENvbXBpbGVyOy8vIHRoZSBmb3VuZEhlbHBlciByZWdpc3RlciB3aWxsIGRpc2FtYmlndWF0ZSBoZWxwZXIgbG9va3VwIGZyb20gZmluZGluZyBhXG4vLyBmdW5jdGlvbiBpbiBhIGNvbnRleHQuIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBtdXN0YWNoZSBjb21wYXRpYmlsaXR5LCB3aGljaFxuLy8gcmVxdWlyZXMgdGhhdCBjb250ZXh0IGZ1bmN0aW9ucyBpbiBibG9ja3MgYXJlIGV2YWx1YXRlZCBieSBibG9ja0hlbHBlck1pc3NpbmcsXG4vLyBhbmQgdGhlbiBwcm9jZWVkIGFzIGlmIHRoZSByZXN1bHRpbmcgdmFsdWUgd2FzIHByb3ZpZGVkIHRvIGJsb2NrSGVscGVyTWlzc2luZy5cblxuQ29tcGlsZXIucHJvdG90eXBlID0ge1xuICBjb21waWxlcjogQ29tcGlsZXIsXG5cbiAgZXF1YWxzOiBmdW5jdGlvbihvdGhlcikge1xuICAgIHZhciBsZW4gPSB0aGlzLm9wY29kZXMubGVuZ3RoO1xuICAgIGlmIChvdGhlci5vcGNvZGVzLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIG9wY29kZSA9IHRoaXMub3Bjb2Rlc1tpXSxcbiAgICAgICAgICBvdGhlck9wY29kZSA9IG90aGVyLm9wY29kZXNbaV07XG4gICAgICBpZiAob3Bjb2RlLm9wY29kZSAhPT0gb3RoZXJPcGNvZGUub3Bjb2RlIHx8ICFhcmdFcXVhbHMob3Bjb2RlLmFyZ3MsIG90aGVyT3Bjb2RlLmFyZ3MpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBXZSBrbm93IHRoYXQgbGVuZ3RoIGlzIHRoZSBzYW1lIGJldHdlZW4gdGhlIHR3byBhcnJheXMgYmVjYXVzZSB0aGV5IGFyZSBkaXJlY3RseSB0aWVkXG4gICAgLy8gdG8gdGhlIG9wY29kZSBiZWhhdmlvciBhYm92ZS5cbiAgICBsZW4gPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICghdGhpcy5jaGlsZHJlbltpXS5lcXVhbHMob3RoZXIuY2hpbGRyZW5baV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBndWlkOiAwLFxuXG4gIGNvbXBpbGU6IGZ1bmN0aW9uKHByb2dyYW0sIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wY29kZXMgPSBbXTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5kZXB0aHMgPSB7bGlzdDogW119O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdHJpbmdQYXJhbXMgPSBvcHRpb25zLnN0cmluZ1BhcmFtcztcbiAgICB0aGlzLnRyYWNrSWRzID0gb3B0aW9ucy50cmFja0lkcztcblxuICAgIC8vIFRoZXNlIGNoYW5nZXMgd2lsbCBwcm9wYWdhdGUgdG8gdGhlIG90aGVyIGNvbXBpbGVyIGNvbXBvbmVudHNcbiAgICB2YXIga25vd25IZWxwZXJzID0gdGhpcy5vcHRpb25zLmtub3duSGVscGVycztcbiAgICB0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzID0ge1xuICAgICAgJ2hlbHBlck1pc3NpbmcnOiB0cnVlLFxuICAgICAgJ2Jsb2NrSGVscGVyTWlzc2luZyc6IHRydWUsXG4gICAgICAnZWFjaCc6IHRydWUsXG4gICAgICAnaWYnOiB0cnVlLFxuICAgICAgJ3VubGVzcyc6IHRydWUsXG4gICAgICAnd2l0aCc6IHRydWUsXG4gICAgICAnbG9nJzogdHJ1ZSxcbiAgICAgICdsb29rdXAnOiB0cnVlXG4gICAgfTtcbiAgICBpZiAoa25vd25IZWxwZXJzKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIGtub3duSGVscGVycykge1xuICAgICAgICB0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzW25hbWVdID0ga25vd25IZWxwZXJzW25hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFjY2VwdChwcm9ncmFtKTtcbiAgfSxcblxuICBhY2NlcHQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpc1tub2RlLnR5cGVdKG5vZGUpO1xuICB9LFxuXG4gIHByb2dyYW06IGZ1bmN0aW9uKHByb2dyYW0pIHtcbiAgICB2YXIgc3RhdGVtZW50cyA9IHByb2dyYW0uc3RhdGVtZW50cztcblxuICAgIGZvcih2YXIgaT0wLCBsPXN0YXRlbWVudHMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgdGhpcy5hY2NlcHQoc3RhdGVtZW50c1tpXSk7XG4gICAgfVxuICAgIHRoaXMuaXNTaW1wbGUgPSBsID09PSAxO1xuXG4gICAgdGhpcy5kZXB0aHMubGlzdCA9IHRoaXMuZGVwdGhzLmxpc3Quc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBjb21waWxlUHJvZ3JhbTogZnVuY3Rpb24ocHJvZ3JhbSkge1xuICAgIHZhciByZXN1bHQgPSBuZXcgdGhpcy5jb21waWxlcigpLmNvbXBpbGUocHJvZ3JhbSwgdGhpcy5vcHRpb25zKTtcbiAgICB2YXIgZ3VpZCA9IHRoaXMuZ3VpZCsrLCBkZXB0aDtcblxuICAgIHRoaXMudXNlUGFydGlhbCA9IHRoaXMudXNlUGFydGlhbCB8fCByZXN1bHQudXNlUGFydGlhbDtcblxuICAgIHRoaXMuY2hpbGRyZW5bZ3VpZF0gPSByZXN1bHQ7XG5cbiAgICBmb3IodmFyIGk9MCwgbD1yZXN1bHQuZGVwdGhzLmxpc3QubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgICAgZGVwdGggPSByZXN1bHQuZGVwdGhzLmxpc3RbaV07XG5cbiAgICAgIGlmKGRlcHRoIDwgMikgeyBjb250aW51ZTsgfVxuICAgICAgZWxzZSB7IHRoaXMuYWRkRGVwdGgoZGVwdGggLSAxKTsgfVxuICAgIH1cblxuICAgIHJldHVybiBndWlkO1xuICB9LFxuXG4gIGJsb2NrOiBmdW5jdGlvbihibG9jaykge1xuICAgIHZhciBtdXN0YWNoZSA9IGJsb2NrLm11c3RhY2hlLFxuICAgICAgICBwcm9ncmFtID0gYmxvY2sucHJvZ3JhbSxcbiAgICAgICAgaW52ZXJzZSA9IGJsb2NrLmludmVyc2U7XG5cbiAgICBpZiAocHJvZ3JhbSkge1xuICAgICAgcHJvZ3JhbSA9IHRoaXMuY29tcGlsZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgaWYgKGludmVyc2UpIHtcbiAgICAgIGludmVyc2UgPSB0aGlzLmNvbXBpbGVQcm9ncmFtKGludmVyc2UpO1xuICAgIH1cblxuICAgIHZhciBzZXhwciA9IG11c3RhY2hlLnNleHByO1xuICAgIHZhciB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKHNleHByKTtcblxuICAgIGlmICh0eXBlID09PSBcImhlbHBlclwiKSB7XG4gICAgICB0aGlzLmhlbHBlclNleHByKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic2ltcGxlXCIpIHtcbiAgICAgIHRoaXMuc2ltcGxlU2V4cHIoc2V4cHIpO1xuXG4gICAgICAvLyBub3cgdGhhdCB0aGUgc2ltcGxlIG11c3RhY2hlIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvXG4gICAgICAvLyBldmFsdWF0ZSBpdCBieSBleGVjdXRpbmcgYGJsb2NrSGVscGVyTWlzc2luZ2BcbiAgICAgIHRoaXMub3Bjb2RlKCdwdXNoUHJvZ3JhbScsIHByb2dyYW0pO1xuICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG4gICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG4gICAgICB0aGlzLm9wY29kZSgnYmxvY2tWYWx1ZScsIHNleHByLmlkLm9yaWdpbmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbWJpZ3VvdXNTZXhwcihzZXhwciwgcHJvZ3JhbSwgaW52ZXJzZSk7XG5cbiAgICAgIC8vIG5vdyB0aGF0IHRoZSBzaW1wbGUgbXVzdGFjaGUgaXMgcmVzb2x2ZWQsIHdlIG5lZWQgdG9cbiAgICAgIC8vIGV2YWx1YXRlIGl0IGJ5IGV4ZWN1dGluZyBgYmxvY2tIZWxwZXJNaXNzaW5nYFxuICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG4gICAgICB0aGlzLm9wY29kZSgncHVzaFByb2dyYW0nLCBpbnZlcnNlKTtcbiAgICAgIHRoaXMub3Bjb2RlKCdlbXB0eUhhc2gnKTtcbiAgICAgIHRoaXMub3Bjb2RlKCdhbWJpZ3VvdXNCbG9ja1ZhbHVlJyk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuICB9LFxuXG4gIGhhc2g6IGZ1bmN0aW9uKGhhc2gpIHtcbiAgICB2YXIgcGFpcnMgPSBoYXNoLnBhaXJzLCBpLCBsO1xuXG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hIYXNoJyk7XG5cbiAgICBmb3IoaT0wLCBsPXBhaXJzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgIHRoaXMucHVzaFBhcmFtKHBhaXJzW2ldWzFdKTtcbiAgICB9XG4gICAgd2hpbGUoaS0tKSB7XG4gICAgICB0aGlzLm9wY29kZSgnYXNzaWduVG9IYXNoJywgcGFpcnNbaV1bMF0pO1xuICAgIH1cbiAgICB0aGlzLm9wY29kZSgncG9wSGFzaCcpO1xuICB9LFxuXG4gIHBhcnRpYWw6IGZ1bmN0aW9uKHBhcnRpYWwpIHtcbiAgICB2YXIgcGFydGlhbE5hbWUgPSBwYXJ0aWFsLnBhcnRpYWxOYW1lO1xuICAgIHRoaXMudXNlUGFydGlhbCA9IHRydWU7XG5cbiAgICBpZiAocGFydGlhbC5oYXNoKSB7XG4gICAgICB0aGlzLmFjY2VwdChwYXJ0aWFsLmhhc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wY29kZSgncHVzaCcsICd1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBpZiAocGFydGlhbC5jb250ZXh0KSB7XG4gICAgICB0aGlzLmFjY2VwdChwYXJ0aWFsLmNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wY29kZSgnZ2V0Q29udGV4dCcsIDApO1xuICAgICAgdGhpcy5vcGNvZGUoJ3B1c2hDb250ZXh0Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5vcGNvZGUoJ2ludm9rZVBhcnRpYWwnLCBwYXJ0aWFsTmFtZS5uYW1lLCBwYXJ0aWFsLmluZGVudCB8fCAnJyk7XG4gICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuICB9LFxuXG4gIGNvbnRlbnQ6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudC5zdHJpbmcpIHtcbiAgICAgIHRoaXMub3Bjb2RlKCdhcHBlbmRDb250ZW50JywgY29udGVudC5zdHJpbmcpO1xuICAgIH1cbiAgfSxcblxuICBtdXN0YWNoZTogZnVuY3Rpb24obXVzdGFjaGUpIHtcbiAgICB0aGlzLnNleHByKG11c3RhY2hlLnNleHByKTtcblxuICAgIGlmKG11c3RhY2hlLmVzY2FwZWQgJiYgIXRoaXMub3B0aW9ucy5ub0VzY2FwZSkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZEVzY2FwZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGNvZGUoJ2FwcGVuZCcpO1xuICAgIH1cbiAgfSxcblxuICBhbWJpZ3VvdXNTZXhwcjogZnVuY3Rpb24oc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcbiAgICB2YXIgaWQgPSBzZXhwci5pZCxcbiAgICAgICAgbmFtZSA9IGlkLnBhcnRzWzBdLFxuICAgICAgICBpc0Jsb2NrID0gcHJvZ3JhbSAhPSBudWxsIHx8IGludmVyc2UgIT0gbnVsbDtcblxuICAgIHRoaXMub3Bjb2RlKCdnZXRDb250ZXh0JywgaWQuZGVwdGgpO1xuXG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cbiAgICB0aGlzLklEKGlkKTtcblxuICAgIHRoaXMub3Bjb2RlKCdpbnZva2VBbWJpZ3VvdXMnLCBuYW1lLCBpc0Jsb2NrKTtcbiAgfSxcblxuICBzaW1wbGVTZXhwcjogZnVuY3Rpb24oc2V4cHIpIHtcbiAgICB2YXIgaWQgPSBzZXhwci5pZDtcblxuICAgIGlmIChpZC50eXBlID09PSAnREFUQScpIHtcbiAgICAgIHRoaXMuREFUQShpZCk7XG4gICAgfSBlbHNlIGlmIChpZC5wYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuSUQoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaW1wbGlmaWVkIElEIGZvciBgdGhpc2BcbiAgICAgIHRoaXMuYWRkRGVwdGgoaWQuZGVwdGgpO1xuICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBpZC5kZXB0aCk7XG4gICAgICB0aGlzLm9wY29kZSgncHVzaENvbnRleHQnKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wY29kZSgncmVzb2x2ZVBvc3NpYmxlTGFtYmRhJyk7XG4gIH0sXG5cbiAgaGVscGVyU2V4cHI6IGZ1bmN0aW9uKHNleHByLCBwcm9ncmFtLCBpbnZlcnNlKSB7XG4gICAgdmFyIHBhcmFtcyA9IHRoaXMuc2V0dXBGdWxsTXVzdGFjaGVQYXJhbXMoc2V4cHIsIHByb2dyYW0sIGludmVyc2UpLFxuICAgICAgICBpZCA9IHNleHByLmlkLFxuICAgICAgICBuYW1lID0gaWQucGFydHNbMF07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmtub3duSGVscGVyc1tuYW1lXSkge1xuICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUtub3duSGVscGVyJywgcGFyYW1zLmxlbmd0aCwgbmFtZSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMua25vd25IZWxwZXJzT25seSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIllvdSBzcGVjaWZpZWQga25vd25IZWxwZXJzT25seSwgYnV0IHVzZWQgdGhlIHVua25vd24gaGVscGVyIFwiICsgbmFtZSwgc2V4cHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZC5mYWxzeSA9IHRydWU7XG5cbiAgICAgIHRoaXMuSUQoaWQpO1xuICAgICAgdGhpcy5vcGNvZGUoJ2ludm9rZUhlbHBlcicsIHBhcmFtcy5sZW5ndGgsIGlkLm9yaWdpbmFsLCBpZC5pc1NpbXBsZSk7XG4gICAgfVxuICB9LFxuXG4gIHNleHByOiBmdW5jdGlvbihzZXhwcikge1xuICAgIHZhciB0eXBlID0gdGhpcy5jbGFzc2lmeVNleHByKHNleHByKTtcblxuICAgIGlmICh0eXBlID09PSBcInNpbXBsZVwiKSB7XG4gICAgICB0aGlzLnNpbXBsZVNleHByKHNleHByKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiaGVscGVyXCIpIHtcbiAgICAgIHRoaXMuaGVscGVyU2V4cHIoc2V4cHIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFtYmlndW91c1NleHByKHNleHByKTtcbiAgICB9XG4gIH0sXG5cbiAgSUQ6IGZ1bmN0aW9uKGlkKSB7XG4gICAgdGhpcy5hZGREZXB0aChpZC5kZXB0aCk7XG4gICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCBpZC5kZXB0aCk7XG5cbiAgICB2YXIgbmFtZSA9IGlkLnBhcnRzWzBdO1xuICAgIGlmICghbmFtZSkge1xuICAgICAgLy8gQ29udGV4dCByZWZlcmVuY2UsIGkuZS4gYHt7Zm9vIC59fWAgb3IgYHt7Zm9vIC4ufX1gXG4gICAgICB0aGlzLm9wY29kZSgncHVzaENvbnRleHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGNvZGUoJ2xvb2t1cE9uQ29udGV4dCcsIGlkLnBhcnRzLCBpZC5mYWxzeSwgaWQuaXNTY29wZWQpO1xuICAgIH1cbiAgfSxcblxuICBEQVRBOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy5vcHRpb25zLmRhdGEgPSB0cnVlO1xuICAgIHRoaXMub3Bjb2RlKCdsb29rdXBEYXRhJywgZGF0YS5pZC5kZXB0aCwgZGF0YS5pZC5wYXJ0cyk7XG4gIH0sXG5cbiAgU1RSSU5HOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZycsIHN0cmluZy5zdHJpbmcpO1xuICB9LFxuXG4gIE5VTUJFUjogZnVuY3Rpb24obnVtYmVyKSB7XG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hMaXRlcmFsJywgbnVtYmVyLm51bWJlcik7XG4gIH0sXG5cbiAgQk9PTEVBTjogZnVuY3Rpb24oYm9vbCkge1xuICAgIHRoaXMub3Bjb2RlKCdwdXNoTGl0ZXJhbCcsIGJvb2wuYm9vbCk7XG4gIH0sXG5cbiAgY29tbWVudDogZnVuY3Rpb24oKSB7fSxcblxuICAvLyBIRUxQRVJTXG4gIG9wY29kZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHRoaXMub3Bjb2Rlcy5wdXNoKHsgb3Bjb2RlOiBuYW1lLCBhcmdzOiBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgfSk7XG4gIH0sXG5cbiAgYWRkRGVwdGg6IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgaWYoZGVwdGggPT09IDApIHsgcmV0dXJuOyB9XG5cbiAgICBpZighdGhpcy5kZXB0aHNbZGVwdGhdKSB7XG4gICAgICB0aGlzLmRlcHRoc1tkZXB0aF0gPSB0cnVlO1xuICAgICAgdGhpcy5kZXB0aHMubGlzdC5wdXNoKGRlcHRoKTtcbiAgICB9XG4gIH0sXG5cbiAgY2xhc3NpZnlTZXhwcjogZnVuY3Rpb24oc2V4cHIpIHtcbiAgICB2YXIgaXNIZWxwZXIgICA9IHNleHByLmlzSGVscGVyO1xuICAgIHZhciBpc0VsaWdpYmxlID0gc2V4cHIuZWxpZ2libGVIZWxwZXI7XG4gICAgdmFyIG9wdGlvbnMgICAgPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAvLyBpZiBhbWJpZ3VvdXMsIHdlIGNhbiBwb3NzaWJseSByZXNvbHZlIHRoZSBhbWJpZ3VpdHkgbm93XG4gICAgLy8gQW4gZWxpZ2libGUgaGVscGVyIGlzIG9uZSB0aGF0IGRvZXMgbm90IGhhdmUgYSBjb21wbGV4IHBhdGgsIGkuZS4gYHRoaXMuZm9vYCwgYC4uL2Zvb2AgZXRjLlxuICAgIGlmIChpc0VsaWdpYmxlICYmICFpc0hlbHBlcikge1xuICAgICAgdmFyIG5hbWUgPSBzZXhwci5pZC5wYXJ0c1swXTtcblxuICAgICAgaWYgKG9wdGlvbnMua25vd25IZWxwZXJzW25hbWVdKSB7XG4gICAgICAgIGlzSGVscGVyID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5rbm93bkhlbHBlcnNPbmx5KSB7XG4gICAgICAgIGlzRWxpZ2libGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNIZWxwZXIpIHsgcmV0dXJuIFwiaGVscGVyXCI7IH1cbiAgICBlbHNlIGlmIChpc0VsaWdpYmxlKSB7IHJldHVybiBcImFtYmlndW91c1wiOyB9XG4gICAgZWxzZSB7IHJldHVybiBcInNpbXBsZVwiOyB9XG4gIH0sXG5cbiAgcHVzaFBhcmFtczogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgZm9yKHZhciBpPTAsIGw9cGFyYW1zLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgIHRoaXMucHVzaFBhcmFtKHBhcmFtc1tpXSk7XG4gICAgfVxuICB9LFxuXG4gIHB1c2hQYXJhbTogZnVuY3Rpb24odmFsKSB7XG4gICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG4gICAgICBpZih2YWwuZGVwdGgpIHtcbiAgICAgICAgdGhpcy5hZGREZXB0aCh2YWwuZGVwdGgpO1xuICAgICAgfVxuICAgICAgdGhpcy5vcGNvZGUoJ2dldENvbnRleHQnLCB2YWwuZGVwdGggfHwgMCk7XG4gICAgICB0aGlzLm9wY29kZSgncHVzaFN0cmluZ1BhcmFtJywgdmFsLnN0cmluZ01vZGVWYWx1ZSwgdmFsLnR5cGUpO1xuXG4gICAgICBpZiAodmFsLnR5cGUgPT09ICdzZXhwcicpIHtcbiAgICAgICAgLy8gU3ViZXhwcmVzc2lvbnMgZ2V0IGV2YWx1YXRlZCBhbmQgcGFzc2VkIGluXG4gICAgICAgIC8vIGluIHN0cmluZyBwYXJhbXMgbW9kZS5cbiAgICAgICAgdGhpcy5zZXhwcih2YWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50cmFja0lkcykge1xuICAgICAgICB0aGlzLm9wY29kZSgncHVzaElkJywgdmFsLnR5cGUsIHZhbC5pZE5hbWUgfHwgdmFsLnN0cmluZ01vZGVWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmFjY2VwdCh2YWwpO1xuICAgIH1cbiAgfSxcblxuICBzZXR1cEZ1bGxNdXN0YWNoZVBhcmFtczogZnVuY3Rpb24oc2V4cHIsIHByb2dyYW0sIGludmVyc2UpIHtcbiAgICB2YXIgcGFyYW1zID0gc2V4cHIucGFyYW1zO1xuICAgIHRoaXMucHVzaFBhcmFtcyhwYXJhbXMpO1xuXG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgcHJvZ3JhbSk7XG4gICAgdGhpcy5vcGNvZGUoJ3B1c2hQcm9ncmFtJywgaW52ZXJzZSk7XG5cbiAgICBpZiAoc2V4cHIuaGFzaCkge1xuICAgICAgdGhpcy5oYXNoKHNleHByLmhhc2gpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wY29kZSgnZW1wdHlIYXNoJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxufTtcblxuZnVuY3Rpb24gcHJlY29tcGlsZShpbnB1dCwgb3B0aW9ucywgZW52KSB7XG4gIGlmIChpbnB1dCA9PSBudWxsIHx8ICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnICYmIGlucHV0LmNvbnN0cnVjdG9yICE9PSBlbnYuQVNULlByb2dyYW1Ob2RlKSkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJZb3UgbXVzdCBwYXNzIGEgc3RyaW5nIG9yIEhhbmRsZWJhcnMgQVNUIHRvIEhhbmRsZWJhcnMucHJlY29tcGlsZS4gWW91IHBhc3NlZCBcIiArIGlucHV0KTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBpZiAoISgnZGF0YScgaW4gb3B0aW9ucykpIHtcbiAgICBvcHRpb25zLmRhdGEgPSB0cnVlO1xuICB9XG4gIGlmIChvcHRpb25zLmNvbXBhdCkge1xuICAgIG9wdGlvbnMudXNlRGVwdGhzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBhc3QgPSBlbnYucGFyc2UoaW5wdXQpO1xuICB2YXIgZW52aXJvbm1lbnQgPSBuZXcgZW52LkNvbXBpbGVyKCkuY29tcGlsZShhc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gbmV3IGVudi5KYXZhU2NyaXB0Q29tcGlsZXIoKS5jb21waWxlKGVudmlyb25tZW50LCBvcHRpb25zKTtcbn1cblxuZXhwb3J0cy5wcmVjb21waWxlID0gcHJlY29tcGlsZTtmdW5jdGlvbiBjb21waWxlKGlucHV0LCBvcHRpb25zLCBlbnYpIHtcbiAgaWYgKGlucHV0ID09IG51bGwgfHwgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycgJiYgaW5wdXQuY29uc3RydWN0b3IgIT09IGVudi5BU1QuUHJvZ3JhbU5vZGUpKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIllvdSBtdXN0IHBhc3MgYSBzdHJpbmcgb3IgSGFuZGxlYmFycyBBU1QgdG8gSGFuZGxlYmFycy5jb21waWxlLiBZb3UgcGFzc2VkIFwiICsgaW5wdXQpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCEoJ2RhdGEnIGluIG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gdHJ1ZTtcbiAgfVxuICBpZiAob3B0aW9ucy5jb21wYXQpIHtcbiAgICBvcHRpb25zLnVzZURlcHRocyA9IHRydWU7XG4gIH1cblxuICB2YXIgY29tcGlsZWQ7XG5cbiAgZnVuY3Rpb24gY29tcGlsZUlucHV0KCkge1xuICAgIHZhciBhc3QgPSBlbnYucGFyc2UoaW5wdXQpO1xuICAgIHZhciBlbnZpcm9ubWVudCA9IG5ldyBlbnYuQ29tcGlsZXIoKS5jb21waWxlKGFzdCwgb3B0aW9ucyk7XG4gICAgdmFyIHRlbXBsYXRlU3BlYyA9IG5ldyBlbnYuSmF2YVNjcmlwdENvbXBpbGVyKCkuY29tcGlsZShlbnZpcm9ubWVudCwgb3B0aW9ucywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICByZXR1cm4gZW52LnRlbXBsYXRlKHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICAvLyBUZW1wbGF0ZSBpcyBvbmx5IGNvbXBpbGVkIG9uIGZpcnN0IHVzZSBhbmQgY2FjaGVkIGFmdGVyIHRoYXQgcG9pbnQuXG4gIHZhciByZXQgPSBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBpbGVkLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG4gIH07XG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgY29tcGlsZWQgPSBjb21waWxlSW5wdXQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBpbGVkLl9zZXR1cChvcHRpb25zKTtcbiAgfTtcbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGRlcHRocykge1xuICAgIGlmICghY29tcGlsZWQpIHtcbiAgICAgIGNvbXBpbGVkID0gY29tcGlsZUlucHV0KCk7XG4gICAgfVxuICAgIHJldHVybiBjb21waWxlZC5fY2hpbGQoaSwgZGF0YSwgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtmdW5jdGlvbiBhcmdFcXVhbHMoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkoYSkgJiYgaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghYXJnRXF1YWxzKGFbaV0sIGJbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBFeGNlcHRpb24gPSByZXF1aXJlKFwiLi4vZXhjZXB0aW9uXCIpW1wiZGVmYXVsdFwiXTtcblxuZnVuY3Rpb24gc3RyaXBGbGFncyhvcGVuLCBjbG9zZSkge1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IG9wZW4uY2hhckF0KDIpID09PSAnficsXG4gICAgcmlnaHQ6IGNsb3NlLmNoYXJBdChjbG9zZS5sZW5ndGgtMykgPT09ICd+J1xuICB9O1xufVxuXG5leHBvcnRzLnN0cmlwRmxhZ3MgPSBzdHJpcEZsYWdzO1xuZnVuY3Rpb24gcHJlcGFyZUJsb2NrKG11c3RhY2hlLCBwcm9ncmFtLCBpbnZlcnNlQW5kUHJvZ3JhbSwgY2xvc2UsIGludmVydGVkLCBsb2NJbmZvKSB7XG4gIC8qanNoaW50IC1XMDQwICovXG4gIGlmIChtdXN0YWNoZS5zZXhwci5pZC5vcmlnaW5hbCAhPT0gY2xvc2UucGF0aC5vcmlnaW5hbCkge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24obXVzdGFjaGUuc2V4cHIuaWQub3JpZ2luYWwgKyAnIGRvZXNuXFwndCBtYXRjaCAnICsgY2xvc2UucGF0aC5vcmlnaW5hbCwgbXVzdGFjaGUpO1xuICB9XG5cbiAgdmFyIGludmVyc2UgPSBpbnZlcnNlQW5kUHJvZ3JhbSAmJiBpbnZlcnNlQW5kUHJvZ3JhbS5wcm9ncmFtO1xuXG4gIHZhciBzdHJpcCA9IHtcbiAgICBsZWZ0OiBtdXN0YWNoZS5zdHJpcC5sZWZ0LFxuICAgIHJpZ2h0OiBjbG9zZS5zdHJpcC5yaWdodCxcblxuICAgIC8vIERldGVybWluZSB0aGUgc3RhbmRhbG9uZSBjYW5kaWFjeS4gQmFzaWNhbGx5IGZsYWcgb3VyIGNvbnRlbnQgYXMgYmVpbmcgcG9zc2libHkgc3RhbmRhbG9uZVxuICAgIC8vIHNvIG91ciBwYXJlbnQgY2FuIGRldGVybWluZSBpZiB3ZSBhY3R1YWxseSBhcmUgc3RhbmRhbG9uZVxuICAgIG9wZW5TdGFuZGFsb25lOiBpc05leHRXaGl0ZXNwYWNlKHByb2dyYW0uc3RhdGVtZW50cyksXG4gICAgY2xvc2VTdGFuZGFsb25lOiBpc1ByZXZXaGl0ZXNwYWNlKChpbnZlcnNlIHx8IHByb2dyYW0pLnN0YXRlbWVudHMpXG4gIH07XG5cbiAgaWYgKG11c3RhY2hlLnN0cmlwLnJpZ2h0KSB7XG4gICAgb21pdFJpZ2h0KHByb2dyYW0uc3RhdGVtZW50cywgbnVsbCwgdHJ1ZSk7XG4gIH1cblxuICBpZiAoaW52ZXJzZSkge1xuICAgIHZhciBpbnZlcnNlU3RyaXAgPSBpbnZlcnNlQW5kUHJvZ3JhbS5zdHJpcDtcblxuICAgIGlmIChpbnZlcnNlU3RyaXAubGVmdCkge1xuICAgICAgb21pdExlZnQocHJvZ3JhbS5zdGF0ZW1lbnRzLCBudWxsLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKGludmVyc2VTdHJpcC5yaWdodCkge1xuICAgICAgb21pdFJpZ2h0KGludmVyc2Uuc3RhdGVtZW50cywgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChjbG9zZS5zdHJpcC5sZWZ0KSB7XG4gICAgICBvbWl0TGVmdChpbnZlcnNlLnN0YXRlbWVudHMsIG51bGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIEZpbmQgc3RhbmRhbG9uZSBlbHNlIHN0YXRtZW50c1xuICAgIGlmIChpc1ByZXZXaGl0ZXNwYWNlKHByb2dyYW0uc3RhdGVtZW50cylcbiAgICAgICAgJiYgaXNOZXh0V2hpdGVzcGFjZShpbnZlcnNlLnN0YXRlbWVudHMpKSB7XG5cbiAgICAgIG9taXRMZWZ0KHByb2dyYW0uc3RhdGVtZW50cyk7XG4gICAgICBvbWl0UmlnaHQoaW52ZXJzZS5zdGF0ZW1lbnRzKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGNsb3NlLnN0cmlwLmxlZnQpIHtcbiAgICAgIG9taXRMZWZ0KHByb2dyYW0uc3RhdGVtZW50cywgbnVsbCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGludmVydGVkKSB7XG4gICAgcmV0dXJuIG5ldyB0aGlzLkJsb2NrTm9kZShtdXN0YWNoZSwgaW52ZXJzZSwgcHJvZ3JhbSwgc3RyaXAsIGxvY0luZm8pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgdGhpcy5CbG9ja05vZGUobXVzdGFjaGUsIHByb2dyYW0sIGludmVyc2UsIHN0cmlwLCBsb2NJbmZvKTtcbiAgfVxufVxuXG5leHBvcnRzLnByZXBhcmVCbG9jayA9IHByZXBhcmVCbG9jaztcbmZ1bmN0aW9uIHByZXBhcmVQcm9ncmFtKHN0YXRlbWVudHMsIGlzUm9vdCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHN0YXRlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBzdGF0ZW1lbnRzW2ldLFxuICAgICAgICBzdHJpcCA9IGN1cnJlbnQuc3RyaXA7XG5cbiAgICBpZiAoIXN0cmlwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgX2lzUHJldldoaXRlc3BhY2UgPSBpc1ByZXZXaGl0ZXNwYWNlKHN0YXRlbWVudHMsIGksIGlzUm9vdCwgY3VycmVudC50eXBlID09PSAncGFydGlhbCcpLFxuICAgICAgICBfaXNOZXh0V2hpdGVzcGFjZSA9IGlzTmV4dFdoaXRlc3BhY2Uoc3RhdGVtZW50cywgaSwgaXNSb290KSxcblxuICAgICAgICBvcGVuU3RhbmRhbG9uZSA9IHN0cmlwLm9wZW5TdGFuZGFsb25lICYmIF9pc1ByZXZXaGl0ZXNwYWNlLFxuICAgICAgICBjbG9zZVN0YW5kYWxvbmUgPSBzdHJpcC5jbG9zZVN0YW5kYWxvbmUgJiYgX2lzTmV4dFdoaXRlc3BhY2UsXG4gICAgICAgIGlubGluZVN0YW5kYWxvbmUgPSBzdHJpcC5pbmxpbmVTdGFuZGFsb25lICYmIF9pc1ByZXZXaGl0ZXNwYWNlICYmIF9pc05leHRXaGl0ZXNwYWNlO1xuXG4gICAgaWYgKHN0cmlwLnJpZ2h0KSB7XG4gICAgICBvbWl0UmlnaHQoc3RhdGVtZW50cywgaSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmIChzdHJpcC5sZWZ0KSB7XG4gICAgICBvbWl0TGVmdChzdGF0ZW1lbnRzLCBpLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoaW5saW5lU3RhbmRhbG9uZSkge1xuICAgICAgb21pdFJpZ2h0KHN0YXRlbWVudHMsIGkpO1xuXG4gICAgICBpZiAob21pdExlZnQoc3RhdGVtZW50cywgaSkpIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlIG9uIGEgc3RhbmRhbG9uZSBub2RlLCBzYXZlIHRoZSBpbmRlbnQgaW5mbyBmb3IgcGFydGlhbHNcbiAgICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gJ3BhcnRpYWwnKSB7XG4gICAgICAgICAgY3VycmVudC5pbmRlbnQgPSAoLyhbIFxcdF0rJCkvKS5leGVjKHN0YXRlbWVudHNbaS0xXS5vcmlnaW5hbCkgPyBSZWdFeHAuJDEgOiAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3BlblN0YW5kYWxvbmUpIHtcbiAgICAgIG9taXRSaWdodCgoY3VycmVudC5wcm9ncmFtIHx8IGN1cnJlbnQuaW52ZXJzZSkuc3RhdGVtZW50cyk7XG5cbiAgICAgIC8vIFN0cmlwIG91dCB0aGUgcHJldmlvdXMgY29udGVudCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5XG4gICAgICBvbWl0TGVmdChzdGF0ZW1lbnRzLCBpKTtcbiAgICB9XG4gICAgaWYgKGNsb3NlU3RhbmRhbG9uZSkge1xuICAgICAgLy8gQWx3YXlzIHN0cmlwIHRoZSBuZXh0IG5vZGVcbiAgICAgIG9taXRSaWdodChzdGF0ZW1lbnRzLCBpKTtcblxuICAgICAgb21pdExlZnQoKGN1cnJlbnQuaW52ZXJzZSB8fCBjdXJyZW50LnByb2dyYW0pLnN0YXRlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRzO1xufVxuXG5leHBvcnRzLnByZXBhcmVQcm9ncmFtID0gcHJlcGFyZVByb2dyYW07ZnVuY3Rpb24gaXNQcmV2V2hpdGVzcGFjZShzdGF0ZW1lbnRzLCBpLCBpc1Jvb3QpIHtcbiAgaWYgKGkgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSBzdGF0ZW1lbnRzLmxlbmd0aDtcbiAgfVxuXG4gIC8vIE5vZGVzIHRoYXQgZW5kIHdpdGggbmV3bGluZXMgYXJlIGNvbnNpZGVyZWQgd2hpdGVzcGFjZSAoYnV0IGFyZSBzcGVjaWFsXG4gIC8vIGNhc2VkIGZvciBzdHJpcCBvcGVyYXRpb25zKVxuICB2YXIgcHJldiA9IHN0YXRlbWVudHNbaS0xXSxcbiAgICAgIHNpYmxpbmcgPSBzdGF0ZW1lbnRzW2ktMl07XG4gIGlmICghcHJldikge1xuICAgIHJldHVybiBpc1Jvb3Q7XG4gIH1cblxuICBpZiAocHJldi50eXBlID09PSAnY29udGVudCcpIHtcbiAgICByZXR1cm4gKHNpYmxpbmcgfHwgIWlzUm9vdCA/ICgvXFxyP1xcblxccyo/JC8pIDogKC8oXnxcXHI/XFxuKVxccyo/JC8pKS50ZXN0KHByZXYub3JpZ2luYWwpO1xuICB9XG59XG5mdW5jdGlvbiBpc05leHRXaGl0ZXNwYWNlKHN0YXRlbWVudHMsIGksIGlzUm9vdCkge1xuICBpZiAoaSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaSA9IC0xO1xuICB9XG5cbiAgdmFyIG5leHQgPSBzdGF0ZW1lbnRzW2krMV0sXG4gICAgICBzaWJsaW5nID0gc3RhdGVtZW50c1tpKzJdO1xuICBpZiAoIW5leHQpIHtcbiAgICByZXR1cm4gaXNSb290O1xuICB9XG5cbiAgaWYgKG5leHQudHlwZSA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgcmV0dXJuIChzaWJsaW5nIHx8ICFpc1Jvb3QgPyAoL15cXHMqP1xccj9cXG4vKSA6ICgvXlxccyo/KFxccj9cXG58JCkvKSkudGVzdChuZXh0Lm9yaWdpbmFsKTtcbiAgfVxufVxuXG4vLyBNYXJrcyB0aGUgbm9kZSB0byB0aGUgcmlnaHQgb2YgdGhlIHBvc2l0aW9uIGFzIG9taXR0ZWQuXG4vLyBJLmUuIHt7Zm9vfX0nICcgd2lsbCBtYXJrIHRoZSAnICcgbm9kZSBhcyBvbWl0dGVkLlxuLy9cbi8vIElmIGkgaXMgdW5kZWZpbmVkLCB0aGVuIHRoZSBmaXJzdCBjaGlsZCB3aWxsIGJlIG1hcmtlZCBhcyBzdWNoLlxuLy9cbi8vIElmIG11bGl0cGxlIGlzIHRydXRoeSB0aGVuIGFsbCB3aGl0ZXNwYWNlIHdpbGwgYmUgc3RyaXBwZWQgb3V0IHVudGlsIG5vbi13aGl0ZXNwYWNlXG4vLyBjb250ZW50IGlzIG1ldC5cbmZ1bmN0aW9uIG9taXRSaWdodChzdGF0ZW1lbnRzLCBpLCBtdWx0aXBsZSkge1xuICB2YXIgY3VycmVudCA9IHN0YXRlbWVudHNbaSA9PSBudWxsID8gMCA6IGkgKyAxXTtcbiAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ2NvbnRlbnQnIHx8ICghbXVsdGlwbGUgJiYgY3VycmVudC5yaWdodFN0cmlwcGVkKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbCA9IGN1cnJlbnQuc3RyaW5nO1xuICBjdXJyZW50LnN0cmluZyA9IGN1cnJlbnQuc3RyaW5nLnJlcGxhY2UobXVsdGlwbGUgPyAoL15cXHMrLykgOiAoL15bIFxcdF0qXFxyP1xcbj8vKSwgJycpO1xuICBjdXJyZW50LnJpZ2h0U3RyaXBwZWQgPSBjdXJyZW50LnN0cmluZyAhPT0gb3JpZ2luYWw7XG59XG5cbi8vIE1hcmtzIHRoZSBub2RlIHRvIHRoZSBsZWZ0IG9mIHRoZSBwb3NpdGlvbiBhcyBvbWl0dGVkLlxuLy8gSS5lLiAnICd7e2Zvb319IHdpbGwgbWFyayB0aGUgJyAnIG5vZGUgYXMgb21pdHRlZC5cbi8vXG4vLyBJZiBpIGlzIHVuZGVmaW5lZCB0aGVuIHRoZSBsYXN0IGNoaWxkIHdpbGwgYmUgbWFya2VkIGFzIHN1Y2guXG4vL1xuLy8gSWYgbXVsaXRwbGUgaXMgdHJ1dGh5IHRoZW4gYWxsIHdoaXRlc3BhY2Ugd2lsbCBiZSBzdHJpcHBlZCBvdXQgdW50aWwgbm9uLXdoaXRlc3BhY2Vcbi8vIGNvbnRlbnQgaXMgbWV0LlxuZnVuY3Rpb24gb21pdExlZnQoc3RhdGVtZW50cywgaSwgbXVsdGlwbGUpIHtcbiAgdmFyIGN1cnJlbnQgPSBzdGF0ZW1lbnRzW2kgPT0gbnVsbCA/IHN0YXRlbWVudHMubGVuZ3RoIC0gMSA6IGkgLSAxXTtcbiAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQudHlwZSAhPT0gJ2NvbnRlbnQnIHx8ICghbXVsdGlwbGUgJiYgY3VycmVudC5sZWZ0U3RyaXBwZWQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gV2Ugb21pdCB0aGUgbGFzdCBub2RlIGlmIGl0J3Mgd2hpdGVzcGFjZSBvbmx5IGFuZCBub3QgcHJlY2VlZGVkIGJ5IGEgbm9uLWNvbnRlbnQgbm9kZS5cbiAgdmFyIG9yaWdpbmFsID0gY3VycmVudC5zdHJpbmc7XG4gIGN1cnJlbnQuc3RyaW5nID0gY3VycmVudC5zdHJpbmcucmVwbGFjZShtdWx0aXBsZSA/ICgvXFxzKyQvKSA6ICgvWyBcXHRdKyQvKSwgJycpO1xuICBjdXJyZW50LmxlZnRTdHJpcHBlZCA9IGN1cnJlbnQuc3RyaW5nICE9PSBvcmlnaW5hbDtcbiAgcmV0dXJuIGN1cnJlbnQubGVmdFN0cmlwcGVkO1xufSIsIlwidXNlIHN0cmljdFwiO1xudmFyIENPTVBJTEVSX1JFVklTSU9OID0gcmVxdWlyZShcIi4uL2Jhc2VcIikuQ09NUElMRVJfUkVWSVNJT047XG52YXIgUkVWSVNJT05fQ0hBTkdFUyA9IHJlcXVpcmUoXCIuLi9iYXNlXCIpLlJFVklTSU9OX0NIQU5HRVM7XG52YXIgRXhjZXB0aW9uID0gcmVxdWlyZShcIi4uL2V4Y2VwdGlvblwiKVtcImRlZmF1bHRcIl07XG5cbmZ1bmN0aW9uIExpdGVyYWwodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBKYXZhU2NyaXB0Q29tcGlsZXIoKSB7fVxuXG5KYXZhU2NyaXB0Q29tcGlsZXIucHJvdG90eXBlID0ge1xuICAvLyBQVUJMSUMgQVBJOiBZb3UgY2FuIG92ZXJyaWRlIHRoZXNlIG1ldGhvZHMgaW4gYSBzdWJjbGFzcyB0byBwcm92aWRlXG4gIC8vIGFsdGVybmF0aXZlIGNvbXBpbGVkIGZvcm1zIGZvciBuYW1lIGxvb2t1cCBhbmQgYnVmZmVyaW5nIHNlbWFudGljc1xuICBuYW1lTG9va3VwOiBmdW5jdGlvbihwYXJlbnQsIG5hbWUgLyogLCB0eXBlKi8pIHtcbiAgICBpZiAoSmF2YVNjcmlwdENvbXBpbGVyLmlzVmFsaWRKYXZhU2NyaXB0VmFyaWFibGVOYW1lKG5hbWUpKSB7XG4gICAgICByZXR1cm4gcGFyZW50ICsgXCIuXCIgKyBuYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFyZW50ICsgXCJbJ1wiICsgbmFtZSArIFwiJ11cIjtcbiAgICB9XG4gIH0sXG4gIGRlcHRoZWRMb29rdXA6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLmFsaWFzZXMubG9va3VwID0gJ3RoaXMubG9va3VwJztcblxuICAgIHJldHVybiAnbG9va3VwKGRlcHRocywgXCInICsgbmFtZSArICdcIiknO1xuICB9LFxuXG4gIGNvbXBpbGVySW5mbzogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldmlzaW9uID0gQ09NUElMRVJfUkVWSVNJT04sXG4gICAgICAgIHZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tyZXZpc2lvbl07XG4gICAgcmV0dXJuIFtyZXZpc2lvbiwgdmVyc2lvbnNdO1xuICB9LFxuXG4gIGFwcGVuZFRvQnVmZmVyOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuICAgICAgcmV0dXJuIFwicmV0dXJuIFwiICsgc3RyaW5nICsgXCI7XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFwcGVuZFRvQnVmZmVyOiB0cnVlLFxuICAgICAgICBjb250ZW50OiBzdHJpbmcsXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbigpIHsgcmV0dXJuIFwiYnVmZmVyICs9IFwiICsgc3RyaW5nICsgXCI7XCI7IH1cbiAgICAgIH07XG4gICAgfVxuICB9LFxuXG4gIGluaXRpYWxpemVCdWZmZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1b3RlZFN0cmluZyhcIlwiKTtcbiAgfSxcblxuICBuYW1lc3BhY2U6IFwiSGFuZGxlYmFyc1wiLFxuICAvLyBFTkQgUFVCTElDIEFQSVxuXG4gIGNvbXBpbGU6IGZ1bmN0aW9uKGVudmlyb25tZW50LCBvcHRpb25zLCBjb250ZXh0LCBhc09iamVjdCkge1xuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuc3RyaW5nUGFyYW1zID0gdGhpcy5vcHRpb25zLnN0cmluZ1BhcmFtcztcbiAgICB0aGlzLnRyYWNrSWRzID0gdGhpcy5vcHRpb25zLnRyYWNrSWRzO1xuICAgIHRoaXMucHJlY29tcGlsZSA9ICFhc09iamVjdDtcblxuICAgIHRoaXMubmFtZSA9IHRoaXMuZW52aXJvbm1lbnQubmFtZTtcbiAgICB0aGlzLmlzQ2hpbGQgPSAhIWNvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dCB8fCB7XG4gICAgICBwcm9ncmFtczogW10sXG4gICAgICBlbnZpcm9ubWVudHM6IFtdXG4gICAgfTtcblxuICAgIHRoaXMucHJlYW1ibGUoKTtcblxuICAgIHRoaXMuc3RhY2tTbG90ID0gMDtcbiAgICB0aGlzLnN0YWNrVmFycyA9IFtdO1xuICAgIHRoaXMuYWxpYXNlcyA9IHt9O1xuICAgIHRoaXMucmVnaXN0ZXJzID0geyBsaXN0OiBbXSB9O1xuICAgIHRoaXMuaGFzaGVzID0gW107XG4gICAgdGhpcy5jb21waWxlU3RhY2sgPSBbXTtcbiAgICB0aGlzLmlubGluZVN0YWNrID0gW107XG5cbiAgICB0aGlzLmNvbXBpbGVDaGlsZHJlbihlbnZpcm9ubWVudCwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnVzZURlcHRocyA9IHRoaXMudXNlRGVwdGhzIHx8IGVudmlyb25tZW50LmRlcHRocy5saXN0Lmxlbmd0aCB8fCB0aGlzLm9wdGlvbnMuY29tcGF0O1xuXG4gICAgdmFyIG9wY29kZXMgPSBlbnZpcm9ubWVudC5vcGNvZGVzLFxuICAgICAgICBvcGNvZGUsXG4gICAgICAgIGksXG4gICAgICAgIGw7XG5cbiAgICBmb3IgKGkgPSAwLCBsID0gb3Bjb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIG9wY29kZSA9IG9wY29kZXNbaV07XG5cbiAgICAgIHRoaXNbb3Bjb2RlLm9wY29kZV0uYXBwbHkodGhpcywgb3Bjb2RlLmFyZ3MpO1xuICAgIH1cblxuICAgIC8vIEZsdXNoIGFueSB0cmFpbGluZyBjb250ZW50IHRoYXQgbWlnaHQgYmUgcGVuZGluZy5cbiAgICB0aGlzLnB1c2hTb3VyY2UoJycpO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAodGhpcy5zdGFja1Nsb3QgfHwgdGhpcy5pbmxpbmVTdGFjay5sZW5ndGggfHwgdGhpcy5jb21waWxlU3RhY2subGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdDb21waWxlIGNvbXBsZXRlZCB3aXRoIGNvbnRlbnQgbGVmdCBvbiBzdGFjaycpO1xuICAgIH1cblxuICAgIHZhciBmbiA9IHRoaXMuY3JlYXRlRnVuY3Rpb25Db250ZXh0KGFzT2JqZWN0KTtcbiAgICBpZiAoIXRoaXMuaXNDaGlsZCkge1xuICAgICAgdmFyIHJldCA9IHtcbiAgICAgICAgY29tcGlsZXI6IHRoaXMuY29tcGlsZXJJbmZvKCksXG4gICAgICAgIG1haW46IGZuXG4gICAgICB9O1xuICAgICAgdmFyIHByb2dyYW1zID0gdGhpcy5jb250ZXh0LnByb2dyYW1zO1xuICAgICAgZm9yIChpID0gMCwgbCA9IHByb2dyYW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAocHJvZ3JhbXNbaV0pIHtcbiAgICAgICAgICByZXRbaV0gPSBwcm9ncmFtc1tpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC51c2VQYXJ0aWFsKSB7XG4gICAgICAgIHJldC51c2VQYXJ0aWFsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZGF0YSkge1xuICAgICAgICByZXQudXNlRGF0YSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcbiAgICAgICAgcmV0LnVzZURlcHRocyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhdCkge1xuICAgICAgICByZXQuY29tcGF0ID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFhc09iamVjdCkge1xuICAgICAgICByZXQuY29tcGlsZXIgPSBKU09OLnN0cmluZ2lmeShyZXQuY29tcGlsZXIpO1xuICAgICAgICByZXQgPSB0aGlzLm9iamVjdExpdGVyYWwocmV0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuO1xuICAgIH1cbiAgfSxcblxuICBwcmVhbWJsZTogZnVuY3Rpb24oKSB7XG4gICAgLy8gdHJhY2sgdGhlIGxhc3QgY29udGV4dCBwdXNoZWQgaW50byBwbGFjZSB0byBhbGxvdyBza2lwcGluZyB0aGVcbiAgICAvLyBnZXRDb250ZXh0IG9wY29kZSB3aGVuIGl0IHdvdWxkIGJlIGEgbm9vcFxuICAgIHRoaXMubGFzdENvbnRleHQgPSAwO1xuICAgIHRoaXMuc291cmNlID0gW107XG4gIH0sXG5cbiAgY3JlYXRlRnVuY3Rpb25Db250ZXh0OiBmdW5jdGlvbihhc09iamVjdCkge1xuICAgIHZhciB2YXJEZWNsYXJhdGlvbnMgPSAnJztcblxuICAgIHZhciBsb2NhbHMgPSB0aGlzLnN0YWNrVmFycy5jb25jYXQodGhpcy5yZWdpc3RlcnMubGlzdCk7XG4gICAgaWYobG9jYWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhckRlY2xhcmF0aW9ucyArPSBcIiwgXCIgKyBsb2NhbHMuam9pbihcIiwgXCIpO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIG1pbmltaXplciBhbGlhcyBtYXBwaW5nc1xuICAgIGZvciAodmFyIGFsaWFzIGluIHRoaXMuYWxpYXNlcykge1xuICAgICAgaWYgKHRoaXMuYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShhbGlhcykpIHtcbiAgICAgICAgdmFyRGVjbGFyYXRpb25zICs9ICcsICcgKyBhbGlhcyArICc9JyArIHRoaXMuYWxpYXNlc1thbGlhc107XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHBhcmFtcyA9IFtcImRlcHRoMFwiLCBcImhlbHBlcnNcIiwgXCJwYXJ0aWFsc1wiLCBcImRhdGFcIl07XG5cbiAgICBpZiAodGhpcy51c2VEZXB0aHMpIHtcbiAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcbiAgICB9XG5cbiAgICAvLyBQZXJmb3JtIGEgc2Vjb25kIHBhc3Mgb3ZlciB0aGUgb3V0cHV0IHRvIG1lcmdlIGNvbnRlbnQgd2hlbiBwb3NzaWJsZVxuICAgIHZhciBzb3VyY2UgPSB0aGlzLm1lcmdlU291cmNlKHZhckRlY2xhcmF0aW9ucyk7XG5cbiAgICBpZiAoYXNPYmplY3QpIHtcbiAgICAgIHBhcmFtcy5wdXNoKHNvdXJjZSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbi5hcHBseSh0aGlzLCBwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ2Z1bmN0aW9uKCcgKyBwYXJhbXMuam9pbignLCcpICsgJykge1xcbiAgJyArIHNvdXJjZSArICd9JztcbiAgICB9XG4gIH0sXG4gIG1lcmdlU291cmNlOiBmdW5jdGlvbih2YXJEZWNsYXJhdGlvbnMpIHtcbiAgICB2YXIgc291cmNlID0gJycsXG4gICAgICAgIGJ1ZmZlcixcbiAgICAgICAgYXBwZW5kT25seSA9ICF0aGlzLmZvcmNlQnVmZmVyLFxuICAgICAgICBhcHBlbmRGaXJzdDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLnNvdXJjZS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdmFyIGxpbmUgPSB0aGlzLnNvdXJjZVtpXTtcbiAgICAgIGlmIChsaW5lLmFwcGVuZFRvQnVmZmVyKSB7XG4gICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICBidWZmZXIgPSBidWZmZXIgKyAnXFxuICAgICsgJyArIGxpbmUuY29udGVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWZmZXIgPSBsaW5lLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgICAgICAgYXBwZW5kRmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgc291cmNlID0gYnVmZmVyICsgJztcXG4gICc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvdXJjZSArPSAnYnVmZmVyICs9ICcgKyBidWZmZXIgKyAnO1xcbiAgJztcbiAgICAgICAgICB9XG4gICAgICAgICAgYnVmZmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHNvdXJjZSArPSBsaW5lICsgJ1xcbiAgJztcblxuICAgICAgICBpZiAoIXRoaXMuZW52aXJvbm1lbnQuaXNTaW1wbGUpIHtcbiAgICAgICAgICBhcHBlbmRPbmx5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYXBwZW5kT25seSkge1xuICAgICAgaWYgKGJ1ZmZlciB8fCAhc291cmNlKSB7XG4gICAgICAgIHNvdXJjZSArPSAncmV0dXJuICcgKyAoYnVmZmVyIHx8ICdcIlwiJykgKyAnO1xcbic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhckRlY2xhcmF0aW9ucyArPSBcIiwgYnVmZmVyID0gXCIgKyAoYXBwZW5kRmlyc3QgPyAnJyA6IHRoaXMuaW5pdGlhbGl6ZUJ1ZmZlcigpKTtcbiAgICAgIGlmIChidWZmZXIpIHtcbiAgICAgICAgc291cmNlICs9ICdyZXR1cm4gYnVmZmVyICsgJyArIGJ1ZmZlciArICc7XFxuJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNvdXJjZSArPSAncmV0dXJuIGJ1ZmZlcjtcXG4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJEZWNsYXJhdGlvbnMpIHtcbiAgICAgIHNvdXJjZSA9ICd2YXIgJyArIHZhckRlY2xhcmF0aW9ucy5zdWJzdHJpbmcoMikgKyAoYXBwZW5kRmlyc3QgPyAnJyA6ICc7XFxuICAnKSArIHNvdXJjZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9LFxuXG4gIC8vIFtibG9ja1ZhbHVlXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiBoYXNoLCBpbnZlcnNlLCBwcm9ncmFtLCB2YWx1ZVxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJldHVybiB2YWx1ZSBvZiBibG9ja0hlbHBlck1pc3NpbmdcbiAgLy9cbiAgLy8gVGhlIHB1cnBvc2Ugb2YgdGhpcyBvcGNvZGUgaXMgdG8gdGFrZSBhIGJsb2NrIG9mIHRoZSBmb3JtXG4gIC8vIGB7eyN0aGlzLmZvb319Li4ue3svdGhpcy5mb299fWAsIHJlc29sdmUgdGhlIHZhbHVlIG9mIGBmb29gLCBhbmRcbiAgLy8gcmVwbGFjZSBpdCBvbiB0aGUgc3RhY2sgd2l0aCB0aGUgcmVzdWx0IG9mIHByb3Blcmx5XG4gIC8vIGludm9raW5nIGJsb2NrSGVscGVyTWlzc2luZy5cbiAgYmxvY2tWYWx1ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHRoaXMuYWxpYXNlcy5ibG9ja0hlbHBlck1pc3NpbmcgPSAnaGVscGVycy5ibG9ja0hlbHBlck1pc3NpbmcnO1xuXG4gICAgdmFyIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcbiAgICB0aGlzLnNldHVwUGFyYW1zKG5hbWUsIDAsIHBhcmFtcyk7XG5cbiAgICB2YXIgYmxvY2tOYW1lID0gdGhpcy5wb3BTdGFjaygpO1xuICAgIHBhcmFtcy5zcGxpY2UoMSwgMCwgYmxvY2tOYW1lKTtcblxuICAgIHRoaXMucHVzaCgnYmxvY2tIZWxwZXJNaXNzaW5nLmNhbGwoJyArIHBhcmFtcy5qb2luKCcsICcpICsgJyknKTtcbiAgfSxcblxuICAvLyBbYW1iaWd1b3VzQmxvY2tWYWx1ZV1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgdmFsdWVcbiAgLy8gQ29tcGlsZXIgdmFsdWUsIGJlZm9yZTogbGFzdEhlbHBlcj12YWx1ZSBvZiBsYXN0IGZvdW5kIGhlbHBlciwgaWYgYW55XG4gIC8vIE9uIHN0YWNrLCBhZnRlciwgaWYgbm8gbGFzdEhlbHBlcjogc2FtZSBhcyBbYmxvY2tWYWx1ZV1cbiAgLy8gT24gc3RhY2ssIGFmdGVyLCBpZiBsYXN0SGVscGVyOiB2YWx1ZVxuICBhbWJpZ3VvdXNCbG9ja1ZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFsaWFzZXMuYmxvY2tIZWxwZXJNaXNzaW5nID0gJ2hlbHBlcnMuYmxvY2tIZWxwZXJNaXNzaW5nJztcblxuICAgIC8vIFdlJ3JlIGJlaW5nIGEgYml0IGNoZWVreSBhbmQgcmV1c2luZyB0aGUgb3B0aW9ucyB2YWx1ZSBmcm9tIHRoZSBwcmlvciBleGVjXG4gICAgdmFyIHBhcmFtcyA9IFt0aGlzLmNvbnRleHROYW1lKDApXTtcbiAgICB0aGlzLnNldHVwUGFyYW1zKCcnLCAwLCBwYXJhbXMsIHRydWUpO1xuXG4gICAgdGhpcy5mbHVzaElubGluZSgpO1xuXG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnRvcFN0YWNrKCk7XG4gICAgcGFyYW1zLnNwbGljZSgxLCAwLCBjdXJyZW50KTtcblxuICAgIHRoaXMucHVzaFNvdXJjZShcImlmICghXCIgKyB0aGlzLmxhc3RIZWxwZXIgKyBcIikgeyBcIiArIGN1cnJlbnQgKyBcIiA9IGJsb2NrSGVscGVyTWlzc2luZy5jYWxsKFwiICsgcGFyYW1zLmpvaW4oXCIsIFwiKSArIFwiKTsgfVwiKTtcbiAgfSxcblxuICAvLyBbYXBwZW5kQ29udGVudF1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogLi4uXG4gIC8vXG4gIC8vIEFwcGVuZHMgdGhlIHN0cmluZyB2YWx1ZSBvZiBgY29udGVudGAgdG8gdGhlIGN1cnJlbnQgYnVmZmVyXG4gIGFwcGVuZENvbnRlbnQ6IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nQ29udGVudCkge1xuICAgICAgY29udGVudCA9IHRoaXMucGVuZGluZ0NvbnRlbnQgKyBjb250ZW50O1xuICAgIH1cblxuICAgIHRoaXMucGVuZGluZ0NvbnRlbnQgPSBjb250ZW50O1xuICB9LFxuXG4gIC8vIFthcHBlbmRdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cbiAgLy9cbiAgLy8gQ29lcmNlcyBgdmFsdWVgIHRvIGEgU3RyaW5nIGFuZCBhcHBlbmRzIGl0IHRvIHRoZSBjdXJyZW50IGJ1ZmZlci5cbiAgLy9cbiAgLy8gSWYgYHZhbHVlYCBpcyB0cnV0aHksIG9yIDAsIGl0IGlzIGNvZXJjZWQgaW50byBhIHN0cmluZyBhbmQgYXBwZW5kZWRcbiAgLy8gT3RoZXJ3aXNlLCB0aGUgZW1wdHkgc3RyaW5nIGlzIGFwcGVuZGVkXG4gIGFwcGVuZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gRm9yY2UgYW55dGhpbmcgdGhhdCBpcyBpbmxpbmVkIG9udG8gdGhlIHN0YWNrIHNvIHdlIGRvbid0IGhhdmUgZHVwbGljYXRpb25cbiAgICAvLyB3aGVuIHdlIGV4YW1pbmUgbG9jYWxcbiAgICB0aGlzLmZsdXNoSW5saW5lKCk7XG4gICAgdmFyIGxvY2FsID0gdGhpcy5wb3BTdGFjaygpO1xuICAgIHRoaXMucHVzaFNvdXJjZSgnaWYgKCcgKyBsb2NhbCArICcgIT0gbnVsbCkgeyAnICsgdGhpcy5hcHBlbmRUb0J1ZmZlcihsb2NhbCkgKyAnIH0nKTtcbiAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5pc1NpbXBsZSkge1xuICAgICAgdGhpcy5wdXNoU291cmNlKFwiZWxzZSB7IFwiICsgdGhpcy5hcHBlbmRUb0J1ZmZlcihcIicnXCIpICsgXCIgfVwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gW2FwcGVuZEVzY2FwZWRdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cbiAgLy9cbiAgLy8gRXNjYXBlIGB2YWx1ZWAgYW5kIGFwcGVuZCBpdCB0byB0aGUgYnVmZmVyXG4gIGFwcGVuZEVzY2FwZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWxpYXNlcy5lc2NhcGVFeHByZXNzaW9uID0gJ3RoaXMuZXNjYXBlRXhwcmVzc2lvbic7XG5cbiAgICB0aGlzLnB1c2hTb3VyY2UodGhpcy5hcHBlbmRUb0J1ZmZlcihcImVzY2FwZUV4cHJlc3Npb24oXCIgKyB0aGlzLnBvcFN0YWNrKCkgKyBcIilcIikpO1xuICB9LFxuXG4gIC8vIFtnZXRDb250ZXh0XVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiAuLi5cbiAgLy8gQ29tcGlsZXIgdmFsdWUsIGFmdGVyOiBsYXN0Q29udGV4dD1kZXB0aFxuICAvL1xuICAvLyBTZXQgdGhlIHZhbHVlIG9mIHRoZSBgbGFzdENvbnRleHRgIGNvbXBpbGVyIHZhbHVlIHRvIHRoZSBkZXB0aFxuICBnZXRDb250ZXh0OiBmdW5jdGlvbihkZXB0aCkge1xuICAgIHRoaXMubGFzdENvbnRleHQgPSBkZXB0aDtcbiAgfSxcblxuICAvLyBbcHVzaENvbnRleHRdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0LCAuLi5cbiAgLy9cbiAgLy8gUHVzaGVzIHRoZSB2YWx1ZSBvZiB0aGUgY3VycmVudCBjb250ZXh0IG9udG8gdGhlIHN0YWNrLlxuICBwdXNoQ29udGV4dDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHRoaXMuY29udGV4dE5hbWUodGhpcy5sYXN0Q29udGV4dCkpO1xuICB9LFxuXG4gIC8vIFtsb29rdXBPbkNvbnRleHRdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IGN1cnJlbnRDb250ZXh0W25hbWVdLCAuLi5cbiAgLy9cbiAgLy8gTG9va3MgdXAgdGhlIHZhbHVlIG9mIGBuYW1lYCBvbiB0aGUgY3VycmVudCBjb250ZXh0IGFuZCBwdXNoZXNcbiAgLy8gaXQgb250byB0aGUgc3RhY2suXG4gIGxvb2t1cE9uQ29udGV4dDogZnVuY3Rpb24ocGFydHMsIGZhbHN5LCBzY29wZWQpIHtcbiAgICAvKmpzaGludCAtVzA4MyAqL1xuICAgIHZhciBpID0gMCxcbiAgICAgICAgbGVuID0gcGFydHMubGVuZ3RoO1xuXG4gICAgaWYgKCFzY29wZWQgJiYgdGhpcy5vcHRpb25zLmNvbXBhdCAmJiAhdGhpcy5sYXN0Q29udGV4dCkge1xuICAgICAgLy8gVGhlIGRlcHRoZWQgcXVlcnkgaXMgZXhwZWN0ZWQgdG8gaGFuZGxlIHRoZSB1bmRlZmluZWQgbG9naWMgZm9yIHRoZSByb290IGxldmVsIHRoYXRcbiAgICAgIC8vIGlzIGltcGxlbWVudGVkIGJlbG93LCBzbyB3ZSBldmFsdWF0ZSB0aGF0IGRpcmVjdGx5IGluIGNvbXBhdCBtb2RlXG4gICAgICB0aGlzLnB1c2godGhpcy5kZXB0aGVkTG9va3VwKHBhcnRzW2krK10pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wdXNoQ29udGV4dCgpO1xuICAgIH1cblxuICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRoaXMucmVwbGFjZVN0YWNrKGZ1bmN0aW9uKGN1cnJlbnQpIHtcbiAgICAgICAgdmFyIGxvb2t1cCA9IHRoaXMubmFtZUxvb2t1cChjdXJyZW50LCBwYXJ0c1tpXSwgJ2NvbnRleHQnKTtcbiAgICAgICAgLy8gV2Ugd2FudCB0byBlbnN1cmUgdGhhdCB6ZXJvIGFuZCBmYWxzZSBhcmUgaGFuZGxlZCBwcm9wZXJseSBpZiB0aGUgY29udGV4dCAoZmFsc3kgZmxhZylcbiAgICAgICAgLy8gbmVlZHMgdG8gaGF2ZSB0aGUgc3BlY2lhbCBoYW5kbGluZyBmb3IgdGhlc2UgdmFsdWVzLlxuICAgICAgICBpZiAoIWZhbHN5KSB7XG4gICAgICAgICAgcmV0dXJuICcgIT0gbnVsbCA/ICcgKyBsb29rdXAgKyAnIDogJyArIGN1cnJlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbiB1c2UgZ2VuZXJpYyBmYWxzeSBoYW5kbGluZ1xuICAgICAgICAgIHJldHVybiAnICYmICcgKyBsb29rdXA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBbbG9va3VwRGF0YV1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogZGF0YSwgLi4uXG4gIC8vXG4gIC8vIFB1c2ggdGhlIGRhdGEgbG9va3VwIG9wZXJhdG9yXG4gIGxvb2t1cERhdGE6IGZ1bmN0aW9uKGRlcHRoLCBwYXJ0cykge1xuICAgIC8qanNoaW50IC1XMDgzICovXG4gICAgaWYgKCFkZXB0aCkge1xuICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCdkYXRhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgndGhpcy5kYXRhKGRhdGEsICcgKyBkZXB0aCArICcpJyk7XG4gICAgfVxuXG4gICAgdmFyIGxlbiA9IHBhcnRzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0aGlzLnJlcGxhY2VTdGFjayhmdW5jdGlvbihjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiAnICYmICcgKyB0aGlzLm5hbWVMb29rdXAoY3VycmVudCwgcGFydHNbaV0sICdkYXRhJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gW3Jlc29sdmVQb3NzaWJsZUxhbWJkYV1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogdmFsdWUsIC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHJlc29sdmVkIHZhbHVlLCAuLi5cbiAgLy9cbiAgLy8gSWYgdGhlIGB2YWx1ZWAgaXMgYSBsYW1iZGEsIHJlcGxhY2UgaXQgb24gdGhlIHN0YWNrIGJ5XG4gIC8vIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGxhbWJkYVxuICByZXNvbHZlUG9zc2libGVMYW1iZGE6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWxpYXNlcy5sYW1iZGEgPSAndGhpcy5sYW1iZGEnO1xuXG4gICAgdGhpcy5wdXNoKCdsYW1iZGEoJyArIHRoaXMucG9wU3RhY2soKSArICcsICcgKyB0aGlzLmNvbnRleHROYW1lKDApICsgJyknKTtcbiAgfSxcblxuICAvLyBbcHVzaFN0cmluZ1BhcmFtXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiBzdHJpbmcsIGN1cnJlbnRDb250ZXh0LCAuLi5cbiAgLy9cbiAgLy8gVGhpcyBvcGNvZGUgaXMgZGVzaWduZWQgZm9yIHVzZSBpbiBzdHJpbmcgbW9kZSwgd2hpY2hcbiAgLy8gcHJvdmlkZXMgdGhlIHN0cmluZyB2YWx1ZSBvZiBhIHBhcmFtZXRlciBhbG9uZyB3aXRoIGl0c1xuICAvLyBkZXB0aCByYXRoZXIgdGhhbiByZXNvbHZpbmcgaXQgaW1tZWRpYXRlbHkuXG4gIHB1c2hTdHJpbmdQYXJhbTogZnVuY3Rpb24oc3RyaW5nLCB0eXBlKSB7XG4gICAgdGhpcy5wdXNoQ29udGV4dCgpO1xuICAgIHRoaXMucHVzaFN0cmluZyh0eXBlKTtcblxuICAgIC8vIElmIGl0J3MgYSBzdWJleHByZXNzaW9uLCB0aGUgc3RyaW5nIHJlc3VsdFxuICAgIC8vIHdpbGwgYmUgcHVzaGVkIGFmdGVyIHRoaXMgb3Bjb2RlLlxuICAgIGlmICh0eXBlICE9PSAnc2V4cHInKSB7XG4gICAgICBpZiAodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5wdXNoU3RyaW5nKHN0cmluZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoc3RyaW5nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZW1wdHlIYXNoOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwoJ3t9Jyk7XG5cbiAgICBpZiAodGhpcy50cmFja0lkcykge1xuICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoSWRzXG4gICAgfVxuICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuICAgICAgdGhpcy5wdXNoKCd7fScpOyAvLyBoYXNoQ29udGV4dHNcbiAgICAgIHRoaXMucHVzaCgne30nKTsgLy8gaGFzaFR5cGVzXG4gICAgfVxuICB9LFxuICBwdXNoSGFzaDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaGFzaCkge1xuICAgICAgdGhpcy5oYXNoZXMucHVzaCh0aGlzLmhhc2gpO1xuICAgIH1cbiAgICB0aGlzLmhhc2ggPSB7dmFsdWVzOiBbXSwgdHlwZXM6IFtdLCBjb250ZXh0czogW10sIGlkczogW119O1xuICB9LFxuICBwb3BIYXNoOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGFzaCA9IHRoaXMuaGFzaDtcbiAgICB0aGlzLmhhc2ggPSB0aGlzLmhhc2hlcy5wb3AoKTtcblxuICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG4gICAgICB0aGlzLnB1c2goJ3snICsgaGFzaC5pZHMuam9pbignLCcpICsgJ30nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG4gICAgICB0aGlzLnB1c2goJ3snICsgaGFzaC5jb250ZXh0cy5qb2luKCcsJykgKyAnfScpO1xuICAgICAgdGhpcy5wdXNoKCd7JyArIGhhc2gudHlwZXMuam9pbignLCcpICsgJ30nKTtcbiAgICB9XG5cbiAgICB0aGlzLnB1c2goJ3tcXG4gICAgJyArIGhhc2gudmFsdWVzLmpvaW4oJyxcXG4gICAgJykgKyAnXFxuICB9Jyk7XG4gIH0sXG5cbiAgLy8gW3B1c2hTdHJpbmddXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHF1b3RlZFN0cmluZyhzdHJpbmcpLCAuLi5cbiAgLy9cbiAgLy8gUHVzaCBhIHF1b3RlZCB2ZXJzaW9uIG9mIGBzdHJpbmdgIG9udG8gdGhlIHN0YWNrXG4gIHB1c2hTdHJpbmc6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCh0aGlzLnF1b3RlZFN0cmluZyhzdHJpbmcpKTtcbiAgfSxcblxuICAvLyBbcHVzaF1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogZXhwciwgLi4uXG4gIC8vXG4gIC8vIFB1c2ggYW4gZXhwcmVzc2lvbiBvbnRvIHRoZSBzdGFja1xuICBwdXNoOiBmdW5jdGlvbihleHByKSB7XG4gICAgdGhpcy5pbmxpbmVTdGFjay5wdXNoKGV4cHIpO1xuICAgIHJldHVybiBleHByO1xuICB9LFxuXG4gIC8vIFtwdXNoTGl0ZXJhbF1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogdmFsdWUsIC4uLlxuICAvL1xuICAvLyBQdXNoZXMgYSB2YWx1ZSBvbnRvIHRoZSBzdGFjay4gVGhpcyBvcGVyYXRpb24gcHJldmVudHNcbiAgLy8gdGhlIGNvbXBpbGVyIGZyb20gY3JlYXRpbmcgYSB0ZW1wb3JhcnkgdmFyaWFibGUgdG8gaG9sZFxuICAvLyBpdC5cbiAgcHVzaExpdGVyYWw6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKHZhbHVlKTtcbiAgfSxcblxuICAvLyBbcHVzaFByb2dyYW1dXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IHByb2dyYW0oZ3VpZCksIC4uLlxuICAvL1xuICAvLyBQdXNoIGEgcHJvZ3JhbSBleHByZXNzaW9uIG9udG8gdGhlIHN0YWNrLiBUaGlzIHRha2VzXG4gIC8vIGEgY29tcGlsZS10aW1lIGd1aWQgYW5kIGNvbnZlcnRzIGl0IGludG8gYSBydW50aW1lLWFjY2Vzc2libGVcbiAgLy8gZXhwcmVzc2lvbi5cbiAgcHVzaFByb2dyYW06IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICBpZiAoZ3VpZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnB1c2hTdGFja0xpdGVyYWwodGhpcy5wcm9ncmFtRXhwcmVzc2lvbihndWlkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbChudWxsKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gW2ludm9rZUhlbHBlcl1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cbiAgLy9cbiAgLy8gUG9wcyBvZmYgdGhlIGhlbHBlcidzIHBhcmFtZXRlcnMsIGludm9rZXMgdGhlIGhlbHBlcixcbiAgLy8gYW5kIHB1c2hlcyB0aGUgaGVscGVyJ3MgcmV0dXJuIHZhbHVlIG9udG8gdGhlIHN0YWNrLlxuICAvL1xuICAvLyBJZiB0aGUgaGVscGVyIGlzIG5vdCBmb3VuZCwgYGhlbHBlck1pc3NpbmdgIGlzIGNhbGxlZC5cbiAgaW52b2tlSGVscGVyOiBmdW5jdGlvbihwYXJhbVNpemUsIG5hbWUsIGlzU2ltcGxlKSB7XG4gICAgdGhpcy5hbGlhc2VzLmhlbHBlck1pc3NpbmcgPSAnaGVscGVycy5oZWxwZXJNaXNzaW5nJztcblxuICAgIHZhciBub25IZWxwZXIgPSB0aGlzLnBvcFN0YWNrKCk7XG4gICAgdmFyIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIocGFyYW1TaXplLCBuYW1lKTtcblxuICAgIHZhciBsb29rdXAgPSAoaXNTaW1wbGUgPyBoZWxwZXIubmFtZSArICcgfHwgJyA6ICcnKSArIG5vbkhlbHBlciArICcgfHwgaGVscGVyTWlzc2luZyc7XG4gICAgdGhpcy5wdXNoKCcoKCcgKyBsb29rdXAgKyAnKS5jYWxsKCcgKyBoZWxwZXIuY2FsbFBhcmFtcyArICcpKScpO1xuICB9LFxuXG4gIC8vIFtpbnZva2VLbm93bkhlbHBlcl1cbiAgLy9cbiAgLy8gT24gc3RhY2ssIGJlZm9yZTogaGFzaCwgaW52ZXJzZSwgcHJvZ3JhbSwgcGFyYW1zLi4uLCAuLi5cbiAgLy8gT24gc3RhY2ssIGFmdGVyOiByZXN1bHQgb2YgaGVscGVyIGludm9jYXRpb25cbiAgLy9cbiAgLy8gVGhpcyBvcGVyYXRpb24gaXMgdXNlZCB3aGVuIHRoZSBoZWxwZXIgaXMga25vd24gdG8gZXhpc3QsXG4gIC8vIHNvIGEgYGhlbHBlck1pc3NpbmdgIGZhbGxiYWNrIGlzIG5vdCByZXF1aXJlZC5cbiAgaW52b2tlS25vd25IZWxwZXI6IGZ1bmN0aW9uKHBhcmFtU2l6ZSwgbmFtZSkge1xuICAgIHZhciBoZWxwZXIgPSB0aGlzLnNldHVwSGVscGVyKHBhcmFtU2l6ZSwgbmFtZSk7XG4gICAgdGhpcy5wdXNoKGhlbHBlci5uYW1lICsgXCIuY2FsbChcIiArIGhlbHBlci5jYWxsUGFyYW1zICsgXCIpXCIpO1xuICB9LFxuXG4gIC8vIFtpbnZva2VBbWJpZ3VvdXNdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IGhhc2gsIGludmVyc2UsIHByb2dyYW0sIHBhcmFtcy4uLiwgLi4uXG4gIC8vIE9uIHN0YWNrLCBhZnRlcjogcmVzdWx0IG9mIGRpc2FtYmlndWF0aW9uXG4gIC8vXG4gIC8vIFRoaXMgb3BlcmF0aW9uIGlzIHVzZWQgd2hlbiBhbiBleHByZXNzaW9uIGxpa2UgYHt7Zm9vfX1gXG4gIC8vIGlzIHByb3ZpZGVkLCBidXQgd2UgZG9uJ3Qga25vdyBhdCBjb21waWxlLXRpbWUgd2hldGhlciBpdFxuICAvLyBpcyBhIGhlbHBlciBvciBhIHBhdGguXG4gIC8vXG4gIC8vIFRoaXMgb3BlcmF0aW9uIGVtaXRzIG1vcmUgY29kZSB0aGFuIHRoZSBvdGhlciBvcHRpb25zLFxuICAvLyBhbmQgY2FuIGJlIGF2b2lkZWQgYnkgcGFzc2luZyB0aGUgYGtub3duSGVscGVyc2AgYW5kXG4gIC8vIGBrbm93bkhlbHBlcnNPbmx5YCBmbGFncyBhdCBjb21waWxlLXRpbWUuXG4gIGludm9rZUFtYmlndW91czogZnVuY3Rpb24obmFtZSwgaGVscGVyQ2FsbCkge1xuICAgIHRoaXMuYWxpYXNlcy5mdW5jdGlvblR5cGUgPSAnXCJmdW5jdGlvblwiJztcbiAgICB0aGlzLmFsaWFzZXMuaGVscGVyTWlzc2luZyA9ICdoZWxwZXJzLmhlbHBlck1pc3NpbmcnO1xuICAgIHRoaXMudXNlUmVnaXN0ZXIoJ2hlbHBlcicpO1xuXG4gICAgdmFyIG5vbkhlbHBlciA9IHRoaXMucG9wU3RhY2soKTtcblxuICAgIHRoaXMuZW1wdHlIYXNoKCk7XG4gICAgdmFyIGhlbHBlciA9IHRoaXMuc2V0dXBIZWxwZXIoMCwgbmFtZSwgaGVscGVyQ2FsbCk7XG5cbiAgICB2YXIgaGVscGVyTmFtZSA9IHRoaXMubGFzdEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKTtcblxuICAgIHRoaXMucHVzaChcbiAgICAgICcoKGhlbHBlciA9IChoZWxwZXIgPSAnICsgaGVscGVyTmFtZSArICcgfHwgJyArIG5vbkhlbHBlciArICcpICE9IG51bGwgPyBoZWxwZXIgOiBoZWxwZXJNaXNzaW5nJ1xuICAgICAgICArIChoZWxwZXIucGFyYW1zSW5pdCA/ICcpLCgnICsgaGVscGVyLnBhcmFtc0luaXQgOiAnJykgKyAnKSwnXG4gICAgICArICcodHlwZW9mIGhlbHBlciA9PT0gZnVuY3Rpb25UeXBlID8gaGVscGVyLmNhbGwoJyArIGhlbHBlci5jYWxsUGFyYW1zICsgJykgOiBoZWxwZXIpKScpO1xuICB9LFxuXG4gIC8vIFtpbnZva2VQYXJ0aWFsXVxuICAvL1xuICAvLyBPbiBzdGFjaywgYmVmb3JlOiBjb250ZXh0LCAuLi5cbiAgLy8gT24gc3RhY2sgYWZ0ZXI6IHJlc3VsdCBvZiBwYXJ0aWFsIGludm9jYXRpb25cbiAgLy9cbiAgLy8gVGhpcyBvcGVyYXRpb24gcG9wcyBvZmYgYSBjb250ZXh0LCBpbnZva2VzIGEgcGFydGlhbCB3aXRoIHRoYXQgY29udGV4dCxcbiAgLy8gYW5kIHB1c2hlcyB0aGUgcmVzdWx0IG9mIHRoZSBpbnZvY2F0aW9uIGJhY2suXG4gIGludm9rZVBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIGluZGVudCkge1xuICAgIHZhciBwYXJhbXMgPSBbdGhpcy5uYW1lTG9va3VwKCdwYXJ0aWFscycsIG5hbWUsICdwYXJ0aWFsJyksIFwiJ1wiICsgaW5kZW50ICsgXCInXCIsIFwiJ1wiICsgbmFtZSArIFwiJ1wiLCB0aGlzLnBvcFN0YWNrKCksIHRoaXMucG9wU3RhY2soKSwgXCJoZWxwZXJzXCIsIFwicGFydGlhbHNcIl07XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcbiAgICAgIHBhcmFtcy5wdXNoKFwiZGF0YVwiKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcbiAgICAgIHBhcmFtcy5wdXNoKCd1bmRlZmluZWQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXQpIHtcbiAgICAgIHBhcmFtcy5wdXNoKCdkZXB0aHMnKTtcbiAgICB9XG5cbiAgICB0aGlzLnB1c2goXCJ0aGlzLmludm9rZVBhcnRpYWwoXCIgKyBwYXJhbXMuam9pbihcIiwgXCIpICsgXCIpXCIpO1xuICB9LFxuXG4gIC8vIFthc3NpZ25Ub0hhc2hdXG4gIC8vXG4gIC8vIE9uIHN0YWNrLCBiZWZvcmU6IHZhbHVlLCAuLi4sIGhhc2gsIC4uLlxuICAvLyBPbiBzdGFjaywgYWZ0ZXI6IC4uLiwgaGFzaCwgLi4uXG4gIC8vXG4gIC8vIFBvcHMgYSB2YWx1ZSBvZmYgdGhlIHN0YWNrIGFuZCBhc3NpZ25zIGl0IHRvIHRoZSBjdXJyZW50IGhhc2hcbiAgYXNzaWduVG9IYXNoOiBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLnBvcFN0YWNrKCksXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGlkO1xuXG4gICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcbiAgICAgIGlkID0gdGhpcy5wb3BTdGFjaygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdHJpbmdQYXJhbXMpIHtcbiAgICAgIHR5cGUgPSB0aGlzLnBvcFN0YWNrKCk7XG4gICAgICBjb250ZXh0ID0gdGhpcy5wb3BTdGFjaygpO1xuICAgIH1cblxuICAgIHZhciBoYXNoID0gdGhpcy5oYXNoO1xuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICBoYXNoLmNvbnRleHRzLnB1c2goXCInXCIgKyBrZXkgKyBcIic6IFwiICsgY29udGV4dCk7XG4gICAgfVxuICAgIGlmICh0eXBlKSB7XG4gICAgICBoYXNoLnR5cGVzLnB1c2goXCInXCIgKyBrZXkgKyBcIic6IFwiICsgdHlwZSk7XG4gICAgfVxuICAgIGlmIChpZCkge1xuICAgICAgaGFzaC5pZHMucHVzaChcIidcIiArIGtleSArIFwiJzogXCIgKyBpZCk7XG4gICAgfVxuICAgIGhhc2gudmFsdWVzLnB1c2goXCInXCIgKyBrZXkgKyBcIic6IChcIiArIHZhbHVlICsgXCIpXCIpO1xuICB9LFxuXG4gIHB1c2hJZDogZnVuY3Rpb24odHlwZSwgbmFtZSkge1xuICAgIGlmICh0eXBlID09PSAnSUQnIHx8IHR5cGUgPT09ICdEQVRBJykge1xuICAgICAgdGhpcy5wdXNoU3RyaW5nKG5hbWUpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NleHByJykge1xuICAgICAgdGhpcy5wdXNoU3RhY2tMaXRlcmFsKCd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHVzaFN0YWNrTGl0ZXJhbCgnbnVsbCcpO1xuICAgIH1cbiAgfSxcblxuICAvLyBIRUxQRVJTXG5cbiAgY29tcGlsZXI6IEphdmFTY3JpcHRDb21waWxlcixcblxuICBjb21waWxlQ2hpbGRyZW46IGZ1bmN0aW9uKGVudmlyb25tZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gZW52aXJvbm1lbnQuY2hpbGRyZW4sIGNoaWxkLCBjb21waWxlcjtcblxuICAgIGZvcih2YXIgaT0wLCBsPWNoaWxkcmVuLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBjb21waWxlciA9IG5ldyB0aGlzLmNvbXBpbGVyKCk7XG5cbiAgICAgIHZhciBpbmRleCA9IHRoaXMubWF0Y2hFeGlzdGluZ1Byb2dyYW0oY2hpbGQpO1xuXG4gICAgICBpZiAoaW5kZXggPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmNvbnRleHQucHJvZ3JhbXMucHVzaCgnJyk7ICAgICAvLyBQbGFjZWhvbGRlciB0byBwcmV2ZW50IG5hbWUgY29uZmxpY3RzIGZvciBuZXN0ZWQgY2hpbGRyZW5cbiAgICAgICAgaW5kZXggPSB0aGlzLmNvbnRleHQucHJvZ3JhbXMubGVuZ3RoO1xuICAgICAgICBjaGlsZC5pbmRleCA9IGluZGV4O1xuICAgICAgICBjaGlsZC5uYW1lID0gJ3Byb2dyYW0nICsgaW5kZXg7XG4gICAgICAgIHRoaXMuY29udGV4dC5wcm9ncmFtc1tpbmRleF0gPSBjb21waWxlci5jb21waWxlKGNoaWxkLCBvcHRpb25zLCB0aGlzLmNvbnRleHQsICF0aGlzLnByZWNvbXBpbGUpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZW52aXJvbm1lbnRzW2luZGV4XSA9IGNoaWxkO1xuXG4gICAgICAgIHRoaXMudXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMgfHwgY29tcGlsZXIudXNlRGVwdGhzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuaW5kZXggPSBpbmRleDtcbiAgICAgICAgY2hpbGQubmFtZSA9ICdwcm9ncmFtJyArIGluZGV4O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWF0Y2hFeGlzdGluZ1Byb2dyYW06IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHZhciBlbnZpcm9ubWVudCA9IHRoaXMuY29udGV4dC5lbnZpcm9ubWVudHNbaV07XG4gICAgICBpZiAoZW52aXJvbm1lbnQgJiYgZW52aXJvbm1lbnQuZXF1YWxzKGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcHJvZ3JhbUV4cHJlc3Npb246IGZ1bmN0aW9uKGd1aWQpIHtcbiAgICB2YXIgY2hpbGQgPSB0aGlzLmVudmlyb25tZW50LmNoaWxkcmVuW2d1aWRdLFxuICAgICAgICBkZXB0aHMgPSBjaGlsZC5kZXB0aHMubGlzdCxcbiAgICAgICAgdXNlRGVwdGhzID0gdGhpcy51c2VEZXB0aHMsXG4gICAgICAgIGRlcHRoO1xuXG4gICAgdmFyIHByb2dyYW1QYXJhbXMgPSBbY2hpbGQuaW5kZXgsICdkYXRhJ107XG5cbiAgICBpZiAodXNlRGVwdGhzKSB7XG4gICAgICBwcm9ncmFtUGFyYW1zLnB1c2goJ2RlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiAndGhpcy5wcm9ncmFtKCcgKyBwcm9ncmFtUGFyYW1zLmpvaW4oJywgJykgKyAnKSc7XG4gIH0sXG5cbiAgdXNlUmVnaXN0ZXI6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBpZighdGhpcy5yZWdpc3RlcnNbbmFtZV0pIHtcbiAgICAgIHRoaXMucmVnaXN0ZXJzW25hbWVdID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVnaXN0ZXJzLmxpc3QucHVzaChuYW1lKTtcbiAgICB9XG4gIH0sXG5cbiAgcHVzaFN0YWNrTGl0ZXJhbDogZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLnB1c2gobmV3IExpdGVyYWwoaXRlbSkpO1xuICB9LFxuXG4gIHB1c2hTb3VyY2U6IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIGlmICh0aGlzLnBlbmRpbmdDb250ZW50KSB7XG4gICAgICB0aGlzLnNvdXJjZS5wdXNoKHRoaXMuYXBwZW5kVG9CdWZmZXIodGhpcy5xdW90ZWRTdHJpbmcodGhpcy5wZW5kaW5nQ29udGVudCkpKTtcbiAgICAgIHRoaXMucGVuZGluZ0NvbnRlbnQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgdGhpcy5zb3VyY2UucHVzaChzb3VyY2UpO1xuICAgIH1cbiAgfSxcblxuICBwdXNoU3RhY2s6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB0aGlzLmZsdXNoSW5saW5lKCk7XG5cbiAgICB2YXIgc3RhY2sgPSB0aGlzLmluY3JTdGFjaygpO1xuICAgIHRoaXMucHVzaFNvdXJjZShzdGFjayArIFwiID0gXCIgKyBpdGVtICsgXCI7XCIpO1xuICAgIHRoaXMuY29tcGlsZVN0YWNrLnB1c2goc3RhY2spO1xuICAgIHJldHVybiBzdGFjaztcbiAgfSxcblxuICByZXBsYWNlU3RhY2s6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgdmFyIHByZWZpeCA9ICcnLFxuICAgICAgICBpbmxpbmUgPSB0aGlzLmlzSW5saW5lKCksXG4gICAgICAgIHN0YWNrLFxuICAgICAgICBjcmVhdGVkU3RhY2ssXG4gICAgICAgIHVzZWRMaXRlcmFsO1xuXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAoIXRoaXMuaXNJbmxpbmUoKSkge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbigncmVwbGFjZVN0YWNrIG9uIG5vbi1pbmxpbmUnKTtcbiAgICB9XG5cbiAgICAvLyBXZSB3YW50IHRvIG1lcmdlIHRoZSBpbmxpbmUgc3RhdGVtZW50IGludG8gdGhlIHJlcGxhY2VtZW50IHN0YXRlbWVudCB2aWEgJywnXG4gICAgdmFyIHRvcCA9IHRoaXMucG9wU3RhY2sodHJ1ZSk7XG5cbiAgICBpZiAodG9wIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuICAgICAgLy8gTGl0ZXJhbHMgZG8gbm90IG5lZWQgdG8gYmUgaW5saW5lZFxuICAgICAgcHJlZml4ID0gc3RhY2sgPSB0b3AudmFsdWU7XG4gICAgICB1c2VkTGl0ZXJhbCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdldCBvciBjcmVhdGUgdGhlIGN1cnJlbnQgc3RhY2sgbmFtZSBmb3IgdXNlIGJ5IHRoZSBpbmxpbmVcbiAgICAgIGNyZWF0ZWRTdGFjayA9ICF0aGlzLnN0YWNrU2xvdDtcbiAgICAgIHZhciBuYW1lID0gIWNyZWF0ZWRTdGFjayA/IHRoaXMudG9wU3RhY2tOYW1lKCkgOiB0aGlzLmluY3JTdGFjaygpO1xuXG4gICAgICBwcmVmaXggPSAnKCcgKyB0aGlzLnB1c2gobmFtZSkgKyAnID0gJyArIHRvcCArICcpJztcbiAgICAgIHN0YWNrID0gdGhpcy50b3BTdGFjaygpO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdGFjayk7XG5cbiAgICBpZiAoIXVzZWRMaXRlcmFsKSB7XG4gICAgICB0aGlzLnBvcFN0YWNrKCk7XG4gICAgfVxuICAgIGlmIChjcmVhdGVkU3RhY2spIHtcbiAgICAgIHRoaXMuc3RhY2tTbG90LS07XG4gICAgfVxuICAgIHRoaXMucHVzaCgnKCcgKyBwcmVmaXggKyBpdGVtICsgJyknKTtcbiAgfSxcblxuICBpbmNyU3RhY2s6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhY2tTbG90Kys7XG4gICAgaWYodGhpcy5zdGFja1Nsb3QgPiB0aGlzLnN0YWNrVmFycy5sZW5ndGgpIHsgdGhpcy5zdGFja1ZhcnMucHVzaChcInN0YWNrXCIgKyB0aGlzLnN0YWNrU2xvdCk7IH1cbiAgICByZXR1cm4gdGhpcy50b3BTdGFja05hbWUoKTtcbiAgfSxcbiAgdG9wU3RhY2tOYW1lOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJzdGFja1wiICsgdGhpcy5zdGFja1Nsb3Q7XG4gIH0sXG4gIGZsdXNoSW5saW5lOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5saW5lU3RhY2sgPSB0aGlzLmlubGluZVN0YWNrO1xuICAgIGlmIChpbmxpbmVTdGFjay5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5saW5lU3RhY2sgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBpbmxpbmVTdGFjay5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgZW50cnkgPSBpbmxpbmVTdGFja1tpXTtcbiAgICAgICAgaWYgKGVudHJ5IGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuICAgICAgICAgIHRoaXMuY29tcGlsZVN0YWNrLnB1c2goZW50cnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHVzaFN0YWNrKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaXNJbmxpbmU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlubGluZVN0YWNrLmxlbmd0aDtcbiAgfSxcblxuICBwb3BTdGFjazogZnVuY3Rpb24od3JhcHBlZCkge1xuICAgIHZhciBpbmxpbmUgPSB0aGlzLmlzSW5saW5lKCksXG4gICAgICAgIGl0ZW0gPSAoaW5saW5lID8gdGhpcy5pbmxpbmVTdGFjayA6IHRoaXMuY29tcGlsZVN0YWNrKS5wb3AoKTtcblxuICAgIGlmICghd3JhcHBlZCAmJiAoaXRlbSBpbnN0YW5jZW9mIExpdGVyYWwpKSB7XG4gICAgICByZXR1cm4gaXRlbS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFpbmxpbmUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgaWYgKCF0aGlzLnN0YWNrU2xvdCkge1xuICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ0ludmFsaWQgc3RhY2sgcG9wJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFja1Nsb3QtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgfSxcblxuICB0b3BTdGFjazogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YWNrID0gKHRoaXMuaXNJbmxpbmUoKSA/IHRoaXMuaW5saW5lU3RhY2sgOiB0aGlzLmNvbXBpbGVTdGFjayksXG4gICAgICAgIGl0ZW0gPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgIGlmIChpdGVtIGluc3RhbmNlb2YgTGl0ZXJhbCkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cbiAgfSxcblxuICBjb250ZXh0TmFtZTogZnVuY3Rpb24oY29udGV4dCkge1xuICAgIGlmICh0aGlzLnVzZURlcHRocyAmJiBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gJ2RlcHRoc1snICsgY29udGV4dCArICddJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdkZXB0aCcgKyBjb250ZXh0O1xuICAgIH1cbiAgfSxcblxuICBxdW90ZWRTdHJpbmc6IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiAnXCInICsgc3RyXG4gICAgICAucmVwbGFjZSgvXFxcXC9nLCAnXFxcXFxcXFwnKVxuICAgICAgLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKVxuICAgICAgLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuICAgICAgLnJlcGxhY2UoL1xcci9nLCAnXFxcXHInKVxuICAgICAgLnJlcGxhY2UoL1xcdTIwMjgvZywgJ1xcXFx1MjAyOCcpICAgLy8gUGVyIEVjbWEtMjYyIDcuMyArIDcuOC40XG4gICAgICAucmVwbGFjZSgvXFx1MjAyOS9nLCAnXFxcXHUyMDI5JykgKyAnXCInO1xuICB9LFxuXG4gIG9iamVjdExpdGVyYWw6IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBwYWlycyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHBhaXJzLnB1c2godGhpcy5xdW90ZWRTdHJpbmcoa2V5KSArICc6JyArIG9ialtrZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJ3snICsgcGFpcnMuam9pbignLCcpICsgJ30nO1xuICB9LFxuXG4gIHNldHVwSGVscGVyOiBmdW5jdGlvbihwYXJhbVNpemUsIG5hbWUsIGJsb2NrSGVscGVyKSB7XG4gICAgdmFyIHBhcmFtcyA9IFtdLFxuICAgICAgICBwYXJhbXNJbml0ID0gdGhpcy5zZXR1cFBhcmFtcyhuYW1lLCBwYXJhbVNpemUsIHBhcmFtcywgYmxvY2tIZWxwZXIpO1xuICAgIHZhciBmb3VuZEhlbHBlciA9IHRoaXMubmFtZUxvb2t1cCgnaGVscGVycycsIG5hbWUsICdoZWxwZXInKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIHBhcmFtc0luaXQ6IHBhcmFtc0luaXQsXG4gICAgICBuYW1lOiBmb3VuZEhlbHBlcixcbiAgICAgIGNhbGxQYXJhbXM6IFt0aGlzLmNvbnRleHROYW1lKDApXS5jb25jYXQocGFyYW1zKS5qb2luKFwiLCBcIilcbiAgICB9O1xuICB9LFxuXG4gIHNldHVwT3B0aW9uczogZnVuY3Rpb24oaGVscGVyLCBwYXJhbVNpemUsIHBhcmFtcykge1xuICAgIHZhciBvcHRpb25zID0ge30sIGNvbnRleHRzID0gW10sIHR5cGVzID0gW10sIGlkcyA9IFtdLCBwYXJhbSwgaW52ZXJzZSwgcHJvZ3JhbTtcblxuICAgIG9wdGlvbnMubmFtZSA9IHRoaXMucXVvdGVkU3RyaW5nKGhlbHBlcik7XG4gICAgb3B0aW9ucy5oYXNoID0gdGhpcy5wb3BTdGFjaygpO1xuXG4gICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcbiAgICAgIG9wdGlvbnMuaGFzaElkcyA9IHRoaXMucG9wU3RhY2soKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG4gICAgICBvcHRpb25zLmhhc2hUeXBlcyA9IHRoaXMucG9wU3RhY2soKTtcbiAgICAgIG9wdGlvbnMuaGFzaENvbnRleHRzID0gdGhpcy5wb3BTdGFjaygpO1xuICAgIH1cblxuICAgIGludmVyc2UgPSB0aGlzLnBvcFN0YWNrKCk7XG4gICAgcHJvZ3JhbSA9IHRoaXMucG9wU3RhY2soKTtcblxuICAgIC8vIEF2b2lkIHNldHRpbmcgZm4gYW5kIGludmVyc2UgaWYgbmVpdGhlciBhcmUgc2V0LiBUaGlzIGFsbG93c1xuICAgIC8vIGhlbHBlcnMgdG8gZG8gYSBjaGVjayBmb3IgYGlmIChvcHRpb25zLmZuKWBcbiAgICBpZiAocHJvZ3JhbSB8fCBpbnZlcnNlKSB7XG4gICAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgcHJvZ3JhbSA9ICd0aGlzLm5vb3AnO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWludmVyc2UpIHtcbiAgICAgICAgaW52ZXJzZSA9ICd0aGlzLm5vb3AnO1xuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmZuID0gcHJvZ3JhbTtcbiAgICAgIG9wdGlvbnMuaW52ZXJzZSA9IGludmVyc2U7XG4gICAgfVxuXG4gICAgLy8gVGhlIHBhcmFtZXRlcnMgZ28gb24gdG8gdGhlIHN0YWNrIGluIG9yZGVyIChtYWtpbmcgc3VyZSB0aGF0IHRoZXkgYXJlIGV2YWx1YXRlZCBpbiBvcmRlcilcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHBvcCB0aGVtIG9mZiB0aGUgc3RhY2sgaW4gcmV2ZXJzZSBvcmRlclxuICAgIHZhciBpID0gcGFyYW1TaXplO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHBhcmFtID0gdGhpcy5wb3BTdGFjaygpO1xuICAgICAgcGFyYW1zW2ldID0gcGFyYW07XG5cbiAgICAgIGlmICh0aGlzLnRyYWNrSWRzKSB7XG4gICAgICAgIGlkc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0cmluZ1BhcmFtcykge1xuICAgICAgICB0eXBlc1tpXSA9IHRoaXMucG9wU3RhY2soKTtcbiAgICAgICAgY29udGV4dHNbaV0gPSB0aGlzLnBvcFN0YWNrKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHJhY2tJZHMpIHtcbiAgICAgIG9wdGlvbnMuaWRzID0gXCJbXCIgKyBpZHMuam9pbihcIixcIikgKyBcIl1cIjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RyaW5nUGFyYW1zKSB7XG4gICAgICBvcHRpb25zLnR5cGVzID0gXCJbXCIgKyB0eXBlcy5qb2luKFwiLFwiKSArIFwiXVwiO1xuICAgICAgb3B0aW9ucy5jb250ZXh0cyA9IFwiW1wiICsgY29udGV4dHMuam9pbihcIixcIikgKyBcIl1cIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmRhdGEpIHtcbiAgICAgIG9wdGlvbnMuZGF0YSA9IFwiZGF0YVwiO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9LFxuXG4gIC8vIHRoZSBwYXJhbXMgYW5kIGNvbnRleHRzIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluIGFycmF5c1xuICAvLyB0byBmaWxsIGluXG4gIHNldHVwUGFyYW1zOiBmdW5jdGlvbihoZWxwZXJOYW1lLCBwYXJhbVNpemUsIHBhcmFtcywgdXNlUmVnaXN0ZXIpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub2JqZWN0TGl0ZXJhbCh0aGlzLnNldHVwT3B0aW9ucyhoZWxwZXJOYW1lLCBwYXJhbVNpemUsIHBhcmFtcykpO1xuXG4gICAgaWYgKHVzZVJlZ2lzdGVyKSB7XG4gICAgICB0aGlzLnVzZVJlZ2lzdGVyKCdvcHRpb25zJyk7XG4gICAgICBwYXJhbXMucHVzaCgnb3B0aW9ucycpO1xuICAgICAgcmV0dXJuICdvcHRpb25zPScgKyBvcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXMucHVzaChvcHRpb25zKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZXNlcnZlZFdvcmRzID0gKFxuICBcImJyZWFrIGVsc2UgbmV3IHZhclwiICtcbiAgXCIgY2FzZSBmaW5hbGx5IHJldHVybiB2b2lkXCIgK1xuICBcIiBjYXRjaCBmb3Igc3dpdGNoIHdoaWxlXCIgK1xuICBcIiBjb250aW51ZSBmdW5jdGlvbiB0aGlzIHdpdGhcIiArXG4gIFwiIGRlZmF1bHQgaWYgdGhyb3dcIiArXG4gIFwiIGRlbGV0ZSBpbiB0cnlcIiArXG4gIFwiIGRvIGluc3RhbmNlb2YgdHlwZW9mXCIgK1xuICBcIiBhYnN0cmFjdCBlbnVtIGludCBzaG9ydFwiICtcbiAgXCIgYm9vbGVhbiBleHBvcnQgaW50ZXJmYWNlIHN0YXRpY1wiICtcbiAgXCIgYnl0ZSBleHRlbmRzIGxvbmcgc3VwZXJcIiArXG4gIFwiIGNoYXIgZmluYWwgbmF0aXZlIHN5bmNocm9uaXplZFwiICtcbiAgXCIgY2xhc3MgZmxvYXQgcGFja2FnZSB0aHJvd3NcIiArXG4gIFwiIGNvbnN0IGdvdG8gcHJpdmF0ZSB0cmFuc2llbnRcIiArXG4gIFwiIGRlYnVnZ2VyIGltcGxlbWVudHMgcHJvdGVjdGVkIHZvbGF0aWxlXCIgK1xuICBcIiBkb3VibGUgaW1wb3J0IHB1YmxpYyBsZXQgeWllbGRcIlxuKS5zcGxpdChcIiBcIik7XG5cbnZhciBjb21waWxlcldvcmRzID0gSmF2YVNjcmlwdENvbXBpbGVyLlJFU0VSVkVEX1dPUkRTID0ge307XG5cbmZvcih2YXIgaT0wLCBsPXJlc2VydmVkV29yZHMubGVuZ3RoOyBpPGw7IGkrKykge1xuICBjb21waWxlcldvcmRzW3Jlc2VydmVkV29yZHNbaV1dID0gdHJ1ZTtcbn1cblxuSmF2YVNjcmlwdENvbXBpbGVyLmlzVmFsaWRKYXZhU2NyaXB0VmFyaWFibGVOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gIUphdmFTY3JpcHRDb21waWxlci5SRVNFUlZFRF9XT1JEU1tuYW1lXSAmJiAvXlthLXpBLVpfJF1bMC05YS16QS1aXyRdKiQvLnRlc3QobmFtZSk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEphdmFTY3JpcHRDb21waWxlcjsiLCJcInVzZSBzdHJpY3RcIjtcbi8qIGpzaGludCBpZ25vcmU6c3RhcnQgKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4vKiBKaXNvbiBnZW5lcmF0ZWQgcGFyc2VyICovXG52YXIgaGFuZGxlYmFycyA9IChmdW5jdGlvbigpe1xudmFyIHBhcnNlciA9IHt0cmFjZTogZnVuY3Rpb24gdHJhY2UoKSB7IH0sXG55eToge30sXG5zeW1ib2xzXzoge1wiZXJyb3JcIjoyLFwicm9vdFwiOjMsXCJwcm9ncmFtXCI6NCxcIkVPRlwiOjUsXCJwcm9ncmFtX3JlcGV0aXRpb24wXCI6NixcInN0YXRlbWVudFwiOjcsXCJtdXN0YWNoZVwiOjgsXCJibG9ja1wiOjksXCJyYXdCbG9ja1wiOjEwLFwicGFydGlhbFwiOjExLFwiQ09OVEVOVFwiOjEyLFwiQ09NTUVOVFwiOjEzLFwib3BlblJhd0Jsb2NrXCI6MTQsXCJFTkRfUkFXX0JMT0NLXCI6MTUsXCJPUEVOX1JBV19CTE9DS1wiOjE2LFwic2V4cHJcIjoxNyxcIkNMT1NFX1JBV19CTE9DS1wiOjE4LFwib3BlbkJsb2NrXCI6MTksXCJibG9ja19vcHRpb24wXCI6MjAsXCJjbG9zZUJsb2NrXCI6MjEsXCJvcGVuSW52ZXJzZVwiOjIyLFwiYmxvY2tfb3B0aW9uMVwiOjIzLFwiT1BFTl9CTE9DS1wiOjI0LFwiQ0xPU0VcIjoyNSxcIk9QRU5fSU5WRVJTRVwiOjI2LFwiaW52ZXJzZUFuZFByb2dyYW1cIjoyNyxcIklOVkVSU0VcIjoyOCxcIk9QRU5fRU5EQkxPQ0tcIjoyOSxcInBhdGhcIjozMCxcIk9QRU5cIjozMSxcIk9QRU5fVU5FU0NBUEVEXCI6MzIsXCJDTE9TRV9VTkVTQ0FQRURcIjozMyxcIk9QRU5fUEFSVElBTFwiOjM0LFwicGFydGlhbE5hbWVcIjozNSxcInBhcmFtXCI6MzYsXCJwYXJ0aWFsX29wdGlvbjBcIjozNyxcInBhcnRpYWxfb3B0aW9uMVwiOjM4LFwic2V4cHJfcmVwZXRpdGlvbjBcIjozOSxcInNleHByX29wdGlvbjBcIjo0MCxcImRhdGFOYW1lXCI6NDEsXCJTVFJJTkdcIjo0MixcIk5VTUJFUlwiOjQzLFwiQk9PTEVBTlwiOjQ0LFwiT1BFTl9TRVhQUlwiOjQ1LFwiQ0xPU0VfU0VYUFJcIjo0NixcImhhc2hcIjo0NyxcImhhc2hfcmVwZXRpdGlvbl9wbHVzMFwiOjQ4LFwiaGFzaFNlZ21lbnRcIjo0OSxcIklEXCI6NTAsXCJFUVVBTFNcIjo1MSxcIkRBVEFcIjo1MixcInBhdGhTZWdtZW50c1wiOjUzLFwiU0VQXCI6NTQsXCIkYWNjZXB0XCI6MCxcIiRlbmRcIjoxfSxcbnRlcm1pbmFsc186IHsyOlwiZXJyb3JcIiw1OlwiRU9GXCIsMTI6XCJDT05URU5UXCIsMTM6XCJDT01NRU5UXCIsMTU6XCJFTkRfUkFXX0JMT0NLXCIsMTY6XCJPUEVOX1JBV19CTE9DS1wiLDE4OlwiQ0xPU0VfUkFXX0JMT0NLXCIsMjQ6XCJPUEVOX0JMT0NLXCIsMjU6XCJDTE9TRVwiLDI2OlwiT1BFTl9JTlZFUlNFXCIsMjg6XCJJTlZFUlNFXCIsMjk6XCJPUEVOX0VOREJMT0NLXCIsMzE6XCJPUEVOXCIsMzI6XCJPUEVOX1VORVNDQVBFRFwiLDMzOlwiQ0xPU0VfVU5FU0NBUEVEXCIsMzQ6XCJPUEVOX1BBUlRJQUxcIiw0MjpcIlNUUklOR1wiLDQzOlwiTlVNQkVSXCIsNDQ6XCJCT09MRUFOXCIsNDU6XCJPUEVOX1NFWFBSXCIsNDY6XCJDTE9TRV9TRVhQUlwiLDUwOlwiSURcIiw1MTpcIkVRVUFMU1wiLDUyOlwiREFUQVwiLDU0OlwiU0VQXCJ9LFxucHJvZHVjdGlvbnNfOiBbMCxbMywyXSxbNCwxXSxbNywxXSxbNywxXSxbNywxXSxbNywxXSxbNywxXSxbNywxXSxbMTAsM10sWzE0LDNdLFs5LDRdLFs5LDRdLFsxOSwzXSxbMjIsM10sWzI3LDJdLFsyMSwzXSxbOCwzXSxbOCwzXSxbMTEsNV0sWzExLDRdLFsxNywzXSxbMTcsMV0sWzM2LDFdLFszNiwxXSxbMzYsMV0sWzM2LDFdLFszNiwxXSxbMzYsM10sWzQ3LDFdLFs0OSwzXSxbMzUsMV0sWzM1LDFdLFszNSwxXSxbNDEsMl0sWzMwLDFdLFs1MywzXSxbNTMsMV0sWzYsMF0sWzYsMl0sWzIwLDBdLFsyMCwxXSxbMjMsMF0sWzIzLDFdLFszNywwXSxbMzcsMV0sWzM4LDBdLFszOCwxXSxbMzksMF0sWzM5LDJdLFs0MCwwXSxbNDAsMV0sWzQ4LDFdLFs0OCwyXV0sXG5wZXJmb3JtQWN0aW9uOiBmdW5jdGlvbiBhbm9ueW1vdXMoeXl0ZXh0LHl5bGVuZyx5eWxpbmVubyx5eSx5eXN0YXRlLCQkLF8kKSB7XG5cbnZhciAkMCA9ICQkLmxlbmd0aCAtIDE7XG5zd2l0Y2ggKHl5c3RhdGUpIHtcbmNhc2UgMTogeXkucHJlcGFyZVByb2dyYW0oJCRbJDAtMV0uc3RhdGVtZW50cywgdHJ1ZSk7IHJldHVybiAkJFskMC0xXTsgXG5icmVhaztcbmNhc2UgMjp0aGlzLiQgPSBuZXcgeXkuUHJvZ3JhbU5vZGUoeXkucHJlcGFyZVByb2dyYW0oJCRbJDBdKSwge30sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDM6dGhpcy4kID0gJCRbJDBdO1xuYnJlYWs7XG5jYXNlIDQ6dGhpcy4kID0gJCRbJDBdO1xuYnJlYWs7XG5jYXNlIDU6dGhpcy4kID0gJCRbJDBdO1xuYnJlYWs7XG5jYXNlIDY6dGhpcy4kID0gJCRbJDBdO1xuYnJlYWs7XG5jYXNlIDc6dGhpcy4kID0gbmV3IHl5LkNvbnRlbnROb2RlKCQkWyQwXSwgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgODp0aGlzLiQgPSBuZXcgeXkuQ29tbWVudE5vZGUoJCRbJDBdLCB0aGlzLl8kKTtcbmJyZWFrO1xuY2FzZSA5OnRoaXMuJCA9IG5ldyB5eS5SYXdCbG9ja05vZGUoJCRbJDAtMl0sICQkWyQwLTFdLCAkJFskMF0sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDEwOnRoaXMuJCA9IG5ldyB5eS5NdXN0YWNoZU5vZGUoJCRbJDAtMV0sIG51bGwsICcnLCAnJywgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgMTE6dGhpcy4kID0geXkucHJlcGFyZUJsb2NrKCQkWyQwLTNdLCAkJFskMC0yXSwgJCRbJDAtMV0sICQkWyQwXSwgZmFsc2UsIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDEyOnRoaXMuJCA9IHl5LnByZXBhcmVCbG9jaygkJFskMC0zXSwgJCRbJDAtMl0sICQkWyQwLTFdLCAkJFskMF0sIHRydWUsIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDEzOnRoaXMuJCA9IG5ldyB5eS5NdXN0YWNoZU5vZGUoJCRbJDAtMV0sIG51bGwsICQkWyQwLTJdLCB5eS5zdHJpcEZsYWdzKCQkWyQwLTJdLCAkJFskMF0pLCB0aGlzLl8kKTtcbmJyZWFrO1xuY2FzZSAxNDp0aGlzLiQgPSBuZXcgeXkuTXVzdGFjaGVOb2RlKCQkWyQwLTFdLCBudWxsLCAkJFskMC0yXSwgeXkuc3RyaXBGbGFncygkJFskMC0yXSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgMTU6dGhpcy4kID0geyBzdHJpcDogeXkuc3RyaXBGbGFncygkJFskMC0xXSwgJCRbJDAtMV0pLCBwcm9ncmFtOiAkJFskMF0gfTtcbmJyZWFrO1xuY2FzZSAxNjp0aGlzLiQgPSB7cGF0aDogJCRbJDAtMV0sIHN0cmlwOiB5eS5zdHJpcEZsYWdzKCQkWyQwLTJdLCAkJFskMF0pfTtcbmJyZWFrO1xuY2FzZSAxNzp0aGlzLiQgPSBuZXcgeXkuTXVzdGFjaGVOb2RlKCQkWyQwLTFdLCBudWxsLCAkJFskMC0yXSwgeXkuc3RyaXBGbGFncygkJFskMC0yXSwgJCRbJDBdKSwgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgMTg6dGhpcy4kID0gbmV3IHl5Lk11c3RhY2hlTm9kZSgkJFskMC0xXSwgbnVsbCwgJCRbJDAtMl0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAtMl0sICQkWyQwXSksIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDE5OnRoaXMuJCA9IG5ldyB5eS5QYXJ0aWFsTm9kZSgkJFskMC0zXSwgJCRbJDAtMl0sICQkWyQwLTFdLCB5eS5zdHJpcEZsYWdzKCQkWyQwLTRdLCAkJFskMF0pLCB0aGlzLl8kKTtcbmJyZWFrO1xuY2FzZSAyMDp0aGlzLiQgPSBuZXcgeXkuUGFydGlhbE5vZGUoJCRbJDAtMl0sIHVuZGVmaW5lZCwgJCRbJDAtMV0sIHl5LnN0cmlwRmxhZ3MoJCRbJDAtM10sICQkWyQwXSksIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDIxOnRoaXMuJCA9IG5ldyB5eS5TZXhwck5vZGUoWyQkWyQwLTJdXS5jb25jYXQoJCRbJDAtMV0pLCAkJFskMF0sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDIyOnRoaXMuJCA9IG5ldyB5eS5TZXhwck5vZGUoWyQkWyQwXV0sIG51bGwsIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDIzOnRoaXMuJCA9ICQkWyQwXTtcbmJyZWFrO1xuY2FzZSAyNDp0aGlzLiQgPSBuZXcgeXkuU3RyaW5nTm9kZSgkJFskMF0sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDI1OnRoaXMuJCA9IG5ldyB5eS5OdW1iZXJOb2RlKCQkWyQwXSwgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgMjY6dGhpcy4kID0gbmV3IHl5LkJvb2xlYW5Ob2RlKCQkWyQwXSwgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgMjc6dGhpcy4kID0gJCRbJDBdO1xuYnJlYWs7XG5jYXNlIDI4OiQkWyQwLTFdLmlzSGVscGVyID0gdHJ1ZTsgdGhpcy4kID0gJCRbJDAtMV07XG5icmVhaztcbmNhc2UgMjk6dGhpcy4kID0gbmV3IHl5Lkhhc2hOb2RlKCQkWyQwXSwgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgMzA6dGhpcy4kID0gWyQkWyQwLTJdLCAkJFskMF1dO1xuYnJlYWs7XG5jYXNlIDMxOnRoaXMuJCA9IG5ldyB5eS5QYXJ0aWFsTmFtZU5vZGUoJCRbJDBdLCB0aGlzLl8kKTtcbmJyZWFrO1xuY2FzZSAzMjp0aGlzLiQgPSBuZXcgeXkuUGFydGlhbE5hbWVOb2RlKG5ldyB5eS5TdHJpbmdOb2RlKCQkWyQwXSwgdGhpcy5fJCksIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDMzOnRoaXMuJCA9IG5ldyB5eS5QYXJ0aWFsTmFtZU5vZGUobmV3IHl5Lk51bWJlck5vZGUoJCRbJDBdLCB0aGlzLl8kKSk7XG5icmVhaztcbmNhc2UgMzQ6dGhpcy4kID0gbmV3IHl5LkRhdGFOb2RlKCQkWyQwXSwgdGhpcy5fJCk7XG5icmVhaztcbmNhc2UgMzU6dGhpcy4kID0gbmV3IHl5LklkTm9kZSgkJFskMF0sIHRoaXMuXyQpO1xuYnJlYWs7XG5jYXNlIDM2OiAkJFskMC0yXS5wdXNoKHtwYXJ0OiAkJFskMF0sIHNlcGFyYXRvcjogJCRbJDAtMV19KTsgdGhpcy4kID0gJCRbJDAtMl07IFxuYnJlYWs7XG5jYXNlIDM3OnRoaXMuJCA9IFt7cGFydDogJCRbJDBdfV07XG5icmVhaztcbmNhc2UgMzg6dGhpcy4kID0gW107XG5icmVhaztcbmNhc2UgMzk6JCRbJDAtMV0ucHVzaCgkJFskMF0pO1xuYnJlYWs7XG5jYXNlIDQ4OnRoaXMuJCA9IFtdO1xuYnJlYWs7XG5jYXNlIDQ5OiQkWyQwLTFdLnB1c2goJCRbJDBdKTtcbmJyZWFrO1xuY2FzZSA1Mjp0aGlzLiQgPSBbJCRbJDBdXTtcbmJyZWFrO1xuY2FzZSA1MzokJFskMC0xXS5wdXNoKCQkWyQwXSk7XG5icmVhaztcbn1cbn0sXG50YWJsZTogW3szOjEsNDoyLDU6WzIsMzhdLDY6MywxMjpbMiwzOF0sMTM6WzIsMzhdLDE2OlsyLDM4XSwyNDpbMiwzOF0sMjY6WzIsMzhdLDMxOlsyLDM4XSwzMjpbMiwzOF0sMzQ6WzIsMzhdfSx7MTpbM119LHs1OlsxLDRdfSx7NTpbMiwyXSw3OjUsODo2LDk6NywxMDo4LDExOjksMTI6WzEsMTBdLDEzOlsxLDExXSwxNDoxNiwxNjpbMSwyMF0sMTk6MTQsMjI6MTUsMjQ6WzEsMThdLDI2OlsxLDE5XSwyODpbMiwyXSwyOTpbMiwyXSwzMTpbMSwxMl0sMzI6WzEsMTNdLDM0OlsxLDE3XX0sezE6WzIsMV19LHs1OlsyLDM5XSwxMjpbMiwzOV0sMTM6WzIsMzldLDE2OlsyLDM5XSwyNDpbMiwzOV0sMjY6WzIsMzldLDI4OlsyLDM5XSwyOTpbMiwzOV0sMzE6WzIsMzldLDMyOlsyLDM5XSwzNDpbMiwzOV19LHs1OlsyLDNdLDEyOlsyLDNdLDEzOlsyLDNdLDE2OlsyLDNdLDI0OlsyLDNdLDI2OlsyLDNdLDI4OlsyLDNdLDI5OlsyLDNdLDMxOlsyLDNdLDMyOlsyLDNdLDM0OlsyLDNdfSx7NTpbMiw0XSwxMjpbMiw0XSwxMzpbMiw0XSwxNjpbMiw0XSwyNDpbMiw0XSwyNjpbMiw0XSwyODpbMiw0XSwyOTpbMiw0XSwzMTpbMiw0XSwzMjpbMiw0XSwzNDpbMiw0XX0sezU6WzIsNV0sMTI6WzIsNV0sMTM6WzIsNV0sMTY6WzIsNV0sMjQ6WzIsNV0sMjY6WzIsNV0sMjg6WzIsNV0sMjk6WzIsNV0sMzE6WzIsNV0sMzI6WzIsNV0sMzQ6WzIsNV19LHs1OlsyLDZdLDEyOlsyLDZdLDEzOlsyLDZdLDE2OlsyLDZdLDI0OlsyLDZdLDI2OlsyLDZdLDI4OlsyLDZdLDI5OlsyLDZdLDMxOlsyLDZdLDMyOlsyLDZdLDM0OlsyLDZdfSx7NTpbMiw3XSwxMjpbMiw3XSwxMzpbMiw3XSwxNjpbMiw3XSwyNDpbMiw3XSwyNjpbMiw3XSwyODpbMiw3XSwyOTpbMiw3XSwzMTpbMiw3XSwzMjpbMiw3XSwzNDpbMiw3XX0sezU6WzIsOF0sMTI6WzIsOF0sMTM6WzIsOF0sMTY6WzIsOF0sMjQ6WzIsOF0sMjY6WzIsOF0sMjg6WzIsOF0sMjk6WzIsOF0sMzE6WzIsOF0sMzI6WzIsOF0sMzQ6WzIsOF19LHsxNzoyMSwzMDoyMiw0MToyMyw1MDpbMSwyNl0sNTI6WzEsMjVdLDUzOjI0fSx7MTc6MjcsMzA6MjIsNDE6MjMsNTA6WzEsMjZdLDUyOlsxLDI1XSw1MzoyNH0sezQ6MjgsNjozLDEyOlsyLDM4XSwxMzpbMiwzOF0sMTY6WzIsMzhdLDI0OlsyLDM4XSwyNjpbMiwzOF0sMjg6WzIsMzhdLDI5OlsyLDM4XSwzMTpbMiwzOF0sMzI6WzIsMzhdLDM0OlsyLDM4XX0sezQ6MjksNjozLDEyOlsyLDM4XSwxMzpbMiwzOF0sMTY6WzIsMzhdLDI0OlsyLDM4XSwyNjpbMiwzOF0sMjg6WzIsMzhdLDI5OlsyLDM4XSwzMTpbMiwzOF0sMzI6WzIsMzhdLDM0OlsyLDM4XX0sezEyOlsxLDMwXX0sezMwOjMyLDM1OjMxLDQyOlsxLDMzXSw0MzpbMSwzNF0sNTA6WzEsMjZdLDUzOjI0fSx7MTc6MzUsMzA6MjIsNDE6MjMsNTA6WzEsMjZdLDUyOlsxLDI1XSw1MzoyNH0sezE3OjM2LDMwOjIyLDQxOjIzLDUwOlsxLDI2XSw1MjpbMSwyNV0sNTM6MjR9LHsxNzozNywzMDoyMiw0MToyMyw1MDpbMSwyNl0sNTI6WzEsMjVdLDUzOjI0fSx7MjU6WzEsMzhdfSx7MTg6WzIsNDhdLDI1OlsyLDQ4XSwzMzpbMiw0OF0sMzk6MzksNDI6WzIsNDhdLDQzOlsyLDQ4XSw0NDpbMiw0OF0sNDU6WzIsNDhdLDQ2OlsyLDQ4XSw1MDpbMiw0OF0sNTI6WzIsNDhdfSx7MTg6WzIsMjJdLDI1OlsyLDIyXSwzMzpbMiwyMl0sNDY6WzIsMjJdfSx7MTg6WzIsMzVdLDI1OlsyLDM1XSwzMzpbMiwzNV0sNDI6WzIsMzVdLDQzOlsyLDM1XSw0NDpbMiwzNV0sNDU6WzIsMzVdLDQ2OlsyLDM1XSw1MDpbMiwzNV0sNTI6WzIsMzVdLDU0OlsxLDQwXX0sezMwOjQxLDUwOlsxLDI2XSw1MzoyNH0sezE4OlsyLDM3XSwyNTpbMiwzN10sMzM6WzIsMzddLDQyOlsyLDM3XSw0MzpbMiwzN10sNDQ6WzIsMzddLDQ1OlsyLDM3XSw0NjpbMiwzN10sNTA6WzIsMzddLDUyOlsyLDM3XSw1NDpbMiwzN119LHszMzpbMSw0Ml19LHsyMDo0MywyNzo0NCwyODpbMSw0NV0sMjk6WzIsNDBdfSx7MjM6NDYsMjc6NDcsMjg6WzEsNDVdLDI5OlsyLDQyXX0sezE1OlsxLDQ4XX0sezI1OlsyLDQ2XSwzMDo1MSwzNjo0OSwzODo1MCw0MTo1NSw0MjpbMSw1Ml0sNDM6WzEsNTNdLDQ0OlsxLDU0XSw0NTpbMSw1Nl0sNDc6NTcsNDg6NTgsNDk6NjAsNTA6WzEsNTldLDUyOlsxLDI1XSw1MzoyNH0sezI1OlsyLDMxXSw0MjpbMiwzMV0sNDM6WzIsMzFdLDQ0OlsyLDMxXSw0NTpbMiwzMV0sNTA6WzIsMzFdLDUyOlsyLDMxXX0sezI1OlsyLDMyXSw0MjpbMiwzMl0sNDM6WzIsMzJdLDQ0OlsyLDMyXSw0NTpbMiwzMl0sNTA6WzIsMzJdLDUyOlsyLDMyXX0sezI1OlsyLDMzXSw0MjpbMiwzM10sNDM6WzIsMzNdLDQ0OlsyLDMzXSw0NTpbMiwzM10sNTA6WzIsMzNdLDUyOlsyLDMzXX0sezI1OlsxLDYxXX0sezI1OlsxLDYyXX0sezE4OlsxLDYzXX0sezU6WzIsMTddLDEyOlsyLDE3XSwxMzpbMiwxN10sMTY6WzIsMTddLDI0OlsyLDE3XSwyNjpbMiwxN10sMjg6WzIsMTddLDI5OlsyLDE3XSwzMTpbMiwxN10sMzI6WzIsMTddLDM0OlsyLDE3XX0sezE4OlsyLDUwXSwyNTpbMiw1MF0sMzA6NTEsMzM6WzIsNTBdLDM2OjY1LDQwOjY0LDQxOjU1LDQyOlsxLDUyXSw0MzpbMSw1M10sNDQ6WzEsNTRdLDQ1OlsxLDU2XSw0NjpbMiw1MF0sNDc6NjYsNDg6NTgsNDk6NjAsNTA6WzEsNTldLDUyOlsxLDI1XSw1MzoyNH0sezUwOlsxLDY3XX0sezE4OlsyLDM0XSwyNTpbMiwzNF0sMzM6WzIsMzRdLDQyOlsyLDM0XSw0MzpbMiwzNF0sNDQ6WzIsMzRdLDQ1OlsyLDM0XSw0NjpbMiwzNF0sNTA6WzIsMzRdLDUyOlsyLDM0XX0sezU6WzIsMThdLDEyOlsyLDE4XSwxMzpbMiwxOF0sMTY6WzIsMThdLDI0OlsyLDE4XSwyNjpbMiwxOF0sMjg6WzIsMThdLDI5OlsyLDE4XSwzMTpbMiwxOF0sMzI6WzIsMThdLDM0OlsyLDE4XX0sezIxOjY4LDI5OlsxLDY5XX0sezI5OlsyLDQxXX0sezQ6NzAsNjozLDEyOlsyLDM4XSwxMzpbMiwzOF0sMTY6WzIsMzhdLDI0OlsyLDM4XSwyNjpbMiwzOF0sMjk6WzIsMzhdLDMxOlsyLDM4XSwzMjpbMiwzOF0sMzQ6WzIsMzhdfSx7MjE6NzEsMjk6WzEsNjldfSx7Mjk6WzIsNDNdfSx7NTpbMiw5XSwxMjpbMiw5XSwxMzpbMiw5XSwxNjpbMiw5XSwyNDpbMiw5XSwyNjpbMiw5XSwyODpbMiw5XSwyOTpbMiw5XSwzMTpbMiw5XSwzMjpbMiw5XSwzNDpbMiw5XX0sezI1OlsyLDQ0XSwzNzo3Miw0Nzo3Myw0ODo1OCw0OTo2MCw1MDpbMSw3NF19LHsyNTpbMSw3NV19LHsxODpbMiwyM10sMjU6WzIsMjNdLDMzOlsyLDIzXSw0MjpbMiwyM10sNDM6WzIsMjNdLDQ0OlsyLDIzXSw0NTpbMiwyM10sNDY6WzIsMjNdLDUwOlsyLDIzXSw1MjpbMiwyM119LHsxODpbMiwyNF0sMjU6WzIsMjRdLDMzOlsyLDI0XSw0MjpbMiwyNF0sNDM6WzIsMjRdLDQ0OlsyLDI0XSw0NTpbMiwyNF0sNDY6WzIsMjRdLDUwOlsyLDI0XSw1MjpbMiwyNF19LHsxODpbMiwyNV0sMjU6WzIsMjVdLDMzOlsyLDI1XSw0MjpbMiwyNV0sNDM6WzIsMjVdLDQ0OlsyLDI1XSw0NTpbMiwyNV0sNDY6WzIsMjVdLDUwOlsyLDI1XSw1MjpbMiwyNV19LHsxODpbMiwyNl0sMjU6WzIsMjZdLDMzOlsyLDI2XSw0MjpbMiwyNl0sNDM6WzIsMjZdLDQ0OlsyLDI2XSw0NTpbMiwyNl0sNDY6WzIsMjZdLDUwOlsyLDI2XSw1MjpbMiwyNl19LHsxODpbMiwyN10sMjU6WzIsMjddLDMzOlsyLDI3XSw0MjpbMiwyN10sNDM6WzIsMjddLDQ0OlsyLDI3XSw0NTpbMiwyN10sNDY6WzIsMjddLDUwOlsyLDI3XSw1MjpbMiwyN119LHsxNzo3NiwzMDoyMiw0MToyMyw1MDpbMSwyNl0sNTI6WzEsMjVdLDUzOjI0fSx7MjU6WzIsNDddfSx7MTg6WzIsMjldLDI1OlsyLDI5XSwzMzpbMiwyOV0sNDY6WzIsMjldLDQ5Ojc3LDUwOlsxLDc0XX0sezE4OlsyLDM3XSwyNTpbMiwzN10sMzM6WzIsMzddLDQyOlsyLDM3XSw0MzpbMiwzN10sNDQ6WzIsMzddLDQ1OlsyLDM3XSw0NjpbMiwzN10sNTA6WzIsMzddLDUxOlsxLDc4XSw1MjpbMiwzN10sNTQ6WzIsMzddfSx7MTg6WzIsNTJdLDI1OlsyLDUyXSwzMzpbMiw1Ml0sNDY6WzIsNTJdLDUwOlsyLDUyXX0sezEyOlsyLDEzXSwxMzpbMiwxM10sMTY6WzIsMTNdLDI0OlsyLDEzXSwyNjpbMiwxM10sMjg6WzIsMTNdLDI5OlsyLDEzXSwzMTpbMiwxM10sMzI6WzIsMTNdLDM0OlsyLDEzXX0sezEyOlsyLDE0XSwxMzpbMiwxNF0sMTY6WzIsMTRdLDI0OlsyLDE0XSwyNjpbMiwxNF0sMjg6WzIsMTRdLDI5OlsyLDE0XSwzMTpbMiwxNF0sMzI6WzIsMTRdLDM0OlsyLDE0XX0sezEyOlsyLDEwXX0sezE4OlsyLDIxXSwyNTpbMiwyMV0sMzM6WzIsMjFdLDQ2OlsyLDIxXX0sezE4OlsyLDQ5XSwyNTpbMiw0OV0sMzM6WzIsNDldLDQyOlsyLDQ5XSw0MzpbMiw0OV0sNDQ6WzIsNDldLDQ1OlsyLDQ5XSw0NjpbMiw0OV0sNTA6WzIsNDldLDUyOlsyLDQ5XX0sezE4OlsyLDUxXSwyNTpbMiw1MV0sMzM6WzIsNTFdLDQ2OlsyLDUxXX0sezE4OlsyLDM2XSwyNTpbMiwzNl0sMzM6WzIsMzZdLDQyOlsyLDM2XSw0MzpbMiwzNl0sNDQ6WzIsMzZdLDQ1OlsyLDM2XSw0NjpbMiwzNl0sNTA6WzIsMzZdLDUyOlsyLDM2XSw1NDpbMiwzNl19LHs1OlsyLDExXSwxMjpbMiwxMV0sMTM6WzIsMTFdLDE2OlsyLDExXSwyNDpbMiwxMV0sMjY6WzIsMTFdLDI4OlsyLDExXSwyOTpbMiwxMV0sMzE6WzIsMTFdLDMyOlsyLDExXSwzNDpbMiwxMV19LHszMDo3OSw1MDpbMSwyNl0sNTM6MjR9LHsyOTpbMiwxNV19LHs1OlsyLDEyXSwxMjpbMiwxMl0sMTM6WzIsMTJdLDE2OlsyLDEyXSwyNDpbMiwxMl0sMjY6WzIsMTJdLDI4OlsyLDEyXSwyOTpbMiwxMl0sMzE6WzIsMTJdLDMyOlsyLDEyXSwzNDpbMiwxMl19LHsyNTpbMSw4MF19LHsyNTpbMiw0NV19LHs1MTpbMSw3OF19LHs1OlsyLDIwXSwxMjpbMiwyMF0sMTM6WzIsMjBdLDE2OlsyLDIwXSwyNDpbMiwyMF0sMjY6WzIsMjBdLDI4OlsyLDIwXSwyOTpbMiwyMF0sMzE6WzIsMjBdLDMyOlsyLDIwXSwzNDpbMiwyMF19LHs0NjpbMSw4MV19LHsxODpbMiw1M10sMjU6WzIsNTNdLDMzOlsyLDUzXSw0NjpbMiw1M10sNTA6WzIsNTNdfSx7MzA6NTEsMzY6ODIsNDE6NTUsNDI6WzEsNTJdLDQzOlsxLDUzXSw0NDpbMSw1NF0sNDU6WzEsNTZdLDUwOlsxLDI2XSw1MjpbMSwyNV0sNTM6MjR9LHsyNTpbMSw4M119LHs1OlsyLDE5XSwxMjpbMiwxOV0sMTM6WzIsMTldLDE2OlsyLDE5XSwyNDpbMiwxOV0sMjY6WzIsMTldLDI4OlsyLDE5XSwyOTpbMiwxOV0sMzE6WzIsMTldLDMyOlsyLDE5XSwzNDpbMiwxOV19LHsxODpbMiwyOF0sMjU6WzIsMjhdLDMzOlsyLDI4XSw0MjpbMiwyOF0sNDM6WzIsMjhdLDQ0OlsyLDI4XSw0NTpbMiwyOF0sNDY6WzIsMjhdLDUwOlsyLDI4XSw1MjpbMiwyOF19LHsxODpbMiwzMF0sMjU6WzIsMzBdLDMzOlsyLDMwXSw0NjpbMiwzMF0sNTA6WzIsMzBdfSx7NTpbMiwxNl0sMTI6WzIsMTZdLDEzOlsyLDE2XSwxNjpbMiwxNl0sMjQ6WzIsMTZdLDI2OlsyLDE2XSwyODpbMiwxNl0sMjk6WzIsMTZdLDMxOlsyLDE2XSwzMjpbMiwxNl0sMzQ6WzIsMTZdfV0sXG5kZWZhdWx0QWN0aW9uczogezQ6WzIsMV0sNDQ6WzIsNDFdLDQ3OlsyLDQzXSw1NzpbMiw0N10sNjM6WzIsMTBdLDcwOlsyLDE1XSw3MzpbMiw0NV19LFxucGFyc2VFcnJvcjogZnVuY3Rpb24gcGFyc2VFcnJvcihzdHIsIGhhc2gpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbn0sXG5wYXJzZTogZnVuY3Rpb24gcGFyc2UoaW5wdXQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsIHN0YWNrID0gWzBdLCB2c3RhY2sgPSBbbnVsbF0sIGxzdGFjayA9IFtdLCB0YWJsZSA9IHRoaXMudGFibGUsIHl5dGV4dCA9IFwiXCIsIHl5bGluZW5vID0gMCwgeXlsZW5nID0gMCwgcmVjb3ZlcmluZyA9IDAsIFRFUlJPUiA9IDIsIEVPRiA9IDE7XG4gICAgdGhpcy5sZXhlci5zZXRJbnB1dChpbnB1dCk7XG4gICAgdGhpcy5sZXhlci55eSA9IHRoaXMueXk7XG4gICAgdGhpcy55eS5sZXhlciA9IHRoaXMubGV4ZXI7XG4gICAgdGhpcy55eS5wYXJzZXIgPSB0aGlzO1xuICAgIGlmICh0eXBlb2YgdGhpcy5sZXhlci55eWxsb2MgPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgdGhpcy5sZXhlci55eWxsb2MgPSB7fTtcbiAgICB2YXIgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcbiAgICBsc3RhY2sucHVzaCh5eWxvYyk7XG4gICAgdmFyIHJhbmdlcyA9IHRoaXMubGV4ZXIub3B0aW9ucyAmJiB0aGlzLmxleGVyLm9wdGlvbnMucmFuZ2VzO1xuICAgIGlmICh0eXBlb2YgdGhpcy55eS5wYXJzZUVycm9yID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHRoaXMucGFyc2VFcnJvciA9IHRoaXMueXkucGFyc2VFcnJvcjtcbiAgICBmdW5jdGlvbiBwb3BTdGFjayhuKSB7XG4gICAgICAgIHN0YWNrLmxlbmd0aCA9IHN0YWNrLmxlbmd0aCAtIDIgKiBuO1xuICAgICAgICB2c3RhY2subGVuZ3RoID0gdnN0YWNrLmxlbmd0aCAtIG47XG4gICAgICAgIGxzdGFjay5sZW5ndGggPSBsc3RhY2subGVuZ3RoIC0gbjtcbiAgICB9XG4gICAgZnVuY3Rpb24gbGV4KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHRva2VuID0gc2VsZi5sZXhlci5sZXgoKSB8fCAxO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICB0b2tlbiA9IHNlbGYuc3ltYm9sc19bdG9rZW5dIHx8IHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG4gICAgdmFyIHN5bWJvbCwgcHJlRXJyb3JTeW1ib2wsIHN0YXRlLCBhY3Rpb24sIGEsIHIsIHl5dmFsID0ge30sIHAsIGxlbiwgbmV3U3RhdGUsIGV4cGVjdGVkO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHN0YXRlID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRBY3Rpb25zW3N0YXRlXSkge1xuICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5kZWZhdWx0QWN0aW9uc1tzdGF0ZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3ltYm9sID09PSBudWxsIHx8IHR5cGVvZiBzeW1ib2wgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IGxleCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aW9uID0gdGFibGVbc3RhdGVdICYmIHRhYmxlW3N0YXRlXVtzeW1ib2xdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSBcInVuZGVmaW5lZFwiIHx8ICFhY3Rpb24ubGVuZ3RoIHx8ICFhY3Rpb25bMF0pIHtcbiAgICAgICAgICAgIHZhciBlcnJTdHIgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKCFyZWNvdmVyaW5nKSB7XG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHAgaW4gdGFibGVbc3RhdGVdKVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXJtaW5hbHNfW3BdICYmIHAgPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZC5wdXNoKFwiJ1wiICsgdGhpcy50ZXJtaW5hbHNfW3BdICsgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV4ZXIuc2hvd1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGVyclN0ciA9IFwiUGFyc2UgZXJyb3Igb24gbGluZSBcIiArICh5eWxpbmVubyArIDEpICsgXCI6XFxuXCIgKyB0aGlzLmxleGVyLnNob3dQb3NpdGlvbigpICsgXCJcXG5FeHBlY3RpbmcgXCIgKyBleHBlY3RlZC5qb2luKFwiLCBcIikgKyBcIiwgZ290ICdcIiArICh0aGlzLnRlcm1pbmFsc19bc3ltYm9sXSB8fCBzeW1ib2wpICsgXCInXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyU3RyID0gXCJQYXJzZSBlcnJvciBvbiBsaW5lIFwiICsgKHl5bGluZW5vICsgMSkgKyBcIjogVW5leHBlY3RlZCBcIiArIChzeW1ib2wgPT0gMT9cImVuZCBvZiBpbnB1dFwiOlwiJ1wiICsgKHRoaXMudGVybWluYWxzX1tzeW1ib2xdIHx8IHN5bWJvbCkgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VFcnJvcihlcnJTdHIsIHt0ZXh0OiB0aGlzLmxleGVyLm1hdGNoLCB0b2tlbjogdGhpcy50ZXJtaW5hbHNfW3N5bWJvbF0gfHwgc3ltYm9sLCBsaW5lOiB0aGlzLmxleGVyLnl5bGluZW5vLCBsb2M6IHl5bG9jLCBleHBlY3RlZDogZXhwZWN0ZWR9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uWzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgYWN0aW9uLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBhcnNlIEVycm9yOiBtdWx0aXBsZSBhY3Rpb25zIHBvc3NpYmxlIGF0IHN0YXRlOiBcIiArIHN0YXRlICsgXCIsIHRva2VuOiBcIiArIHN5bWJvbCk7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChhY3Rpb25bMF0pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc3RhY2sucHVzaChzeW1ib2wpO1xuICAgICAgICAgICAgdnN0YWNrLnB1c2godGhpcy5sZXhlci55eXRleHQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2godGhpcy5sZXhlci55eWxsb2MpO1xuICAgICAgICAgICAgc3RhY2sucHVzaChhY3Rpb25bMV0pO1xuICAgICAgICAgICAgc3ltYm9sID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghcHJlRXJyb3JTeW1ib2wpIHtcbiAgICAgICAgICAgICAgICB5eWxlbmcgPSB0aGlzLmxleGVyLnl5bGVuZztcbiAgICAgICAgICAgICAgICB5eXRleHQgPSB0aGlzLmxleGVyLnl5dGV4dDtcbiAgICAgICAgICAgICAgICB5eWxpbmVubyA9IHRoaXMubGV4ZXIueXlsaW5lbm87XG4gICAgICAgICAgICAgICAgeXlsb2MgPSB0aGlzLmxleGVyLnl5bGxvYztcbiAgICAgICAgICAgICAgICBpZiAocmVjb3ZlcmluZyA+IDApXG4gICAgICAgICAgICAgICAgICAgIHJlY292ZXJpbmctLTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gcHJlRXJyb3JTeW1ib2w7XG4gICAgICAgICAgICAgICAgcHJlRXJyb3JTeW1ib2wgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGxlbiA9IHRoaXMucHJvZHVjdGlvbnNfW2FjdGlvblsxXV1bMV07XG4gICAgICAgICAgICB5eXZhbC4kID0gdnN0YWNrW3ZzdGFjay5sZW5ndGggLSBsZW5dO1xuICAgICAgICAgICAgeXl2YWwuXyQgPSB7Zmlyc3RfbGluZTogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5maXJzdF9saW5lLCBsYXN0X2xpbmU6IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gMV0ubGFzdF9saW5lLCBmaXJzdF9jb2x1bW46IGxzdGFja1tsc3RhY2subGVuZ3RoIC0gKGxlbiB8fCAxKV0uZmlyc3RfY29sdW1uLCBsYXN0X2NvbHVtbjogbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5sYXN0X2NvbHVtbn07XG4gICAgICAgICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgeXl2YWwuXyQucmFuZ2UgPSBbbHN0YWNrW2xzdGFjay5sZW5ndGggLSAobGVuIHx8IDEpXS5yYW5nZVswXSwgbHN0YWNrW2xzdGFjay5sZW5ndGggLSAxXS5yYW5nZVsxXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByID0gdGhpcy5wZXJmb3JtQWN0aW9uLmNhbGwoeXl2YWwsIHl5dGV4dCwgeXlsZW5nLCB5eWxpbmVubywgdGhpcy55eSwgYWN0aW9uWzFdLCB2c3RhY2ssIGxzdGFjayk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKDAsIC0xICogbGVuICogMik7XG4gICAgICAgICAgICAgICAgdnN0YWNrID0gdnN0YWNrLnNsaWNlKDAsIC0xICogbGVuKTtcbiAgICAgICAgICAgICAgICBsc3RhY2sgPSBsc3RhY2suc2xpY2UoMCwgLTEgKiBsZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnByb2R1Y3Rpb25zX1thY3Rpb25bMV1dWzBdKTtcbiAgICAgICAgICAgIHZzdGFjay5wdXNoKHl5dmFsLiQpO1xuICAgICAgICAgICAgbHN0YWNrLnB1c2goeXl2YWwuXyQpO1xuICAgICAgICAgICAgbmV3U3RhdGUgPSB0YWJsZVtzdGFja1tzdGFjay5sZW5ndGggLSAyXV1bc3RhY2tbc3RhY2subGVuZ3RoIC0gMV1dO1xuICAgICAgICAgICAgc3RhY2sucHVzaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG59O1xuLyogSmlzb24gZ2VuZXJhdGVkIGxleGVyICovXG52YXIgbGV4ZXIgPSAoZnVuY3Rpb24oKXtcbnZhciBsZXhlciA9ICh7RU9GOjEsXG5wYXJzZUVycm9yOmZ1bmN0aW9uIHBhcnNlRXJyb3Ioc3RyLCBoYXNoKSB7XG4gICAgICAgIGlmICh0aGlzLnl5LnBhcnNlcikge1xuICAgICAgICAgICAgdGhpcy55eS5wYXJzZXIucGFyc2VFcnJvcihzdHIsIGhhc2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG4gICAgICAgIH1cbiAgICB9LFxuc2V0SW5wdXQ6ZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0aGlzLl9sZXNzID0gdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICAgIHRoaXMueXlsaW5lbm8gPSB0aGlzLnl5bGVuZyA9IDA7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy5tYXRjaGVkID0gdGhpcy5tYXRjaCA9ICcnO1xuICAgICAgICB0aGlzLmNvbmRpdGlvblN0YWNrID0gWydJTklUSUFMJ107XG4gICAgICAgIHRoaXMueXlsbG9jID0ge2ZpcnN0X2xpbmU6MSxmaXJzdF9jb2x1bW46MCxsYXN0X2xpbmU6MSxsYXN0X2NvbHVtbjowfTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlID0gWzAsMF07XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbmlucHV0OmZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy5faW5wdXRbMF07XG4gICAgICAgIHRoaXMueXl0ZXh0ICs9IGNoO1xuICAgICAgICB0aGlzLnl5bGVuZysrO1xuICAgICAgICB0aGlzLm9mZnNldCsrO1xuICAgICAgICB0aGlzLm1hdGNoICs9IGNoO1xuICAgICAgICB0aGlzLm1hdGNoZWQgKz0gY2g7XG4gICAgICAgIHZhciBsaW5lcyA9IGNoLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgaWYgKGxpbmVzKSB7XG4gICAgICAgICAgICB0aGlzLnl5bGluZW5vKys7XG4gICAgICAgICAgICB0aGlzLnl5bGxvYy5sYXN0X2xpbmUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMueXlsbG9jLmxhc3RfY29sdW1uKys7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHRoaXMueXlsbG9jLnJhbmdlWzFdKys7XG5cbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZSgxKTtcbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH0sXG51bnB1dDpmdW5jdGlvbiAoY2gpIHtcbiAgICAgICAgdmFyIGxlbiA9IGNoLmxlbmd0aDtcbiAgICAgICAgdmFyIGxpbmVzID0gY2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcblxuICAgICAgICB0aGlzLl9pbnB1dCA9IGNoICsgdGhpcy5faW5wdXQ7XG4gICAgICAgIHRoaXMueXl0ZXh0ID0gdGhpcy55eXRleHQuc3Vic3RyKDAsIHRoaXMueXl0ZXh0Lmxlbmd0aC1sZW4tMSk7XG4gICAgICAgIC8vdGhpcy55eWxlbmcgLT0gbGVuO1xuICAgICAgICB0aGlzLm9mZnNldCAtPSBsZW47XG4gICAgICAgIHZhciBvbGRMaW5lcyA9IHRoaXMubWF0Y2guc3BsaXQoLyg/Olxcclxcbj98XFxuKS9nKTtcbiAgICAgICAgdGhpcy5tYXRjaCA9IHRoaXMubWF0Y2guc3Vic3RyKDAsIHRoaXMubWF0Y2gubGVuZ3RoLTEpO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSB0aGlzLm1hdGNoZWQuc3Vic3RyKDAsIHRoaXMubWF0Y2hlZC5sZW5ndGgtMSk7XG5cbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aC0xKSB0aGlzLnl5bGluZW5vIC09IGxpbmVzLmxlbmd0aC0xO1xuICAgICAgICB2YXIgciA9IHRoaXMueXlsbG9jLnJhbmdlO1xuXG4gICAgICAgIHRoaXMueXlsbG9jID0ge2ZpcnN0X2xpbmU6IHRoaXMueXlsbG9jLmZpcnN0X2xpbmUsXG4gICAgICAgICAgbGFzdF9saW5lOiB0aGlzLnl5bGluZW5vKzEsXG4gICAgICAgICAgZmlyc3RfY29sdW1uOiB0aGlzLnl5bGxvYy5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgbGFzdF9jb2x1bW46IGxpbmVzID9cbiAgICAgICAgICAgICAgKGxpbmVzLmxlbmd0aCA9PT0gb2xkTGluZXMubGVuZ3RoID8gdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIDogMCkgKyBvbGRMaW5lc1tvbGRMaW5lcy5sZW5ndGggLSBsaW5lcy5sZW5ndGhdLmxlbmd0aCAtIGxpbmVzWzBdLmxlbmd0aDpcbiAgICAgICAgICAgICAgdGhpcy55eWxsb2MuZmlyc3RfY29sdW1uIC0gbGVuXG4gICAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJhbmdlcykge1xuICAgICAgICAgICAgdGhpcy55eWxsb2MucmFuZ2UgPSBbclswXSwgclswXSArIHRoaXMueXlsZW5nIC0gbGVuXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxubW9yZTpmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX21vcmUgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxubGVzczpmdW5jdGlvbiAobikge1xuICAgICAgICB0aGlzLnVucHV0KHRoaXMubWF0Y2guc2xpY2UobikpO1xuICAgIH0sXG5wYXN0SW5wdXQ6ZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFzdCA9IHRoaXMubWF0Y2hlZC5zdWJzdHIoMCwgdGhpcy5tYXRjaGVkLmxlbmd0aCAtIHRoaXMubWF0Y2gubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIChwYXN0Lmxlbmd0aCA+IDIwID8gJy4uLic6JycpICsgcGFzdC5zdWJzdHIoLTIwKS5yZXBsYWNlKC9cXG4vZywgXCJcIik7XG4gICAgfSxcbnVwY29taW5nSW5wdXQ6ZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbmV4dCA9IHRoaXMubWF0Y2g7XG4gICAgICAgIGlmIChuZXh0Lmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgICBuZXh0ICs9IHRoaXMuX2lucHV0LnN1YnN0cigwLCAyMC1uZXh0Lmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChuZXh0LnN1YnN0cigwLDIwKSsobmV4dC5sZW5ndGggPiAyMCA/ICcuLi4nOicnKSkucmVwbGFjZSgvXFxuL2csIFwiXCIpO1xuICAgIH0sXG5zaG93UG9zaXRpb246ZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcHJlID0gdGhpcy5wYXN0SW5wdXQoKTtcbiAgICAgICAgdmFyIGMgPSBuZXcgQXJyYXkocHJlLmxlbmd0aCArIDEpLmpvaW4oXCItXCIpO1xuICAgICAgICByZXR1cm4gcHJlICsgdGhpcy51cGNvbWluZ0lucHV0KCkgKyBcIlxcblwiICsgYytcIl5cIjtcbiAgICB9LFxubmV4dDpmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkVPRjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2lucHV0KSB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICAgIHZhciB0b2tlbixcbiAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgdGVtcE1hdGNoLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBjb2wsXG4gICAgICAgICAgICBsaW5lcztcbiAgICAgICAgaWYgKCF0aGlzLl9tb3JlKSB7XG4gICAgICAgICAgICB0aGlzLnl5dGV4dCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5tYXRjaCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHZhciBydWxlcyA9IHRoaXMuX2N1cnJlbnRSdWxlcygpO1xuICAgICAgICBmb3IgKHZhciBpPTA7aSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0ZW1wTWF0Y2ggPSB0aGlzLl9pbnB1dC5tYXRjaCh0aGlzLnJ1bGVzW3J1bGVzW2ldXSk7XG4gICAgICAgICAgICBpZiAodGVtcE1hdGNoICYmICghbWF0Y2ggfHwgdGVtcE1hdGNoWzBdLmxlbmd0aCA+IG1hdGNoWzBdLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHRlbXBNYXRjaDtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMuZmxleCkgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBsaW5lcyA9IG1hdGNoWzBdLm1hdGNoKC8oPzpcXHJcXG4/fFxcbikuKi9nKTtcbiAgICAgICAgICAgIGlmIChsaW5lcykgdGhpcy55eWxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLnl5bGxvYyA9IHtmaXJzdF9saW5lOiB0aGlzLnl5bGxvYy5sYXN0X2xpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2xpbmU6IHRoaXMueXlsaW5lbm8rMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0X2NvbHVtbjogdGhpcy55eWxsb2MubGFzdF9jb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0X2NvbHVtbjogbGluZXMgPyBsaW5lc1tsaW5lcy5sZW5ndGgtMV0ubGVuZ3RoLWxpbmVzW2xpbmVzLmxlbmd0aC0xXS5tYXRjaCgvXFxyP1xcbj8vKVswXS5sZW5ndGggOiB0aGlzLnl5bGxvYy5sYXN0X2NvbHVtbiArIG1hdGNoWzBdLmxlbmd0aH07XG4gICAgICAgICAgICB0aGlzLnl5dGV4dCArPSBtYXRjaFswXTtcbiAgICAgICAgICAgIHRoaXMubWF0Y2ggKz0gbWF0Y2hbMF07XG4gICAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBtYXRjaDtcbiAgICAgICAgICAgIHRoaXMueXlsZW5nID0gdGhpcy55eXRleHQubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5yYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnl5bGxvYy5yYW5nZSA9IFt0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKz0gdGhpcy55eWxlbmddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbW9yZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLl9pbnB1dC5zbGljZShtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy5tYXRjaGVkICs9IG1hdGNoWzBdO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLnBlcmZvcm1BY3Rpb24uY2FsbCh0aGlzLCB0aGlzLnl5LCB0aGlzLCBydWxlc1tpbmRleF0sdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aC0xXSk7XG4gICAgICAgICAgICBpZiAodGhpcy5kb25lICYmIHRoaXMuX2lucHV0KSB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0b2tlbikgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgZWxzZSByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ID09PSBcIlwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5FT0Y7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUVycm9yKCdMZXhpY2FsIGVycm9yIG9uIGxpbmUgJysodGhpcy55eWxpbmVubysxKSsnLiBVbnJlY29nbml6ZWQgdGV4dC5cXG4nK3RoaXMuc2hvd1Bvc2l0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgIHt0ZXh0OiBcIlwiLCB0b2tlbjogbnVsbCwgbGluZTogdGhpcy55eWxpbmVub30pO1xuICAgICAgICB9XG4gICAgfSxcbmxleDpmdW5jdGlvbiBsZXgoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5uZXh0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGV4KCk7XG4gICAgICAgIH1cbiAgICB9LFxuYmVnaW46ZnVuY3Rpb24gYmVnaW4oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uU3RhY2sucHVzaChjb25kaXRpb24pO1xuICAgIH0sXG5wb3BTdGF0ZTpmdW5jdGlvbiBwb3BTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uU3RhY2sucG9wKCk7XG4gICAgfSxcbl9jdXJyZW50UnVsZXM6ZnVuY3Rpb24gX2N1cnJlbnRSdWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1t0aGlzLmNvbmRpdGlvblN0YWNrW3RoaXMuY29uZGl0aW9uU3RhY2subGVuZ3RoLTFdXS5ydWxlcztcbiAgICB9LFxudG9wU3RhdGU6ZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25TdGFja1t0aGlzLmNvbmRpdGlvblN0YWNrLmxlbmd0aC0yXTtcbiAgICB9LFxucHVzaFN0YXRlOmZ1bmN0aW9uIGJlZ2luKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmJlZ2luKGNvbmRpdGlvbik7XG4gICAgfX0pO1xubGV4ZXIub3B0aW9ucyA9IHt9O1xubGV4ZXIucGVyZm9ybUFjdGlvbiA9IGZ1bmN0aW9uIGFub255bW91cyh5eSx5eV8sJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucyxZWV9TVEFSVCkge1xuXG5cbmZ1bmN0aW9uIHN0cmlwKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIHl5Xy55eXRleHQgPSB5eV8ueXl0ZXh0LnN1YnN0cihzdGFydCwgeXlfLnl5bGVuZy1lbmQpO1xufVxuXG5cbnZhciBZWVNUQVRFPVlZX1NUQVJUXG5zd2l0Y2goJGF2b2lkaW5nX25hbWVfY29sbGlzaW9ucykge1xuY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih5eV8ueXl0ZXh0LnNsaWNlKC0yKSA9PT0gXCJcXFxcXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaXAoMCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZ2luKFwibXVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih5eV8ueXl0ZXh0LnNsaWNlKC0xKSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpcCgwLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmVnaW4oXCJlbXVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbihcIm11XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHl5Xy55eXRleHQpIHJldHVybiAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuYnJlYWs7XG5jYXNlIDE6cmV0dXJuIDEyO1xuYnJlYWs7XG5jYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9wU3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5icmVhaztcbmNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5eV8ueXl0ZXh0ID0geXlfLnl5dGV4dC5zdWJzdHIoNSwgeXlfLnl5bGVuZy05KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE1O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5icmVhaztcbmNhc2UgNDogcmV0dXJuIDEyOyBcbmJyZWFrO1xuY2FzZSA1OnN0cmlwKDAsNCk7IHRoaXMucG9wU3RhdGUoKTsgcmV0dXJuIDEzO1xuYnJlYWs7XG5jYXNlIDY6cmV0dXJuIDQ1O1xuYnJlYWs7XG5jYXNlIDc6cmV0dXJuIDQ2O1xuYnJlYWs7XG5jYXNlIDg6IHJldHVybiAxNjsgXG5icmVhaztcbmNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iZWdpbigncmF3Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5icmVhaztcbmNhc2UgMTA6cmV0dXJuIDM0O1xuYnJlYWs7XG5jYXNlIDExOnJldHVybiAyNDtcbmJyZWFrO1xuY2FzZSAxMjpyZXR1cm4gMjk7XG5icmVhaztcbmNhc2UgMTM6dGhpcy5wb3BTdGF0ZSgpOyByZXR1cm4gMjg7XG5icmVhaztcbmNhc2UgMTQ6dGhpcy5wb3BTdGF0ZSgpOyByZXR1cm4gMjg7XG5icmVhaztcbmNhc2UgMTU6cmV0dXJuIDI2O1xuYnJlYWs7XG5jYXNlIDE2OnJldHVybiAyNjtcbmJyZWFrO1xuY2FzZSAxNzpyZXR1cm4gMzI7XG5icmVhaztcbmNhc2UgMTg6cmV0dXJuIDMxO1xuYnJlYWs7XG5jYXNlIDE5OnRoaXMucG9wU3RhdGUoKTsgdGhpcy5iZWdpbignY29tJyk7XG5icmVhaztcbmNhc2UgMjA6c3RyaXAoMyw1KTsgdGhpcy5wb3BTdGF0ZSgpOyByZXR1cm4gMTM7XG5icmVhaztcbmNhc2UgMjE6cmV0dXJuIDMxO1xuYnJlYWs7XG5jYXNlIDIyOnJldHVybiA1MTtcbmJyZWFrO1xuY2FzZSAyMzpyZXR1cm4gNTA7XG5icmVhaztcbmNhc2UgMjQ6cmV0dXJuIDUwO1xuYnJlYWs7XG5jYXNlIDI1OnJldHVybiA1NDtcbmJyZWFrO1xuY2FzZSAyNjovLyBpZ25vcmUgd2hpdGVzcGFjZVxuYnJlYWs7XG5jYXNlIDI3OnRoaXMucG9wU3RhdGUoKTsgcmV0dXJuIDMzO1xuYnJlYWs7XG5jYXNlIDI4OnRoaXMucG9wU3RhdGUoKTsgcmV0dXJuIDI1O1xuYnJlYWs7XG5jYXNlIDI5Onl5Xy55eXRleHQgPSBzdHJpcCgxLDIpLnJlcGxhY2UoL1xcXFxcIi9nLCdcIicpOyByZXR1cm4gNDI7XG5icmVhaztcbmNhc2UgMzA6eXlfLnl5dGV4dCA9IHN0cmlwKDEsMikucmVwbGFjZSgvXFxcXCcvZyxcIidcIik7IHJldHVybiA0MjtcbmJyZWFrO1xuY2FzZSAzMTpyZXR1cm4gNTI7XG5icmVhaztcbmNhc2UgMzI6cmV0dXJuIDQ0O1xuYnJlYWs7XG5jYXNlIDMzOnJldHVybiA0NDtcbmJyZWFrO1xuY2FzZSAzNDpyZXR1cm4gNDM7XG5icmVhaztcbmNhc2UgMzU6cmV0dXJuIDUwO1xuYnJlYWs7XG5jYXNlIDM2Onl5Xy55eXRleHQgPSBzdHJpcCgxLDIpOyByZXR1cm4gNTA7XG5icmVhaztcbmNhc2UgMzc6cmV0dXJuICdJTlZBTElEJztcbmJyZWFrO1xuY2FzZSAzODpyZXR1cm4gNTtcbmJyZWFrO1xufVxufTtcbmxleGVyLnJ1bGVzID0gWy9eKD86W15cXHgwMF0qPyg/PShcXHtcXHspKSkvLC9eKD86W15cXHgwMF0rKS8sL14oPzpbXlxceDAwXXsyLH0/KD89KFxce1xce3xcXFxcXFx7XFx7fFxcXFxcXFxcXFx7XFx7fCQpKSkvLC9eKD86XFx7XFx7XFx7XFx7XFwvW15cXHMhXCIjJS0sXFwuXFwvOy0+QFxcWy1cXF5gXFx7LX5dKyg/PVs9fVxcc1xcLy5dKVxcfVxcfVxcfVxcfSkvLC9eKD86W15cXHgwMF0qPyg/PShcXHtcXHtcXHtcXHtcXC8pKSkvLC9eKD86W1xcc1xcU10qPy0tXFx9XFx9KS8sL14oPzpcXCgpLywvXig/OlxcKSkvLC9eKD86XFx7XFx7XFx7XFx7KS8sL14oPzpcXH1cXH1cXH1cXH0pLywvXig/Olxce1xceyh+KT8+KS8sL14oPzpcXHtcXHsofik/IykvLC9eKD86XFx7XFx7KH4pP1xcLykvLC9eKD86XFx7XFx7KH4pP1xcXlxccyoofik/XFx9XFx9KS8sL14oPzpcXHtcXHsofik/XFxzKmVsc2VcXHMqKH4pP1xcfVxcfSkvLC9eKD86XFx7XFx7KH4pP1xcXikvLC9eKD86XFx7XFx7KH4pP1xccyplbHNlXFxiKS8sL14oPzpcXHtcXHsofik/XFx7KS8sL14oPzpcXHtcXHsofik/JikvLC9eKD86XFx7XFx7IS0tKS8sL14oPzpcXHtcXHshW1xcc1xcU10qP1xcfVxcfSkvLC9eKD86XFx7XFx7KH4pPykvLC9eKD86PSkvLC9eKD86XFwuXFwuKS8sL14oPzpcXC4oPz0oWz1+fVxcc1xcLy4pXSkpKS8sL14oPzpbXFwvLl0pLywvXig/OlxccyspLywvXig/OlxcfSh+KT9cXH1cXH0pLywvXig/Oih+KT9cXH1cXH0pLywvXig/OlwiKFxcXFxbXCJdfFteXCJdKSpcIikvLC9eKD86JyhcXFxcWyddfFteJ10pKicpLywvXig/OkApLywvXig/OnRydWUoPz0oW359XFxzKV0pKSkvLC9eKD86ZmFsc2UoPz0oW359XFxzKV0pKSkvLC9eKD86LT9bMC05XSsoPzpcXC5bMC05XSspPyg/PShbfn1cXHMpXSkpKS8sL14oPzooW15cXHMhXCIjJS0sXFwuXFwvOy0+QFxcWy1cXF5gXFx7LX5dKyg/PShbPX59XFxzXFwvLildKSkpKS8sL14oPzpcXFtbXlxcXV0qXFxdKS8sL14oPzouKS8sL14oPzokKS9dO1xubGV4ZXIuY29uZGl0aW9ucyA9IHtcIm11XCI6e1wicnVsZXNcIjpbNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOF0sXCJpbmNsdXNpdmVcIjpmYWxzZX0sXCJlbXVcIjp7XCJydWxlc1wiOlsyXSxcImluY2x1c2l2ZVwiOmZhbHNlfSxcImNvbVwiOntcInJ1bGVzXCI6WzVdLFwiaW5jbHVzaXZlXCI6ZmFsc2V9LFwicmF3XCI6e1wicnVsZXNcIjpbMyw0XSxcImluY2x1c2l2ZVwiOmZhbHNlfSxcIklOSVRJQUxcIjp7XCJydWxlc1wiOlswLDEsMzhdLFwiaW5jbHVzaXZlXCI6dHJ1ZX19O1xucmV0dXJuIGxleGVyO30pKClcbnBhcnNlci5sZXhlciA9IGxleGVyO1xuZnVuY3Rpb24gUGFyc2VyICgpIHsgdGhpcy55eSA9IHt9OyB9UGFyc2VyLnByb3RvdHlwZSA9IHBhcnNlcjtwYXJzZXIuUGFyc2VyID0gUGFyc2VyO1xucmV0dXJuIG5ldyBQYXJzZXI7XG59KSgpO2V4cG9ydHNbXCJkZWZhdWx0XCJdID0gaGFuZGxlYmFycztcbi8qIGpzaGludCBpZ25vcmU6ZW5kICovIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgVmlzaXRvciA9IHJlcXVpcmUoXCIuL3Zpc2l0b3JcIilbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiBwcmludChhc3QpIHtcbiAgcmV0dXJuIG5ldyBQcmludFZpc2l0b3IoKS5hY2NlcHQoYXN0KTtcbn1cblxuZXhwb3J0cy5wcmludCA9IHByaW50O2Z1bmN0aW9uIFByaW50VmlzaXRvcigpIHtcbiAgdGhpcy5wYWRkaW5nID0gMDtcbn1cblxuZXhwb3J0cy5QcmludFZpc2l0b3IgPSBQcmludFZpc2l0b3I7UHJpbnRWaXNpdG9yLnByb3RvdHlwZSA9IG5ldyBWaXNpdG9yKCk7XG5cblByaW50VmlzaXRvci5wcm90b3R5cGUucGFkID0gZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciBvdXQgPSBcIlwiO1xuXG4gIGZvcih2YXIgaT0wLGw9dGhpcy5wYWRkaW5nOyBpPGw7IGkrKykge1xuICAgIG91dCA9IG91dCArIFwiICBcIjtcbiAgfVxuXG4gIG91dCA9IG91dCArIHN0cmluZyArIFwiXFxuXCI7XG4gIHJldHVybiBvdXQ7XG59O1xuXG5QcmludFZpc2l0b3IucHJvdG90eXBlLnByb2dyYW0gPSBmdW5jdGlvbihwcm9ncmFtKSB7XG4gIHZhciBvdXQgPSBcIlwiLFxuICAgICAgc3RhdGVtZW50cyA9IHByb2dyYW0uc3RhdGVtZW50cyxcbiAgICAgIGksIGw7XG5cbiAgZm9yKGk9MCwgbD1zdGF0ZW1lbnRzLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICBvdXQgPSBvdXQgKyB0aGlzLmFjY2VwdChzdGF0ZW1lbnRzW2ldKTtcbiAgfVxuXG4gIHRoaXMucGFkZGluZy0tO1xuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5QcmludFZpc2l0b3IucHJvdG90eXBlLmJsb2NrID0gZnVuY3Rpb24oYmxvY2spIHtcbiAgdmFyIG91dCA9IFwiXCI7XG5cbiAgb3V0ID0gb3V0ICsgdGhpcy5wYWQoXCJCTE9DSzpcIik7XG4gIHRoaXMucGFkZGluZysrO1xuICBvdXQgPSBvdXQgKyB0aGlzLmFjY2VwdChibG9jay5tdXN0YWNoZSk7XG4gIGlmIChibG9jay5wcm9ncmFtKSB7XG4gICAgb3V0ID0gb3V0ICsgdGhpcy5wYWQoXCJQUk9HUkFNOlwiKTtcbiAgICB0aGlzLnBhZGRpbmcrKztcbiAgICBvdXQgPSBvdXQgKyB0aGlzLmFjY2VwdChibG9jay5wcm9ncmFtKTtcbiAgICB0aGlzLnBhZGRpbmctLTtcbiAgfVxuICBpZiAoYmxvY2suaW52ZXJzZSkge1xuICAgIGlmIChibG9jay5wcm9ncmFtKSB7IHRoaXMucGFkZGluZysrOyB9XG4gICAgb3V0ID0gb3V0ICsgdGhpcy5wYWQoXCJ7e159fVwiKTtcbiAgICB0aGlzLnBhZGRpbmcrKztcbiAgICBvdXQgPSBvdXQgKyB0aGlzLmFjY2VwdChibG9jay5pbnZlcnNlKTtcbiAgICB0aGlzLnBhZGRpbmctLTtcbiAgICBpZiAoYmxvY2sucHJvZ3JhbSkgeyB0aGlzLnBhZGRpbmctLTsgfVxuICB9XG4gIHRoaXMucGFkZGluZy0tO1xuXG4gIHJldHVybiBvdXQ7XG59O1xuXG5QcmludFZpc2l0b3IucHJvdG90eXBlLnNleHByID0gZnVuY3Rpb24oc2V4cHIpIHtcbiAgdmFyIHBhcmFtcyA9IHNleHByLnBhcmFtcywgcGFyYW1TdHJpbmdzID0gW10sIGhhc2g7XG5cbiAgZm9yKHZhciBpPTAsIGw9cGFyYW1zLmxlbmd0aDsgaTxsOyBpKyspIHtcbiAgICBwYXJhbVN0cmluZ3MucHVzaCh0aGlzLmFjY2VwdChwYXJhbXNbaV0pKTtcbiAgfVxuXG4gIHBhcmFtcyA9IFwiW1wiICsgcGFyYW1TdHJpbmdzLmpvaW4oXCIsIFwiKSArIFwiXVwiO1xuXG4gIGhhc2ggPSBzZXhwci5oYXNoID8gXCIgXCIgKyB0aGlzLmFjY2VwdChzZXhwci5oYXNoKSA6IFwiXCI7XG5cbiAgcmV0dXJuIHRoaXMuYWNjZXB0KHNleHByLmlkKSArIFwiIFwiICsgcGFyYW1zICsgaGFzaDtcbn07XG5cblByaW50VmlzaXRvci5wcm90b3R5cGUubXVzdGFjaGUgPSBmdW5jdGlvbihtdXN0YWNoZSkge1xuICByZXR1cm4gdGhpcy5wYWQoXCJ7eyBcIiArIHRoaXMuYWNjZXB0KG11c3RhY2hlLnNleHByKSArIFwiIH19XCIpO1xufTtcblxuUHJpbnRWaXNpdG9yLnByb3RvdHlwZS5wYXJ0aWFsID0gZnVuY3Rpb24ocGFydGlhbCkge1xuICB2YXIgY29udGVudCA9IHRoaXMuYWNjZXB0KHBhcnRpYWwucGFydGlhbE5hbWUpO1xuICBpZihwYXJ0aWFsLmNvbnRleHQpIHtcbiAgICBjb250ZW50ICs9IFwiIFwiICsgdGhpcy5hY2NlcHQocGFydGlhbC5jb250ZXh0KTtcbiAgfVxuICBpZiAocGFydGlhbC5oYXNoKSB7XG4gICAgY29udGVudCArPSBcIiBcIiArIHRoaXMuYWNjZXB0KHBhcnRpYWwuaGFzaCk7XG4gIH1cbiAgcmV0dXJuIHRoaXMucGFkKFwie3s+IFwiICsgY29udGVudCArIFwiIH19XCIpO1xufTtcblxuUHJpbnRWaXNpdG9yLnByb3RvdHlwZS5oYXNoID0gZnVuY3Rpb24oaGFzaCkge1xuICB2YXIgcGFpcnMgPSBoYXNoLnBhaXJzO1xuICB2YXIgam9pbmVkUGFpcnMgPSBbXSwgbGVmdCwgcmlnaHQ7XG5cbiAgZm9yKHZhciBpPTAsIGw9cGFpcnMubGVuZ3RoOyBpPGw7IGkrKykge1xuICAgIGxlZnQgPSBwYWlyc1tpXVswXTtcbiAgICByaWdodCA9IHRoaXMuYWNjZXB0KHBhaXJzW2ldWzFdKTtcbiAgICBqb2luZWRQYWlycy5wdXNoKCBsZWZ0ICsgXCI9XCIgKyByaWdodCApO1xuICB9XG5cbiAgcmV0dXJuIFwiSEFTSHtcIiArIGpvaW5lZFBhaXJzLmpvaW4oXCIsIFwiKSArIFwifVwiO1xufTtcblxuUHJpbnRWaXNpdG9yLnByb3RvdHlwZS5TVFJJTkcgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgcmV0dXJuICdcIicgKyBzdHJpbmcuc3RyaW5nICsgJ1wiJztcbn07XG5cblByaW50VmlzaXRvci5wcm90b3R5cGUuTlVNQkVSID0gZnVuY3Rpb24obnVtYmVyKSB7XG4gIHJldHVybiBcIk5VTUJFUntcIiArIG51bWJlci5udW1iZXIgKyBcIn1cIjtcbn07XG5cblByaW50VmlzaXRvci5wcm90b3R5cGUuQk9PTEVBTiA9IGZ1bmN0aW9uKGJvb2wpIHtcbiAgcmV0dXJuIFwiQk9PTEVBTntcIiArIGJvb2wuYm9vbCArIFwifVwiO1xufTtcblxuUHJpbnRWaXNpdG9yLnByb3RvdHlwZS5JRCA9IGZ1bmN0aW9uKGlkKSB7XG4gIHZhciBwYXRoID0gaWQucGFydHMuam9pbihcIi9cIik7XG4gIGlmKGlkLnBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gXCJQQVRIOlwiICsgcGF0aDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJJRDpcIiArIHBhdGg7XG4gIH1cbn07XG5cblByaW50VmlzaXRvci5wcm90b3R5cGUuUEFSVElBTF9OQU1FID0gZnVuY3Rpb24ocGFydGlhbE5hbWUpIHtcbiAgICByZXR1cm4gXCJQQVJUSUFMOlwiICsgcGFydGlhbE5hbWUubmFtZTtcbn07XG5cblByaW50VmlzaXRvci5wcm90b3R5cGUuREFUQSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgcmV0dXJuIFwiQFwiICsgdGhpcy5hY2NlcHQoZGF0YS5pZCk7XG59O1xuXG5QcmludFZpc2l0b3IucHJvdG90eXBlLmNvbnRlbnQgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gIHJldHVybiB0aGlzLnBhZChcIkNPTlRFTlRbICdcIiArIGNvbnRlbnQuc3RyaW5nICsgXCInIF1cIik7XG59O1xuXG5QcmludFZpc2l0b3IucHJvdG90eXBlLmNvbW1lbnQgPSBmdW5jdGlvbihjb21tZW50KSB7XG4gIHJldHVybiB0aGlzLnBhZChcInt7ISAnXCIgKyBjb21tZW50LmNvbW1lbnQgKyBcIicgfX1cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gVmlzaXRvcigpIHt9XG5cblZpc2l0b3IucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogVmlzaXRvcixcblxuICBhY2NlcHQ6IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0aGlzW29iamVjdC50eXBlXShvYmplY3QpO1xuICB9XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFZpc2l0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxpbmU7XG4gIGlmIChub2RlICYmIG5vZGUuZmlyc3RMaW5lKSB7XG4gICAgbGluZSA9IG5vZGUuZmlyc3RMaW5lO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBub2RlLmZpcnN0Q29sdW1uO1xuICB9XG5cbiAgdmFyIHRtcCA9IEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIC8vIFVuZm9ydHVuYXRlbHkgZXJyb3JzIGFyZSBub3QgZW51bWVyYWJsZSBpbiBDaHJvbWUgKGF0IGxlYXN0KSwgc28gYGZvciBwcm9wIGluIHRtcGAgZG9lc24ndCB3b3JrLlxuICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBlcnJvclByb3BzLmxlbmd0aDsgaWR4KyspIHtcbiAgICB0aGlzW2Vycm9yUHJvcHNbaWR4XV0gPSB0bXBbZXJyb3JQcm9wc1tpZHhdXTtcbiAgfVxuXG4gIGlmIChsaW5lKSB7XG4gICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcbiAgICB0aGlzLmNvbHVtbiA9IG5vZGUuZmlyc3RDb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEV4Y2VwdGlvbjsiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIEV4Y2VwdGlvbiA9IHJlcXVpcmUoXCIuL2V4Y2VwdGlvblwiKVtcImRlZmF1bHRcIl07XG52YXIgQ09NUElMRVJfUkVWSVNJT04gPSByZXF1aXJlKFwiLi9iYXNlXCIpLkNPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSByZXF1aXJlKFwiLi9iYXNlXCIpLlJFVklTSU9OX0NIQU5HRVM7XG52YXIgY3JlYXRlRnJhbWUgPSByZXF1aXJlKFwiLi9iYXNlXCIpLmNyZWF0ZUZyYW1lO1xuXG5mdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICB2YXIgY29tcGlsZXJSZXZpc2lvbiA9IGNvbXBpbGVySW5mbyAmJiBjb21waWxlckluZm9bMF0gfHwgMSxcbiAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgdmFyIHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICBjb21waWxlclZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjb21waWxlclJldmlzaW9uXTtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoXCIrcnVudGltZVZlcnNpb25zK1wiKSBvciBkb3duZ3JhZGUgeW91ciBydW50aW1lIHRvIGFuIG9sZGVyIHZlcnNpb24gKFwiK2NvbXBpbGVyVmVyc2lvbnMrXCIpLlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKFwiVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiBcIitcbiAgICAgICAgICAgIFwiUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uIChcIitjb21waWxlckluZm9bMV0rXCIpLlwiKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjsvLyBUT0RPOiBSZW1vdmUgdGhpcyBsaW5lIGFuZCBicmVhayB1cCBjb21waWxlUGFydGlhbFxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGVcIik7XG4gIH1cbiAgaWYgKCF0ZW1wbGF0ZVNwZWMgfHwgIXRlbXBsYXRlU3BlYy5tYWluKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgdmFyIGludm9rZVBhcnRpYWxXcmFwcGVyID0gZnVuY3Rpb24ocGFydGlhbCwgaW5kZW50LCBuYW1lLCBjb250ZXh0LCBoYXNoLCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKGhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIGhhc2gpO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIG5hbWUsIGNvbnRleHQsIGhlbHBlcnMsIHBhcnRpYWxzLCBkYXRhLCBkZXB0aHMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHsgaGVscGVyczogaGVscGVycywgcGFydGlhbHM6IHBhcnRpYWxzLCBkYXRhOiBkYXRhLCBkZXB0aHM6IGRlcHRocyB9O1xuICAgICAgcGFydGlhbHNbbmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB7IGRhdGE6IGRhdGEgIT09IHVuZGVmaW5lZCwgY29tcGF0OiB0ZW1wbGF0ZVNwZWMuY29tcGF0IH0sIGVudik7XG4gICAgICByZXN1bHQgPSBwYXJ0aWFsc1tuYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAoaW5kZW50KSB7XG4gICAgICAgIHZhciBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBpbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oXCJUaGUgcGFydGlhbCBcIiArIG5hbWUgKyBcIiBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBKdXN0IGFkZCB3YXRlclxuICB2YXIgY29udGFpbmVyID0ge1xuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICB2YXIgbGVuID0gZGVwdGhzLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGRlcHRoc1tpXSAmJiBkZXB0aHNbaV1bbmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBkZXB0aHNbaV1bbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhbWJkYTogZnVuY3Rpb24oY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVTcGVjW2ldO1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocykge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSBwcm9ncmFtKHRoaXMsIGksIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9ncmFtV3JhcHBlcjtcbiAgICB9LFxuXG4gICAgZGF0YTogZnVuY3Rpb24oZGF0YSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlIChkYXRhICYmIGRlcHRoLS0pIHtcbiAgICAgICAgZGF0YSA9IGRhdGEuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIHZhciByZXQgPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIHJldCA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgdmFyIHJldCA9IGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgdmFyIGRlcHRocztcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgZGVwdGhzID0gb3B0aW9ucy5kZXB0aHMgPyBbY29udGV4dF0uY29uY2F0KG9wdGlvbnMuZGVwdGhzKSA6IFtjb250ZXh0XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGVTcGVjLm1haW4uY2FsbChjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGRlcHRocyk7XG4gIH07XG4gIHJldC5pc1RvcCA9IHRydWU7XG5cbiAgcmV0Ll9zZXR1cCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCkge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5oZWxwZXJzLCBlbnYuaGVscGVycyk7XG5cbiAgICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlUGFydGlhbCkge1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5wYXJ0aWFscywgZW52LnBhcnRpYWxzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLmhlbHBlcnMgPSBvcHRpb25zLmhlbHBlcnM7XG4gICAgICBjb250YWluZXIucGFydGlhbHMgPSBvcHRpb25zLnBhcnRpYWxzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgZGVwdGhzKSB7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMgJiYgIWRlcHRocykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO2Z1bmN0aW9uIHByb2dyYW0oY29udGFpbmVyLCBpLCBmbiwgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBwcm9nID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgcmV0dXJuIGZuLmNhbGwoY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBvcHRpb25zLmRhdGEgfHwgZGF0YSwgZGVwdGhzICYmIFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKSk7XG4gIH07XG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmV4cG9ydHMucHJvZ3JhbSA9IHByb2dyYW07ZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBuYW1lLCBjb250ZXh0LCBoZWxwZXJzLCBwYXJ0aWFscywgZGF0YSwgZGVwdGhzKSB7XG4gIHZhciBvcHRpb25zID0geyBwYXJ0aWFsOiB0cnVlLCBoZWxwZXJzOiBoZWxwZXJzLCBwYXJ0aWFsczogcGFydGlhbHMsIGRhdGE6IGRhdGEsIGRlcHRoczogZGVwdGhzIH07XG5cbiAgaWYocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbihcIlRoZSBwYXJ0aWFsIFwiICsgbmFtZSArIFwiIGNvdWxkIG5vdCBiZSBmb3VuZFwiKTtcbiAgfSBlbHNlIGlmKHBhcnRpYWwgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIHJldHVybiBwYXJ0aWFsKGNvbnRleHQsIG9wdGlvbnMpO1xuICB9XG59XG5cbmV4cG9ydHMuaW52b2tlUGFydGlhbCA9IGludm9rZVBhcnRpYWw7ZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuIFwiXCI7IH1cblxuZXhwb3J0cy5ub29wID0gbm9vcDtmdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufSIsIlwidXNlIHN0cmljdFwiO1xuLy8gQnVpbGQgb3V0IG91ciBiYXNpYyBTYWZlU3RyaW5nIHR5cGVcbmZ1bmN0aW9uIFNhZmVTdHJpbmcoc3RyaW5nKSB7XG4gIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xufVxuXG5TYWZlU3RyaW5nLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gXCJcIiArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTYWZlU3RyaW5nOyIsIlwidXNlIHN0cmljdFwiO1xuLypqc2hpbnQgLVcwMDQgKi9cbnZhciBTYWZlU3RyaW5nID0gcmVxdWlyZShcIi4vc2FmZS1zdHJpbmdcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgZXNjYXBlID0ge1xuICBcIiZcIjogXCImYW1wO1wiLFxuICBcIjxcIjogXCImbHQ7XCIsXG4gIFwiPlwiOiBcIiZndDtcIixcbiAgJ1wiJzogXCImcXVvdDtcIixcbiAgXCInXCI6IFwiJiN4Mjc7XCIsXG4gIFwiYFwiOiBcIiYjeDYwO1wiXG59O1xuXG52YXIgYmFkQ2hhcnMgPSAvWyY8PlwiJ2BdL2c7XG52YXIgcG9zc2libGUgPSAvWyY8PlwiJ2BdLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5mdW5jdGlvbiBleHRlbmQob2JqIC8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnRzLmV4dGVuZCA9IGV4dGVuZDt2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuZXhwb3J0cy50b1N0cmluZyA9IHRvU3RyaW5nO1xuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbnZhciBpc0Z1bmN0aW9uO1xuZXhwb3J0cy5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O1xuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICBpZiAoc3RyaW5nIGluc3RhbmNlb2YgU2FmZVN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcudG9TdHJpbmcoKTtcbiAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9IGVsc2UgaWYgKCFzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gIH1cblxuICAvLyBGb3JjZSBhIHN0cmluZyBjb252ZXJzaW9uIGFzIHRoaXMgd2lsbCBiZSBkb25lIGJ5IHRoZSBhcHBlbmQgcmVnYXJkbGVzcyBhbmRcbiAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICBzdHJpbmcgPSBcIlwiICsgc3RyaW5nO1xuXG4gIGlmKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHsgcmV0dXJuIHN0cmluZzsgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYmFkQ2hhcnMsIGVzY2FwZUNoYXIpO1xufVxuXG5leHBvcnRzLmVzY2FwZUV4cHJlc3Npb24gPSBlc2NhcGVFeHByZXNzaW9uO2Z1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O2Z1bmN0aW9uIGFwcGVuZENvbnRleHRQYXRoKGNvbnRleHRQYXRoLCBpZCkge1xuICByZXR1cm4gKGNvbnRleHRQYXRoID8gY29udGV4dFBhdGggKyAnLicgOiAnJykgKyBpZDtcbn1cblxuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoOyIsIi8vIFVTQUdFOlxuLy8gdmFyIGhhbmRsZWJhcnMgPSByZXF1aXJlKCdoYW5kbGViYXJzJyk7XG5cbi8vIHZhciBsb2NhbCA9IGhhbmRsZWJhcnMuY3JlYXRlKCk7XG5cbnZhciBoYW5kbGViYXJzID0gcmVxdWlyZSgnLi4vZGlzdC9janMvaGFuZGxlYmFycycpW1wiZGVmYXVsdFwiXTtcblxuaGFuZGxlYmFycy5WaXNpdG9yID0gcmVxdWlyZSgnLi4vZGlzdC9janMvaGFuZGxlYmFycy9jb21waWxlci92aXNpdG9yJylbXCJkZWZhdWx0XCJdO1xuXG52YXIgcHJpbnRlciA9IHJlcXVpcmUoJy4uL2Rpc3QvY2pzL2hhbmRsZWJhcnMvY29tcGlsZXIvcHJpbnRlcicpO1xuaGFuZGxlYmFycy5QcmludFZpc2l0b3IgPSBwcmludGVyLlByaW50VmlzaXRvcjtcbmhhbmRsZWJhcnMucHJpbnQgPSBwcmludGVyLnByaW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhbmRsZWJhcnM7XG5cbi8vIFB1Ymxpc2ggYSBOb2RlLmpzIHJlcXVpcmUoKSBoYW5kbGVyIGZvciAuaGFuZGxlYmFycyBhbmQgLmhicyBmaWxlc1xuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbmlmICh0eXBlb2YgcmVxdWlyZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcmVxdWlyZS5leHRlbnNpb25zKSB7XG4gIHZhciBleHRlbnNpb24gPSBmdW5jdGlvbihtb2R1bGUsIGZpbGVuYW1lKSB7XG4gICAgdmFyIGZzID0gcmVxdWlyZShcImZzXCIpO1xuICAgIHZhciB0ZW1wbGF0ZVN0cmluZyA9IGZzLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgXCJ1dGY4XCIpO1xuICAgIG1vZHVsZS5leHBvcnRzID0gaGFuZGxlYmFycy5jb21waWxlKHRlbXBsYXRlU3RyaW5nKTtcbiAgfTtcbiAgcmVxdWlyZS5leHRlbnNpb25zW1wiLmhhbmRsZWJhcnNcIl0gPSBleHRlbnNpb247XG4gIHJlcXVpcmUuZXh0ZW5zaW9uc1tcIi5oYnNcIl0gPSBleHRlbnNpb247XG59XG4iLCJ2YXIgcmFmID0gcmVxdWlyZSgncmFmJyk7XG52YXIgaWQgPSAwO1xuZnVuY3Rpb24gU2Nyb2xsTWFuYWdlciAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNjcm9sbE1hbmFnZXIpKXtcbiAgICByZXR1cm4gbmV3IFNjcm9sbE1hbmFnZXIoKTtcbiAgfVxufVxuXG52YXIgZWFzZUxpbmVhciA9IGZ1bmN0aW9uIChjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4gY2hhbmdlICogY3VycmVudFRpbWUvZHVyYXRpb24gKyBzdGFydDtcbn07XG5cbnZhciBlYXNlSW5RdWFkID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIGN1cnJlbnRUaW1lIC89IGR1cmF0aW9uO1xuICByZXR1cm4gY2hhbmdlICogY3VycmVudFRpbWUgKiBjdXJyZW50VGltZSArIHN0YXJ0O1xufTtcblxudmFyIGVhc2VPdXRRdWFkID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIGN1cnJlbnRUaW1lIC89IGR1cmF0aW9uO1xuICByZXR1cm4gLWNoYW5nZSAqIGN1cnJlbnRUaW1lICogKGN1cnJlbnRUaW1lLTIpICsgc3RhcnQ7XG59O1xuXG52YXIgZWFzZUluT3V0UXVhZCA9IGZ1bmN0aW9uIChjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBjdXJyZW50VGltZSAvPSBkdXJhdGlvbi8yO1xuICBpZiAoY3VycmVudFRpbWUgPCAxKSByZXR1cm4gY2hhbmdlLzIgKiBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICsgc3RhcnQ7XG4gIGN1cnJlbnRUaW1lLS07XG4gIHJldHVybiAtY2hhbmdlLzIgKiAoY3VycmVudFRpbWUgKiAoIGN1cnJlbnRUaW1lIC0gMikgLSAxKSArIHN0YXJ0O1xufTtcblxudmFyIGVhc2VJbkN1YmljID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIGN1cnJlbnRUaW1lIC89IGR1cmF0aW9uO1xuICByZXR1cm4gY2hhbmdlICogY3VycmVudFRpbWUgKiBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICsgc3RhcnQ7XG59O1xuXG52YXIgZWFzZU91dEN1YmljID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIGN1cnJlbnRUaW1lIC89IGR1cmF0aW9uO1xuICBjdXJyZW50VGltZS0tO1xuICByZXR1cm4gY2hhbmdlICogKGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUgKiBjdXJyZW50VGltZSArIDEpICsgc3RhcnQ7XG59O1xuXG52YXIgZWFzZUluT3V0Q3ViaWMgPSBmdW5jdGlvbiAoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgY3VycmVudFRpbWUgLz0gZHVyYXRpb24vMjtcbiAgaWYgKGN1cnJlbnRUaW1lIDwgMSkgcmV0dXJuIGNoYW5nZS8yICogY3VycmVudFRpbWUgKiBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICsgc3RhcnQ7XG4gIGN1cnJlbnRUaW1lIC09IDI7XG4gIHJldHVybiBjaGFuZ2UvMiAqIChjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUgKyAyKSArIHN0YXJ0O1xufTtcblxudmFyIGVhc2VJbkV4cG8gPSBmdW5jdGlvbiAoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKXtcbiAgJ3VzZSBzdHJpY3QnO1xuICByZXR1cm4gY2hhbmdlICogTWF0aC5wb3coIDIsIDEwICogKGN1cnJlbnRUaW1lL2R1cmF0aW9uIC0gMSkgKSArIHN0YXJ0O1xufTtcblxudmFyIGVhc2VPdXRFeHBvID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIHJldHVybiBjaGFuZ2UgKiAoIC1NYXRoLnBvdyggMiwgLTEwICogY3VycmVudFRpbWUvZHVyYXRpb24gKSArIDEgKSArIHN0YXJ0O1xufTtcblxudmFyIGVhc2VJbk91dEV4cG8gPSBmdW5jdGlvbiAoY3VycmVudFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgY3VycmVudFRpbWUgLz0gZHVyYXRpb24vMjtcbiAgaWYgKGN1cnJlbnRUaW1lIDwgMSkgcmV0dXJuIGNoYW5nZSAvIDIgKiBNYXRoLnBvdyggMiwgMTAgKiAoY3VycmVudFRpbWUgLSAxKSApICsgc3RhcnQ7XG4gIGN1cnJlbnRUaW1lLS07XG4gIHJldHVybiBjaGFuZ2UvMiAqICggLU1hdGgucG93KCAyLCAtMTAgKiBjdXJyZW50VGltZSkgKyAyICkgKyBzdGFydDtcbn07XG5cbnZhciBlYXNlSW5DaXJjID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIGN1cnJlbnRUaW1lIC89IGR1cmF0aW9uO1xuICByZXR1cm4gLWNoYW5nZSAqIChNYXRoLnNxcnQoMSAtIGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUpIC0gMSkgKyBzdGFydDtcbn07XG5cbnZhciBlYXNlT3V0Q2lyYyA9IGZ1bmN0aW9uIChjdXJyZW50VGltZSwgc3RhcnQsIGNoYW5nZSwgZHVyYXRpb24pIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICBjdXJyZW50VGltZSAvPSBkdXJhdGlvbjtcbiAgY3VycmVudFRpbWUtLTtcbiAgcmV0dXJuIGNoYW5nZSAqIE1hdGguc3FydCgxIC0gY3VycmVudFRpbWUgKiBjdXJyZW50VGltZSkgKyBzdGFydDtcbn07XG5cbnZhciBlYXNlSW5PdXRDaXJjID0gZnVuY3Rpb24gKGN1cnJlbnRUaW1lLCBzdGFydCwgY2hhbmdlLCBkdXJhdGlvbikge1xuICAndXNlIHN0cmljdCc7XG4gIGN1cnJlbnRUaW1lIC89IGR1cmF0aW9uLzI7XG4gIGlmIChjdXJyZW50VGltZSA8IDEpIHJldHVybiAtY2hhbmdlLzIgKiAoTWF0aC5zcXJ0KDEgLSBjdXJyZW50VGltZSAqIGN1cnJlbnRUaW1lKSAtIDEpICsgc3RhcnQ7XG4gIGN1cnJlbnRUaW1lIC09IDI7XG4gIHJldHVybiBjaGFuZ2UvMiAqIChNYXRoLnNxcnQoMSAtIGN1cnJlbnRUaW1lICogY3VycmVudFRpbWUpICsgMSkgKyBzdGFydDtcbn07XG5cbnZhciBzZWxlY3RFYXNlID0gZnVuY3Rpb24oZWFzZSl7XG4gICd1c2Ugc3RyaWN0JztcbiAgc3dpdGNoIChlYXNlKSB7XG4gICAgY2FzZSAnZWFzZUxpbmVhcic6XG4gICAgICByZXR1cm4gZWFzZUxpbmVhcjsgXG4gICAgY2FzZSAnZWFzZUluUXVhZCc6IFxuICAgICAgcmV0dXJuIGVhc2VJblF1YWQ7XG4gICAgY2FzZSAnZWFzZU91dFF1YWQnOiBcbiAgICAgIHJldHVybiBlYXNlT3V0UXVhZDtcbiAgICBjYXNlICdlYXNlSW5PdXRRdWFkJzogXG4gICAgICByZXR1cm4gZWFzZUluT3V0UXVhZDtcbiAgICBjYXNlICdlYXNlSW5DdWJpYyc6IFxuICAgICAgcmV0dXJuIGVhc2VJbkN1YmljO1xuICAgIGNhc2UgJ2Vhc2VPdXRDdWJpYyc6IFxuICAgICAgcmV0dXJuIGVhc2VPdXRDdWJpYztcbiAgICBjYXNlICdlYXNlSW5PdXRDdWJpYyc6IFxuICAgICAgcmV0dXJuIGVhc2VJbk91dEN1YmljO1xuICAgIGNhc2UgJ2Vhc2VJbkV4cG8nOiBcbiAgICAgIHJldHVybiBlYXNlSW5FeHBvO1xuICAgIGNhc2UgJ2Vhc2VPdXRFeHBvJzogXG4gICAgICByZXR1cm4gZWFzZU91dEV4cG87XG4gICAgY2FzZSAnZWFzZUluT3V0RXhwbyc6IFxuICAgICAgcmV0dXJuIGVhc2VJbk91dEV4cG87XG4gICAgY2FzZSAnZWFzZUluQ2lyYyc6IFxuICAgICAgcmV0dXJuIGVhc2VJbkNpcmM7XG4gICAgY2FzZSAnZWFzZU91dENpcmMnOiBcbiAgICAgIHJldHVybiBlYXNlT3V0Q2lyYztcbiAgICBjYXNlICdlYXNlSW5PdXRDaXJjJzogXG4gICAgICByZXR1cm4gZWFzZUluT3V0Q2lyYztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGVhc2VMaW5lYXI7XG4gIH1cbn07XG5cblNjcm9sbE1hbmFnZXIucHJvdG90eXBlLnNjcm9sbFRvcCA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgZWFzZSA9IG9wdGlvbnMuZWFzZTtcblxuICAgIHRoaXMuc2Nyb2xsVG8oe2VsZW1lbnQ6IGVsZW1lbnQsIGR1cmF0aW9uOiBkdXJhdGlvbiwgdG86IDAsIGVhc2U6IGVhc2V9LCBjYWxsYmFjayk7XG5cbn07XG5cblNjcm9sbE1hbmFnZXIucHJvdG90eXBlLnNjcm9sbEJvdHRvbSA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgZWxlbWVudCA9IG9wdGlvbnMuZWxlbWVudCxcbiAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgZWFzZSA9IG9wdGlvbnMuZWFzZTtcblxuICAgIHZhciBoZWlnaHQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5oZWlnaHQpO1xuXG4gICAgdGhpcy5zY3JvbGxUbyh7ZWxlbWVudDogZWxlbWVudCwgZHVyYXRpb246IGR1cmF0aW9uLCB0bzogaGVpZ2h0LCBlYXNlOiBlYXNlfSwgY2FsbGJhY2spO1xuXG59O1xuXG5TY3JvbGxNYW5hZ2VyLnByb3RvdHlwZS5zY3JvbGxFcXVhbCA9IGZ1bmN0aW9uKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBlbGVtZW50ID0gb3B0aW9ucy5lbGVtZW50LFxuICAgIHZlbG9jaXR5ID0gb3B0aW9ucy52ZWxvY2l0eSxcbiAgICB0byA9IG9wdGlvbnMudG8sXG4gICAgZWFzZSA9IG9wdGlvbnMuZWFzZSxcbiAgICBmcm9tID0gZWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICB2YXIgZHVyYXRpb24gPSBNYXRoLmFicyh0byAtIGZyb20pIC8gdmVsb2NpdHk7XG5cbiAgICB0aGlzLnNjcm9sbFRvKHtlbGVtZW50OiBlbGVtZW50LCBkdXJhdGlvbjogZHVyYXRpb24sIHRvOiB0bywgZWFzZTogZWFzZX0sIGNhbGxiYWNrKTtcblxufTtcblxuU2Nyb2xsTWFuYWdlci5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgdG8gPSBvcHRpb25zLnRvLFxuICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICBlYXNlID0gb3B0aW9ucy5lYXNlO1xuXG4gICAgdmFyIHN0YXJ0ID0gZWxlbWVudC5zY3JvbGxUb3AsXG4gICAgY2hhbmdlID0gdG8gLSBzdGFydDtcbiAgICB2YXIgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxuICAgIGlmICghZWFzZSkge1xuICAgICAgY29uc29sZS53YXJuKCdbc2Nyb2xsLW1hbmFnZXJdOiBObyBlYXNlIGRlZmluZWQsIGFuaW1hdGlvbiBpcyBnb2luZyB0byBydW4gd2l0aCBsaW5lYXIgZWFzZScpO1xuICAgIH1cblxuICAgIHZhciBlYXNlRnVuY3Rpb24gPSBzZWxlY3RFYXNlKGVhc2UpO1xuICAgIHZhciBlbGFwc2VkVGltZSA9IDA7XG5cbiAgICB2YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICBlbGFwc2VkVGltZSA9IChjdXJyZW50VGltZS5nZXRUaW1lKCkgLSBzdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDA7XG4gICAgICB2YXIgcG9zaXRpb24gPSBlYXNlRnVuY3Rpb24oZWxhcHNlZFRpbWUsIHN0YXJ0LCBjaGFuZ2UsIGR1cmF0aW9uKTtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gcG9zaXRpb247IFxuXG4gICAgICBpZiAoZWxhcHNlZFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICBpZCA9IHJhZihhbmltYXRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgaWQgPSByYWYoYW5pbWF0ZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbE1hbmFnZXI7IiwidmFyIG5vdyA9IHJlcXVpcmUoJ3BlcmZvcm1hbmNlLW5vdycpXG4gICwgZ2xvYmFsID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyB7fSA6IHdpbmRvd1xuICAsIHZlbmRvcnMgPSBbJ21veicsICd3ZWJraXQnXVxuICAsIHN1ZmZpeCA9ICdBbmltYXRpb25GcmFtZSdcbiAgLCByYWYgPSBnbG9iYWxbJ3JlcXVlc3QnICsgc3VmZml4XVxuICAsIGNhZiA9IGdsb2JhbFsnY2FuY2VsJyArIHN1ZmZpeF0gfHwgZ2xvYmFsWydjYW5jZWxSZXF1ZXN0JyArIHN1ZmZpeF1cblxuZm9yKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICFyYWY7IGkrKykge1xuICByYWYgPSBnbG9iYWxbdmVuZG9yc1tpXSArICdSZXF1ZXN0JyArIHN1ZmZpeF1cbiAgY2FmID0gZ2xvYmFsW3ZlbmRvcnNbaV0gKyAnQ2FuY2VsJyArIHN1ZmZpeF1cbiAgICAgIHx8IGdsb2JhbFt2ZW5kb3JzW2ldICsgJ0NhbmNlbFJlcXVlc3QnICsgc3VmZml4XVxufVxuXG4vLyBTb21lIHZlcnNpb25zIG9mIEZGIGhhdmUgckFGIGJ1dCBub3QgY0FGXG5pZighcmFmIHx8ICFjYWYpIHtcbiAgdmFyIGxhc3QgPSAwXG4gICAgLCBpZCA9IDBcbiAgICAsIHF1ZXVlID0gW11cbiAgICAsIGZyYW1lRHVyYXRpb24gPSAxMDAwIC8gNjBcblxuICByYWYgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgIGlmKHF1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdmFyIF9ub3cgPSBub3coKVxuICAgICAgICAsIG5leHQgPSBNYXRoLm1heCgwLCBmcmFtZUR1cmF0aW9uIC0gKF9ub3cgLSBsYXN0KSlcbiAgICAgIGxhc3QgPSBuZXh0ICsgX25vd1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNwID0gcXVldWUuc2xpY2UoMClcbiAgICAgICAgLy8gQ2xlYXIgcXVldWUgaGVyZSB0byBwcmV2ZW50XG4gICAgICAgIC8vIGNhbGxiYWNrcyBmcm9tIGFwcGVuZGluZyBsaXN0ZW5lcnNcbiAgICAgICAgLy8gdG8gdGhlIGN1cnJlbnQgZnJhbWUncyBxdWV1ZVxuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmKCFjcFtpXS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRyeXtcbiAgICAgICAgICAgICAgY3BbaV0uY2FsbGJhY2sobGFzdClcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyB0aHJvdyBlIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBNYXRoLnJvdW5kKG5leHQpKVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKHtcbiAgICAgIGhhbmRsZTogKytpZCxcbiAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgIGNhbmNlbGxlZDogZmFsc2VcbiAgICB9KVxuICAgIHJldHVybiBpZFxuICB9XG5cbiAgY2FmID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZihxdWV1ZVtpXS5oYW5kbGUgPT09IGhhbmRsZSkge1xuICAgICAgICBxdWV1ZVtpXS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4pIHtcbiAgLy8gV3JhcCBpbiBhIG5ldyBmdW5jdGlvbiB0byBwcmV2ZW50XG4gIC8vIGBjYW5jZWxgIHBvdGVudGlhbGx5IGJlaW5nIGFzc2lnbmVkXG4gIC8vIHRvIHRoZSBuYXRpdmUgckFGIGZ1bmN0aW9uXG4gIHJldHVybiByYWYuY2FsbChnbG9iYWwsIGZuKVxufVxubW9kdWxlLmV4cG9ydHMuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gIGNhZi5hcHBseShnbG9iYWwsIGFyZ3VtZW50cylcbn1cbiIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS43LjFcbihmdW5jdGlvbigpIHtcbiAgdmFyIGdldE5hbm9TZWNvbmRzLCBocnRpbWUsIGxvYWRUaW1lO1xuXG4gIGlmICgodHlwZW9mIHBlcmZvcm1hbmNlICE9PSBcInVuZGVmaW5lZFwiICYmIHBlcmZvcm1hbmNlICE9PSBudWxsKSAmJiBwZXJmb3JtYW5jZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiBwcm9jZXNzICE9PSBcInVuZGVmaW5lZFwiICYmIHByb2Nlc3MgIT09IG51bGwpICYmIHByb2Nlc3MuaHJ0aW1lKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAoZ2V0TmFub1NlY29uZHMoKSAtIGxvYWRUaW1lKSAvIDFlNjtcbiAgICB9O1xuICAgIGhydGltZSA9IHByb2Nlc3MuaHJ0aW1lO1xuICAgIGdldE5hbm9TZWNvbmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaHI7XG4gICAgICBociA9IGhydGltZSgpO1xuICAgICAgcmV0dXJuIGhyWzBdICogMWU5ICsgaHJbMV07XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IGdldE5hbm9TZWNvbmRzKCk7XG4gIH0gZWxzZSBpZiAoRGF0ZS5ub3cpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIERhdGUubm93KCkgLSBsb2FkVGltZTtcbiAgICB9O1xuICAgIGxvYWRUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbG9hZFRpbWU7XG4gICAgfTtcbiAgICBsb2FkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICB9XG5cbn0pLmNhbGwodGhpcyk7XG4iXX0=
