<template>
  <div class="g-tabs-pane" v-show="activeId === id">
    <slot></slot>
    <div class="disapper">
      <slot name="tab"></slot>
    </div>
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
      type: String | Number,
      required: true
    },
    disabled: {
      type: Boolean
    }
  },
  inject: ["eventBus"],
  data() {
    return {
      activeId: ""
    };
  },
  mounted() {
    this.eventBus.$on("getActiveTabId", activeTabId => {
      this.activeId = activeTabId;
    });
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.g-tabs-pane {
  .disapper {
    display: none;
  }
}
</style>