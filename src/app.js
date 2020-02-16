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
import Tabs from './tabs';
import TabPane from './tab-pane';

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
    'g-tabs': Tabs,
    'g-tab-pane': TabPane,
  },
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      value: '',
      tabPosition: 'top'
    };
  },
  methods: {
    changeTopPosition(position) {
      this.tabPosition = position;
    },
    changeValue(value) {
      this.value = value;
    },
    showToast() {
      this.$toast('你好，这是一条toast内容', {
        autoClose: false
      });
    },
    changeToastPosition() {
      this.$toast('这是页面下方的toast', {
        autoClose: false,
        position: 'bottom'
      });
    },
    customCloseToast() {
      this.$toast({
        position: 'top',
        text: `${Math.random() * 100}tt`,
        autoClose: false,
        customCloseText: '关闭'
      });
    },
    autoCloseToast() {
      this.$toast({
        autoClose: true,
        text: '内容1秒后自动关闭',
        duration: 1,
      })
    },
    htmlSuportedToast() {
      this.$toast({
        text:'<i>Nice to meet you</i>',
        htmlSuport: true,
      })
    },
    multiLineToast() {
      this.$toast({
        text:`我是很长的文字，我来测试多行的toast的排版、样式等是否合理。
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理
        我是很长的文字，我来测试多行的toast的排版、样式等是否合理`,
        customCloseText: '关闭',
        autoClose: false,
      })
    },
  },
});
