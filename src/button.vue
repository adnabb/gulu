<template>
  <button class="g-button">
    <g-icon :icon="icon" :class="`icon-position-${iconPosition}`"></g-icon>
    <span class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props:{
    icon: {
      type: String,
    },
    iconPosition: {
      default: 'left',
      type: String,
    }
  }
};
</script>

<style lang="scss" scoped>
.g-button {
  display: inline-flex;
  background-color: var(--button-bg);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  height: var(--button-height);
  line-height: 1;
  padding: 0 1em;
  cursor: pointer;
  vertical-align: middle;

  &:focus, &:hover {
    background-color: var(--button-active-bg);
    color: var(--font-hover-color);
    border-color: var(--border-hover-color);
    outline: none;
  }

  &:active {
    border-color: var(--borer-active-color);
    color: var(--font-active-color);
  }

  .button-text {
    display: inline-flex;
  }

  .icon-position-left {
    order: 1;
    margin-right: .1em;

    +.button-text {
      order: 2;
    }
  }

  .icon-position-right {
    order: 2;
    margin-left: .1em;

    +.button-text {
      order: 1;
    }
  }
}
</style>