---
layout: post
title: Valine 评论邮件提醒
author: ChenPeiming
category:
  - Jekyll
tags:
  - Jekyll
  - 博客
---

Valine 是一个基于 LeanCloud 的快速、简洁且高效的无后端评论系统。它具有强大的功能和灵活的配置选项，本文将向您介绍如何在 Valine-admin 中设置评论邮件提醒功能，以便及时收到用户对您博客的评论通知。

## 部署流程

- 获取邮箱 SMTP 密钥

<!-- - 获取 AKisemt 反垃圾邮件服务 -->

- 获取 valine-admin 项目

- 登录 LeanCloud 部署项目

- 配置项目环境变量

- 设置后台管理

如果在第一次部署时遇到问题，您可以尝试多次部署，可能由于网络波动或其他因素导致第一次部署失败。多次尝试部署有助于解决这个问题。

## 获取邮箱 SMTP 密钥

SMTP 密钥是用于配置项目中的发邮件邮箱的。获取方法可以参考以下链接：

- [QQ 邮箱获取方法](https://zhidao.baidu.com/question/1457961254794148260.html?fr=search&word=QQ%E9%82%AE%E7%AE%B1%E8%8E%B7%E5%8F%96+MSTP+%E6%96%B9%E6%B3%95)

- [163 邮箱获取方法](https://zhidao.baidu.com/question/436573565774794892.html?fr=search&word=163%E9%82%AE%E7%AE%B1%E8%8E%B7%E5%8F%96+MSTP+%E6%96%B9%E6%B3%95)

其他邮箱的设置方法可以自行搜索。

<!-- ### 获取 AKisemt 反垃圾邮件服务步骤：

- 1.这个可以不设置，如果你想要注册并使用反垃圾邮件功能，需要先科学上网。

- 2.在 [Akismet](https://wordpress.com/start/account/user-social?redirect_to=https%3A%2F%2Fr-login.wordpress.com%2Fremote-login.php%3Faction%3Dlink%26back%3Dhttps%253A%252F%252Fakismet.com%252Faccount%252F) 上注册并登录账号。

![注册Akismet](/images/2024/Jekyll-Valine/Jekyll-Valine-1-1.png)
![注册Akismet](/images/2024/Jekyll-Valine/Jekyll-Valine-1-2.png)

- 3.注册后，确认你的邮箱以完成登录。

- 4.进入[服务页面](https://akismet.com/pricing/)，选择适合你的服务。

![选择Akismet服务](/images/2024/Jekyll-Valine/Jekyll-Valine-1-3.png)

- 5.根据你的需求选择付费金额，如果你选择免费版本，请注意不能用于商业活动。

![选择Akismet服务](/images/2024/Jekyll-Valine/Jekyll-Valine-1-4.png)

- 6.我这里选择免费，确认付款信息，然后你就可以获得到 Api 。

![确认服务费用](/images/2024/Jekyll-Valine/Jekyll-Valine-1-5.png)
![确认服务费用](/images/2024/Jekyll-Valine/Jekyll-Valine-1-6.png) -->

## 获取 valine-admin 项目

- [项目地址](https://github.com/bin862324915/valine-admin)

- 复制此链接以备后用：`https://github.com/bin862324915/valine-admin`

- 记住分支以备后用：`main`

## 登录 LeanCloud 并部署项目

- 1.在 [LeanCloud](https://console.leancloud.cn/) 上登录并创建云引擎

  ![创建云引擎](/images/2024/Jekyll-Valine/Jekyll-Valine-2-1.png)
  ![创建云引擎](/images/2024/Jekyll-Valine/Jekyll-Valine-2-2.png)
  ![创建云引擎](/images/2024/Jekyll-Valine/Jekyll-Valine-2-3.png)

- 2.通过 Git 方式部署项目

  ![部署项目](/images/2024/Jekyll-Valine/Jekyll-Valine-3-1.png)
  ![部署项目](/images/2024/Jekyll-Valine/Jekyll-Valine-3-2.png)
  ![部署项目](/images/2024/Jekyll-Valine/Jekyll-Valine-3-3.png)
  ![部署项目](/images/2024/Jekyll-Valine/Jekyll-Valine-3-4.png)
  ![部署项目](/images/2024/Jekyll-Valine/Jekyll-Valine-3-5.png)
  ![部署项目](/images/2024/Jekyll-Valine/Jekyll-Valine-3-6.png)

## 配置项目环境变量

  ![环境变量](/images/2024/Jekyll-Valine/Jekyll-Valine-4-1.png)
  ![环境变量](/images/2024/Jekyll-Valine/Jekyll-Valine-4-2.png)

请按照以下表格填写相应的项目环境变量：

|    变量名     |                    说明                    |                示例                |
| :-----------: | :----------------------------------------: | :--------------------------------: |
|  SENDER_NAME  |                 寄件人名称                 |      ChenPeiming -- 评论提醒       |
|   SITE_NAME   |               [必填]网站名称               |            ChenPeiming             |
|   SITE_URL    |       [必填]网站地址，地址后方不带 /       | https://chenpeiming52001.github.io |
| SMTP_SERVICE  | [必填]邮件服务提供商，支持 QQ、163、126 等 |                 QQ                 |
|   SMTP_USER   |     [必填]SMTP 服务用户名，及邮箱地址      |             123@qq.com             |
|   SMTP_PASS   |         [必填]SMTP 密码，及授权码          |                123                 |
| TEMPLATE_NAME |   邮件模板，默认 default，可以选 rainbow   |              rainbow               |
|   TO_EMAIL    |              自定义博主收件人              |      chenpeiming52001@163.com      |

## 设置后台管理

- 添加 `email`、`password` 和 `username`

- 请注意，`email` 必须是 `SMTP_USER` 或 `TO_EMAIL` 中的一个

  ![后台管理](/images/2024/Jekyll-Valine/Jekyll-Valine-5-1.png)
  ![后台管理](/images/2024/Jekyll-Valine/Jekyll-Valine-5-1.png)

- 配置访问域名（需要注册有域名）

  ![后台管理](/images/2024/Jekyll-Valine/Jekyll-Valine-6-1.png)
  ![后台管理](/images/2024/Jekyll-Valine/Jekyll-Valine-6-2.png)
  ![后台管理](/images/2024/Jekyll-Valine/Jekyll-Valine-6-3.png)

绑定好后就可以登录后台管理评论信息，我没有域名就不做相关的演示了

## 邮件展示

- 邮件模板：default

  - 评论

  ![default](/images//2024/Jekyll-Valine/Jekyll-Valine-7-1.png)

  - 回复评论

  ![default](/images//2024/Jekyll-Valine/Jekyll-Valine-7-2.png)

- 邮件模板：rainbow

  - 评论

  ![rainbow](/images//2024/Jekyll-Valine/Jekyll-Valine-7-3.png)

  - 回复评论

  ![rainbow](/images//2024/Jekyll-Valine/Jekyll-Valine-7-4.png)
