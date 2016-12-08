---
title: hexo-next主题配置
date: 2016-12-08 11:43:06
categories: blog
tags:
    - hexo
    - next
---
hexo还有一个好处就是拥有很多漂亮的主题，其中我选择了next，然后把配置过程中遇到的一些问题写下来备忘。
### 设置「阅读全文」
有三种方式：
 1. 在文章中使用 `<!-- more -->` 手动进行截断，Hexo 提供的方式
 2. 在文章的 front-matter 中添加 description，并提供文章摘录
 3. 自动形成摘要，在 主题配置文件 中添加：
{% img full-image /img/201612081249.jpg %}

### 添加标签页（categories和tags）
```
$ hexo new page tags
$ hexo new page categories
$ vim source/tags/index.md 
### add line: type: "tags"
$ vim source/categories/index.md
### add line: type: "categories"
```
<!-- more -->
原理：分别在 source 下生成 tags 和 categories 文件夹，并在里面的文件中分别添加一行代码之后就可以访问 /tags/index.html 页面。
（如有问题可尝试一下步骤）
1.删除 db.json
2.hexo clean
3.hexo g
#### 参考
[next官方手册](http://theme-next.iissnan.com/getting-started.html)