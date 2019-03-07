// es6 arrow function this
this.name = 'global';
(() => {
  console.log(this.name);
})()

let a = (function (params) {
  this.name = 'name';
  (function name1() {
    this.name = 'name1';
    (() => {
      console.log(this.name);
    })()
  })()
})()

{
  this.name = 'name2';
  (() => {console.log(this.name)})()
}
// debugger