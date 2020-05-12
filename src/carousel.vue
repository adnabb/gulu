<template>
    <div class="g-carousel" @mouseover="onMouseover" @mouseleave="onMouseLeave">
    <div class="g-carousel-items-container" ref="itemsContainer">
      <slot></slot>
    </div>
    <div class="g-carousel-subscript">
      <span>{{selectedIndex}}</span>
      <span
        v-for="n in children.length"
        :key="n-1"
        :class="['g-carousel-subscript-item', { 'active': selectedIndex === n - 1}]"
        @click="selectedByIndex(n - 1)"
      >{{ n }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCarousel',
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      player: null,
      lastIndex: -1,
      children: [],
      manual: true,
    };
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected);
    },
    names() {
      return this.children.map(item => item.name);
    }
  },
  mounted() {
    // TODO:第一个默认不需要动画
    this.initSelected();
    if (this.autoPlay) this.autoUpdateSelected();
  },
  updated() {
    this.autoChangeItem();
  },
  methods: {
    initSelected() {
      this.children = this.$children;
      if (!this.selected) this.$emit('update:selected', this.children[0].name);
    },
    selectedByIndex(index) {
      if (this.selectedIndex === index) return;
      if (this.autoPlay) this.stop();
      this.manual = true;
      this.lastIndex = this.selectedIndex;
      const selected = this.names[index];
      this.$emit('update:selected', selected);
    },
    onMouseover() {
      if (this.autoPlay) this.stop();
    },
    onMouseLeave() {
      if (this.autoPlay) this.autoUpdateSelected();
    },
    autoUpdateSelected() {
      if (this.player) return;
      const run = () => {
        this.player = setTimeout(() => {
          const nextIndex =
            this.selectedIndex + 1 === this.children.length
              ? 0
              : this.selectedIndex + 1;
          this.$emit('update:selected', this.children[nextIndex].name);
          run();
        }, 3000);
      };
      run();
    },
    checkChangingDirection() {
      if (this.manual) {
        this.children[this.lastIndex].reverse = this.selectedIndex < this.lastIndex;
        this.children[this.selectedIndex].reverse = this.selectedIndex < this.lastIndex;
        this.manual = false;
      } else {
        this.children[this.lastIndex].reverse = false;
        this.children[this.selectedIndex].reverse = false;
      }
    },
    autoChangeItem() {
      if (this.lastIndex >= 0) this.checkChangingDirection();
      this.$nextTick(() => {
        if (this.lastIndex >= 0) this.children[this.lastIndex].triggerItem();
        this.children[this.selectedIndex].triggerItem();
        this.lastIndex = this.selectedIndex;
        if (this.autoPlay) this.autoUpdateSelected();
      });
    },
    stop() {
      clearTimeout(this.player);
      this.player = null;
    }
  }
};
</script>

<style lang="scss" scoped>
.g-carousel {
  width: 400px;
  height: 200px;
  background:palegreen;
  display: inline-block;
  &-items-container {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    overflow: hidden;
    background: orange;
    position: relative;
  }
  &-subscript {
    margin-top: 10px;
    text-align: center;
    &-item {
      width: 20px;
      height: 20px;
      display: inline-block;
      border-radius: 50%;
      border: 1px solid;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background: palegoldenrod;
        &:hover {
          cursor: default;
        }
      }
    }
    &-item:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>