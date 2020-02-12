import Toast from './toast';

let MyPlugin = {};

MyPlugin.install = function (Vue, options) {
  let curentToast;

  Vue.prototype.$toast = function (text, toastOptions = {}) {

    if (curentToast) { curentToast.close() }

    if (typeof text === 'string') {
      toastOptions = { ...toastOptions, text }
    } else if (typeof text === 'object') {
      toastOptions = { ...toastOptions, ...text }
    }

    curentToast = createToast({
      Vue, propsData: toastOptions, onClose: function () {
        curentToast = null;
      }
    });
  }
}

function createToast({ Vue, propsData, onClose }) {
  const toastWraper = document.createElement('div');
  const toastDiv = document.createElement('div');

  toastWraper.append(toastDiv);

  const Constructor = Vue.extend(Toast);
  const vm = new Constructor({ propsData });
  vm.$slots.default = propsData.text;
  vm.$mount(toastDiv);

  vm.$on('close', onClose)

  document.body.append(toastWraper);

  return vm;
}

export default MyPlugin;
