// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';
import seller from './components/seller/seller';
import ratings from './components/ratings/ratings';

Vue.use(VueRouter);

var routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

//创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

//=> 是ES6的箭头语法
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
