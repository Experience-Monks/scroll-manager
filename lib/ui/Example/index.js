'use strict';
var fs = require( 'fs' );

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
    
    
      this.dom = domify(hbs.compile(fs.readFileSync( __dirname + '/template.hbs', 'utf8' ))(this.model));
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
