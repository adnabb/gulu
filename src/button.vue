<template>
  <button class="g-button">按钮</button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.g-button {
  background-color: var(--button-bg);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  height: var(--button-height);
  line-height: 1;
  padding: 0 1em;
  cursor: pointer;

  &:active {
    border-color: var(--borer-active-color);
    color: var(--font-active-color);
  }

  &:focus {
    background-color: var(--button-active-bg);
    color: var(--font-hover-color);
    border-color: var(--border-hover-color);
    outline: none;
  }
}
</style>