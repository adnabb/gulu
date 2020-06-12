<template>
  <div style="margin: 20px 0">
    <g-input :value="value" @input="changeValue"></g-input>
    input的值：{{ value }}
  </div>
</template>

<script>
import Input from '../../../src/input.vue';
export default {
  components: {
    'g-input': Input
  },
  data() {
    return {
      value: 0,
    }
  },
  methods: {
    changeValue(value) {
      this.value = value;
    }
  }
};
</script>

<style>
</style>