---
layout: post
title: 如何使用 Jekyll 在 GitHub 上搭建个人博客
author: ChenPeiming
category:
  - Jekyll
tags:
  - Jekyll
  - 博客
---

搭建流程：
- 1.下载安装配置 Git
- 2.GitHub 创建公共仓库
- 3.克隆本地仓库
- 4.克隆博客模板
- 5.博客基础功能设置
- 6.设置评论功能
- 7.上传 GitHub



## 1.下载安装配置 Git

- 下载 [Git官网](https://git-scm.com/) & [Git 安装配置参考以下教程](https://blog.csdn.net/m0_72983118/article/details/130546429)

![安装完成测试](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-1.png)

## 2.GitHub 创建公共仓库

- 创建仓库名结尾为 * .github.io 的公共仓库
- 示范：ChenPeiming52001.github.io
  ![仓库创建](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-2.png)

## 3.克隆本地仓库

- 将刚刚创建好的空仓库克隆到本地

	1. 复制仓库中的 HTTPS 地址
	![HTTPS](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-3.png)
	
	2. 在需要克隆的本地文件夹打开 Git 终端，粘贴的地址命令行并回车
	![Git](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-4.png)
	
	3. 等待克隆完毕   
	![克隆完毕](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-5.png)

## 4.克隆博客模板

- 打开博客模板项目[ChenPeiming52001.github.io](https://github.com/ChenPeiming52001/ChenPeiming52001.github.io)

- 复制仓库中的 HTTPS 地址
  ![博客模板](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-6.png)

- 通过 Git 终端 克隆到本地    
![Git](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-7.png)

- 打开下载好的项目，删除根目录里面 .git 文件夹和 _posts 、images 文件夹里面的文件
![删除文件](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-8.png)

## 5.博客基础功能设置

- 博客的基础功能都可以在根目录 <font color=SpringGreen>_config.yml</font> 文件下设置

### 设置主页

- title: ChenPeiming	`设置自己博客的名称`
- location: 广东，广州	`设置自己所在的地区`
- company: CSDN		`设置第三方链接名称`
- company_url: https://blog.csdn.net/cpm011023	`设置第三方网络地址`
- name: ChenPeiming52001	`设置自己 GitHub 的名称`
- github_url: https://github.com/ChenPeiming52001	`设置自己 GitHub 的网络地址`
- description: 这是ChenPeiming的个人博客	`设置博客的描述`
- url: https://chenpeiming52001.github.io	`设置个人博客的网络协议`

![设置主页标题](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-9-1.png)
![设置主页标题](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-9-2.png)

### 设置关于页

- introduce: 我是一个对学习充满热情、善于思考和寻找解决方案的人。	`设置个人介绍`
- email: chenpeiming52001@163.com	`设置自己的邮箱`
- skill_software_keywords: [Java,  Python]		`软件开发标签`
- skill_j2ee_keywords:		`J2EE开发标签`
- skill_mobile_app_keywords: 	`手机开发标签`
- skill_web_keywords: [HTML, CSS, JS, JQuery,SpringBoot, MySQL, MongoDB, PHP]	`Web开发标签`

![设置关于页](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-10-1.png)
![设置关于页](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-10-2.png)

## 6.设置评论功能

### 注册 [LeanCloud](https://console-e1.leancloud.cn/register) 账号

![注册LeanCloud账号](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-11.png)

### 创建 LeanCloud  应用

![创建 LeanCloud  应用](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-12-1.png)
![创建 LeanCloud  应用](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-12-2.png)

### 设置 LeanCloud  应用
- 设置 Web 安全域名
	![设置Web安全域名](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-13-1.png)
	![设置Web安全域名](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-13-2.png)
	
- 获取 LeanCloud  应用凭证 AppID & AppKey
	![AppID](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-14-1.png)
	![AppKey](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-14-2.png)
	
### 设置魔改 Valine
- appId: Evlk9TNDwcQAIW9cC3NVx9bO-gzGzoHsz		 `填入刚刚复制的 AppID`
- appKey: 9TNYPTSFy6BvTeJnmxzBT7H9		`填入刚刚复制的 AppKey`
	![设置魔改Valine](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-15-1.png)
	
- [MD5加密工具](https://c.runoob.com/front-end/703/) 可以将邮箱加密为 MD5
- master: ['33c0f3680c72dd299d9463a496cc7640']		`填入 MD5 加密后博主<font color=Red>自己</font>的邮箱`
- friends: ['f652e9c510f5948f083d453a189b13bc', '261225df065b70eafdef4c88eecdb55d']		`填入 MD5 加密后小伙伴的邮箱`
	![设置魔改Valine](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-15-2.png)

## 7.上传 GitHub

- 上传文件   
![上传文件](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-16-1.png)

```
git add .
```

- 添加上传添加消息  
![添加上传添加消息](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-16-2.png)

```
git commit -m "部署博客"
```

- 选择上传分支  
![选择上传分支](/images/2023/2023-12-12-create-blog/2023-12-12-create-blog-16-3.png)

```
git push origin main
```

<br>

------

写作参考文章：

- [Markdown 博客写作指南](/markdown/2023/12/12/Blog-Found.html)
- [Markdown 进阶写作指南](/markdown/2023/12/12/Blog-Advanced-Found.html)
