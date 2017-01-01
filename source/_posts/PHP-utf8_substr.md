---
title: PHP utf-8等宽字符串截取
date: 2016-12-31 13:30:49
categories: php
tags:
    - php
---

>网站等宽等像素值展示内容

>UTF-8是1-4字节变长编码，中文都是3字节，截取UTF8编码字符串从首字节开始指定宽度(非长度), 现有的函数只能使用mb_substr这样的针对编码的截取方式，但是这种处理，在全中文与全英文截取差异很大，会出现参差不齐的效果。

<!-- more --> 
```
<?php
/** 
 * 
 * @param string $str   UTF-8 encoding 
 * @param int[option] $width 截取宽度 
 * @param string[option] $end 被截取后追加的尾字符 
 * @param float[option] $x3
 * 3字节（中文）字符相当于希腊字母宽度的系数coefficient（小数） 
 * 中文通常固定用宋体,根据ascii字符字体宽度设定,不同浏览器可能会有不同显示效果 
 * @return string 
 */ 

function utf8_substr($str, $width = 0, $end = '...', $x3 = 0) {  
    global $CFG; // 全局变量保存 x3 的值  
    if ($width <= 0 || $width >= strlen($str)) {  
        return $str;  
    }
    // 中文占3个字节
    $arr = str_split($str); 
    $len = count($arr);
    // 实际字符串宽度
    $strWidth = 0;
    $width *= 10;  
  
    // 不同字节编码字符宽度系数  
    $x1 = 11;   // ASCII  
    $x2 = 16;  
    $x3 = $x3===0 ? ( $CFG['cf3']  > 0 ? $CFG['cf3']*10 : $x3 = 21 ) : $x3*10;  
    $x4 = $x3;
    $endStr = '';
    $offset = 0;
    for ($offset = 0; $offset < $len; $offset++) {  
        if ($strWidth >= $width) {  
            $endStr = $end;  
            break;  
        }
        // 根据返回整型的 ASCII 码值判断字符宽度
        $character = ord($arr[$offset]);  
        if ($character <= 127) {  
            $strWidth += $x1;  
        }  
        elseif ($character >= 192 && $character <= 223) { // 2字节头  
            $strWidth += $x2;  
            $offset += 1;  
        }  
        elseif ($character >= 224 && $character <= 239) { // 3字节头  
            $strWidth += $x3;  
            $offset += 2;  
        }  
        elseif ($character >= 240 && $character <= 247) { // 4字节头  
            $strWidth += $x4;  
            $offset += 3;  
        }  
    }  
  
    return implode('', array_slice($arr, 0, $offset) ). $endStr;  
}
// test
$str1 = 'Celine Dion My Love Ultimate Essential Collection My Heart Will Go On';
$str2 = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十';
$str3 = '一二dfd九十';
echo "<br />";
echo utf8_substr($str1, 10);
echo "<hr />";
echo utf8_substr($str2, 10);
echo "<hr />";
echo utf8_substr($str3, 10);
```

[参考](http://waiting.iteye.com/blog/581888)