在 vscode 内置文件中，可以自定义快捷指令

```
~/Library/Application Support/Code/User/snippets/snippets.code-snippets
```

通过 command+P 快捷键 能快速搜索到该文件

1. 辅助快速输出字段

   ```
   	"Log to console": {
   		"prefix": "ll",
   		"body": [
   			"console.log(${1});"
   		],
   		"description": "Log field name, type and value to console"
   	},
   	"Log to console with name": {
   		"prefix": "lll",
   		"body": [
   			"console.log('${1:field} : ', ${1});"
   		],
   		"description": "Log field name, type and value to console"
   	},
   	"Log to console with type": {
   		"prefix": "lllp",
   		"body": [
   			"console.log('${1:field} (', typeof ${1},'): ', ${1});"
   		],
   		"description": "Log field name, type and value to console"
   	}
   ```

2. 取消 json 注释报错

- 打开一个 json 文件
- command shift p 搜索 Select the Language Mode.
- 点击 Configure File Association for 'json'...
- 输入 jsonc
