
# foreverest

JavaScript timeouts in browsers and node can't be longer than **24 days**.
With `foreverest` they can!

## Usage

```js
var timeout = require('foreverest');

// this will call immediately:
setTimeout(function () {
  console.log('oops, that should have been after 30d, but it was 1ms!');
}, 30 * 24 * 60 * 60 * 1000);

// this will work:
timeout(function () {
  console.log('after 30d');
}, 30 * 24 * 60 * 60 * 1000);
```

## API

### var to = timeout(fn, dur)

Call `fn` after `dur` milliseconds.

### to.clear()

Clear the timeout.

## Inspiration

A song called [foreverest](https://soundcloud.com/dtlot/foreverest) &lt;3.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install foreverest
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
