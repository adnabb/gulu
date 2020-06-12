<template>
  <div class="popover-container" style="margin:20px 0">
    <g-popover>
      <p slot="content">这里是提示内容。</p>
      <g-button>点击显示提示内容</g-button>
    </g-popover>
    <g-popover>
      <p slot="content">这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。 这里是超级长的内容。</p>
      <g-button>点击显示超长内容</g-button>
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