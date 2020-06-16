# Tab 标签页

## 基础用法

默认选中第一项

<ClientOnly>
  <g-tab-5></g-tab-5>
</ClientOnly>

```vue
<g-tabs>
  <g-tab-pane tab="tab1" id="1">pane1</g-tab-pane>
  <g-tab-pane tab="tab2" id="2">pane2</g-tab-pane>
  <g-tab-pane tab="tab3" id="3">pane3</g-tab-pane>
</g-tabs>
```

## 自定义默认页签

<ClientOnly>
  <g-tab-1></g-tab-1>
</ClientOnly>

```vue
<g-tabs default-active-id="2">
  <g-tab-pane tab="tab1" id="1">pane1</g-tab-pane>
  <g-tab-pane tab="tab2" id="2">pane2</g-tab-pane>
  <g-tab-pane tab="tab3" id="3">pane3</g-tab-pane>
</g-tabs>
```

## 自定义禁用选项

<ClientOnly>
  <g-tab-2></g-tab-2>
</ClientOnly>

```vue
<g-tabs default-active-id="1">
  <g-tab-pane tab="tab1" id="1">pane1</g-tab-pane>
  <g-tab-pane tab="tab2" id="2">pane2</g-tab-pane>
  <g-tab-pane tab="tab3" :disabled="true" id="3">pane3</g-tab-pane>
</g-tabs>
```

## 自定义icon图标

<ClientOnly>
  <g-tab-3></g-tab-3>
</ClientOnly>

```vue
<g-tabs default-active-id="1">
  <g-tab-pane tab="tab1" id="1">
    <span slot="tab">
      <g-icon name="#g-download"></g-icon>下载
    </span>
    下载pane
  </g-tab-pane>
  <g-tab-pane tab="tab2" id="2">
    <span slot="tab">
      <g-icon name="#g-upload"></g-icon>上传
    </span>
    上传pane
  </g-tab-pane>
</g-tabs>
```

## 自定义位置

<ClientOnly>
  <g-tab-4></g-tab-4>
</ClientOnly>

```vue
<g-tabs :tab-position="tabPosition">
  <g-tab-pane tab="tab1" id="1">pane1</g-tab-pane>
  <g-tab-pane tab="tab2" id="2">pane2</g-tab-pane>
  <g-tab-pane tab="tab3" id="3">pane3</g-tab-pane>
</g-tabs>

<script>
export default {
  data() {
    return {
      tabPosition: 'top'
    };
  },
};
</script>
```