---
title: Github搭建个人博客前的准备
date: 2016-12-07 16:21:13
categories: blog
tags: 
    - git
    - github
---
最近才开始想搭建自己的博客，刚刚做了个雏形出来，搭建过程中查找网上的教程很多很杂，所以我想把这整个过程自己总结一下,写点东西记录下来以便不时之需。
## 创建远程仓库Repository
### Github Pages生成网站的两种方式的基本原理
#### 方式一
Github 会给每个用户分配一个域名（username.github.io），有一个项目名为 username.github.io （固定格式，username与账号名一致），项目分支名为 master （默认固定），当你访问 `http://username.github.io/` 时，Github 会解析该项目中分支为 master 的源代码，为你构建一个静态网站，并将生成的 index.html 展示给你。
#### 方式二
Github 还为每个项目提供了域名，创建一个名为 project （任意）的项目，项目分支名为 gh-pages （固定）。那么当你访问 `http://username.github.io/project` 时，Github 会去解析该项目的 gh-pages 分支下的源代码，为你构建网站。
<!-- more -->
所以要搭建自己的博客你有两种选择：
 1. 建立名为 username.github.io 的项目，在 master 分支下存放网站源代码
 2. 建立名为 project 的项目，在 gh-pages 分支下存放网站源代码。

任选上面一种方式创建远程仓库
## 为GitHub账号添加SSH Keys
（已配置过ssh的跳过）
安装git客户端
在Git Bash输入以下指令（任意位置点击鼠标右键），检查是否已经存在了SSH keys：
`ls -al ~/.ssh `
输入以下指令（你注册Github时候的邮箱）生成新的ssh key：
`ssh-keygen -t rsa -C "youremail@domain.com"`
然后系统会要你输入密码：
`Enter passphrase (empty for no passphrase):<输入加密串>`
`Enter same passphrase again:<再次输入加密串>`
在回车中会提示你输入一个密码，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。这个设置是防止别人往你的项目里提交内容。
在自己的目录（C:\Documents and Settings）下有一个.ssh目录，有id_rsa 私钥和id_rsa.pub公钥文件，说明成功了。
接下来打开github，找到账户里面添加SSH，把idrsa.pub内容复制到key里面。
使用下面的命令测试（过程中输入yes即可）
`ssh -T git@github.com`
以上就表示SSH配置好了
设置Git用户名和email：
`git config --global user.name "Your Name"`
`git config --global user.email "youremail@domain.com"`
#### 参考
[Jekyll和Github搭建个人静态博客](http://pwnny.cn/original/2016/06/26/MakeBlog.html)