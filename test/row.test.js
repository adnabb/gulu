import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Row from '../src/row';
import Col from '../src/col';

const expect = chai.expect;

describe('Row', () => {
  it('exsit', () => {
    expect(Row).to.exist;
  });

  describe('props', () => {
    it('接收gutters属性', () => {
      const gutter = 20;

      const wrapper = mount(Row, {
        slots: {
          default: [Col, Col],
        },
        propsData: {
          gutter,
        },
      });

      const { vm } = wrapper;
      const row = vm.$el;
      const col = row.querySelectorAll('.g-col');

      const rowMarginLeft = row.style.marginLeft;
      const rowMarginRight = row.style.marginRight;
      const colMarginLeft0 = col[0].style.marginLeft;
      const colMarginLeft1 = col[1].style.marginLeft;
      const colMarginRight0 = col[0].style.marginRight;
      const colMarginRight1 = col[1].style.marginRight;

      expect(rowMarginLeft).to.eq(`-${gutter / 2}px`);
      expect(rowMarginRight).to.eq(`-${gutter / 2}px`);
      expect(colMarginLeft0).to.eq(`${gutter / 2}px`);
      expect(colMarginLeft1).to.eq(`${gutter / 2}px`);
      expect(colMarginRight0).to.eq(`${gutter / 2}px`);
      expect(colMarginRight1).to.eq(`${gutter / 2}px`);
    });

    it('接收align属性', () => {
      const div = document.createElement('div');
      document.body.appendChild(div);
      const Constructor = Vue.extend(Row);

      const vm = new Constructor({
        propsData: {
          align: 'right'
        }
      }).$mount(div);

      const row = vm.$el;
      expect(getComputedStyle(row).justifyContent).to.equal('flex-end');

      div.remove()
      vm.$destroy()
    })
  })
});