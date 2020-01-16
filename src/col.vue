<template>
  <div
    :class="['g-col', span && `col-span-${span}`, offset && `col-offset-${offset}`]"
    :style="{marginLeft: gutter/2 + 'px', marginRight: gutter/2 + 'px'}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  computed: {
    gutter() {
      return this.$parent.gutter;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@for $i from 1 through 24 {
  .col-span-#{$i} {
    width: $i / 24 * 100%;
  }
}

@for $i from 1 through 24 {
  .col-offset-#{$i} {
    margin-right: $i / 24 * 100%;
  }
}
</style>