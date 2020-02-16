import Vue from 'vue';
import { mount } from '@vue/test-utils';
import Tabs from '../src/tabs';
import TabPane from '../src/tab-pane';

const expect = chai.expect;

Vue.component('g-tabs', Tabs);
Vue.component('g-tab-pane', TabPane);

describe('Tabs', () => {
  it('tabs exsit', () => {
    expect(Tabs).to.exist;
  });

  describe('props', () => {
    it('defaultActiveId', (done) => {
      const wrapper = mount(Tabs, {
        propsData: {
          defaultActiveId: '2'
        },
        scopedSlots: {
          default: `<div>
            <g-tab-pane tab="tab1" id="1" >pane1</g-tab-pane>
            <g-tab-pane tab="tab2" id="2" >pane2</g-tab-pane>
          </div>`
        }
      });

      const { vm } = wrapper;
      const tab = vm.$el;
      setTimeout(() => {
        const activeTab = tab.querySelector('.g-tabs-nav.active');
        expect(activeTab.innerText).to.eq('tab2');
        done();
      }, 2000)

    }).timeout(3000);

    it('tabPosition', () => {
      const positions = ['top', 'right', 'bottom', 'left'];

      positions.forEach((position) => {
        const wrapper = mount(Tabs, {
          propsData: {
            tabPosition: position
          }
        });

        const { vm } = wrapper;
        const tab = vm.$el;

        expect(tab.classList.contains(`tab-position-${position}`)).to.eq(true);

        vm.$destroy();
        vm.$el.remove();
      })
    });
  })

  describe('children tabPane', () => {
    it('tabPane exsit', () => {
      expect(TabPane).to.exist;
    });

    describe('props', () => {
      it('tab & id', (done) => {
        const wrapper = mount(Tabs, {
          propsData: {
            defaultActiveId: '2'
          },
          scopedSlots: {
            default: `<div>
              <g-tab-pane tab="tab1" id="1" >pane1</g-tab-pane>
              <g-tab-pane tab="tab2" id="2" >pane2</g-tab-pane>
            </div>`
          }
        });
  
        const { vm } = wrapper;
        const tabs = vm.tabs;
        setTimeout(() => {
          expect(tabs[0].id).to.eq('1');
          done();
        }, 1000)
      });

      it('disabled', (done) => {
        const wrapper = mount(Tabs, {
          propsData: {
            defaultActiveId: '2'
          },
          scopedSlots: {
            default: `<div>
              <g-tab-pane tab="tab1" :disabled="true" id="1" >pane1</g-tab-pane>
              <g-tab-pane tab="tab2" id="2" >pane2</g-tab-pane>
            </div>`
          }
        });
  
        const { vm } = wrapper;
        
        setTimeout(() => {
          const disabledTab = vm.$el.querySelector('.g-tabs-nav.disabled');
          expect(disabledTab).to.exist;
          done();
        }, 1000)
      });
    })
  });
})