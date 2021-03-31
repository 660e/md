### npm init

创建并初始化 package.json

```shell
npm init
```

### npm install

安装 package.json 中配置的依赖包

```shell
npm install
npm i
```

安装指定依赖包，并写入 devDependencies 字段

```shell
npm install webpack --save-dev
npm i webpack -D
```

安装指定依赖包，并写入 dependencies 字段

```shell
npm install jquery --save
npm i jquery -S
```

安装指定版本依赖包

```shell
npm i @vue/cli@4.0.0
```

### npm uninstall

卸载指定依赖包

```shell
npm uninstall webpack
npm r webpack
```

### npm ls

查看安装列表

```shell
npm ls --depth=0
```

查看指定依赖包的版本信息

```shell
npm ls webpack
```

### npm update

更新指定依赖包

```shell
npm update @vue/cli
npm up @vue/cli
```

### npm audit

扫描漏洞

```shell
npm audit
```

扫描漏洞，并修复

```shell
npm audit fix
```

### 参考资料

- [https://docs.npmjs.com/cli/v6/commands](https://docs.npmjs.com/cli/v6/commands)
