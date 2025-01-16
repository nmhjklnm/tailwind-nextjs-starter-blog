---
type: Blog
title: 'nezha agent 站群管理工具'
date: '2025-1-3'
lastmod: '2025-01-03'
tags: ['Operations', 'computer network']
draft: false
layout: PostLayouttoc
summary: '攒了好多个服务器，有些任务一个一个维护过于麻烦，我需要一个统一的方式去管理、监控我的服务器们。从部署便携性到功能完整性上考虑，选择了这个开源免费的管理面板。'
authors: ['default']
---

# nezha agent 站群管理工具

> 哪吒的受控端是agent,哪吒的控制端是dashboard

## 动机

手里面攒了好多个服务器，有些任务一个一个维护过于麻烦，我需要一个统一的方式去管理、监控我的服务器们。从部署便携性到功能完整性上考虑，选择了这个开源免费的管理面板。

![image-20250114201434274](https://yyhimage.oss-cn-shanghai.aliyuncs.com/img/image-20250114201434274.png)

![image-20250114201430180](https://yyhimage.oss-cn-shanghai.aliyuncs.com/img/image-20250114201430180.png)

## 介绍

哪吒探针（Nezha）是一款开源、轻量级的服务器监控与运维工具，主要由 Dashboard（控制面板）和 Agent（代理程序）两部分组成。

**Dashboard 模块：**

Dashboard 是哪吒探针的控制中心，负责管理和展示所有被监控服务器的状态和性能指标。其主要功能包括：

- **服务器管理：** 添加、删除和配置被监控的服务器。
- **实时监控：** 展示服务器的 CPU、内存、磁盘、网络等实时性能数据。
- **历史数据：** 提供服务器性能指标的历史记录，方便用户进行趋势分析。
- **告警通知：** 设置告警策略，当服务器出现异常时，通过多种方式（如 Telegram、邮件、微信等）通知用户。
- **在线终端：** 通过 WebShell 远程访问服务器的命令行界面，支持 Linux 和 Windows 系统。
- **文件管理：** 浏览和管理服务器上的文件，支持文件上传和下载。

**Agent 模块：**

Agent 是部署在被监控服务器上的轻量级程序，负责采集服务器的各项性能指标，并将数据传输至 Dashboard。其主要功能包括：

- **数据采集：** 实时获取服务器的 CPU 使用率、内存占用、磁盘读写、网络流量等信息。
- **任务执行：** 根据 Dashboard 的指令执行特定任务，如运行命令、监控服务状态等。
- **自动更新：** 默认情况下，Agent 会自动更新至最新版本，确保功能和安全性。
- **多平台支持：** Agent 支持在多种操作系统上运行，包括 Linux、Windows、macOS 等。

 Dashboard 与 Agent 之间交互流程的示意图：

![image-20250115162436511](https://yyhimage.oss-cn-shanghai.aliyuncs.com/img/image-20250115162436511.png)

通过上述交互，Dashboard 与 Agent 协同工作，实现对服务器的全面监控和管理。

## 哪吒dashboard端安装

面板安装用`docker compose`，一键配置确实很舒服。

```dockerfile
services:
  dashboard:
    image: registry.cn-shanghai.aliyuncs.com/naibahq/nezha-dashboard
    container_name: nezha-dashboard
    restart: always
    volumes:
      - ./data:/dashboard/data
    ports:
      - 8008:8008
```

## 哪吒的受控端安装

## [一键安装 Agent](https://nezha.wiki/guide/agent.html#一键安装-agent)

哪吒监控支持在 Windows、macOS 和 Linux 上一键安装 Agent。遵循本文档的步骤，你可以轻松地在服务器上部署它。

### [准备工作](https://nezha.wiki/guide/agent.html#准备工作)

在安装前，需要提前在管理面板中设置通信域名，该域名不建议接入 CDN。本文档以示例通信域名 “data.example.com” 为例。

1. 在后台管理面板点击头像，进入“系统设置”页。
2. 在“Agent对接地址【域名/IP:端口】”项中填入通信域名和端口 “data.example.com:8008”。
3. 点击“确认”保存设置。

### [一键安装步骤](https://nezha.wiki/guide/agent.html#一键安装步骤)

1. 在 `服务器` 页面中，点击 `安装命令` 并选择对应操作系统，安装命令将自动复制到你的剪贴板。
2. 在被控端服务器中运行安装命令，等待安装完成后返回到 `服务器` 页面查看是否上线。
3. 如果安装成功，页面中将自动弹出新的服务器，你可以点击编辑按钮为其设置名称。



### 附录

哪吒安装中遇到的问题，可以[自查](https://nezha.wiki/guide/q2.html)

