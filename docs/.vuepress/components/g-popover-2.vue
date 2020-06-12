<template>
  <div style="margin: 20px 0">
    <g-popover position="top">
      <p slot="content">这里是提示内容。</p>
      <g-button>头部显示提示内容</g-button>
    </g-popover>
    <g-popover position="bottom">
      <p slot="content">这里是提示内容。</p>
      <g-button>尾部提示内容</g-button>
    </g-popover>
    <g-popover position="left">
      <p slot="content">这里是提示内容。</p>
      <g-button>左侧显示提示内容</g-button>
    </g-popover>
    <g-popover position="right">
      <p slot="content">这里是提示内容。</p>
      <g-button>右侧提示内容</g-button>
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