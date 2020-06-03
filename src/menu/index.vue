<template>
  <div class="g-menu" :class="{vertical}">
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
    if (!this.selected) this.initSelect()
  },
  methods: {
    initSelect() {
      if (!this.$children.length) {
        console.warn('请添加菜单选项');
        return;
      }
      this.updateSelected(this.$children[0].name);
    },
    updateSelected(name) {
      this.$emit('update:selected', name);
    }
  },
};
</script>

<style lang="scss">
@import '../styles/variables.scss';
$active-length: 2px;
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
        height: $active-length;
        background: $border-active-color;
        top: calc(100% - #{$active-length});
        left: 0;
      }
      color: $font-color;
    }
    &:hover {
      color: $font-color;
    }
  }
  &.vertical {
    flex-direction: column;
    border-bottom: none;
    border-right: 1px solid $border-color;
    width: 200px;
    padding: 0;
    .g-submenu-icon-container {
      right: 2em;
      position: absolute;
    }
    .g-submenu-title.active, .g-submenu .g-submenu-title.active {
      color: $font-active-color;
      &:after  {
        content: unset;
      }
    }
    .g-menu-item, .g-submenu .g-menu-item {
      &.active {
        color: $font-active-color;
        background: $menu-active-bg;
        &:after {
          content: '';
          height: 100%;
          width: $active-length;
          top: 0;
          left: calc(100% - #{$active-length});
        }
      }
    }
  }
}
</style>