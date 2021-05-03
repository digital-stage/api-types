
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./api-types.cjs.production.min.js')
} else {
  module.exports = require('./api-types.cjs.development.js')
}
