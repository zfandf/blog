title: JavaScript 设计模式 - Contructor (构造器) 模式
date: 2015-02-09 08:40:51
categories:
- JavaScript
tags:
- JavaScript
- Javascript Design Pattern
---

# JavaScript 设计模式 - Contructor (构造器) 模式
## 基本 Contructor
````
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function() {
        return '我是' + this.name + ', 今年' + this.age + '岁';
    };
}

// 用法, 创建 Person 的新实例:
var p1 = new Person('fannie', 27);
var p2 = new Person('job', 28);
````

## 带原型的 Contructor (构造器)
JavaScript 中有一个名为 prototype 的属性. 调用 JAvaScript 构造器创建一个对象后, 新对象就会具有构造器原型的所有属性. 通过这种方式, 可以创建多个对象并访问相同的原型.
````
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 注意: 在这里我们使用 Object.prototype.newMethod 而不是 Object.prototype 是为了避免重新定义 prototype 对象.
Person.prototype.toString = function() {
    return '我是' + this.name + ', 今年' + this.age + '岁';
};

// 用法
var p1 = new Person('fannie', 27);
var p2 = new Person('job', 28);

console.log(p1.toString());
console.log(p2.toString());
````
现在 toString() 的单一实例就能够在所有 Person 对象之间共享.
