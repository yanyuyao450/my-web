import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './route/routes.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)

//register dependency
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    next();
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
