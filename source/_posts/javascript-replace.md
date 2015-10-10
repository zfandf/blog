title: String.prototype.replace() 用法
date: 2015-03-26 11:11:04
categories:
- 前端
tags:
- js
---

# String.prototype.replace()

### 语法

newstring = str.replace(regexp|substr, newSubStr|function[,  flags]);

该方法并不改变调用它的字符串本身,而只是返回替换后的字符串


### 参数说明

该方法有三个参数， 第三个参数为可选。

#### regexp|substr

    
    regexp 一个 RegExp 对象， 正则匹配的内容会被替换
    
    substr 一个将要被替换的字符串
   
#### newSubStr|function， 一个新的字符串或者一个可以返回新字符串的方法，替换第一个参数匹配的内容。

使用字符串作为第二个参数时， 替换字符串可以插入下面的特殊变量名

* $$	表示字符串 "$".

````
var re = /(\w+),(\w+),(\d+)/;
var str = "John,Smith,123";
var newstr = str.replace("John", "$$");
console.log(newstr); // $,Smith,123
````

* $&	表示第一个参数所匹配的子串
````
var str = "000 John,Smith,123";
var re = /(\d+)/g;
var newStr = str.replace(re, "$&haha");
console.log(newStr); // 000haha John,Smith,123haha
````

* $`	位于匹配子串$&左边的内容. 
````
var str = "000John,Smith,123";
var re = /(\d+)/g;
var newStr = str.replace(re, "$`");
console.log(newStr); // John,Smith,000John,Smith,
````
在上个例子中， 符合正则匹配的有两处， 

第一处是 "000", 它左侧为空， 匹配后得到结果为： "John,Smith,123"

第二处是 "123", 它左侧为 "000John,Smith,", 匹配后的结果为 "John,Smith,000John,Smith,"


* $'	位于匹配子串$&右边的内容.
````
var str = "000John,Smith,123";
var re = /(\d+)/g;
var newStr = str.replace(re, "$'");
console.log(newStr); // John,Smith,123John,Smith,
````
该例子执行过程同上一个。

* $n or $nn	  如果n或nn是个十进制的数字,并且replace方法的第一个参数是个正则表达式,那么$n表示正则表达式中的第n个子匹配字符串.
````
var str = "John Smith";
var re = /(\w+)\s(\w+)/;
var newStr = str.replace(re, "$2$1");
console.log(newStr); // SmithJohn
````

##### 假如第二个参数是一个方法， 该方法要返回一个字符串
````
function (str, p1, p2, ..., offset, s)　{

}
````
方法参数

str 正则匹配的字符串

p1, p2, ... 每个小括号匹配的子串

offset 匹配字符串的偏移量

s 整个待匹配的字符串

    
#### flags 匹配模式， 参数值是下面的一个或者多个字符。

    * g   全局替换
    * i   忽略大小写
    * m   多行模式
    * y   sticky
    
    flags 参数在 v8 内核（Chrome and NodeJs）中不起作用。（实验了chrome和ie， 均不可用， firfox可用）
    
    在 String.replace method 中使用 flags 参数不是符合标准。使用一个带有相应标志（flags）的正则表达式（RegExp）对象来代替此参数。
    
    当第一个参数是正则表达式时， flags 始终不起作用。
    

### 正则
\s 匹配空格
    
    
    