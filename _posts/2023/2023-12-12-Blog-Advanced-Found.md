---
layout: post
title: Markdown 进阶写作指南
author: ChenPeiming
category:
  - Markdown
tags:
  - 博客
  - Markdown
---

8个Markdown文档进阶写作技巧分享：
- 显示特殊符号
- 添加emoji表情符号🥰
- 添加字体字号
- 添加字体颜色和修改字体大小
- 添加文字背景色
- 添加 Todo 列表
- 添加常用数学公式
- 添加注意事项



## 显示特殊符号

- [SYMBL](https://symbl.cc/cn/) - 特殊字符对应的Unicode码查询
- 语法符号，前面加反斜线\即可显示符号本身，例如：

```markdown
\\ 反斜杠
\* 星号
\_ 下划线
\{\} 括号
\# 井号
\+ 加号
\- 减号
\! 感叹号
```

演示：

\\ 反斜杠
\* 星号
\_ 下划线
\{\} 括号
\# 井号
\+ 加号
\- 减号
\! 感叹号

## 添加emoji表情符号🥰

- [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) - 给你的Markdown文档添加表情🍁
- 去上面的网站即可复制粘贴，需要的表情包🤔

## 添加字体字号

有时侯我们需要修改文字的字体字号，可是我们就会简单的“加粗”“斜体”等，这样子一来又觉得有点单调。<br>其实我们可以用HTML代码来改变Markdown文档的字体字号：

- [CSS字体](https://www.jb51.net/css/67658.html) - 让你的Markdown文档有更多的字体
- 通过上面的网站查询到的字体名字 `<font face="写入到这里"></font>`

```html
<font face="STKaiti">我是华文楷体</font>
<font face="BiauKai">我是标楷体</font>
<font face="Microsoft YaHei">微软雅黑体</font>
```

演示：

![字体字号](\images\2023\2023-06-20-Blog-Advanced-Found-1.png)

## 添加字体颜色和修改字体大小

通过上面的学习你已经会使用HTML代码来改变Markdown文档的字体字号，同样Markdown文档也是可以通过HTML代码实现字体颜色：

- [CSS颜色](http://xh.5156edu.com/page/z1015m9220j18754.html) - 让你的Markdown文档字体有更多的颜色
- 通过上面查询到的颜色编码 `<font color="写入到这里" size="写入数值改变字体大小"></font>`

```html
<font color=LightSkyBlue size=72>亮天蓝色</font>
<font color=SpringGreen size=42>春绿色</font>
<font color=Red size=6>纯红色</font>
```

演示：

<font color=LightSkyBlue size=72>亮天蓝色</font>

<font color=SpringGreen size=42>春绿色</font>

<font color=Red size=6>纯红色</font>

## 添加文字背景色

Markdown本身不支持背景色设置，需要采用内置html的方式实现。<br>借助 table, tr, td 等表格标签的 bgcolor 属性来实现背景色的功能。例如：

- [CSS颜色](http://xh.5156edu.com/page/z1015m9220j18754.html) - 让你的Markdown文档字体有更多的颜色
- 通过上面查询到的颜色编码 `<table><tr><td bgcolor="写入到这里"></td></tr></table>`

```html
<table><tr><td bgcolor=LightSkyBlue>背景色是：亮天蓝色</td></tr></table>
<table><tr><td bgcolor=SpringGreen>背景色是：春绿色</td></tr></table>
<table><tr><td bgcolor=Red>背景色是：纯红色</td></tr></table>
```

演示：

<table><tr><td bgcolor=LightSkyBlue>背景色是：亮天蓝色</td></tr></table>
<table><tr><td bgcolor=SpringGreen>背景色是：春绿色</td></tr></table>
<table><tr><td bgcolor=Red>背景色是：纯红色</td></tr></table>

## 添加 Todo 列表

- 使用 - [ ] 和 - [x] 语法可以创建复选框，实现 todo-list 等功能
- 输入顺序：- 空格 [ 空格 ] 空格 

```markdown
- [ ] 未选中状态
- [x] 选中状态
```

演示：

- [ ] 未选中状态

- [x] 选中状态

## 添加常用数学公式

- [数学公式](https://blog.csdn.net/mingzhuo_126/article/details/82722455) - 让你的Markdown文档添加公式

- 公式块 ，输入美元符（$）然后回车，中间输入相应代码，详细代码参考上方网站。例如：

```markdown
$$
\sin x =2  \sin x \cos
$$

$$
e^{i\pi} + 1 = 0
$$
```

演示：

![数学公式](\images\2023\2023-06-20-Blog-Advanced-Found-2.png)

## 添加注意事项

- 输入三个反单引号 ``` 再输入 notice 回车即可输入注意事项，例如：

````markdown
```notice
这个是一个注意事项
```
````

演示：

```notice
这个是一个注意事项
```

------

参考文章：

- [Markdown - 菜鸟教程](https://www.runoob.com/markdown/md-advance.html)
