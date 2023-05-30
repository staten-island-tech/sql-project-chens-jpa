<script setup>

import { onMounted, ref, computed } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/auth.vue'
import { supabase } from './supabase'
import { useUserStore } from './stores/userStore'

const session = ref()
const store = useUserStore()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

console.log(store.data)
console.log(session)
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
    <div id="emptyContainer">

    </div>
  </div>
</template>