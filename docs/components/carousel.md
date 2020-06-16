# Carousel 无缝轮播组件

## 基础用法

<ClientOnly>
  <g-carousel-1></g-carousel-1>
</ClientOnly>

```vue
<g-carousel :selected.sync="carouselSelected" :auto-play="false">
  <g-carousel-item name="1">1</g-carousel-item>
  <g-carousel-item name="2">2</g-carousel-item>
  <g-carousel-item name="3">3</g-carousel-item>
</g-carousel>

<script>
export default {
  data() {
    return {
      carouselSelected: ''
    };
  }
};
</script>
```

## 自定义默认展示

<ClientOnly>
  <g-carousel-2></g-carousel-2>
</ClientOnly>

```vue
<g-carousel :selected.sync="carouselSelected3" :auto-play="false">
  <g-carousel-item name="1">1</g-carousel-item>
  <g-carousel-item name="2">2</g-carousel-item>
  <g-carousel-item name="3">3</g-carousel-item>
</g-carousel>

<script>
export default {
  data() {
    return {
      carouselSelected3: '2'
    };
  }
};
</script>
```

## 自定义自动播放

<ClientOnly>
  <g-carousel-3></g-carousel-3>
</ClientOnly>

```vue
<g-carousel :selected.sync="carouselSelected2">
  <g-carousel-item name="1">1</g-carousel-item>
  <g-carousel-item name="2">2</g-carousel-item>
  <g-carousel-item name="3">3</g-carousel-item>
</g-carousel>

<script>
export default {
  data() {
    return {
      carouselSelected2: ''
    };
  }
};
</script>
```