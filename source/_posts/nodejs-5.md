title: Node.js 入门经典 第五章 HTTP
date: 2015-10-02 09:38:51
categories:
- 前端
tags:
- Node.js 入门经典
---

    
# 本章学习要点
* 理解 HTTP
* 使用 Node.js 创建 HTTP 服务器
* 使用 Node.js 创建 HTTP 客户端

# 什么是 HTTP
超文本传输协议（HTTP）是 Internet 上老牌的通信协议。它定义了服务器和客户端在通信的时候应该如何发送和接收数据。

# 使用 Node.js 的 HTTP 服务器

## 一个基础的服务器
创建一个简单的 Node.js 服务器将 "hello world" 输出到 Web 浏览器。
    
    var http = require('http'),
        port = 3000;
        
    http.createServer(function(req, res) {
        res.end('hello world');
    }).listen(port, '127.0.0.1');
    console.log('server running at http://127.0.0.1:' + port);
    
## 加入头（Header）
对于每一个 HTTP 请求和响应，都会发送 HTTP 头。HTTP 头发送的是附加信息，包括内容类型、服务器发送响应的日期以及 HTTP 状态码。

在简单的 hello world 服务器中，Node.js 已经发送了一些基本信息。

    var http = require('http'),
        port = 3000;
        
    http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('hello world');
    }).listen(port, '127.0.0.1');
    console.log('server running at http://127.0.0.1:' + port);
    
## 检查响应头
* chrome 用户，可以使用 HTTP Headers 扩展
* firefox 用户，可以使用 Live HTTP Headers Firefox 外挂
* 习惯使用终端的用户，可以使用 curl 来取得响应头的内容。
    
    在终端运行如下命令
    
        curl -I 127.0.0.1:3000
    
    应当看到如下响应
        
        HTTP/1.1 200 OK
        Date: Fri, 02 Oct 2015 02:27:23 GMT
        Connection: keep-alive

## Node.js 中的重定向
重定向的准则如下
* 给客户发送 301 响应代码，告诉客户：资源已经移到另一个位置
* 发送一个位置头（Location Header）告诉客户重定向到哪里

举个栗子，将访问者指向到百度主页
    
    var http = require('http'),
        port = 3000;
        
    http.createServer(function(req, res) {
        res.writeHead(301, {
            'Location': 'http://www.baidu.com'
        });
    }).listen(port, '127.0.0.1');
    console.log('Server running at http:127.0.0.1:' + port);
    
## 响应不同的请求
如果要让服务器返回超过一种类型的请求，就需要给应用程序加一些路由（router）. Node.js 中 URL 模块使我们可以读取 URL、分析它然后对输出做一些事情。

路由定义响应
> 路由指的是应用程序要响应的请求。举个例子来说，如果想展示一个位于 /about_us 的 "关于我们" 页面，就需要在应用程序中对这一请求设置一个路由。

下面是使用 URL 模块创建的路由服务器：

    var http = require('http'),
        url = require('url'),
        port = 3000,
        host = '127.0.0.1';
    
    http.createServer(function(req, res) {
        var pathname = url.parse(req.url).pathname;
    
        if (pathname === '/') {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('hello world');
        } else if (pathname === '/about') {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('about us');
        } else if (pathname === '/redirect') {
            res.writeHead(301, {
                'Location': 'http://www.baidu.com'
            });
            res.end();
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            res.end('404 not found');
        }
    }).listen(port, host);
    console.log('Server running at http://127.0.0.1:' + port);
    
使用 URL 模块可以创建对许多不同请求进行响应的服务器。但如此做法会使程序变得复杂、难以阅读与维护。在第 6 章中会介绍 Express 库来解决这一问题。

# 使用 Node.js 的 HTTP 客户端

HTML 客户端不总是浏览器
> HTML 客户端可以是任何对服务器请求响应的东西。 比如 web 浏览器、搜索引擎机器人、电子邮件客户端以及 web 刮取器（Web Scraper）都是 HTML 客户端。

需要使用 HTML 客户端的场景有：
* 监控服务器的正常工作时间
* 刮取不能通过 API 获取的 Web 内容
* 创建将来自 Web 的两个或更多信息来源组合在一起的混搭（mashup）
* 对诸如 Twitter 或 Flicker 这样的流行 Web Service 进行 API 调用



    
    
        
