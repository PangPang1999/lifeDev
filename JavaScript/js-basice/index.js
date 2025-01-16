function greet() {
  console.log("Hello World");
}
greet(); // 输出: Hello World

function greetWithName(name) {
  console.log("Hello " + name);
}
greetWithName("John"); // 输出: Hello John

function greetWithFullName(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greetWithFullName("John", "Smith"); // 输出: Hello John Smith
greetWithFullName("John"); // 输出: Hello John undefined
