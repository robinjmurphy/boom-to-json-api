# boom-to-json-api

[![Build Status](https://travis-ci.org/robinjmurphy/boom-to-json-api.svg)](https://travis-ci.org/robinjmurphy/boom-to-json-api)

> Formats a [Boom](https://github.com/hapijs/boom) error according to the [JSON API spec](http://jsonapi.org/format/#errors)

## Installation

```
npm install --save boom-to-json-api
```

## Usage

```js
const Boom = require('boom');
const convert = require('boom-to-json-api');

const err = Boom.notFound('Sorry, nothing to see here!');
const body = convert(err);

console.log(body);
// {
//   errors: [
//     {
//       status: '404',
//       title: 'Not Found',
//       detail: 'Sorry, nothing to see here!'
//     }
//   ]
// }
```
