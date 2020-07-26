import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

Vue.config.productionTip = false

async function loadScript(url) { // 异步加载子组件中的脚本
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

registerApplication(
  'myVueApp',
  async () => {
    console.log('加载模块');
    // 加载脚本
    await loadScript(`http://localhost:10000/js/chunk-vendors.js`)
    await loadScript(`http://localhost:10000/js/app.js`)
    // 这里需要要返回 bootstrap/mount/unmount
    return window.singleVue
  },
  location => location.pathname.startsWith('/vue'), // 此路径用来判断当前路由切换到 /vue 的路径下，需要加载我们定义的子应用
  { a: 1 } // 选传，传给子应用 props 的参数，可以是对象或值
);

start(); // 启动应用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
