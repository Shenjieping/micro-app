import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/*
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
*/
let instance = null;
function render(props) {
  // props 组件通信
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app') // 这里是挂载到自己的HTML中，基座会拿到这个挂载后的HTML，将其插入进去
}

if (!window.__POWERED_BY_QIANKUN__) { // 如果是独立运行，则手动调用渲染
  render();
}
if(window.__POWERED_BY_QIANKUN__){ // 如果是qiankun使用到了，则会动态注入路径
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 根据 qiankun 的协议需要导出 bootstrap/mount/unmount
export async function bootstrap(props) {

};
export async function mount(props) {
  render(props);
};
export async function unmount(props) {
  instance.$destroy();
};
