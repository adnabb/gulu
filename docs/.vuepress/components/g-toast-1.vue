<template>
  <div style="margin: 20px 0;">
    <g-button @click="showToast">点击弹出toast</g-button>
    <g-button @click="changeToastPosition">toast出现在下方</g-button>
    <g-button @click="customCloseToast">自定义关闭toast</g-button>
    <g-button @click="autoCloseToast">自动关闭Toast</g-button>
    <g-button @click="htmlSuportedToast">htmlSuportedToast</g-button>
    <g-button @click="multiLineToast">toast多行文字</g-button>
  </div>
</template>

<script>
import Button from '../../../src/button-group';
import Toast from '../../../src/toast';
import MyPlugin from '../../../src/my-plugins';
export default {
  components: {
  'g-button': Button,
  'g-toast': Toast,
  },
  methods: {
    showToast() {
      this.$toast('你好，这是一条toast内容', {
        autoClose: false
      });
    },
    changeToastPosition() {
      this.$toast('这是页面下方的toast', {
        autoClose: false,
        position: 'bottom'
      });
    },
    customCloseToast() {
      this.$toast({
        position: 'top',
        text: `${Math.random() * 100}tt`,
        autoClose: false,
        customCloseText: '关闭'
      });
    },
    autoCloseToast() {
      this.$toast({
        autoClose: true,
        text: '内容1秒后自动关闭',
        duration: 1
      });
    },
    htmlSuportedToast() {
      this.$toast({
        text: '<i>Nice to meet you</i>',
        htmlSuport: true
      });
    },
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

<style scoped>
</style>