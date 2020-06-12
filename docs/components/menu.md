# Menu 菜单

## 基础用法

默认选中第一个菜单

<ClientOnly>
  <g-menu-1></g-menu-1>
</ClientOnly>

```vue
<g-menu :selected.sync="menu">
  <g-menu-item name="1">menu 1</g-menu-item>
  <g-menu-item name="2">menu 2</g-menu-item>
  <g-menu-item name="3">menu 3</g-menu-item>
  <g-menu-item name="4">menu 4</g-menu-item>
</g-menu>

<script>
export default {
  data() {
    return {
      menu: '',
    };
  }
};
</script>
```

## 自定义子菜单

<ClientOnly>
  <g-menu-2></g-menu-2>
</ClientOnly>

```vue
<g-menu :selected.sync="menu2">
  <g-menu-item name="1">menu 1</g-menu-item>
  <g-submenu name="2">
    <template slot="name">menu 2</template>
    <g-menu-item name="2-1">menu 2-1</g-menu-item>
    <g-menu-item name="2-2">menu 2-2</g-menu-item>
    <g-menu-item name="2-3">menu 2-3</g-menu-item>
    <g-menu-item name="2-4">menu 2-4</g-menu-item>
  </g-submenu>
  <g-submenu name="3">
    <template slot="name">menu 3</template>
    <g-menu-item name="3-1">menu 3-1</g-menu-item>
    <g-menu-item name="3-2">menu 3-2</g-menu-item>
    <g-menu-item name="3-3">menu 3-3</g-menu-item>
    <g-submenu name="3-4">
      <template slot="name">menu 3-4</template>
      <g-menu-item name="3-4-1">menu 3-4-1</g-menu-item>
      <g-menu-item name="3-4-2">menu 3-4-2</g-menu-item>
      <g-menu-item name="3-4-3">menu 3-4-3</g-menu-item>
      <g-submenu name="3-4-4">
        <template slot="name">menu 3-4-4</template>
        <g-menu-item name="3-4-4-1">menu 3-4-4-1</g-menu-item>
        <g-menu-item name="3-4-4-2">menu 3-4-4-2</g-menu-item>
        <g-menu-item name="3-4-4-3">menu 3-4-4-3</g-menu-item>
      </g-submenu>
    </g-submenu>
  </g-submenu>
  <g-menu-item name="4">menu 4</g-menu-item>
</g-menu>

<script>
export default {
  data() {
    return {
      menu2: '1',
    };
  }
};
</script>
```
## 自定义方向（竖向）

<ClientOnly>
  <g-menu-3></g-menu-3>
</ClientOnly>

```vue
<g-menu :selected.sync="menu3" vertical>
  <g-menu-item name="1">menu 1</g-menu-item>
  <g-submenu name="2">
    <template slot="name">menu 2</template>
    <g-menu-item name="2-1">menu 2-1</g-menu-item>
    <g-menu-item name="2-2">menu 2-2</g-menu-item>
    <g-menu-item name="2-3">menu 2-3</g-menu-item>
    <g-menu-item name="2-4">menu 2-4</g-menu-item>
  </g-submenu>
  <g-submenu name="3">
    <template slot="name">menu 3</template>
    <g-menu-item name="3-1">menu 3-1</g-menu-item>
    <g-menu-item name="3-2">menu 3-2</g-menu-item>
    <g-menu-item name="3-3">menu 3-3</g-menu-item>
    <g-submenu name="3-4">
      <template slot="name">menu 3-4</template>
      <g-menu-item name="3-4-1">menu 3-4-1</g-menu-item>
      <g-menu-item name="3-4-2">menu 3-4-2</g-menu-item>
      <g-menu-item name="3-4-3">menu 3-4-3</g-menu-item>
      <g-submenu name="3-4-4">
        <template slot="name">menu 3-4-4</template>
        <g-menu-item name="3-4-4-1">menu 3-4-4-1</g-menu-item>
        <g-menu-item name="3-4-4-2">menu 3-4-4-2</g-menu-item>
        <g-menu-item name="3-4-4-3">menu 3-4-4-3</g-menu-item>
      </g-submenu>
    </g-submenu>
  </g-submenu>
  <g-menu-item name="4">menu 4</g-menu-item>
</g-menu>

<script>
export default {
  data() {
    return {
      menu3: '1',
    };
  }
};
</script>
```
