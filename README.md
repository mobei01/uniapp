# APP

## 目录结构如下：
```
APP
└──common // 公共目录
    └──css	
    └──minix
    └──utils // 工具类和方法
└──components // 公共组件
    └──xxx // 公共组件1
    └──xxx
└──nativeplugins // 原生插件
    └──xxx // 插件1
└──pages // 页面文件
    └──index
    └──address
    └──work
    └──my
    └──login
    └──xxx
├──services // 接口请求
├──static	// 静态资源
├──store	// 全局状态
├──unpackage
├──uview-ui	// uview组件库
├──App.vue
├──main.js
├──manifest.json
├──pages.json // page、tabBar等页面配置文件，详见uni-app文档
├──uni.scss // uni-app内置的常用样式变量
```

### 资料地址:

[vue文档](https://cn.vuejs.org/)
[uni-app文档](https://uniapp.dcloud.io/)
[APP离线打包&&三方SDK配置文档](https://nativesupport.dcloud.net.cn/AppDocs/README)
[原生插件开发文档](https://nativesupport.dcloud.net.cn/NativePlugin/README)
[HBuilderX使用文档](https://nativesupport.dcloud.net.cn/NativePlugin/README)
[uview文档](https://www.uviewui.com/)
[es6参考文档](https://es6.ruanyifeng.com/)
[vant webapp文档](http://vant-contrib.gitee.io/vant-weapp/#/intro)

### 下载地址:
[HBuilderX](https://www.dcloud.io/)

### 其他资料:
### 调试
[调试参考文档](https://ask.dcloud.net.cn/article/69)
#### 调试方式1：真机调试，hbuilder运行 => 运行到手机或模拟器 => 真机调试
#### 调试方式2：webview，hbuilder运行 => 运行到手机或模拟器 => 显示webview控制台 => 下方选择页面inspect

### 开发工具
#### 尽量使用HBuilder进行开发，因为设计稿为360px，uniapp 100%宽度为750rpx，
在hbuilder工具 => 设置 => 编辑器配置中，启用px转rpx功能，填写换算比例360/750 = 0.48,即可自动px换算成rpx

### APP打包
1、云端打包
2、离线打包(需安装打包环境)

### 插件安装
1、sass编译
2、APP真机运行
3、uni-app App调试
4、

### vant-webapp使用说明
1、由于支持在HBuilder上使用内置浏览器进行web调试，对vant webapp代码进行了修改
```
vant => common => utils.js

export function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }
  if (!systemInfo.SDKVersion) systemInfo.SDKVersion = "";
  return systemInfo;
}

if (!systemInfo.SDKVersion) systemInfo.SDKVersion = ""; // 此处为新加代码
```
2、CDN资源本地化
部分图片，字体文件在vant为CDN引用,为脱机使用，新建文件`vant/static`,该文件夹下文件已本地化引用