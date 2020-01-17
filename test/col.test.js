import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Row from '../src/row';
import Col from '../src/col';

const expect = chai.expect;

describe('Col', () => {
  it('exsit', () => {
    expect(Col).to.exist;
  });

  describe('props', () => {
    it('接收span属性', () => {

      const wrapper = mount(Col, {
        propsData: {
          span: 12,
        },
      });

      const { vm } = wrapper;
      const col = vm.$el;

      const colClass = Array.from(col.classList);

      expect(colClass).to.include('col-span-12');
    });

    it('接收offset属性', () => {
      const wrapper = mount(Col, {
        propsData: {
          offset: 12,
        },
      });

      const { vm } = wrapper;
      const col = vm.$el;

      const colClass = Array.from(col.classList);

      expect(colClass).to.include('col-offset-12');
    });

    it('接收phone/ipad/narrowPc/pc/widePc等属性', () => {
      const list = ['phone', 'ipad', 'narrowPc', 'pc', 'widePc'];
      const strs = ['phone', 'ipad', 'narrow-pc', 'pc', 'wide-pc'];

      list.forEach((item, index) => {
        const propObj = {};

        propObj[item] = {
          'span': 1,
          'offset': 23,
        };

        const wrapper = mount(Col, {
          propsData: propObj,
        });

        const { vm } = wrapper;
        const col = vm.$el;

        const colClass = Array.from(col.classList);

        expect(colClass).to.include(`col-${strs[index]}-span-1`);
        expect(colClass).to.include(`col-${strs[index]}-offset-23`);
      })
    })
  })
});