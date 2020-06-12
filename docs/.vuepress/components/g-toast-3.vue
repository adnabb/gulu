<template>
  <div style="margin: 20px 0;">
    <g-button @click="htmlSuportedToast">htmlSuportedToast</g-button>
  </div>
</template>

<script>
import Vue from 'vue';
import Button from '../../../src/button';
import Toast from '../../../src/toast';
import MyPlugin from '../../../src/my-plugins';

Vue.use(MyPlugin);

export default {
  components: {
    'g-button': Button,
    'g-toast': Toast
  },
  methods: {
    htmlSuportedToast() {
      this.$toast({
        text: '<i>Nice to meet you</i>',
        htmlSuport: true
      });
    },
  }
};
</script>

<style>
.g-toast {
  z-index: 20;
}
</style>