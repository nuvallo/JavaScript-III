/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global Binding - Directs to the window object (viewport)
 * 2. Implicit Binding -
 * 3. New Binding
 * 4. Explicit Binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

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

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
