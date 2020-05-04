<template>
  <div class="g-cascader">
    <div class="g-cascader-trigger" @click="visible = !visible">
      <!-- TODO:可以自定义trigger -->
      <!-- <slot></slot> -->
      <g-input readonly :value="selectedString"></g-input>
    </div>
    <g-cascader-list
      v-if="visible"
      :source="source"
      :selected="selected"
      @update:selected="updateSelected"
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
      return this.selected.map((item) => item.name).join('/');
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    updateSelected(selected) {
      this.$emit('update:selected', selected);
    }
  },
  watch: {
    selected(newValue, oldValue) {
      console.log(1, 'new', newValue);
    }
  },
};
</script>

<style lang="scss" scoped>
.g-cascader {
  &-trigger {
    cursor: pointer;
  }
  &-list {
    border: 1px solid red;
  }
}
</style>