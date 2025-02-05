vscode
首选项->配置文件->默认->设置
{}settings.json
```
{
  "workbench.iconTheme": "vscode-icons",
  "editor.guides.bracketPairs": true,
  "editor.tabSize": 2,
  "editor.inlineSuggest.enabled": true,
  "typescript.locale": "zh-CN",
  "diffEditor.ignoreTrimWhitespace": false,
  "files.associations": {
    "*.ftl": "ftl-xml"
  },
  "editor.accessibilitySupport": "off",
  "editor.largeFileOptimizations": false,
  "z-reader-plus.onlineSite": "笔趣阁",
  "z-reader.encoding": "gbk",
  "z-reader.onlineSite": "起点",
  "txt-reader.filePath": "/Users/fang/.vscode/extensions/aooiu.z-reader-1.1.15/book/",
  "workbench.editorAssociations": {
    "*.docx": "default"
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar"
  },
  "gitlens.graph.minimap.enabled": false,
  "github.copilot.editor.enableAutoCompletions": true,
  "terminal.integrated.shellIntegration.enabled": false,

  "terminal.integrated.fontFamily": "MesloLGS NF",
  // "workbench.iconTheme": "material-icon-theme",
  // "workbench.colorTheme": "Visual Studio Dark",
  // "workbench.preferredDarkColorTheme": "Visual Studio Dark",
  // "workbench.preferredHighContrastColorTheme": "Visual Studio Dark",
  // "workbench.preferredHighContrastLightColorTheme": "Visual Studio Dark",
  // "workbench.preferredLightColorTheme": "Visual Studio Dark",
  "editor.inlineSuggest.enabled": true,
  // "[vue]": {
  //   "editor.defaultFormatter": "esbenp.prettier-vscode"
  // },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "explorer.confirmPasteNative": false,
  "explorer.confirmDelete": false,

  // 该设置控制如何处理“未信任的文件
  "security.workspace.trust.untrustedFiles": "open",

  // 该设置控制在资源管理器（Explorer）中拖放文件时，是否需要确认提示
  "explorer.confirmDragAndDrop": false,

  "editor.tokenColorCustomizations": {
    /**
     * 字体
     */
    "textMateRules": [
      {
        "scope": [
          "entity.other.attribute-name.class.css", //css文件中的class
          "entity.other.attribute-name.html" //html中的属性名
        ],
        "settings": {
          "fontStyle": "italic" // 设置为斜体
        }
      },
      /**
       * 颜色
       */
      {
        "scope": ["entity.name.tag", "entity.name.tag.css"],
        "settings": {
          "foreground": "#F4606C" //红色，body、html
        }
      },
      {
        "scope": [
          // css文件中的`10px`中的`px`颜色
          "constant.numeric.css",
          // css文件中的`10px`中的`10`颜色
          "keyword.other.unit.px.css",

          // "meta.property-value.css",
          "meta.property-list.css",
          "keyword.other.unit.percentage.css",
          "keyword.other.unit.rem.css",
          "support.constant.media.css",
          "keyword.other.unit.vh.css",
          "support.constant.color.w3c-standard-color-name.css",
          "keyword.other.unit.s.css",
          "meta.at-rule.media.body.css",
          "keyword.other.unit.fr.css"
        ],
        "settings": {
          "foreground": "#F98669" // 橙红色
        }
      },
      {
        "scope": ["meta.function.misc.css"],
        "settings": {
          "foreground": "#FF3D6E" //深红色
        }
      },

      {
        "scope": "string.quoted",
        "settings": {
          "foreground": "#BDEA8A" // 绿色
        }
      },
      {
        "scope": [
          // html文件中的`<`和`>`颜色
          "punctuation.definition.tag",
          // css文件中 `:root`中的`:`颜色
          "punctuation.definition.entity.css",
          // css文件中的`;`颜色
          "punctuation.terminator.rule.css",
          "punctuation.definition.keyword.css",
          "keyword.control.at-rule.media.css",
          "constant.other.color.rgb-value.hex.css",
          "punctuation.separator.list.comma.css",
          "punctuation.separator.key-value.css",
          "punctuation.definition.string.begin.html",
          "punctuation.definition.string.end.html"
        ],
        "settings": {
          "foreground": "#79DDF7" //蓝色，符号
        }
      },
      {
        "scope": [
          // css文件中的`var()`中`var`的颜色
          "meta.function.variable.css",
          "support.function.transform.css",
          "support.function.shape.css",
          "support.function.misc.css"
        ],
        "settings": {
          "foreground": "#7DA7FE" //蓝紫色，功能
        }
      },
      {
        "scope": [
          // html文件中的`<!DOCTYPE>`颜色
          "keyword.control",
          // html文件中的`<html>`和`</html>`颜色
          "entity.other.attribute-name.html",
          // css文件中的`::before`和`::after`颜色
          "entity.other.attribute-name.pseudo-class.css",
          "keyword.operator.logical.and.media.css",
          "entity.other.attribute-name.pseudo-element.css",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#D28BF0"
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
          // css文件中的属性名的颜色
          "support.type.property-name.css",
          "support.type.property-name.media.css"
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
  },

  // 其他设置
  "vue.server.hybridMode": false,
  // 自动换行
  "editor.rulers": [80], // 显示在第 80 列的竖线
  "editor.wordWrap": "bounded",
  "editor.wordWrapColumn": 80,
  "diffEditor.maxComputationTime": 0,
  "liveServer.settings.donotShowInfoMsg": true,
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "gitlens.gitCommands.skipConfirmations": [
    "fetch:command",
    "stash-push:command",
    "switch:command"
  ],
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  } // 在第 80 列换行
}


首选项->配置代码片段
```
1. 配置代码片段
```{
	// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"
	// }
	"Log to console": {
		"prefix": "lll", // 输入 'lll' 后会触发代码片段
		"body": [
			// "console.log($1);"
			"console.log('${1:field}:', $1);"
		],
		"description": "Log to console"
	}
}
```

首选项->主题->现代深色 Default Dark Modern

