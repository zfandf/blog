title: JavaScript 设计模式 - Module (模块) 模式
date: 2015-02-10 08:42:16
categories:
- 前端
tags:
- Javascript Design Pattern
---

模块是任何强大应用程序架构中不可或缺的一部分, 它通常能够帮助我们清晰的分离和组织项目中的代码单元.
在 JavaScript 中, 有几种用于实现模块的方法:
* 对象字面量表示法
* Module 模式
* AMD 模块
* CommonJs 模块
* ECMAScript Harmony 模块

Module 模式在某种程度上是基于对象字面量, 因此首先重新认识一下对象字面量.
## 对象字面量
在对象字面量表示法中, 一个对象被描述为一组包含在大括号 ({}) 中, 以逗号分隔的 name/value 对. 对象内的名称可以是字符串或者标志符, 后面跟着一个冒号. 对象的最后一个 name/value 对的后面不用加都好, 如果加逗号某些浏览器(IE)将会报错.
````
var myObj = {
    variableKey: variableValue,
    functionKey: function() {
        // dosomething
    }
};
````
对象字面量不需要使用 new 运算符进行实例化, 但不能用在一个语句的开头, 因为开始的可能被解读为一个块的开始. 在对象的外部, 新成员可以使用如下赋值语句添加到对象字面量上, 如: myObj.property = 'somevalue';
使用对象字面量有助于封装和组织代码
也就是说, 如果我们选择了这种技术, 我们可能同样也对 Module 模式感兴趣.他仍然使用对象字面量, 但只是作为一个作用域函数的返回值.

## Module (模块) 模式
Module 模式最初被定义为一种在传统软件工程中为类提供私有和公有封装的方法.
在 JavaScript 中, Module 模式用于进一步模拟类的概念, 通过这种方式, 能够使一个单独的对象拥有公有/私有方法和变量, 从而屏蔽来自全局作用域的特殊部分.
产生的结果是: 函数名与在页面上其它脚本定义的函数冲突的可能性降低.

### 私有
Module 模式使用闭包封装 "私有" 状态和组织. 它提供一种包装混合公有/私有方法和变量的方式, 防止其泄漏致全局作用域, 并与别的开发人员接口发生冲突.通过该模式, 只需返回一个公有API, 而其他一切都维持在私有的闭包里.
这种形式为我们提供了一个屏蔽处理底层事件逻辑的整洁解决方案, 同时只暴露一个接口供应用程序的其它部分使用. 该模式除了返回一个对象而非一个函数外, 非常类似于一个自调用的函数表达式.
注意: 在 JavaScript 中, 没有真正意义上的 "私有", JavaScript 没有访问修饰符. 因此, 我们使用函数作用域来模拟公有/私有的概念. 在 Module 模式内, 由于闭包的存在, 声明的变量和方法只在模式内部可用, 但是在返回对象上定义的变量和方法, 则对外部使用者都是可用的.

### 示例, 购物车
````
// 购物车
var basketModule = function() {
    var basket = [];

    function checkItem(item) {
        if (!item.id || !item.name) {
            return false;
        }
        item.price = item.price || 0;
        return true;
    }

    return {
        addItem: function(item) {
            if (checkItem(item)) {
                basket.push(item);
            } else {
                console.log('item is error');
            }
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function() {
            var itemCount = this.getItemCount(),
                total = 0;
            while (itemCount--) {
                total += basket[itemCount].price;
            }
            return total;
        }
    };
}();
basketModule.addItem({
    id: 1,
    name: 'JavaScript 设计模式',
    price: 10.4
});
basketModule.addItem({
    id: 1,
    name: 'JavaScript 高级教程',
    price: 20
});
console.log(basketModule.getItemCount()); // 输出: 2
console.log(basketModule.getTotal()); // 输出: 30.4
console.log(basketModule.basket); // 输出: undefined
console.log(basketModule.basket); // 输出: undefined
````
Module 模式将私有的方法和属性都封装在闭包内, 防止外部访问, 可以被外部访问的方法和属性都定义在返回的对象上.
请注意上面的 basket模块中的作用域函数是如何包裹在所有函数周围, 然后调用并立即存储返回值. 这有很多优点:
* 只有我们的模块才能享有拥有私有函数的自由. 因为它们不会暴露于页面的其余部分(只会暴露与我们输出的 API)
* 函数往往已声明并命名, 在试图找到有哪些函数抛出异常时, 这将使得在调试器中显示调用堆栈变得更容易

## Module 模式变化
### 引入混入
模式的这种变化演示了全局变量如何作为参数传递给模块的匿名函数. 这允许我们引入它们, 并按照我们希望的方式为它们取个本地别名.
````
var TestModule = (function(j, w) {
    // dosomething
})(jQuery, window);
````
引入的这种变化可以自定义使用的全局变量的名称, 即使外部全局变量名称改变, 该模块也只需要修改传入的参数名.
### 引出
引出变化允许我们声明全局变量, 而不需要实现它们.
````
var TestModule = (function() {
    var module = {},
        privateVariable = 'hello world';

    module.publicProperty = 'Foobar';
    module.publicMethod = function() {
        // dosomething
        console.log(privateVariable);
    };
    return module;
})();
````



