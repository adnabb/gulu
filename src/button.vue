<template>
  <button class="g-button" :type="type" @click="$emit('click')">
    <g-icon v-if="loading" name="#g-loading" class="g-loading" :class="`icon-position-${iconPosition}`"></g-icon>
    <g-icon v-if="icon && !loading" :name="icon" :class="`icon-position-${iconPosition}`"></g-icon>
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Icon from './icon';

export default {
  props: {
    icon: {
      type: String
    },
    iconPosition: {
      default: "left",
      type: String,
      validator: function(value) {
        return ["left", "right"].indexOf(value.toLowerCase()) !== -1;
      }
    },
    loading: {
      default: false,
      type: Boolean,
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  components: {
    'g-icon': Icon,
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.g-button {
  display: inline-flex;
  border: 1px solid $border-color; border-radius: $border-radius;
  height: $common-height; line-height: 1;
  padding: 0 1em; vertical-align: middle;
  background-color: $button-bg; cursor: pointer;

  &:focus,
  &:hover {
    background-color: $button-active-bg;
    color: $font-hover-color;
    border-color: $border-hover-color;
    outline: none;
  }

  &:active {
    border-color: $border-active-color; color: $font-active-color;
  }
  
  .button-text { display: inline-flex; }

  .icon-position-left {
    order: 1; margin-right: 0.1em;

    + .button-text { order: 2; }
  }

  .icon-position-right {
    order: 2; margin-left: 0.1em;

    + .button-text { order: 1; }
  }
}
</style>