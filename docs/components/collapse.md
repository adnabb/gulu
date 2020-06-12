# Collapse 折叠面板

## 基础用法

<ClientOnly>
  <g-collapse-1></g-collapse-1>
</ClientOnly>

```vue
<g-collapse :selected.sync="selectedCollapseItem">
  <g-collapse-item name="item1">item1 content</g-collapse-item>
  <g-collapse-item name="item2">item2 content</g-collapse-item>
  <g-collapse-item name="item3">item3 content</g-collapse-item>
</g-collapse>
```

## 一次只展示一个面板

<ClientOnly>
  <g-collapse-2></g-collapse-2>
</ClientOnly>

```vue
<g-collapse :selected.sync="selectedCollapseItem2" single>
  <g-collapse-item name="item1">item1 content</g-collapse-item>
  <g-collapse-item name="item2">item2 content</g-collapse-item>
  <g-collapse-item name="item3">item3 content</g-collapse-item>
</g-collapse>
```

