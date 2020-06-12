<template>
  <div style="margin: 20px 0">
    <g-popover trigger="click">
      <template slot="content">这里是提示内容。</template>
      <g-button>click触发</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <p slot="content">这里是提示内容。</p>
      <g-button>hover触发</g-button>
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