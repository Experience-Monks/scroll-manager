'use strict';
var fs = require( 'fs' );

var hbs = require( 'handlebars' );
var domify = require( 'domify' );
var ScrollButton = require('../ScrollButton');

function LandingView(model, viewName) {
  this.model = model;
  this.viewName = viewName;
  this.init();
}


LandingView.prototype = {

  init: function() {
    
    
      this.dom = domify(hbs.compile(fs.readFileSync( __dirname + '/template.hbs', 'utf8' ))(this.model));
      document.body.appendChild(this.dom);
      var button = new ScrollButton(this.model.button);
      this.dom.appendChild(button.container);
  },

  resize: function(w,h) {

  },

  animateIn: function() {

  },

  animateOut: function() {

  },

  destroy: function() {

    this.dom.parentNode.removeChild(this.dom);
  }
};

module.exports = LandingView;
