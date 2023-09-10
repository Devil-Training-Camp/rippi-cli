# rippi-cli
一个拥有内外部插件机制的脚手架



## 安装

```javascript
npm install -g rippi-cli
```

## 使用

提示：要求node版本至少高于16.0.0

* 创建项目

  ```
  cli create <app-name>
  ```

  工具：支持npm、pnpm和yarn。

  内部插件：支持react路由模式、eslint配置、后续会有更多内部插件的提供。

  自动化：自动安装依赖，自动启动项目。

* 配置脚手架

  ```
  cli config [key] [value]
  ```

  key和value均为选填值。

  1、未提供key和value为查看当前所有配置

  2、仅提供key为查看指定配置项

  3、提供了key和value为设置配置项

* 配置外部插件

  ```
  cli plugin <action> [plugin]
  ```

  action为必填值，plugin为选填值。

  action可选值为：

  1、check：查看所有外部插件

  2、add：添加指定外部插件

  3、delete：删除指定外部插件

  4、clear：清空所有外部插件

* 自定义外部插件

  脚手架的插件机制提供了4个api。

  1、render方法：可直接给render方法传入指定相对路径，它将会把路径里的文件都复制到项目同样相对路径中。

  2、injectImport方法：此方法接受两个参数，第一个参数为需要插入import语句的文件路径，第二个参数为需要插入的import语句。

  3、transformScript方法：此方法接受两个参数，第一个参数为需要执行脚本的文件路径，第二个参数为需要执行的脚本路径。

  4、extendPackage方法：此方法可以为项目package.json添加依赖。

  更多可参考此路由内部插件：https://www.npmjs.com/package/@rippiorg/react-router-plugin

  



