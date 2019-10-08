//  Notes: https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/
/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Binding - Directs to the window object (viewport)
 * 2. Implicit Binding - references what is to the left of the dot when a function is invoked
 * 3. New Binding - using the 'new' keyword, which under the hood creates a new object that then becomes 'this'
 * 4. Explicit Binding - Using a function method (Call, apply, etc) -  explicitly, specifying what the this keyword is referencing
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Principle 2

// code example for Implicit Binding
const Implicit = {
  greeting: "Hello",
  speak: function() {
    // let name = "Tyler";
    let name = prompt("Enter name here");
    return `${this.greeting}, ${name.toUpperCase()}`;
  }
};

console.log(Implicit.speak());
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Principle 3

// code example for New Binding
function User(name, age) {
  this.name = name;
  this.age = age;
}

const myself = new User("Tyler", 27);
console.log(`${myself.name} says "Javascript" is challenging!`);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Principle 4

// code example for Explicit Binding
function me(breed, dog1, dog2, age1, age2) {
  return `Hello, my name is ${this.name} and I own two dogs, they are both ${breed}. The oldest is ${dog1}, and the youngest is ${dog2}. ${dog1} is ${age1}, and ${dog2} is ${age2}.`;
}

const personalData = {
  name: "Tyler"
};

let dogs = [
  {
    breed: "French Bulldogs"
  },
  {
    name: "Joker",
    age: "2 years old"
  },
  {
    name: "Harley",
    age: "6 months old"
  }
];

console.log(
  me.call(
    personalData,
    dogs[0].breed,
    dogs[1].name,
    dogs[2].name,
    dogs[1].age,
    dogs[2].age
  )
);
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
