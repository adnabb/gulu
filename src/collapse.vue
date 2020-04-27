<template>
  <div class="g-collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'GuluCollapse',
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String | Array
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  data() {
    return {
      eventBus: new Vue(),
      selected_: []
    };
  },
  mounted() {
    this.eventBus.$on('change:selected', item => {
      if (item.action === 'remove') {
        this.removeItem(item);
      } else {
        this.addItem(item);
      }
      this.$emit('update:selected', this.selected_);
    });
    this.initSelect();
  },
  methods: {
    initSelect() {
      if (this.single && Array.isArray(this.selected)) {
        console.error('single模式下的selected应该为string类型');
      }
      if (this.selected) {
        this.eventBus.$emit('init:selected', this.selected);
      }
    },
    removeItem(item) {
      if (this.single) {
        this.selected_ = '';
        this.eventBus.$emit('init:selected', this.selected_);
      } else {
        const index = this.selected_.indexOf(item.name);
        this.selected_.splice(index, 1);
      }
    },
    addItem(item) {
      if (this.single) {
        this.selected_ = item.name;
        this.eventBus.$emit('init:selected', this.selected_);
      } else {
        this.selected_.push(item.name);
      }
    }
  },
  destroyed() {
    this.eventBus.$off('change:selected');
  }
};
</script>

<style lang="scss" scope>
@import 'styles/variables.scss';
.g-collpase{
  &-item:not(:first-child) {
    margin-top: -1px;
  }
  &-item:first-child {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
  &-item:last-child {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }
}
</style>