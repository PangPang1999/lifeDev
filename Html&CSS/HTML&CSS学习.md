> 项目实战见：https://github.com/PangPang1999/moshify

# 基础概念

## web 的工作原理

> 大致原理介绍

1. 当在浏览器（客户端）中输入 url 即网址，如http://codewithmosh.com，并按下回车后，客户端向服务器发送**http请求**资源。

2. http 请求包含请求方法、目标资源（如`index.html`）、服务器域名（如`codewithmosh.com`）等内容。

3. 服务器收到请求后，给予客户端**http 响应**。

4. http 响应包含协议版本、状态码（如 200 表示成功）、时间、内容类型（如`text/html`）以及 HTML 文档等内容。

5. 客户端读取 HTML 文档并构建 DOM(DocumentObject Model)，HTML 文档中可能包含其他资源（如图片、字体等）的引用，浏览器会发送独立的 HTTP 请求以加载这些资源。

6. 一旦 DOM 准备好，浏览器渲染页面并展示。

7. 大体上分为：请求，收到响应、资源加载、构建 DOM 模型、页面渲染

   - URL：统一资源定位符，即 Uniform Resource Locator 的缩写


   - Resource：互联网资源（如网页、图片、视频文件、字体等）


   - Http:超文本传输协议，即 Hypertext Transfer Protocol 的缩写，是客户端与服务器之间交流的语言。


   - Https：加密的传输协议，即 http+Encryption，保证数据传输安全


   - 请求：客户端向服务器发送的消息，描述所需资源。


   - 响应：服务器返回的消息，包含所需资源及状态信息。


   - DOM：即 Document Object Model，一个展示在 HTML 文档中的元素(Element)的文档(Document)


## HTML 入门

> 配合 VS code，创建 HTML，其内创建 index.html、images 文件夹

代码：

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <img src="images/ChineseGirl1.png" alt="" />
    <p>@pangpang</p>
    <p>Hi! Nice to meet you here.</p>
  </body>
</html>
```

- HTML 是一种不区分大小写的语言，通常使用小写字母，但是`<!DOCTYPE html>`中的 DOCTYPE 是例外。此为 HTML 没有严格的格式，将所有代码放在一行也能正常工作。
- `<html>` 标签来定义网页的结构，里面可以添加两个主要部分`<head>`、`<body>`
- `<head>`：用于提供网页信息（例如标题），这里设置了 My First Page
- `<body>`：用于定义网页的主要内容，这里添加了图片`<img>`和段落`<p>`
- `<img>`：使用 `src` 属性指定图片路径，例如 `images/xx.png`，可选的 `alt` 属性用于提供图片无法加载时的替代文本。这里的 images 文件夹和 index.html 在同一层级
- `<p>`：段落标签
- HTML 标签通常包括 开始标签 和 结束标签，但是也有例外，如`<img>`

- 使用快捷键或者点击，可以启动 LiveServer，保存后，浏览器会自动刷新
- 浏览器中可以看到页面标签为代码中 title 中内容
- 浏览器链接框中的`http://127.0.0.1:5500/index.html`，`127.0.0.1`代表本地计算机，后面的数字是服务器监听的端口号
- 因为还没有添加 CSS，页面看起来并不美观

## CSS 入门

代码：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
    <style>
      img {
        width: 100px;
        border-radius: 50px;
        float: left;
        margin-right: 20px;
      }
      p.username {
        font-weight: bold;
        font-size: 20px;
        color: #333;
      }
    </style>
  </head>
  <body>
    <img src="images/ChineseGirl1.png" alt="" />
    <p class="username">@pangpang</p>
    <p>Hi! Nice to meet you here.</p>
  </body>
</html>
```

- `<style>`：在其内写 css 代码
- `img{}`：关联`<img>`，可以设置相关的样式，如宽度、圆角、浮动、边距等
- `p.username{}`：给带有`username`类名的`<p>`设置格式，如字体粗细、大小、颜色等
- `<p class="username">@pangpang</p>`：给`<p>`加上类名
- `.username{}`：若为该情况，则给所有带有`username`类名的 HTML 标签添加样式

# HTML 基础

## HEAD

对于空白文件，第一个`!`，可以自动补全一个 HTML 基础模版

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

在这个模板的顶部是 DOCTYPE 声明。接下来是 HTML 元素，它包含了一个语言属性（`lang`），在 head 区域中，我们有几个 meta 元素，它们用来提供有关网页的信息。第一个 meta 元素用于定义字符集。

> #### 什么是字符集？
>
> 计算机不理解像 ABC 这样的字符，它们只理解二进制格式的数字（0 和 1）。字符集将字符映射为数值。最早的字符集是 **ASCII**（美国信息交换标准代码），它只能表示英语字符，因此非常有限。后来，为了表示更多的国际字符，不同的字符集被开发出来。我们现在通常使用的是 **UTF-8**，它几乎可以表示世界上的所有字符。

接下来是一个用于配置视口的 meta 元素。视口是网页的可见区域。在桌面设备上，我们可以通过调整浏览器大小来改变视口的尺寸，而在移动设备或平板电脑上，视口通常较小，通过这个 meta 元素，我们可以定义视口的初始宽度和缩放比例。这是为了确保网页在所有设备（手机、平板电脑和台式机）上的显示效果良好。

除了这两个基本的 meta 元素，还有很多的 meta 元素可以使用，如 description

## TEXT

> 通过用 p 和 h 展示文字和层级

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .test {
        color: red;
        font-weight: bold;
        font-style: normal;
      }
    </style>
  </head>
  <body>
    <p>How’s everything going with you <em class="test">today</em>?</p>
    <p>How’s everything going with you <em>today</em>?</p>
    <p>How’s everything going with you <i>today</i>?</p>
    <p>How’s everything going with you <strong>today</strong>?</p>
    <p>How’s everything going with you <b>today</b>?</p>
    <h1>Heading</h1>
    <h2>Heading</h2>
    <h3>Heading</h3>
    <h4>Heading</h4>
    <h5>Heading</h5>
    <h6>Heading</h6>
  </body>
</html>
```

- `<p>`段落中可以加入其他标签，并配合 style 设置字体样式
- `<em>`：默认斜体，配合 style 设置字体样式
- `<i>`：即 italic，斜体但是不建议使用，样式需要在 css 中调整
- `<strong>`：默认加粗，配合 style 设置字体样式，
- `<b>`：即 bold，粗体但是不建议使用，样式需要在 css 中调整
- `<h1>`：h1-6 表层级，不能当字体使用，一个页面最多存在一个 h1

## HTML 字符实体

部分特殊的文本或者需求，需要借助 HTML 字符实体才能正常输出

若想要输出

```txt
How’s everything going with you <today>
```

需要使用`&lt;`和`&gt;`表示`<`和`>`，否则`<today></today>`不会输出内容

```html
<p>How’s everything going with you &lt;today&gt;?</p>
```

当输出段落时想要一个短语不会因为换行而分开，需要使用`&nbsp;`

```html
<p>
  In China, programmers who can communicate fluently in spoken English have
  a&nbsp;significant&nbsp;advantage.
</p>
```

## 超链接

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <a href="company/about.html">about me</a>
    <a href="../HTML/company/about.html">about me</a>
    <a href="/company/about.html">about me</a>
    <a href="images/ChineseGirl1.png">Picture</a>
    <a href="images/ChineseGirl1.png" download>PictureDownload</a>
    <a href="https://www.baidu.com/ ">BaiDu</a>
    <a href="https://www.baidu.com/" target="_blank">BaiDu(New Page)</a>
    <a href="mailto:ppp_melody@163.com">Email Me</a>
    <a href="#speaking-section">JUMP TO SPEAKING</a>

    <h2>Writing</h2>
    lorem200
    <h2 id="speaking-section">Speaking</h2>
    lorem200
    <br />
    <a href="#">JUMP TO TOP</a>"
  </body>
</html>
```

- `<a>`：a 为 anchor 的简称
- 引用本地文件：
  - `/images/xx.png`代表根目录开始引用
  - `/images/xx.png/`代表从同级目录开始引用
  - `../images/xx.png`代表从上一级开始引用，可以使用`../../../`实现多级引用
- 资源查看下载：可以引用资源地址，点击链接后单独打开页签查看，加上`download`之后，点击链接效果为下载资源，`download="xx.png "`可以设置文件名
- 网页：网址需要加上`https:/`，设置`target="_blank"`可以实现跳转时打开新页签
- 邮箱：使用`mailto`可以实现跳转到邮件发送
- 页面位置：使用超链接可以跳转到页面指定位置，如配合 id 使用

## 图片入门

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      img {
        width: 300px;
        height: 300px;
        object-fit: cover;
      }
    </style>
  </head>
  <body>
    <img src="images/coffee.png" alt="" />
  </body>
</html>
```

- 宽高：相当于设定一个容器，单独设置宽高会等比压缩，都设置则会默认将图片填充（FILL）到容器中
- `object-fit`：默认值是 `fill`
  - `fill`：替换元素的内容会被拉伸以完全填充其容器，不考虑原始宽高比。这可能导致内容被拉伸或压缩而变形。
  - `contain`：内容保持其原始宽高比，并被缩放以完全适应容器。如果容器的宽高比与内容的宽高比不同，容器的一些区域会留下空白。
  - `cover`：内容保持其原始宽高比，并被缩放以完全覆盖容器。如果容器的宽高比与内容的宽高比不同，内容可能会被裁剪。
  - `none`：内容的尺寸不会被拉伸或缩放，而是按照其自然大小显示。
  - `scale-down`：内容会按 `none` 或 `contain` 的行为显示，取决于哪个能更好地适应容器。如果内容的自然尺寸比容器小，则显示自然尺寸（`none`）。如果内容的自然尺寸比容器大，则会缩放到适应容器（`contain`）

## 视频

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      video {
        width: 600px;
      }
    </style>
  </head>
  <body>
    <video controls autoplay loop src="video/ocean.mp4">
      Your browser does not support the video tag.
    </video>
  </body>
</html>
```

- `<video>`：引用资源方式一致
- `controls`控制面板属性，只要加了这个属性，就会显示控制面板，无论其设为 true 或 false，移除控制面板的方式是将这个属性移除
- `autoplay`：设置视频自动播放
- `loop`：设置视频循环播放
- `<audio>`：上述属性对音频也适用

## 列表

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <ul>
      <li>About Me</li>
      <li>Course</li>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <li>Subscribe</li>
      <li>Contact Me</li>
    </ul>
    <br />
    <ol>
      <li>
        Prepare the fish: Clean the fish thoroughly and remove any scales or
        guts.
      </li>
      <li>
        Season the fish: Rub the fish with salt, pepper, and your choice of
        spices or herbs.
      </li>
      <li>Heat the pan: Add oil to a pan and heat it over medium heat.</li>
      <li>
        Cook the fish: Place the fish in the pan and cook for 3-5 minutes on
        each side, depending on its thickness.
      </li>
      <li>
        Serve: Remove the fish from the pan, garnish with lemon or herbs, and
        serve hot.
      </li>
    </ol>
    <br />
    <dl>
      <dt>Restaurant Name</dt>
      <dd>The French Laundry</dd>

      <dt>Restaurant Type</dt>
      <dd>Fine Dining</dd>

      <dt>Special Dishes</dt>
      <dd>Oysters and Pearls</dd>
      <dd>Truffle Risotto</dd>
      <dd>Beef Wellington</dd>
      <dd>Lobster Tail with Herb Butter</dd>
      <dd>Caramelized Apple Tart</dd>
    </dl>
  </body>
</html>
```

- **`<ul>`**：配合`<li>`组成**无序列表**，列表项默认使用圆点符号。可以嵌套其他列表（`<ul>` 或 `<ol>`）。

- **`<ol>`**：配合`<li>`组成**有序列表**，列表项默认使用数字排序。可以嵌套其他列表。

- **`list-style-type`**：CSS 属性，适用于 `<ul>` 和 `<ol>`，用于修改列表符号样式（如方块 square、圆点、数字、罗马数字等）。

- **`<dl>`**：配合`<dt>`和`<dd>`组成**描述列表**。用于表示术语、名称与描述的对应关系。

  - **`<dt>`**：表示定义标题。

  - **`<dd>`**：表示定义描述，通常紧跟在`<dt>`后面。

## 表单

> table 元素只应用于显示表格数据

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      table,
      td,
      th {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px;
      }
      tfoot {
        text-align: left;
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <th colspan="2">Expense Report</th>
        </tr>
        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Marketing</td>
          <td>$100</td>
        </tr>
        <tr>
          <td>Counting</td>
          <td>$200</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>$300</th>
        </tr>
      </tfoot>
    </table>
  </body>
</html>
```

- 表单结构：表格由表头 (`<thead>`)、表体 (`<tbody>`)、表足 (`<tfoot>`) 组成，每个部分都可以包含多行。
  - **表头**：通常包含标题或列名。
  - **表体**：存放具体数据。
  - **表足**：总结性信息（如总计），属于非必需部分。
- **`border` 属性**：用于定义边框样式，格式为 `宽度 形状 颜色`，例如：`border: 1px solid black; /* 1像素宽，实线，黑色 */`
- `border-collapse`：设为 `collapse` 时，去除单元格之间的边框间隙，使边框合并成一条线.

## 容器

> 容器的作用是将一组元素分组，通常用于样式设置。例如：
>
> 1. 在导航栏中，容器可以包含一个图标和多个菜单项，形成一个统一的结构。
> 2. **Hero Unit**：这是网页设计中的一个术语，指网页顶部显眼的部分，通常用于吸引用户注意力。Hero Unit 通常包含背景图片或视频、标题、描述性文字以及按钮或链接。
>
> 容器在网页中非常常见，能够帮助我们：
>
> - 组织内容
> - 设置特定样式

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .product {
        background-color: gold;
      }
      .highlight {
        color: red;
      }
    </style>
  </head>
  <body>
    <div class="product">
      <p>
        <span class="highlight">Lorem</span> ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus, esse numquam. Amet repellendus quis
        obcaecati exercitationem quae nesciunt aut sed!
      </p>
    </div>
    <div class="product">
      <p>
        <span class="highlight">Lorem</span> ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus, esse numquam. Amet repellendus quis
        obcaecati exercitationem quae nesciunt aut sed!
      </p>
    </div>
  </body>
</html>
```

- 常用容器：`<div>` 和 `<span>` 是 HTML 中最常用的两种通用容器，用于分组和样式设置。
- `<div>`：块级元素（Block-level element）。默认占满一整行，并开始于新的一行。常用于布局和大块内容的分组。
- `<span>`：行级元素（Inline element）。不占满整行，适合对内联文本进行分组和样式控制。通常用于细粒度的样式调整。
- `background` 是一个简写属性，可以用来设置多个与背景相关的属性，比如：
  - 背景颜色（`background-color`）
  - 背景图片（`background-image`）
  - 背景位置（`background-position`）
  - 背景重复方式（`background-repeat`）
  - 背景大小（`background-size`）
  - 背景附件（`background-attachment`）

## 语义化元素

> 在 HTML5 中，为了让代码更加语义化和易于理解，引入了一些新的语义化元素，这些元素相较于通用容器 `div`和 `span` 更加有意义，它们帮助**搜索引擎**和**屏幕阅读器**更好地理解网页内容。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      img {
        width: 100px;
      }
    </style>
  </head>
  <body>
    <article class="article">
      <h1>Heading</h1>
      <time datetime="2023-01-01T17:00"
        >Published January 1, 2023, at 5 PM</time
      >
      <p>
        <mark>Lorem</mark> ipsum dolor sit amet consectetur adipisicing elit.
        Nobis ducimus error mollitia quam adipisci maiores explicabo maxime sed
        velit reiciendis.
      </p>
      <figure>
        <img src="images/coffee.png" alt="a coffee" />
        <figcaption>my coffee this morning</figcaption>
      </figure>
    </article>
  </body>
</html>
```

- **`<article>`**：用于表示独立的、自包含的内容单元，例如：博客文章、用户评论、产品卡片

- **`<figure>` 和 `<figcaption>`**

  - **`<figure>`**：表示图像、表格、代码块等独立的内容单元。

  - **`<figcaption>`**：为 `figure` 元素添加描述或标题。

- **`<mark>`**：用于高亮显示内容。
- **`<time>`**：表示日期和时间信息，可以添加 `datetime` 属性来提供机器可读的格式。

## 组织网页结构

> 大多数网页至少包含以下三个基本部分，头部，中部，足部

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
    <main>
      <sction>
        <h2>Products</h2>
        <article></article>
        <article></article>
        <article></article>
      </sction>
      <sction>
        <h2>Tesimonials</h2>
        <article></article>
        <article></article>
      </sction>
      <sction></sction>
    </main>
    <aside></aside>
    <footer>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </footer>
  </body>
</html>
```

- `<header>`：通常用于包含网站标题、导航栏或标志等内容的头部区域
  - `<nav>`：表示导航栏，用于放置导航链接的容器。
- `<main>`：表示网页的主要内容，每个页面只能有一个 `<main>` 元素。
  - ` <sction>`：用于将页面内容分节，常用于逻辑上相关的内容分组。也可以嵌套在 `<article>` 中，划分文章的子部分。
- `<aside>`：用于显示与主要内容无直接关联的附属内容，如广告、推荐阅读或链接列表。
- `<footer>`：通常表示网页或某个部分的页脚内容，常包含版权声明、次级导航、社交媒体链接等。

# CSS 基础

## 提供 CSS 样式

> CSS 提供三种方式来设置样式：嵌入式样式（Embedded Style Sheet）、外部样式表（External Style Sheet）和行内样式（Inline Style）。本节详细讲解了它们的使用方法及适用场景。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css" />
    <style>
      .blueOne {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p class="blueOne">Lorem ipsum dolor sit amet.</p>
    <p class="blueOne" style="color: red; font-weight: bold">
      Lorem ipsum dolor sit amet.
    </p>
  </body>
</html>
```

```CSS
p{
  color:orange;
}
```

- **嵌入式样式表**：将 CSS 样式直接写在 HTML 文件中的 `<style>` 标签内。

  - **不具备可扩展性**：多页面共享样式时，需要手动复制样式。
  - **违反关注点分离原则**：HTML（结构）和 CSS（样式）混在一起。

- **外部样式表**：将 CSS 样式写在单独的 `.css` 文件中，并通过 `<link>` 标签引入

  - 样式可重用，修改样式时只需更新一处。

  - 更符合关注点分离原则。

- **行内样式**：将样式直接写在 HTML 元素的 `style` 属性中。

  - 样式与内容混在一起，不易维护。
  - 不建议使用，除非是临时快速测试。

- **注意**：嵌入式样式表、外部样式表、行内样式并不是只能用一个，比如，当引用外部样式表时，可以使用嵌入式样式表单独调整页面某处的样式。优先级：行内>嵌入式>外部

## 正常化 CSS

> 在网页开发中，不同的浏览器可能会对 HTML 元素的默认样式进行不同的渲染，从而导致显示不一致。为了解决这一问题，可以使用 **`normalize.css`** 提供一致的基础样式。一般通过官网下载，或者通过 NPM 安装。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <style>
      .blueOne {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p class="blueOne">Lorem ipsum dolor sit amet.</p>
    <p class="blueOne" style="color: red; font-weight: bold">
      Lorem ipsum dolor sit amet.
    </p>
  </body>
</html>
```

- `normalize.css` 将 HTML 元素的默认行高设置为 `1.15`，以统一各浏览器的显示，并将 `body` 元素的默认外边距设置为 `0`，消除不必要的空白。

- 引入 `normalize.css` 后可能会导致页面一些默认样式（如 `body` 的间距）消失。可以通过自定义样式恢复或调整。比如在 style.css 中加入如下代码恢复边距。

  ```
  body {
    margin: 10px; /* 恢复页面边距 */
  }
  ```

- 注意：由于代码执行顺序是由上往下，需要先引入 normalize.css，再引入自定义 css 对其进行覆盖

## 基本选择器

> CSS 提供多种方法来选择元素进行样式设置，包括按类型（type）、ID、类（class）和属性（atrributes）进行选择。

- 类型选择器：如`img{}`、`body{}`
- ID 选择器：如`#products{}`，配合在标签上加上`id="products"`使用，id 是唯一的

- 类选择器：如`.product{}`，配合在标签上加上`class="product"`使用，class 非唯一
- 属性选择器（不常见）：如`a[target="_blank"]{}`择所有具有 `target="_blank"` 的 a 标签；如`a[href="baidu"]{}`择所有具有`href="baidu"`的 a 标签。此外`=`能设置规则能进行筛选。如`^="http"`表示以 http 开头，`$="com"`表示以 com 结尾，`*="baidu"`表示包含 baidu，此外还可以同时筛选多个条件，如`a[href^="http"][href*="baidu"][target="_blank"] {}`
- 包含关系：如设置`article .blueOne`可以选

## 关系选择器

> 关系选择器用于根据元素之间的关系选择目标元素，而不需要为每个元素单独添加 `id` 或 `class`。它们让 HTML 更加简洁，但缺点也很明显，如果 HTML 结构发生变化（如元素位置调整），样式可能会失效，而且性能相对较低。

代码

```css
#products > p {
  color: orange;
}

section #second {
  color: red;
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <section id="products">
      <p>Lorem ipsum dolor sit amet.</p>
      <p id="second">Lorem ipsum dolor sit amet.</p>
      <article>
        <p>Lorem ipsum dolor sit amet.</p>
      </article>
    </section>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
</html>
```

- `#products + p`：id+元素标签（class 效果基本相同）

  - 空格：后代选择器，选择所有层级的后代元素。
  - `>`：子选择器，仅选择直接子元素。

  - `+`：相邻兄弟选择器，选择紧邻的兄弟元素（同级，直接后面）。

  - `~`：通用兄弟选择器，选择所有兄弟元素（同级，在后面）。

- `section #first`：元素标签+id，筛选该元素标签下对应 id 的元素修改样式（class 效果基本相同）f

## 伪类选择器

> 伪类选择器是 CSS 中的一个强大工具，用于根据元素的状态或特定位置选择目标元素，而无需为其添加 `class`或 `id`。伪类选择器以 `:` 开头，能够简化 HTML 结构，提高开发效率。

- **`:first-child`**：选择父元素中的第一个子元素。如果前面未指定具体上下文或元素类型，会匹配页面中所有父元素的第一个子元素。

  ```css
  /* 匹配所有父元素的第一个子元素 */
  :first-child {
    font-weight: bold;
  }

  /* 仅匹配 <article> 元素中的第一个子元素 */
  article :first-child {
    font-weight: bold;
  }

  /* 仅匹配 <article> 中的第一个 <p> 元素 */
  article p:first-child {
    color: red;
  }
  ```

- `:first-of-type`：选择父元素中第一个特定类型的子元素。如果不指定类型，则会选择每一种类型的第一个元素。

- `:last-child`：选择父元素中的最后一个子元素，无论类型。

- `:last-of-type`：选择父元素中最后一个特定类型的子元素。

- `ul li:nth-child(odd)`：选择列表中的奇数项。`odd` 也可以替换为其他表达式，例如 `2n` 表示每隔两项选择一次，`2n+1` 表示从第一项开始每隔两项选择，`3n` 表示每隔三项选择。

- `a:visited,a:link`：选择链接，分为两种状态：

  - `:link`：选择未访问的超链接。
  - `:visited`：选择已访问的超链接。

- `a:hover,a:focus`：作用于链接，两者通常一起使用：

  - `:hover`：当鼠标悬停在元素上时触发样式。
  - `:focus`：当元素通过键盘（如 Tab 键）获得焦点时触发样式。

## 伪元素选择器

> 伪元素是 CSS 中的一种强大工具，用于对元素的特定部分（如第一行、首字母）进行样式设置，或在元素内容前后插入内容，而无需直接修改 HTML 结构。伪元素选择器以 `::` 开头。

- **`::first-letter`**：选择并设置块级元素的首字母样式。如将段落的首字母加粗、增大字体或改变颜色。

- **`::first-line`**：选择并设置块级元素的第一行文本样式。如对段落的第一行文字设置斜体或调整行高。

- **`::selection`**：设置用户选中部分文本的样式。如更改选中文本的背景颜色或文字颜色。如`::selection{color: pink;}`

  - 注意：仅支持部分样式属性，如 `color`、`background` 和 `text-shadow`。
  - **`::before`**：在元素内容前插入内容。如在标题或段落前添加图标、装饰性内容或提示文字。如`p::before{content: "...";}`，还可以加上`display: block;`令其单独占一行

- **`::after`**：在元素内容后插入内容。如在段落末尾附加符号或其他信息。

> 伪类选择器与伪元素选择器的区别
>
> - **伪类**：作用于**整个元素**，描述其动态状态或特定位置（如 `:hover`、`:first-child`）。
>
> - **伪元素**：作用于**元素的一部分**，或在元素内容前后插入内容（如 `::first-letter`、`::before`）。

## 选择器优先级

> 在开发中，多个规则可能同时作用于同一个元素并产生冲突。CSS 的选择器优先级规则（Specificity）帮助浏览器决定哪些样式最终会被应用。**优先级**是 CSS 选择器的“权重”值。浏览器会优先应用权重值更高的规则。如果权重相同，则按照**规则定义顺序**，后定义的规则覆盖前面的规则
>
> 优先级：ID selector > Class & attribute selectors > Element selector

代码

```css
body {
  margin: 10px;
}

h1 {
  color: dodgerblue;
}

.highlight {
  color: deeppink;
}

#product {
  color: green;
}
#product {
  color: darkblue;
}

/* .highlight {
  color: deeppink !important;
} */

#product.highlight {
  color: yellow;
}
```

- VS code 可以查看优先级，如`#product` 的优先级是 `1, 0, 0`，`.highlight` 的优先级是 `0, 1, 0`。
- 当两个规则的优先级相同时，后定义的规则生效
- `!important`：可以提升优先级，但是不推荐使用
- 使用更具体的选择器，如 ID 和类选择器的组合权重为`1, 1, 0`能提升优先级

## 继承

> **继承**是 CSS 中的一个核心概念，指某些 CSS 属性会自动从父元素传递给子元素。利用继承可以减少重复代码，简化样式设置。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <p>Lorem ipsum <strong>dolor</strong> sit amet.</p>
  </body>
</html>
```

```css
p {
  color: dodgerblue;
  border: 1px solid black;
}

strong {
  color: initial;
  border: inherit;
}
```

- 子元素可以继承来自父元素的一些属性，可以通过`initial`选择性不继承，或者是通过`inherit`强制性性继承

  **默认继承的属性（与文本和排版相关）：**

  - `color`（文字颜色）
  - `font`（字体）
  - `letter-spacing`（字间距）
  - `line-height`（行高）
  - `visibility`（可见性）
  - `text-align`（文本对齐）

  **默认不继承的属性（与布局和盒模型相关）：**

  - `margin`（外边距）
  - `padding`（内边距）
  - `border`（边框）
  - `width` / `height`（宽度/高度）
  - `background`（背景）

## 颜色

> CSS 提供了多种表示颜色的方式，包括：**命名颜色**（Named Colors）、**RGB 值**、**HSL 值**和**十六进制值**（Hexadecimal）。

```CSS
.box{
  width: 300px;
  height: 300px;
  /* background-color: rgb(190,237,199); */
  /* background-color: rgba(190,237,199,0.5); */
  /* background-color: #beedc7; */
  /* background-color: hsl(120, 73%, 80%); */
  background-color: hsla(120, 73%, 80%,0.5);
}
```

- CSS 内置了一些预定义的颜色名称，例如：`red`、`blue`、`green`、`dodgerblue`、`deeppink`
- **RGB 值**：RGB（红、绿、蓝）通过设置三种颜色的强度来表示颜色，每种颜色的值范围为`0-255`
  - 语法：`rgb(red, green, blue)`
- **RGBA** 是 RGB 的扩展，增加了透明度，`alpha` 的值范围：`0-1`（0 表示完全透明，1 表示完全不透明）
  - 语法：`rgba(red, green, blue, alpha)`
- **十六进制值**：一种紧凑的颜色表示法，每两位表示一种颜色的强度，如`#F4606C` = `rgb(244, 96, 108)`，但不支持透明度
- **HSL 值**：表示法通过色相、饱和度和亮度来定义颜色
  - 色相：（Hue）：颜色在标准色轮上的位置（角度，0° - 360°）。
    - 例如：0° 是红色，120° 是绿色，240° 是蓝色。
  - 饱和度：（Saturation）：颜色的强度（0%-100%）。
    - 低饱和度的颜色更接近灰色，高饱和度的颜色更鲜艳。
  - 亮度：（Lightness）：颜色的明暗（0%-100%）。
    - 0% 是黑色，50% 是正常亮度，100% 是白色。
- **HSLA** 是 HSL 的扩展，增加了透明度：
  - 语法：`hsla(hue, saturation, lightness, alpha)`

## 渐变

> 渐变是 CSS 中创建颜色平滑过渡的强大工具。通过渐变，我们可以在两种或多种颜色之间创建美丽的颜色过渡。

代码

```css
.box {
  width: 600px;
  height: 300px;
  /* background:linear-gradient(yellow, dodgerblue);
  background:linear-gradient(to right, yellow, dodgerblue);
  background:linear-gradient(to bottom right, yellow, dodgerblue);
  background:linear-gradient(45deg, yellow, dodgerblue);
  background:linear-gradient(45deg, yellow, dodgerblue 30%);
  background:linear-gradient(45deg, yellow, dodgerblue 50%);
  background:linear-gradient(45deg, yellow, dodgerblue,tomato);
  background: radial-gradient(white, yellow);
  background: radial-gradient(circle,white, yellow);
  background: radial-gradient(circle at top left,white, yellow); */
  background: rgb(244, 96, 108);
  background: linear-gradient(
    90deg,
    rgba(244, 96, 108, 1) 10%,
    rgba(190, 231, 233, 1) 90%
  );
}
```

- 基本概念：**渐变是一种图像**，不能使用 `background-color` 属性设置，而需要使用**`background-image`** 属性或者 **`background`** 属性（可同时设置颜色和图像）
- **线性渐变**：使用 `linear-gradient()` 函数。格式为`linear-gradient(方向, 颜色1, 颜色2, ...)`。

  - **简单渐变**：`linear-gradient(dodgerblue, yellow)`。
  - **调整方向**：如`to right`是从左到右`to bottom right`是从左上到右下，还自定义角度，单位为度（°）如`45deg`。
  - **设置颜色位置**：可以指定颜色的开始位置如`linear-gradient(dodgerblue 30%, yellow 70%)`。
  - **定义多个颜色**：`linear-gradient(dodgerblue, yellow, tomato)`。

- **径向渐变**：使用 `radial-gradient()` 函数。格式为`radial-gradient(形状, 起始颜色, 结束颜色)`。
  - **简单径向渐变**：`radial-gradient(white, yellow)`。
  - **指定形状**：`circle`：圆形（默认）、`ellipse`：椭圆形。
  - **调整位置**：`circle at top left`：圆形从左上角开始。
- 使用渐变生成器可以快速生成复杂的渐变效果，为了支持不兼容渐变的旧版浏览器，可以设置纯色作为回退

## 边框

> 边框是 CSS 中一个基础但强大的特性，可以为元素添加样式和装饰。过多的复杂边框可能会影响性能，尽量保持设计简洁美观。

代码：

```css
.box {
  width: 300px;
  height: 300px;
  background: gold;
  /* border:10px solid dodgerblue; */
  /* border:10px dotted dodgerblue; */
  border: 10px dashed dodgerblue;
  /* border-top: 20px solid dodgerblue; */
  border-width: 10px 20px 30px 40px;
  /* border-width: 10px 20px 30px; */
  /* border-width: 10px 20px; */
  border-radius: 100%;
}
```

- `border` 是一个 **简写属性**，它可以同时设置边框的 **宽度**、**样式** 和 **颜色**。
- **边框样式**：
  - `solid`：实线。
  - `dotted`：点线。
  - `dashed`：虚线。
  - **其他样式（如 `double`, `groove`, `ridge`）** 已较少使用，基本上只会选择 `solid`、`dotted` 和 `dashed`。
- 如果需要仅设置某一侧的边框，可以使用以下属性：
  - `border-top`：设置上边框。
  - `border-right`：设置右边框。
  - `border-bottom`：设置下边框。
  - `border-left`：设置左边框。
- **` border-width`**：边框宽度
  - 四个值：分别代表 `上`、`右`、`下`、`左`。
  - 三个值：分别代表 `上`、`左右`、`下`。
  - 两个值：分别代表 `上下`、`左右`。
  - 一个值：所有方向使用相同宽度。
- 通过 `border-radius` 属性，可以使边框的角变圆，单位可以是像素（`px`）或百分比（`%`），当值为 `100%` 且元素是正方形时，边框会变成 **圆形**。
- 通过边框和 `border-radius`，可以生成各种形状，可以使用 CSS Shapes Generator 在线工具https://css-tricks.com/the-shapes-of-css/ 探索更多形状

## 阴影

> 在 CSS 中，可以通过 **`box-shadow`** 和 **`text-shadow`** 属性为元素和文本添加阴影效果，为页面增添立体感和视觉层次。

代码：

```css
.box {
  width: 300px;
  height: 300px;
  background-color: dodgerblue;
  box-shadow: 0 0 30px gray;
  /* box-shadow: 10px 10px 10px 10px rgba(0,0,0,0.5); */
}

h1 {
  color: white;
  text-shadow: 3px 5px 5px rgba(0, 0, 0, 0.5);
}
```

- **`box-shadow`** 属性用于为元素添加阴影。可以设置阴影的 **位置**、**模糊程度** 和 **颜色**。

  ```css
  box-shadow: <水平偏移> <垂直偏移> <模糊半径> <扩展半径> <颜色>;
  ```

  - **水平偏移**：控制阴影的水平位置。
    - 正值：阴影向右偏移。
    - 负值：阴影向左偏移。
  - **垂直偏移**：控制阴影的垂直位置。
    - 正值：阴影向下偏移。
    - 负值：阴影向上偏移。
  - **模糊半径**：定义阴影的模糊程度。
    - 值越大，阴影越柔和。
    - 为 `0` 时，阴影边缘为硬边。
  - **扩展半径**（可选）：控制阴影大小的扩展。
    - 正值：阴影扩大。
    - 负值：阴影缩小。
  - **颜色**：定义阴影的颜色。支持所有 CSS 色值，如 `rgba`（可用于半透明效果）。

- **`text-shadow`** 属性用于为文本添加阴影。

  ```css
  text-shadow: <水平偏移> <垂直偏移> <模糊半径> <颜色>;
  ```

- **阴影技巧**：

  - **柔和阴影效果**：将水平和垂直偏移设置为 `0`，并增加模糊半径。

  - **使用半透明颜色**：用 `rgba` 创建更自然的阴影，能与背景色更好地融合。如果背景颜色动态变化，使用半透明阴影（如 `rgba`），确保阴影始终适配。

  - 多重阴影：为元素或文本添加层次感

    ```css
    text-shadow: 1px 1px 2px red, -1px -1px 2px blue;
    box-shadow: 2px 2px 4px red, -2px -2px 4px blue;
    ```

# 布局

## 盒模型

> **盒模型**（The Box Model）是 CSS 中一个非常重要的概念。当浏览器渲染页面中的元素时，会将每个元素放入一个 **不可见的盒子**中。
>
> 1. **内容区域（Content Area）**
>    - 核心部分，用于显示实际内容，例如段落文本或图片。
> 2. **内边距区域（Padding Area）**
>    - 内容区域与边框之间的空间，用于为内容增加间距。
> 3. **边框区域（Border Area）**
>    - 包围内容和内边距的边框。
> 4. **外边距区域（Margin Area）**
>    - 用于分隔不同元素之间的距离。

```CSS
.box{
  height: 100px;
  width: 100px;
  background-color: #ffd700;
  padding: 20px 20px;
  border:5px solid dodgerblue;
}

.content{
  height: 100px;
  width: 100px;
  margin: 20px 20px;
  padding: 20px 20px;
  background-color: green;
  border:10px solid dodgerblue;
}
```

- 通过浏览器的开发者工具，可以直观地看到盒模型的组成：
  - **蓝色**：内容区域。
  - **绿色**：内边距。
  - **橙色**：外边距。
  - **边框**：以边框宽度和颜色展示。
- 内边距（Padding）：增加内容与边框之间的间距。通过 `padding` 属性，可同时设置四个方向的值，顺序为：上、右、下、左（`TRBL`）。
  - **四个值**：`padding: 10px 20px 10px 20px;`
  - **三个值**：`padding: 10px 20px 10px;`（上下、左右相同）
  - **两个值**：`padding: 10px 20px;`（垂直方向、水平方向相同）
  - **一个值**：`padding: 10px;`（四个方向都相同）
- 外边距（Margin）：用于调整元素与其他元素之间的距离。与 `padding` 类似，可通过 `margin` 属性控制四个方向的外边距。
- 内边距与外边距的区别：
  - **内边距（Padding）**：影响内容区域与边框之间的空间。内边距会扩大元素的可点击区域。
  - **外边距（Margin）**：影响元素与其他元素之间的距离。外边距不会影响元素本身的大小。
- 外边距合并（Margin Collapsing）：当两个相邻的块级元素存在外边距时：上下外边距会合并为较大的那一个，而不是两者相加。这是 CSS 的特性，用于避免不必要的额外间距。
- 正确使用内边距与外边距：使用 **内边距（Padding）** 为内容添加空间，与边框之间保持距离。使用 **外边距（Margin）** 分隔不同的元素，调整元素间的距离。避免混用内边距和外边距来控制间距，否则容易导致布局问题。

## 元素尺寸

> CSS 中设置元素尺寸是一个重要的概念。通过 `width` 和 `height` 属性，我们可以指定元素的尺寸。但在实践中，很多新手会遇到一些困惑，因为不同属性的作用可能会影响实际尺寸。
>
> **默认尺寸与盒模型影响**
>
> 1. **内容尺寸（Content Size）**
>    - 默认情况下，`width` 和 `height` 属性只作用于 **内容区域（content-box）**。
> 2. **内边距和边框的影响**
>    - 添加 `padding` 或 `border` 会使盒子变大，因为它们会扩展到内容区域之外。
>    - 例如：
>      - 设置 `width: 100px` 和 `padding: 20px` 后，总宽度将变为 **140px**（`100px + 20px + 20px`）。
>      - 再添加 `border: 10px` 后，总宽度变为 **160px**。

代码:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <span class="box"></span><span class="box"></span>
  </body>
</html>
```

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 10px;
}

.box {
  height: 100px;
  width: 100px;
  background-color: #ffd700;
  padding: 20px 20px;
  border: 5px solid dodgerblue;
  /* box-sizing: content-box; */
  display: inline-block;
}
```

- `box-sizing`：决定了 `width` 和 `height` 的计算方式
  - **默认值：`content-box`**
    - `width` 和 `height` 只作用于内容区域。
    - **影响**：增加 `padding` 或 `border` 会增大总尺寸。
  - **推荐值：`border-box`**
    - `width` 和 `height` 作用于整个边框区域（包括内容、内边距和边框）。
    - **优点**：使尺寸计算更加简单和可预测。
  - **应用 `box-sizing`**
    - 推荐通过通用选择器（`*`）将 `box-sizing: border-box;` 应用于所有元素。
    - 注意：需要扩展选择器以覆盖伪元素（如 `::before` 和 `::after`）。
- 块/内联元素与尺寸：

  - 块级元素的默认行为：
    - 占据一整行，
    - 可以设置 `width` 和 `height` 属性。
  - 内联元素的默认行为：
    - 默认情况下，内联元素（如 `span`）不支持 `width` 和 `height` 属性，
    - 只占据内容宽高。
    - 解决方法：使用 `display: inline-block;`可以让内联块级元素既保持内联布局，又支持设置尺寸。

- 边距合并问题：
  - **概念**：相邻的块级元素之间，垂直方向的边距会合并为一个值，而非简单相加。
  - **解决方法**
    - 删除多余的空格或换行符。
    - 使用 `flexbox` 或 `float` 等布局方式避免合并。

## 溢出

> 在 CSS 中，当固定尺寸的容器内容超出其定义的宽度或高度时，就会发生**溢出（Overflow）**。了解和控制溢出的行为对于保持布局的整洁性和功能性至关重要。
>
> **什么是溢出？**
>
> - 当以下情况发生时会出现溢出：
>   - 容器具有固定的 `width` 和/或 `height`。
>   - 容器内的内容超出了这些固定的尺寸。
>   - 多余的内容会溢出到容器外，就像水杯被倒得太满一样。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="box">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum
        facilis et, a aut fugit, dolores corporis nulla cupiditate nemo
        similique fuga, esse dolorem libero dolor eligendi perspiciatis.
        Ducimus, ab corrupti incidunt illo dolore vel quis rem commodi
        cupiditate! Accusamus dolorum recusandae fuga ut itaque commodi iure
        beatae quo numquam?
      </p>
    </div>
  </body>
</html>
```

```css
.box {
  height: 150px;
  width: 150px;
  border: 1px solid dodgerblue;
  overflow: scroll;
}
```

- `overflow` 属性：用于控制当内容溢出容器时应该如何处理。

  - **默认行为：`overflow: visible`**

    - 溢出的内容会完全显示在容器外。

    - **适用场景**：通常在固定尺寸的容器中很少会有意使用。

  - **隐藏溢出：`overflow: hidden`**

    - 超出的内容会被裁剪并隐藏。

    - **适用场景**：在需要保持布局整洁、限制溢出内容的情况下。

  - **滚动条：`overflow: scroll`**

    - 水平和垂直滚动条都会出现，即使没有溢出内容。mac 上和 auto 效果相同
    - **适用场景**：强制显示滚动条以供用户操作。

  - **动态滚动：`overflow: auto`**
    - 只有在内容溢出时才会显示滚动条。
    - **适用场景**：提供更好的用户体验，仅在需要时显示滚动条。

- 控制方向：`overflow` 属性是 `overflow-x`（水平）和 `overflow-y`（垂直）的简写。可以使用这两个属性分别控制溢出的方向。

  ```css
  overflow-x: hidden; /* 隐藏水平溢出 */
  overflow-y: auto; /* 仅在需要时显示垂直滚动条 */
  ```

## 测量单位

> 在 CSS 中，为元素设置尺寸时，我们可以使用多种测量单位。这些单位分为 **绝对单位** 和 **相对单位** 两大类。使用不同单位的组合可以帮助我们创建更灵活和可扩展的布局。
>
> **绝对单位**
>
> 绝对单位是固定的，其值不会因外部环境而改变。常见的绝对单位包括：
>
> - **px**：像素（最常用）。
> - **pt**、**cm**、**mm** 等：主要用于打印相关应用，在 Web 开发中几乎不会使用。
>
> **相对单位**
>
> 相对单位的值依赖于某些参考点，比如父元素的尺寸、视口大小或字体大小。常见的相对单位包括：
>
> - **%**：相对于父元素的大小。
> - **vw**、**vh**：分别相对于视口宽度和高度。
> - **em**、**rem**：分别相对于当前元素的字体大小和根元素（HTML）的字体大小。

```CSS
html {
  font-size: 62.5%;
}

body {
  margin: 10px;
}

.box {
  font-size: 20px;
  width: 10em;
  height: 100vh;
  background-color: gold;
  border-top: 5px solid dodgerblue;
}
```

- **百分比（%）**：
  - **描述**：相对于父元素的尺寸。
  - **应用场景**：适用于布局中元素占比的设计。
  - 注意：默认情况下。body 宽度占比 100%，高度占比 0%，按需提供。
- **视口单位（vw 和 vh）**：
  - **vw**：视口宽度的百分比，`1vw = 1% 视口宽度`。
  - **vh**：视口高度的百分比，`1vh = 1% 视口高度`。
  - **应用场景**：适合全屏背景、模态框等需占据屏幕一定比例的场景。
- **字体相关单位（em 和 rem）**：

  - **em**：基于当前元素的字体大小计算。
    - 若当前元素字体大小为 16px，则 `1em = 16px`。
  - **rem**：基于根元素（HTML）的字体大小计算。
    - 若根元素字体大小为 10px，则 `1rem = 10px`。
  - **应用场景**：适合需要根据字体大小调整布局的场景。

- **推荐实践**：将 `html` 的字体大小设置为 62.5%（10px），方便计算 rem。

## 元素定位

> CSS 提供了多种定位方式，允许我们精确地控制元素在页面上的位置。
>
> **1. 静态定位（Static Positioning）**：所有元素默认的定位方式是 `static`。
>
> **2. 相对定位（Relative Positioning）**：元素的位置基于其 **正常位置** 调整，其他元素不受影响\*\*，它们仍然保留在原始位置。
>
> **3. 绝对定位（Absolute Positioning）**：元素 **相对于最近的已定位祖先元素** 定位，如果没有找到已定位的祖先元素，则相对于 `body`（即整个页面）定位。
>
> **4. 固定定位（Fixed Positioning）**：元素 **相对于视口（viewport）** 定位，即使滚动页面，元素始终保持在固定位置。常用于固定导航栏或浮动按钮。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="boxes">
      <div class="box box-one"></div>
      <div class="box box-two"></div>
      <div class="box box-three"></div>
    </div>
  </body>
</html>
```

```css
html {
  font-size: 62.5%;
}

body {
  margin: 10px;
}

.boxes {
  border: 3px solid lightgray;
}

.box {
  width: 10rem;
  height: 10rem;
  position: relative;
}
.box-one {
  background-color: gold;
}
.box-two {
  background-color: tomato;
  position: absolute;
  top: 0;
  left: 5rem;
  right: 5rem;
  width: auto;
  z-index: 1;
}
.box-three {
  background-color: dodgerblue;
}
```

- `position`：默认属性为 static，即静态定位

  - `position: relative;`：
    - 设置为`relative`后，元素的位置基于其 **正常位置** 调整。
    - 使用 `top`、`right`、`bottom` 和 `left` 属性移动元素。
    - **其他元素不受影响**，它们仍然保留在原始位置。
  - `position: absolute;`：
    - 设置为`absolute`后，元素 **相对于最近的已定位祖先元素** 定位
    - 父容器必须为容器设置相对定位`position: relative;`
    - 使用 `top`、`right`、`bottom` 和 `left` 属性指定位置。
    - 元素从文档流中移除，其他元素会填补空位
  - `position: fixed;`：
    - 元素 **相对于视口（viewport）** 定位。
    - 即使滚动页面，元素始终保持在固定位置。
    - 常用于固定导航栏或浮动按钮。

- z-index 属性：
  - **作用**：控制元素的堆叠顺序（z 轴方向）。
  - **默认值**：`z-index: 0`。
  - **使用规则**：
    - 较大的 `z-index` 值会让元素显示在前面。
    - 负值会让元素显示在后面。
  - **注意**：只有已定位的元素才能应用 `z-index`。
- 宽高控制：
  - **方式一**：直接使用 `width` 和 `height`。
  - **方式二**：结合 `top`、`right`、`bottom` 和 `left` 属性：
    - 设置 `left` 和 `right` 确定宽度。
    - 设置 `top` 和 `bottom` 确定高度。
    - 通过 `auto` 让浏览器自动调整大小。

## 元素浮动

> **浮动 (float)** 是一种早期的 CSS 布局方式，用于实现文本环绕图片等简单布局。尽管在现代开发中已被 `Flexbox`和 `Grid` 取代，但了解浮动仍然很重要，尤其是在维护旧代码时。
>
> **浮动的基础概念**
>
> - 浮动通过 `float` 属性将元素推向父容器的左侧或右侧，其后的非浮动元素会围绕它排布。
> - 需要结合 **清除 (clear)** 属性解决布局问题。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <article class="tweet clearfix">
      <div class="avatar"></div>
      <p>Lorem ipsum dolor sit amet.</p>
      <!-- <div class="clear"></div> -->
      <!-- <p class="clear">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum
        quaerat nam eum totam nihil necessitatibus repellat perferendis quidem
        expedita et voluptate odio saepe natus libero dolorem, at officiis cum,
        in illum quasi tempora repellendus? Qui, dolores veniam natus eaque
        doloribus consectetur laborum, non illum laudantium omnis saepe
        recusandae porro.
      </p> -->
    </article>
  </body>
</html>
```

```css
.avatar {
  width: 5rem;
  height: 5rem;
  background-color: gold;
  float: left;
  margin-right: 0.5rem;
}

.tweet {
  border: 3px solid dodgerblue;
  /* overflow: hidden; */
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

.clear {
  clear: left;
}
```

- **`float`**

  - **`none`** (默认)：不浮动。

  - **`left`**：元素浮动到父容器的左侧。

  - **`right`**：元素浮动到父容器的右侧。

- **`clear`**

  - **`none`** (默认)：不清除浮动。

  - **`left`**：清除左浮动，阻止元素围绕浮动的左侧元素。

  - **`right`**：清除右浮动。

  - **`both`**：同时清除左右浮动。

- **文本围绕浮动元素**

  - 浮动的元素将靠左或靠右排列，后续文本会围绕它。
  - 通过 `margin` 属性控制文本与浮动元素之间的间距。

- **清除浮动**

  - **`clear` 属性**：将非浮动元素移动到浮动元素下方。
  - **伪元素清除法**：使用 `::after` 动态插入元素清除浮动，推荐使用 `clearfix` 伪元素清除法。
  - **`overflow` 属性**：通过设置 `overflow: hidden` 或 `overflow: auto` 解决父元素塌陷问题（不推荐）。

- **父元素塌陷**

  - 浮动的子元素从正常流中移除，可能导致父元素高度塌陷。
  - 解决方案：
    - 使用清除方法（`clear` 属性、伪元素清除），不污染 HTML 结构。。
    - 设置 `overflow` 为 `hidden` 或 `auto`。

## 弹性盒布局

> **FlexBox**（弹性盒布局）是一种用于 **一维布局**（行或列）的强大工具。它比传统的浮动布局简单且功能更强大，非常适合构建导航栏、按钮组或卡片排列等。使用它，便不再需要去使用浮动 float，不再需要去清除浮动，不再需要去解决父元素塌陷。
>
> 核心概念
>
> 1. **启用 FlexBox**
>    - 通过 `display: flex;` 开启容器的 Flex 布局能力。
>    - 子元素称为 **Flex Items**，会根据 FlexBox 的规则排列。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <!-- A-G -->
      <div class="box box-one">A</div>
      <div class="box">B</div>
      <div class="box">C</div>
      <!-- <div class="box">D</div>
      <div class="box">E</div>
      <div class="box">F</div>
      <div class="box">G</div> -->
    </div>
  </body>
</html>
```

```css
.container {
  height: 90vh;
  border: 3px solid lightgrey;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* flex-wrap: wrap;
  align-content:center; */
}

.box {
  /* flex-basis: 10rem;
  flex-grow: 1;
  flex-shrink: 1; */
  flex: 1 1 10rem;
  width: 5rem;
  height: 5rem;
  background: dodgerblue;
  margin: 1rem;
}

.box-one {
  flex-shrink: 0;
  align-self: start;
}
```

- **启用 FlexBox**

  - 通过 `display: flex;` 开启容器的 Flex 布局能力。

  - 子元素称为 **Flex Items**，会根据 FlexBox 的规则排列。

- **布局方向**
  - 使用 `flex-direction`控制主轴方向：
    - `row`（默认）：主轴为水平方向，从左到右。
    - `row-reverse`：主轴为水平方向，从右到左。
    - `column`：主轴为垂直方向，从上到下。
    - `column-reverse`：主轴为垂直方向，从下到上。
- **轴的概念**
  - 主轴（Main Axis）：由 `flex-direction` 决定的主要排列方向。
  - 交叉轴（Cross Axis）：与主轴垂直的方向。
- **主轴对齐：`justify-content`**
  - 用于沿主轴对齐 Flex Items：
    - `flex-start`（默认）：起点对齐。
    - `flex-end`：终点对齐。
    - `center`：居中对齐。
    - `space-between`：两端对齐，中间均匀分布。
    - `space-around`：每个元素两侧的间距相等（首尾元素间距为中间间距的一半）。
    - `space-evenly`：每个元素之间的间距相等，包括首尾间距。
- **交叉轴对齐：`align-items`**
  - 用于沿交叉轴对齐 Flex Items：
    - `flex-start`（默认）：靠交叉轴起点对齐。
    - `flex-end`：靠交叉轴终点对齐。
    - `center`：交叉轴居中对齐。
    - `stretch`（默认）：拉伸以填满容器高度。
    - `baseline`：根据文本基线对齐。
- **多行对齐：`align-content`**
  - 当容器启用了多行（`flex-wrap: wrap;`）时，用于对齐多行：
    - `flex-start`：靠主轴起点对齐。
    - `flex-end`：靠主轴终点对齐。
    - `center`：交叉轴居中对齐。
    - `space-between`：每行间距相等，靠两端对齐。
    - `space-around`：每行两侧间距相等。
    - `stretch`（默认）：每行均匀拉伸以填满容器。
- **尺寸控制**
  - `flex-basis`：设置初始尺寸（主轴方向）。
    - 默认为 `auto`，即取 `width` 或 `height`。
  - `flex-grow`：设置弹性增长因子。
    - 默认为 `0`，即不增长。
    - 值越大，元素占据剩余空间的比例越大。
  - `flex-shrink`：设置弹性收缩因子。
    - 默认为 `1`，即在空间不足时按比例收缩。
    - 值为 `0` 时，元素不会收缩。
  - 综合属性：`flex`：是 `flex-grow`、`flex-shrink` 和 `flex-basis` 的简写。
    - `flex: 1` 等价于 `flex-grow: 1; flex-shrink: 1; flex-basis: 0;`
    - `flex: 2 1 10rem` 等价于 `flex-grow: 2; flex-shrink: 1; flex-basis: 10rem;`
    - `flex`值为两位时，第一位的值为 `flex-grow`，第二位的值取决于单位

## 网格布局

> **CSS Grid** 是一种二维布局系统，适用于同时控制行和列的布局，特别适合创建图片画廊、网页布局等复杂结构。
>
> 核心概念
>
> 1. **启用 Grid**
>    - 使用 `display: grid;` 启用 Grid 布局。
>    - 子元素称为 **Grid Items**，根据 Grid 定义自动排列。

代码

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <div class="box box-one">A</div>
      <div class="box">B</div>
      <div class="box">C</div>
      <div class="box box-four">D</div>
    </div>
  </body>
</html>
```

```CSS
.container{
  height: 95vh;
  display: grid;
  /* 3*2 */
  /* grid-template-rows: 100px 100px 100px; */
  /* grid-template-rows: repeat(3, 100px); */
  /* grid-template-columns: repeat(2, 100px); */
  /* grid-template: repeat(3, 100px) / repeat(2, 100px); */
  /* grid-template: repeat(3, 100px) / 30% 70%; */
  /* grid-template: repeat(3, 100px) /100px 30% 70%; */
  /* grid-template: repeat(3, 100px) /100px 30fr 70fr; */
  grid-template: 100px auto 100px /30% 70%;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  gap: 10px;
  border: 3px solid lightgrey;
  /* justify-items: center;
  align-items: center; */
  /* justify-content:center;
  align-content: center; */
  /* row-gap: 10px;
  column-gap: 10px; */
}

.box{
  /* height: 5rem;
  width: 5rem; */
  background-color: gold;
}

.box-one{
  /* grid-column: 2; */
  /* grid-column: 1 / 3; */
  /* grid-column: 1 / -1; */
  /* grid-column: 1 / span 2; */
  /* grid-row: 2; */
  /* grid-row: 2 /  span 2; */
  /* row-start / column-start / row-end / column-end */
  /* grid-area: 2 / 1 / 4 / 3; */
  grid-area: header;
}

.box-four{
  grid-area: footer;
}
```

- **行与列定义**

  - **`grid-template-rows`** 和 **`grid-template-columns`**：
    - 定义行高与列宽。
    - 支持固定值（如 `100px`）、百分比（如 `30%`）、弹性单位（如 `1fr`，`1fr`等于余下空间的`1%`）。
    - 支持 `repeat()` 函数简化重复值，如 `repeat(3, 1fr)`。
  - **快捷属性**：`grid-template` 允许同时定义行和列

- **间距**

  - **`row-gap`**：行之间的间距。
  - **`column-gap`**：列之间的间距。
  - **`gap`**（简写）：同时设置行与列间距。

- **项目位置**

  - `grid-row`和`grid-column`：
    - 定义项目在网格中的位置和跨越范围。
    - 格式：`start / end` 或 `span n`（跨越 n 个单元格）。
  - **`grid-area`**：
    - 快捷定义项目位置，格式为 `row-start / column-start / row-end / column-end`。

- **对齐**

  - **单元格内容对齐**：

    - **`justify-items`**：水平对齐（行内对齐）。
    - **`align-items`**：垂直对齐（块级对齐）。
    - **默认值**：`stretch`。即在未设置长/宽时，将拉伸

    **网格整体对齐**：

    - **`justify-content`**：水平对齐整个网格。
    - **`align-content`**：垂直对齐整个网格。

- **模板区域**

  - **定义区域**
    - 使用 `grid-template-areas` 命名区域。
    - 用 `.` 表示空单元格。
  - **分配区域**
    - 使用 `grid-area` 将项目分配到特定区域。

## 隐藏元素

> 在 CSS 中，隐藏元素（Hiding Elements）有两种主要方式：**`display`** 和 **`visibility`**。虽然它们都可以使元素不可见，但它们的行为有所不同，适用于不同的场景。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <p class="first">First</p>
    <p>Second</p>
  </body>
</html>
```

```css
.first {
  /* display: none; */
  visibility: hidden;
}
```

- `display` 和 `visibility` 的区别

  1. **`display: none;`**

     - **效果**：完全隐藏元素，仿佛它从未存在。
     - **行为**：移除元素及其占用的空间。
     - **适用场景**：当你希望完全移除元素并动态调整布局时（例如：菜单切换）。

     **结果**：

     - 第一段文字被移除。
     - 第二段文字会向上移动填补第一段的位置。

  2. **`visibility: hidden;`**

     - **效果**：使元素不可见，但仍保留其占用的空间。
     - **行为**：元素仍在 DOM 中，布局不受影响。
     - **适用场景**：当你需要隐藏元素但保留其占用的空间时（例如：临时隐藏敏感信息）。

     **结果**：

     - 第一段文字不可见。
     - 第一段的空间仍然存在，第二段不会移动。

## 媒体查询

> 媒体查询（Media Queries）允许我们根据设备的特性（如屏幕大小、方向等）为不同设备提供不同的样式，从而构建 **响应式网站**。响应式网站能根据设备屏幕大小调整布局，适配手机、平板和桌面设备。一行的文字量一般最佳为 50-60 字符，即 20 字左右

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <div class="box">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem id
        provident odio deserunt culpa eum aspernatur harum possimus pariatur
        voluptatum. Doloremque nihil dolores eos soluta fugit? Aspernatur beatae
        recusandae hic!
      </div>
      <div class="box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        porro hic facere laudantium similique repellat adipisci quod neque? Sit
        voluptas natus maiores dolores deserunt veritatis tempora quaerat facere
        beatae nihil?
      </div>
    </div>
  </body>
</html>
```

```css
/* 移动端样式 (默认) */
.container {
  display: flex;
  flex-direction: column; /* 垂直布局 */
}

.box {
  padding: 1rem;
  background: gold;
}

/* 第二个盒子样式 */
.box:nth-of-type(2) {
  background: dodgerblue;
}

/* 超过 600px 的屏幕宽度样式 */
@media screen and (min-width: 600px) {
  .container {
    flex-direction: row; /* 水平布局 */
  }
}

/* 超过 900px 的屏幕宽度样式 */
@media screen and (min-width: 900px) {
  .container {
    flex-direction: row;
  }

  .box {
    background: white;
  }
}
```

- 媒体查询语法

  ```css
  @media [媒体类型] and ([条件1]) and ([条件2]) {
    /* 样式规则 */
  }
  ```

- **媒体类型**：

  - `screen`：用于屏幕设备。
  - `print`：用于打印设备。

  **条件**：

  - `min-width`：最小宽度。

  - `max-width`：最大宽度。

  - 多条件使用 `and` 连接。

    ```css
    /* 适用于宽度介于 600px 到 900px 的设备 */
    @media screen and (min-width: 600px) and (max-width: 900px) {
      .container {
        flex-direction: row;
      }
    }
    ```

  - 打印样式示例

    ```css
    @media print {
      body {
        font-size: 12pt; /* 使用打印绝对单位 */
      }
    
      .box {
        padding: 0.5cm; /* 打印中使用厘米单位 */
      }
    }
    ```

## 练习

**布局 1**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <ul>
        <li>About</li>
        <li>Courses</li>
        <li>Forum</li>
        <li>Learning Paths</li>
        <li>Contact</li>
      </ul>
    </div>
  </body>
</html>
```

```css
body {
  margin: 10px;
}

/* 移动端样式 (默认) */
.container {
  display: flex;
  flex-direction: column; /* 垂直布局 */
  background: black;
  color: white;
}

ul {
  display: flex;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

li {
  margin: 20px;
}

/* 超过 768px 的屏幕宽度样式 */
@media screen and (min-width: 768px) {
  ul {
    flex-direction: row;
    justify-content: flex-end;
  }
}
```

**布局 2**

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="gallery">
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
      <img src="images/ChineseGirl2.png" alt=""></img>
    </div>
  </body>
</html>
```

```CSS
body {
  margin: 0px;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr; /* 默认单列布局 */
  gap: 10px; /* 图片间距 */
  padding: 10px;
}

.gallery img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10%; /* 可选：为图片加圆角 */
}

/* 平板及更大屏幕的样式 */
@media (min-width: 768px) {
  .gallery {
      grid-template-columns: repeat(2, 1fr); /* 平板端三列布局 */
  }
}

/* 桌面样式 (1024px 及以上) */
@media (min-width: 1024px) {
  .gallery {
      grid-template-columns: repeat(3, 1fr); /* 桌面端三列布局 */
  }
  .gallery img:first-child {
    /* 第一张图片占右上四个方块 */
    grid-area: 1 / 2 / 3 / 4;
  }
}
```

# 文字排版

## **字体类别**

> CSS 中的 `font-family` 属性可以用来设置元素的字体，从而改变其外观。字体主要分为以下三大类：
>
> 1. **Serif（衬线字体）**：
>    - 特点：字符末端有小线条或笔画。
>    - 应用场景：书籍、报纸、杂志等正式和传统的内容。
>    - 示例：Times New Roman, Georgia, Garamond。
> 2. **Sans-serif（无衬线字体）**：
>    - 特点：字符末端没有额外线条，外观简洁、现代。
>    - 应用场景：网页、广告、简约设计。
>    - 示例：Arial, Helvetica, Roboto, Avenir。
> 3. **Monospace（等宽字体）**：
>    - 特点：所有字符的宽度都完全相等。
>    - 应用场景：显示代码、表格等对齐要求严格的内容。
>    - 示例：Courier, Consolas, Menlo。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      voluptatem quasi soluta, magni odit nisi tempore. Molestias impedit
      voluptatibus ducimus fugiat ipsam reiciendis nostrum dicta? Doloribus
      voluptate at temporibus harum totam mollitia iste sapiente, pariatur
      eveniet perferendis quis dignissimos sed quidem omnis? Dolores maxime
      eaque veniam, beatae quia odit numquam!
    </p>
    <a href="#">Link</a>
  </body>
</html>
```

```css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      voluptatem quasi soluta, magni odit nisi tempore. Molestias impedit
      voluptatibus ducimus fugiat ipsam reiciendis nostrum dicta? Doloribus
      voluptate at temporibus harum totam mollitia iste sapiente, pariatur
      eveniet perferendis quis dignissimos sed quidem omnis? Dolores maxime
      eaque veniam, beatae quia odit numquam!
    </p>
    <a href="#">Link</a>
  </body>
</html>
```

- `font-family` 设置字体：如`font-family: Arial, Helvetica, sans-serif;`
  - 字体堆栈：`Arial, Helvetica, sans-serif` 是一个字体堆栈，浏览器会依次检查字体是否可用，通常将一个通用字体（如 `sans-serif`）作为最后的备选
- `font-weight`字体粗细：数值范围：`100` (极细) 到 `900` (极粗)。

  - 关键字：`normal`, `bold`, `bolder`, `lighter`。

- `font-style`字体样式：用于设置字体的样式，如斜体。
  - 值：`normal`, `italic`, `oblique`。
- `font-size`字体大小：
  - 绝对值：如 `16px`，`30px`。
  - 相对值：如 `1em`，`1rem`。
- 字体颜色 (`color`)：
  - 可以使用名称、十六进制、RGB 或 HSL 值。
  - 十六进制（6 位数字）时，若前 3 位和后 3 位完全相同，可只写前三位
  - 正文和标题颜色最好区分开，正文不应设置纯黑，建议 333
- 字体继承与优化：
  - 继承：
    - 字体相关属性（如 `font-family`, `font-size`）可以被子元素继承。
    - 示例：通过设置 `body` 的字体，全局生效。
  - 避免代码重复：
    - 避免为每个元素单独定义字体规则。
    - 使用继承机制保持一致性。

## 网页内嵌字体

> 在现代网页设计中，我们可以使用自定义字体来替代传统的 Web 字体（如 Arial、Times New Roman）。自定义字体为网页设计提供了更广泛的选择，可以提升网页的视觉效果。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      voluptatem quasi soluta, magni odit nisi tempore. Molestias impedit
      voluptatibus ducimus fugiat ipsam reiciendis nostrum dicta? Doloribus
      voluptate at temporibus harum totam mollitia iste sapiente, pariatur
      eveniet perferendis quis dignissimos sed quidem omnis? Dolores maxime
      eaque veniam, beatae quia odit numquam!
    </p>
    <a href="#">Link</a>
  </body>
</html>
```

```css
@font-face {
  font-family: "opensans";
  src: url("/fonts/open-sans/opensans-bold-webfont.woff2") format("woff2"), url("/fonts/open-sans/opensans-bold-webfont.woff")
      format("woff");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "opensans";
  src: url("/fonts/open-sans/opensans-regular-webfont.woff2") format("woff2"), url("/fonts/open-sans/opensans-regular-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 10px;
  font-family: "opensans", Arial, Helvetica, sans-serif;
}

h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

p {
  /* font-weight: bold; */
  font-weight: normal;
  font-style: italic;
  font-size: 1rem;
  color: #333;
}
```

- 获取字体：字体网址下载如：https://www.fontsquirrel.com

- 字体格式：ttf 可转 woff、woff2

  - Web：WOFF、WOFF2.0，其体量小
  - 其他：TTF、OTF、EOT、

- 字体文件夹：一般为字体专门建一个目录，并为每一种字体单独建一个目录

- 注册字体：若使用 Webfont Generator，会自动生成存在对应代码的 css 文件，如

  ```css
  @font-face {
    font-family: "opensans";
    src: url("/fonts/open-sans/opensans-bold-webfont.woff2") format("woff2"), url("/fonts/open-sans/opensans-bold-webfont.woff")
        format("woff");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "opensans";
    src: url("/fonts/open-sans/opensans-regular-webfont.woff2") format("woff2"),
      url("/fonts/open-sans/opensans-regular-webfont.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  ```

  - 这里 format 指匹配，若匹配 woff 则下载第一个 url，若不匹配 woff2 匹配 woff 则下载第二个 url
  - `font-weight`以及`font-style`默认都是 normal，需要自己调整，比如将粗体对应字体设置为`bold`

- 使用自定义字体：在需要使用字体的元素上设置 `font-family`

## 无样式字体闪烁

> 无样式字体闪烁，这 Flash Of Unstyled Text，浏览器下载自定义字体时，会临时显示回退字体（fallback font）。加载完成后，字体发生变化。可能导致布局变化，用户体验较差。不同字体的字符宽度和高度可能不同。从回退字体切换到自定义字体时，可能导致页面元素位置变化，打断用户的阅读体验。
>
> 若设置不可见字体闪烁，一些浏览器在字体下载期间会隐藏文本，直到自定义字体加载完成，如果字体因网络问题未加载，文本可能始终不可见。
>
> 补充：无样式内容闪烁，即 Flash of Unstyled Content，FOUC
>
> 是指**在网页加载过程中，用户可能会短暂地看到未应用样式的原始 HTML 内容，随后样式表加载完成后，页面才会以正确的样式重新渲染**。 这种现象会影响用户体验，显得页面加载不连贯和不专业。
>
> 无样式字体闪烁、无样式内容闪烁无法彻底消除，只能尽量避免

代码：html 同上

```css
@font-face {
  font-family: "opensans";
  src: url("/fonts/open-sans/opensans-bold-webfont.woff2") format("woff2"), url("/fonts/open-sans/opensans-bold-webfont.woff")
      format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: fallback;
}

@font-face {
  font-family: "opensans";
  src: url("/fonts/open-sans/opensans-regular-webfont.woff2") format("woff2"), url("/fonts/open-sans/opensans-regular-webfont.woff")
      format("woff");
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 10px;
  font-family: "opensans", Arial, Helvetica, sans-serif;
}

h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

p {
  font-weight: normal;
  font-size: 1rem;
  color: #333;
}
```

- 演示无样式内容闪烁：
  - Chrome 开发者工具——Network 标签——设置 DisableCache——设置 Slow4G/3G——刷新页面
- **`font-display: `**：在 `@font-face` 规则中使用 `font-display` 属性，可以控制字体加载期间的行为。以下是可选的值：

  - **`swap`（推荐）**：
    - 在加载自定义字体前，优先显示回退字体，字体加载完成后进行替换。
    - 优点：确保文本始终可见。字体切换不会延迟文本渲染。
    - 缺点：如果字体加载较慢，仍可能导致布局变化。
  - **`fallback`**：起初显示回退字体，提供一个短暂的加载窗口（如 3 秒）供字体下载。如果字体未在窗口期内加载完成，将继续使用回退字体。
    - 优点：减少长时间延迟和布局变化。
    - 缺点：在慢速网络下，自定义字体可能不会显示。
  - **`optional`**：类似于 `fallback`，但将自定义字体视为非必要。若在短时间内未加载，自定义字体将不会替换回退字体。在后续访问页面时，浏览器从缓存中加载字体。
    - 优点：无明显的布局变化。
    - 缺点：自定义字体在首次加载时不会显示。
  - **`block`（不推荐）**：文本在字体加载前保持隐藏。
    - 缺点：如果字体加载失败，文本将始终不可见，严重影响用户体验。

- 减少页面闪烁方法：
  - 之前 Squirrel 上的 Web 字体生成器时，我们使用最佳设置，这里有专家设置，可以使用来减小字体大小，减少用不到的字符（如特殊符号或语言字符），从而减少体量，提升载入速度
  - 确保字体规则位于 CSS 顶部，优先加载。

## 字体服务-谷歌

> https://fonts.google.com/
>
> - 根据筛选条件搜寻字体，这里我选择了 Roboto、Open Sans
> - 搜索到之后，点击 Get font，将字体加入购物袋
> - 选择完毕之后，点击购物袋，有两种方式存储
>   - 下载到本地：之前的章节已经讲过
>   - 获取内嵌链接：链接如下面代码中的前 3 个 link
>     - 第一个 link：告诉浏览器提前与 `https://fonts.googleapis.com` 域建立连接（DNS 查询、TLS 握手）。通过预连接减少延迟，加快后续字体文件加载速度。`rel="preconnect"` 不加载资源，只建立连接。
>     - 第二个 link：同样是预连接，但指定了 `crossorigin` 属性，允许浏览器与 `https://fonts.gstatic.com` 域建立跨域连接。这是因为 `https://fonts.gstatic.com` 用于存储字体文件（如 `.woff2` 格式），需要跨域请求。`fonts.gstatic.com` 是 Google 提供的全球内容分发网络（CDN），通过预连接可加速字体加载。
>     - 第三个 link：加载 Google Fonts 提供的 CSS 文件。
>       - 格式：`https://fonts.googleapis.com/css2?family=<字体1>&family=<字体2>&display=<策略>`
>       - 策略可以手动更改

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      voluptatem quasi soluta, magni odit nisi tempore. Molestias impedit
      voluptatibus ducimus fugiat ipsam reiciendis nostrum dicta? Doloribus
      voluptate at temporibus harum totam mollitia iste sapiente, pariatur
      eveniet perferendis quis dignissimos sed quidem omnis? Dolores maxime
      eaque veniam, beatae quia odit numquam!
    </p>
    <a href="#">Link</a>
  </body>
</html>
```

```CSS
body {
  margin: 10px;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
}

h1 {
  font-family: 'Roboto' Georgia, 'Times New Roman', Times, serif;
}

p{
  font-weight: normal;
  font-size: 1rem;
  color: #333;
}
```

## 系统字体栈

> **系统字体栈**是一种在 CSS 中指定字体的方法，浏览器使用用户操作系统的默认系统字体进行显示，而不需要加载额外的字体文件。这种方法有其独特的优势和局限性。如果介意字体在不同的计算机上看起来有所不同，只是想为用户提供最佳体验，那么可能要考虑使用系统字体样式。
>
> **系统字体栈的优势**
>
> 1. **性能优化**：
>    - 无需下载字体文件，减少页面加载时间。
>    - 避免 **无样式字体闪烁（FOUT）** 或 **不可见字体闪烁（FOIT）** 的问题。
> 2. **用户熟悉度高**：
>    - 使用用户操作系统中默认的字体，用户习惯性地感到熟悉和舒适。
>    - 提升用户体验。
> 3. **外观现代**：
>    - 系统字体通常设计现代、清晰且美观，特别适合不同屏幕的显示效果。
>
> **系统字体栈的局限性**
>
> 1. **外观一致性问题**：
>    - 不同操作系统默认的字体不同，字体样式在设备间可能存在较大差异。
>      - **MacOS**：现代版本使用 **San Francisco**，较旧版本使用 **Helvetica Neue**。
>      - **Windows**：使用 **Segoe UI**。
>      - **Android**：使用 **Roboto**。
>      - **Linux**：字体因发行版和设置而异。
>    - 结果：同一网站在不同设备上字体外观可能不一致。
> 2. **缺乏完全控制**：
>    - 字体样式取决于用户设备，开发者无法确保完全一致的设计风格。

代码：

```css
body {
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

p {
  /* font-weight: bold; */
  font-weight: normal;

  /* font-style: italic; */

  font-size: 1rem;

  color: #000;
}
```

- `font-family`：浏览器会按照从左到右的顺序尝试使用字体
  - **`system-ui`**：表示系统的用户界面字体（UI 字体）。它会选择当前操作系统中用于显示系统界面的默认字体（类似于 -apple-system 的功能，但更通用）。在不同操作系统上的具体表现：
    - MacOS：`San Francisco`
    - Windows：`Segoe UI`
    - Android：`Roboto`
    - Linux：视具体发行版而定。
  - **`-apple-system`**：Apple 系统上的专用字体关键词，表示 iOS 和 MacOS 的系统字体。通常映射到 **San Francisco**（现代 Mac 和 iOS 上的默认字体）。
  - **`BlinkMacSystemFont`**：适用于 Blink 引擎的浏览器（如 Chrome、Edge）在 MacOS 上使用的系统字体。作用类似于 `-apple-system`。
  - **`'Segoe UI'`**：Windows 操作系统的默认界面字体。用于大多数 Windows 应用和现代 UI 界面。
  - **`Roboto`**：Android 系统的默认字体。设计现代、简洁，是许多安卓设备和应用程序的标准字体。
  - **`Oxygen`** 和 **`Ubuntu`**：这两个字体是针对 Linux 系统设计的字体：`Oxygen`：KDE 桌面环境的默认字体。`Ubuntu`：Ubuntu 操作系统的默认字体。
  - **`Cantarell`**：GNOME 桌面环境的默认字体（常用于 Fedora 等 Linux 发行版）。
  - **`'Open Sans'`**：一种流行的免费网络字体，设计现代，适用于无衬线风格。如果系统字体不可用，`Open Sans` 是一个美观的替代选择。
  - **`'Helvetica Neue'`**：较旧版本 MacOS 系统的默认字体。一种经典的无衬线字体，设计简洁但略显传统。
  - **`sans-serif`**：通用字体族，表示所有无衬线字体。如果以上所有字体都不可用，浏览器将回退到操作系统中定义的默认无衬线字体。

## 字体大小

> `font-size`**不要使用 `px`** 设置字体大小，尽量使用 `rem` 或 `%`。因为不同的用户使用的设备不同。
>
> 试着使用：https://typescale.com，调整字体大小
>
> **绝对单位 vs 相对单位**
>
> - 绝对单位（如 `px`）的问题：
>   - **不一致性**：例如，Apple 的 Retina 显示技术会使像素更小，从而让字体在 Mac 或 iPhone 上看起来更小。
>   - **不灵活**：在不同设备上，像素的显示效果可能不一致。
> - 相对单位（如 `rem` 和 `%`）的优势：
>   - **适应性强**：根据用户或设备的默认设置调整字体大小。
>   - **响应式设计**：可以轻松地在不同屏幕尺寸间调整字体大小。

代码

```css
body {
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

h1 {
  font-size: 2.986rem;
}

h2 {
  font-size: 2.488rem;
}

h3 {
  font-size: 2.074rem;
}

h4 {
  font-size: 1.728rem;
}

h5 {
  font-size: 1.44rem;
}

h6 {
  font-size: 1.2rem;
}

/* 响应式设置 */
@media screen and (min-width: 400px) {
  html {
    font-size: 80%; /* 16px × 0.8 = 12.8px */
  }
}

@media screen and (min-width: 800px) {
  html {
    font-size: 100%; /* 16px */
  }
}
```

## 垂直间距

> 此前的章节我们了解了字体样式的必要知识，接下来我们将讨论文本样式
>
> 在网页设计中，垂直间距（Vertical Rhythm）是决定文本间距是否美观的重要因素。有两个重要影响因素：`margin`边距、`line-height`行高
>
> **Law of Proximity（邻近原则）**
>
> - **定义**：邻近原则是设计中一种心理学规律。**靠得更近的对象会被认为是相关的**。
> - **应用**：
>   - **标题与段落**：标题的顶部间距应大于底部间距，使标题显得与其后段落更紧密相关，而非前段内容。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      voluptatem quasi soluta, magni odit nisi tempore. Molestias impedit
      voluptatibus ducimus fugiat ipsam reiciendis nostrum dicta? Doloribus
      voluptate at temporibus harum totam mollitia iste sapiente, pariatur
      eveniet perferendis quis dignissimos sed quidem omnis? Dolores maxime
      eaque veniam, beatae quia odit numquam!
    </p>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      voluptatem quasi soluta, magni odit nisi tempore. Molestias impedit
      voluptatibus ducimus fugiat ipsam reiciendis nostrum dicta? Doloribus
      voluptate at temporibus harum totam mollitia iste sapiente, pariatur
      eveniet perferendis quis dignissimos sed quidem omnis? Dolores maxime
      eaque veniam, beatae quia odit numquam!
    </p>
  </body>
</html>
```

```css
html {
  /* font-size: 62.5%; */
}

body {
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

h1 {
  margin: 3rem 0 1rem;
}
```

- `margin: 3rem 0 1rem`：
  - 将标题与上方段落分隔开，让标题更贴近其下方段落，符合邻近原则，使用 `rem` 确保响应式设计，间距相对于根元素字体大小变化
- `line-height: 1.5`：
  - 通常将 `line-height` 设置为 **字体大小的 1.5 倍**
  - 避免直接使用像素值，建议使用无单位的倍数值

## 水平间距

> 在网页设计中，水平间距对于提升文本的可读性和美观性至关重要。本节将讨论 **`letter-spacing字符间距`**、**`word-spacing单词间距`**和 **`width行宽`** 三个属性的应用。

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      voluptatem quasi soluta, magni odit nisi tempore. Molestias impedit
      voluptatibus ducimus fugiat ipsam reiciendis nostrum dicta? Doloribus
      voluptate at temporibus harum totam mollitia iste sapiente, pariatur
      eveniet perferendis quis dignissimos sed quidem omnis? Dolores maxime
      eaque veniam, beatae quia odit numquam!
    </p>
  </body>
</html>
```

```CSS
html {
  /* font-size: 62.5%; */
}

body {
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 1px;
  word-spacing: 5px;
}

h1 {
  margin: 3rem 0 1rem;
}

p {
  width: 50ch;
}
```

- 字符间距`letter-spacing`

  - 作用：调整文本中 **字母之间的间距**。

  - 单位：

    - 推荐使用 **像素（px）**，因为 **rem** 通常会导致字母间距过大。

    - 也可使用负值缩小字母间距，适用于标题等场景。

- 单词间距`word-spacing`

  - 作用：调整文本中 **单词之间的间距**。
  - 单位：推荐使用 **像素（px）**。
  - 单词间距通常适用于段落级别的文本。

- 行宽`width` 与 `ch`

  - 作用：为段落设置理想的行宽（即一行的字符数），提升阅读体验。
  - 理想行宽：研究表明，**50 到 70 个字符**是最适合阅读的行宽。
  - 单位：
    - **`ch`**：CSS 中的相对单位，等于 **“0”字符的宽度**。
    - **`50ch`**：约等于 **60-70 个字符**。

## 文本格式化

> 在文本设计中，格式化是优化内容展示的重要环节。本节将讨论以下几个属性/概念的应用。
>
> - `text-align`：控制文本的水平对齐方式。
> - `text-indent`：为段落的首行添加缩进。
> - `text-decoration`：设置文本的装饰线，如下划线、删除线等。
> - `text-transform`转换文本的大小写格式。
> - `white-space`：控制文本换行和空白处理。
> - `column-*`：限制文本显示的行数、实现多列文本布局。
> - `direction`：设置文本书写方向。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>Heading</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate illo,
      enim repudiandae error at modi nihil iusto commodi aut voluptates rem
      similique, consequatur voluptatum temporibus aspernatur molestiae voluptas
      eius earum omnis non fugit officia quam aliquid? Assumenda nihil debitis
      ab? Dolor expedita repudiandae asperiores. At pariatur eos beatae labore.
      Provident.
    </p>
    <p>
      在初秋的夜色中行走，风吹动了少年的涟漪，发丝凌乱。看霓虹灯火下舞动的人群，听绿林中偶有的叶落声，每一片落叶都是一首长情的小诗，每一次飞舞都是一场极尽美丽的表演。落叶和满地的飞花也不定然是诗人笔下的惆怅，月色朦胧，篱笆沉默，自翡翠枝叶下涌起暗香的桂花，开得羞涩，一步一朵，一句一朵。我把它看作一种定数，一种万物消长的律动，叙写的是十里飘香的绵长。
    </p>
  </body>
</html>
```

```css
html {
  /* font-size: 62.5%; */
}

body {
  margin: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 1px;
  word-spacing: 5px;
  /* direction: rtl; */
}

h1 {
  margin: 3rem 0 1rem;
}

p {
  width: 50ch;
  /* text-align: left; */
  text-decoration: underline;
  text-transform: capitalize;
  /* white-space: nowrap; */
  border: 3px solid dodgerblue;
  overflow: hidden;
  text-overflow: ellipsis;
  /* column-count: 2;
  column-gap: 2rem;
  column-rule: 3px dotted dodgerblue; */
  /* direction: rtl; */
  /* writing-mode: vertical-lr; */
}

p + p {
  text-indent: 2rem;
}
```

- **文本对齐（`text-align`）**

- **功能**：控制文本的水平对齐方式。
- **可选值**：
  - **`left`**（默认）：左对齐。
  - **`right`**：右对齐。
  - **`center`**：居中对齐。
  - **`justify`**（不推荐）：两端对齐，可能会导致单词之间出现大块空白。
- **首行缩进（`text-indent`）**
- **功能**：为段落的首行添加缩进。
- **单位**：通常使用 `rem` 或 `em`。
- 补充：`p+p{}`为关系选择器中的相邻兄弟选择器
- **文本装饰（`text-decoration`）**
- **功能**：设置文本的装饰线，如下划线、删除线等。
- **可选值**：
  - **`none`**（默认）：无装饰。
  - **`underline`**：添加下划线。
  - **`line-through`**：添加删除线。
- **文本转换（`text-transform`）**
- **功能**：转换文本的大小写格式。
- **可选值**：
  - **`capitalize`**：每个单词的首字母大写。
  - **`uppercase`**：所有字母大写。
  - **`lowercase`**：所有字母小写。
- **文本换行与截断**
- `white-space`：

  - **功能**：控制文本换行和空白处理。
  - **可选值**：
    - **`normal`**（默认）：正常换行。
    - **`nowrap`**：禁止换行。

- **`overflow` 与 `text-overflow`**
  - **功能**：处理溢出文本，显示省略号等。
  - **步骤**：
    1. 设置固定宽度：`width: 50ch;`
    2. 禁止换行：`white-space: nowrap;`
    3. 隐藏溢出内容：`overflow: hidden;`
    4. 显示省略号：`text-overflow: ellipsis;`
- **多列布局**

  - **功能**：实现多列文本布局。
  - **属性**：
    - **`column-count`**：列数。
    - **`column-gap`**：列间距。
    - **`column-rule`**：列间线。

- **文字方向**
  - `direction`
    - **功能**：设置文本书写方向。
    - **可选值**：
      - **`ltr`**（默认）：从左到右。
      - **`rtl`**：从右到左。
  - `writing-mode`（补充）
    - **功能**：可以实现从上到下的文字方向，同时可以指定列的排列方向
    - **可选值**：
      - `vertical-rl`：从上到下，并从右到左排列列。
      - `vertical-lr`：从上到下，并从左到右排列列。

# 图像

## 图像类型和格式

> 在计算机中，图像分为两种主要类型：**光栅图像（Raster Images）** 和 **矢量图像（Vector Images）**。

1. 光栅图像（Raster Images）

- 特点：

  - 由像素（Pixels）组成，每个像素都有特定颜色值。
  - 常用于照片、扫描图像等。
  - **放大后会失真**，因为放大时像素被拉伸。

- 常见格式：
  - JPEG（.jpg / .jpeg）：
    - 支持 1,600 万种颜色，适合复杂细节和高质量图片。
    - 不支持透明背景。
    - 主要用于照片和复杂图像。
  - PNG（.png）：
    - 支持 1,600 万种颜色。
    - 支持透明背景。
    - 适合需要透明度或高质量的图像。
  - GIF（.gif）：
    - 仅支持 256 种颜色。
    - 支持透明背景。
    - 适用于简单图像和短动画。
  - WebP（.webp）：
    - **现代格式**，文件尺寸更小，支持透明背景和动画。
    - 不支持 Internet Explorer。
    - 覆盖率达 **90%**，适合现代浏览器。

2. 矢量图像（Vector Images）

- 特点：
  - 由数学向量定义（如线条、曲线）。
  - **无论放大多少倍，始终保持清晰锐利**。
  - 常用于图标、标志（Logo）、插图等。
- 常见格式：
  - SVG（Scalable Vector Graphics）：
    - 可扩展矢量图形格式。
    - 支持透明背景。
    - 适用于现代网页图形设计。

**光栅图像与矢量图像的对比**

| 特性         | 光栅图像             | 矢量图像         |
| ------------ | -------------------- | ---------------- |
| **组成**     | 像素                 | 数学向量         |
| **放大效果** | 放大会失真           | 始终清晰锐利     |
| **文件格式** | JPEG, PNG, GIF, WebP | SVG              |
| **适用场景** | 照片、复杂图像       | 图标、Logo、插图 |
| **文件大小** | 随分辨率增加而增大   | 通常更小         |

**图像格式的具体特性**

| 格式     | 颜色支持   | 透明支持 | 动画支持 | 优势                                   | 劣势                     |
| -------- | ---------- | -------- | -------- | -------------------------------------- | ------------------------ |
| **JPEG** | 1,600 万   | 不支持   | 不支持   | 文件小，适合照片和复杂图像             | 不支持透明，动画不适用   |
| **PNG**  | 1,600 万   | 支持     | 不支持   | 透明支持，适合高质量或需透明背景的图像 | 文件相对较大             |
| **GIF**  | 256 种颜色 | 支持     | 支持     | 适合简单图像和短动画                   | 颜色受限，不适合复杂图像 |
| **WebP** | 1,600 万   | 支持     | 支持     | 文件小，支持透明和动画，适合现代网页   | 不支持 Internet Explorer |
| **SVG**  | 无限       | 支持     | 不支持   | 矢量图像，缩放清晰锐利，文件小         | 不适合复杂或写实图像     |

## 内容图片

> HTML 中存在两类图片：内容图片与背景图片
>
> 内容图片（Content Images）是网页中直接用来展示信息或内容的图片，通常通过 `<img>` 元素插入。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div>
      <img class="meal" src="images/meal.jpg" alt="A bow of salmon and curry" />
    </div>
  </body>
</html>
```

```css
body {
  margin: 10px;
}
.meal {
  width: 100vh;
}
```

- `img`：
  - `src` 属性：指定图片的路径。
  - `alt` 属性：
    - 可访问性：帮助视障人士通过屏幕阅读器了解图片内容。
    - 备用文本：当图片因网络或其他原因无法加载时，显示的文本。
    - **避免省略 `alt` 属性**，否则屏幕阅读器会读出文件名（如 `line.jpg`），可能不准确或冗长
- 图片分辨率与大小
  - 问题：如果图片原始分辨率较低，而在网页上放大显示，会导致图片模糊。
  - 解决方法：使用原始分辨率更高的图片，或考虑使用矢量图（SVG）来处理非照片的图片。注意 SVG 不适合用于照片，因其复杂的数学定义不适合表达照片中的细节。

## 背景图片

> 背景图片是 HTML 和 CSS 中一种常用的装饰元素，用于增强网页视觉效果。背景图片通常应用于 `body`、`header`或 `section` 等容器元素。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <h1>MY Heading</h1>
  </body>
</html>
```

```css
body {
  /* background: url(../images/bg-paper.jpg); */
  /* background: url(../images/bg-paper@2x.jpg); */
  background: url(../images/bg-sanfrancisco.jpg);
  background-repeat: no-repeat;
  /* background-position: -100px 100px; */
  /* background-size: 100% 100%; */
  background-size: cover;
  background-attachment: fixed;
  height: 300vh;
}
```

- `background` 简写属性，可以同时设置背景颜色、图片、重复方式、位置、大小等，但可读性低。

  ```css
  background: url(../images/bg-paper.jpg) no-repeat center/cover;
  ```

  - `background-color`：背景颜色。
  - `background-image`：背景图片。
  - `background-repeat`：背景重复方式。
  - `background-position`：背景位置。
  - `background-size`：背景大小。

- 背景图片相关属性

  - `background-image`：用于指定背景图片的路径。
  - `background-repeat`决定背景图片是否重复，以及如何重复。
    - `repeat`：水平和垂直方向都重复（默认值）。
    - `repeat-x`：仅水平重复。
    - `repeat-y`：仅垂直重复。
    - `no-repeat`：不重复。
  - `background-position`：控制背景图片的位置
    - 使用关键字：`top left`, `center center` 等。
    - 使用单位：`100px 200px`, `50% 50%`。
  - `background-size`：控制背景图片的尺寸。
    - 固定值：如`200px 100px`。
    - 相对值：如`100%`（相对于容器大小）。
    - 关键字：
      - `cover`：保持图片比例，覆盖整个容器。
      - `contain`：保持图片比例，完全显示图片。
  - `background-attachment`：控制背景图片的滚动行为。
    - `scroll`（默认）：背景图片随页面滚动。
    - `fixed`：背景图片固定，不随页面滚动。

## CSS Sprites 技术

> CSS Sprites 是一种将多个小图片合并成一个大图片，然后通过 CSS 控制显示特定部分的小图片的技术。这种方法可以减少 HTTP 请求的数量，从而提升网页的加载速度。
>
> 多个小图片需要发送多个请求，而将小图片合成后，对于小图片，只用发送一个请求，一般通过工具来完成小图片合成。
>
> SVG 图片也可以使用该技术：https://svgsprit.es/

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- <img src="images/dishes.png" alt="" />
    <img src="images/landing.png" alt="" />
    <img src="images/rocketship.png" alt="" />
    <img src="images/saturn.png" alt="" />
    <img src="images/ufo.png" alt="" /> -->
    <span class="pg-dishes"></span>
    <span class="pg-landing"></span>
    <span class="pg-rocketship"></span>
    <span class="pg-saturn"></span>
    <span class="pg-ufo"></span>
  </body>
</html>
```

```css
.pg-dishes {
  background: url("../images/css-sprite-combined.png") 0px -0px;
  width: 100px;
  height: 100px;
  display: inline-block;
}

.pg-landing {
  background: url("../images/css-sprite-combined.png") -100px -0px;
  width: 100px;
  height: 100px;
  display: inline-block;
}

.pg-rocketship {
  background: url("../images/css-sprite-combined.png") -200px -0px;
  width: 100px;
  height: 100px;
  display: inline-block;
}

.pg-saturn {
  background: url("../images/css-sprite-combined.png") -300px -0px;
  width: 100px;
  height: 100px;
  display: inline-block;
}

.pg-ufo {
  background: url("../images/css-sprite-combined.png") -400px -0px;
  width: 100px;
  height: 100px;
  display: inline-block;
}
```

- 操作：

  1. 将图片拖拽到读取窗口中，
  1. 选择图片格式，设置前缀，前缀控制了生成的 css 文件中，每个图片 class 的前缀
  1. 点击生成，下载，会生成 css 文件和图片
  1. 将图片放入素材库，拷贝 css 文件代码
  1. 修改 css 中 url 路径
  1. 需要展示图片，使用`span.class=xxx`

- 优点

  1. 减少 HTTP 请求：
     - 将多个小图片合并成一个文件，加载时仅需一次 HTTP 请求。
     - 适合高并发场景，有助于减少服务器压力。
  2. 提升性能：
     - 减少网络延迟，优化网页加载速度。
  3. 统一管理：
     - 将所有图标集中到一个文件，便于维护。

- 局限性
  1. 不适合大型图片：
     - 大型图片（如照片）不适合合并，会导致 Sprite 文件体积过大，影响加载性能。
  2. 灵活性较差：
     - 如果需要更换其中某个图片，需重新生成整个 CSS Sprite。

## 嵌入式图像技术

> **Data URLs** 是一种将图像等二进制数据直接嵌入到 HTML 或 CSS 文档中的技术，通过减少 HTTP 请求的数量来优化网页加载速度。
>
> Data URLs 也叫 Data URIs

- 操作：

  1. 将图片拖拽到读取窗口中
  2. 拷贝 Image Tag 内的代码
  3. 粘贴到对应位置

- **优点**

  1. 减少 HTTP 请求：多个小图像嵌入 HTML 或 CSS 后，省去了单独的 HTTP 请求，优化了加载速度。
  2. 零加载时间：图像嵌入后，直接从内存加载，减少延迟。
  3. 适用于小型资源：对于小型图标或装饰性图片，这种技术非常高效。

- ### **缺点**

  1. 文件体积增大：Base64 编码后的 Data URL 通常比原始文件体积大约 **30%**。
  2. 代码可读性差：长串字符嵌入代码中，增加了 HTML 或 CSS 的复杂度，降低可读性和维护性。
  3. 替换不便：替换图片需重新生成 Data URL，增加了开发工作量。
  4. 移动设备性能：在移动设备上，Data URLs 渲染速度可能慢于直接加载外部图片。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <img
      alt="ufo.png"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFGmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMTAtMDdUMDY6NDA6MjYtMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTEyLTA2VDEwOjE2OjA0LTA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEyLTA2VDEwOjE2OjA0LTA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM3M2JmNGYwLTMxNzAt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"
    />
  </body>
</html>
```

## CSS 裁剪

> CSS 中的裁剪(Clipping)功能可以通过 `clip-path` 属性显示元素的指定部分，将其他部分隐藏。这个功能通常用于图像裁剪，但也可以应用于任何 HTML 元素。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <img src="images/meal.jpg" alt="" class="meal" />
  </body>
</html>
```

```css
.meal {
  clip-path: polygon(
    0% 20%,
    60% 20%,
    60% 0%,
    100% 50%,
    60% 100%,
    60% 80%,
    0% 80%
  );
}
```

- 操作：

  1. 网站找到对应样式，复制代码
  2. 将代码粘贴到 css 文件中

## CSS 中的图像滤镜

> CSS 提供了多种图像滤镜（Filters），可以直接在浏览器中动态调整图片的显示效果，而无需借助 Photoshop 等图像编辑工具。这些滤镜功能非常强大，适合应用于创意设计、交互效果等场景。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <img src="images/pineapple.jpg" alt="" class="meal" />
    <img class="blur" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="brightness" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="contrast" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="grayscale" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="huerotate" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="invert" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="opacity" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="saturate" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="sepia" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="shadow" src="images/pineapple.jpg" alt="Pineapple" />
    <img class="hover" src="images/pineapple.jpg" alt="" class="meal" />
  </body>
</html>
```

```css
img {
  width: 33.33%;
  height: auto;
  float: left;
}
.blur {
  filter: blur(4px);
}
.brightness {
  filter: brightness(0.3);
}
.contrast {
  filter: contrast(180%);
}
.grayscale {
  filter: grayscale(100%);
}
.huerotate {
  filter: hue-rotate(180deg);
}
.invert {
  filter: invert(100%);
}
.opacity {
  filter: opacity(50%);
}
.saturate {
  filter: saturate(7);
}
.sepia {
  filter: sepia(100%);
}
.shadow {
  filter: drop-shadow(8px 8px 10px green);
}
.hover:hover {
  filter: blur(10px) brightness(1.5);
}
```

- CSS 中的 `filter` 属性支持以下常见滤镜功能：

| 滤镜函数        | 描述                                  | 参数值范围                                  |
| --------------- | ------------------------------------- | ------------------------------------------- |
| `grayscale()`   | 转为灰度图像（黑白效果）。            | `0%`（无灰度）到 `100%`（完全灰度）。       |
| `blur()`        | 添加模糊效果。                        | 像素值（如 `5px`）。                        |
| `contrast()`    | 调整对比度。                          | `0%`（无对比）到 `100%` 或更高。            |
| `brightness()`  | 调整亮度。                            | `0%`（全黑）到 `100%` 或更高。              |
| `saturate()`    | 调整饱和度。                          | `0%`（无色）到 `100%` 或更高。              |
| `sepia()`       | 添加复古棕色效果。                    | `0%` 到 `100%`。                            |
| `invert()`      | 反转颜色。                            | `0%` 到 `100%`。                            |
| `hue-rotate()`  | 调整色调。                            | 角度值（如 `90deg`）。                      |
| `drop-shadow()` | 为元素添加阴影（类似 `box-shadow`）。 | 格式：`offset-x offset-y blur-radius color` |

- 多个滤镜可以组合使用，使用空格分隔。
- 使用伪类（如 `:hover`）或 JavaScript，可以实现动态效果。

- 浏览器兼容性：大部分现代浏览器（包括 Chrome、Firefox、Edge 等）都支持 CSS 滤镜，使用工具-查看浏览器区别。

## 高密度屏幕与优化

> 高密度屏幕（如 Retina 显示屏）引入了设备像素比（Device Pixel Ratio, DPR），用于描述设备的物理像素与逻辑像素的比例。为了解决图像在高密度屏幕上显示模糊的问题，需要提供多种分辨率的图片版本。
>
> **基本概念**
>
> 1. **物理分辨率**：实际屏幕上的像素数量。例如，iPhone 4 的物理分辨率为 `480x320`，iPhone 4 的物理分辨率为 `960x640`。
> 2. **逻辑分辨率**：CSS 和开发者通常基于逻辑像素操作。例如，iPhone 3、4 的逻辑分辨率均为 `480x320`。
> 3. **设备像素比（DPR）**：定义物理像素与逻辑像素的比率。如 iPhone 4 的 DPR = 2x，意味着每个逻辑像素由 2×2 个物理像素表示。而 iPhone 4 的 DPR = 1x。
>
> **问题与解决方案**
>
> - **问题**：当图片的逻辑尺寸小于物理分辨率时，浏览器会对图片进行拉伸，导致图片模糊。
> - 解决方案：
>   1. 为每个 DPR 提供对应的高分辨率图片。
>   2. 使用 `srcset` 属性，指定不同分辨率下的图片资源。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- <img class="origin" src="images/meal.jpg" alt="" /> -->
    <!-- <img class="origin_2x" src="images/meal@2x.jpg" alt="" /> -->
    <!-- <img class="origin_3x" src="images/meal@3x.jpg" alt="" /> -->
    <img
      class="meal"
      src="images/meal.jpg"
      alt="A bowl of salmon and curry"
      srcset="images/meal.jpg 1x, images/meal@2x.jpg 2x, images/meal@3x.jpg 3x"
    />
  </body>
</html>
```

```CSS
.origin,
.origin_2x,
.origin_3x,
.meal {
  width: 500px;
}
```

- `srcset`属性：
  - 供多个图像版本，指定其对应的 DPR。
  - 格式：`图像路径 空格 DPR值`
  - 浏览器会根据设备的 DPR 自动选择最合适的图像版本。
- CSS 中的逻辑尺寸：
  - 定义图片在页面上的显示逻辑尺寸，例如 `400px`。
  - 图像在高密度屏幕上使用更高分辨率的资源，但逻辑尺寸不变。
- **高分辨率图像命名约定**：
  - 使用后缀标记分辨率，如：
    - `meal.jpg`（1x）
    - `meal@2x.jpg`（2x）
    - `meal@3x.jpg`（3x）
- 优化建议
  1. **仅优化关键图片**：
     - 不需要为所有图片提供多个版本。
     - 仅为重要图像（如主页横幅）提供高分辨率版本。
  2. **从大图开始**：
     - 优化流程：从最大尺寸的图像（如 3x）开始，然后缩小到 2x 和 1x，避免放大时的模糊问题。
  3. **资源大小平衡**：
     - 高分辨率图片文件较大。为避免页面加载缓慢，需控制图片体积。
  4. **浏览器行为测试**：
     - 打开 Chrome 开发者工具，在“网络 (Network)”标签中刷新页面。
     - 观察加载的图片资源，确保浏览器正确选择了适合屏幕的图片版本。

## 分辨率切换问题

> 当我们希望在不同设备上显示图片时，需要为不同屏幕大小和分辨率提供合适的图片版本。这种需求称为“分辨率切换问题（Resolution Switching Problem）”。
>
> **问题**
>
> 1. **设备分辨率与显示需求的差异**：
>    - 同样的图片可能需要占据不同设备屏幕的不同比例。例如：
>      - 手机：图片占满屏幕宽度。
>      - 平板：图片占屏幕宽度的一半。
>      - 桌面：图片占屏幕宽度的三分之一。
> 2. **浏览器的缩放成本**：
>    - 如果仅提供一张高分辨率图片，浏览器需要在运行时动态缩放，这会增加性能开销。
>
> **解决方案**
>
> 通过 `srcset` 和 `sizes` 属性，提供多版本图片，允许浏览器根据设备视口宽度和 DPR（设备像素比）自动选择合适的图片。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <img
      class="meal"
      src="images/meal.jpg"
      alt="A bowl of salmon and curry"
      srcset="
        images/meal.jpg     400w,
        images/meal@2x.jpg  800w,
        images/meal@3x.jpg 1200w
      "
      sizes="
        (max-width: 500px) 100vw,
        (max-width: 700px) 50vw,
        33vw
      "
    />
  </body>
</html>
```

- **`srcset` 属性**

  - 提供多种宽度的图片版本。

  - 格式：`图片路径 空格 图片宽度`。

- **`sizes` 属性**

  - 指定图片在不同视口宽度下的显示尺寸。
  - 使用媒体查询条件和显示宽度（相对于视口宽度 `vw`）。

- 工具：

  - 需要拆图考虑：https://www.responsivebreakpoints.com

## WebP 格式及使用

> 随着网络的不断发展，现代图片格式（如 **WebP**）成为优化网页性能的重要工具。WebP 图片显示效果与原图相差无几，但内存却小非常多。
>
> **如何转换图片为 WebP 格式**
>
> **工具选项**：
>
> 1. **设计工具**：
>    - 使用 **Photoshop** + WebP 插件。
>    - 使用 **Sketch**：原生支持导出 WebP。
> 2. **在线工具**：
>    - [CloudConvert](https://cloudconvert.com/)：支持多种图片格式之间的转换。
>    - 其他类似工具：可通过搜索“WebP Converter”找到。
> 3. **命令行工具**：
>    - **cwebp**：Google 提供的免费命令行工具，用于批量转换图片为 WebP。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <!-- <img src="images/meal.jpg" alt="" />
    <img src="images/meal.webp" alt="" /> -->
    <picture>
      <source type="image/webp" srcset="/images/meal.webp" />
      <source type="image/jpeg" srcset="images/meal.jpg" />
      <img src="images/meal.png" alt="" />
    </picture>
  </body>
</html>
```

- 使用 CloudConvert 转换图片

  1. 打开 [CloudConvert](https://cloudconvert.com/)。
  2. 上传图片（例如：`meal.jpg`）。
  3. 选择输出格式为 WebP。
  4. 自定义设置（默认设置即可）。
  5. 转换后下载图片（文件大小显著减小）。

- 在 HTML 中使用 WebP 图片：显示效果相差无几

  ```html
  <img src="images/meal.jpg" alt="" /> <img src="images/meal.webp" alt="" />
  ```

- 浏览器支持：旧版本可能不支持 webp 图片，使用下面的方式，优先加载 webp 图片，若不支持，加载 png 图片

  ```html
  <picture>
    <source type="image/webp" srcset="/images/meal.webp" />
    <source type="image/jpeg" srcset="images/meal.jpg" />
    <img src="images/meal.png" alt="" />
  </picture>
  ```

## 响应式图片裁剪与缩放

> 在网页设计中，为了在不同设备上提供更好的视觉效果，可以根据设备屏幕尺寸裁剪或缩放图片。例如：在移动设备上，可能只需展示图片的重点部分，而在平板或桌面设备上，展示更完整的内容。
>
> 如：https://earls.ca

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <picture>
      <source media="(max-width: 500px)" srcset="images/meal-cropped.jpg" />
      <source media="(min-width: 501px)" srcset="images/meal.jpg" />
      <img src="images/meal.jpg" alt="" />
    </picture>
  </body>
</html>
```

- **`<source media>`**: 使用 `media` 属性为不同屏幕宽度定义条件，例如 `max-width` 和 `min-width`。
- **`srcset`**: 为每种设备指定图片路径。

## SVG 图形

> 可缩放矢量图形 SVG（Scalable Vector Graphics）是一种基于数学向量的图形格式，与栅格图像（由像素组成）不同。SVG 的特点是：
>
> - **分辨率无关**：无论放大或缩小，始终保持清晰。
> - **文件体积小**：复杂的图形可以通过矢量定义，减少文件大小。
> - **可编程性强**：
>   - SVG 文件是**基于 XML 的文本文件**，可以直接编辑其代码。
>   - 支持动态效果，例如通过 CSS 或 JavaScript 添加动画。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <img class="ufo" src="images/ufo.svg" alt="" />
  </body>
</html>
```

```css
body {
  background: url(../images/constellation.svg);
}
.ufo {
  width: 100px;
}
```

- `<img>` 标签：将 SVG 文件作为图像插入。
- `alt` 属性：为无障碍设计提供替代文本。
- 宽高可通过 CSS 定义，无需担心模糊。
- **作为背景图片**
  - SVG 作为背景时，不会因分辨率变化而模糊。
  - 文件体积通常比栅格图像小。

## 图标字体

> 图标字体（Icon Fonts）是专门设计的一种字体，字体内容不是字母（如 A、B、C），而是图标。通过 CSS 和 HTML，图标字体可以灵活地调整大小、颜色、阴影等。
>
> **常见的图标字体库**
>
> 1. **Font Awesome** - 非常流行，提供免费和付费计划。
> 2. **Ionicons** - 适用于移动和 Web 项目。
> 3. **Material Design Icons** - 谷歌提供，遵循 Material Design 规范。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <script
      src="https://kit.fontawesome.com/adbc6ec988.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <span class="icon">
      <i class="fa-solid fa-user-group fa-2xs" style="color: #63e6be"></i>
    </span>
  </body>
</html>
```

```CSS
.icon {
  font-size: 5rem;
}
```

- **Font Awesome**：https://fontawesome.com/

  - 先注册，设置 kit，获得下面代码，放置在 head 标签内

    ```css
    <script src="https://kit.fontawesome.com/adbc6ec988.js" crossorigin="anonymous"></script>
    ```

  - 点击搜索图标（先选择下方的免费 Free 按钮），输入内容如 user 进行搜索
  - 选择喜好的图标，可进行部分自定义，获得代码，在代码中存在 kit 的情况下，图标生效

# 表单

## 创建基本表单

> HTML 表单是用户与网页交互的重要工具，可以用来收集信息。

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <form action="">
      <!-- <p>Name</p> -->
      <div>
        <label for="name">Name</label>
        <input id="name" type="input" />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="input" />
      </div>
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </form>
  </body>
</html>
```

- **`<form>`** 元素表示一个表单，通常包含以下内容：

  - **`action` 属性**：定义表单数据提交到的目标 URL，**目前暂时省略此属性**。
  - **输入控件**：使用 `<input>` 元素接收用户输入。

- **`label`** ：输入字段的描述标签，可以通过 `for` 属性与对应的输入字段关联。

  - 通过点击标签可以激活对应的输入字段。

  - 提升表单的可访问性（特别是使用屏幕阅读器的用户）。

- **`<input>` 输入字段**
  - `type` 属性：决定输入字段的类型，如：
    - `text`：单行文本输入。
    - `email`：带基本验证的电子邮件输入。

## 表单美化

> 以下是一个经过优化和美化的表单示例，同时包含对代码的分步说明，展示如何从简单的表单变成一个视觉效果更好的表单

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" />
      </div>
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </form>
  </body>
</html>
```

```CSS
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 1.5;
  padding: 1rem;
}

label {
  display: block;
}

input[type="text"],
input[type="email"] {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem 0.75rem;
  transition: border-color 0.15s, box-shadow 0.15s;
}

input[type="text"]:focus,
input[type="email"]:focus {
  border-color: #7db0fb;
  outline: 0;
  box-shadow: 0 0 0 4px rgba(24, 117, 25, 0.25);
}

button {
  background-color: #0d6efd;
  color: #fff;
  border: 0;
  padding: 0.5rem 0.75rem;
  border-radius: 5px;
  outline: 0;
}

button:hover {
  background-color: #57a7ce;
}

button:active {
  background-color: #4688a5;
}

button + button {
  margin-left: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}
```

1. 基础设置

   - `body` 样式：
     - 系统字体栈：提供跨平台一致体验。
     - 行高：设置为 `1.5`，提升文本可读性。
     - 内边距：防止页面内容贴近浏览器边缘。

2. 标签布局

- `label`：
  - 默认是行内元素，设置 `display: block;` 确保与输入字段换行对齐。

3. 输入字段

   - 样式：

     - 设置圆角边框（`border-radius`）和内边距（`padding`），确保视觉舒适。
     - 在`:focus`状态下：
       - 高亮边框（`border-color`）。
       - 添加阴影（`box-shadow`）以增强视觉反馈。
       - 添加平滑的过渡效果（`transition`），提供更好的用户体验。

   - 间距：
     - 使用 `margin-bottom` 在字段之间增加间距。

4. 按钮

   - 样式：

     - 按钮背景色设置为蓝色（`#0d6efd`），文字颜色设置为白色。
     - 移除默认边框（`border`）和轮廓（`outline`）。
     - 设置圆角（`border-radius`）和内边距（`padding`）。

     - 交互状态 ：
       - 鼠标悬停时改变背景色（`hover`）。
       - 点击时更改背景色（`active`）。

   - 间距 ：
     - 使用选择器 `button + button` 增加按钮之间的水平间距。

5. 分组样式
   - `form-group` ：
     - 使用 `margin-bottom` 控制表单分组之间的垂直间距，保持布局整齐。

## CSS 框架

> CSS 框架是由可重用 CSS 代码组成的库，帮助开发者快速创建现代、美观的网页。
>
> **常见框架**：
>
> - **Bootstrap**：最流行，功能全面，组件丰富。
> - **Foundation**：强调响应式设计。
> - **Semantic UI**：基于语义化的 CSS 框架。
> - **UI Kit**：简洁灵活的框架。
> - **Materialize**：基于谷歌 Material Design 的框架。
> - **Milligram**：轻量化 CSS 框架，速度快，生产力高。
>
> **是否必须掌握所有框架？**
>
> - 不必掌握所有框架，了解一种或两种常用的（如 Bootstrap）即可。
> - 项目可能使用不同框架，甚至不用框架，而是根据需要编写 CSS。

**Bootstrap 和 Milligram 对比**

- Bootstrap

  - 特点：

    - 功能丰富，组件全面（如表单、徽章、警告框等）。
    - 易于扩展，广泛应用。

  - 文件大小：

    - 核心 CSS 文件大小约为 **20KB**。
    - 对于大型项目，可能与其他资源累积，影响加载性能。

  - 适用场景：
    - 需要多样组件的复杂项目。
    - 对加载性能要求不高的项目。

### Bootstrap

> 官网：https://getbootstrap.com/docs/5.3/getting-started/download/
>
> 网址可能有变化，若失效，谷歌搜索 bootstrap
>
> 这里使用 CDN via jsDelivr 方式，拷贝网页 CDN via jsDelivr 下第一行代码，加载约 20kb
>
> ```css
> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
> ```

将其加入 head 中后，即引用了 Bootstrap，使用 class 标签控制代码样式，根据文档查询使用方式，找到对应的 class，在对应的标签后加上对应的 class 即使用。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <form class="w-50">
      <div class="mb-3">
        <label class="form-label" for="name">Name</label>
        <input class="form-control" id="name" type="text" />
      </div>
      <div class="mb-3">
        <label class="form-label" for="email">Email</label>
        <input class="form-control" id="email" type="email" />
      </div>
      <button class="btn btn-primary" type="submit">Register</button>
      <button class="btn btn-secondary" type="reset">Clear</button>
    </form>
  </body>
</html>
```

### Milligram

> 官网：https://milligram.io
>
> 在 Usage 下，拷贝 Milligram CSS 下第一行，加载约 2.5kb
>
> ```css
> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css">
> ```

不需要定义 class 就可以使用它，不需要阅读文档就可以直接使用，它也有相关的文档

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <div>
        <label for="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label for="email">Email</label>
        <input id="email" type="email" />
      </div>
      <button type="submit">Register</button>
      <button type="reset">Clear</button>
    </form>
  </body>
</html>
```

## 文本字段

> 本节继续使用 Milligram
>
> HTML 提供了多种类型的输入字段（input fields），用于接受用户输入。通过设置 `type` 属性，输入字段可以具有不同的行为。

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <input type="email" readonly value="ppp_melody@163.com" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </form>
  </body>
</html>
```

```css
form {
  width: 50%;
  padding: 2rem;
}

textarea {
  resize: none;
}
```

- 常见 Input Field 类型

  - **Text**：默认类型，用于接受普通文本输入。
  - **Number**：用于接受数字输入。
  - **Password**：用于密码输入，输入内容会被掩码显示。
  - **Date**：提供日期选择器。
  - **Email**：用于电子邮件输入。

- 常见 Input Field 属性
  - **`value`**：设置预填充值（默认值）。
  - **`placeholder`**：设置占位符，提示用户输入内容。
  - **`readonly`**：使输入字段只读，用户无法修改。
  - **`disabled`**：禁用输入字段，用户无法选中或输入，且该字段不会被提交到服务器。
  - **`maxlength`**：限制用户输入的最大字符数。
  - **`autofocus`**：页面加载后自动聚焦到字段上。
- **Text Area**：用于多行文本输入。
  - **`placeholder`**：设置占位符。
  - **`readonly`** 和 **`disabled`**：与 Input Field 相同。
  - **设置默认值**：默认值需要写在 `<textarea>` 标签之间。
  - 禁止调整大小：使用 CSS 控制`textarea { resize: none; }`

## 数据列表

> 本节继续使用 Milligram
>
> 数据列表 (`<datalist>`) 提供输入建议，当用户在输入框中输入时，显示相关选项。用户可以从建议中选择，也可以输入其他未列出的值。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <input type="text" list="contries" autocomplete="off" />
      <datalist id="contries">
        <!-- <option>Australia</option>
        <option>Canada</option>
        <option>India</option>
        <option>USA</option> -->
        <!-- <option value="1">Australia</option>
        <option value="2">Canada</option>
        <option value="3">India</option>
        <option value="4">USA</option> -->
        <option data-value="1">Australia</option>
        <option data-value="2">Canada</option>
        <option data-value="3">India</option>
        <option data-value="4">USA</option>
      </datalist>
    </form>
  </body>
</html>
```

```css
form {
  width: 50%;
  padding: 2rem;
}

textarea {
  resize: none;
}
```

- `<input>` 的 `list` 属性：
  - 通过 `list` 属性将输入框与 `<datalist>` 关联。
  - 值应为 `<datalist>` 的 `id` 值。
- `<datalist>` 的 `id` 属性：
  - 定义唯一标识符，供输入字段引用。
- `<option>` 的 `value` 属性：
  - 定义建议列表中的选项值，显示在输入框中。
  - 加上之后，会让选择框变展现形式发生变化（如代码所示，每一个 option 会先展示数字下方再展示国家，某些特性情况可能会用到
  - `data-value`：用于存储与选项关联的额外数据，加上之后，回复不加 value 时的展示形式
- **限制与扩展**
  1. 允许自由输入：
     - 数据列表不会限制用户输入，用户可以输入非列表中的值。
     - 如果需要限制输入，请使用下拉列表（`<select>`）。
  2. 样式自定义：
     - `<datalist>` 和 `<option>` 的样式定制有限。
     - 可以使用 JavaScript 手动实现更灵活的样式和交互。

## 下拉列表

> 本节继续使用 Milligram
>
> 下拉列表使用 `<select>` 元素创建，为用户提供一组选项，用户可以从中选择一个或多个选项。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <select name="" id="">
        <optgroup label="Front-end Courses">
          <option value="">HTML</option>
          <option value="">CSS</option>
          <option value="">JavaScript</option>
        </optgroup>
        <optgroup label="Back-end Courses">
          <option value="">Node.js</option>
          <option value="">ASP.NET</option>
          <option value="">Django</option>
        </optgroup>
      </select>
    </form>
  </body>
</html>
```

- **`<select>` 元素**：
  - `name`：用于提交表单时的参数名称，**目前暂时省略此属性**。
  - `id`：用于与 `<label>` 关联，**目前暂时省略此属性**。
  - `multiple`：允许用户选择多个选项。应与 CSS 配合使用，优化显示效果。
- **`<option>` 元素**：
  - **`value`**：提交到服务器的值，与显示给用户的文本不同。
  - **`selected`**：
    - 选中默认值。
    - 布尔属性，不需要值。
- **`<optgroup>` 元素**：
  - 用于对选项进行分类。
  - **`label`** 属性：定义分组

## 复选框

> 本节继续使用 Milligram，并使用了`class="label-inline"`，使元素变为**内联样式的标签形式**，通过这种方式，标签和输入框可以在一行内对齐
>
> 复选框（Checkbox）允许用户从一组选项中选择一个或多个选项。使用 `<input>` 元素和 `type="checkbox"` 属性创建复选框。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <div>
        <input type="checkbox" id="front-end" checked />
        <label class="label-inline" for="front-end">Front-end</label>
      </div>
      <div>
        <input type="checkbox" id="back-end" disabled />
        <label class="label-inline" for="back-end">Back-end</label>
      </div>
    </form>
  </body>
</html>
```

- **`<input type="checkbox">`**：创建一个复选框。

- **`id`**：与 `<label>` 的 `for` 属性匹配，用于关联标签和复选框。

- **`name`**：

  - 指定复选框的分组名称。

  - 复选框组会提交为同一个键，值为被选中的所有选项，可用于分组复选框。

- **`value`**：指定复选框的提交值。

- **`checked`**：默认选中该复选框。布尔属性，无需赋值。

- **`disabled`**：禁用复选框，用户无法选择。布尔属性，无需赋值。

## 单选按钮

> 本节继续使用 Milligram，并使用了`class="label-inline"`
>
> 单选按钮用于在一组选项中让用户选择 **唯一** 一个选项。使用 `<input>` 元素和 `type="radio"` 属性创建。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <div>
        <input type="radio" name="mebership" id="silver" />
        <label for="silver" class="label-inline">Silver</label>
      </div>
      <div>
        <input type="radio" name="mebership" id="gold" />
        <label for="gold" class="label-inline">Gold</label>
      </div>
    </form>
  </body>
</html>
```

- **`<input type="radio">`**：创建单选按钮。

- **`name`**：用于分组单选按钮。只有在同一组内的按钮会互斥（仅可选一个）。

- **`id`**：为单选按钮分配唯一标识符，用于与 `label` 关联。

- **`value`**：定义单选按钮提交的值。

- **`checked`**：默认选中该单选按钮。布尔属性，无需赋值。

- **`disabled`**：禁用单选按钮，用户无法选择。布尔属性，无需赋值。

## 范围滑块

> 范围滑块是一种用户输入控件，用于选择 **数值范围内** 的某个值。通过 `<input type="range">` 创建。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <input type="range" min="0" max="100" value="90" step="10" />
    </form>
  </body>
</html>
```

- **`type="range"`**：指定控件为范围滑块。
- **`min`**：滑块的最小值。
- **`max`**：滑块的最大值。
- **`value`**：滑块的默认值（起始值）。
- **`step`**：设置滑块的增量步长。默认步长为 `1`。
- 滑块的值不会自动显示，需要借助 **JavaScript** 实现动态显示，这里暂不展示。

## 文件输入框

> 文件输入框允许用户从设备选择一个或多个文件。使用 `<input type="file">` 创建。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <!-- <input type="file" multiple accept=".jpg, .png " /> -->
      <input type="file" multiple accept="video/*" />
    </form>
  </body>
</html>
```

- **`multiple`**：允许用户选择多个文件。
- **`accept`**：限制用户可选择的文件类型。
  - 常见格式：
    - **指定扩展名**：`accept=".jpg,.png"`
    - **按类型分组**：
      - 所有图片：`accept="image/*"`
      - 所有视频：`accept="video/*"`
      - 所有音频：`accept="audio/*"`
- **`name`**：用于在表单提交时识别文件输入的名称（可选）
- **扩展功能**：可以通过 JavaScript 动态显示文件名或验证文件大小。

## 表单分组与布局

> 在复杂表单中，常需要对相关输入字段进行逻辑分组，以提升可读性和用户体验

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <fieldset>
        <legend>Billing Address</legend>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </fieldset>
      <legend>Payment</legend>
        <input type="text" />
        <input type="text" />
        <input type="text" />
    </fieldset>
    </form>
  </body>
</html>
```

- **使用 `<fieldset>` 元素**

  - `<fieldset>`：定义一个字段集，用于逻辑分组。
  - `<legend>`：作为分组的标题或标签，描述字段集的用途。

- 如果不需要强语义支持，可使用 `<section>` 元素，配合标题（如 `<h2>`）进行分组。

### 隐藏字段

> 隐藏字段（Hidden Fields）是表单中一种用于存储额外数据的输入字段。它们不会显示在页面上，但其数据会在表单提交时发送到服务器。

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form>
      <input type="hidden" name="course-id" value="1234" />
    </form>
  </body>
</html>
```

- **不可见性**：

  - 隐藏字段不会显示在页面上，但其数据仍会包含在表单提交的数据中。

  - 可通过 `input[type="hidden"]` 定义。

- **用途**：

  - 存储**不可见但必要的数据**（如内容的唯一标识符 `id`）。

  - 传递与页面上下文相关的信息到服务器。

- **安全性警告**：

  - **不要在隐藏字段中存储敏感信息**（如密码或认证信息）。

  - 因为用户可以通过“查看页面源代码”或浏览器开发者工具轻松查看并篡改这些数据。

## 表单数据验证

> 在提交表单前，验证用户输入的数据至关重要，以确保数据符合要求，避免数据损坏或安全问题。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <!-- <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    /> -->
  </head>
  <body>
    <form>
      <!-- <input type="text" required minlength="3" maxlength="10" /> -->
      <!-- <input type="email" required /> -->
      <input type="number" required min="0" max="5" step="0.01" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

- **基础验证**：
  - HTML5 提供了基础验证规则，如必填字段、最小/最大字符长度、输入格式等。
  - 当验证失败时，浏览器会自动显示默认的错误提示。
- **常用验证属性**：
  - `required`：
    - 确保字段不能为空。
    - 示例：`<input type="text" required />`
  - `minlength` 和 `maxlength`：
    - 设置字符串长度限制。
    - 示例：`<input type="text" minlength="3" maxlength="10" />`
  - `type`：
    - 控制输入类型，如 `email`、`date`。
    - 示例：`<input type="email" />`
  - `pattern`：
    - 使用正则表达式进行自定义验证。
    - 示例：`<input type="text" pattern="[A-Za-z]{3,10}" />`
  - `number`：当设置为 number 时，默认 step 为 1，可设置最大最值、最小值和 step

## 表单提交与图标按钮

> 在 HTML 表单中，通过按钮元素可以添加图标并提交数据。
>
> 这里使用 Formspree 进行演示，Formspree 可以接收测试传入的值，注册后使用
>
> 官网：https://formspree.io

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
    />
  </head>
  <body>
    <form action="https://formspree.io/f/xzzbqkpe" method="POST">
      <input type="text" placeholder="Name" autofocus />
      <input type="text" placeholder="Email" />
      <!-- <input type="submit" value="Submit" /> -->
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  </body>
</html>
```

- 按钮与图标：
  - 虽然`input`也可以展示 button 的效果，但是不建议使用
  - `botton`括号中可以加入 icon 图标
- **`action`**：指定表单数据提交的目标 URL。
- **`method` 属性**：决定数据的提交方式：
  - **`POST`**（常用）：数据放在请求体中，安全性较高，适合敏感数据的传递（如登录信息）
  - **`GET`**：数据附加在 URL 后（通过查询字符串）。
- **`name`**：表单字段需添加 `name` 属性，提交时用作键名。
- **安全性**：可结合前端验证（HTML5 或 JavaScript）与后端验证，确保数据完整性和安全性。

# 变换&过渡&动画

> **Transformations（变换）、Transitions（过渡）、Animations（动画）**

## 变换

> 在 CSS 中，`transform` 属性可以应用一系列函数来实现元素的旋转、缩放、倾斜和移动等效果。以下是知识点整理与代码示例。

代码：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="box">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, maiores!
    </div>
  </body>
</html>
```

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  width: 100px;
  height: 100px;
  background: gold;
}

.box:hover {
  /* transform: rotate(15deg); */
  /* transform: scale(1.5); */
  /* transform: skew(-15deg); */
  /* transform: translateX(100px); */
  /* transform: translate(10px, 10px); */
  /* transform: rotate(15deg) translateX(100px); */
  transform: translateX(100px) rotate(15deg);

  /* transform: rotateX(45deg); */
}
```

**CSS 转换函数**

1. **`rotate()`**
   - 旋转元素（以度为单位）。
   - 正值：顺时针旋转，负值：逆时针旋转。
   - 示例：`rotate(15deg)`。
2. **`scale()`**
   - 缩放元素。
   - 单个参数：同时缩放宽高（例如 `scale(2)` 放大 2 倍）。
   - 两个参数：分别缩放宽和高（例如 `scale(2, 0.5)` 宽放大 2 倍，高缩小 50%）。
3. **`skew()`**
   - 倾斜元素。
   - 单个参数：倾斜 X 轴方向，两个参数：倾斜 X 和 Y 轴。
   - 示例：`skew(15deg, -10deg)`。
4. **`translate()`**
   - 移动元素。
   - 单个参数：沿 X 轴移动；两个参数：分别沿 X 和 Y 轴移动。
   - 示例：`translate(10px, 20px)`。
   - 与绝对定位的区别：
     - `translate` 使用硬件加速，性能更优。
     - 绝对定位需要设置 `position` 属性，可能会改变布局流。
5. **组合转换**
   - 可以组合多个转换函数，注意顺序会影响效果。
   - 示例：`transform: rotate(15deg) translate(50px, 50px)`。

**注意点**

1. **顺序影响结果**
   - 转换是依次执行的。例如：
     - `rotate(15deg) translate(50px, 50px)`：先旋转，再移动。
     - `translate(50px, 50px) rotate(15deg)`：先移动，再旋转。
2. **过渡效果**
   - 使用 `transition` 属性，为转换添加动画效果。
   - 示例：`transition: transform 0.5s ease-in-out;`。

## 3D 变换

> CSS 三维变换（3D Transformations）允许我们在三维空间中移动、旋转元素，包括沿 Z 轴的移动以及设置不同的旋转中心等复杂效果。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="container">
      <div class="box box-one">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, maiores!
      </div>
      <div class="box box-two">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, maiores!
      </div>
    </div>
  </body>
</html>
```

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  width: 100px;
  height: 100px;
  background: gold;
}

.container {
  perspective: 200px;
}

.container:hover .box {
  /* transform: perspective(200px) translateZ(50px); */
  /* transform: perspective(200px) rotateY(45deg); */
  transform: rotateY(60deg);
  /* transform-origin: 0 0; */
  transform-origin: 0 50%;
}

.container:hover .box-two {
  transform: rotateX(60deg);
}

/* 辅助测试 */
/* .box-one {
  visibility: hidden;
} */
```

**三维变换的核心知识**

1. **Z 轴移动**

   - 使用`translateZ()`函数，可以让元素沿 Z 轴移动，需要提前设置 Perspective 才能看出效果：
     - 正值：元素靠近屏幕。
     - 负值：元素远离屏幕。

2. **透视（Perspective）**

   - 两种设置方式：
     1. `perspective` 属性：
        - 设置在父元素上，作用于其子元素。
        - 示例：`perspective: 800px;`
     2. `perspective()` 函数：
        - 在变换函数中单独设置，作用于单个元素。
        - 示例：`transform: perspective(800px) translateZ(-100px);`
   - 两者不能同时使用。

3. **旋转（Rotation）**

   - 使用`rotateX()`、`rotateY()`和`rotateZ()`：
     - `rotateX(deg)`：绕 X 轴旋转。
     - `rotateY(deg)`：绕 Y 轴旋转。
     - `rotateZ(deg)`：绕 Z 轴旋转（与二维旋转相同）。

4. **变换中心（Transform Origin）**

   - 控制旋转或变换的原点。

   - 默认原点是元素的中心，可通过`transform-origin`设置：

     - 格式：`transform-origin: x y z;`

     - 示例：

       ```CSS
       transform-origin: 50% 50% 0; /* 默认值：中心点 */
       transform-origin: 0 0; /* 左上角 */
       ```

5. **组合变换**

   - 可以同时使用多种变换，顺序会影响效果。

   - 示例：

     ```CSS
     transform: rotateY(30deg) translateZ(-50px);
     ```

**注意事项**

1. **`perspective` 的单位**
   - 使用较小值（例如 200px）会产生强烈的透视效果（更明显的深度感）。
   - 使用较大值（例如 800px）效果较为平缓。
2. **多元素共享透视**
   - 在父元素上使用 `perspective`，使子元素共享相同的透视效果。
   - 避免在每个子元素中单独使用 `perspective()` 函数。

---

## CSS 过渡

> 过渡（Transitions）允许我们平滑地从一个样式变化到另一个样式，使得元素的属性变化更加自然，避免了突如其来的变化，模拟了现实世界中物体变化的过程。例如，物体不会突然从一个地方消失，然后出现在另一个地方，而是逐渐移动或变化。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <div class="box box-one">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, maiores!
    </div>
  </body>
</html>
```

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.box {
  width: 100px;
  height: 100px;
  background: gold;
  /* transition: transform 2s; */
  /* transition: transform 2s linear; */
  /* transition: transform 2s cubic-bezier(0.32, 0.62, 0.58, 0.19); */
  /* transition: transform 2s linear 1s; */
  transition: transform 2s, background 2s;
}

.box:hover {
  transform: rotate(360deg);
  background: dodgerblue;
}
```

- 基本使用

  - **`transition`** 属性使得指定的属性值在一定时间内平滑过渡。

  - 需要将 `transition` 属性应用于元素本身（例如，盒子元素），而不是悬停状态（`hover`）。

- 语法

  ```CSS
  transition: property duration timing-function delay;
  ```

  - **`property`**：指定要应用过渡效果的 CSS 属性，通常是 `transform`、`background-color`、`width` 等。
  - **`duration`**：过渡的持续时间（例如 `0.5s`，即半秒）。
  - **`timing-function`**：定义过渡过程的加速方式，决定过渡的速度曲线。
  - **`delay`**（可选）：指定过渡开始之前的延迟时间。

- 过渡的加速曲线（Timing Function）
  - **`linear`**（默认）：动画的进度在整个过渡期间保持均匀，不加速也不减速。
  - **`ease`**：动画开始时较慢，逐渐加速，最后再减速，常用于自然的过渡。
  - **`ease-in`**：动画从慢速开始，然后逐渐加速。
  - **`ease-out`**：动画开始较快，然后逐渐减速。
  - **`ease-in-out`**：动画开始和结束较慢，中间加速。
  - **`cubic-bezier`**：通过定义四个值来创建自定义的加速曲线。你可以使用 [cubic-bezier.com](https://cubic-bezier.com/) 来创建自定义的贝塞尔曲线，并根据需要调整其控制点。
- **过渡的实际效果**
  - 当我们将鼠标悬停在 `.box` 元素上时，`transform` 属性（如旋转）会在设定的时间内平滑过渡。
  - 过渡效果让变化更加流畅和自然，例如模拟物体的加速或减速运动。

## CSS 动画

> CSS 动画比过渡（`transition`）更强大，适用于更复杂的动画效果。使用动画可以控制多个属性的变化，并且能精确控制每个属性的时间和速度。

```CSS
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: rotate(45deg);
    background: tomato;
  }
  100% {
    transform: rotate(0);
  }
}

.box {
  width: 100px;
  height: 100px;
  background: gold;
  animation: pop;
  animation-duration: 4s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-direction: alternate;
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
}
```

- **使用 @keyframes 定义关键帧**

  - **`@keyframes`** 用于定义动画的关键帧，类似电影中的镜头，动画可以由多个关键帧组成，每个关键帧定义动画在特定时刻的样式。

  - 每个关键帧都可以定义元素的属性变化，从而形成动画效果。
  - 通过定义不同时间点（如 `0%`、`25%`、`50%` 和 `100%`），可以控制元素在动画过程中如何变化。

- 使用动画

  - 在元素上使用 **`animation`** 属性来应用动画。
  - 必须指定 **`animation-name`** 和 **`animation-duration`**。
    - **`animation-name`**：指定使用的动画名称（例如：`pop`）。
    - **`animation-duration`**：设置动画的持续时间（例如：`4s` 表示 4 秒）。

- 其他常用动画属性

  - **`animation-delay`**：指定动画开始前的延迟时间。

  - **`animation-iteration-count`**：设置动画执行的次数，默认是 1，可以设置为 `infinite` 实现无限循环。

  - **`animation-timing-function`**：设置动画的加速曲线，控制动画速度变化。可以使用 `linear`、`ease-in`、`ease-out`、`cubic-bezier` 等。

  - `animation-direction`

    ：控制动画的方向：

    - **`normal`**：从开始到结束（默认）。
    - **`reverse`**：从结束到开始。
    - **`alternate`**：正反方向交替播放。

- 动画的简写属性

  - 使用 **`animation`** 简写属性，可以同时指定动画名称、持续时间、时间函数、延迟等多个属性。

- 动画效果

  - 使用 `@keyframes` 和 `animation` 属性，我们可以创建复杂的动画效果。例如，元素的大小变化、旋转、背景颜色变化等。
  - 动画可以让元素动态地表现出丰富的视觉效果，使页面更加生动和吸引人。

## 可复用动画

> 在 CSS 中创建动画后，可能需要将相同的动画应用于多个元素。为了避免重复编写动画属性，可以通过以下方法创建可复用的动画。

代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </head>
  <body>
    <div class="box box-one animate__animated animate__bounce">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, maiores!
    </div>
  </body>
</html>
```

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.3);
  }
  50% {
    transform: rotate(45deg);
    background: tomato;
  }
  100% {
    transform: rotate(0);
  }
}

.box {
  width: 100px;
  height: 100px;
  background: gold;
}

.animation-pop {
  animation: pop;
  animation-duration: 4s;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
  animation-direction: alternate;
}
```

- **创建可复用的动画类**

  - 通过将动画属性封装到一个独立的 CSS 类中，可以在多个元素上重复使用该动画。

  - 例如，创建一个名为 `.animation-pop` 的类，将所有动画相关的属性放入该类中：

  - 在 HTML 中，只需将 `.animation-pop` 类应用于需要动画的元素，这样，无论何时需要应用相同的动画，只需要使用这个类即可，避免了重复编写动画属性。

    ```html
    <div class="box animation-pop"></div>
    ```

- **使用外部动画库（例如 Animate.css）**

  - **Animate.css** 是一个流行的外部动画库，提供了许多现成的动画效果，可以方便地在网站中使用。

  - 只需引入 Animate.css 样式表，并使用相应的类名来实现动画效果。

  - > https://animate.style/

- **自定义动画库**

  - 通过这种方法，可以创建属于自己的网站的可复用动画库。将常用的动画规则封装成类，便于以后使用。

# 简洁易维护 CSS

## CSS 最佳实践

1. **遵循一致的命名约定**

- **命名约定**是团队协作中常见的挑战。不同的开发者使用不同的命名方式，导致代码混乱。建议团队统一命名约定。
- 常见命名约定：
  - **Kebab-case**: 用短横线连接多个单词（如：`nav-bar`）。
  - **Camel-case**: 第一个单词首字母小写，后续单词首字母大写（如：`navBar`）。
  - **Pascal-case**: 每个单词的首字母都大写（如：`NavBar`）。
  - **Underscore-case**: 用下划线连接单词（如：`nav_bar`）。

2. **在样式表中创建逻辑结构**

- 小项目：可以使用单一的样式表，但要合理划分各部分内容。
  - 例如，先定义**基础样式**（如 `box-sizing`），接着定义**排版样式**（如 `h1`、`p` 等），然后是**表单样式**、**导航栏样式**等。
- **大型项目**：建议将样式表拆分成多个文件，然后通过构建工具合并。可以使用 **CSS 预处理器**（如 Sass、Less）来管理样式。

3. **避免过于具体的选择器**

- **问题**：过于具体的选择器（例如：`div.nav ul.items li`）会导致 CSS 难以维护。
- **优化**：避免使用过多的后代选择器，尽量简化选择器结构。例如，将 `li` 元素改为使用 `class="item"`，避免依赖 HTML 元素的类型。
- **避免 `!important`**：过度使用 `!important` 是代码设计问题的体现，通常是由于选择器过于具体，导致难以覆盖样式。
- **命名空间**：为特定组件添加前缀（例如 `.nav-item`），可以避免全局样式干扰，从而避免不必要的样式冲突。

4. **排序 CSS 属性**

- 按照一定顺序排列 CSS 属性可以提高可读性和一致性。可以使用工具或编辑器插件自动排序，如**按字母顺序排序**。command+shift+P，搜索 sort

5. **利用样式继承**

- 避免在子元素中重复定义继承自父元素的样式。例如，在 `nav` 上设置 `font-family` 后，所有子元素（如链接、按钮等）都会继承此样式，避免在每个子元素中重复定义。
- **不要重复**：尽量在父元素中定义样式，让子元素继承，这样减少冗余代码。

6. **提取公共模式**

- 提取样式中的**公共模式**，例如：对象导向 CSS（OOCSS）方法。OOCSS 强调将样式抽象为可复用的组件和对象，提高样式的可维护性和可复用性。

7. **避免代码重复（DRY 原则）**

- **DRY（Don't Repeat Yourself）原则**：避免重复定义相同的样式。可以通过 CSS 变量或抽象公共样式来减少冗余。
- 使用 **CSS 变量** 来避免重复值，如常用的颜色、间距等属性。

## CSS 变量

1. **什么是 CSS 变量？**

- CSS 变量（也称为自定义属性）允许你将某个值存储在变量中，并在整个 CSS 中复用它。使用 CSS 变量可以让代码更加简洁、灵活，并避免重复的值，符合 **DRY**（Don't Repeat Yourself）原则。

2. **定义和使用 CSS 变量**

- CSS 变量通常定义在 `:root` 选择器下，这样它们在整个文档中都是全局可用的。

- 变量名以 `--` 开头，例如：

  ```css
  :root {
    --primary-color: #ffd336; /* 定义主色 */
    --border-size: 2px; /* 定义边框大小 */
    --border-radius: 10px; /* 定义边框圆角 */
  }
  ```

3. **使用 CSS 变量**

- 使用 `var()`函数来引用定义的变量。例如：

  ```css
  .box1 {
    background-color: var(--primary-color);
  }
  .box2 {
    background-color: var(--primary-color);
  }
  ```

- 这样，当需要更改颜色或其他值时，只需在 `:root` 中修改变量的值，而不需要逐一修改每个样式规则。

4. **继承和作用范围**

- 在 `:root` 中定义的 CSS 变量是全局可继承的，这意味着它们会被所有子元素继承。
- 变量的作用范围是全局的（如果在 `:root` 定义），或者局部的（如果在某个特定的元素内定义）。

5. **优点**

- **避免重复**：CSS 变量避免了在多个地方重复相同的值（例如颜色、边距、尺寸等）。
- **可维护性高**：更改一个变量的值会自动应用到所有引用它的地方，提升了代码的可维护性和灵活性。
- **主题化**：通过修改 CSS 变量，可以轻松实现整个网站的主题切换。

## 面向对象 CSS

> **OOCSS**（面向对象的 CSS）是一种 CSS 结构化方法，旨在创建可复用和模块化的样式组件。它借鉴了面向对象编程的概念，通过将样式划分为结构和表现（外观）两个独立部分，减少冗余和重复，提高代码的可维护性。

**OCSS 的两个基本原则**

1. **分离容器（Container）与内容（Content）**

   - **容器**（例如：`hero`, `sidebar`）是指页面的结构或布局部分，它决定了元素在页面中的位置。
   - **内容**（例如：按钮、文本等）是指元素本身的外观、功能和交互。

   **举例：**

   - 创建一个按钮组件 `.btn`，并给它统一的外观样式，比如背景色、边框、内边距等。然后在不同的容器（如 `hero` 或 `sidebar`）中使用这个按钮，而不需要为每个容器重新定义按钮样式。

   - ```CSS
     .btn {
       background-color: gold;
       border: 0;
       border-radius: 30px;
       padding: 1rem 2rem;
       font-family: system-ui;
     }
     ```

   - 使用这个 `.btn` 类的按钮在不同容器中会有相同的样式，无论它是在 `hero` 还是在 `sidebar` 中，保持统一。

2. **分离结构（Structure）与外观（Skin）**

   - **结构**（Structure）指的是定义元素大小、位置、布局等的基本样式。
   - **外观**（Skin）指的是定义元素颜色、背景、边框等视觉样式的部分。

   **举例：**

   - 假设我们需要为按钮提供不同的外观（例如：金色和蓝色）。我们不应为每种外观创建新的类，而是应该将结构和外观分开：

     - `.btn` 用于定义按钮的结构（大小、边距、边框等）。
     - `.btn-primary` 用于定义按钮的外观（背景色为金色）。
     - `.btn-secondary` 用于定义按钮的外观（背景色为蓝色）。

   - 结构类：

     ```CSS
     .btn {
       border-radius: 30px;
       padding: 1rem 2rem;
     }
     ```

   - 外观类：

     ```CSS
     .btn-primary {
       background-color: gold;
     }

     .btn-secondary {
       background-color: dodgerBlue;
     }
     ```

   - HTML 中应用：

     ```CSS
     <button class="btn btn-primary">Sign Up</button>
     <button class="btn btn-secondary">Contact</button>
     ```

#### **OOCSS 的优点**

- **减少重复**：通过将结构和外观分离，可以避免在不同地方重复定义相同的样式。
- **提高可维护性**：如果需要更改样式，只需修改结构类或外观类，而不需要修改每个实例。
- **增强可复用性**：同一个结构类可以在多个组件中复用，外观类也可以轻松替换。
- **模块化**：通过将样式拆分成不同的可复用模块，使得样式表更加清晰和易于管理。

#### **总结**

- **OOCSS** 通过将样式的 **结构** 和 **外观** 分开，以及 **容器** 和 **内容** 的分离，使得 CSS 更加模块化和可复用。通过这些原则，可以避免重复代码，减少冗余，使得样式表更加简洁、可维护。

## BEM

> BEM 是一种常见的命名约定，旨在帮助我们创建模块化、可复用、易维护的 CSS 代码。BEM 的全称是 **Block, Element, Modifier**，它将页面分解为块（Block）、元素（Element）和修饰符（Modifier），每个部分有明确的职责和作用。

**BEM 组成部分**

1. **Block（块）**：
   - **Block** 代表页面中的一个独立模块或组件。它是一个可以单独存在并具有独立样式的元素，通常是一个大功能区块。
   - **示例**：卡片（`card`）、按钮（`button`）、导航（`nav`）等。
2. **Element（元素）**：
   - **Element** 是 **Block** 内部的组成部分，通常是块的某个功能性子组件。它是区块的一部分，并且没有独立存在的意义，必须依附于 Block 才有意义。
   - **示例**：卡片中的 **价格**、**描述**、**按钮**，这些都属于 `card` 块的元素。
3. **Modifier（修饰符）**：
   - **Modifier** 用于修改 **Block** 或 **Element** 的外观或行为，通常代表不同的状态或变体。
   - **示例**：例如 “流行款” `card__popular` 或者 “主要按钮” `btn__primary`，这些是修改块或元素样式的修饰符。

**BEM 命名规则**

1. **Block（块）**：
   - 块的类名使用简单且描述性的名称，通常是单个词或组合词。
   - **示例**：`.card`, `.btn`, `.nav`
2. **Element（元素）**：
   - 元素的类名由块名 + `__`（双下划线）+ 元素名组成。
   - **示例**：`.card__header`, `.card__price`, `.card__body`
3. **Modifier（修饰符）**：
   - 修饰符的类名由块名或元素名 + `--`（双破折号）+ 修饰符名组成。
   - **示例**：`.card--popular`, `.btn--primary`

**BEM 命名约定的优势**

1. **模块化**：
   - BEM 使得 CSS 变得模块化，每个块（Block）都是独立的，块内部的元素（Element）和修饰符（Modifier）可以根据需求复用，避免了样式的全局污染。
2. **避免冲突**：
   - 通过使用前缀和双下划线、双破折号的分隔，BEM 可以减少类名冲突的风险，尤其在大型项目中。
3. **可维护性**：
   - 随着项目的扩展，使用 BEM 命名约定的代码更容易维护和修改，因为每个元素的作用和样式都是明确的，不需要到处修改相同的样式。
4. **可读性**：
   - BEM 的命名规则非常清晰，每个类名都表明它所属的模块和元素，能够让开发人员更容易理解代码结构。
