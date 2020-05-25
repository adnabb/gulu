<template>
  <div class="g-menu-item" :class="{active}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluMenuItem',
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
  methods: {
    onClick(e) {
      const { updateSelected, triggerSubmenu } = this.$parent;
      const name = typeof this.name === 'string' ? [this.name] : this.name;
      updateSelected(name);
      triggerSubmenu && triggerSubmenu();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>