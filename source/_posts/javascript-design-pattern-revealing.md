title: JavaScript 设计模式 - Revealing Module (揭示模块) 模式
date: 2015-02-12 08:54:31
categories:
- 前端
tags:
- Javascript Design Pattern
---
Revealing Module 模式 是 Module 模式 的改进模式,
使用 Module 模式, 当我们想从另外一个方法调用一个公有方法或者访问共有变量时, 必须要重复主对象的名称. 并且在使用 Module 模式时, 必须要切换到对象字面量表示法来让某种方法变成公有方法.
用一个栗子展示Module 模式的缺点:
````
var testModule = function() {
    function doSomething() {
        console.log('dosomething');
    }

    return {
        func1: function() {
            console.log('func1');
            doSomething();
        },
        func2: function() {
            console.log('func2');
            // 如果我想在这儿调用 func1..
            testModule.func1();
        }
    };
}();
````
在上个例子中, 我想在 func2 中调用 func1 方法, 需要加上主对象的名字. 针对这一问题, Christian Heilmann 创建了 Revealing Module, 它能够在私有范围内简单定义所有的函数和变量, 并返回一个匿名对象, 返回的对象中拥有指向私有函数的指针, 该函数是他希望展示为公有的方法.
使用示例:
````
var myRevealingModule = function() {
    var privateVar = "Fannie",
        publicVar = "Job";

    function privateFunction() {
        console.log("name is " + privateVar);
    }

    function publicSetName(name) {
        privateVar = name;
    }
    function publicGetName() {
        privateFunction();
    }

    // 将暴漏的共有指针指向私有函数和属性
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
}();
console.log(myRevealingModule.greeting);
myRevealingModule.getName();
myRevealingModule.setName('zhangff');
myRevealingModule.getName();
````
优点: 该模式可以使脚本语法更加一致. 在模块代码底部, 它会很容易指出哪些函数和变量可以被公开访问, 从而改善可读性.
缺点: 如果一个私有函数引用一个共有函数, 在需要打补丁时, 公有函数是不能被覆盖的. 这是因为私有函数将继续引用私有实现, 该模式并不适用于共有成员, 只适用于函数.