<template>
  <div class="container">
    <input
      :class="{ error }"
      type="text"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :error="error"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
    />
    <template v-if="error">
      <g-icon class="error-tips" icon="info"></g-icon>
      <span class="error-tips">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";

export default {
  name: "GInput",
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  components: {
    'g-icon': Icon,
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

$input-focus-color: #409eff;
$input-hover-color: #c0c4cc;
$input-font-color: #606266;

$input-disabled-bg: #f5f7fa;

.container {
  display: inline-block;

  input {
    height: $common-height;
    padding: 0 .5em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    color: $input-font-color;
    
    &::placeholder {
      color: $placeholder-color;
    }

    &:disabled {
      background: $input-disabled-bg;
      color: $font-disabled-color;
      cursor: not-allowed;
    }

    &:hover {
      border-color: $input-hover-color;
    }

    &:focus {
      border-color: $input-focus-color;
      outline: none;
    }
  }

  .error {
    border-color: $red;

    &:focus, &:hover {
      border-color: red;
    }
  }

  .error-tips {
    color: $red;
  }
}
</style>