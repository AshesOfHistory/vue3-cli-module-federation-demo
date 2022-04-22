/*
 * @Author: 沧澜
 * @Date: 2022-04-15 11:13:51
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 18:23:39
 * @Description:
 */
const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  devServer: {
    port: 8081, // 指定端口号为8081
  },
  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        // 必填：指定输出的模块容器名称为app_general
        name: "app_general",
        // 指定打包后的文件名为remoteEntry.js
        filename: "remoteEntry.js",
        // 表示当前应用是一个 Host，可以引用 Remote 中 expose 的模块
        remotes: {
          // app_exposes为之前我们remote出来的容器名称，映射其对应的远程地址。
          // 这里我手动指定了项目的端口号为8083
          // 又因为其打包后导出的文件名为remoteEntry，所以地址如下
          // 引入完毕之后即可使用其暴露出来的/SpecialItem.vue，/SearchItem.vue，/AboutView.vue
          app_exposes: "app_exposes@http://localhost:8083/remoteEntry.js",
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
