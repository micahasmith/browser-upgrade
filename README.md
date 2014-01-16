browserupgrade.js
=====

Upgrade the standard web driver browser w/ functions that make for quicker dev.

Great for if you're testing w/ sauce.

## Init

`npm install browser-upgrade`

````js
var webdriver = require('wd'),
    upgradeFn = require('browser-upgrade');

// wrapping the function that gets a webdriver browser
// so that we can upgrade its functionality
var browser = upgradeFn(webdriver.remote());

````


## API

### `elByX(xpath, cb)`
Get an element via XPath

### `elByCl(class, cb)`
Get an element via class name

### `elById(id, cb`)
Get an element via id

### `waitByCl(class, amt, cb)`
Wait for `amt` amount for an element with class `class` to appear

### `waitById(id, amt, cb)`
Wait for `amt` amount for an element with id `id` to appear

### `waitByX(xpath, amt, cb)`
Wait for `amt` amount for an element that matches `xpath` to appear

### `clickByX(xpath, amt, cb)`
Click first element that matches `xpath`

### `clickByCl(class, amt, cb)`
Click first element that matches `class`

### `clickById(xpath, amt, cb)`
Click an element that matches `id`

### `keyById(id,val,cb)`
Send the keys `val` to an input/element with id `id`

### `keyByX(id,val,cb)`
Send the keys `val` to the first input/element matching xpath `xpath`
