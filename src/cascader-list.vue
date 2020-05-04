<template>
  <div class="g-cascader-list">
    {{ level }}
    <div class="g-cascader-items">
      <div
        class="g-cascader-item"
        v-for="(item, index) in source"
        :key="`level-${level}-${index}`"
        @click="showChildren(item)"
      >{{item.name}}</div>
    </div>
    <gulu-cascader-list
      v-if="childrenList.length"
      class="g-cascader-selected-children"
      :source="childrenList"
      :level="level+1"
      :selected="selected"
      @update:selected="updateSelected"
    ></gulu-cascader-list>
  </div>
</template>

<script>
export default {
  name: 'GuluCascaderList',
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
      const copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit('update:selected', copy);
    },
    updateSelected(selected) {
      this.$emit('update:selected', selected);
    }
  },
};
</script>

<style lang="scss" scoped>
.g-cascader {
  &-list {
    display: flex;
  }
  &-item {
  }
  &-selected-children {
    border: 1px solid green;
  }
}
</style>