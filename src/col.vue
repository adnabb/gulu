<template>
  <div :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluCol',
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
    },
    colClass() {
      const { span, offset } = this;

      return [
        'g-col',
        span && `col-span-${span}`,
        offset && `col-offset-${offset}`
      ];
    },
    colStyle() {
      const { gutter } = this;

      return { marginLeft: gutter / 2 + 'px', marginRight: gutter / 2 + 'px' };
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