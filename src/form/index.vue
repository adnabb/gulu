<template>
  <form class="g-form">
    <slot></slot>
  </form>
</template>

<script>
  export default {
    name: 'GuluForm'
  }
</script>

<style lang="scss" scoped>
.g-form {
  &-item {
    margin: 1.5em 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>