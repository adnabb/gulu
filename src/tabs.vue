<template>
  <div class="g-tabs">
    <div class="g-tabs-nav-wraper">
      <div
        class="g-tabs-nav"
        :class="{active: selectedId === item.id}"
        v-for="item in tabs"
        :key="item.id"
        @click="updateSelectedId(item.id)"
      >{{ item.tab }}</div>
      <div ref="activeLine" class="g-tabs-active-line"></div>
    </div>
    <div class="g-tabs-pane-wraper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./event-bus";
export default {
  name: "GuluTabs",
  props: {
    defaultActiveId: {
      type: [Number | String]
    }
  },
  data() {
    return {
      tabs: [],
      selectedId: ''
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getTabsInfo();
      this.setDefaultActiveId();
    },
    setDefaultActiveId() {
      if (!this.defaultActiveId) this.updateSelectedId(this.tabs[0].id);
    },
    getTabsInfo() {
      this.$children.forEach(vm => {
        this.tabs.push({
          tab: vm.tab,
          id: vm.id
        });
      });
    },
    updateSelectedId(id) {
      this.selectedId = id;
      EventBus.$emit("getActiveTabId", this.selectedId);
      this.changeActiveLineStyle();
    },
    changeActiveLineStyle() {
      this.$nextTick(() => {
        const activeTab = this.$el.querySelector(".g-tabs-nav.active");
        const { width, left } = activeTab.getBoundingClientRect();
        const marginLeft = this.$el.getBoundingClientRect().left;
        const activeLine = this.$refs.activeLine;
        activeLine.style.width = `${width}px`;
        activeLine.style.transform = `translateX(${left - marginLeft}px)`
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';

.g-tabs {
  
  &-nav-wraper {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid $border-color;
    position: relative;
  }

  &-nav {
    padding: .5em;
    cursor: pointer;
    margin-right: 1em;

    &:last-child {
      margin-right: 0
    }

    &:hover {
      color: $font-hover-color;
    }
  }

  .active {
    color: $font-active-color;
  }

  &-active-line {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 1px;
    background: $borer-active-color;
    transition: transform 600ms;
  }

  &-pane-wraper {
    display: flex;
    flex-direction: row;
  }

  &-pane {
    padding: .5em;
  }
}
</style>