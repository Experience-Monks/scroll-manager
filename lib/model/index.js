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
          'start': 'scroll-manager its a module that allows you to scroll inside elements with different eases. Now its time to say welcome to scroll-manager demo or... just',
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
          'ease': 'easeOutExpo',
          'callback': false
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
            'ease': 'easeLinear',
            'callback': false
          }
        }
      }
    },
    'secondExample': {
      'title':'secondExample',
      'model':{
        'text': {
          'title':'scrollTo() + callback',
          'summary': 'Scroll with a ExpoOut ease and execute callback()',
          'sourceCode': 'var offset = document.getElementById(\'thirdExample\');\n\nvar options = {\n  duration: 1.5,\n  to: offset.\n  element: document.body,\n  ease: \'easeOutExpo\'\n};\n\nthis.scroller.scrollTo(options, callback);'
        },
        'button': {
          'title': 'Go!',
          'options': {
            'viewName': 'thirdExample',
            'type': 'scrollTo',
            'duration': 1.5,
            'element': document.body, 
            'ease': 'easeOutExpo',
            'callback': true
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
            'ease': 'easeInQuad',
            'callback': false
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
            'ease': 'easeOutQuad',
            'callback': false
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
          'sourceCode': 'var offset = document.getElementById(\'forthExample\');\n\nvar options = {\n  velocity: 600,\n  to: offset.\n  element: document.body,\n  ease: \'easeLinear\'\n};\n\nthis.scroller.scrollEqual(options);'
        },
        'button': {
          'title': 'Go!',
          'options': {
            'viewName': 'forthExample',
            'type': 'scrollEqual',
            'velocity': 600,
            'element': document.body, 
            'ease': 'easeLinear',
            'callback': false
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
            'ease': 'easeOutExpo',
            'callback': false
          }
        }
      }
    }
  }
};
