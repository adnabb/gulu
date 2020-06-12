<template>
  <div style="margin: 20px 0;">
    直接使用：<g-input></g-input><br/><br/>
    加入placeholder：<g-input placeholder="请输入内容"></g-input><br/><br/>
    禁用：<g-input disabled value="123"></g-input><br/><br/>
    只读：<g-input readonly value="234"></g-input><br/><br/>
    错误提示：<g-input error="请输入正确的内容" value="234"></g-input>
  </div>
</template>

<script>
import Input from '../../../src/input.vue';
export default {
  components: {
    'g-input': Input,
  }
};
</script>

<style>
</style>