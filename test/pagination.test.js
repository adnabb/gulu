import { mount } from '@vue/test-utils';
import Pagination from '../src/pagination';

const expect = chai.expect;

describe('Pagination', () => {
  it('exsit', () => {
    expect(Pagination).to.exist;
  });
  it('默认展示第一页', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        total: 3
      }
    });
    const active = wrapper.find('.active').attributes()['data-index'];
    expect(active).to.equal('1');
  });
  it('可以展示总数量', () => {
    const wrapper = mount(Pagination, {
      propsData: {
        total: 3,
        totalVisible: true
      }
    });
    const active = wrapper.find('.g-pagination-total');
    expect(active.text()).to.equal('共3条');
  });
  it('点击哪一页就切换为哪一页', (done) => {
    const wrapper = mount(Pagination, {
      propsData: {
        total: 90
      },
      listeners: {
        'change': (page) => {
          expect(page).to.equal(9);
          done();
        }
      }
    });
    const page2 = wrapper.vm.$el.querySelector('[data-index="9"]');
    page2.click();
  });
  it('点击下一页，页码切换为下一页', (done) => {
    const wrapper = mount(Pagination, {
      propsData: {
        total: 90
      },
      listeners: {
        'change': (page) => {
          expect(page).to.equal(2);
          done();
        }
      }
    });
    const next = wrapper.vm.$el.querySelector('.next');
    next.click();
  });
  it('点击上一页，页码切换为上一页', (done) => {
    let n = 0;
    const wrapper = mount(Pagination, {
      propsData: {
        total: 90
      },
      listeners: {
        'change': (page) => {
          n += 1;
          if (n == 2) {
            expect(page).to.equal(1);
            done();
          }
        }
      }
    });
    const next = wrapper.vm.$el.querySelector('.next');
    next.click();
    setTimeout(() => {
      const prev = wrapper.vm.$el.querySelector('.previous');
      prev.click();
    }, 0);
  });
});