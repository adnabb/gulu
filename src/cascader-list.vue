<template>
  <div class="g-cascader-list">
    <div class="g-cascader-item-container">
      <div
        v-for="(item, index) in source"
        class="g-cascader-item"
        :class="{'active': selected && selected[level] && selected[level].value === item.value, 'disabled': item.disabled}"
        :key="`level-${level}-${index}`"
        @click="showChildren(item)"
      >
        <span>{{item.name}}</span>
        <g-icon class="g-cascader-item-right-arrow" v-if="item.children" icon="arrow-right"></g-icon>
      </div>
    </div>
    <gulu-cascader-list
      v-if="childrenList.length"
      class="g-cascader-selected-children"
      :source="childrenList"
      :level="level+1"
      :selected="selected"
      @update:selected="updateSelected"
      @hide="hide"
    ></gulu-cascader-list>
  </div>
</template>

<script>
import Icon from './icon';

export default {
  name: 'GuluCascaderList',
  components: {
    'g-icon': Icon
  },
  props: {
    source: {
      type: Array
    },
    level: {
      type: Number,
      default: 0
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    childrenList() {
      const currentItem = this.selected[this.level];
      if (currentItem && currentItem.children) {
        return currentItem.children;
      }
      return [];
    }
  },
  methods: {
    showChildren(item) {
      if (item.disabled) return;
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit('update:selected', copy);
      if (!item.children || !item.children.length) this.$emit('hide');
    },
    updateSelected(selected) {
      this.$emit('update:selected', selected);
    },
    hide() {
      this.$emit('hide');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/variables";

.g-cascader {
  &-list {
    display: inline-flex;
    max-height: 200px;
    border: 1px solid $border-color;

    .g-cascader-list {
      border: none;
      border-left: 1px solid $border-color;
    }
  }
  &-item {
    padding: 0.5em 1em;
    min-width: 80px;
    cursor: pointer;
    &.active {
      color: $font-active-color;
      .g-cascader-item-right-arrow {
        color: $font-active-color;
      }
    }
    &.disabled {
      color: $font-disabled-color;
      cursor: not-allowed;
      .g-cascader-item-right-arrow {
        color: $font-disabled-color;
      }
    }
    &:hover {
      background: $collapse-item-hover-bg;
    }
    &-right-arrow {
      font-size: 10px;
      vertical-align: -1px;
      color: $collapse-item-arrow-color;
    }
    &-container {
      overflow: auto;
    }
  }
}
</style>