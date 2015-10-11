'use strict';
var fs = require( 'fs' );

var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var model = require( '../../model' );


function Preloader(onComplete) {
  this.preloaded = onComplete;
}


Preloader.prototype = {

	init: function( req, done ) {
		
		
			this.dom = domify(hbs.compile(fs.readFileSync( __dirname + '/template.hbs', 'utf8' ))());
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
