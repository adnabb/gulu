<template>
  <span class="g-popover-container">
    <div class="g-popover" :class="[`popover-position-${position}`]" ref="popover" v-show="show">
      <slot name="content"></slot>
    </div>
    <span class="g-popover-trigger" ref="reference">
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: "GuluPopover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0;
      },
    }
  },
  mounted() {
    this.initTriggerEvent();
    this.movePopoverToBody();
  },
  data() {
    return {
      show: false,
      duration: 1000,
    };
  },
  methods: {
    initTriggerEvent() {
      const { reference } = this.$refs;

      if (this.trigger === 'click') {
        reference.addEventListener('click', this.triggerPopover);
      } else if (this.trigger === 'hover') {
        reference.addEventListener('mouseover', this.triggerPopover);
        reference.addEventListener('mouseout', this.triggerPopover);
      }
    },
    triggerPopover(e) {
      e.stopPropagation();

      if (this.show) {
        setTimeout(this.closePopover, this.duration);
      } else {
        this.showPopover();
      }
    },
    showPopover() {
      this.show = true;
      this.$nextTick(() => this.positionPopover());
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
      const { popover, reference } = this.$refs;
      const { height, width, top, left } = reference.getBoundingClientRect();
      const { height: popoverHeight, width: popoverWidth } = popover.getBoundingClientRect();
      const { scrollY, scrollX } = window;
      const offset = 10;
      const positionMap = {
        top: { top: top - popoverHeight - offset, left},
        bottom: { top: top + popoverHeight + offset, left},
        left: { top, left: left - popoverWidth - offset},
        right: { top, left: left + width + offset},
      };
      popover.style.top = `${positionMap[this.position].top + scrollY}px`;
      popover.style.left = `${positionMap[this.position].left + scrollX}px`;
    },
    movePopoverToBody() {
      const popoverDom = this.$refs.popover;
      document.body.appendChild(popoverDom);
    },
    removeTriggerEvent() {
      const { reference } = this.$refs;

      if (this.trigger === 'click') {
        reference.removeEventListener('click', this.triggerPopover);
      } else if (this.trigger === 'hover') {
        reference.removeEventListener('mouseover', this.triggerPopover);
        reference.removeEventListener('mouseout', this.triggerPopover);
      }
    }
  },
  destroyed () {
    this.removeTriggerEvent();
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
  max-width: 300px;

  &::before, &::after {
    content: '';
    border: 5px solid;
    width: 0;
    height: 0;
    position: absolute;
    border-color: rgba($color: $popover-bg, $alpha: 0)
  }

  @each $position in top, bottom, left, right {
    &.popover-position-#{$position} {
      &::before, &::after {
        #{$position}: 100%;

        @if #{$position} == top { border-bottom: none; }
        @if #{$position} == bottom { border-top: none; }
        @if #{$position} == left { top: .5em; border-right: none; }
        @if #{$position} == right { top: .5em; border-left: none;}
      }

      &::before {
        border-#{$position}-color: $border-color;
      }

      &::after {
        margin-#{$position}: -1.4px;
        border-#{$position}-color: $popover-bg;
      }
    }
  }

  &-trigger {
    display: inline-block;
  }
}
</style>