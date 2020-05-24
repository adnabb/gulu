<template>
  <div class="g-carousel-item--wrapper">
    <template v-if="animationEnabled">
      <transition name="slide">
        <div v-if="visible" :class="['g-carousel-item', {reverse}]">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div v-if="visible" :class="['g-carousel-item', {reverse}]">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GuluCarouselItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      reverse: false,
      animationEnabled: false
    };
  },
  updated() {
    this.$nextTick(() => {
      this.animationEnabled = true;
    });
  },
  methods: {
    triggerItem() {
      this.visible = !this.visible;
    }
  }
};
</script>

<style lang="scss" scoped>
.g-carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  background: palegoldenrod;
}
.slide-enter-active, .slide-leave-active {
  transition: all 3s;
}
.slide-enter {
  transform: translateX(100%) scale(.9);
}

.slide-leave-to {
  transform: translateX(-100%) scale(.9);
}

.slide-enter.reverse {
  transform: translateX(-100%) scale(.9);
}

.slide-leave-to.reverse {
  transform: translateX(100%) scale(.9);
}
</style>