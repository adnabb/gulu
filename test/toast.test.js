import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Toast from '../src/toast';

const expect = chai.expect;

describe('Toast', () => {
  it('exsit', () => {
    expect(Toast).to.exist;
  });

  describe('props', () => {

    it('接收autoClose和duration属性', function(done){
      const wrapper = mount(Toast, {
        propsData: {
          autoClose: true,
          duration: 1,
        },
      });

      const { vm } = wrapper;
      let toast = vm.$el;

      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      })

    });

    it('接收text属性', () => {

      const propText = 'toast text';
      /**
       * toast组件内的porp text的赋值是用slot写的
       */
      const wrapper = mount(Toast, {
        slots: {
          default: propText,
        },
      });

      const { vm } = wrapper;
      const toast = vm.$el;

      const toastTextDom = toast.querySelector('.g-toast-text');
      const toastText = toastTextDom.innerText;

      expect(toastText).to.eq(propText);

      removeTestVM(vm);
    });

    it('接收customCloseText属性', () => {

      const closeText = '关闭';
      const wrapper = mount(Toast, {
        propsData: {
          customCloseText: closeText,
        },
      });

      const { vm } = wrapper;
      const toast = vm.$el;

      const toastCustomButton = toast.querySelector('.custom-close');
      const toastCustomButtonText = toastCustomButton.innerText;

      expect(toastCustomButtonText).to.eq(closeText);

      removeTestVM(vm);
    });

    it('接收htmlSuport属性', () => {
      const htmlText = '<i>toast text</i>';
      const wrapper = mount(Toast, {
        propsData: {
          htmlSuport: true,
          text: htmlText,
        },
      });

      const { vm } = wrapper;
      const toast = vm.$el;

      const toastTextDom = toast.querySelector('.g-toast-text');
      const toastText = toastTextDom.innerHTML;

      expect(toastText).to.eq(htmlText);

      removeTestVM(vm);

    });

    it('接收position属性', () => {

      const wrapper = mount(Toast, {
        propsData: {
          position: 'top',
        },
      });

      const { vm } = wrapper;
      const toast = vm.$el;

      const toastClass = Array.from(toast.classList);

      expect(toastClass).to.include('g-toast-top');

      removeTestVM(vm);
    });
  });
});

function removeTestVM(vm) {
  vm.$el.remove();
  vm.$destroy();
}