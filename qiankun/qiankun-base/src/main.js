import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {registerMicroApps, start} from 'qiankun';

Vue.config.productionTip = false
Vue.use(ElementUI);

const apps = [
  {
    name: 'vueApp', // 应用的名字
    entry: 'http://localhost:10000/', // 默认加载这个html，解析里面的js动态的执行（子应用必须支持跨域，内部使用的是 fetch）
    container: '#vue', // 要渲染到的容器名id
    activeRule: '/vue' // 通过哪一个路由来激活
  },
  {
    name: 'reactApp',
    entry: 'http://localhost:20000/',
    container: '#react',
    activeRule: '/react'
  },
  {
    name: 'jqApp',
    entry: 'http://localhost:5501/qiankun/qiankun-jq/',
    container: '#jq',
    activeRule: '/jq',
    props: {a: 1} // 父应用向子应用传递参数
  }
];

registerMicroApps(apps); // 注册应用
start(); // 开启应用

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
