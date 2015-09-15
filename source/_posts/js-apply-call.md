layout:
title: 关于 JavaScript 中 apply 和 call	
date: 2015-01-27 08:40:51
comments: true
categories:
- js
tags:	
---


### 关于 JavaScript 中 apply 和 call


首先 apply 和 call 都是为了改变某个函数运行时的 context 即上下文而存在的, 换句话说, 就是为了改变函数体内部 this 的指向.
    
    function a(arg1, arg2) {
        console.log('arg1>>>: ' + arg1);
        console.log('arg2>>>: ' + arg2);
        return arg1 + arg2;
    }
    a.apply(this, [1,2]);
