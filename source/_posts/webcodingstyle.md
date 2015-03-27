title: "webcodingstyle"
date: 2015-03-27 14:40:21
tags:
---

# 通用规范
* tab键用4个空格代替

    因为在不同系统的编辑工具对tab解析不一样，windows下的tab键是占四个空格的位置，而在linux下会变成占八个空格的位置（除非你自己设定了tab键所占的位置长度）。

* 每个样式属性或者每句代码后加 ";"

    方便压缩工具"断句"。
    
* 所有文件统一采用UTF-8无BOM编码。换行格式为 unix 格式。

* 文件和目录命名约定
    * 文件命名可读性强
    * 文件夹、文件的命名与命名空间应能代表代码功能，可读性强
    * 一律小写，必须是英文单词或者汉语拼音，以英语单词优先，多个单词以连字符 ( - ) 连接。 只能出现小写引文字母，数字和连字符。
    * 很多浏览器会将含有这些词的作为广告拦截： ad、ads、adv、banner、sponsor、gg、guangg、guanggao等 页面中尽量避免采用以上词汇来命名。
    * 该命令规范适用于所有前端维护的内容和相关目录。(html, css, js, png, gif, jpg, ico)。


# 前端规范之HTML规范

## 文档模板
````
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Sample page</title>
        <link rel="stylesheet" href="css_example_url" />
        <script src="js_example_url"></script>
    </head>
    <body>
        <section id="page">
            <header id="header">
            页头
            </header>
            <section id="body">
            主体
            </section>
            <footer id="footer">
            页尾
            </footer>
        </section>
        <script>
        // 你的代码
        </script>
    </body>
</html>
````

## HTML5 doctype

为每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。

````
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
````

## IE 兼容模式

IE 支持通过特定的 <meta> 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 edge mode，从而通知 IE 采用其所支持的最新的模式。

````
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
````

## 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

* class
* id 、 name
* data-*
* src、for、 type、 href
* title、alt
* aria-*、 role
* class用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。如：

````
<a class="..." id="..." data-modal="toggle" href="#">
    Example link
</a>
<input class="form-control" type="text">
<img src="..." alt="...">
````

# id和class命名约定

* id 和 class 的命名基本原则: 内容优先，表现为辅。首先根据内容来命名，如:#header,#footer,.main-nav.如根据内容无法找到合适的命名，可以再结合表现进行命名，如：col-main, col-sub, col-extra,blue-box
* id 和 class 的名称一律小写，多个单词以连字符连接，如： main-wrap
* id 和 class 的名称只能出现，小写字母，数字和连字符( - )(js钩子除外)
* id 和 class 的名称尽量使用英文单词命名,如确实找不到合适的单词，可以使用拼音，如：zhidao-com
* 在不影响语意的情况下，id 和 class 的名称 可以适当使用缩写，如: col, nav,hd, bd, fd( 缩写只用来表示结构，不允许写任何样式)。不要自造缩写。 
* class 对于选中命名.selected;对于hover，支持伪类使用:hover，不支持的使用.hover，隐藏使用.hide 。
* id 和 class 的选择，如果只使用一次，使用id,如果使用多次使用class，如果需要和js交互，使用id,如果需要交互并且页面中有大量重复，请参见下一条。
* 对于作为js钩子的 id 和 class 命名规则为以”J_“开头(J,象形钩子的形状)，后面加上原应有的命名的驼峰形式，在使用class的时候需要放在最前面。如:class="J_SomeModContent some-mod-content"。（注意：钩子，不允许在css中定义任何的样式效果）
* 很多浏览器会将含有这些词的作为广告拦截：ad、ads、adv、banner、sponsor、gg、guangg、guanggao等 页面中尽量避免采用以上词汇来命名。
* 命名比较短的词，或者缩写的不允许直接定义样式，如：.title,.hd,.bd,.body.必须用上级节点进行限定,如：.recommend-mod .title。

## 空格/标签/注释

* 嵌套元素应当缩进一次 —— 即4个空格；
* 对于属性的定义，确保全部使用双引号，绝不要使用单引号；
* 不要省略可选的结束标签，如：</li>,</body>；
* 习惯性书写注释，方便日后维护；

## 文件引用

* 页面中尽量不出现css内容(如果有样式， 则写到style标签中， 禁止写行内样式)
* 每个页面中至多包括3个css文件，1个 产品级 1个模块级 1个页面级别


# 前端规范之 css 规范



多选择器规则之间换行
当样式针对多个选择器时每个选择器占一行

/* 推荐的写法 */
a.btn,
input.btn,
input[type="button"] {
......
}
z-index

自己写的z-index的值不能超过 100 (通用组的除外)
页面中的元素内容的z-index不能超过10(popup poptip除外)，需要按照内容定义1 2 3 4不允许直接使用如1000，9999
popup poptip的z-index需要按照内容使用 99以下，10以上的值（11,12,13，也可以小于10），不允许直接使用1000，9999之类大值
css属性顺序

显示属性；
元素位置；
元素属性；
元素内容属性；
css书写顺序：

例子:
.header {
 /* 显示属性 */
 display || visibility
 list-style
 position
 top || right || bottom || left
 z-index
 clear
 float

 /* 自身属性 */
 width
 max-width || min-width
 height
 max-height || min-height
 overflow || clip
 margin 
 padding
 outline
 border
 background

 /* 文本属性 */
 color
 font
 text-overflow
 text-align
 text-indent
 line-height
 white-space
 vertical-align
 cursor
 content
}
css写法

小图片（必须）sprite 合并
每个样式属性后加 ";", 即使最后一个样式后都不要省略 “;”
禁止将样式写为单行

如
.hotel-content {margin: 10px; background-color: #efefef;}
单行显示不好注释，不好备注，这应该是压缩工具的活儿~
禁止使用行内（inline）样式

禁止使用"*"来选择元素

/*别这样写*/
* {
margin: 0;
padding: 0;
}
这样写是没有必要的，一些元素在浏览器中默认有margin或padding值，但是只是部分元素，没有必要将所有元素的margin、padding值都置为0。

带前缀的属性
当使用特定浏览器带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐，这样便于多行编辑。如：

.selector {
    -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.15);
            box-shadow: 0 1px 2px rgba(0,0,0,.15);
}
优化css选择器
css选择器是从右边到左边进行匹配的。如：

#header a {
    color: #444;
}
浏览器会检查整个文档中的所有链接，然后浏览器并不仅仅检查每个链接的父元素，还要遍历文档树去查找 id 为 header 的祖先元素，如果被评估的链接不是 header 的后代，那么浏览器就要向上一级遍历知道文档的根节点。针对此问题，有以下几个解决方法：

避免使用通配规则
除了传统意义的通配选择符之外还包括相邻兄弟选择符, 子选择符, 后代选择符和属性选择符。推荐id、class和标签选择符。
不要限定id选择符
页面中指定一个id只能对应一个元素，所以没有必要添加额外添加限定符，如： div#header ，应该简化为： #header（提权的除外）。
不要限定类选择器
不要用具体的标签限定类选择符，而是根据实际情况对类名进行扩展。例如： ul.recommend ，改成 .recommend-list 或者 .list-recommend。
让规则越具体越好
尽量不要使用 ul li a 这样长的选择符，最好使用 .list-anchor 之类的选择符。
避免使用后代选择符
通常处理后代选择符开销最高，使用字选择符更高效，最好使用下一条代替。
避免使用标签子选择符
如果有如： #header > li > a，这样基于子标签的自选择符，那么应该使用一个class来关联每个元素如： .header-anchor。尽量使用具体的类代替子选择符。
为了 性能原因 ， 请避免元素选择器和类选择器以及 id 选择器混用;例如
/* 不推荐 */
ul#example {}
div.error {}
/* 推荐 */
#example {}
.error {}

前端规范之JavaScript
命名规范

函数命名
驼峰命名方式

function funName() {}
常量
大写

var VARIABLENAME
变量
驼峰命名

var variableName
编码规则

排版缩进
采用统一的缩进方式排版代码。缩进为4个空格

if(condition1 || condition2) {
    action1;
} else if (condition3 && condition4) {
    action2;
} else {
    default action;
}
关键词、条件括弧后面使用空格；运算操作符号两侧使用空格；语句分割符‘,’后面使用空格

var name[空格]=[空格]value;
if[空格](a,[空格]b) {
}
左大括号"{"居行尾，；右大括号"}"单独占一行，居行首

if (a && b) {
    // code
}
句末必须用分号结尾

var fn = function () {
};//这里没有分号的话，脚本解析器会报错！！！
(function () {
    alert(1);
})();
单行过长应在适当位置予以换行,增强可读性

条件语句括号中的条件若过长， 折行在操作符后进行，折行与首行空出两个Tab。
字符串过长，这行后以 “+”拼接， 在“+”后折行，折行与首行文字保持纵向对齐。

if (condition1 && 
        condition2) { 
    var str = "i am so long, haha haha,haha,haha" + 
              "e , 我是折行，请与上一行的内容保持纵向对齐"
}
if、while、for、do语句的执行体总是用"{"和"}"括起来，即使在其结构体内只有一条语句

if (s==100) {
    alert('shit!');
}
语法意义相互独立的代码将用空行分隔

a++; b++;   //！！！避免同一行书写两个表达式
if (a > b) {
    value = a;  //行间不用空行间隔
}

var variableName = value;   //与上一代码行使用空行间隔
注释规范

文件注释

文件注释要标明作者、文件版本、创建/修改时间、重大版本修改记录
函数描述
文件版本、创建或者修改时间、功能、作者

 /**
 * @file Image.js
 * @description 功能详细描述
 */
函数或者类等都要添加头描述

 :::javascript
 /**
 * 简述
 *
 * 功能详细描述
 *
 * @param <String> arg1 参数1
 * @param <Number> arg2 参数2，默认为0
 * @return <Boolean> 看xxx是否成功
 */
 function fooFunction (arg1, arg2) {
 }
操作注释

单行注释,写在代码上面
多行注释

/*
* 注释操作说明
*/
for( var i = 0; i < obj.lenght; i++) {
}
注释标签参考

标签	描述
@addon	 把一个函数标记为另一个函数的扩张，另一个函数的定义不在源文件中。
@argument	 用大括号中的自变量类型描述一个自变量。
@author	 函数/类作者的姓名。
@base	 如果类是继承得来，定义提供的类名称。
@class	 用来给一个类提供描述，不能用于构造器的文档中。
@constructor	 描述一个类的构造器。
@deprecated	 表示函数/类已被忽略。
@exception	 描述函数/类产生的一个错误。
@exec	

@extends	 表示派生出当前类的另一个类。
@fileoverview	 表示文档块将用于描述当前文件。这个标签应该放在其它任何标签之前。
@final	 指出函数/类。
@ignore	 让jsdoc忽视随后的代码。
@link	 类似于@link标签，用于连接许多其它页面。
@member	 定义随后的函数为提供的类名称的一个成员。
@param	 用大括号中的参数类型描述一个参数。
@private	 表示函数/类为私有，不应包含在生成的文档中。
@requires	 表示需要另一个函数/类。
@return	 描述一个函数的返回值。
@returns	 描述一个函数的返回值。
@see	 连接到另一个函数/类。
@throws	 描述函数/类可能产生的错误。
@type	 指定函数/成员的返回类型。
@version	 函数/类的版本号。
条件判断的陷阱

在if判断中，使用===作比较,避免掉入==造成的陷阱

在条件判断时，这样的一些值表示false：null，undefined，字符串''，数字0，NaN
而在==时，则会有一些让人难以理解的陷阱,如：

(function () { 
    var undefined; 
    undefined == null; // true 
    1 == true; //true 
    2 == true; // false 
    0 == false; // true 
    0 == ''; // true 
    NaN == NaN;// false 
    [] == false; // true 
    [] == ![]; // true 
})();
对于不同类型的 == 判断，有这样一些规则，顺序自上而下：

1.undefined与null相等
2.一个是number一个是string时，会尝试将string转换为number
3.尝试将boolean转换为number，0或1
4.尝试将Object转换成number或string，取决于另外一个对比量的类型
所以，对于0、空字符串的判断，建议使用 === 。===会先判断两边的值类型，类型不匹配时为false。

简单类型转换

number to string的转换，建议使用 1 + ''或String(1)，不使用new String(1)或1.toString()的方式。
string to number的转换，建议使用parseInt，必须显式指定第二个参数的进制。下面的例子展示了不指定进制的风险：

parseInt('08'); // 0 
parseInt('08', 10); //8
float to integer的转换，建议使用Math.floor/Math.round/Math.ceil方法，不使用parseInt。

字符串拼接
字符串拼接，应使用数组保存字符串片段，使用时调用join方法。避免使用+或+=的方式拼接较长的字符串，每个字符串都会使用一个小的内存片段，过多的内存片段会影响性能。如:

// 不好的拼接方式，+=

var str = ''; 
for (var i = 0, len = list.length; i < len; i++) { 
    str+= '<div>' + list[i] + '</div>'; 
} 
dom.innerHTML = str;

// 正确拼接方式，Array的push+join

var str = []; 
for (var i = 0, len = list.length; i < len; i++) { 
    str.push('<div>'+ list[i] + '</div>'); 
} 
dom.innerHTML = str.join('');
获取元素

获取单个元素

通常，我们使用document.getElementById来获取dom元素，避免使用document.all。document.getElementById是标准方法，兼容所有浏览器

ie浏览器会混淆元素的id和name属性，document.getElementById可能获得不期望的元素。
在对元素的id与name属性的命名需要非常小心，应使用不同的命名法。
下面是一个name与id冲突的例子：

<input type="text" name="test"> <div id="test"></div>
<button onclick="alert(document.getElementById('test').tagName)"></button>
<!-- ie6下为INPUT -->




