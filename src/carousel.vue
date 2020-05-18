<template>
  <div class="g-carousel" @mouseover="onMouseover" @mouseleave="onMouseLeave">
    <div
      class="g-carousel-items-container"
      ref="itemsContainer"
      @touchstart="onTouchstart"
      @touchend="onTouchend"
    >
      <slot></slot>
    </div>
    <div class="g-carousel-subscript">
      <span
        v-for="n in children.length"
        :key="n-1"
        :class="['g-carousel-subscript-item', { 'active': selectedIndex === n - 1}]"
        @click="onClick(n - 1)"
      >{{ n - 1 }}</span>
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
      lastSelectedIndex: -1,
      children: [],
      startTouch: null
    };
  },
  computed: {
    names() {
      return this.children.map(item => item.name);
    },
    selectedIndex() {
      return this.names.indexOf(this.selected);
    },
    lastIndex() {
      return this.children.length - 1;
    }
  },
  mounted() {
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
    onClick(index) {
      if (this.selectedIndex === index) return;
      if (this.autoPlay) this.stop();
      this.manuallyUpdateSelected(index);
    },
    manuallyUpdateSelected(index) {
      this.lastSelectedIndex = this.selectedIndex;
      const selected = this.names[index];
      this.$emit('update:selected', selected);
    },
    onMouseover() {
      if (this.autoPlay) this.stop();
    },
    onMouseLeave() {
      if (this.autoPlay) this.autoUpdateSelected();
    },
    onTouchstart(e) {
      if (this.autoPlay) this.stop();
      const { touches } = e;
      this.startTouch = touches[0];
    },
    onTouchend(e) {
      // 用户操作优化（向上滚并是要往下查看）
      const { clientX: x1, clientY: y1 } = this.startTouch;
      const { clientX: x2, clientY: y2 } = e.changedTouches[0];
      const hypotenuse = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      const deltaY = Math.abs(y2 - y1);
      const sin = hypotenuse / deltaY;
      const horizon = x1 - x2;
      if (sin >= 2) {
        if (horizon >= 0) {
          const nextIndex = this.getNextIndex();
          this.manuallyUpdateSelected(nextIndex);
        } else {
          const prevIndex = this.getPrevIndex();
          this.manuallyUpdateSelected(prevIndex);
        }
      }
    },
    getNextIndex() {
      return this.selectedIndex + 1 === this.children.length
        ? 0
        : this.selectedIndex + 1;
    },
    getPrevIndex() {
      return this.selectedIndex - 1 === -1
        ? this.lastIndex
        : this.selectedIndex - 1;
    },
    autoUpdateSelected() {
      if (this.player) return;
      const run = () => {
        this.player = setTimeout(() => {
          const nextIndex = this.getNextIndex();
          this.$emit('update:selected', this.children[nextIndex].name);
          run();
        }, 3000);
      };
      run();
    },
    fromFirstToEnd() {
      return (
        this.lastSelectedIndex === 0 && this.selectedIndex === this.lastIndex
      );
    },
    fromBigToSmall() {
      return this.lastSelectedIndex > this.selectedIndex;
    },
    fromEndToFirst() {
      return (
        this.lastSelectedIndex === this.lastIndex && this.selectedIndex === 0
      );
    },
    checkTransitionsDirection() {
      const condition =
        this.fromFirstToEnd() ||
        (this.fromBigToSmall() && !this.fromEndToFirst());
      this.children[this.lastSelectedIndex].reverse = condition;
      this.children[this.selectedIndex].reverse = condition;
    },
    transitions() {
      if (this.lastSelectedIndex >= 0)
        this.children[this.lastSelectedIndex].triggerItem();
      this.children[this.selectedIndex].triggerItem();
      this.lastSelectedIndex = this.selectedIndex;
    },
    autoChangeItem() {
      if (this.lastSelectedIndex >= 0) this.checkTransitionsDirection();
      this.$nextTick(() => {
        this.transitions();
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