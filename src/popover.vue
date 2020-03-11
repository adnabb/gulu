<template>
  <span class="g-popover-container">
    <div class="g-popover" ref="popover" v-show="show">
      <slot name="content"></slot>
    </div>
    <span ref="reference" @click.stop="triggerPopover">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: "GuluPopover",
  mounted() {
    this.movePopoverToBody();
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    triggerPopover() {
      if (this.show) {
        this.closePopover();
      } else {
        this.showPopover();
      }
    },
    showPopover() {
      this.show = true;
      this.positionPopover();
      document.addEventListener('click', this.clickEvent);
    },
    closePopover() {
      this.show = false;
      document.removeEventListener('click', this.clickEvent);
    },
    clickEvent(e) {
      if (this.$refs.popover.contains(e.target)) return;

      this.closePopover();
    },
    positionPopover() {
      const button = this.$refs.reference;
      const { popover } = this.$refs;
      const { height, top, left } = button.getBoundingClientRect();
      popover.style.top = `${top - 10}px`; // 往上面多移动10px
      popover.style.left = `${left}px`;
    },
    movePopoverToBody() {
      const popoverDom = this.$refs.popover;
      document.body.appendChild(popoverDom);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.g-popover {
  &-container {
    display: inline-block;
  }

  padding: .5em 1em;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  position: absolute;
  background: $popover-bg;
  transform: translateY(-100%);
  max-width: 300px;

  &::before, &::after {
    content: '';
    border: 5px solid;
    border-bottom: none;
    width: 0;
    height: 0;
    position: absolute;
    top: 100%;
  }

  &::before {
    border-color: $border-color transparent transparent transparent;
  }

  &::after {
    border-color: $popover-bg transparent transparent transparent;
    margin-top: -1.4px;
  }
}
</style>