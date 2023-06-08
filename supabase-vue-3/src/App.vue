<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref, computed } from "vue";
import { supabase } from "./supabase";
import { useUserStore } from "./stores/userStore";
import { useMusicStore } from "./stores/musicStore";
import { RouterLink } from "vue-router";
import Auth from "./components/Auth.vue";

const session = ref();
const userStore = useUserStore();
const musicStore = useMusicStore();
const pathname = window.location.pathname;
//const route = useRoute()
//const router = useRouter()

console.log(userStore);

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
console.log(session);
</script>

<template>
  <section class="container">
    <nav id="top-bar">
      <RouterLink to="/">
        <img src="../public/supabeats.png" alt="supabeats logo" class="link" id="logo" />
      </RouterLink>
      <p class="top-bar-items">|</p>
      <RouterLink to="/" class="top-bar-items" v-if="session">Home</RouterLink>
      <RouterLink to="/Account" class="top-bar-items" v-if="session"
        >Account</RouterLink
      >
      <RouterLink to="/Favorites" class="top-bar-items" v-if="session"
        >Favorites</RouterLink
      >
    </nav>

    <div class="container">
      <Account
        v-if="
          session && !pathname.includes('Users') && !pathname.includes('Albums')
        "
        :session="session"
      />
      <Auth v-else-if="!session" />
    </div>

    <router-view />
  </section>
</template>

<style>
html,
body,
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Roboto", sans-serif;
}

:root {
  --black: #1f1f1f;
  --green: #3ecf8e;
  --dark-green: #238454;

  --big: 4rem;
  --med: 2.5rem;
  --small: 2rem;
}

h1,
h2,
h3,
p {
  font-size: var(--small);
}

.container {
  margin: 2rem;
}

#logo {
  height: 3.5rem;
}

#top-bar {
  font-size: var(--big);
  display: flex;
}

.top-bar-items {
  margin: 0rem 2rem;
  text-decoration: none;
  color: var(--black);
  font-weight: bold;
}
</style>
