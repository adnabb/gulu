<template>
  <span class="g-popover-container">
    <div class="g-popover" :class="[`popover-position-${position}`]" ref="popover" v-show="show">
      <slot name="content"></slot>
    </div>
    <span class="g-popover-trigger" ref="reference" @click.stop="triggerPopover">
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
  },
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
      const button = this.$refs.reference;
      const { popover } = this.$refs;
      const { height, width, top, left } = button.getBoundingClientRect();
      const { height: popoverHeight, width: popoverWidth } = popover.getBoundingClientRect();
      const offset = 10;

      if (this.position === 'top') {
        popover.style.top = `${top - popoverHeight - offset}px`;
        popover.style.left = `${left}px`;
      } else if (this.position === 'bottom') {
        popover.style.top = `${top + popoverHeight + offset}px`;
        popover.style.left = `${left}px`;
      } else if (this.position === 'left') {
        popover.style.top = `${top}px`;
        popover.style.left = `${left - popoverWidth - offset}px`;
      } else if (this.position === 'right') {
        popover.style.top = `${top}px`;
        popover.style.left = `${left + width + offset}px`;
      }
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
  max-width: 300px;

  &::before, &::after {
    content: '';
    border: 5px solid;
    width: 0;
    height: 0;
    position: absolute;
    border-color: rgba($color: $popover-bg, $alpha: 0)
  }
  
  &.popover-position-top {

    &::before, &::after {
      top: 100%;
      border-bottom: none;
    }

    &::before {
      border-top-color: $border-color;
    }

    &::after {
      margin-top: -1.4px;
      border-top-color: $popover-bg;
    }
  }

  &.popover-position-bottom {
    &::before, &::after {
      bottom: 100%;
      border-top: none;
      border-bottom-color: $border-color;
    }

    &::after {
      border-bottom-color: $popover-bg;
      margin-bottom: -1.4px;
    }
  }

  &.popover-position-left {
    &::before, &::after {
      left: 100%;
      top: .5em;
      border-right: none;
      border-left-color: $border-color;
    }

    &::after {
      border-left-color: $popover-bg;
      margin-left: -1.4px;
    }
  }

  &.popover-position-right {
    &::before, &::after {
      right: 100%;
      top: .5em;
      border-left: none;
      border-right-color: $border-color;
    }

    &::after {
      border-right-color: $popover-bg;
      margin-right: -1.4px;
    }
  }

  &-trigger {
    display: inline-block;
  }
}
</style>