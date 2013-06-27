var timeout = require('..');

// this will call immediately:
setTimeout(function () {
  console.log('oops, that should have been after 30d');
}, 30 * 24 * 60 * 60 * 1000);

// this will work:
timeout(function () {
  console.log('after 30d');
}, 30 * 24 * 60 * 60 * 1000);
