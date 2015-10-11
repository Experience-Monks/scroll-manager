'use strict';
module.exports = {
  '/': { section: [require('../sections/Landing')], useURL: true, duplicate: true},
  '/:bid': { section: [require('../sections/Landing')], useURL: true, duplicate: true}
};
