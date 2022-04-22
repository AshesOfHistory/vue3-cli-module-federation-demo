const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  devServer: {
    port: 8083, // 设置端口号为8083
  },
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        // 必填：指定输出的模块容器名称为app_exposes
        name: "app_exposes",
        // 指定打包后的文件名为remoteEntry.js
        filename: "remoteEntry.js",
        // 导出本容器暴露给其他容器远程连接的模块
        exposes: {
          // 导出对应文件，
          // 键名对应该文件相对于打包后文件名为remoteEntry.js的相对路径，
          // 键值对应到从vue.config.js到该模块的相对路径地址
          "./SpecialItem.vue": "./src/components/SpecialItem.vue",
          "./SearchItem.vue": "./src/components/SearchItem.vue",
          "./AboutView.vue": "./src/views/AboutView.vue",
        },
        // 主要是用来避免项目出现多个公共依赖，若是配置了这个属性，webpack
        // 在加载的时候会先判断本地应用是否存在对应的包，若是不存在，则加载远程应用的依赖包
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
