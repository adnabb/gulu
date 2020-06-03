<template>
  <div class="g-submenu" v-click-outside="hide">
    <div class="g-submenu-title" :class="[{active}, {visible}, {default: !vertical}, {vertical}]" @click="triggerSubmenu">
      <slot name="name"></slot>
      <span class="g-submenu-icon-container">
        <g-icon class="dropdown-icon" icon="arrow-down"></g-icon>
      </span>
    </div>
    <transition :name="transitionName">
      <div class="g-submenu-list-container" :style="indentStyle" :class="{vertical}" v-if="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import GIcon from '../icon';
import clickOutside from '../click-outside';
export default {
  name: 'GuluSubmenu',
  components: {
    GIcon
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ['root'],
  computed: {
    active() {
      return this.root.selected.indexOf(this.name) >= 0;
    },
    vertical() {
      return this.root.vertical;
    },
    transitionName() {
      if (this.vertical) return 'slide-bottom-fade';
      return 'slide-top-fade';
    },
    indentStyle() {
      if (!this.vertical) return;
      let parent = this.$parent;
      let parentName = parent.$options.name;
      let indent = 1;
      while (parentName !== 'GuluMenu') {
        indent += 1;
        parent = parent.$parent;
        parentName = parent.$options.name;
      }
      return `text-indent: ${indent}em`;
    }
  },
  data() {
    return {
      visible: false,
      _selected: []
    };
  },
  directives: {
    clickOutside
  },
  methods: {
    triggerSubmenu() {
      this.visible = !this.visible;
    },
    triggerSubmenuMiddleware() {
      if (this.vertical) return;
      this.triggerSubmenu();
    },
    hide() {
      if (this.vertical) return;
      this.visible = false;
    },
    updateSelected(name) {
      this.packageSelected(name);
      this.$parent.updateSelected(this._selected);
    },
    packageSelected(name) {
      this._selected = [this.name, ...name];
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';
.g-submenu {
  position: relative;
  .slide-bottom-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-bottom-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-bottom-fade-enter, .slide-bottom-fade-leave-to {
    opacity: .5;
    transform: translateX(-4px);
  }
  .slide-top-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-top-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-top-fade-enter, .slide-top-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
  &-title.visible {
    .dropdown-icon {
      transform: rotate(-180deg);
    }
  }
  &-icon-container {
    margin-left: .5em;
    margin-right: -.6em;
    display: inline-block;
    .dropdown-icon {
      transition: all 400ms;
    }
  }
  &-list-container {
    @extend %box-shadow;
    margin-top: 4px;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
  }
  // submenu list 下面的菜单被选中不允许展示下划线
  .g-menu-item.active, .g-submenu .g-submenu-title.active {
    color: $font-color;
    &:after {
      content: unset;
    }
  }
  .g-submenu {
    &.default .dropdown-icon {
      transform: rotate(-90deg);
      vertical-align: -2px;
    }
    &.default .g-submenu-title.visible {
      .dropdown-icon {
        transform: rotate(-270deg);
      }
    }
    .g-submenu-list-container {
      margin-top: unset;
      margin-left: 4px;
      top: 0;
      left: 100%;
    }
  }
  .g-submenu-list-container.vertical {
    position: relative;
    box-shadow: none;
    margin: 0;
    left: unset;
    top: unset;
  }
}
</style>