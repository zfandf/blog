title: CSS 媒体查询
date: 2015-10-10 12:10:42
categories:
- 前端
tags:
- css
---

每次写个博客都是有原因滴，这次是一个小活，要仿一个网页。待仿的网页不支持手机浏览，主家也没有说要要改，但是吧，这洁癖劲上来了。。。

虽然之前也有用到媒体查询，但一直没有总结过唉。

# 语法


    <!-- link元素中的CSS媒体查询 -->
    <link rel="stylesheet" media="(max-width: 800px)" href="style.css" />
    
    <!-- 样式表中的CSS媒体查询 -->
    <style>
    @media (max-width: 600px) {
      .facet_sidebar {
        display: none;
      }
    }
    </style>
        
当媒体查询为真时，相关的样式表或样式规则就会按照正常的级联规则被应用。即使媒体查询返回假， <link> 标签上带有媒体查询的样式表 仍将被下载 （只不过不会被应用）。

# 常用媒体属性
在媒体属性中，"min-" 和 "max-" 前缀，表示"小于等于"和"大于等于"。这样做避免了使用与 HTML 和 XML 冲突的 "<" 和 ">" 字符。
 
> 注意：如果浏览器运行的设备上没有该属性值，包含这个属性值的表达式一般返回假。例如，在语音合成器上查询屏幕长宽比总是返回假。

## 高度（height）
height 媒体属性描述了输出设备渲染区域（如可视区域的高度或打印机纸盒的高度）的高度。
* 值：<length>
* 媒体：visual, tactile
* 是否接受 min/max 前缀：是

> 注意：用户调整窗口大小后，火狐浏览器会根据使用了width和height属性的媒体查询来切换合适的样式表。

    @media screen and (max-device-width: 799px) { ... }
     
## 宽度（width）
width 媒体属性描述了输出设备渲染区域（如可视区域的宽度或打印机纸盒的宽度）的宽度。
* 值： <length>
* 媒体： visual, tactile
* 是否接受 min/max 前缀：是

> 注意：用户调整窗口大小后，火狐浏览器会根据使用了width和height属性的媒体查询来切换合适的样式表。
示例

    /* 如果你想向最小宽度20em的手持设备或屏幕应用样式表，你可以使用这样的查询 */
    @media handheld and (min-width: 20em), screen and (min-width: 20em) { ... }

    /* 这个查询适用于宽度在500px和800px之间的屏幕 */
    @media screen and (min-width: 500px) and (max-width: 800px) { ... }

## 设备高度（device-height）
描述了输出设备的高度（整个屏幕或页的高度，而不是仅仅像文档窗口一样的渲染区域）。
* 值：<length>
* 媒体： visual, tactile
* 是否接受 min/max 前缀：是


    /* 向显示在最大高度800px的屏幕上的文档应用样式表 */
    @media screen and (max-device-height: 799px) { ... }

## 设备宽度（device-width）
描述了输出设备的宽度（整个屏幕或页的高度，而不是仅仅像文档窗口一样的渲染区域）。
* 值：<length>
* 媒体： visual, tactile
* 是否接受 min/max 前缀：是


    /* 向显示在最大宽度800px的屏幕上的文档应用样式表 */
    @media screen and (max-device-width: 799px) { ... }
        
## 方向（orientation）
指定了设备处于横屏（宽度大于宽度）模式还是竖屏（高度大于宽度）模式。
* 值：landscape | portrait
* 媒体：visual
* 是否接受 min/max 前缀：否


    /* 向竖屏设备应用样式表 */
    @media all and (orientation: portrait) { ... }
    
    /* 向横屏设备应用样式表 */
    @media all and (orientation: landscape) { ... }


# 不常用媒体属性

## 颜色（color）
指定输出设备每个像素单元的比特值。如果设备不支持输出颜色，则该值为0。
* 值： <color>
* 媒体： visual
* 是否接受 min/max 前缀：是

> 注意：如果每个颜色单元具有不同数量的比特值，则使用最小的。
> 例如：如果显示器为蓝色和红色提供5比特，而为绿色提供6比特，则认为每个颜色单元有5比特。如果设备使用索引颜色，则使用颜色表中颜色单元的最小比特数

    @media all and (color) { ... }
    @media all and (min-color: 4) { ... }
    @media all and (max-color: 4) { ... }

## 颜色索引（color-index）
指定了输出设备中颜色查询表中的条目数量支持 min/max. 
* 值：<integer>
* 媒体： visual
* 是否接受 min/max 前缀：是
    
    
    @media all and (color-index) { ... }
    @media all and (min-color-index: 256) { ... }
    @media all and (max-color-index: 256) { ... }
    
## 宽高比（aspect-ratio）
描述了输出设备目标显示区域的宽高比。该值包含两个以“/”分隔的正整数。代表了水平像素数（第一个值）与垂直像素数（第二个值）的比例。 
* 值：<ratio>
* 媒体：visual, tactile
* 是否接受 min/max 前缀：是


    @media screen and (aspect-ratio: 1/1) { ... }

## 设备宽高比（device-aspect-ratio）
描述了输出设备的宽高比。该值包含两个以“/”分隔的正整数。代表了水平像素数（第一个值）与垂直像素数（第二个值）的比例。
* 值：<ratio>
* 媒体：visual, tactile
* 是否接受 min/max 前缀：是


    @media screen and (device-aspect-ratio: 16/9), screen and (device-aspect-ratio: 16/10) { ... }

## 网格（grid）
判断输出设备是网格设备还是位图设备。如果设备是基于网格的（例如电传打字机终端或只能显示一种字形的电话），该值为1，否则为0。
* 值：<integer>
* 媒体：all
* 是否接受 min/max 前缀： 否

> 注意：“em” 在网格设备中有不同的意义；一个“em”的实际宽度不得而知，假设1em相当于一个网格单元的宽高。

    /* 向一个15字符宽度或更窄的手持设备应用样式 */：
    @media handheld and (grid) and (max-width: 15em) { ... }

## 黑白（monochrome）
指定了一个黑白（灰度）设备每个像素的比特数。如果不是黑白设备，值为0。
* 值：<integer>
* 媒体： visual
* 是否接受 min/max 前缀：是


    /* 向所有黑白设备应用样式表 */
    @media all and (monochrome) { ... }
    
    /* 向每个像素至少8比特的黑白设备应用样式表 */
    @media all and (min-monochrome: 8) { ... }

## 分辨率（resolution）
指定输出设备的分辨率（像素密度）。分辨率可以用每英寸（dpi）或每厘米（dpcm）的点数来表示。
* 值： <resolution>
* 媒体： bitmap
* 是否接受 min/max 前缀：是


    /* 为每英寸至多300点的打印机应用样式 */
    @media print and (min-resolution: 300dpi) { ... }
    
    /* 替换老旧的 (min-device-pixel-ratio: 2) 语法 */
    @media screen and (min-resolution: 2dppx) { ... }

## 扫描（scan）
描述了电视输出设备的扫描过程。
* 值： progressive | interlace
* 媒体：tv
* 是否接受 min/max 前缀：否


    /* 向以顺序方式扫描的电视机上应用样式表 */
    @media tv and (scan: progressive) { ... }

# 逻辑操作符

操作符 not，and 和 only 可以用来构建复杂的媒体查询。

* and 操作符用来把多个 媒体属性 组合起来，合并到同一条媒体查询中。只有当每个属性都为真时，这条查询的结果才为真。
* not 操作符用来对一条媒体查询的结果进行取反。
* only 操作符表示仅在媒体查询匹配成功的情况下应用指定样式。可以通过它让选中的样式在老式浏览器中不被应用。
* 将多个媒体查询以逗号分隔放在一起；只要其中任何一个为真，整个媒体语句就返回真。相当于 or 操作符。
