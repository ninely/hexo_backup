---
title: PHP中global与$GLOBALS['']分析
date: 2017-01-22 11:32:35
categories: php
tags:
    - php
---

>根据官方的解释：
>$GLOBALS['var'] 是外部的全局变量$var本身
>global $var 是外部$var的同名引用

<!-- more --> 
举例说明一下：
```
<?php
$var1 = 1;
$var2 = 2;
function test() {
$GLOBALS['var2'] = &$GLOBALS['var1'];
}

test();
echo $var2; // 输出 1
```

```
<?php
$var1 = 1;
$var2 = 2;

function test(){
global $var1, $var2;
$var2 = &$var1;
echo $var2;
$var2 = 'snsgou.com';
}

test(); // 输出 1
echo $var2; // 输出 2
echo $var1; // 输出 snsgou.com
```
test()函数中的$var1，$va2都是局部变量，只不过是加了global关键字后，分别引用指向全局变量$var1，$var2了，当 `$var2 = &$var1`; 时，局部变量$var2不再指向全局变量$var2，而重新指向全局变量$var1，换句话来说，局部变量$var2的改变，不会再影响到全局变量$var2，而会影响到重新指向的全局变量$var1。 

我们再来看一个例子:
```
<?php
$var1 = 1;
function test(){
unset($GLOBALS['var1']);
}
test();
echo $var1; //因为$var1被删除了，所以什么东西都没有打印。
```

```
<?php
$var1 = 1;
function test(){
global $var1;
unset($var1);
}
test();
echo $var1; // 输出1。
```
证明删除的只是别名，$GLOBALS['var']的引用，起本身的值没有受到任何的改变。
也就是说 global $var 其实就是`$var = &$GLOBALS['var']`。

如果写成如下，则会出错：
```
<?php
$GLOBALS["var"] = 1;
$var = &$GLOBALS["var"];
unset($GLOBALS['var']);
echo $var; //脚本没法执行
```

unset只是把只是断开了变量名和变量内容之间的绑定。这并不意味着变量内容被销毁了。
如果在一个函数内部给一个声明为 global 的变量赋于一个引用，该引用只在函数内部可见。可以通过使用 $GLOBALS 数组避免这一点。

我们都知道php中的函数所产生的变量都是函数的私有变量，那么global关键字产生的变量也肯定逃不出这个规则，global在函数产生一个指向函数外部变量的别名变量，而不是真正的函数外部变量，一但改变了别名变量的指向地址，就会发生一些意料不到情况，$GLOBALS[]确确实实调用是外部的变量，函数内外会始终保持一致。
```
<?php
$a = 1;
$b = 2;
function Sum() {
global $a, $b;
$b = $a + $b;
}
Sum();
echo $b; // 输出3
?>
```
怎么不是2呢，在函数外部不是不影响吗，请注意$b在函数中并没有通过引用修改，而是修改的$b指向物理内存的值。
