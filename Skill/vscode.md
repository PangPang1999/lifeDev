在 vscode 内置文件中，可以自定义快捷指令

```
~/Library/Application Support/Code/User/snippets/snippets.code-snippets
```

辅助快速输出字段

```
	"Log to console": {
		"prefix": "lll", // 输入 'lll' 后会触发代码片段
		"body": [
			// "console.log($1);"
			"console.log('${1:field}:', $1);"
		],
		"description": "Log to console"
	}
```
