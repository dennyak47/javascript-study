// es6
function Person(name) {
  // in es5 we check if it is called by 'new'
  if (this instanceof Person) {
    if (Person === new.target) {
      console.log('called by new')
    } else {
      console.log('called by call or apply')
    }
    this.name = name;
  } else {
    console.log('not constructor');
  }
}

let person = new Person('Danny');
console.log(person instanceof Person)
let notAPerson = Person.call(person, 'Danny')
console.log(notAPerson instanceof Person)
let alsoNotAPerson = Person.apply(person, ['Danny'])
console.log(alsoNotAPerson instanceof Person)
