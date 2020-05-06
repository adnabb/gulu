<template>
  <div class="g-cascader" ref="cascader">
    <div class="g-cascader-trigger" @click="triggerList">
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
      @hide="hide"
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
  mounted() {
    this.initSelected();
  },
  methods: {
    triggerList() {
      if (this.visible) {
        this.hide();
      } else {
        this.show();
      }
    },
    autoHideList(e) {
      if (!this.$refs.cascader.contains(e.target)) this.hide();
    },
    initSelected() {
      if (!this.selected.length) return;
      const selected = this.findSelectedItemByValue();
      this.updateSelected(selected);
    },
    findSelectedItemByValue() {
      const selected = [];
      this.selected.forEach((item, index) => {
        const value = item.value || item;
        if (index === 0) {
          selected.push(this.source.filter(item => item.value === value)[0]);
        } else {
          selected.push(
            selected[index - 1].children.filter(item => item.value === value)[0]
          );
        }
      });
      return selected;
    },
    updateSelected(selected) {
      this.$emit('update:selected', selected);
    },
    show() {
      this.visible = true;
      document.addEventListener('click', this.autoHideList);
    },
    hide() {
      this.visible = false;
      document.removeEventListener('click', this.autoHideList);
    }
  }
};
</script>

<style lang="scss">
// 删除scope，否则input cursor的样式无法覆盖
@import "./styles/variables";

.g-cascader {
  position: relative;
  display: inline-block;
  &-trigger {
    input {
      cursor: pointer;
    }
  }
  &-list-container {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    margin-top: .5em;
    background: $cascader-list-bg;
    border-radius: $border-radius;
    @extend %box-shadow;
  }
}
</style>