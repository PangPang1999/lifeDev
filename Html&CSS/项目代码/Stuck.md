## stuck

**Par3 42 Building for Production**：在尝试 build 的过程中，更换了各种版本，出现了各种文件，目前找到两个不会出错的方案

- **直接方案（推荐）**：，使用最新版本的 node（当前为 23.5.0）、parcel（当前为 2.13.3）（不是 parcel-bundler）

  ```bash
  # 删除`dist`文件夹，`.cache`文件夹，`.parcel-cache`文件夹（若有），`node_modules`文件夹，`package-lock.json`文件，`package.json`文件
  rm -rf dist .cache .parcel-cache node_modules package-lock.json package.json
  npm uninstall -g parcel # 卸载当前版本
  npm uninstall -g parcel-bundler # 卸载当前版本


  nvm intall node # 会默认下载最新版本
  nvm use 23 # 当前最新是23
  npm init -y # 初始化项目
  npm install -g parcel # 会默认下载最新版本
  # 这一步之后，在配置文件package.json中加上  "dependencies": {"parcel": "2.13.3"},并删除`"main": "index.js",`
  npm i # 在本地安装对应依赖
  parcel index.html # 运行，按住control+C退出
  parcel build index.html # 构建
  ```

- 间接方案

  ```bash
  # 删除`dist`文件夹，`.cache`文件夹，`.parcel-cache`文件夹（若有），`node_modules`文件夹，`package-lock.json`文件，`package.json`文件
  rm -rf dist .cache .parcel-cache node_modules package-lock.json package.json
  npm uninstall -g parcel # 卸载当前版本
  npm uninstall -g parcel-bundler # 卸载当前版本

  # 这一步之后，在配置文件package.json中加上  "dependencies": {"parcel": "1.12.3"},并删除`"main": "index.js",`
  npm install -g parcel-bundler@1.12.3
  npm init -y
  parcel index.html
  # 这一步之后，跟目录下创建文件`.htmlnanorc.js`，填入`module.exports = { minifySvg: false }`
  parcel build index.html
  ```
