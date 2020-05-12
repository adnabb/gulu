<template>
  <transition name="slide">
    <div v-if="visible" :class="['g-carousel-item', {reverse}]">
      <slot></slot>
    </div>
  </transition>
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
    };
  },
  mounted() {},
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