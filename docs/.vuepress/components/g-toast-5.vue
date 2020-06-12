<template>
  <div style="margin: 20px 0;">
    <g-button @click="multiLineToast">toast多行文字</g-button>
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
    multiLineToast() {
      this.$toast({
        text: `我是很长的文字，我来测试多行的toast的排版、样式等是否合理。
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理`,
        customCloseText: '关闭',
        autoClose: false
      });
    }
  }
};
</script>

<style>
.g-toast {
  z-index: 20;
}
</style>