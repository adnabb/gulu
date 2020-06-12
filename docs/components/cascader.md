# Cascader 级联选择器

## 基础用法

<ClientOnly>
  <g-cascader-1></g-cascader-1>
</ClientOnly>

```vue
<g-cascader :source="cascaderSource" :selected.sync="cascaderSelected"></g-cascader>
<script>
export default {
  data() {
    return {
      cascaderSelected: [],
      cascaderSource: [
        {
          value: 'zhinan',
          name: '指南',
          children: [
            {
              value: 'shejiyuanze',
              name: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  name: '一致'
                },
        ... ...
        }
      ]
    };
  }
};
</script>
```

## 自定义默认值

<ClientOnly>
  <g-cascader-2></g-cascader-2>
</ClientOnly>

```vue
<g-cascader :source="cascaderSource" :selected.sync="cascaderSelected2"></g-cascader>
<script>
export default {
  data() {
    return {
      cascaderSelected2: ['zhinan', 'daohang', 'cexiangdaohang'],
      cascaderSource: [
        {
          value: 'zhinan',
          name: '指南',
          children: [
            {
              value: 'shejiyuanze',
              name: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  name: '一致'
                },
        ... ...
        }
      ]
    };
  }
};
</script>
```

## 自定义禁用选项

 给禁用的内容设置 disabled: true 即可

<ClientOnly>
  <g-cascader-3></g-cascader-3>
</ClientOnly>


## 自定义动态加载（此处以省市县选择器为例）

<ClientOnly>
  <g-cascader-4></g-cascader-4>
</ClientOnly>

```vue
<g-cascader
  :source.sync="cascaderSource3"
  :load-data="loadData"
  :selected.sync="cascaderSelected4"
></g-cascader>

<script>
import { province } from '../../../src/static/regions/province';
import { country } from '../../../src/static/regions/country';
import { city } from '../../../src/static/regions/city';
import { town } from '../../../src/static/regions/town';
export default {
  data() {
    return {
      cascaderSelected4: [],
      cascaderSource3: []
    };
  },
  methods: {
    // 模拟后台发送数据
    loadData(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!id) {
            province.forEach(item => {
              item.value = item.name;
              item.isLeaf = city[item.id] ? false : true;
            });
            resolve(province);
          } else {
            let result = [];
            let flag = false;
            if (city[id]) {
              if (city[id].length === 1 && city[id][0].name === '市辖区') {
                id = city[id][0].id;
              } else {
                result = city[id];
              }
            }
            if (country[id]) {
              result = country[id];
            } else if (town[id]) {
              result = town[id];
              flag = true;
            }
            result.forEach(item => {
              item.value = item.name;
              item.isLeaf = flag;
            });
            resolve(result);
          }
        }, 600);
      });
    }
  }
};
</script>
```


