function greet() {
  console.log("Hello, " + this.name);
}

const person = { name: "John" };

greet.call(person); // 输出 "Hello, John"

const args = [];
args.push(person);
greet.apply(...args); // 输出 "Hello, John"
