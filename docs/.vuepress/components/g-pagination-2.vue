<template>
  <div style="margin: 20px 0;">
    <g-pagination :total="1087" :total-visible="true"></g-pagination>
  </div>
</template>

<script>
import Pagination from '../../../src/pagination';
export default {
  components: {
    'g-pagination': Pagination
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>