<template>
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
</template>

<script>
import Row from '../../../src/row.vue';
import Col from '../../../src/col.vue';
export default {
  components: {
    'g-row': Row,
    'g-col': Col
  }
};
</script>

<style>
.g-row {
  border-radius: 4px;
}

.g-col {
  border-radius: 4px;
  height: 25px;
  width: 50%;
  margin-bottom: 10px;
}

.g-col:nth-child(even) {
  background-color: #e5e9f2;
}

.g-col:nth-child(odd) {
  background-color: #d3dce6;
}
</style>