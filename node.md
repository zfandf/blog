## nodejs install

直接去nodejs的官网http://nodejs.org/上下载nodejs安装程序，双击安装就可以了

测试安装是否成功：

在命令行输入 node –v 应该可以查看到当前安装的nodejs版本号

## npm install

确保已经安装了nodejs

如果已经安装了git， 则直接 git clone --recursive git://github.com/isaacs/npm.git 克隆源码

如果没有安装git， 则到 https://github.com/isaacs/npm 直接下载

进入npm目录， 执行： node cli.js install npm -gf

## hexo install

npm install hexo -g

### hexo 基本命令

hexo init blog

cd blog

npm install

启动hexo服务： hexo s/server

生成blog文件： hexo g/generate

发布blog文件： hexo d/deploy

### npm 主题安装

进入 https://github.com/hexojs/hexo/wiki/Themes， 寻找合适的主题