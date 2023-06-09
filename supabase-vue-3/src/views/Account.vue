<template>
  <div v-if="session">
    <button @click.prevent="logOut()">Sign out</button>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { supabase } from "../supabase";

const session = ref();

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});

function logOut() {
  supabase.auth.signOut();
}
</script>

<style scoped>
button {
  font-size: var(--small);
  padding: 0.5rem;
  margin: 0rem 1rem;
}

h1 {
  font-size: var(--med);
  text-align: center;
}
</style>
