<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
    <div id="emptyContainer">
      <router-link id="users" v-if="session" to="/Users"> users </router-link>
      <router-link id="albums" v-if="session" to="/Albums">
        Oppa Gangnam Style
      </router-link>
    </div>
  </div>
  <Dashboard />
</template>

<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref, computed } from "vue";
import Account from "./components/Account.vue";
import Auth from "./components/Auth.vue";
import { supabase } from "./supabase";
import { useUserStore } from "./stores/userStore";
import { useMusicStore } from "./stores/musicStore";
import Dashboard from "./views/Dashboard.vue";

const session = ref();
const userStore = useUserStore();
const musicStore = useMusicStore();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});

console.log();
</script>
