const person = {
  firstName: "Mosh",
  lastName: "Hamedani",

  set fullName(value) {
    // 检查输入是否为字符串
    if (typeof value !== "string") {
      throw new Error("Value is not a string");
    }

    // 分割输入并验证是否有两个部分
    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error(
        "Invalid full name. Enter a first and last name."
      );
    }

    // 设置 firstName 和 lastName
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  // person.fullName = null;  // 抛出异常：Value is not a string
  person.fullName = ""; // 抛出异常：Invalid full name
} catch (e) {
  alert(e.message); // 在界面上显示错误信息
}

console.log(person); // 输出对象，检查是否修改成功
