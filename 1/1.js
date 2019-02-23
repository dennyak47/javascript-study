// safe way to detect Array
function isArray(thing) {
  return Object.prototype.toString.call(thing)==='[object Array]'
}

console.log(isArray([]));

// typeof []
// 'object'

// [] instanceof Array
// different iframes have different constructor

// Array.isArray([])
// IE9+、 Firefox 4+、Safari 5+、Opera 10.5+  Chrome

function isFunction(thing) {
  return Object.prototype.toString.call(thing)==='[object Function]'
}

console.log(isFunction(function(){}))

function isRegExp(thing) {
  return Object.prototype.toString.call(thing)==='[object RegExp]'
}

console.log(isRegExp(/aa/));
console.log(isRegExp(new RegExp('aa')));