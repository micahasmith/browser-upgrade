// Generated by CoffeeScript 1.6.3
(function() {
  var wd;

  wd = require('wd');

  module.exports = function(b) {
    b.elByX = function(x, cb) {
      return b.elementByXPathOrNull(x, cb);
    };
    b.elByCl = function(x, cb) {
      return b.elementByClassName(x, cb);
    };
    b.elById = function(x, cb) {
      return b.elementById(x, cb);
    };
    b.waitByCl = function(x, amt, cb) {
      return b.waitForElementByClassName(x, amt, cb);
    };
    b.waitById = function(x, amt, cb) {
      return b.waitForElementById(x, amt, cb);
    };
    b.waitByX = function(x, amt, cb) {
      return b.waitForElementByXPath(x, amt, cb);
    };
    b.clickByX = function(x, cb) {
      return b.elByX(x, function(e, el) {
        if (e) {
          return cb(e);
        }
        return b.clickElement(el, cb);
      });
    };
    b.clickByCl = function(x, cb) {
      return b.elByCl(x, function(e, el) {
        if (e) {
          return cb(e);
        }
        return b.clickElement(el, cb);
      });
    };
    b.clickById = function(x, cb) {
      return b.elById(x, function(e, el) {
        if (e) {
          return cb(e);
        }
        return b.clickElement(el, cb);
      });
    };
    b.keyById = function(id, val, cb) {
      if (!val) {
        return cb();
      }
      return b.elementById(id, function(e, el) {
        return el.sendKeys(val, cb);
      });
    };
    b.keyByX = function(id, val, cb) {
      if (!val) {
        return cb();
      }
      return b.elementByXPathOrNull(id, function(e, el) {
        return el.sendKeys(val, cb);
      });
    };
    return b;
  };

}).call(this);

/*
//@ sourceMappingURL=browserupgrade.map
*/
