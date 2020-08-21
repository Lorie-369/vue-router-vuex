import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello页✌',
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: '/First',
      name: 'let和const命令✌',
      component: First,
      meta: { requiresAuth: false }
    },
    {
      path: '/Second',
      name: '第二页✌',
      component: Second,
      meta: { requiresAuth: false }
    }
  ]
})
