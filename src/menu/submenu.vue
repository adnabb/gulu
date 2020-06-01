<template>
  <div class="g-submenu" v-click-outside="hide">
    <div class="g-submenu-title" :class="[{active}, {visible}]" @click="triggerSubmenu">
      <slot name="name"></slot>
      <span class="g-submenu-icon-container">
        <g-icon class="dropdown-icon" icon="arrow-down"></g-icon>
      </span>
    </div>
    <div class="g-submenu-list-container" v-if="visible">
      <slot></slot>
    </div>
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
    hide() {
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

<style lang="scss" scoped>
@import '../styles/variables';
.g-submenu {
  position: relative;
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
  .g-menu-item.active, .g-submenu .g-submenu-title.active {
    color: $font-color;
    &:after {
      content: unset;
    }
  }
  .g-submenu {
    .dropdown-icon {
      transform: rotate(-90deg);
      vertical-align: -2px;
    }
    .g-submenu-title.visible {
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
}
</style>