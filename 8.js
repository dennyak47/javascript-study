// es6 string and exg

let name = 'Danny',
  message = `hi ${`how are you ${name}`}`;
console.log(message);

// 多层嵌套 

console.log(`hi Danny\nNice to meet you`);
console.log(String.raw`hi Danny\nNice to meet you`);

// string.raw

function tag(literals, ...substitutions) {
  console.log(literals);
  console.log(literals.raw)
  console.log(Object.prototype.toString(substitutions))
  console.log(substitutions[0]);
  console.log(substitutions[1]);
}
tag`hi ${message} how is ${name}`
debugger