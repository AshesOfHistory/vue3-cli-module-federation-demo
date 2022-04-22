<!--
 * @Author: 沧澜
 * @Date: 2022-04-15 11:13:51
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 19:22:44
 * @Description: 
-->
# vue-cli@5.x.x Module Federation

### App exposes

Init and start first app

```bash
cd app-exposes;
npm i;
npm run serve;
```

More information [./app-exposes/README.md](./app-exposes/README.md)

### App general (host)

Init and start second app

```bash
cd app-general;
npm i;
npm run serve;
```

After that open
http://localhost:8081

More information [./app-general/README.md](./app-general/README.md)

```javascript
// 公共依赖shared的配置项
Shared = string[] | {
  [string]: {
    eager?: boolean; // 是否立即加载模块而不是异步加载
    import?: false | SharedItem; // 应该提供给共享作用域的模块。如果在共享范围中没有发现共享模块或版本无效，还充当回退模块。默认为属性名
    packageName?: string; // 设置包名称以查找所需的版本。只有当包名不能根据请求自动确定时，才需要这样做（如要禁用自动推断，请将requiredVersion设置为false）。
    requiredVersion?: false | string; // 共享范围内模块的版本要求
    shareKey?: string; // 用这个名称在共享范围中查找模块
    shareScope?: string; // 共享范围名称
    singleton?: boolean; // 是否在共享作用域中只允许共享模块的一个版本 (单例模式).
    strictVersion?: boolean; // 如果版本无效则不接受共享模块(默认为true，如果本地回退模块可用且共享模块不是一个单例，否则为false，如果没有指定所需的版本则无效)
    version?: false | string; // 所提供模块的版本，将替换较低的匹配版本
  }[]
}

- remoteType，可选，默认 var，("var"|"module"| "assign"|"this"|"window"|"self"|"global"|"commonjs"|"commonjs2"| "commonjs-module"|"amd"|"amd-require"|"umd"|"umd2"|"jsonp"|"system"|"promise"|"import"|"script")，远程容器的外部类型；
```
