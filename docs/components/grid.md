---
title: TestGrid
---
# Grid 布局
通过基础的 24 分栏，迅速简便地创建布局。


## 基础布局
使用单一分栏创建基础的栅格布局。

<ClientOnly>
  <g-grid-1></g-grid-1>
</ClientOnly>

```vue
<g-row>
  <g-col></g-col>
  <g-col></g-col>
</g-row>
<g-row>
  <g-col></g-col>
  <g-col></g-col>
  <g-col></g-col>
  <g-col></g-col>
</g-row>
<g-row>
  <g-col></g-col>
  <g-col></g-col>
  <g-col></g-col>
  <g-col></g-col>
  <g-col></g-col>
  <g-col></g-col>
  <g-col></g-col>
</g-row>
```

## 分栏间隔
分栏之间存在间隔。

<ClientOnly>
  <g-grid-2></g-grid-2>
</ClientOnly>

```vue
<g-row :gutter="10">
    <g-col></g-col>
    <g-col></g-col>
</g-row>
<g-row :gutter="20">
    <g-col></g-col>
    <g-col></g-col>
    <g-col></g-col>
    <g-col></g-col>
</g-row>
<g-row :gutter="30">
    <g-col></g-col>
    <g-col></g-col>
    <g-col></g-col>
    <g-col></g-col>
    <g-col></g-col>
    <g-col></g-col>
    <g-col></g-col>
</g-row>
```

## 自定义范围和间隔

<ClientOnly>
  <g-grid-3></g-grid-3>
</ClientOnly>

```vue
<g-row>
    <g-col span="13" offset="1"></g-col>
    <g-col span="10"></g-col>
</g-row>
<g-row>
    <g-col span="8" offset="8"></g-col>
    <g-col span="8"></g-col>
</g-row>
<g-row>
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
    <g-col span="4" offset="4"></g-col>
    <g-col span="4"></g-col>
</g-row>
```

## 自定义位置

<ClientOnly>
  <g-grid-4></g-grid-4>
</ClientOnly>

```vue
<g-row align="center">
    <g-col span="10" offset="1"></g-col>
    <g-col span="10"></g-col>
</g-row>
<g-row align="left">
    <g-col span="7" offset="8"></g-col>
    <g-col span="8"></g-col>
</g-row>
<g-row align="right">
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
    <g-col span="4" offset="4"></g-col>
    <g-col span="4"></g-col>
</g-row>
```

## 响应式

<ClientOnly>
  <g-grid-5></g-grid-5>
</ClientOnly>

```vue
<g-row>
    <g-col span="1" offset="1" :phone="{span:7}" :ipad="{span:12}" :narrow-pc="{span:14}" :pc="{span:20}"
        :wide-pc="{span:23}"></g-col>
    <g-col span="22" :phone="{span:17}" :ipad="{span:12}" :narrow-pc="{span:10}" :pc="{span:4}"
        :wide-pc="{span:1}"></g-col>
</g-row>
<g-row>
    <g-col span="8" :phone="{span:8}" :ipad="{span:8}"></g-col>
    <g-col span="8" :phone="{span:7, offset:1}" :ipad="{span:8}"></g-col>
    <g-col span="8" :phone="{span:8}" :ipad="{span:8}"></g-col>
</g-row>
<g-row>
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
    <g-col span="4"></g-col>
</g-row>
```
