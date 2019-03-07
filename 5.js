console.log('aa'.replace(/\w/, function (c) {return c.toUpperCase()}))

console.log(/(?:abc)(\w)/.exec('lkjhkjabcddd').length);
console.log(/(abc)(\w)/.exec('lkjhkjabcddd').length);
// ?: non-capture group
debugger;