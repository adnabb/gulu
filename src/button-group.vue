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
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
  }
}
</style>