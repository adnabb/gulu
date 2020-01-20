import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';
import Row from './row';
import Col from './col';
import Layout from './layout';
import Header from './header';
import Sider from './sider';
import Content from './content';
import Footer from './footer';
import Toast from './toast';
import MyPlugin from './my-plugins';

Vue.use(MyPlugin);

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
  el: '#app',
  components: {
    'g-input': Input,
    'g-row': Row,
    'g-col': Col,
    'g-layout': Layout,
    'g-header': Header,
    'g-sider': Sider,
    'g-content': Content,
    'g-footer': Footer,
    'g-toast': Toast,
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      value: '',
    };
  },
  methods: {
    changeValue(value) {
      this.value = value;
    },
    showToast() {
      this.$toast({
        position: 'top',
        text: `${Math.random() * 100}tt`,
        autoClose: false,
        customCloseText: '关闭'
      });
    },
  },
});
