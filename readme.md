# Bubble Danmaku
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/HHHHhgqcdxhg/bubble-danmaku/) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/HHHHhgqcdxhg/bubble-danmaku/graphs/commit-activity) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/HHHHhgqcdxhg/bubble-danmaku/pulls)  


Bubble弹幕使, 第三方bilibili直播弹幕客户端桌面端.  
本项目秉承高扩展性开发, 具备web前端基础即可轻易自定义样式, 布局及功能.  

## 配置
1. 前往[本项目Release页](https://github.com/HHHHhgqcdxhg/bubble-danmaku/releases)  
2. 选择想要的版本进行下载(推荐下载最新版本)  
3. 解压  
4. 配置```config/config.json```([配置说明](https://github.com/HHHHhgqcdxhg/bubble-danmaku/blob/master/docs/configDoc.md))  
5. 如果需要使用发送弹幕的功能, 还要[配置cookie](https://github.com/HHHHhgqcdxhg/bubble-danmaku/blob/master/docs/getCookie.md)  
6. 配置之后就可以打开```Bubble弹幕使.exe```开始使用啦  

## 使用
- 基本功能

总体截图|发送弹幕<br>(需要[配置cookie](https://github.com/HHHHhgqcdxhg/bubble-danmaku/blob/master/docs/getCookie.md))  
---|---
![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-0.png)|![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-1.png)  

- 用户详情功能  

用户详情|点击昵称编辑用户备注名|备注过的用户名颜色会变成金色<br>(这个颜色可以通过配置更改)
---|---|---
![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-2.png)|![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-3.png)|![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-4.png)  

- 醒目留言功能

醒目留言会在顶部停留5秒|5秒结束后会插入到弹幕栏|鼠标指向重新查看醒目留言  
---|---|---
![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-5.png)|![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-6.png)|![](https://pic.ggemo.com/picgo/bubble-danmaku-doc-img-7.png)  

## 注意
- 目前仅支持windows系统. 欢迎编译其他操作系统的版本  

## Todo
- [x] 完善醒目留言的响应  
- [x] 完善观众NickName功能  
- [x] 完善上舰的响应  
- [x] 通过~~账号密码或(处于安全考虑, 去掉此功能)~~cookie设置B站账号来使用本工具发送弹幕  
- [ ] 完善布局及样式切换系统  
- [ ] 热更新  
