<template>
  <div style="margin: 20px 0">
    <g-tabs>
      <g-tab-pane tab="tab1" id="1">pane1</g-tab-pane>
      <g-tab-pane tab="tab2" id="2">pane2</g-tab-pane>
      <g-tab-pane tab="tab3" id="3">pane3</g-tab-pane>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs';
import TabPane from '../../../src/tab-pane';
export default {
  components: {
    'g-tabs': Tabs,
    'g-tab-pane': TabPane
  },
  data() {
    return {};
  }
};
</script>