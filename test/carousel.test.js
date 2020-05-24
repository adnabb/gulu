import { mount } from '@vue/test-utils';
import Carousel from '../src/carousel';
import CarouselItem from '../src/carousel-item';
import Vue from 'vue';

Vue.component('g-carousel-item', CarouselItem);
Vue.component('GCarouselItem', CarouselItem);

const expect = chai.expect;

describe('Carousel', () => {
  it('exsit', () => {
    expect(Carousel).to.exist;
    expect(CarouselItem).to.exist;
  });
  it('接受组件g-carousel-item，默认展示第一个', (done) => {
    let wrapper;
    wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false
      },
      slots: {
        default: `
            <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
            <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
            <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
          `
      },
      listeners: {
        'update:selected': function (value) {
          setTimeout(() => {
            wrapper.setProps({ selected: value });
            setTimeout(() => {
              expect(wrapper.find('.g-carousel-item')).to.exist;
              expect(wrapper.find('.box1')).to.exist;
              done();
            }, 100);
          }, 0);
        }
      }
    });
  });
  it('点击下标，selected的值就为下标对应的内容的name', (done) => {
    let n = 0;
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false
      },
      slots: {
        default: `
            <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
            <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
            <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
          `
      },
      listeners: {
        'update:selected': function (value) {
          n += 1;
          // 第二次才会触发改变
          if (n === 2) {
            expect(value).to.eql('3');
            done();
          }
        }
      }
    });
    wrapper.vm.$nextTick(() => {
      wrapper.find('[data-index="2"]').trigger('click');
    });
  });
  describe('props', () => {
    it('接受selected，name为selected的内容会被展示', (done) => {
      const wrapper = mount(Carousel, {
        propsData: {
          autoPlay: false,
          selected: '3',
        },
        slots: {
          default: `
            <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
            <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
            <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
          `
        },
      });
      setTimeout(() => {
        expect(wrapper.find('.g-carousel-item')).to.exist;
        expect(wrapper.find('.box3')).to.exist;
        done();
      }, 100);
    });
    it('接受autoPlay，可以自动播放', (done) => {
      let wrapper;
      wrapper = mount(Carousel, {
        propsData: {
          autoPlay: true,
          delay: 300
        },
        slots: {
          default: `
              <g-carousel-item name="1"><div class="box1">1</div></g-carousel-item>
              <g-carousel-item name="2"><div class="box2">2</div></g-carousel-item>
              <g-carousel-item name="3"><div class="box3">3</div></g-carousel-item>
            `
        },
        listeners: {
          'update:selected': function (value) {
            setTimeout(() => {
              wrapper.setProps({ selected: value });
              setTimeout(() => {
                expect(wrapper.find('.g-carousel-item')).to.exist;
                expect(wrapper.find('.box3')).to.exist;
                done();
              }, 700);
            }, 0);
          }
        }
      });
    });
  });
});