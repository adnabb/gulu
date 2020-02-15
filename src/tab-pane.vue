<template>
  <div class="g-tabs-pane" v-show="activeId === id">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GuluTabPane",
  props: {
    tab: {
      type: String,
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    }
  },
  inject: ['eventBus'],
  data() {
    return {
      activeId: ''
    };
  },
  mounted() {
    this.eventBus.$on('getActiveTabId', activeTabId => {
      this.activeId = activeTabId;
    });
  }
};
</script>

<style lang="scss" scoped>
.g-tab-pane {

}
</style>