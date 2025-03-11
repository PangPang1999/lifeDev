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

  this.render = function () {
    return `
<select>${this.items
      .map(
        (item) => `
  <option>${item}</option>`
      )
      .join("")}
</select>`;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
// 调整 constructor
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src ="${this.src}" />`;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const selectElement = new HtmlSelectElement(["Option1", "Option2"]);
console.log(selectElement.render());
// 输出
// <select>
//   <option>Option1</option>
//   <option>Option2</option>
// </select>

const imageElement = new HtmlImageElement();
console.log(imageElement.render());
// 输出：<img src ="undefined" />
imageElement.src = "http://";
console.log(imageElement.render());
// 输出：<img src ="http://" />
