import { createRouter, createWebHistory } from "vue-router";
import Albums from "../views/Albums.vue";
import Users from "../views/Users.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/Users",
    name: "Users",
    component: Users,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Albums",
    name: "Albums",
    component: Albums,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
