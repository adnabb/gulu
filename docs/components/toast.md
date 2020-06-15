# Toast 弹出层

## 基础用法

<ClientOnly>
  <g-toast-1></g-toast-1>
</ClientOnly>

```vue
<g-button @click="showToast">点击弹出toast</g-button>
<g-button @click="autoCloseToast">自动关闭Toast</g-button>

<script>
export default {
  methods: {
    showToast() {
      this.$toast('你好，这是一条toast内容', {
        autoClose: false
      });
    },
    autoCloseToast() {
      this.$toast({
        autoClose: true,
        text: '内容1秒后自动关闭',
        duration: 1
      });
    },
  }
};
</script>
```

## 自定义弹出位置

<ClientOnly>
  <g-toast-2></g-toast-2>
</ClientOnly>

```vue
<g-button @click="changeToastPosition">toast出现在下方</g-button>

<script>
export default {
  methods: {
    changeToastPosition() {
      this.$toast('这是页面下方的toast', {
        position: 'bottom'
      });
    }
  }
};
</script>
```

## 自定义html文本

<ClientOnly>
  <g-toast-3></g-toast-3>
</ClientOnly>

```vue
<g-button @click="htmlSuportedToast">htmlSuportedToast</g-button>

<script>
export default {
  methods: {
    htmlSuportedToast() {
      this.$toast({
        text: '<i>Nice to meet you</i>',
        htmlSuport: true
      });
    },
  }
};
</script>
```

## 自定义关闭

<ClientOnly>
  <g-toast-4></g-toast-4>
</ClientOnly>

```vue
<g-button @click="customCloseToast">自定义关闭toast</g-button>

<script>
export default {
  components: {
    'g-button': Button,
    'g-toast': Toast
  },
  methods: {
    customCloseToast() {
      this.$toast({
        position: 'top',
        text: `${Math.random() * 100}tt`,
        autoClose: false,
        customCloseText: '关闭'
      });
    },
  }
};
</script>
```

## 自定义多行文本

<ClientOnly>
  <g-toast-5></g-toast-5>
</ClientOnly>

```vue
<g-button @click="multiLineToast">toast多行文字</g-button>

<script>
export default {
  components: {
    'g-button': Button,
    'g-toast': Toast
  },
  methods: {
    multiLineToast() {
      this.$toast({
        text: `我是很长的文字，我来测试多行的toast的排版、样式等是否合理。
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理`,
        customCloseText: '关闭',
        autoClose: false
      });
    }
  }
};
</script>
```
