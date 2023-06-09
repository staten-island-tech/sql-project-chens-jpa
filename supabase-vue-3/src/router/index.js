import { createRouter, createWebHistory } from "vue-router";
import Favorites from "../views/Favorites.vue";
import Account from "../views/Account.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/Account",
    name: "Account",
    component: Account,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/Favorites",
    name: "Favorites",
    component: Favorites,
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
