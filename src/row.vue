<template>
  <div class="g-row" :class="rowClass" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      type: String,
      validator: value => ['left', 'right', 'center'].indexOf(value) !== -1
    }
  },
  computed: {
    rowClass() {
      const { align } = this;
      return align && `g-row-${align}`;
    },
    rowStyle() {
      const { gutter } = this;
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.g-row {
  display: flex;

  &-left {
    justify-content: flex-start;
  }

  &-right {
    justify-content: flex-end;
  }

  &-center {
    justify-content: center;
  }
}
</style>