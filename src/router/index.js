

import Router from "vue-router"

import Vue from 'vue'

Vue.use(Router)



 export default new Router({
    // history:createWebHistroy(),
    routes: [
      {
        path: '/**',
        name: '**',
        // component: ,
        children:[]
      },
    ]
})

