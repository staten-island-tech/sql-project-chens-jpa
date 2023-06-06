<script setup>
import { RouterLink } from "vue-router";
import { onMounted, ref, computed } from "vue";
import Auth from "../components/Auth.vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/userStore";
import { useMusicStore } from "../stores/musicStore";

const session = ref();
const userStore = useUserStore();
const musicStore = useMusicStore();
const pathname = window.location.pathname;
onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});

console.log(musicStore);

console.log();
</script>

<template>
  <h1 v-if="!session">You are not logged in.</h1>
  <h1 v-if="session">Your favorited albums will appear here.</h1>
</template>

<style scoped>
h1 {
  font-size: var(--med);
}
</style>
