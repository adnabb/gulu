import Toast from './toast';

let MyPlugin = {};

MyPlugin.install = function (Vue, options) {
  let curentToast;

  Vue.prototype.$toast = function (toastOptions) {

    if (curentToast) { closeToast(curentToast) }
    
    const div = document.createElement('div');
    document.body.append(div);
    
    const Constructor = Vue.extend(Toast);
    const vm = new Constructor({ propsData: toastOptions });
    vm.$slots.default = toastOptions.text;
    vm.closeToast = closeToast;
    vm.$mount(div);
    curentToast = vm;

    if (vm.autoClose) { setTimeout(() => { destroy(vm) }, vm.duration * 1000); }

    function closeToast(vm) { vm.$el.remove(); vm.$destroy(); curentToast = null; }
  }
}

export default MyPlugin;
