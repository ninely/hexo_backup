---
title: PHP大小写敏感规则
date: 2017-01-02 18:45:33
categories: php
tags:
    - php
---

> * 测试版本
> * PHP：5.6.24

#### 一、大小写敏感
1. 变量名区分大小写
    >所有变量均区分大小写，包括$_GET，$_POST，$_REQUEST，$_COOKIE，$_SESSION，$GLOBALS，$_SERVER，$_FILES，$_ENV 等；

2. 常量名默认区分大小写

3. php.ini配置项指令区分大小写

4. 数组索引（键名）区分大小写

<!-- more --> 
#### 二、大小写不敏感

1. 函数名、方法名、类名(包括类中方法) 不区分大小写

2. 魔术常量不区分大小写，推荐大写

3. NULL、TRUE、FALSE不区分大小写

4. 类型强制转换，不区分大小写
> * (int)，(integer) – 转换成整型
> * (bool)，(boolean) – 转换成布尔型
> * (float)，(double)，(real) – 转换成浮点型
> * (string) – 转换成字符串
> * (array) – 转换成数组
> * (object) – 转换成对象
5. 命名空间不区分大小写

