<template>
  <div style="margin: 20px 0;">
    <g-layout>
      <g-header>Header</g-header>
      <g-layout>
        <g-sider>Sider</g-sider>
        <g-content>Content</g-content>
      </g-layout>
      <g-footer>Footer</g-footer>
    </g-layout>
  </div>
</template>

<script>
import Layout from '../../../src/layout.vue';
import Header from '../../../src/header.vue';
import Content from '../../../src/content.vue';
import Footer from '../../../src/footer.vue';
import Silder from '../../../src/sider.vue';
export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-footer': Footer,
    'g-sider': Silder
  }
};
</script>

<style>
.g-layout {
  text-align: center;
}

.g-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  height: 100px;
  line-height: 100px;
}

.g-header,
.g-footer {
  background: #7dbcea;
  color: #fff;
  height: 50px;
  line-height: 50px;
}

.g-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 100px;
}
</style>