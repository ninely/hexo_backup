---
title: hexo搭建个人博客
date: 2016-12-07 18:21:13
categories: blog
tags: hexo
---
### 选择hexo
通过 Github Pages直接写的HTML静态博客维护起来相当麻烦，相当累人，所以我在网上了解到目前一些比较流行的两个静态博客框架Jekyll和Hexo。
两者的区别：
Jeky基于Ruby实现，安装Jeky需要搭建Ruby环境，在Windows搭建Ruby环境并不是被推荐的，而 Hexo基于NodeJs实现，在Windows上安装NodeJs开发环境简单。
Jekyll没有本地服务器，无法实现本地博文预览功能，需要上传到WEB容器中才能预览功能，而Hexo可以通过简单的命令实现本地的预览，并直接发布到WEB容器中实现同步。
因为我电脑上装了nodejs，就直接选择hexo来搭建我的博客。
### 安装hexo
安装nodejs非常简单就略过，由于在国内使用npm（NPM是随同NodeJS一起安装的包管理工具）下载扩展速度很慢，大多数推荐使用淘宝NPM镜像替代，输入以下命令等待安装：
`$ npm install -g cnpm --registry=https://registry.npm.taobao.org`
<!-- more -->
这样就可以用cnpm代替npm命令，完在电脑上新建一个blog（自定义）文件夹,该文件夹用于存放你的博客文件,然后右键单击选择 Git Bash
`$ cnpm install -g hexo-cli`
出现的WARN可以不用理会，继续输入以下命令
`$ cnpm install hexo --save`
安装完成后，在输入命令，验证是否安装正确
`$ hexo -v`
`$ hexo init` #初始化
每次部署的步骤，可按以下三步来进行：
`$ hexo clean`
`$ hexo generate`
`$ hexo deploy`
一些常用命令：
`$ hexo new "postName" ` #新建文章
`$ hexo new page "pageName" ` #新建页面
`$ hexo generate ` #生成静态页面至public目录
`$ hexo server ` #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
`$ hexo deploy ` #将.deploy目录部署到GitHub
`$ hexo help  ` #查看帮助
`$ hexo version  ` #查看Hexo的版本
### hexo文件结构及配置
`_config.yml`:网站的 配置 信息，您可以在此配置大部分的参数。
`package.json`:应用程序的信息。
`scaffolds`:模版文件夹。当您新建文章时，Hexo会根据scaffold 来建立文件。
`source`:资源文件夹是存放用户资源的地方。除posts文件夹之外，开头命名为(下划线)的文件/文件夹和隐藏的文件将会被忽略。Markdown和HTML文件会被解析并放到public文件夹，而其他文件会被拷贝过去。
`themes`:主题 文件夹。Hexo会根据主题来生成静态页面。
### hexo渲染过滤
生成静态文件过程中通过_config.yml配置中`skip_render`设置跳过指定文件的渲染，具体配置如下：
1.如果要跳过source文件夹下的demo.html：
`skip_render: demo.html`
2.如果要忽略source下的demo文件夹下所有文件：
`skip_render: demo/*`
3.如果要忽略source下的demo文件夹下.html文件：
`skip_render: demo/*.html`
4.如果要忽略source下的demo文件夹下所有文件和目录：
`skip_render: demo/**`
5.如果要忽略多个路径的文件或目录：
```
skip_render:
    - demo.html
    - demo/*
    - demo/**
```

#### 参考
[零基础免费搭建个人博客](http://hifor.net/2015/07/01/零基础免费搭建个人博客-hexo-github)
[hexo常用笔记](https://segmentfault.com/a/1190000002632530)
[献给写作者的 Markdown 新手指南](http://www.jianshu.com/p/q81RER#)