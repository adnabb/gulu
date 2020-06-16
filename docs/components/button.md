# Button 按钮

## 基础用法

<ClientOnly>
  <g-button-1></g-button-1>
</ClientOnly>

```vue
<g-button :loading="loading1" @click="loading1=!loading1">按钮</g-button>
<g-button :loading="loading2" icon="#g-download" @click="loading2=!loading2">按钮</g-button>
<g-button :loading="loading3" icon="#g-upload" icon-position="right" @click="loading3=!loading3">按钮</g-button>
<g-button :loading="loading4" icon="#g-arrow-down" @click="loading4=!loading4">按钮</g-button>
```

## 按钮组

<ClientOnly>
  <g-button-2></g-button-2>
</ClientOnly>

```vue
<g-button-group>
    <g-button icon="#g-arrow-left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="#g-arrow-right" icon-position="right">下一页</g-button>
</g-button-group>
```