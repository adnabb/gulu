import { mount } from '@vue/test-utils';
import Menu from '../src/menu/index';
import MenuItem from '../src/menu/menu-item';
import Submenu from '../src/menu/submenu';
import Vue from 'vue';

Vue.component('g-menu-item', MenuItem);
Vue.component('g-submenu', Submenu);

const expect = chai.expect;

describe('Menu', () => {
  it('exsit ', () => {
    expect(Menu).to.exist;
    expect(MenuItem).to.exist;
    expect(Submenu).to.exist;
  });
  describe('props', () => {
    it('接收selected属性，默认选中第一个菜单', (done) => {
      mount(Menu, {
        propsData: {
          selected: '',
        },
        slots: {
          default: `
          <g-menu-item name="1">menu 1</g-menu-item>
          <g-menu-item name="2">menu 2</g-menu-item>
          <g-menu-item name="3">menu 3</g-menu-item>
          `
        },
        listeners: {
          'update:selected': function (value) {
            expect(value).to.equal('1');
            done();
          }
        }
      });
    });
    it('接收selected属性（无子菜单），点击哪个菜单就会选中哪个菜单', (done) => {
      let n = 0;
      const wrapper = mount(Menu, {
        propsData: {
          selected: '',
        },
        slots: {
          default: `
          <g-menu-item name="1">menu 1</g-menu-item>
          <g-menu-item class="box" name="2">menu 2</g-menu-item>
          <g-menu-item name="3">menu 3</g-menu-item>
          `
        },
        listeners: {
          'update:selected': function (value) {
            n += 1;
            if (n === 2) {
              expect(value).to.deep.equal(['2']);
              done();
            }
          }
        }
      });
      const box = wrapper.find('.box');
      box.vm.$el.click();
    });
    it('接收selected属性（含子菜单），默认展示子菜单', (done) => {
      const wrapper = mount(Menu, {
        propsData: {
          selected: ['2', '2-2'],
        },
        slots: {
          default: `
          <g-menu-item name="1">menu 1</g-menu-item>
          <g-submenu name="2" class="box-container">
              <template slot="name">
                  menu 2
              </template>
              <g-menu-item name="2-1">menu 2-1</g-menu-item>
              <g-menu-item name="2-2" class="box">menu 2-2</g-menu-item>
              <g-menu-item name="2-3">menu 2-3</g-menu-item>
              <g-menu-item name="2-4">menu 2-4</g-menu-item>
          </g-submenu>
          `
        },
      });
      const { vm } = wrapper;
      let boxContainer = wrapper.find('.box-container').vm.$el;
      let boxHeader = boxContainer.querySelector('.g-submenu-title');
      boxHeader.click();
      vm.$nextTick(() => {
        boxContainer = wrapper.find('.box-container').vm.$el
        const box = boxContainer.querySelector('.box');
        expect(box.classList.contains('active')).to.be.true;
        done();
      })
    });
    it('接收selected属性（含子菜单），点击会展开子菜单', (done) => {
      const wrapper = mount(Menu, {
        propsData: {
          selected: '',
        },
        slots: {
          default: `
          <g-menu-item name="1">menu 1</g-menu-item>
          <g-submenu name="2" class="box-container">
              <template slot="name">
                  menu 2
              </template>
              <g-menu-item name="2-1">menu 2-1</g-menu-item>
              <g-menu-item name="2-2" class="box">menu 2-2</g-menu-item>
              <g-menu-item name="2-3">menu 2-3</g-menu-item>
              <g-menu-item name="2-4">menu 2-4</g-menu-item>
          </g-submenu>
          `
        },
      });
      const { vm } = wrapper;
      let boxContainer = wrapper.find('.box-container').vm.$el;
      let boxHeader = boxContainer.querySelector('.g-submenu-title');
      boxHeader.click();
      vm.$nextTick(() => {
        boxContainer = wrapper.find('.box-container').vm.$el
        const box = boxContainer.querySelector('.box');
        expect(box).to.exist;
        done();
      })
    });
    it('接收selected属性（含子菜单），选中子菜单的叶子节点，selected会变成相应层级的name拼接的数组', (done) => {
      let n = 0;
      const wrapper = mount(Menu, {
        propsData: {
          selected: '',
        },
        slots: {
          default: `
          <g-menu-item name="1">menu 1</g-menu-item>
          <g-submenu name="2" class="box-container">
              <template slot="name">
                  menu 2
              </template>
              <g-menu-item name="2-1">menu 2-1</g-menu-item>
              <g-menu-item name="2-2" class="box">menu 2-2</g-menu-item>
              <g-menu-item name="2-3">menu 2-3</g-menu-item>
              <g-menu-item name="2-4">menu 2-4</g-menu-item>
          </g-submenu>
          `
        },
        listeners: {
          'update:selected': function (value) {
            n += 1;
            if (n === 2) {
              expect(value).to.deep.equal(['2', '2-2']);
              done();
            }
          }
        }
      });
      const { vm } = wrapper;
      let boxContainer = wrapper.find('.box-container').vm.$el;
      let boxHeader = boxContainer.querySelector('.g-submenu-title');
      boxHeader.click();
      vm.$nextTick(() => {
        boxContainer = wrapper.find('.box-container').vm.$el
        const box = boxContainer.querySelector('.box');
        box.click();
      })
    });
  });
});