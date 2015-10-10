title: 关于 JavaScript arguments.callee
date: 2015-01-27 08:40:51
categories:
- 前端
tags:
- js
---


昨天无意间看到 arguments.callee , 今天就真对这个名词查看一下吧

### 摘要
arguments.callee 包含了当前正在执行的函数
### 描述
callee 是 arguments 的一个属性, 它被用于在当前正在执行的函数内部指当前函数, 当函数没有名字的时候这是有用的, 比如一个无名的函数表达式(或者匿名函数).

> 注意:在第五版的 ECMAScript 规范中, 当处于严格模式(use strict)时, 禁止使用 arguments.callee(). 
> 当函数必须调用它自己时, 可以通过为一个函数表达式命名或者使用函数声明来避免使用函数表达式.

### 为什么 ECMAScript5 严格模式下禁用 callee?
JavaScript 的早期版本不允许为函数表达式命名, 因为这个原因函数表达式不能被递归调用.

比如, 下面这个语法是行得通的

    function factorial (n) {
        return !(n > 1) ? 1 : factorial(n - 1) * n;
    }
    [1,2,3,4,5].map(factorial);
    
但是, 这种方式
    
    [1,2,3,4,5].map(function (n) {
        return !(n > 1) ? 1 : /* what goes here? */ (n - 1) * n;
    });
    
是不行的. 为了解决这个问题 arguments.callee 被引入进来, 你可以使用下面的语法

    [1,2,3,4,5].map(function (n) {
        return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
    });
    
然而, 这是一个糟糕的解决方案, 在通常情况下这个方案(连同其它 arguments, callee 和 callee 问题)不能使用内联和尾递归(你能通过调试一些实例来实现它, 但即使是最好的代码以被检测为最优的, 这种方式也不是必须的). 最主要的问题是, 这种方式的递归调用会改变 this 值.比如:

    var global = this;
    
    var sillyFunction = function (recursed) {
        if (!recursed) { return arguments.callee(true); }
        if (this !== global) {
            alert("This is: " + this);
        } else {
            alert("This is the global");
        }
    }
    
    sillyFunction();

ECMAScript3 解决了这个问题通过允许为函数表达式命名, 例如:

    [1,2,3,4,5].map(function factorial (n) {
        return !(n > 1) ? 1 : factorial(n-1)*n;
    });
    
这个转变有很多好处:
* 在你的函数代码内部这个函数能像其它函数一样被调用
* 在不会在外部产生一个额外的变量(不包含IE8及以下)
* 相比通过 arguments 对象调用, 这种方式性能更好.


[原文](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/callee)
