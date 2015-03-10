title: jshint
date: 2015-02-03 08:22:14
categories:
- JavaScript
tags:
- JavaScript
---
# jshint

## 安装

安装 JSHint 最简单的方法是使用 node. 只需要在你的终端输入下面的命令行(标记 -g 表示要在你的系统中全局安装, 如果你仅仅想安装在你的项目中, 请删除 -g).

````
npm install jshint -g
````

下面你就可以使用 jshint 程序了, 一个简单的用法是检测单个文件或者指定目录下的所有 js 文件:

````
localhost:blog fan$ jshint source/test/myfile.js
source/test/myfile.js: line 2, col 6, Missing semicolon.

1 error
````

? 如果文件路径是一个破折号(-), jshint 将从标准输入读取

## 配置
配置方式:
* 通过 --config 标记手动指定特殊的配置文件(.jshintrc)
* 将配置写入项目的 package.json 文件中的 jshintConfig 属性下

如果使用 .jshintrc, 开始时, JSHint 将在被检测的 js 文件目录下寻找 .jshintrc 文件. 如果没有找到, 将向上层目录树查找一直到根目录.(注意: 如果输入是标准输入, JSHint 不接受查找配置文件).

这种设置允许你为每一个项目分配配置文件. 放配置文件在项目的根目录下, 不论你在项目的哪个位置执行 JSHint, 使用的都是同一个配置.


配置文件是一个简单的 json 文件, 它指明 JSHint 参数是打开还是关闭. 例如下面的这个配置, 未定义和未使用的变量将被标记为警告, 并且告诉 JSHint 全局变量的名字是 MY_GLOBAL.
````
{
    "undef": true,
    "unused": true,
    "predef": [ "MY_GLOBAL" ]
}
````

## 内联配置
除了(In addition to)使用配置文件之外, 你能使用特殊的注解在文件内部. 该注解以 jshint 或者 global 开始, 后面跟着以逗号分隔的参数. 例如, 下面的小片段和上面的配置有相同的作用.
````
/* jshint undef: true, unused: true */
/* global MY_GLOBAL */
````
你能使用单行或者多行注释来配置 jshint. 如果你将注释写在函数内部, 配置将只在函数内部生效.

## 指令, 下面是 JSHint 支持的指令列表

jshint  设置 JSHint 参数的指令:
````
/* jshint strict: true */
````

JSHint  设置 JSHint 兼容 JSLint 参数的指令:
````
/* jslint vars: true */
````

global  global 指令用于告诉 JSHint 在别处定义的全局变量. 如果值为 false(默认为 false), JSHint 认为该变量为只读. 该属性和 undef 属性一起使用.
````
/* global MY_LIB: false */
````
你也可以针对某几个全局变量设置黑名单, 确保它们在当前文件的任何地方都不可以使用.
````
/* global -BAD_LIB */
````

exported  用于告诉 JSHint 在当前文件定义了一个在别处使用的全局变量, 通常和 unused 参数一起使用.
````
/* exported EXPORTED_LIB */
````

members  这个指令用于告诉 JSHint 所有你打算使用的属性. 该指令是被弃用的, 不赞成使用


ignore  指令告诉 JSHint 忽略某快代码
````
// Code here will be linted with JSHint
/* jshint ignore:start */
// Code here will be ignore by JSHint
/* jshint ignore:end */
````
所有在 ignore:start 和 ignore:end 之间的代码都将被 JSHint 忽略. 另外, 你能通过尾随注释忽略一行代码:
````
ignoreThis(); // jshint ignore:line
````

## 参数
大部分情况下, 当你在自己的代码中调整 JSHint 时, 你需要在所有的 JSHint 参数中寻找适合自己的那一个. 尝试找出 JSHint 参数是如何工作的是恰当的参数是混乱的和令人沮丧的(我们正在努力修复) 请仔细阅读下面的两段文章.

JSHint 有两种类型的参数: 强制的和松懈的. 前者使 JSHint 更严格后者压制一些警告. 看下面这个栗子的代码:
````
function main(a, b) {
    return a == null;
}
````
当使用默认的 jshint 参数检测这段代码时, 会报出如下警告:
````
fan:test fan$ jshint myfile.js
myfile.js: line 2, col 14, Use '===' to compare with 'null'.

1 error
````
