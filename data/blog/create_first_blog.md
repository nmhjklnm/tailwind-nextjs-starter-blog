---
type: Blog
title: '创建可持续更新的开源个人博客'
date: '2025-1-1'
lastmod: '2025-01-2'
tags: ['blog']
draft: false
layout: PostLayouttoc
summary: 'nextjs模板，开启个人博客笔记成长记录'
images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg']
authors: ['default']
---

## 博客fork及定制笔记

### 流程

1. fork了开源项目`tailwind-nextjs-starter-blog`
```
git clone https://github.com/nmhjklnm/tailwind-nextjs-starter-blog
```
2. 做个人信息配置 
     个人信息配置在`/data`路径下做详细修改
       修改了模板的一些英文描述在`/app`目录下

3. 给`tailwind-nextjs-starter-blog`的文档阅读界面加目录项

     添加的方法直接参照[Adding a Table of Contents to a Next.js Tailwind Blog](https://www.ichi.co.uk/blog/adding-a-table-of-contents-to-nextjs-tailwind-blog)

4. 探索yml使用交互方法

     对一个yml进行解读，将关键词列出来

     ```yaml
     ---
     type: Blog # type 有两种，一种是blog贴,一种是Authors贴（作者信息贴），centerlayer的配置只设置blog目录下的mdx默认为blog贴，所以对于md文件，强制需要额外设置`type: Blog`。
     title: '创建可持续更新的开源个人博客' # 无特殊注意
     date: '2025-1-1' # 无特殊注意
     lastmod: '2025-01-2' # 无特殊注意
     tags: ['blog', '生活']  # 无特殊注意
     draft: false  
     layout: PostLayouttoc # 目前设置了四种PostBanner、PostSimple、PostLayout 、PostLayouttoc .其中PostLayouttoc是参照流程3 创建的
     summary: 'nextjs模板，开启个人博客笔记成长记录' # 无特殊注意
     images: ['/static/images/canada/mountains.jpg', '/static/images/canada/toronto.jpg'] # PostBanner布局时用来放首页图。
     authors: ['default', 'sparrowhawk'] # 这里的作者得之前在作者卡中配置过。
     ---
     ```

5. 迁移基础教程到`Basic tutorial`文件夹中。

6. 部署vercel

     部署过程中弹出`prettier`报错，代码没有格式化，个人项目，短平快，直接粗暴

     ```shell
     npx json -I -f package.json -e 'delete this.lint-staged["*.+(js|jsx|ts|tsx|json|css|md|mdx)"]'
     npx json -I -f package.json -e 'delete this["lint-staged"]'
     ```

     


### 下一步工作

1. 迁移之前的文章内容。
2. 对css样式进行小更新。
3. 定制一个炫酷的首页特效。

### Ref

[tailwind-nextjs-starter-blog](https://github.com/nmhjklnm/tailwind-nextjs-starter-blog)
