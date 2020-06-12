<template>
  <div style="margin: 20px 0;">
    <g-collapse :selected.sync="selectedCollapseItem">
      <g-collapse-item name="item1">item1 content</g-collapse-item>
      <g-collapse-item name="item2">item2 content</g-collapse-item>
      <g-collapse-item name="item3">item3 content</g-collapse-item>
    </g-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/collapse';
import CollapseItem from '../../../src/collapse-item';
export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem
  },
  data() {
    return {
      selectedCollapseItem: ['item1', 'item2']
    };
  }
};
</script>

<style scoped>
.g-button {
  margin-right: 10px;
}
</style>