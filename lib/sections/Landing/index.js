'use strict';
var fs = require( 'fs' );

var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var model = require( '../../model' );
var Example = require('../../ui/Example');
var LandingView = require('../../ui/LandingView');
var TweenMax = require('gsap');
function Landing() {}


Landing.prototype = {

	init: function( req, done ) {
		
			
			this.dom = domify(hbs.compile(fs.readFileSync( __dirname + '/template.hbs', 'utf8' ))(model[ req.route ]));
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
