## 心得

> 经历数次的重装，我意识到，最好的方法是将安装包备份好，直接通过硬盘传输。不管是命令行还是官网下载，都没有硬盘传输快。网络环境好的情况下，官网优先，网络环境差的情况下，硬盘优先。

**建议顺序**

1. 修改输入法快捷键（优先进行 Mac 优化设置，若无要求跳过这一步）
2. 修改锁屏时间（2 分钟熄屏过于短暂）以及桌面排序（防止桌面顺序自动切）
3. App store 登陆外区苹果商店账号，下载 Shadowrocket，配置 VPN
4. App store 登陆默认苹果商店账号，下载 App Store 应用（全部进入下载队列后下载 homebrew）
5. 下载 homebrew 包管理工具（需要等待，下载的同时下载（拷贝）第三方应用）
6. 下载 iterm2 命令行工具提升体验

## Mac 美化

1. Mac 鼠标
    1. 系统设置--触控板--跟踪速度（设置跟踪速度）
    2. 系统设置--辅助功能--显示--指针--指针大小（建议默认调大一档）
    3. 系统设置--辅助功能--显示--指针--指针填充颜色（第二页选择 RGB，推荐 00BDA6）
2. Mac 输入法（效果为中英键切换大小写，option+tab 组合切换中英文）
    1. 系统设置--键盘--键盘快捷键--输入法--选择上一个输入法：取消该快捷键
    2. 系统设置--键盘--键盘快捷键--输入法--选择下一个输入法：设置为 option+tab（常用），点击现有的描述进入编辑状态按一下即可
    3. 系统设置--键盘--文字输入--编辑--使用"中/英"键切换“ABC”输入法：取消勾选
3. Mac 桌面
    1. 系统设置--桌面与程序坞--调度中心--根据最近的使用情况自动排列空间：取消勾选

- （可选）打开字体册下载喜爱的字体，Mac 重装后部分字体不会自动下载，我偏爱 Hannotate 手札体，SC 简体，TC 繁体
- （可选）Mac 终端，该选项可废弃，目前推荐 iterm2，喜欢原生终端可以设置
    1. 终端--设置--描述文件--文本--背景--颜色与效果：设置背景色（B04D39）
    2. 终端--设置--描述文件--文本--字体--更改：设置自定义字体（手札体-简）
    3. 终端--设置--描述文件--文本--平滑文本：设置常规字体颜色（FFE795）
    4. 终端--设置--描述文件--文本--使用粗字体：设置加粗字体颜色（C8D951）

## App Store 应用

> app store 下载便于更新，不建议硬盘安装

1. 外区先下载：
    - Shadowrocket
2. 必备：
    - 超级右键专业版（下载后打开进行配置，打开后提示拷贝命令到终端，按下回车开启权限）
    - Magnet（进行快捷键配置，关闭顶部显示）
    - Network&Battry（手动设置开启自动启动）
    - Termius（shh 连接工具）
    - 微信、QQ、百度网盘、WPS、Eudic、DaisyDisk、Movist
3. 考虑：
    - 钉钉、腾讯会议、网易云

## Homebrew

> 可能需要梯子保障正常下载，下载很慢耐心等待，若实在无法下载，尝试下面解决方案
> 解决方案：改动 mac 电脑的“系统设置”--“WIFI”--“详细信息”--“DNS”，点击加号，添加 8.8.8.8 即（若再出现问题，在 8.8.8.8 于 1.1.1.1 之间切换尝试）

1. 官网链接
    1. https://brew.sh/
2. 下载命令（源自官网，拷贝入终端进行）
    ```sh
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
3. 安装后，提示如下内容，意思是，在终端输入如下代码将 Homebrew 的环境变量添加到你的 .zprofile 文件中，即安装成功，需要进行环境变量配置
    ```sh
    ==> Next steps:
    - Run these two commands in your terminal to add Homebrew to your PATH:
        (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/ppp_melody/.zprofile
        eval "$(/opt/homebrew/bin/brew shellenv)"
    - Run brew help to get started
    - Further documentation:
        https://docs.brew.sh
    ```
4. 执行提示的代码，并在执行后刷新环境配置
    ```sh
    (echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/quartz/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
    source ~/.zprofile
    ```
5. 检查配置文件内容（在终端输入`open -e ~/.zprofile`可以直接打开配置文件）
    ```sh
    open -e ~/.zprofile
    ```
6. 检查是否安装成功（终端输入检测版本命令，输出版本号即安装成功）
    ```sh
    brew --version
    ```

## iterm2&Powerlevel10k

1. 安装`iterm2`，比默认终端好用，安装完成后使用`itrem2`
    ```bash
    brew install --cask iterm2
    ```
2. 安装 Oh My Zsh
    ```bash
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```
3. 下载 Powerlevel10k 、补全提示插件、高亮插件
    ```bash
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
    ```
4. 配置使用 Powerlevel10k 主题以及插件： 编辑 `~/.zshrc` 文件，将主题设置为 `powerlevel10k`，将在插件处加入`zsh-autosuggestions`（补全提示）、`zsh-syntax-highlighting`（高亮）、`web-search`联网搜索
    1. 打开配置文件
    ```sh
    open -e ~/.zshrc
    ```
    2. 参考
    ```txt
    ...
    ZSH_THEME="powerlevel10k/powerlevel10k"
    ...
    # 此前已有git
    plugins=(git zsh-autosuggestions zsh-syntax-highlighting web-search)
    ...
    ```
5. 重新加载配置
    ```bash
    source ~/.zshrc
    ```
6. 若没有出现字体下载，下载字体加入字体库，并将 VSCODE 和终端的字体设置为 MesloLGS NF[链接](https://github.com/romkatv/powerlevel10k/blob/master/font.md)，设置字体后重新打开`itrem2`进行设置
7. 重新选择风格命令
    ```sh
    p10k configure
    ```

## 第三方工具

> 官网下载最新版本

1. 推荐下载
    1. Typora（轻量 markdown 文本编辑器）
        - https://typoraio.cn
    2. Obsidian（高性能 markdown 文本编辑器）
        - https://obsidian.md/download
    3. InteliJ IDEA（下载 Ultimate 版本）
        - https://www.jetbrains.com/idea/download
    4. DataGrip
        - https://www.jetbrains.com/datagrip/download
    5. Visual Studio Code
        - https://code.visualstudio.com/Download
    6. Chrome Dev
        - https://www.google.com/chrome/dev
2. 可选
    1. Adobe（淘宝购买正版服务约 60 人民币每月）
        - https://creativecloud.adobe.com
    2. Parallels DeskTop（mac 流程运行 windows，正版昂贵）
        - https://www.parallels.cn/products/desktop/trial/

## 开发工具

1. Java

    1. 使用 Homebrew 安装 JDK
        ```bash
        brew install --cask zulu@17
        ```
    2. 配置 Java 环境变量，终端执行下面代码，添加 Java 环境变量，并刷新环境变量
        ```bash
        echo 'export JAVA_HOME=$(/usr/libexec/java_home -v 17)' >> ~/.zprofile
        echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zprofile
        source ~/.zprofile
        ```
        - `Command + Shift + .`显示隐藏文件
    3. 在终端输入`echo $JAVA_HOME`用于确认 JAVA_HOME 环境变量已经正确设置
        ```sh
        echo $JAVA_HOME
        ```
    4. 验证安装：
        ```bash
        java -version
        javac -version
        ```
    5. 若使用 JDK8
        - 将按照命令中的`@17`替换为`@8`，将配置环境变量命令中的`17`替换为 `1.8`（Java 8 在内部版本号上仍然用 `1.8` 来表示）
    6. 若考虑手动安装
        - 官网下载：https://www.oracle.com/cn/java/technologies/downloads/archive/
    7. 不带后台可以考虑安装 OpenJDK

        ```
        brew install openjdk@17

        echo 'export PATH="/opt/homebrew/opt/openjdk@17/bin:$PATH"' >> ~/.zprofile
        echo 'export CPPFLAGS="-I/opt/homebrew/opt/openjdk@17/include"' >> ~/.zprofile
        source ~/.zshrc
        ```

2. Node

    1. 安装 Node 管理工具 nvm0.39.5
        ```
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
        ```
    2. 重启 iterm 使用 nvm 安装 node18 和 23
        ```
        nvm install 18
        nvm install 23
        ```
    3. 列出当前安装了那些版本
        ```
        nvm ls
        ```
    4. 设置默认版本
        ```
        nvm alias default 18
        ```
    5. 确认当前默认版本
        ```
        nvm alias
        ```
    6. 在终端窗口临时使用某个版本 23
        ```
        nvm use 23
        ```
    7. 查看当前 npm 版本
        ```
        npm -v
        ```

3. Mysql

    0. 目前使用 Homebrew 安装 Mysql 会安装 `9.x` 版本，不兼容 Flyway 常规版本
        1. 官网下载安装兼容性较高的`8.0.42`版本
        2. 官网：https://www.mysql.com/downloads/
        3. 下载地址：https://dev.mysql.com/get/Downloads/MySQL-9.3/mysql-9.3.0-macos15-arm64.dmg
        4. 需要配置环境变量，终端输入
            ```bash
            echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zprofile
            source ~/.zprofile
            ```
    1. 使用 Homebrew 安装 Mysql
        ```sh
        brew install mysql
        ```
    2. 安装完成后提示

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

    3. 根据提示，输入命令设置每次开机自动启动 mysql，存在后台进程 `mysqld_safe`
        ```
        brew services start mysql
        ```
    4. 根据提示，输入命令进行密码设置（复杂密码）
        ```
        mysql_secure_installation
        ```
    5. 跟进提示 yes/no

4. Maven

    0. 使用 IntelliJ IDEA 不需要安装 maven，可以使用内建的 maven

    1. 使用传统方式安装 maven（我使用该方式）
    2. 下载链接（无需手动前往下载）：https://archive.apache.org/dist/maven/maven-3/3.9.4/binaries/
    3. 使用命令行简化操作（复制到终端回车，中间需要输入密码）
        ```sh
        # 切换到下载目录
        cd ~/Downloads
        # 下载 Maven 压缩包
        curl -O https://archive.apache.org/dist/maven/maven-3/3.9.4/binaries/apache-maven-3.9.4-bin.tar.gz
        #  解压到 /usr/local（需 sudo 权限）
        sudo tar -zxvf apache-maven-3.9.4-bin.tar.gz -C /usr/local
        # 配置环境变量
        echo '\nexport M2_HOME=/usr/local/apache-maven-3.9.4' >> ~/.zprofile
        echo 'export PATH=$M2_HOME/bin:$PATH' >> ~/.zprofile
        source ~/.zprofile
        ```
    4. 验证是否安装成功
        ```
        mvn -v
        ```

5. SVN

    1. 使用 homebrew 来安装 svn（若无需求别安装）
        ```sh
        brew install svn
        ```

## 开发配置

1. 生成 ssh key 用于 github
    ```sh
    # 生成
    ssh-keygen -t rsa -b 4096 -C "ppp_melody@163.com"
    # 查看
    cat ~/.ssh/id_rsa.pub
    ```
2. 设置 git 名称和邮箱

    ```sh
    git config --global user.name "你的用户名"
    git config --global user.email "你的邮箱地址"

    # 我的
    git config --global user.name "Yi Miao"
    git config --global user.email "ppp_melody@163.com"
    ```

3. InteliJ IDEA 的 Maven 仓库配置

    1. 解决 IDEA 每次打开新的 maven 项目都需要重新配置 maven home 的问题：`FIle`-->`New Projects Setup`-->`Setting for New Projects`，在此处设置 Maven 地址
    2. 终端输入`mvn -v`，找到 mvn 安装路径，复制路径
        ```
        ppp_melody@QuartzdeMacBook-Pro ~ % mvn -v
        Apache Maven 3.9.4 (dfbb324ad4a7c8fb0bf182e6d91b0ae20e3d2dd9)
        Maven home: /usr/local/apache-maven-3.9.4
        Java version: 1.8.0_401, vendor: Oracle Corporation, runtime: /Library/Internet Plug-Ins/JavaAppletPlugin.plugin/Contents/Home
        Default locale: zh_CN, platform encoding: UTF-8
        OS name: "mac os x", version: "14.3.1", arch: "aarch64", family: "mac"
        ```
    3. 回到桌面，按住 command+shift+G，粘贴刚刚复制的路径，前往该文件夹
    4. 在`/usr/local/apache-maven-3.9.4`目录下，创建一个一个文件夹`repo`作为 maven 本地仓库
    5. 打开 InteliJ IDEA 的：Settings--构建、执行、部署--构建工具--Maven
    6. 将拷贝的地址`/usr/local/apache-maven-3.9.4`粘贴到：Settings--构建、执行、部署--构建工具--Maven--Maven 主路径
    7. 在其下的 config 目录下，找到 setting 文件，复制其路径`/usr/local/apache-maven-3.9.4/conf/settings.xml`，拷贝到：Settings--构建、执行、部署--构建工具--Maven--用户设置文件
    8. 复制 repo 仓库的路径`/usr/local/apache-maven-3.9.4/repo`，拷贝到：Settings--构建、执行、部署--构建工具--Maven--本地仓库
    9. **若公司使用私服，需要在 settings 文件中额外配置私有仓库地址**

4. InteliJ IDEA 插件

    0. Setting 快捷键：`Command+，`
    1. Settings--插件--Chinese (Simplified) ：中文界面（可选）
    2. Settings--插件--MyBatisX：xml 文件跳转
    3. Settings--插件--GitHub Copilot：代码补全
    4. Settings--插件--Nyan Progress Bar：彩虹进度条
    5. Settings--插件--Rainbow Brackets : 彩虹括号

5. InteliJ IDEA 其他配置

    1. Settings--工具--保存时的操作--重新格式化代码（保存时格式化代码）
    2. Settings--编译器--代码风格--Java--代码生成
        1. Line comment at first column 顶格注释：取消勾选
        2. Add a space comment start 注释前加空格：勾选
    3. Settings--编译器--代码风格--Java--代码生成
        1. 第一栏调整锁进，个人偏好 888
    4. Settings--外观与行为--外观--亮色主题
    5. Settings--外观与行为--外观--使用自定义字体（导航栏）
    6. Settings--编译器--字体（编译器）
    7. 设置 idea 启动时不自动打开上一次的项目
        1. 打开 IDEA，选择选择菜单 File>Settings 进入设置页面。
        2. 选择 Appearance & Behavior>System Settings，进入系统设置页面。
        3. 在 Startup/Shutdown 栏目处，去掉默认的勾选 Reopen last project on startup（在启动的时候打开上次的项目），去掉勾选之后，点击确认。
        4. 关闭 idea 软件后，再次打开 idea 软件，就会进入欢迎界面，可以选择一个项目，也可以创建一个新的项目。

6. Visual Studio Code 插件：

    1. Chinese (Simplified) ：中文界面（可选）
    2. GitHub Copilot：代码补全
    3. Live Server：渲染网页
    4. prettier：格式化插件
    5. Vue：显示 Vue 代码高亮
    6. Code Spell Checker：拼写检查器。比如 banana 单词写错成 banane ，会提示你是否修改成 banana ，也可以将 banane 添加至检查器的字典中
    7. Indent-Rainbow：让缩进带有颜色
    8. Material Icon Theme：好看的文件图标
    9. Trailing Spaces：突出显示尾随空格，让你的“空格”型强迫症 显示呈现。
    10. Error Lens：将编辑器诊断出的警告、错误、语法问题（提示的波浪线）等，以用颜色填充行背景的方式突出提示，并将诊断信息显示在尾部。

7. Visual Studio Code 设置

    1. Code--首选项--设置--搜索“theme”——选择 Light Morden
    2. Code--首选项--设置--搜索“formatOnSave”——勾选：保存时格式化（可能不生效，需要下载插件）
    3. Code--首选项--设置--搜索“hotExit”——勾选：off：设置 Command+Q 时若有文件未保存出现提示
    4. Code--首选项--设置--搜索“terminal.integrated.fontFamily”——输入`MesloLGS NF`：适配 Powerlevel10k 主题
    5. （可选）Code--首选项--设置--搜索“restoreWindows”——勾选：none：设置 vscode 启动时不自动打开上一次的项目

8. DataGrip 其他配置

    1. Settings--外观与行为--外观--使用自定义字体（导航栏）
    2. Settings--编译器--字体（编译器）

## 邮箱配置

谷歌：https://www.google.com/intl/zh-CN_cn/gmail/about/

新浪地址：https://mail.sina.com.cn/

网易地址：https://mail.163.com

谷歌验证简单，网页验证登陆

新浪只有一个授权码，重置后，需要同步设置手机和电脑

网易需要扫码发送短信，单个设备单个码

## 补充

1. 番茄钟 🍅：https://github.com/ivoronin/TomatoBar
2. Parallels DeskTop：破解教程：https://www.yuque.com/xunijiaoyu/gzmmym/oqi4my4encp2vrru
3. Office 套件（盗版）：链接：https://www.ifunmac.com/2023/07/office-2021-16-75/

## Visual Studio Code 配置文件备份

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

## 常规版本备份

```json
{
	// 主题
	"workbench.colorTheme": "Default Light Modern",
	// 图标
	"workbench.iconTheme": "material-icon-theme",
	// tab
	"editor.tabSize": 2,
	// 未保存时退出提示
	"files.hotExit": "off",
	// 终端字体
	"terminal.integrated.fontFamily": "MesloLGS NF",

	// 设置换行模式为按指定列数换行
	"editor.wordWrap": "wordWrapColumn",
	// 设置换行的列数为 80
	"editor.wordWrapColumn": 80,
	// 保留视觉标尺
	"editor.rulers": [80],

	// 保存时格式化
	"editor.formatOnSave": true,
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
	"[json]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[jsonc]": {
		// 为带注释的 JSON (JSONC) 添加配置 (settings.json 文件本身就是 jsonc)
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[typescriptreact]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},

	// 粘贴文件时不再提示
	"explorer.confirmPasteNative": false
	// 删除文件时不再提示
	// "explorer.confirmDelete": false,
}
```
