import Vue from 'vue';
import Input from '../src/input';

Vue.config.productionTip = false;
Vue.config.devtools = false;

const expect = chai.expect;

describe('Input', () => {

  it('存在', () => {
    expect(Input).to.exist;
  });

  describe('props', () => {
    let vm, Constructor;
    beforeEach(() => {
      Constructor = Vue.extend(Input);
    });

    afterEach(() => {
      vm.$destroy();
    });

    it('添加value', () => {
      vm = new Constructor({ propsData: { value: '123' } }).$mount();

      const inputElement = vm.$el.querySelector('input');
      const value = inputElement.value;

      expect(value).to.eq('123');
    });

    it('添加placeholder', () => {
      vm = new Constructor({ propsData: { placeholder: '请填写' } }).$mount();

      const inputElement = vm.$el.querySelector('input');
      const placeholder = inputElement.getAttribute('placeholder');

      expect(placeholder).to.eq('请填写');
    });

    it('添加disabled', () => {
      vm = new Constructor({ propsData: { disabled: true } }).$mount();

      const inputElement = vm.$el.querySelector('input');
      const disabled = inputElement.getAttribute('disabled');

      expect(disabled).to.eq('disabled');
    });

    it('添加readonly', () => {
      vm = new Constructor({ propsData: { readonly: true } }).$mount();

      const inputElement = vm.$el.querySelector('input');
      const readonly = inputElement.getAttribute('readonly');

      expect(readonly).to.eq('readonly');
    });

    it('添加error', () => {
      vm = new Constructor({ propsData: { error: '请填写数字' } }).$mount();

      const use = vm.$el.querySelector('use');
      const href = use.getAttribute('xlink:href');

      const errorMessage = vm.$el.querySelector('span.error-tips').innerText;

      expect(href).to.equal('#g-info');
      expect(errorMessage).to.equal('请填写数字');
    });

  });

  describe('events', () => {
    let vm, Constructor;
    beforeEach(() => {
      Constructor = Vue.extend(Input);
    });

    afterEach(() => {
      vm.$destroy();
    });

    it('添加change\input\blur\focus事件', () => {
      const events = ['change', 'input', 'blur', 'focus'];

      events.forEach((eventName) => {
        vm = new Constructor().$mount();

        const callback = sinon.fake();

        vm.$on(eventName, callback);

        const event = new Event(eventName);
        Object.defineProperty(event, 'target', {
          enumerable: true,
          configurable: false,
          writable: true,
          value: {
            value: '123'
          },
        });

        const inputElement = vm.$el.querySelector('input');
        inputElement.dispatchEvent(event);

        expect(callback).to.have.been.calledWith('123');
      });
    });
  })
});

