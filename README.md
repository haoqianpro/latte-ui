# latte-ui

一个 Vue3 组件库

- 软件版本
  | 软件 | 版本 |
  | ---- | ---- |
  | Node | v16.15.0 |
  | Pnmp | v7.14.2 |

- 环境搭建

  - 全局安装 pnpm
  - 代码克隆到本地后使用 pnpm 安装依赖
  - 到 packages/components 目录下执行 pnpm run build 进行组件打包
  - 到 examples 目录下执行 pnpm run dev 可以看到组件测试效果

- 目录说明
  - examples 测试组件效果的 vue3 脚手架项目
  - packages/components/src 编写组件的目录，一个组件一个目录；组件编写完成后在 src/index.js 中导出，然后重新执行打包，就可以在 examples 中测试使用
