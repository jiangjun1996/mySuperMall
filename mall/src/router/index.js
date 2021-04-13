import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Tree from '../components/Tree.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/tree',
            component: Tree
        }
    ]
})

export default router