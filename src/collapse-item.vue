<template>
  <div class="g-collpase-item">
    <div class="g-collpase-item-header" @click="triggerContent">{{ name }}</div>
    <div class="g-collpase-item-content" :class="{hidden}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCollapseItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('init:selected', (value) => {
      this.hidden = !((typeof value === 'string' && value === this.name) || value.indexOf(this.name) >= 0) 
    });
  },
  data() {
    return {
      hidden: true
    };
  },
  methods: {
    triggerContent() {
      this.hidden = !this.hidden;
      this.eventBus.$emit('change:selected', {
        name: this.name,
        action: this.hidden ? 'remove' : 'add'
      });
    }
  },
  destroyed () {
    this.eventBus.$off('init:selected');
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.g-collpase-item{
  border: 1px solid $border-color;
  &-header {
    padding: .5em 1em;
    background: $collapse-item-bg;
    cursor: pointer;
  }
  &-content {
    padding: 1em;
    border-top: 1px solid $border-color;
    &.hidden {
      display: none;
    }
  }
}
</style>