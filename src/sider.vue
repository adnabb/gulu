<template>
  <div class="g-sider">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluSider'
  }
</script>

<style lang="scss" scoped>
.g-sider {
  min-width: 150px;
}
</style>