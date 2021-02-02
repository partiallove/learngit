import Vue from 'vue'
import Router from 'vue-router'
// import { constantRouterMap } from '@/config/router.config'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/home/index.vue'
import pcPreview from '@/home/pcPreview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/pcPreview',
      name: 'pcPreview',
      component: pcPreview
    },
  ]
})
// export default new Router({
//   // mode: 'hash',
//   // base: process.env.BASE_URL,
//   // scrollBehavior: () => ({ y: 0 }),
//   routes: constantRouterMap
// })
