'use strict';
var fs = require( 'fs' );

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
    
      this.container = domify(hbs.compile(fs.readFileSync( __dirname + '/template.hbs', 'utf8' ))(this.model));
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
