---
title: jQuery:hover延时效果的一些处理
date: 2016-12-08 16:41:31
categories: javascript
tags:
    - js
---
一开始鼠标的hover事件我都会用css:hover伪类来实现，它的特点也很明显，就是无延时立即触发，但有时可能会造成一些干扰，想要用户体验更好的话就要用js。
比如，让鼠标在元素上停留规定时间内才触发hover事件。我在一篇博文上找到一段比较好的处理代码 ：
<!-- more -->
[文章出处](http://www.zhangxinxu.com/wordpress/?p=906)
```
(function($){
    $.fn.hoverDelay = function(options){
        var defaults = {
            // 鼠标经过的延时时间
            hoverDuring: 200,
            // 鼠标移出的延时时间
            outDuring: 200,
            // 鼠标经过执行的方法
            hoverEvent: function(){
                // 设置为空函数，绑定的时候由使用者定义
                $.noop();
            },
            // 鼠标移出执行的方法
            outEvent: function(){
                $.noop();    
            }
        };
        var sets = $.extend(defaults,options || {});
        var hoverTimer, outTimer;
        return $(this).each(function(){
            $(this).hover(function(){
                // 清除定时器
                clearTimeout(outTimer);
                hoverTimer = setTimeout(sets.hoverEvent,
                    sets.hoverDuring);
                }, function(){
                    clearTimeout(hoverTimer);
                    outTimer = setTimeout(sets.outEvent,
                        sets.outDuring);
                });    
            });
    }      
})(jQuery);
    
    // 具体使用，给id为“#test”的元素添加hoverEvent事件
    $("#test").hoverDelay({
        // 自定义，outEvent同
        hoverEvent: function(){
            alert("经过我！");
        }
    });
```


这段代码好在于把鼠标经过事件和延时分离出来，延时以及延迟的清除都交由hoverDelay来处理，具体hover事件自己自定，是一段能够很通用的代码。
但运用起来还有些小问题，在自定义hoverEvent、outEvent中使用this的话，它所指向的是window这个对象，而不是当前上下文，所以我改进了下，通过apply()来实现this绑定。
改进部分：
```
 return $(this).each(function(){
            // 保存当前上下文的this对象
            var $this = $(this)
            $this.hover(function(){
                clearTimeout(outTimer);
                hoverTimer = setTimeout(function () {
                    // 调用替换
                    sets.hoverEvent.apply($this);
                }, sets.hoverDuring);
            }, function(){
                clearTimeout(hoverTimer);
                outTimer = setTimeout(function () {
                    sets.outEvent.apply($this);
                }, sets.outDuring);
            });
        });
```
   
改完以后我自己的小项目都用这个方法来处理hover或者其他的延时效果了。