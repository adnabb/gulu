<template>
  <div style="margin:20px 0">
    <g-button :loading="loading1" @click="loading1=!loading1">按钮</g-button>
    <g-button :loading="loading2" icon="#g-download" @click="loading2=!loading2">按钮</g-button>
    <g-button :loading="loading3" icon="#g-upload" icon-position="right" @click="loading3=!loading3">按钮</g-button>
    <g-button :loading="loading4" icon="#g-arrow-down" @click="loading4=!loading4">按钮</g-button>
  </div>
</template>

<script>
import Button from '../../../src/button';
export default {
  components: {
    'g-button': Button
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false
    };
  }
};
</script>

<style scoped>
.g-button {
  margin-right: 10px;
}
</style>