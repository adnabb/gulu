<template>
  <div class="g-toast" :class="[`g-toast-${position}`]">
    <span v-if="htmlSuport" class="g-toast-text" v-html="text"></span>
    <span v-else class="g-toast-text">
      <slot></slot>
    </span>
    <span v-if="customCloseText" class="custom-close" @click="close">{{ customCloseText }}</span>
  </div>
</template>

<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: { type: Boolean, default: true },
    duration: { type: Number, default: 2 },
    position: {
      type: String,
      default: "top",
      validator: value => ["top", "bottom", "center"].indexOf(value) !== -1
    },
    customCloseText: { type: String },
    text: { type: String },
    htmlSuport: { type: Boolean, default: false }
  },
  methods: {
    close() {
      this.closeToast(this);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './styles/variables';

.g-toast {
  display: flex;
  position: absolute;
  box-shadow: $box-shadow; background-color: #fff;
  padding: 0 $toast-padding-width 0 $toast-padding-width;
  border-radius: $border-radius;

  .g-toast-text, .custom-close { display: inline-block; padding: $toast-padding-height 0; }
    
  .custom-close {
    padding: $toast-padding-height 0 $toast-padding-height $toast-padding-width;
    margin-left: $toast-padding-width;
    border-left: 1px solid $border-color;
    cursor: pointer;
    min-width: 2em;
    display: flex;
    align-items: center;
  }

  &.g-toast-top { top: 2%; left: 50%; transform: translateX(-50%); }

  &.g-toast-bottom { bottom: 2%; left: 50%; transform: translateX(-50%); }

  &.g-toast-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
}
</style>