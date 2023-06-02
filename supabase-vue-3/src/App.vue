<script setup>
import { onMounted, ref, computed } from "vue";
import Account from "./components/Account.vue";
import Auth from "./components/auth.vue";
import Dashboard from "./views/Dashboard.vue";
import { supabase } from "./supabase";
import { useUserStore } from "./stores/userStore";

const session = ref();
const store = useUserStore();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});

console.log(store.data);
console.log(session);
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
    <div id="emptyContainer"></div>
    <Dashboard />
  </div>
</template>

<style>
:root {
  --black: #1f1f1f;
  --green: #3ecf8e;
  --darkgreen: #238454;

  --h1: 5rem;
  --h2: 4rem;
  --p: 3rem;
}

h1 {
  font-size: var(--h1);
}

h2 {
  font-size: var(--h2);
}

p {
  font-size: var(--p);
}

html,
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
}

form {
  font-size: var(--h1);
}

button {
  font-size: 1vw;
}
</style>
