<template>
  <div class="g-tabs-pane" v-show="activeId === id">
    <slot></slot>
  </div>
</template>

<script>
import { EventBus } from './event-bus';

  export default {
    name: 'GuluTabPane',
    props: {
      tab: {
        type: String,
        required: true
      },
      id: {
        type: [String, Number],
        required: true
      },
    },
    data() {
      return {
        activeId: ''
      }
    },
    mounted () {
      EventBus.$on('getActiveTabId', (activeTabId) => {
        this.activeId = activeTabId;        
      });
    },
  }
</script>

<style lang="scss" scoped>
.g-tab-pane {

}
</style>