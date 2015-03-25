title: JavaScript 设计模式 -  Singleton (单例) 模式
date: 2015-03-05 09:04:56
categories:
- JavaScript
tags:
- JavaScript
- Javascript Design Pattern
---
单例模式限制了类的实例化次数只能一次. 它的实现是, 在该实例不存在的情况下, 通过一个方法创建一个类来实现创建类的新实例; 如果实例已经存在, 则直接返回该实例的引用.
Singleton 不同于静态类, 因为我们可以推迟它的初始化, 这通常是因为它们需要一些信息, 而这些信息在初始化期间无法获取.
在 Javascript 中, Singleton 充当共享资源命名空间, 从全局命名空间中隔离出代码实现, 从而为函数提供单一访问节点.
````
var mySingleton = (function() {
    var instance;

    function init() {
        console.log('init instance');
        var initTime = new Date();
        function privateFunction() {
            console.log('it is private function');
        }
        return {
            publicProperty: 'I am public property',
            getInitTime: function() {
                return initTime;
            }
        }
    }
    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
})();

var my1 = mySingleton.getInstance(),// 第一次获取实例
    my2 = mySingleton.getInstance();// 第二次获取实例
initTime1 = my1.getInitTime();
initTime2 = my2.getInitTime();
console.log('initTime1: ', initTime1);
console.log('initTime2: ', initTime2);
````
在上面例子中, 两次获取 getInstance, 只调用了一次 init() 方法.

Singleton 模式适用性:
* 当类只能有一个实例而且客户可以从一个统一的访问点访问它时.
* 该唯一的实例应该是通过子类化可扩展的, 并且客户端应该无需更改代码就能使用一个扩展的实例时.
