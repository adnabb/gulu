<template>
  <div style="margin: 20px 0;">
    <g-menu :selected.sync="menu">
      <g-menu-item name="1">menu 1</g-menu-item>
      <g-menu-item name="2">menu 2</g-menu-item>
      <g-menu-item name="3">menu 3</g-menu-item>
      <g-menu-item name="4">menu 4</g-menu-item>
    </g-menu>
  </div>
</template>

<script>
import Menu from '../../../src/menu/index';
import MenuItem from '../../../src/menu/menu-item';
export default {
  components: {
    'g-menu': Menu,
    'g-menu-item': MenuItem
  },
  data() {
    return {
      menu: '',
    };
  }
};
</script>

<style scoped>
</style>