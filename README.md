# 部署于阿里云的轻量应用服务器，通过下面网址可直接访问：
- http://8.138.190.252/

# 如果部署本地的话-前端快捷跳转
- cd 832301316_高杰铭_frontend
- python -m http.server 8000 --bind 127.0.0.1 --directory src

# 地址簿管理系统 - 前端

## 项目简介

本项目为地址簿管理系统（Contacts Management System）的后端部分，采用 Flask + SQLAlchemy + SQLite 构建，实现联系人信息的增、删、改、查及版本历史追踪等核心功能

## 功能

- 创建新用户
- 查看用户列表
- 查看用户详情
- 编辑用户信息
- 删除用户
- 查看用户修改历史版本

## 技术栈

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- Fetch API

## 目录结构

- src/
- ├── index.html &emsp; &emsp;&emsp;  &emsp; # 创建用户页面
- ├── user-list.html &emsp; &emsp; &emsp; # 用户列表页面
- ├── user-detail.html &emsp; &emsp; # 用户详情页面
- ├── user-edit.html &emsp; &emsp; &emsp; # 编辑用户页面
- ├── user-versions.html &emsp; &emsp; # 版本历史页面
- ├── css/
- │&emsp;&emsp;  └── custom.css &emsp;&emsp;  # 自定义样式
- └── js/
- &emsp; &emsp; ├── api.js &emsp; &emsp; # API 请求封装
- &emsp; &emsp; ├── index.js &emsp; &emsp; # 创建用户页面脚本
- &emsp; &emsp; ├── user-list.js &emsp;&emsp;  # 用户列表页面脚本
- &emsp; &emsp; ├── user-detail.js &emsp; &emsp; # 用户详情页面脚本
- &emsp; &emsp; ├── user-edit.js &emsp;&emsp;  # 编辑用户页面脚本
- &emsp; &emsp; └── user-versions.js &emsp;&emsp;  # 版本历史页面脚本

# 个人信息：
- 福州大学学生ID: 832301316
- 梅努斯大学学生ID: 23124911
- 姓名：高杰铭



