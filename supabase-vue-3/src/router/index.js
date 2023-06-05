import createRouter from 'vue-router';
import RouterLink from 'vue-router'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Albums from './views/Albums.vue'
import Users from './views/Users.vue'
const routes = createRouter({

routes: [
  {
    path: '/Users',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/Albums',
    name: 'Albums',
    component: Albums,
    meta: {
      requiresAuth: true,
    }
  }
  
]
})

const router = VueRouter.createRouter ({
  history: VueRouter.createWebHashHistory(),
  routes,
})


export default router



//