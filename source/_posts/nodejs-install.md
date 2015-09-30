title: Node.js 入门经典
date: 2015-09-16 15:17:24
tags:
- js
---

# Node.js 介绍

# npm ( Node包管理器)

## npm 是什么
npm(Node Package Manager, Node 包管理器) 是 NodeJs的包管理器。它允许开发人员在 Node.js 应用程序中创建、共享并重用模块。
## 安装 npm
如果使用来自 http://nodejs.org 的安装程序安装了 Node.js,那么 npm 已经安装好了。如果从源代码编译安装了 Node.js，那么可以在 http://npmjs.org/找到 npm 的操作指南。完成安装之后，打开终端输入 npm -v 查看 npm 的版本号。
## npm 安装模块
    
    npm install [module_name]
    
## 使用模块
    
    var module = require('module');
    
## 如何查找模块
* 官方来源 
    
    http://search.npmjs.org/
* 使用命令行直接搜素
    
        npm search jquery
    
* 非官方来源
    
    http://blago.dachev.com/modules
    
    http://eirikb.github.io/nipster/
    
## 本地和全局安装
### 本地安装
意味着库将安装在项目本地的一个名为 node_modules 的文件夹下，以便项目使用。这是默认行为，只要运行如下命令，就是如此:

    npm install [module_name]
    
这将产生如下的文件夹结构：
    
    - foo.js
    - node_modules/
        - module_name
        
### 全局安装
这些模块带有可执行文件，你希望能够在文件系统的任何一个位置都能运行这些可执行文件。Express 就是一个可能需要全局安装的模块示例。 Express 是 Node.js 的一个 Web 开发框架，带有一个能够创建站点骨架的生成器。

要全局安装模块，只需要在安装时加上 -g 标记

    npm install -g [module_name]
    
## 如何查找模块文档
可以执行如下命令在浏览器中查看模块文档，以 underscore 为例：
    
    npm docs underscore

通过如下命令可以查看项目的 bug:

    npm bugs underscore

有经验之后，会发现阅读模块的源代码是理解其作用的最快方法：

    npm edit underscore
    
该命令必须在 Node.js 项目文件夹的根目录下运行，而且该模块必须被下载到了 node_modules 文件夹 中

## 使用 package.json 指定依赖关系 （dependency）
在开发 Node.js 应用程序的时候，毫无疑问要使用模块。一个一个的安装模块会是件耗时的工作，而且容易遗漏。

npm 允许开发人员使用 package.json 文件来指定在应用程序中要用的模块，并且通过单个命令来安装他们：
    
    npm install
    
这样做有如下优势：
* 无需一个一个的安装模块
* 其它开发人员可以很容易的安装你的应用程序
* 应用程序的依赖关系存储在单一的地方

以 underscore 为例的 package.json
    
    {
        "name": "example02",
        "version": "0.0.1",
        "dependencies": {
            "underscore": "~1.2.1"
        }
    }
    
## Q&A
* 什么是模块

模块是可重用的代码块

* 模块的本地安装和全局安装有什么区别

    本地安装意味着模块会被安装在项目内名为 node_modules 的文件夹中，而且它们只可以在该项目中使用。全局安装意味着该模块可以在系统的任何一个地方使用。请尽量使用本地安装。

* 在管理模块时，使用 package.json 有什么优势

    不需要一个一个的安装模块，其它开发人员可以简单的安装使用我们的应用程序
    
# Node.js 的作用
本章学习要点：
* I/O 的意义
* Node.js 想解决的问题
* 并发的意义
* 实现并发的不同方法

## 设计 Node.js 的目的
> Node.js 是构建在 Chrome 的 JavaScript 运行时之上的一个平台，用于简单构建快速的、可扩展的网络应用程序。Node.js 使用事件驱动的、非阻塞的 I/O 模型，这让其
既轻量又高效，是运行于不同发布设备上的数据密集型实时应用程序的完美平台。


## 理解 I/O
I/O 是输入/输出的简写，指的是计算机和人或者数据处理系统之间的通信。可以将 I/O 想成是数据在一次输入和一次输出之间的移动。以下是一些例子：
* 使用键盘敲入文本（输入）并在屏幕上看到文本显示（输出）
* 移动鼠标（输入）并在屏幕上看到鼠标移动（输出）
* 将数据传递给外壳脚本（shell script）（输入）并在终端上看到输出

I/O 的思想可以通过在终端里运行一个程序来演示：

    bogon:blog fan$ echo 'Each peach pear plum'
    Each peach pear plum
    
输入》计算机》输出

这里所用的程序是 echo, 这是一个简单的用于回显任何所提供的文本的工具。从数据移动的角度看，所发生的事情如下：
1. 文本字符串被传递给 echo 程序（输入）
2. 文本字符串流经 echo 程序的逻辑
3. echo 程序将其输出到终端显示（输出）

## 处理输入
## 联网的 I/O 是不可预测的
Web 服务器响应的时间会随着如下的这些因素中的某些因素的不同而变的极为不同：
* 解析 DNS 请求的时间
* 服务器的繁忙程度
* 要应答的数据有多大
* 服务器和客户端的可用带宽
* 为响应而服务的软件效率
* 所使用的网络的繁忙程度
* 数据要传输多远

## 人类是不可预测的
事件驱动编程是处理不可预测性的极佳方式，因为我们可以识别将要放生的事件，即使我们并不知道时间什么时候会发生。

## 处理不可预测性
并发这个术语描述的是事情会在同时发生并可能相互交互。

JavaScript 是一种时间驱动语言，旨在能够对外界的事件做出响应。

# 回调
本章介绍如下内容
* 回调是什么，他们在 JavaScript 中如何使用
* Node.js 中如何使用回调
* 同步和异步编程的区别
* 事件循环是什么

## 什么是回调
回调指的是将一个函数作为参数传递给另一个函数，并且通常在第一个函数完成后被调用。
## 剖析回调
回调函数在 Javascript 内部是如何工作的？

函数可以作为参数传递到另一个函数，然后被调用。确切的要做的的事情定义在作为回调传递进来的函数中。

## Node.js 如何使用回调
Node.js 到处使用回调，尤其在有 I/O 操作发生的地方。下面是一个在 Node.js 中使用 filesystem 模块从磁盘读入文件内容的示例：

    var fs = require('fs');
    fs.readFile('somefile.txt', function(err, data) {
        console.log(err);
        console.log(data);
    });
    
在这个例子中，文件读取完毕之后会调用回调函数
    
另一个例子：

    var http = require('http');
    http.get({host: 'shapeshed.com'}, function(res) {
        console.log('Got response: ' + res.statusCode);
    }).on('error', function(e) {
        console.log('Got error: ' + e.message);
    });
    
在这个例子中，回调函数的调用发生在远程服务器返回响应之后。由于这段代码必须进入网络来获取数据，所以就不可能确切的知道什么时候数据能够返回，甚至都不能确认数据会不会返回。尤其在从多个来源和多个网络中获取数据时，由于数据返回的时间的不可预测的本质，要编写代码对此做出响应将是困难的。Node.js 是对这一问题的响应，它以提供一个创建联网应用程序的平台为目标。回调是 Node.js 实现网络编程的关键方法，因为回调让代码在其它事件发生的时候能够运行，也就是数据从 shapeshed.com 返回的时候。当事件发生时，我们成回调被 "触发", 从而导致回调函数被调用。

## 同步和异步代码
同步的代码意味着每一次执行一个操作，在一个操作完成之前，代码的执行会被阻塞，无法移到下一个操作上。
在程序 4-2.js 中，使用 sleep() 函数来模拟完成操作所需的时间花销。
   
同步和阻塞这两个术语可以互换使用，指的是代码的执行会在函数返回之前停止，如果某个操作阻塞，那么脚本就无法继续。对于最终用户而言，这意味着他们必须等待。

异步和非阻塞这两个术语也可以互换使用，指的是基于回调的、允许脚本并行执行操作的方法。脚本无需等待某个操作的结果才能继续前进，因为操作结果会在事件发生时由回调来处理。使用异步方法，操作无需一个接一个的发生。

## 事件循环


# HTTP

# Express 介绍

# 深入 Express

# 数据的持久化

# 调试 Node.js 应用程序

# 测试 Node.js 应用程序

# 部署 Node.js 应用程序

# 介绍 Socket.IO

# 一个 Socket.IO 聊天服务器

# 一个流 Twitter 客户端

# JSON API

# 进程模块

# 子进程模块

# 事件模块

# 缓冲区模块

# 流模块

# CoffeeScript

# 创建 Node.js 模块

# 使用 Connect 创建中间件

# 结合 Backbone.js 与 Node.js

    


    




