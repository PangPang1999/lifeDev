const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const peopleById = people.reduce((acc, person) => {
  acc[person.id] = person.name;
  return acc;
}, {});
console.log(peopleById);
// 输出: { 1: "Alice", 2: "Bob", 3: "Charlie" }
