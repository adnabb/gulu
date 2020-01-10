# gulu
This is my own UI Component.

## 坑

1. 使用parcel打包时，遇到的坑

（1）parcel 打包时需要入口文件
```
npx parcel index.html
```
![p1.png](https://www.imageoss.com/images/2020/01/08/p1.png)

（2）打包时会自动下载相应的内容
![p2.png](https://www.imageoss.com/images/2020/01/08/p2.png)

（3）打包一直报内部错误，需要清除parcel缓存
```
npx parcel index.html --no-cache
```
![p3.png](https://www.imageoss.com/images/2020/01/08/p3.png)

2. iconfont

插入iconfont的symbol之后，必须加入通用的内容，否则icon不可以上色

```css
.g-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
```

3. npm run dev-test 无法正常运行

需要打开两个窗口进行手动运行
```
npx parcel watch test/* --no-cache
npx karma start
```
然而实际这样运行之后，karma每次启动会有一些问题，所以推荐还是直接使用npm run test，每次编译之后再karma

## 学习和巩固

1. html

html内的属性不可以为驼峰式

2. karma

使用以下命令，可以快速的创建一个有关karma的基础配置。
```
npx karma init karma.conf.js
```

在karma中引入了chai、sinon，在单元测试里面就可以直接使用，不需要单独引用；
