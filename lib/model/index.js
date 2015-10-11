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
          'summary': 'Scroll with a ExpoOut ease'
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
          'summary': 'Scroll to the bottom of the element'
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
          'summary': 'Scroll to the top of the element'
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
          'summary': 'Scroll with the same velocity without taking into account the duration of the animation'
        },
        'button': {
          'title': 'Go!',
          'options': {
            'viewName': 'forthExample',
            'type': 'scrollEqual',
            'velocity': 400,
            'element': document.body, 
            'ease': 'easeInQuad'
          }
        }
      }
    },
    'bottomExample':{
      'title':'bottomExample',
      'model':{
        'text': {
          'title':'Whatta scroll!',
          'summary': 'We are on the end of this large page :)'
        },
        'button': {
          'title': 'Continue!',
          'options': {
            'viewName': 'fifthExample',
            'type': 'scrollTo',
            'duration': 1.2,
            'element': document.body, 
            'ease': 'easeInQuad'
          }
        }
      }
    }
  }
};
