<template>
  <div :class="['g-cascader-list', {'loading': propLoading}]">
    <template v-if="propLoading">
      <g-icon icon="loading" class="g-loading"></g-icon>
    </template>
    <template v-else>
      <div class="g-cascader-item-container">
        <div
          v-for="(item, index) in source"
          class="g-cascader-item"
          :class="getItemClasses(item)"
          :key="`level-${level}-${index}`"
          @click="showChildren(item)"
        >
          <span class="g-cascader-item-name">{{item.name}}</span>
          <template v-if="loadData">
            <g-icon
              :class="getIconClasses(item.value)"
              v-if="!item.isLeaf"
              :icon="getIconStyle(item.value)"
            ></g-icon>
          </template>
          <template v-else>
            <g-icon
              class="g-cascader-item-right-arrow"
              v-if="item.children && item.children.length > 0"
              icon="arrow-right"
            ></g-icon>
          </template>
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
    </template>
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
    },
    propLoading: {
      type: Boolean
    }
  },
  data() {
    return {
      isLoading: false
    };
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
    getItemClasses(item) {
      return {
        active:
          this.selected && this.selected[this.level] && this.selected[this.level].value === item.value,
        disabled: item.disabled
      };
    },
    getIconStyle(value) {
      return this.isLoading &&
        this.selected[this.level] &&
        this.selected[this.level].value &&
        this.selected[this.level].value === value
        ? 'loading'
        : 'arrow-right';
    },
    getIconClasses(value) {
      return ['g-cascader-item-right-arrow', `g-${this.getIconStyle(value)}`];
    },
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
      if (!item.isLeaf && !item.children) {
        this.lazyLoadData(item);
      } else {
        this.packageAndUpdateSelected(item);
        if (item.isLeaf) this.hide();
      }
    },
    lazyLoadData(item) {
      this.isLoading = true;
      this.packageAndUpdateSelected(item);
      this.loadData(item.id)
        .then(res => {
          this.isLoading = false;
          this.$set(item, 'children', res);
          this.packageAndUpdateSource(item);
          if (item.isLeaf) this.hide();
        })
        .catch(err => {
          console.error('err', err);
          this.isLoading = false;
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
      // TODO:
      // 期待的效果：点击过的子元素不需要再load加载
      // 该方法的问题: vue不推荐直接修改props传过来的属性
      // const selected = this.selected;
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
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/variables";

.g-cascader {
  &-list {
    display: flex;
    height: 200px;
    border: 1px solid $border-color;

    &.loading {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
    }

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
      overflow-x: hidden;
      min-width: 100px;
      // 设置后长度不会换行
      width: max-content;
    }
  }
}
</style>