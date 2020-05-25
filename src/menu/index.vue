<template>
  <div class="g-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluMenu',
  props: {
    selected: {
      type: String | Array
    },
    vertical: {
      type: Boolean
    }
  },
  provide() {
    return {
      root: this
    };
  },
  mounted() {
    this.updateChildren();
  },
  methods: {
    updateSelected(name) {
      this.$emit('update:selected', name);
    },
  },
  watch: {
    selected(newValue, oldValue) {
      this.updateChildren();
    }
  }
};
</script>

<style lang="scss">
.g-menu {
  display: flex;
  &-item, .g-submenu-title {
    padding: 1em 2em;
    border: 1px solid;
    background: #fff;
    cursor: pointer;
    &.active {
      outline:#00FF00 dotted thick;
    }
  }
}
  .g-submenu {
    position: relative;
    &-container {
      position: absolute;
      white-space: nowrap;
      z-index: 1;
        .g-submenu-container {
          top: 0;
          left: 100%;
        }
    }
  }

</style>