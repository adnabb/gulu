<template>
  <div style="margin: 20px 0">
    单独的icon：<g-icon name="#g-caution"></g-icon><br/><br/>
    按钮里的icon：<g-button icon="#g-refresh"></g-button><br/>
  </div>
</template>

<script>
import Icon from '../../../src/icon';
import Button from '../../../src/button';
export default {
  components: {
    'g-icon': Icon,
    'g-button': Button
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>

</style>