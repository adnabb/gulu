<template>
  <div :class="['g-layout', {'has-sider': hasSider}]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluLayout',
    mounted () {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluSider') this.hasSider = true;
      });
    },
    data() {
      return {
        hasSider: false,
      }
    },
  }
</script>

<style lang="scss" scoped>
.g-layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.has-sider {
  flex-direction: row;
}
</style>