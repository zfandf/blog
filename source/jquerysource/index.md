title: jquerysource
date: 2015-03-25 17:57:48
---

jQuery
- 入口模块
    - 构造 jQuery 对象
    - jQuery()
- 底层支持模块
    - 工具方法 Utilities
    - 回调函数列表 Callbacks Object
    - 异步队列
    - 浏览器功能测试 Support
    - 数据缓存 Data
    - 队列 Queue
    - 选择器 Sizzle
- 功能模块
    - 属性操作 Attributes
    - 事件系统
    - DOM 遍历 Traversing
    - DOM 操作 Manipulation
    - 样式操作 CSS
        - 计算样式 & 内联样式
        - 坐标 Offset
        - 尺寸 Dimensions
    - 异步请求 Ajax
    - 动画 Effects
    
    
````
(function(window, undefined) {
    var jQuery = ....
    // ....
    window.jQuery = window.$ = jQuery;
})(window);
````
传入 window 和 undefined 作为参数， 可以缩短访问变量时的作用域链。
另外，特殊值 undefined 是 window 的一个属性，传入 undefined， 可以保证 undefined 的值是 undefined，防止 undefined 值被重写