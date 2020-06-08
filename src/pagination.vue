<template>
  <ul class="g-pagination">
    <p v-if="totalVisible" style="margin-right:.5em">共{{total}}条</p>
    <li class="g-pagination-item previous" v-if="current > 1" @click="onPrevious">
      <g-icon icon="arrow-left"></g-icon>
    </li>
    <template v-for="(i, index) in shownPage">
      <li v-if="i === '...'" class="g-pagination-item no-border cursor-default dots" :key="index">
        <g-icon  icon="dots"></g-icon>
      </li>
      <li v-else class="g-pagination-item" :class="{active: i === current}" :key="index">
        <a href="#" @click="onChange(i)">
          <span>{{ i }}</span>
        </a>
      </li>
    </template>
    <li class="g-pagination-item next" v-if="current < totalPage" @click="onNext">
      <g-icon icon="arrow-right"></g-icon>
    </li>
  </ul>
</template>

<script>
import Icon from './icon';
export default {
  name: 'GuluPagination',
  components: {
    'g-icon': Icon
  },
  props: {
    totalVisible: {
      type: Boolean
    },
    total: {
      type: Number
    },
    sizes: {
      type: Array,
      default: () => [10, 20, 50, 100]
    },
    sizeVsisble: {
      type: Boolean,
    }
  },
  computed: {
    shownPage() {
      const list = this.getBasicPageList();
      const uniqueList = [...new Set(list)];
      if (uniqueList[1] - uniqueList[0] > 1) uniqueList.splice(1, 0, '...');
      const { length } = uniqueList;
      if (uniqueList[length - 1] - uniqueList[length - 2] > 1) uniqueList.splice(length - 1, 0, '...');
      return uniqueList;
    },
    totalPage() {
      return Math.ceil(this.total / this.size);
    }
  },
  data() {
    return {
      current: 1,
      size: this.sizes[0]
    };
  },
  methods: {
    // < first ... cur-2 cur-1 cur cur+1 cur+2 ... end >
    getBasicPageList() {
      const { current: value, totalPage: total } = this;
      const previousValue = value - 1 > 0 ? value - 1 : 1;
      const firstTwoValue = value - 2 > 0 ? value - 2 : 1;
      const nextValue = value + 1 <= total ? value + 1 : 1;
      const lastTwoValue = value + 2 <= total ? value + 2 : 1;
      return [
        1,
        firstTwoValue,
        previousValue,
        value,
        nextValue,
        lastTwoValue,
        total
      ];
    },
    onChange(page) {
      if (page === this.current) return;
      this.current = page;
      this.$emit('change', this.current);
    },
    onPrevious() {
      this.current = this.current - 1;
      this.$emit('change', this.current);
    },
    onNext() {
      this.current = this.current + 1;
      this.$emit('change', this.current);
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'styles/variables.scss';
$pagination-heigth: 30px;
$pagination-width: 30px;
.g-pagination {
  display: flex;
  align-items: center;
  &-item {
    list-style: none;
    margin: 0 .5em;
    user-select: none;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    text-align: center;
    min-width: $pagination-width;
    height: $pagination-heigth;
    &.dots {
      margin: 0;
    }
    &:hover {
      border-color: $border-hover-color;
      color: $font-hover-color;
    }
    &.previous, &.next {
      cursor: pointer;
    }
    .g-icon {
      vertical-align: -5px;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    a {
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      text-align: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.active {
      color: $font-active-color;
      border-color: $border-active-color;
      a {
        cursor: default;
      }
    }
  }
}
</style>