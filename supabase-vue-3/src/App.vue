<script setup>
 


import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import Auth from './components/auth.vue'
import { supabase } from './supabase'
import { useUserStore } from './stores/userStore'
import { useMusicStore } from './stores/musicStore'
import { RouterLink } from 'vue-router'



const session = ref()
const userStore = useUserStore()
const musicStore = useMusicStore()
const pathname = window.location.pathname
//const route = useRoute()
//const router = useRouter()


const albumClick = () => {
    router.push("/Albums")
}

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})


</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <div id="emptyContainer">
      <nav>
          <RouterLink to="/Users">Users</RouterLink>
          <RouterLink to="/Albums">Albums</RouterLink>
          <router-link to="/">About</router-link>  
      </nav>
    </div>
    <Account v-if="session && !pathname.includes('Users') && !pathname.includes('Albums')" :session="session" />
    <Auth v-else-if="!session" />
    <router-view/>
    
  </div>
</template>
