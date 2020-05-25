<template>
  <div class="g-submenu" v-click-outside="hide">
    <div class="g-submenu-title" :class="[{active}, {visible}]" @click="triggerSubmenu">
      <slot name="name"></slot>
    </div>
    <div class="g-submenu-container" v-if="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import clickOutside from '../click-outside';
export default {
  name: 'GuluSubmenu',
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
.g-submenu-title.visible {
  background: chartreuse;
}
</style>