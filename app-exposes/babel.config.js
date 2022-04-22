/*
 * @Author: 沧澜
 * @Date: 2022-04-15 11:13:51
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 15:15:06
 * @Description:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
};
