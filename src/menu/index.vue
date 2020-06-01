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
    this.updateChildren && this.updateChildren();
  },
  methods: {
    updateSelected(name) {
      this.$emit('update:selected', name);
    }
  },
  watch: {
    selected(newValue, oldValue) {
      this.updateChildren && this.updateChildren();
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
$active-height: 2px;
.g-menu {
  display: flex;
  border-bottom: 1px solid $border-color;
  padding: 0 4em;
  &-item, .g-submenu-title {
    padding: 1em 2em;
    background: #fff;
    cursor: pointer;
    color: $gray;
    position: relative;
    user-select: none;
    &.active {
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: $active-height;
        background: $border-active-color;
        top: calc(100% - #{$active-height});
        left: 0;
      }
      color: $font-color;
    }
    &:hover {
      color: $font-color;
    }
  }
}
</style>