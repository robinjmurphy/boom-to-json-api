var assert = require('assert');
var Boom = require('boom');
var convert = require('..');

describe('boom-to-json-api', function () {
  it('converts a Boom error object into a JSON API compliant error response', function () {
    var err = Boom.notFound('Sorry, nothing to see here!');
    var body = convert(err);

    assert.deepEqual(body, {
      errors: [
        {
          status: '404',
          title: 'Not Found',
          detail: 'Sorry, nothing to see here!'
        }
      ]
    });
  });

  it('wraps non-Boom errors', function () {
    var err = new Error('Plain old error');
    var body = convert(err);

    assert.deepEqual(body, {
      errors: [
        {
          status: '500',
          title: 'Internal Server Error',
          detail: 'An internal server error occurred'
        }
      ]
    });
  });
});
