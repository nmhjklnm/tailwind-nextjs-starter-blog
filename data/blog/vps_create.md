---
type: Blog
title: 'VPS搭建与优化指南'
date: '2025-1-5'
lastmod: '2025-01-05'
tags: ['blog', '生活']
draft: false
layout: PostLayouttoc
summary: '记录VPS搭建与优化的详细步骤，适合新手和进阶用户参考。'
authors: ['default']
---

**VPS搭建与优化指南**

记录VPS搭建与优化的详细步骤，适合新手和进阶用户参考。



**连接VPS**

使用以下命令连接VPS，并设置保持连接：

ssh -o ServerAliveInterval=60 root@192.227.xx.xxx

**IP测试工具**

推荐使用以下工具进行IP连通性测试：
 [ITdog - Ping测试](https://www.itdog.cn/ping)

**教程参考**

具体搭建教程可以参考：[afeinet博客教程](https://afeinet.blogspot.com/2024/10/24.html?lr=1735987605154)

**美服VPS购买推荐**

推荐购买网站：[RackNerd](https://racknerd.com/)

**一键脚本**

以下是一键脚本，方便快速配置：

wget -N --no-check-certificate https://raw.githubusercontent.com/flame1ce/hysteria2-install/main/hysteria2-install-main/hy2/hysteria.sh && bash hysteria.sh

**注意：**
 一键脚本可以修改配置项，但生成的配置结果中有一行分享链接（如下），需要手动调整：

hysteria2://nmhjklnm@192.xxx.xxx.xx:xxxx/?insecure=1&sni=www.bing.com#Hysteria2-misaka

**关闭防火墙**

使用以下命令关闭防火墙：

sudo systemctl stop firewalld

**提示：**
 教程基于Ubuntu系统，若使用CentOS，请注意操作差异。

**不同App配置教程**

参考详细配置说明：[App配置教程](https://tkstart.com/3237.html)

**检测IP质量的工具**

- [Scamalytics](https://scamalytics.com/)
- [BestyVPS](https://www.bestyvps.com/)

**RackNerd相关配置**

**更改IP地址**

- **免费更改：**72小时内可免费申请一次
- **收费更改：**3美元/次

**更改主机地址**

例如：从圣何塞迁移到洛杉矶。由于圣何塞网络质量差，我申请迁移到洛杉矶02机房，对大陆网络进行了优化，Ping效果较佳。

**Shadowrocket配置**

曾尝试通过ChatGPT配置，但未成功，因使用了免费的Karing，暂未深入研究原因。

**Karing使用指南**

Karing的配置较为简单，直接复制分享链接导入即可。
 教程详见：[Karing配置教程](https://karing.app/faq/#支持哪些平台)

**提升RackNerd速度**

关于优化速度的技巧，可参考：[HostLoc讨论帖](https://hostloc.com/thread-1310271-1-1.html)
