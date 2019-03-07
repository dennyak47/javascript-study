//es6 string and exg

let string = 'asdfasdfasdfasdfasdfasdfasdf';
let reg = /a/y;
reg.exec(string);
console.log(reg.lastIndex);
reg.exec(string);
console.log(reg.lastIndex);
reg.exec(string);
console.log(reg.lastIndex);
reg.exec(string);
console.log(reg.lastIndex);

// y  sticky

console.log(reg.flags)


let strangeString = String.fromCodePoint(134071)
console.log(strangeString);

console.log(strangeString.length);
console.log(/^.$/.test(strangeString))
console.log(/^.$/u.test(strangeString))

// u   unicode

let a = 'a 𠮷 b';
for (let i = 0; i < a.length; a++) {
  console.log(a[i]);
}
// for (let i of a) {
//   console.log(i);
// }