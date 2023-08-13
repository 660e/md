### init

创建并初始化 package.json

```shell
npm init
```

### install

安装 package.json 中配置的依赖包

```shell
npm install
npm i
```

安装指定依赖包，并写入 devDependencies 字段

```shell
npm install <name> --save-dev
npm i <name> -D
```

安装指定依赖包，并写入 dependencies 字段

```shell
npm install <name> --save
npm i <name> -S
```

安装指定版本依赖包

```shell
npm i <name>@<version>
```

### uninstall

卸载指定依赖包

```shell
npm uninstall <name>
npm un <name>
```

### ls

查看安装列表

```shell
npm ls --depth=0
```

查看指定依赖包的版本信息

```shell
npm ls <name>
```

### update

更新指定依赖包

```shell
npm update <name>
npm up <name>
```

### publish

发布

```shell
npm publish
npm publish --access=public
```

### unpublish

撤销

```shell
npm unpublish <package-spec>
```
