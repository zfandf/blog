title: jQuery 自定义插件
---

### jQuery 自定义插件
## 基本要点
* 命名: 以 jquery.[插件名].js 命令
* 所有的对象方法都附加到 jQuery.fn 对象上, 所有的全局函数都附加到 jQuery 上.
* this 指向
* this.each
* 为了稳妥, 可以在插件头部各添加分号
* 插件应该返回一个 jQuery 对象, 以保证插件的链式操作. 除非插件需要返回的是一些需要获取的量, 比如字符串或者数组.
* 在插件中, 尽量不要使用 $ 作为 jQuery 对象的别名. 如果使用闭包来回避这个问题.

## 基本格式
````javascript
;(function($) {
    // 代码块
})(jQuery);
````
## 插件类型
* 封装 jQuery 对象方法的插件

````
;(function($) {
    $.fn.extend({
        '对象方法名': function() {
            // 方法内容
        }
    });
})(jQuery);
````
* 封装全局函数的插件

````
;(function($) {
    $.extend({
        '方法名': function() {
            // 方法内容
        }
    });
})(jQuery);
````
* 自定义选择器
    这个实验了一下, 只有 jQuery1.7.2可用, 故而..




