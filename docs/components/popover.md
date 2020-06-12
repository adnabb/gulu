# Popover 气泡卡片

## 基础用法

<ClientOnly>
  <g-popover-1></g-popover-1>
</ClientOnly>

```vue
<g-popover>
  <p slot="content">这里是提示内容。</p>
  <g-button>点击显示提示内容</g-button>
</g-popover>
<g-popover>
  <p slot="content">这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。</p>
  <g-button>点击显示超长内容</g-button>
</g-popover>
```

## 自定义提示位置

<ClientOnly>
  <g-popover-2></g-popover-2>
</ClientOnly>

```vue
<g-popover position="top">
  <p slot="content">这里是提示内容。</p>
  <g-button>头部显示提示内容</g-button>
</g-popover>
<g-popover position="bottom">
  <p slot="content">这里是提示内容。</p>
  <g-button>尾部提示内容</g-button>
</g-popover>
<g-popover position="left">
  <p slot="content">这里是提示内容。</p>
  <g-button>左侧显示提示内容</g-button>
</g-popover>
<g-popover position="right">
  <p slot="content">这里是提示内容。</p>
  <g-button>右侧提示内容</g-button>
</g-popover>
```
## 自定义触发方式

<ClientOnly>
  <g-popover-3></g-popover-3>
</ClientOnly>

```vue
<g-popover trigger="click">
  <template slot="content">这里是提示内容。</template>
  <g-button>click触发</g-button>
</g-popover>
<g-popover trigger="hover">
  <p slot="content">这里是提示内容。</p>
  <g-button>hover触发</g-button>
</g-popover>
```

## 自定义关闭（可在弹出区域点击关闭）

<ClientOnly>
  <g-popover-4></g-popover-4>
</ClientOnly>

```vue
<g-popover>
  <template v-slot:content="{close}">
    <p>
      <span>这里是提示内容</span>
      <g-button @click="close">关闭</g-button>
    </p>
  </template>
  <g-button>click触发</g-button>
</g-popover>
```