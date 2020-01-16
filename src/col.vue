<template>
  <div :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = obj => {
  return obj && (obj.hasOwnProperty("span") || obj.hasOwnProperty("offset"));
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
      const { span, offset, phone, ipad, narrowPc, pc, widePc } = this;

      return [
        "g-col",
        span && `col-span-${span}`,
        offset && `col-offset-${offset}`,
        phone && (phone.span || phone.span == 0) && `col-phone-span-${phone.span}`,
        phone && (phone.offset || phone.offset == 0) && `col-phone-offset-${phone.offset}`,
        ipad && (ipad.span || ipad.span == 0) && `col-ipad-span-${ipad.span}`,
        ipad && (ipad.offset || ipad.offset == 0) && `col-ipad-offset-${ipad.offset}`,
        narrowPc && (narrowPc.span || narrowPc.span == 0) && `col-narrow-pc-span-${narrowPc.span}`,
        narrowPc && (narrowPc.offset || narrowPc.offset == 0) && `col-narrow-pc-offset-${narrowPc.offset}`,
        pc && (pc.span || pc.span == 0) && `col-pc-span-${pc.span}`,
        pc && (pc.offset || pc.offset == 0) && `col-pc-offset-${pc.offset}`,
        widePc && (widePc.span || widePc.span == 0) && `col-wide-pc-span-${widePc.span}`,
        widePc && (widePc.offset || widePc.offset == 0) && `col-wide-pc-offset-${widePc.offset}`
      ];
    },
    colStyle() {
      const { gutter } = this;

      return { marginLeft: gutter / 2 + "px", marginRight: gutter / 2 + "px" };
    }
  },
  data() {
    return {};
  }
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