<template>
  <div style="margin: 20px 0;">
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
  </div>
</template>

<script>
import Menu from '../../../src/menu/index';
import MenuItem from '../../../src/menu/menu-item';
import Submenu from '../../../src/menu/submenu';
export default {
  components: {
    'g-menu': Menu,
    'g-menu-item': MenuItem,
    'g-submenu': Submenu
  },
  data() {
    return {
      menu3: '1'
    };
  }
};
</script>


<style scoped>
.g-submenu {
  z-index: 2;
}
</style>