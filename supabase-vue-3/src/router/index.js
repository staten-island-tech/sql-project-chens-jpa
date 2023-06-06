import { createRouter, createWebHistory } from "vue-router";
import Albums from "../views/Favorites.vue";
import Account from "../components/Account.vue";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/account",
    name: "Account",
    component: Account,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/favorites",
    name: "Favorites",
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
