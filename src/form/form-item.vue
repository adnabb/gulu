<template>
  <div class="g-form-item" :class="{error}">
    <label :class="{required}" for>{{ label }}</label>
    <div class="container">
      <slot></slot>
      <transition name="slide-bottom-fade">
        <div v-if="error" class="error">{{ error }}</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluFormItem',
  props: {
    label: {
      type: String
    },
    error: {
      type: String
    },
    required: {
      type: Boolean
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables.scss';

.g-form-item {
  .slide-bottom-fade-enter, .slide-bottom-fade-leave-to {
    opacity: .5;
    transform: translateY(-4px);
  }
  display: flex;
  align-items: center;
  label {
    min-width: 60px;
    &.required {
      position: relative;
      &::before {
        content: '*';
        position: absolute;
        color: $red;
        right: 100%;
        top: 2px;
        margin-right: 4px;
      }
    }
  }
  &.error {
    input, select {
      border-color: $red;
      &:focus, &:hover {
        border-color: $red;
      }
    } 
  }
  .container {
    position: relative;
  }
  .error {
    color: $red;
    position: absolute;
    top: 100%;
  }
}
</style>