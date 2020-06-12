<template>
  <div style="margin: 20px 0;">
    <g-row>
      <g-col
        span="1"
        offset="1"
        :phone="{span:7}"
        :ipad="{span:12}"
        :narrow-pc="{span:14}"
        :pc="{span:20}"
        :wide-pc="{span:23}"
      ></g-col>
      <g-col
        span="22"
        :phone="{span:17}"
        :ipad="{span:12}"
        :narrow-pc="{span:10}"
        :pc="{span:4}"
        :wide-pc="{span:1}"
      ></g-col>
    </g-row>
    <g-row>
      <g-col span="8" :phone="{span:8}" :ipad="{span:8}"></g-col>
      <g-col span="8" :phone="{span:7, offset:1}" :ipad="{span:8}"></g-col>
      <g-col span="8" :phone="{span:8}" :ipad="{span:8}"></g-col>
    </g-row>
    <g-row>
      <g-col span="4"></g-col>
      <g-col span="4"></g-col>
      <g-col span="4"></g-col>
      <g-col span="4"></g-col>
      <g-col span="4"></g-col>
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