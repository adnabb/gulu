import { mount } from '@vue/test-utils';
import Collapse from '../src/collapse';
import CollapseItem from '../src/collapse-item';
import Vue from 'vue';

const expect = chai.expect;

Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);

describe('Collapse', () => {
  it('exsit', () => {
    expect(Collapse).to.exist;
    expect(CollapseItem).to.exist;
  });

  describe('props', () => {

    it('接收selected属性', function (done) {
      const wrapper = mount(Collapse, {
        propsData: {
          selected: ['item2', 'item1']
        },
        scopedSlots: {
          default: `<div>
          <g-collapse-item name="item1">item1 content</g-collapse-item>
          <g-collapse-item name="item2">item2 content</g-collapse-item>
          <g-collapse-item name="item3">item3 content</g-collapse-item>
          </div>`
        }
      });

      const { vm } = wrapper;
      let collapse = vm.$el;

      setTimeout(() => {
        const selectedCollapseItem = collapse.querySelectorAll('.active');
        expect(selectedCollapseItem.length).equal(2);
        expect(selectedCollapseItem[0].getAttribute('data-name')).equal('item1');
        expect(selectedCollapseItem[1].getAttribute('data-name')).equal('item2');
        removeTestVM(vm);
        done();
      }, 1000);

    });
    it('接收single属性', function (done) {
      const wrapper = mount(Collapse, {
        propsData: {
          single: true,
          selected: 'item2'
        },
        scopedSlots: {
          default: `<div>
          <g-collapse-item name="item1">item1 content</g-collapse-item>
          <g-collapse-item name="item2">item2 content</g-collapse-item>
          <g-collapse-item name="item3">item3 content</g-collapse-item>
          </div>`
        }
      });

      const { vm } = wrapper;
      let collapse = vm.$el;
      const collapseItem1Header = collapse.querySelector('[data-name="item1"]').querySelector('.g-collpase-item-header');
      collapseItem1Header.click();

      setTimeout(() => {
        const selectedCollapseItem = collapse.querySelectorAll('.active');
        expect(selectedCollapseItem.length).equal(1);
        expect(selectedCollapseItem[0].getAttribute('data-name')).equal('item1');
        removeTestVM(vm);
        done();
      }, 1000);

    });
    it('触发update:selected事件', function (done) {
      const div = document.createElement('div');
      document.body.appendChild(div);
      div.innerHTML = `
        <g-collapse :selected="selected" @update:selected="onSelect">
        <g-collapse-item name="item1">item1 content</g-collapse-item>
        <g-collapse-item name="item2">item2 content</g-collapse-item>
        <g-collapse-item name="item3">item3 content</g-collapse-item>
        </g-collapse>
    `;
      const callback = sinon.fake();
      const vm = new Vue({
        el: div,
        data: {
          selected: 'item1'
        },
        methods: {
          onSelect: callback
        }
      });

      let collapse = vm.$el;

      const collapseItem1Header = collapse.querySelector('[data-name="item2"]').querySelector('.g-collpase-item-header');
      collapseItem1Header.click();

      setTimeout(() => {
        const selectedCollapseItem = collapse.querySelectorAll('.active');
        expect(callback).to.have.been.called;
        removeTestVM(vm);
        done();
      }, 1000);
    });
  });
});

function removeTestVM(vm) {
  vm.$el.remove();
  vm.$destroy();
}