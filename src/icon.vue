<template>
  <svg class="g-icon" aria-hidden="true">
    <use :xlink:href="name" />
  </svg>
</template>

<script>
import './static/icon'

export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: .9em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>