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
