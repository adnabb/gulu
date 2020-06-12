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
import MyPlugin from './my-plugins';
import Tabs from './tabs';
import TabPane from './tab-pane';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Cascader from './cascader';
import Carousel from './carousel';
import CarouselItem from './carousel-item';
import Menu from './menu/index';
import MenuItem from './menu/menu-item';
import MenuItemGroup from './menu/menu-item-group';
import Submenu from './menu/submenu';
import Form from './form/index';
import FormItem from './form/form-item';
import FormMixin from './form.mixin';
import Pagination from './pagination';

Vue.use(MyPlugin);

Vue.component('g-icon', Icon);
Vue.component('g-button', Button);
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
    'g-tabs': Tabs,
    'g-tab-pane': TabPane,
    'g-popover': Popover,
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem,
    'g-cascader': Cascader,
    'g-carousel': Carousel,
    'g-carousel-item': CarouselItem,
    'g-menu': Menu,
    'g-menu-item': MenuItem,
    'g-menu-item-group': MenuItemGroup,
    'g-submenu': Submenu,
    'g-form': Form,
    'g-form-item': FormItem,
    'g-pagination': Pagination,
  },
  mixins: [FormMixin],
  data() {
    return {
      value: '',
      cascaderSource: [{
        value: 'zhinan',
        name: '指南',
        children: [{
          value: 'shejiyuanze',
          name: '设计原则',
          children: [{
            value: 'yizhi',
            name: '一致'
          }, {
            value: 'fankui',
            name: '反馈'
          }, {
            value: 'xiaolv',
            name: '效率'
          }, {
            value: 'kekong',
            name: '可控'
          }]
        }, {
          value: 'daohang',
          name: '导航',
          children: [{
            value: 'cexiangdaohang',
            name: '侧向导航'
          }, {
            value: 'dingbudaohang',
            name: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        name: '组件',
        children: [{
          value: 'basic',
          name: 'Basic',
          children: [{
            value: 'layout',
            name: 'Layout 布局'
          }, {
            value: 'color',
            name: 'Color 色彩'
          }, {
            value: 'typography',
            name: 'Typography 字体'
          }, {
            value: 'icon',
            name: 'Icon 图标'
          }, {
            value: 'button',
            name: 'Button 按钮'
          }]
        }, {
          value: 'form',
          name: 'Form',
          children: [{
            value: 'radio',
            name: 'Radio 单选框'
          }, {
            value: 'checkbox',
            name: 'Checkbox 多选框'
          }, {
            value: 'input',
            name: 'Input 输入框'
          }, {
            value: 'input-number',
            name: 'InputNumber 计数器'
          }, {
            value: 'select',
            name: 'Select 选择器'
          }, {
            value: 'cascader',
            name: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            name: 'Switch 开关'
          }, {
            value: 'slider',
            name: 'Slider 滑块'
          }, {
            value: 'time-picker',
            name: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            name: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            name: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            name: 'Upload 上传'
          }, {
            value: 'rate',
            name: 'Rate 评分'
          }, {
            value: 'form',
            name: 'Form 表单'
          }]
        }, {
          value: 'data',
          name: 'Data',
          children: [{
            value: 'table',
            name: 'Table 表格'
          }, {
            value: 'tag',
            name: 'Tag 标签'
          }, {
            value: 'progress',
            name: 'Progress 进度条'
          }, {
            value: 'tree',
            name: 'Tree 树形控件'
          }, {
            value: 'pagination',
            name: 'Pagination 分页'
          }, {
            value: 'badge',
            name: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          name: 'Notice',
          children: [{
            value: 'alert',
            name: 'Alert 警告'
          }, {
            value: 'loading',
            name: 'Loading 加载'
          }, {
            value: 'message',
            name: 'Message 消息提示'
          }, {
            value: 'message-box',
            name: 'MessageBox 弹框'
          }, {
            value: 'notification',
            name: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          name: 'Navigation',
          children: [{
            value: 'menu',
            name: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            name: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            name: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            name: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            name: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          name: 'Others',
          children: [{
            value: 'dialog',
            name: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            name: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            name: 'Popover 弹出框'
          }, {
            value: 'card',
            name: 'Card 卡片'
          }, {
            value: 'carousel',
            name: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            name: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        name: '资源',
        children: [{
          value: 'axure',
          name: 'Axure Components'
        }, {
          value: 'sketch',
          name: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          name: '组件交互文档'
        }]
      }],
      cascaderSource2: [{
        value: 'zhinan',
        name: '指南',
        disabled: true,
        children: [{
          value: 'shejiyuanze',
          name: '设计原则',
          children: [{
            value: 'yizhi',
            name: '一致'
          }, {
            value: 'fankui',
            name: '反馈'
          }, {
            value: 'xiaolv',
            name: '效率'
          }, {
            value: 'kekong',
            name: '可控'
          }]
        }, {
          value: 'daohang',
          name: '导航',
          children: [{
            value: 'cexiangdaohang',
            name: '侧向导航'
          }, {
            value: 'dingbudaohang',
            name: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        name: '组件',
        children: [{
          value: 'basic',
          name: 'Basic',
          disabled: true,
          children: [{
            value: 'layout',
            name: 'Layout 布局'
          }, {
            value: 'color',
            name: 'Color 色彩',
            disabled: true,
          }, {
            value: 'typography',
            name: 'Typography 字体'
          }, {
            value: 'icon',
            name: 'Icon 图标'
          }, {
            value: 'button',
            name: 'Button 按钮'
          }]
        }, {
          value: 'form',
          name: 'Form',
          children: [{
            value: 'radio',
            name: 'Radio 单选框'
          }, {
            value: 'checkbox',
            name: 'Checkbox 多选框'
          }, {
            value: 'input',
            name: 'Input 输入框'
          }, {
            value: 'input-number',
            name: 'InputNumber 计数器'
          }, {
            value: 'select',
            name: 'Select 选择器'
          }, {
            value: 'cascader',
            name: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            name: 'Switch 开关'
          }, {
            value: 'slider',
            name: 'Slider 滑块'
          }, {
            value: 'time-picker',
            name: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            name: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            name: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            name: 'Upload 上传'
          }, {
            value: 'rate',
            name: 'Rate 评分'
          }, {
            value: 'form',
            name: 'Form 表单'
          }]
        }, {
          value: 'data',
          name: 'Data',
          children: [{
            value: 'table',
            name: 'Table 表格'
          }, {
            value: 'tag',
            name: 'Tag 标签'
          }, {
            value: 'progress',
            name: 'Progress 进度条'
          }, {
            value: 'tree',
            name: 'Tree 树形控件'
          }, {
            value: 'pagination',
            name: 'Pagination 分页'
          }, {
            value: 'badge',
            name: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          name: 'Notice',
          children: [{
            value: 'alert',
            name: 'Alert 警告'
          }, {
            value: 'loading',
            name: 'Loading 加载'
          }, {
            value: 'message',
            name: 'Message 消息提示'
          }, {
            value: 'message-box',
            name: 'MessageBox 弹框'
          }, {
            value: 'notification',
            name: 'Notification 通知',
            disabled: true,
          }]
        }, {
          value: 'navigation',
          name: 'Navigation',
          children: [{
            value: 'menu',
            name: 'NavMenu 导航菜单',
            disabled: true,
          }, {
            value: 'tabs',
            name: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            name: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            name: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            name: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          name: 'Others',
          children: [{
            value: 'dialog',
            name: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            name: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            name: 'Popover 弹出框'
          }, {
            value: 'card',
            name: 'Card 卡片'
          }, {
            value: 'carousel',
            name: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            name: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        name: '资源',
        children: [{
          value: 'axure',
          name: 'Axure Components'
        }, {
          value: 'sketch',
          name: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          name: '组件交互文档'
        }]
      }],
      cascaderSelected: [],
      cascaderSelected2: ['zhinan', 'daohang', 'cexiangdaohang'],
      cascaderSelected3: [],
      cascaderSelected4: [],
      cascaderSource3: [],
      carouselSelected: '',
      carouselSelected2: '',
      carouselSelected3: '2',
      menu: '',
      menu2: '1',
      menu3: '1',
      form: {
        username: '',
        password: '',
      },
      username: '',
      rules: {
        username: [{ required: true }],
        password: [{ required: true }],
      },
    };
  },
  methods: {
    // 模拟后台取数据
  
    onSubmit() {
      this.validate(this.form, this.rules);
    },
    onReset() {
      this.error = '';
      this.form.username = '';
      this.form.password = '';
    }
  },
});
