import { mount } from '@vue/test-utils';
import Cascader from '../src/cascader';

const expect = chai.expect;

describe('Cascader', () => {
  it('exsit', () => {
    expect(Cascader).to.exist;
  });
  it('点击输入框可以触发级联列表的显示隐藏', (done) => {
    const wrapper = mount(Cascader, {
      propsData: {
        source: [],
        selected: [],
      },
    });
    const { vm } = wrapper;
    const triggerDom = vm.$el.querySelector('.g-cascader-trigger');
    let listDom = vm.$el.querySelector('.g-cascader-list-container');
    // 点击显示
    expect(listDom).to.be.null;
    triggerDom.click();
    vm.$nextTick(() => {
      listDom = vm.$el.querySelector('.g-cascader-list-container');
      expect(listDom).to.exist;
      // 点击隐藏
      triggerDom.click();
      vm.$nextTick(() => {
        listDom = vm.$el.querySelector('.g-cascader-list-container');
        expect(listDom).to.be.null;
        done();
      });
    });
  });
  describe('props', () => {
    it('接收source和selected属性', (done) => {
      const source = [{
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
      }];
      let selected = [];
      const wrapper = mount(Cascader, {
        propsData: {
          source,
          selected
        },
      });
      const { vm } = wrapper;
      // selected元素更新后强制更新wrapper
      vm.$on('update:selected', (value) => {
        selected = value;
        wrapper.setProps({ selected: value });
      });
      const triggerDom = vm.$el.querySelector('.g-cascader-trigger');
      // 点击触发器，出现列表
      triggerDom.click();
      vm.$nextTick(() => {
        // 出现第一层列表
        let level1Dom = vm.$el.querySelector('.g-cascader-list-container');
        const level1Items = level1Dom.querySelectorAll('.g-cascader-item-name');
        // 点击level1的第一个item元素（该元素有children）
        level1Items[0].click();
        expect(selected[0].name).to.eql(level1Items[0].innerText);
        vm.$nextTick(() => {
          // 出现第二层列表
          const level2Dom = vm.$el.querySelector('.g-cascader-selected-children');
          const level2Selected = level2Dom.querySelectorAll('.g-cascader-item-name')[1];
          level2Selected.click();
          expect(selected[1].name).to.eql(level2Selected.innerText);
          vm.$nextTick(() => {
            // 出现第三次列表
            const level3Dom = vm.$el.querySelector('.g-cascader-selected-children .g-cascader-selected-children');
            const level3Selected = level3Dom.querySelectorAll('.g-cascader-item-name')[0];
            level3Selected.click();
            expect(selected[2].name).to.eql(level3Selected.innerText);
            vm.$nextTick(() => {
              // 点击最后一层后，列表关闭
              const listDom = vm.$el.querySelector('.g-cascader-list-container');
              expect(listDom).to.be.null;
              done();
            });
          });
        });
      });
    });
    it('接收loadData属性', (done) => {
      const source = [{
        value: 'zhinan',
        name: '指南',
      }, {
        value: 'zhinan2',
        name: '指南2',
      }];
      const loadData = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(source);
          }, 0);
        });
      };
      const wrapper = mount(Cascader, {
        propsData: {
          loadData,
        },
      });
      const { vm } = wrapper;
      const triggerDom = vm.$el.querySelector('.g-cascader-trigger');
      // 点击触发器，出现列表
      triggerDom.click();
      // selected元素更新后强制更新wrapper
      vm.$on('update:source', (value) => {
        wrapper.setProps({ source: value });
        vm.$nextTick(() => {
          expect(vm.source).to.eql(source);
          done();
        })
      });
    });
  });
});