import { mount } from '@vue/test-utils';
import Popover from '../src/popover';

const expect = chai.expect;

describe('Popover', () => {
  it('exsit', () => {
    expect(Popover).to.exist;
  });

  describe('props', () => {

    it ('接收position属性，支持不同方向的定位', () => {
      const positionList = ['top', 'bottom', 'left', 'right'];

      positionList.forEach((position) => {
        const wrapper = mount(Popover, {
          propsData: {
            position,
          },
        });
  
        const { vm } = wrapper;
        const popover = document.querySelector(`.popover-position-${position}`);
        expect(popover).to.exist;

        vm.$el.remove();
        popover.remove();
      });
    });

    describe('接收trigger，支持不同的触发方式', () => {
      it ('支持click触发', (done) => {
        const wrapper = mount(Popover, {
          propsData: {
            trigger: 'click',
          },
          slots: {
            default: '<button>点我</button>'
          },
        });
  
        const { vm } = wrapper;
        const reference = vm.$refs.reference;
        const event = new Event('click');
        reference.dispatchEvent(event);
       
        vm.$nextTick(() => {
          expect(vm.$refs.popover.style.display).to.eq('');
          done();
        });

      });

      it ('支持hover触发', (done) => {
        const wrapper = mount(Popover, {
          propsData: {
            trigger: 'hover',
          },
          slots: {
            default: '<button>点我</button>'
          },
        });
  
        const { vm } = wrapper;
        const reference = vm.$refs.reference;
        const mouseoverEvent = new Event('mouseover');
        const mouseoutEvent = new Event('mouseout');
        reference.dispatchEvent(mouseoverEvent);
        vm.$nextTick(() => {
          expect(vm.$refs.popover.style.display).to.eq('');
        });

        reference.dispatchEvent(mouseoutEvent);
        setTimeout(() => {
          expect(vm.$refs.popover.style.display).to.eq('none');
          done();
        }, 1000);

      });
    });
  });
})