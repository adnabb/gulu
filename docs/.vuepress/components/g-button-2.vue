<template>
  <div style="margin: 20px 0">
    <g-button-group>
      <g-button icon="#g-arrow-left">上一页</g-button>
      <g-button>更多</g-button>
      <g-button icon="#g-arrow-right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
</template>

<script>
import Button from '../../../src/button';
import ButtonGroup from '../../../src/button-group';
export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup
  }
};
</script>