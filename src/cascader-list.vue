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
        <span class="g-cascader-item-name">{{item.name}}</span>
        <g-icon :class="iconClass" v-if="item.children || item.isLeaf === false" :icon="iconStyle"></g-icon>
      </div>
    </div>
    <gulu-cascader-list
      v-if="childrenList.length"
      class="g-cascader-selected-children"
      :source="childrenList"
      :level="level+1"
      :selected="selected"
      :loadData="loadData"
      @update:selected="updateSelected"
      @update:source="updateSource"
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
    },
    loadData: {
      type: Function
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
    },
    iconStyle() {
      return this.loadData
        ? this.selected.children
          ? 'loading'
          : 'arrow-right'
        : 'arrow-right';
    },
    iconClass() {
      return [
        'g-cascader-item-right-arrow',
        { 'g-loading': this.iconStyle === 'loading' }
      ];
    }
  },
  methods: {
    showChildren(item) {
      // children是根据this.selected[this.level]是否有children进行加载的
      if (this.loadData) {
        this.showLazyLoadChildren(item);
      } else {
        if (item.disabled) return;
        this.packageAndUpdateSelected(item);
        if (!item.children || !item.children.length) this.hide();
      }
    },
    showLazyLoadChildren(item) {
      if (!item.isLeaf) {
        this.lazyLoadData(item);
      } else {
        this.packageAndUpdateSelected(item);
        if (item.isLeaf) this.hide();
      }
    },
    lazyLoadData(item) {
      this.loadData(item.id).then(res => {
        this.$set(item, 'children', res);
        this.packageAndUpdateSelected(item);
        this.packageAndUpdateSource(item);
        if (item.isLeaf) this.hide();
      });
    },
    packageAndUpdateSource(item) {
      const copy = JSON.parse(JSON.stringify(this.source));
      let found = this.findItemInSource(item.id, copy);
      if (found) {
        found = item;
        this.updateSource(copy);
      }
    },
    findItemInSource(id, source) {
      for (let i = 0; i < source.length; i++) {
        const currentItem = source[i];
        if (currentItem.id === id) {
          return currentItem;
        } else if (currentItem.children) {
          return this.findItemInSource(id, currentItem.children);
        }
      }
      return null;
    },
    packageAndUpdateSelected(item) {
      const selected = JSON.parse(JSON.stringify(this.selected));
      selected[this.level] = item;
      selected.splice(this.level + 1);
      this.updateSelected(selected);
    },
    updateSelected(selected) {
      this.$emit('update:selected', selected);
    },
    updateSource(source) {
      this.$emit('update:source', source);
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
    display: flex;
    height: 200px;
    border: 1px solid $border-color;

    .g-cascader-list {
      border: none;
      border-left: 1px solid $border-color;
    }
  }
  &-item {
    padding: 0.5em 2em 0.5em 1em;
    position: relative;
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
      color: $collapse-item-arrow-color;
      position: absolute;
      height: 100%;
      top: 1px;
      right: 1em;
    }
    &-container {
      overflow-y: auto;
      min-width: 100px;
      // 设置后长度不会换行
      width: max-content;
    }
  }
}
</style>