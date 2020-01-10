import Vue from 'vue';
import Button from '../src/button';

Vue.config.productionTip = false;
Vue.config.devTools = false;

const expect = chai.expect;

describe('Button', () => {
  it('存在', () => {
    expect(Button).to.exist;
  });

  it('可以设置Icon', () => {
    const vm = getRenderedVM(Button, {
      icon: 'download'
    });

    const use = vm.$el.querySelector('use');
    const href = use.getAttribute('xlink:href');

    expect(href).to.equal('#g-download');

    removeTestVM(vm);
  });

  it('可以设置loading', () => {
    const vm = getRenderedVM(Button, {
      icon: 'download',
      loading: true
    });

    const use = vm.$el.querySelector('use');
    const href = use.getAttribute('xlink:href');

    expect(href).to.equal('#g-loading');

    removeTestVM(vm);
  });

  it('icon默认为order为1', () => {
    const div = appendTestDom();

    const vm = getRenderedVM(Button, {
      icon: 'download',
      iconPosition: 'left'
    }, div);

    const svg = vm.$el.querySelector('svg');
    const { order } = window.getComputedStyle(svg);

    expect(order).to.equal('1');

    removeTestVM(vm);
  });

  it('icon可以根据iconPosition改变order', () => {
    const div = appendTestDom();

    const vm = getRenderedVM(Button, {
      icon: 'download',
      iconPosition: 'right'
    }, div);
  
    const svg = vm.$el.querySelector('svg');
    const { order } = window.getComputedStyle(svg);
  
    expect(order).to.equal('2');
  
    removeTestVM(vm);
  });

  it('可以点击button触发click事件', () => {
    const div = appendTestDom();

    const vm = getRenderedVM(Button, {
      icon: 'download',
    }, div);
  
    const callback = sinon.fake();
  
    vm.$on('click', callback);
  
    vm.$el.click();
  
    expect(callback).to.have.been.called;
  
    removeTestVM(vm);
  })
});

function getRenderedVM(component, propsData, mountDom) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor({ propsData: propsData }).$mount(mountDom);

  return vm;
}

function removeTestVM(vm) {
  vm.$el.remove();
  vm.$destroy();
}

function appendTestDom() {
  const div = document.createElement('div');
  document.body.append(div);

  return div;
}
