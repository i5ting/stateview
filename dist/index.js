
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./stateview.cjs.production.min.js')
} else {
  module.exports = require('./stateview.cjs.development.js')
}
