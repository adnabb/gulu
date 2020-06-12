<template>
  <div style="margin: 20px 0;">
    <g-button @click="changeToastPosition('top')">toast出现在上方</g-button>
    <g-button @click="changeToastPosition('bottom')">toast出现在下方</g-button>
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
    changeToastPosition(position) {
      this.$toast('不同位置的toast', {
        position
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