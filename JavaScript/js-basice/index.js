// Function Declaration
function walk() {
  console.log("walk");
}
walk();

// Anonymous Function Expression
let a = function () {
  console.log("run");
};

// Named Function Expression
let b = function c() {
  console.log("run");
};

a();
let d = a;
d();
