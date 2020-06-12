## 基础用法

<ClientOnly>
  <g-button-1></g-button-1>
</ClientOnly>

```vue
<g-button :loading="loading1" @click="loading1=!loading1">按钮</g-button>
<g-button :loading="loading2" icon="download" @click="loading2=!loading2">按钮</g-button>
<g-button :loading="loading3" icon="upload" icon-position="right" @click="loading3=!loading3">按钮</g-button>
<g-button :loading="loading4" icon="arrow-down" @click="loading4=!loading4">按钮</g-button>
```

## 按钮组

<ClientOnly>
  <g-button-2></g-button-2>
</ClientOnly>

```vue
<g-button-group>
    <g-button icon="arrow-left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="arrow-right" icon-position="right">下一页</g-button>
</g-button-group>
```