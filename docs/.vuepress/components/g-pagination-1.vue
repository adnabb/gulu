<template>
  <div style="margin: 20px 0;">
    <g-pagination :total="50"></g-pagination>
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