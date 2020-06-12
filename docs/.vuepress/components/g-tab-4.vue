<template>
  <div style="margin: 20px 0">
    <g-button-group style="margin-bottom:20px">
      <g-button @click="changeTopPosition('top')">top</g-button>
      <g-button @click="changeTopPosition('right')">right</g-button>
      <g-button @click="changeTopPosition('bottom')">bottom</g-button>
      <g-button @click="changeTopPosition('left')">left</g-button>
    </g-button-group>
    <g-tabs :tab-position="tabPosition">
      <g-tab-pane tab="tab1" id="1">pane1</g-tab-pane>
      <g-tab-pane tab="tab2" id="2">pane2</g-tab-pane>
      <g-tab-pane tab="tab3" id="3">pane3</g-tab-pane>
    </g-tabs>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group';
import Button from '../../../src/button';
import Tabs from '../../../src/tabs';
import TabPane from '../../../src/tab-pane';
export default {
  components: {
    'g-button-group': ButtonGroup,
    'g-button': Button,
    'g-tabs': Tabs,
    'g-tab-pane': TabPane
  },
  data() {
    return {
      tabPosition: 'top'
    };
  },
  methods: {
    changeTopPosition(position) {
      this.tabPosition = position;
    }
  }
};
</script>