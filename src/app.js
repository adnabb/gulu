import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
    }
  },
});

// unit test

import Chai from 'chai';
import Spies from 'chai-spies';

Chai.use(Spies);

const expect = Chai.expect;

function getRenderedVM(component, propsData, mountDom) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor({ propsData: propsData}).$mount(mountDom);

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

// 创建一个有icon的按钮
{
  const vm = getRenderedVM(Button, {
    icon: 'download'
  });

  const use = vm.$el.querySelector('use');
  const href = use.getAttribute('xlink:href');

  expect(href).to.equal('#g-download');

  removeTestVM(vm);
}

// 创建一个带loading状态的按钮
{
  const vm = getRenderedVM(Button, {
    icon: 'download',
    loading: true
  });

  const use = vm.$el.querySelector('use');
  const href = use.getAttribute('xlink:href');

  expect(href).to.equal('#g-loading');

  removeTestVM(vm);
}

// 创建一个icon在左边的按钮

{
  const div = appendTestDom();

  const vm = getRenderedVM(Button, {
    icon: 'download',
    iconPosition: 'left'
  }, div);

  const svg = vm.$el.querySelector('svg');
  const { order } = window.getComputedStyle(svg);

  expect(order).to.equal('1');

  removeTestVM(vm);
}

// 创建一个icon在右边的按钮

{
  const div = appendTestDom();

  const vm = getRenderedVM(Button, {
    icon: 'download',
    iconPosition: 'right'
  }, div);

  const svg = vm.$el.querySelector('svg');
  const { order } = window.getComputedStyle(svg);

  expect(order).to.equal('2');

  removeTestVM(vm);
}

// 创建一个有点击事件的按钮

{
  const div = appendTestDom();

  const vm = getRenderedVM(Button, {
    icon: 'download',
  }, div);

  const spy = Chai.spy(function() {});

  vm.$on('click', spy);

  vm.$el.click();

  expect(spy).to.have.been.called();

  removeTestVM(vm);
}

