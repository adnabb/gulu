# gulu
This is my own UI Component.

[![Build Status](https://www.travis-ci.org/adnabb/gulu.svg?branch=master)](https://www.travis-ci.org/adnabb/gulu)

## Getting Started
Let's follow me, and then we can work with this UI components for Vuejs.

### Installing

1. 引入npm包
```
npm install -D vue-ui-framework
```

2. 引入所需的组件
```js
import { Button } from "vue-ui-framework";

export default {
  name: "app",
  components: {
    "g-button": Button
  }
};
```

3. 引入样式
```css
<style>
@import "../node_modules/vue-ui-framework/dist/index.css";

:root {
  --border-color: #dcdfe6;
  --border-hover-color: #c6e2ff;
  --borer-active-color: #3a8ee6;
  --border-radius: 4px;

  --font-size: 14px;
  --font-color: #333;
  --font-hover-color: #409eff;
  --font-active-color: #3a8ee6;
  --font-disabled-color: #c0c4cc;

  --button-height: 32px;
  --button-bg: #fff;
  --button-active-bg: #ecf5ff;
}
</style>
```

## Running the tests

1. 将代码克隆到本地
```
git clone https://github.com/adnabb/gulu.git
```

1. 安装相应的依赖
```
npm install
```

3. 执行npm命令
```
npm run test
```

## Built With

Vue - This is a UI Component for Vuejs.


## Versioning
This is only an initial version, and I will do it completely then.

## Authors

[vivi](https://github.com/adnabb/gulu)

## License

[MIT](opensource.org/licenses/MIT)

Copyright (c) 2020 vivi

## Acknowledgments

Thanks for my teacher to lead me and thank me.
