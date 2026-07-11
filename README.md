# 东软云医院 - 医院信息管理系统

## 项目概述

东软云医院是一套基于 Vue 3 的医院信息管理系统（HIS）前端客户端，为医院提供挂号收费、门诊诊疗、药房管理、科室管理、人员管理等全流程信息化解决方案。系统采用现代化的响应式设计，支持 PC 端和移动端访问，帮助医疗机构实现日常业务的高效运转与数据的规范化管理。

## 预览地址

- **在线预览**: [https://chenzhixian0805.github.io/hisclient/](https://chenzhixian0805.github.io/hisclient/)

## 技术栈

- **Vue 3**：前端框架，采用 Options API 进行组件逻辑组织
- **Vue Router 4**：官方路由管理器，实现单页应用的多模块页面跳转与嵌套路由控制
- **Element Plus**：基于 Vue 3 的 UI 组件库，提供表格、表单、对话框等医疗系统常用组件
- **Element Plus Icons**：图标库，全局注册后供各业务模块统一调用
- **Vue CLI 5**：项目脚手架与构建工具

## 功能模块

### 1. 挂号收费
- 窗口挂号：患者现场挂号信息录入
- 窗口退号：挂号记录查询与退号处理

### 2. 门诊医生
- 患者查看：患者信息查询与管理
- 医生诊疗：病历首页（含疾病添加功能）
- 开设处方：在线处方开具（含药品添加功能）

### 3. 药房管理
- 药房发药：药品发放记录管理
- 药房库存：药品库存实时监控与管理

### 4. 医院科室
- 内科：内科诊疗管理
- 外科：外科诊疗管理

### 5. 人员管理
- 医院职员：职员信息管理

## 系统特点

- **响应式布局**：支持 PC 端和移动端自适应显示
- **侧边栏折叠**：PC 端支持侧边栏展开/折叠，节省屏幕空间
- **移动端抽屉菜单**：小屏幕设备自动切换为抽屉式导航
- **路由懒加载**：业务视图按需加载，降低首屏渲染时间
- **统一 UI 风格**：全系统采用 Element Plus 组件与图标库，交互方式统一
- **面包屑导航**：顶部显示当前页面位置，便于快速定位

## 项目结构

```
src/
├── views/
│   ├── Index.vue          # 主布局页面（侧边栏 + 头部 + 内容区）
│   ├── OnsiteRegistration.vue    # 窗口挂号
│   ├── RegistrationRecord.vue    # 窗口退号
│   ├── PatientView.vue           # 患者查看
│   ├── MedicalRecord.vue         # 病历首页
│   ├── AddDisease.vue            # 添加疾病
│   ├── PrescribeMedicine.vue     # 开设处方
│   ├── AddMedicine.vue           # 添加药品
│   ├── PharmacyDispensing.vue    # 药房发药
│   ├── PharmacyInventory.vue     # 药房库存
│   ├── InternalMedicine.vue      # 内科
│   ├── Surgery.vue               # 外科
│   └── Person.vue                # 医院职员
├── router/
│   └── index.js           # 路由配置
├── main.js                # 应用入口
└── App.vue                # 根组件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run serve
```

访问 http://localhost:8080/hisclient/

### 生产构建

```bash
npm run build
```

### 部署到 GitHub Pages

```bash
npm run build
cd dist
git init
git add -A
git commit -m "deploy"
git branch -M gh-pages
git push -f origin gh-pages
```

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge

## 许可证

MIT License