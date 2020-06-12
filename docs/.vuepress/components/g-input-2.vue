<template>
  <div style="margin: 20px 0">
    <g-input v-model="value"></g-input>
    <span style="margin-right:20px">input的值：{{ value }}</span>
    <g-button @click="value += 1">点击+1</g-button>
  </div>
</template>

<script>
import Button from '../../../src/button.vue';
import Input from '../../../src/input.vue';
export default {
  components: {
    'g-input': Input,
    'g-button': Button
  },
  data() {
    return {
      value: 0,
    }
  },
};
</script>

<style>
</style>