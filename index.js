'use strict'

/**
 * TODO
 *
 * @name silvi
 * @type function
 *
 * @return Promise
 */
module.exports = async () => {
  // TODO
}

if (!module.parent) {
  module.exports()
    .then((result) => {
      console.log(JSON.stringify(result, null, 2))
    })
}
