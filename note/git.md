### github & ssh

配置用户名、邮箱

```shell
git config --global user.name "660e"
git config --global user.email "solunar@vip.qq.com"
```

生成 ssh 密钥

```shell
ssh-keygen -t rsa -C "solunar@vip.qq.com"
```

将生成的 ssh 密钥添加到 github 中，然后执行测试

```shell
ssh -T git@github.com
```

### git init

创建新仓库

```shell
git init
```

### git clone

创建本地仓库的克隆版本

```shell
git clone H:\660e.github.io
```

创建远端仓库的克隆版本

```shell
git clone https://github.com/660e/660e.github.io.git
```

### git status

检查当前文件状态

```shell
git status
```

### git add

将指定（改动过的）文件添加到缓存区

```shell
git add index.html
```

添加所有文件

```shell
git add .
```

### git commit

为缓存区的文件添加注释

- feat/feature：新功能
- fix：修复 bug
- docs：编写文档、编写注释
- style：变更代码格式（不影响代码运行逻辑）
- refactor：重构
- chore：杂务（不属于以上类型的其他变动）

```shell
git commit -m "update"
```

### git push

推送改动到默认分支

```shell
git push
```

推送改动到指定分支

```shell
git push origin master
```

### git branch

查看分支列表

```shell
git branch
```

创建新分支

```shell
git branch dev
```

### git checkout

切换到指定分支

```shell
git checkout dev
```

创建新分支并切换到该分支

```shell
git checkout -b dev
```

将指定文件的修改全部撤销

```shell
git checkout readme.txt
```

### git remote

清理过时的远端分支

```shell
git remote prune origin
```
