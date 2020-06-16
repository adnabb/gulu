<template>
  <div style="margin: 20px 0">
    <g-tabs default-active-id="1">
      <g-tab-pane tab="tab1" id="1">
        <span slot="tab">
          <g-icon name="#g-download"></g-icon>下载
        </span>
        下载pane
      </g-tab-pane>
      <g-tab-pane tab="tab2" id="2">
        <span slot="tab">
          <g-icon name="#g-upload"></g-icon>上传
        </span>
        上传pane
      </g-tab-pane>
    </g-tabs>
  </div>
</template>

<script>
import Icon from '../../../src/icon';
import Tabs from '../../../src/tabs';
import TabPane from '../../../src/tab-pane';
export default {
  components: {
    'g-icon': Icon,
    'g-tabs': Tabs,
    'g-tab-pane': TabPane
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.g-button {
  margin-right: 10px;
}
</style>