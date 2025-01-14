const person = {
  firstName: "Mosh",
  lastName: "Hamedani",

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(value) {
    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("Invalid full name");
    }
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

// 使用 Getter
console.log(person.fullName); // 输出：Mosh Hamedani

// 使用 Setter
person.fullName = "John Smith";
console.log(person);
// 输出：{ firstName: "John", lastName: "Smith", fullName: [Getter/Setter] }
