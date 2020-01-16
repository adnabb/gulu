<template>
  <div class="g-row" :class="align && `g-row-${align}`" :style="{marginLeft: -gutter/2 + 'px', marginRight: -gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [Number, String],
      },
      align: {
        type: String,
        validator: (value) => {
          return ['left', 'right', 'center'].indexOf(value) !== -1;
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
.g-row {
  display: flex;
}

.g-row-left {
  justify-content: flex-start;
}

.g-row-right {
  justify-content: flex-end;
}

.g-row-center {
  justify-content: center;
}
</style>