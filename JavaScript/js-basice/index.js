function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// 手动设置 HtmlSelectElement 的原型为 HtmlElement 的实例
// HtmlSelectElement.prototype = Object.create(
//   HtmlElement.prototype
// );
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

// Step3: 为 HtmlSelectElement 添加特有的方法
HtmlSelectElement.prototype.addItem = function (item) {
  this.items.push(item);
};

HtmlSelectElement.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);
  if (index > -1) {
    this.items.splice(index, 1);
  }
};

// 测试代码
const selectElement = new HtmlSelectElement([
  "Option1",
  "Option2",
]);
selectElement.addItem("Option3");
console.log(selectElement.items); // 输出: ["Option1", "Option2", "Option3"]

// 继承自 HtmlElement 的方法
selectElement.click(); // 输出: Element clicked
selectElement.focus(); // 输出: Element focused
