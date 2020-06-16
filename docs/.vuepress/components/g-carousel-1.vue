<template>
  <div style="margin: 20px 0;">
    <g-carousel :selected.sync="carouselSelected" :auto-play="false">
      <g-carousel-item name="1">1</g-carousel-item>
      <g-carousel-item name="2">2</g-carousel-item>
      <g-carousel-item name="3">3</g-carousel-item>
    </g-carousel>
  </div>
</template>

<script>
import Carousel from '../../../src/carousel';
import CarouselItem from '../../../src/carousel-item';
export default {
  components: {
    'g-carousel': Carousel,
    'g-carousel-item': CarouselItem
  },
  data() {
    return {
      carouselSelected: ''
    };
  }
};
</script>

<style>
.g-carousel-item {
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
}
</style>