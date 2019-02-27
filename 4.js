/* let dog = {
  greeting() {
    return 'dog';
  }
}
let me = {
  greeting() {
    return Object.getPrototypeOf(this).greeting.call(this) + ' hi';
  }
};
Object.setPrototypeOf(me,dog);
let it = Object.create(me);
console.log(it.greeting()); */
// Maximum call stack size exceeded


let dog = {
  greeting() {
    return 'dog';
  }
}
let me = {
  greeting() {
    console.log(Object.getPrototypeOf(this) === dog)
    console.log(Object.getPrototypeOf(this) === me)
    return super.greeting.call(this) + ' hi';
  }
};
Object.setPrototypeOf(me, dog);
let it = Object.create(me);
console.log(it.greeting());
debugger