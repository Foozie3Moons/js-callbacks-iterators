var numbers = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication


// example of how a reduce the reduce function might work if it was just adding
var add = function(a,b) {
  return a + b;
}

var diff = function(a,b) {
  return a - b;
}

var product = function(a,b) {
  return a * b;
}

Array.prototype.reduce2 = function(func) {
  var p = 0;
  while (this.length > 1) {
    console.log(this)
    p = func(this[0], this[1]);
    this.splice(0,2);
    this.unshift(p);
  }
  return p;
}

console.log(numbers.reduce2(product));

// how we probably want this to look:

console.log(numbers.reduce(product));
