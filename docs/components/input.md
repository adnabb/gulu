## 基础用法

<ClientOnly>
  <g-input-1></g-input-1>
</ClientOnly>

```vue
<g-input></g-input>
<g-input placeholder="请输入内容"></g-input>
<g-input disabled value="123"></g-input>
<g-input readonly value="234"></g-input>
<g-input error="请输入正确的内容" value="234"></g-input>
```

## 监听事件

<ClientOnly>
  <g-input-3></g-input-3>
</ClientOnly>

```vue
<g-input :value="value" @input="changeValue"></g-input>

<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    changeValue(value) {
      this.value = value;
    }
  }
};
</script>
```

## 双向绑定

<ClientOnly>
  <g-input-2></g-input-2>
</ClientOnly>

```vue
<g-input :value="value" @input="changeValue"></g-input>
<g-input v-model="value"></g-input>
<span>input的值：{{ value }}</span>
<g-button @click="value += 1">点击+1</g-button>

<script>
export default {
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    changeValue(value) {
      this.value = value;
    }
  }
};
</script>
```
