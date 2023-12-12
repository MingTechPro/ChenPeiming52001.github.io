---
layout: post
title: Markdown 博客写作指南
author: ChenPeiming
category:
  - Markdown
tags:
  - 博客
  - Markdown
---

手把手教你如何在博客写文章，
流程比较简单，主要分以下4步：
- 创建Markdown文件
- 添加页面信息
- 写入博客文章内容
- 上传GitHub



## 1.创建Markdown文件

先在博客本地 GitHub 仓库的 \\_posts 文件下创建 一个以年份的文件夹 \\2023 这个文件夹将放你一整年的文章。然后在 \\2023 的文件夹里面创建命名为 “时间-文章名称.md” 的文件

.md 文件的命名规则：

- 以时间开头：2023-12-10
- 后加上文章名称：blog-found 文章名称需要是英文的
- 在加上：.md
- 完整名称：2023-06-16-blog-found.md
- 命名有问题页面会渲染不出来

## 2.添加页面信息

### 标签含义
- layout: 布局 “默认是post”
- title: "标题"
- author: 作者
- category: 分类
- tags: 标签

写完通过这个网站验证一下格式，网站会帮我们优化。
[YAML验证器](https://www.yamllint.com/)

```markdown
---
layout: post
title: "Markdown 博客写作指南"
author: Chenpeiming
categories: Markdown
tags: [博客] 单个标签使用这个方式
tags:   多标签使用这种
  - 博客
  - Markdown
---

在文章需要被渲染到主页的内容后面，插入两个换行即可停止渲染。否则将整篇文章渲染到主页面！
```

## 3.写入博客文章内容

1.**标题**：使用`#`来表示标题，其中 `#` 的数量代表标题级别，共有六个级别。写文章建议使用二级标题、 三级标题来写，这样子会在文章的侧边栏生成目录（二级标题生成主标题、三级标题生成副标题）。
例如：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

演示：

## 二级标题

### 三级标题

2.**段落和换行**：直接连续输入文字即可生成段落，如果要换行可在行末使用 `<br>` 标签。
例如：

```markdown
使用<br>`<br>`标签
```

演示：

使用<br>`<br>`标签

3.**加粗和斜体**：使用`**文本**`或`__文本__`可以使文本加粗，使用`*文本*`或`_文本_`可以使文本变为斜体。
例如：

```markdown
**加粗**
*斜体*
```

演示：

**加粗**
*斜体*

4.**列表**：使用`-`或`*`可以创建无序列表，使用数字加点可以创建有序列表。
例如：

```markdown
- 无序列表项1
- 无序列表项2

1. 有序列表项1
2. 有序列表项2
```

演示：

- 无序列表项1
- 无序列表项2

1. 有序列表项1
2. 有序列表项2

5.**链接**：使用`[链接文字](链接地址)`的形式插入链接。
例如：

```markdown
[百度](https://www.baidu.com)
```

演示：

[百度](https://www.baidu.com)

6.**图片**：使用`![图片描述](图片链接或路径)`可以插入图片。
例如：

```markdown
![示例图片](https://foruda.gitee.com/images/1683356304790177332/3b3e34db_12518707.jpeg)
```

演示：

![示例图片](https://foruda.gitee.com/images/1683356304790177332/3b3e34db_12518707.jpeg)

7.**引用块**：使用`>`符号来表示引用块。
例如：

```markdown
> 这是引用的文本块。
```

演示：

> 这是引用的文本块。

8.**水平线**：使用三个以上的`-`、`_`或`*`可以生成水平线。
例如：

```markdown
水平线
---
```

演示：

水平线

---

9.**代码块**：使用三个反引号`````包裹代码，并指定语言（可选）以进行语法高亮。
例如：

````markdown
```
def hello_world():
    print("Hello, world!")
```
````

演示：
```python
def hello_world():
    print("Hello, world!")
```

## 4.上传GitHub

在博客本地 GitHub 仓库 运行下面命令上传博客文章

```
git add .
git commit -m "添加博客文章"
git push origin main
```

------

参考文章：

- [Markdown 高级技巧 - 菜鸟教程](https://www.runoob.com/markdown/md-tutorial.html)