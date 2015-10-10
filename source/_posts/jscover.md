layout:
title: JsCover	
date: 2015-09-16 09:52
comments: true
categories:
- 前端
tags:
- test
---

## JSCover
JSCover 是一个测量 js 程序代码覆盖率的工具，它是一个基于 JAVA 实现的强大且优秀的 JsCoverage 工具。
See the file-based version in action now using the Underscore test suite. See the server-based report now for YUI3.


JSCover 是一个免费的软件，distributed under the GNU General Public License version 2.

## 为什么选择 JSCover
### 覆盖特点
* 测试到行、分支/环境、方法 覆盖率
* 覆盖率测试基于浏览器，允许 DOM 互动
* 在文件系统模式下运行测试，并且可以保存测试报告
* 浏览器独立并且能跑headless 在 HtmlUnit and PhantomJS上.
* 因为测试覆盖率在浏览器采集，能够多个测试同时执行并合并报告数据。
* 运行 js 测试和采集覆盖率在一个独立的 JAVA 测试类通过网页驱动器
* 运行多页的测试没有iframe或JavaScript-connected窗口,仍然保存报告使用HTML5本地存储切换
* 初始 ES6 和谐支持

### 覆盖率报告
* 存储报告在文件系统中
* 支持测试覆盖率结果合并
* 支持多种报告格式（下面这些格式是必须的）：
    * LCOV
    * Cobertura XML for Jenkins CI
    * XML summary - coverage metric totals

### 其它
* 能够快速并且容易的集合使用1个单独的 jar 文件
* JSCover 能够在任何高于1.6的 JAVA 环境中运行
* 可以使用 maven 仓库
* maven 插件现在可用
* 通常不需要修改现有的测试（比如 Jssmine, Qunit, Mocha, 等等）
* 能够在下面模式先执行：
    * web 服务：
Web-server : runs as a web-server instrumenting JavaScript on the fly
File-System : instruments JavaScript to the file-system
Proxy-server: runs as a proxy-server instrumenting JavaScript on the fly
JSCover is under active development
JSCover is architecturally simple and modular, and so should be easy to contribute to and maintain, hopefully ensuring a long life-time




[JsCover](http://tntim96.github.io/JSCover/)
