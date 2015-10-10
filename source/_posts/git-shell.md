title: Git 命令
date: 2015-10-09 14:36:42
categories:
- 工具
tags:
---

# 安装


# 初始

    git config --global
    |- user.name 'zhaobao'
    |- user.email zhaobao@163.com
    |- core.editor vim
    |- merge.tool vimdiff
    git config --list
    git config [user.name]

# 忽略文件
在根目录下添加 .gitignore 文件
    
    touch .gitignore
    
.gitignore 文件语法

    '#'为注释 – 将被 Git 忽略
    *.log       # 忽略所有 .log 结尾的文件
    !api.log    # 但 api.log 除外
    /TODO     # 仅仅忽略项目根目录下的 TODO 文件，不包括 subdir/TODO
    *~          # 忽略 ~ 结尾的文件夹
    log/        # 忽略 log/ 目录下的所有文件
    doc/*.txt   # 会忽略 doc/notes.txt 但不包括 doc/server/arch.txt
    
# 基本

    git --bare init
    git clone git@192.168.10.58:hulu.git
    git pull [origin master]
    git add
    |- .
    |- <file>
    |- -u
    |- --all
    |- '*.txt'
    git commit -m '<comment>'
    git push [-u]+ origin master
    git commit -a -m '<comment>' = commit + add

# 日志

    git log
    |- -p
    |- -2
    |- --pretty=oneline
    |- --graph

# 分支

## 远程分支 remote

    git branch -r
    git push --delete origin develop
    git push origin :heads/[remote-branch-name]
    git push origin [branch-name]
    git push origin [local-branch-name] [remote-branch-name]
    git remote show origin
    git remote prune origin
    git remote prune origin/v1.0.0
    
## 本地分支 local

    git branch -v
    git branch
    git branch [branch-name]
    git checkout -b [branch-name] ([from-branch-name] default is current branch)
    git branch -d [branch-name]
    git branch -m develop d
    git merge [branch-name]
    git merge --no-ff [branch-name]
    
## 把本地跟踪的远程分支删除
    
    git fetch -p

# 标签 tag

    git tag -l

    # remote
    git push origin [tag-name] ([remote-tag-name]
    git push --delete origin [tag-name]
    git push origin :refs/tags/[tag-name]
    git push origin --tags
    
    # local
    git tag
    git show [tag-name]
    git tag -l ([v1.*])
    git tag -a [tag-name] -m [tag-comment]
    git tag -a [tag-name] sha1
    git tag -d [tag-name]
    git checkout x
    git fetch --tags
     
# github

查看本地 ssh key 是否已经添加到 github 上

    ssh -T git@github.com
