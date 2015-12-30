var Boom = require('boom');

module.exports = function convert(err) {
  var payload;

  if (!err.isBoom) {
    err = Boom.wrap(err);
  }

  payload = err.output.payload;

  return {
    errors: [
      {
        status: payload.statusCode.toString(),
        title: payload.error,
        detail: payload.message
      }
    ]
  };
};
