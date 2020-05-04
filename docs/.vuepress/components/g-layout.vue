<template>
  <div>
    基础用法
    <div style="margin: 20px 0;">
      <g-row>
        <g-col></g-col>
        <g-col></g-col>
      </g-row>
      <g-row>
        <g-col></g-col>
        <g-col></g-col>
        <g-col></g-col>
        <g-col></g-col>
      </g-row>
      <g-row>
        <g-col></g-col>
        <g-col></g-col>
        <g-col></g-col>
        <g-col></g-col>
        <g-col></g-col>
        <g-col></g-col>
        <g-col></g-col>
      </g-row>
    </div>
  </div>
</template>

<script>
import Row from '../../../src/row.vue';
import Col from '../../../src/col.vue';
export default {
  name: 'GLayout',
  components: {
    'g-row': Row,
    'g-col': Col,
  },
};
</script>