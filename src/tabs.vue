<template>
  <div class="g-tabs" :class="[`tab-position-${tabPosition}`]">
    <div class="g-tabs-nav-wraper">
      <div
        class="g-tabs-nav"
        :class="{active: selectedId === item.id, disabled: item.disabled}"
        v-for="item in tabs"
        :key="item.id"
        @click="updateSelectedId(item.id, item.disabled)"
        v-html="item.slot || item.tab"
      ></div>
      <div ref="activeLine" class="g-tabs-active-line"></div>
    </div>
    <div ref="tabPaneWraper" class="g-tabs-pane-wraper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "GuluTabs",
  props: {
    defaultActiveId: {
      type: String | Number
    },
    tabPosition: {
      type: String,
      default: "top",
      validator: value => {
        return ["top", "right", "bottom", "left"].indexOf(value) >= 0;
      }
    }
  },
  data() {
    return {
      eventBus: new Vue(),
      tabs: [],
      selectedId: ""
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
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
      this.updateSelectedId(this.defaultActiveId || this.tabs[0].id);
    },
    getTabsInfo() {
      this.$children.forEach(vm => {
        this.tabs.push({
          tab: vm.tab,
          id: vm.id,
          disabled: vm.disabled,
          slot: vm.$slots.tab && vm.$slots.tab[0].elm.innerHTML
        });
      });
    },
    updateSelectedId(id, disabled) {
      if (disabled) return;

      this.selectedId = id;
      this.eventBus.$emit("getActiveTabId", this.selectedId);
      this.changeActiveLineStyle();
    },
    changeActiveLineStyle() {
      this.$nextTick(() => {
        const activeTab = this.$el.querySelector(".g-tabs-nav.active");
        const { width, height, left, top } = activeTab.getBoundingClientRect();
        const marginLeft = this.$el.getBoundingClientRect().left;
        const marginTop = this.$el.getBoundingClientRect().top;
        const activeLine = this.$refs.activeLine;

        if (this.tabPosition === "top") {
          activeLine.style.width = `${width}px`;
          activeLine.style.transform = `translate(${left -
            marginLeft}px, -1px)`;
        } else if (this.tabPosition === "bottom") {
          activeLine.style.width = `${width}px`;
          activeLine.style.transform = `translate(${left -
            marginLeft}px, -${height}px)`;
        } else if (this.tabPosition === "right") {
          activeLine.style.height = `${height + 1}px`;
          activeLine.style.transform = `translate(-${left -
            marginLeft +
            1}px, ${top - marginTop}px)`;
        } else {
          activeLine.style.height = `${height}px`;
          activeLine.style.transform = `translate(0px, ${top - marginTop}px)`;
        }
      });
    }
  },
  watch: {
    tabPosition() {
      this.changeActiveLineStyle();
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';


.g-tabs {
  display: flex;
  flex-direction: column;

  &.tab-position-top {
    .g-tabs-nav-wraper {
      border-bottom: 1px solid $border-color;
    }
  }

  &.tab-position-bottom {
    .g-tabs-nav-wraper {
      order: 1;
      border-top: 1px solid $border-color;
    }
  }

  &.tab-position-bottom, &.tab-position-top {
    .g-tabs-active-line {
      bottom: -1px;
      width: 100px;
      height: 0;
      border-bottom: 2px solid $border-active-color;
    }
  }

  &.tab-position-left {
    .g-tabs-nav-wraper {
      border-right: 1px solid $border-color;
    }
  }

  &.tab-position-right {
    .g-tabs-nav-wraper {
      order: 1;
      border-left: 1px solid $border-color;
    }
  }

  &.tab-position-right, &.tab-position-left {
    flex-direction: row;

    .g-tabs-nav-wraper {
      display: flex;
      flex-direction: column;

      .g-tabs-active-line {
        right: 0;
        height: 100px;
        width: 0;
        border-right: 1px solid $border-active-color;
      }
    }
  }
  
  &-nav-wraper {
    display: flex;
    flex-direction: row;
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

  .disabled {
    color: $font-disabled-color;
    cursor: not-allowed;
  }

  &-active-line {
    position: absolute;
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