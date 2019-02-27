console.log((-0 == +0), (-0 === +0), Object.is(-0, +0)) // true true false
console.log((NaN == NaN), (NaN === NaN), Object.is(NaN, NaN)) // false false true


let prefix = 'Mr.';
let getName = (suffix) => {
  return {
    [prefix + suffix]: 'wholeName'
  }
};
console.log(getName('danny'));

let a = {
  b: 1, b: 2, b: 3, b: 4

}
console.log(a);

let cat = {
  greeting() {
    return 'Miow';
  }
};
let dog = {
  greeting() {
    return 'dog';
  }
}
let me = {
  greeting() {
    return Object.getPrototypeOf(this).greeting() + ' hi';
  }
};
let him = {
  greeting() {
    return super.greeting.call(this) + ' hello';
  }
}
Object.setPrototypeOf(me, cat);
console.log(me.greeting());
Object.setPrototypeOf(me, dog);
console.log(me.greeting());
Object.setPrototypeOf(him, cat);
console.log(him.greeting());
Object.setPrototypeOf(him, dog);
console.log(him.greeting());
debugger