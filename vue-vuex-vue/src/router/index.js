import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Second from '@/components/Second'
import Thirt from '@/components/Thirt'
import Fourth from '@/components/Fourth'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'hello页✌',
            component: HelloWorld,
            meta: { requiresAuth: true }
        },
        {
            path: '/First',
            name: '第一页✌',
            component: First,
            meta: { requiresAuth: false }
        },
        {
            path: '/Second',
            name: '第二页✌',
            component: Second,
            meta: { requiresAuth: false }
        },
        {
            path: '/Thirt',
            name: '第三页✌',
            component: Thirt,
            meta: { requiresAuth: false }
        },
        {
            path: '/Fourth',
            name: '第四页✌',
            component: Fourth,
            meta: { requiresAuth: false }
        }
    ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}