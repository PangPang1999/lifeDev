## 基础配置

> 首先按个人习惯调整输入法，前往“美化-Mac 输入法查看”

### 软件下载

#### 效率工具

番茄钟 🍅：https://github.com/ivoronin/TomatoBar

#### 原生 APP

app store 下载：

超级右键专业版、微信、QQ、钉钉、腾讯会议、网盘、网易云、Magnet

WPS、Eudic、DaisyDisk、Network&Battry、Shadowrocket

#### Typora（正版）

国内官网：https://typoraio.cn

#### InteliJ IDEA（正版）

国内官网：https://www.jetbrains.com.cn

官网下载链接：https://www.jetbrains.com/idea/download/?section=mac

#### DataGrip（正版）

国内官网：https://www.jetbrains.com.cn

官网下载链接：https://www.jetbrains.com/datagrip/download/#section=mac

#### Visual Studio Code（正版）

官网：https://code.visualstudio.com/Download

#### Adobe 套件（正版）

官网：https://creativecloud.adobe.com

> 存在后台进程 Adobe Creative Cloud

#### Parallels DeskTop（正版）

官网下载：https://www.parallels.cn/products/desktop/trial/

破解教程：https://www.yuque.com/xunijiaoyu/gzmmym/oqi4my4encp2vrru

#### Chrome Dev

https://www.google.com/chrome/dev/next-steps.html?statcb=0&installdataindex=empty&defaultbrowser=0#

> 存在后台进程 Google LLC

#### Office 套件（盗版）

链接：https://www.ifunmac.com/2023/07/office-2021-16-75/

### Homebrew

官网链接：https://brew.sh/

> 可能需要梯子保障正常下载（节点选美国）
>
> 下载过程中可能会出现下载速度降到极慢或者直接终止
>
> 改动 mac 电脑的“系统设置”--“WIFI”--“详细信息”--“DNS”
>
> 点击加号，添加`8.8.8.8`即可（若再出现问题，在`8.8.8.8`于`1.1.1.1`之间切换尝试）

安装成功后，提示如下内容

```sh
==> Next steps:
- Run these two commands in your terminal to add Homebrew to your PATH:
    (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/ppp_melody/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
- Run brew help to get started
- Further documentation:
    https://docs.brew.sh
```

意思是，在终端输入如下代码将 Homebrew 的环境变量添加到你的 .zprofile 文件中

```sh
    (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/quartz/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
```

刷新文件

```sh
source ~/.zprofile
```

在终端输入`open -e ~/.zprofile`可以直接打开对应的配置文件进行检查

```sh
open -e ~/.zprofile
```

### Java

#### 历史

官网下载链接：https://www.oracle.com/cn/java/technologies/downloads/archive/

我选择了[Java SE 8 (8u211 and later)](https://www.oracle.com/cn/java/technologies/javase/javase8u211-later-archive-downloads.html)中的 macOS ARM64 DMG Installer

> 存在后台进程 Oracle Java、Helper-Tool

配置 Java 环境变量

```sh
echo '\nexport JAVA_HOME=$(/usr/libexec/java_home -v 1.8)' >> ~/.zprofile
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zprofile
source ~/.zprofile
```

在终端输入`open -e ~/.zprofile`可以直接打开对应的配置文件进行检查

```sh
open -e ~/.zprofile
```

在终端输入`echo $JAVA_HOME`用于确认 JAVA_HOME 环境变量已经正确设置

```sh
echo $JAVA_HOME
```

#### 新的

上述方式安装的是 JRE，导致需要 JDK 的操作无法启动，需要安装 JDK，JDK 具备 JRE 全部功能
**卸载原有的**

```bash
# 查看路径
/usr/libexec/java_home -V

# 删除示例，若不懂问GPT
rm -rf /Users/quartz/Library/Java/JavaVirtualMachines/azul-1.8.0_432

# 运行以下命令，确保系统中没有任何可用的 Java 版本
/usr/libexec/java_home -V

# 验证 java 和 javac 命令
java -version
javac -version
```

**安装新的**

```BASH
# brew更新
brew update

# 安装
brew install --cask zulu@8
```

配置 Java 环境变量

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
export PATH=$JAVA_HOME/bin:$PATH
```

刷新

```bash
source ~/.zprofile
```

验证

```
java -version
javac -version
```

### Maven

根据所在不同公司，对 maven 版本的要求可能不一致

**使用传统方式安装 maven（我使用该方式）**

下载链接：https://archive.apache.org/dist/maven/maven-3/3.9.4/binaries/

下载目标：apache-maven-3.9.4-bin.tar.gz

解压后将其存放在如下目录

```

/usr/local

```

在终端输入

```sh
echo '\nexport M2_HOME=/usr/local/apache-maven-3.9.4' >> ~/.zprofile
echo 'export PATH=$M2_HOME/bin:$PATH' >> ~/.zprofile
source ~/.zprofile
```

输入以下命令，如果命令运行成功并输出了 Maven 的版本信息，意味着安装好了

```sh
mvn -v
```

### Mysql

使用 Homebrew 来安装 mysql 并进行配置，依次执行以下代码，设置 root

```sh
brew install mysql

mysql --version
```

安装完成后提示

```
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -u root

To restart mysql after an upgrade:
  brew services restart mysql
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/mysql/bin/mysqld_safe --datadir\=/opt/homebrew/var/mysql
```

根据提示，输入

```
mysql_secure_installation
```

跟进提示 yes/no

若提示输入密码不符合强度，强制退出重新输入该命令，即可使用简单密码登陆

> 存在后台进程 mysqlId_safe

### Node

使用 homebrew 来安装 Node，

```sh
brew install node
```

安装完成后，在终端中运行以下命令显示已安装的 Node.js 版本号，当前 22

```sh
node -v
```

在终端中运行以下命令显示已安装的 npm 版本号，当前 10

```sh
npm -v
```

使用 nvm 管理 node 时，需要使用 nvm0.39.1

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

环境变量

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

刷新

```
source ~/.zprofile
```

还需要使用

```
softwareupdate --install-rosetta
```

### SVN

使用 homebrew 来安装 svn，看公司需求

```sh
brew install svn
```

## 美化

### 1、Mac 终端

1. 终端--设置--描述文件--文本--背景--颜色与效果：设置背景色（B04D39）
2. 终端--设置--描述文件--文本--字体--更改：设置自定义字体（手札体-简）
3. 终端--设置--描述文件--文本--平滑文本：设置常规字体颜色（FFE795）
4. 终端--设置--描述文件--文本--使用粗字体：设置加粗字体颜色（C8D951）

### 2、Mac 鼠标

1. 系统设置--触控板--跟踪速度（设置跟踪速度）
2. 系统设置--辅助功能--显示--指针--指针大小
3. 系统设置--辅助功能--显示--指针--指针填充颜色（00BDA6）

### 3、Mac 输入法

> 效果为中英键切换大小写，option+tab 组合切换中英文

1. 系统设置--键盘--键盘快捷键--输入法--选择上一个输入法：设置为 control+tab，点击现有的描述进入编辑状态按一下即可
2. 系统设置--键盘--键盘快捷键--输入法--选择下一个输入法：设置为 option+tab（常用），点击现有的描述进入编辑状态按一下即可
3. 系统设置--键盘--文字输入--编辑--使用"中/英"键切换“ABC”输入法：取消勾选

### 4、Mac 桌面

1. 系统设置--桌面与程序坞--调度中心--根据最近的使用情况自动排列空间：取消勾选

### 5、InteliJ IDEA 的 Maven 仓库配置

1. 打开 InteliJ IDEA 的：Settings--构建、执行、部署--构建工具--Maven

2. 终端输入`mvn -v`，拷贝地址（根据系统、安装方法不同）

   ```
   ppp_melody@QuartzdeMacBook-Pro ~ % mvn -v
   Apache Maven 3.9.4 (dfbb324ad4a7c8fb0bf182e6d91b0ae20e3d2dd9)
   Maven home: /usr/local/apache-maven-3.9.4
   Java version: 1.8.0_401, vendor: Oracle Corporation, runtime: /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
   Default locale: zh_CN, platform encoding: UTF-8
   OS name: "mac os x", version: "14.3.1", arch: "aarch64", family: "mac"
   ```

3. 将拷贝的地址粘贴到：Settings--构建、执行、部署--构建工具--Maven--Maven 主路径

4. 回到桌面，按住 command+shift+G，粘贴刚刚复制的路径，前往该文件夹

5. 在其下的 config 目录下，找到 setting 文件，复制其路径`/usr/local/apache-maven-3.9.4/conf/settings.xml`，拷贝到：Settings--构建、执行、部署--构建工具--Maven--用户设置文件

6. 然后，在`/usr/local/apache-maven-3.9.4`目录下，创建一个一个文件夹`repo`作为 maven 本地仓库

7. 复制 repo 仓库的路径`/usr/local/apache-maven-3.9.4/repo`，拷贝到：Settings--构建、执行、部署--构建工具--Maven--本地仓库

8. 解决 IDEA 每次打开新的 maven 项目都需要重新配置 maven home 的问题：`FIle`-->`New Projects Setup`-->`Setting for New Projects`，在此处设置 Maven 地址

> 若公司使用私服，需要在 settings 文件中额外配置私有仓库地址

### 6、InteliJ IDEA 插件

1. Settings--插件--Chinese (Simplified) ：中文界面
2. Settings--插件--MyBatisX：xml 文件跳转
3. Settings--插件--GitHub Copilot：代码补全
4. Settings--插件--Nyan Progress Bar：彩虹进度条
5. Settings--插件--Rainbow Brackets : 彩虹括号

### 7、InteliJ IDEA 其他配置

1. 使用新 UI
2. Settings--外观与行为--外观--使用自定义字体（导航栏）
3. Settings--编译器--字体（编译器）
4. Settings--工具--保存时的操作--重新格式化代码（保存时格式化代码）
5. Settings--编译器--代码风格--Java--代码生成
   1. Line comment at first column 顶格注释：取消勾选
   2. Add a space comment start 注释前加空格：勾选

### 8、Visual Studio Code 设置

1. Code--首选项--设置--搜索“formatOnSave”--勾选：保存时格式化（可能不生效，需要下载插件）
2. commond+shift+p---搜索“Wrap with Abbreviation”---齿轮设置快捷键为 shift+B：快速给所选内容添加你想要的标签

### 9、Visual Studio Code 插件：

1. Chinese (Simplified) ：中文界面
2. GitHub Copilot：代码补全
3. Live Server：
4. prettier：格式化插件
5. Vue Language Features (Volar)：显示 Vue 代码高亮
6. Bracket Pair Colorizer：给匹配的括号着色（已内置无需安装）
7. Code Spell Checker：拼写检查器。比如 banana 单词写错成 banane ，会提示你是否修改成 banana ，也可以将 banane 添加至检查器的字典中
8. Indent-Rainbow：让缩进带有颜色
9. Material Icon Theme：好看的文件图标
10. Power Mode：。。。
11. Trailing Spaces：突出显示尾随空格，让你的“空格”型强迫症 显示呈现。
13. Error Lens：将编辑器诊断出的警告、错误、语法问题（提示的波浪线）等，以用颜色填充行背景的方式突出提示，并将诊断信息显示在尾部。

### 10、Visual Studio Code 配置文件

```json
{
  "workbench.iconTheme": "material-icon-theme",
  "workbench.colorTheme": "Visual Studio Dark",
  "workbench.preferredDarkColorTheme": "Visual Studio Dark",
  "workbench.preferredHighContrastColorTheme": "Visual Studio Dark",
  "workbench.preferredHighContrastLightColorTheme": "Visual Studio Dark",
  "workbench.preferredLightColorTheme": "Visual Studio Dark",
  "editor.inlineSuggest.enabled": true,
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "explorer.confirmPasteNative": false,
  "explorer.confirmDelete": false,

  "editor.tokenColorCustomizations": {
    "textMateRules": [
      {
        "scope": [
          // html文件中的`<!DOCTYPE>`颜色
          "keyword.control",
          // html文件中的`<html>`和`</html>`颜色
          "entity.other.attribute-name.html",
          // css文件中的`::before`和`::after`颜色
          "entity.other.attribute-name.pseudo-class.css"
        ],
        "settings": {
          "foreground": "#D28BF0"
        }
      },
      {
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#F4606C"
        }
      },
      {
        "scope": "string.quoted",
        "settings": {
          "foreground": "#BDEA8A" // 字符串为绿色
        }
      },
      {
        "scope": [
          "text.html.derivative",
          "text.html.basic",
          "meta.embedded.block.html",
          "source.html",
          "text.plain",
          "variable.css",
          // css文件中的`var(--)`中的`--`颜色
          "variable.argument.css"
        ],
        "settings": {
          "foreground": "#EEFFFE" // 普通文本亮白色
        }
      },
      {
        "scope": [
          // html文件中的`<`和`>`颜色
          "punctuation.definition.tag",
          // css文件中 `:root`中的`:`颜色
          "punctuation.definition.entity.css"
        ],
        "settings": {
          "foreground": "#79DDF7"
        }
      },
      {
        "scope": [
          // css文件中的`10px`中的`px`颜色
          "constant.numeric.css",
          // css文件中的`10px`中的`10`颜色
          "keyword.other.unit.px.css"
        ],
        "settings": {
          "foreground": "#F98669"
        }
      },
      {
        "scope": [
          // css文件中的`var()`中`var`的颜色
          "meta.function.variable.css"
        ],
        "settings": {
          "foreground": "#7DA7FE"
        }
      },
      {
        "scope": [
          // css文件中的属性名的颜色
          "support.type.property-name.css"
        ],
        "settings": {
          "foreground": "#B1CDD3"
        }
      }
    ]
  },

  "workbench.colorCustomizations": {
    // {}括号颜色
    "editorBracketHighlight.foreground2": "#79DDF7",
    // []括号颜色
    "editorBracketHighlight.foreground3": "#79DDF7",
    // ()括号颜色
    "editorBracketHighlight.foreground1": "#79DDF7"
  }
}
```

### 11、DataGrip 插件

1. Chinese (Simplified) ：中文界面
2. GitHub Copilot：代码补全

### 12、DataGrip 其他配置

1. Settings--外观与行为--外观--使用自定义字体（导航栏）
2. Settings--编译器--字体（编译器）

### 13、终端高亮

> 前置需要安装 homebrew

安装`itrem2`，比默认终端好用，安装完成后使用`itrem2`

```bash
brew install --cask iterm2
```

若没有 git，安装 git

```bash
brew install git
```

安装 Oh My Zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

下载 Powerlevel10k：

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

配置使用 Powerlevel10k 主题： 编辑 `~/.zshrc` 文件，将主题设置为 `powerlevel10k`：

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

重新加载配置

```bash
source ~/.zshrc
```

若没有出现字体下载，下载字体加入字体库，并将 VSCODE 和终端的字体设置为 MesloLGS NF[链接](https://github.com/romkatv/powerlevel10k/blob/master/font.md)，设置字体后重新打开`itrem2`进行设置

```bash
# vs code 设置
"terminal.integrated.fontFamily": "MesloLGS NF",
```

重新进入`itrem2`设置，设置完毕后，即达到效果

若需要配置颜色，前往[链接](https://github.com/josean-dev/dev-environment-files/blob/main/coolnight.itermcolors)下载导入，也可以自定义，参考[官网](https://iterm2colorschemes.com)

补全提示插件安装：

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

配置插件： 编辑 `~/.zshrc` 文件，将补全提示插件加入

```bash
# 此前已有git
plugins=(git zsh-autosuggestions)
```

重新加载配置

```bash
source ~/.zshrc
```

高亮插件安装：

```bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

配置插件： 编辑 `~/.zshrc` 文件，将高亮插件加入

```bash
# 此前已有git、补全提示、
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

重新加载配置

```bash
source ~/.zshrc
```

加入 web-search

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting web-search)
```

重新加载配置

```bash
source ~/.zshrc
```

## 特殊配置

1. 设置 idea 启动时不自动打开上一次的项目

   1. 打开 IDEA，进入默认项目，选择选择菜单 File>Settings 进入设置页面。
   2. 选择 Appearance & Behavior>System Settings，进入系统设置页面。
   3. 在 Startup/Shutdown 栏目处，去掉默认的勾选 Reopen last project on startup（在启动的时候打开上次的项目），去掉勾选之后，点击确认。
   4. 关闭 idea 软件后，再次打开 idea 软件，就会进入欢迎界面，可以选择一个项目，也可以创建一个新的项目。

2. 设置 vscode 启动时不自动打开上一次的项目
   1. `settings`=>`window.restoreWindows`=>`none`。
   2. `settings`=>`files.hotExit`=>`off`。（设置 Command+Q 时若有文件未保存出现提示）

## 邮箱配置

谷歌：https://www.google.com/intl/zh-CN_cn/gmail/about/

新浪地址：https://mail.sina.com.cn/

网易地址：https://mail.163.com

谷歌验证简单，网页验证登陆

新浪只有一个授权码，重置后，需要同步设置手机和电脑

网易需要扫码发送短信，单个设备单个码
