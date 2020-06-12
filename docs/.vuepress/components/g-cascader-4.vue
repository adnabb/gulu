<template>
  <div style="margin: 20px 0;">
    <g-cascader
      :source.sync="cascaderSource3"
      :load-data="loadData"
      :selected.sync="cascaderSelected4"
    ></g-cascader>
  </div>
</template>

<script>
import Cascader from '../../../src/cascader';
import { province } from '../../../src/static/regions/province';
import { country } from '../../../src/static/regions/country';
import { city } from '../../../src/static/regions/city';
import { town } from '../../../src/static/regions/town';
export default {
  components: {
    'g-cascader': Cascader
  },
  data() {
    return {
      cascaderSelected4: [],
      cascaderSource3: []
    };
  },
  methods: {
    loadData(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!id) {
            province.forEach(item => {
              item.value = item.name;
              item.isLeaf = city[item.id] ? false : true;
            });
            resolve(province);
          } else {
            let result = [];
            let flag = false;
            if (city[id]) {
              if (city[id].length === 1 && city[id][0].name === '市辖区') {
                id = city[id][0].id;
              } else {
                result = city[id];
              }
            }
            if (country[id]) {
              result = country[id];
            } else if (town[id]) {
              result = town[id];
              flag = true;
            }
            result.forEach(item => {
              item.value = item.name;
              item.isLeaf = flag;
            });
            resolve(result);
          }
        }, 600);
      });
    }
  }
};
</script>

<style>
.g-cascader-list-container {
  z-index: 2;
}
</style>