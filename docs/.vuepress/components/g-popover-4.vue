<template>
  <div style="margin: 40px 0">
    <g-popover>
      <template v-slot:content="{close}">
        <p>
          <span>这里是提示内容</span>
          <g-button @click="close">关闭</g-button>
        </p>
      </template>
      <g-button>click触发</g-button>
    </g-popover>
  </div>
</template>

<script>
import Button from '../../../src/button';
import Popover from '../../../src/popover';
export default {
  components: {
    'g-popover': Popover,
    'g-button': Button
  },
  data() {
    return {};
  }
};
</script>

<style>
.g-popover p {
  margin: 0;
}

.g-popover {
  z-index: 20;
}
</style>