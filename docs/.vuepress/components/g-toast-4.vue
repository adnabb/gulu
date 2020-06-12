<template>
  <div style="margin: 20px 0;">
    <g-button @click="customCloseToast">自定义关闭toast</g-button>
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
    customCloseToast() {
      this.$toast({
        position: 'top',
        text: `${Math.random() * 100}tt`,
        autoClose: false,
        customCloseText: '关闭'
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