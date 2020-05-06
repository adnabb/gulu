const list = [];
document.addEventListener('click', (e) => {
  list.forEach((item) => {
    if (!item.el.contains(e.target)) item.callback();
  });
});
export default {
  bind: function (el, binding) {
    list.push({el, callback: binding.value})
  }
};