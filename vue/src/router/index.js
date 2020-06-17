import Vue from 'vue'
import Router from 'vue-router'

import testComp from '@/components/testComp'

Vue.use(Router)

let router = new Router({
    routes: [
      {
        path: '/test',
        name: 'testComp',
        component: testComp,
        meta: { 
          title: 'test',
          translate_route: 'test',
        }
      }
    ]
})

export default router