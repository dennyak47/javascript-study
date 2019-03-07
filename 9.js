// es6 function

// default value
function check(a, b = a, ...c) {
  console.log(a, b, c);
}
check(1, undefined, 2, 3, 4, 5, 6);


// constructor Function
let check2 = new Function('a', 'b=a', '...c', 'console.log(a,b,c)');
check2(1, undefined, 2, 3, 4, 5, 6);

// function.name
let funcBox = {
  get getName() {

  },
  set getName(a) {
    return a
  },
  hi() {

  }
}
console.log(funcBox.hi.name);
console.log(funcBox.hi.bind().name);

console.log(funcBox.getName);
// undefined 和书上不同 
console.log(new Function().name);

