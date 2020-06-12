<template>
  <div style="margin: 20px 0;">
    <g-button @click="showToast">点击弹出toast</g-button>
    <g-button @click="autoCloseToast">自动关闭Toast</g-button>
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
    showToast() {
      this.$toast('你好，这是一条toast内容', {
        autoClose: false
      });
    },
    autoCloseToast() {
      this.$toast({
        autoClose: true,
        text: '内容1秒后自动关闭',
        duration: 1
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