<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted () {
    for (const node of this.$el.children) {
      const nodeName = node.nodeName.toLowerCase();

      if (nodeName !== 'button') {
        console.warn(`注意：<g-button-group>要求其内的子元素都必须为button，而你使用了错误的元素${nodeName}`)
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  .g-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:hover, &:focus {
      z-index: 1;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>