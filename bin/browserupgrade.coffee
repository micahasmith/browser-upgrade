wd = require 'wd'

module.exports = (b) ->
  b.elByX = (x,cb) -> b.elementByXPathOrNull x, cb
  b.elByCl = (x,cb) -> b.elementByClassName  x, cb
  b.elById = (x,cb) -> b.elementById  x, cb


  b.waitByCl = (x,amt,cb) -> b.waitForElementByClassName  x, amt, cb
  b.waitById = (x,amt,cb) -> b.waitForElementById  x, amt, cb
  b.waitByX = (x,amt,cb) -> b.waitForElementByXPath  x, amt, cb


  #
  # click utilities
  #

  b.clickByX = (x,cb) ->
    b.elByX x, (e,el)->
      if e then return cb(e)
      b.clickElement el, cb

  b.clickByCl = (x,cb) ->
    b.elByCl x, (e,el)->
      if e then return cb(e)
      b.clickElement el, cb

  b.clickById = (x,cb) ->
    b.elById x, (e,el)->
      if e then return cb(e)
      b.clickElement el, cb


  #
  # form utilities
  #
  b.keyById = (id,val, cb)->
    if !val then return cb()
    b.elementById id, (e,el)->
      el.sendKeys val, cb

  b.keyByX = (id,val,cb)->
    if !val then return cb()
    b.elementByXPathOrNull id, (e,el)->
      el.sendKeys val, cb


  return b
