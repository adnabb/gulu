---
title: TestLayout
---
# Layout 布局


## 基础布局

<ClientOnly>
  <g-layout-1></g-layout-1>
</ClientOnly>

```vue
<g-layout>
    <g-header>Header</g-header>
    <g-content>Content</g-content>
    <g-footer>Footer</g-footer>
</g-layout>
```

## 有侧边栏

### 侧边栏在左侧

<ClientOnly>
  <g-layout-4></g-layout-4>
</ClientOnly>

```vue
<g-layout>
  <g-sider">Sider</g-sider>
  <g-layout>
    <g-header>Header</g-header>
    <g-content>Content</g-content>
    <g-footer>Footer</g-footer>
  </g-layout>
</g-layout>
```
### 侧边栏在中间（左）

<ClientOnly>
  <g-layout-2></g-layout-2>
</ClientOnly>

```vue
<g-layout>
  <g-header>Header</g-header>
  <g-layout>
    <g-sider>Sider</g-sider>
    <g-content>Content</g-content>
  </g-layout>
  <g-footer>Footer</g-footer>
</g-layout>
```
### 侧边栏在中间（右）

<ClientOnly>
  <g-layout-3></g-layout-3>
</ClientOnly>

```vue
<g-layout>
  <g-header>Header</g-header>
  <g-layout>
    <g-content>Content</g-content>
    <g-sider>Sider</g-sider>
  </g-layout>
  <g-footer>Footer</g-footer>
</g-layout>
```
