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
然而实际这样运行之后，karma每次启动会有一些问题，所以推荐还是直接使用npm run test，每次编译之后再karma（类似的问题解决方案可以查看一下，[solution](https://www.e-learn.cn/content/wangluowenzhang/171025)）


4. travis ci 无法启动chrome

将karma配置里的chrome改为ChromeHeadless

5. npm publish

![problem]([![1.png](https://www.imageoss.com/images/2020/01/10/1.png)](https://www.imageoss.com/image/4vI8b))

npm publish时，必须将npm源切换为原始的，不可以为淘宝源。

6. vue :style

这样写是不被允许以及不被生效的，只能写单个的某一方向的属性
```html
:style="{margin: 0 gutter + 'px'}"
```

例如
```html
:style="{marginRight: gutter + 'px'}"
```


## 学习和巩固

1. html

html内的属性不可以为驼峰式

2. karma

使用以下命令，可以快速的创建一个有关karma的基础配置。
```
npx karma init karma.conf.js
```

在karma中引入了chai、sinon，在单元测试里面就可以直接使用，不需要单独引用；
