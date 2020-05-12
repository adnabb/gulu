<template>
  <div
    class="g-carousel"
    @mouseover="onMouseover"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchstart"
    @touchend="onTouchend"
  >
    <div class="g-carousel-items-container" ref="itemsContainer">
      <slot></slot>
    </div>
    <div class="g-carousel-subscript">
      <span>{{selectedIndex}}</span>
      <span
        v-for="n in children.length"
        :key="n-1"
        :class="['g-carousel-subscript-item', { 'active': selectedIndex === n - 1}]"
        @click="onClick(n - 1)"
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
      manual: 'click',
      startTouch: null
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
    onClick(index) {
      if (this.selectedIndex === index) return;
      if (this.autoPlay) this.stop();
      this.manual = 'click';
      this.manuallyUpdateSelected(index);
    },
    manuallyUpdateSelected(index) {
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
    onTouchstart(e) {
      const { touches } = e;
      this.startTouch = touches[0];
    },
    onTouchend(e) {
      const { clientX: x1, clientY: y1 } = this.startTouch;
      const { changedTouches } = e;
      const endTouch = changedTouches[0];
      const { clientX: x2, clientY: y2 } = endTouch;
      // const hypotenuse = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2));
      // console.log(hypotenuse);
      // console.log(Math.abs(y2-y1) * 2);
      const horizon = x1 - x2;
      if (horizon >= 0) {
        const nextIndex =
          this.selectedIndex + 1 === this.children.length
            ? 0
            : this.selectedIndex + 1;
        this.manuallyUpdateSelected(nextIndex);
      } else {
        this.manual = 'touch';
        const prevIndex =
          this.selectedIndex - 1 === -1
            ? this.children.length - 1
            : this.selectedIndex - 1;
        this.manuallyUpdateSelected(prevIndex);
      }
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
      if (this.manual === 'click') {
        this.children[this.lastIndex].reverse =
          this.selectedIndex < this.lastIndex;
        this.children[this.selectedIndex].reverse =
          this.selectedIndex < this.lastIndex;
      } else if (this.manual === 'touch') {
        this.children[this.lastIndex].reverse = true;
        this.children[this.selectedIndex].reverse = true;
      } else {
        this.children[this.lastIndex].reverse = false;
        this.children[this.selectedIndex].reverse = false;
      }
      this.manual = '';
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