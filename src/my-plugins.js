import Toast from './toast';

let MyPlugin = {};

MyPlugin.install = function (Vue, options) {
  let curentToast;

  Vue.prototype.$toast = function (toastOptions) {

    if (curentToast) { closeToast(curentToast) }
    
    const toastWraper = document.createElement('div');
    const toastDiv = document.createElement('div');

    toastWraper.append(toastDiv);
    document.body.append(toastWraper);
    
    const Constructor = Vue.extend(Toast);
    const vm = new Constructor({ propsData: toastOptions });
    vm.$slots.default = toastOptions.text;
    vm.closeToast = closeToast;
    vm.$mount(toastDiv);
    curentToast = vm;

    if (vm.autoClose) { setTimeout(() => { closeToast(vm) }, vm.duration * 1000); }

    function closeToast(vm) { vm.$el.remove(); vm.$destroy(); curentToast = null; }
  }
}

export default MyPlugin;
