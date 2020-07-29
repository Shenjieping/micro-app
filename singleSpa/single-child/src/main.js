import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'

Vue.config.productionTip = false

/* new Vue({
  router,
  render: h => h(App)
}).$mount('#app') */

const appOptions = {
  el: '#vue', // 挂载到父应用中的 id 为 vue 的标签中
  router,
  render: h => h(App)
}

const vueLifeCycle = singleSpaVue({ // 返回single-spa 的生命周期也就是 bootstrap/mount/unmount
  Vue,
  appOptions
});

// 设置路径
if (window.singleSpaNavigate) { // 如果是父应用去应用，那会自动挂载一个属性为true
  __webpack_public_path__ = 'http://localhost:10000/'
}

// 希望子应用可以独立运行
if(!window.singleSpaNavigate){
  delete appOptions.el; // 子应用中没有#vue，所以需要手动删除，挂载到 #app 中
  new Vue(appOptions).$mount('#app');
}

// single规定的协议，父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap; // 加载前调用
export const mount = vueLifeCycle.mount; // 挂载子应用调用
export const unmount = vueLifeCycle.unmount; // 卸载子应用调用
// 这样做还有一个严重的问题，子应用无法启动了？？

/* 
  我们需要父应用加载子应用，需要暴露三个方法，将子应用打包成一个个的lib去给父应用使用
  1. bootstrap
  2. mount
  3. unmount
 */