<template>
  <div :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = obj => {

  if (obj) {
    if (!obj.hasOwnProperty('span')) obj.span = 0;

    if (!obj.hasOwnProperty('offset')) obj.offset = 0;
  }

  return obj;
};

export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  computed: {
    gutter() {
      return this.$parent.gutter;
    },
    colClass() {
      const { span, offset, phone, ipad, narrowPc, pc, widePc, createClasses } = this;

      return [
        "g-col",
        span && `col-span-${span}`,
        offset && `col-offset-${offset}`,
        ...createClasses(phone, 'phone'),
        ...createClasses(ipad, 'ipad'),
        ...createClasses(narrowPc, 'narrow-pc'),
        ...createClasses(pc, 'pc'),
        ...createClasses(widePc, 'wide-pc'),
      ];
    },
    colStyle() {
      const { gutter } = this;

      return { marginLeft: gutter / 2 + "px", marginRight: gutter / 2 + "px" };
    }
  },
  data() {
    return {};
  },
  methods: {
    createClasses(obj, str = '') {
      return obj ? [`col-${str}-span-${obj.span}`, `col-${str}-offset-${obj.offset}`] : [];
    },
  },
};
</script>

<style lang="scss" scoped>
@for $i from 0 through 24 {
  .col-span-#{$i} {
    width: $i / 24 * 100%;
  }
}

@for $i from 0 through 24 {
  .col-offset-#{$i} {
    margin-right: $i / 24 * 100%;
  }
}


@media screen and (min-width: 576px) {
  @for $i from 0 through 24 {
    .col-phone-span-#{$i} {
      width: $i / 24 * 100%;
    }
  }

  @for $i from 0 through 24 {
    .col-phone-offset-#{$i} {
      margin-right: $i / 24 * 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  @for $i from 0 through 24 {
    .col-ipad-span-#{$i} {
      width: $i / 24 * 100%;
    }
  }

  @for $i from 0 through 24 {
    .col-ipad-offset-#{$i} {
      margin-right: $i / 24 * 100%;
    }
  }
}

@media screen and (min-width: 992px) {
  @for $i from 0 through 24 {
    .col-narrow-pc-span-#{$i} {
      width: $i / 24 * 100%;
    }
  }

  @for $i from 0 through 24 {
    .col-narrow-pc-offset-#{$i} {
      margin-right: $i / 24 * 100%;
    }
  }
}

@media screen and (min-width: 1200px) {
  @for $i from 0 through 24 {
    .col-pc-span-#{$i} {
      width: $i / 24 * 100%;
    }
  }

  @for $i from 0 through 24 {
    .col-pc-offset-#{$i} {
      margin-right: $i / 24 * 100%;
    }
  }
}

@media screen and (min-width: 1600px) {
  @for $i from 0 through 24 {
    .col-wide-pc-span-#{$i} {
      width: $i / 24 * 100%;
    }
  }

  @for $i from 0 through 24 {
    .col-wide-pc-offset-#{$i} {
      margin-right: $i / 24 * 100%;
    }
  }
}
</style>