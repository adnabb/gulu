<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger" @click="visible = !visible">
      <!-- TODO:可以自定义trigger -->
      <!-- <slot></slot> -->
      <g-input readonly :value="selectedString"></g-input>
    </div>
    <g-cascader-list
      class="g-cascader-list-container"
      v-if="visible"
      :source="source"
      :selected="selected"
      @update:selected="updateSelected"
      @hide="hideList"
    ></g-cascader-list>
  </div>
</template>

<script>
import Input from './input';
import CascaderList from './cascader-list';
export default {
  name: 'GuluCascader',
  components: {
    'g-input': Input,
    'g-cascader-list': CascaderList
  },
  props: {
    source: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedString() {
      return this.selected.map(item => item.name).join(' / ');
    }
  },
  data() {
    return {
      visible: false
    };
  },
  mounted () {
  },
  methods: {
    updateSelected(selected) {
      this.$emit('update:selected', selected);
    },
    hideList() {
      this.visible = false;
    }
  },
};
</script>

<style lang="scss">
// 删除scope，否则input cursor的样式无法覆盖
@import "./styles/variables";

.g-cascader {
  position: relative;
  &-trigger {
    display: inline-block;
    input {
      cursor: pointer;
    }
  }
  &-list-container {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: .5em;
    background: $cascader-list-bg;
    border-radius: $border-radius;
  }
}
</style>