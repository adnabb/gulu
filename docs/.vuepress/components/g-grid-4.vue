<template>
  <div style="margin: 20px 0;">
    <g-row align="center">
      <g-col span="10" offset="1"></g-col>
      <g-col span="10"></g-col>
    </g-row>
    <g-row align="left">
      <g-col span="7" offset="8"></g-col>
      <g-col span="8"></g-col>
    </g-row>
    <g-row align="right">
      <g-col span="4"></g-col>
      <g-col span="4"></g-col>
      <g-col span="4" offset="4"></g-col>
      <g-col span="4"></g-col>
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