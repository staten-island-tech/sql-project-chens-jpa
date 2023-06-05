<script >

import { RouterLink } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/auth.vue'
import { supabase } from './supabase'
import { useUserStore } from './stores/userStore'
import { useMusicStore } from './stores/musicStore'


const session = ref()
const userStore = useUserStore()
const musicStore = useMusicStore()
const pathname = window.location.pathname
onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

export default {
    computed: {
        username() {
            return this.$route.params.username
        },
    },
    methods: {
        goToDashboard() {
            if (isAuthenticated) {
                this.$router.push('Dashboard')
            }
            else {
                this.$router.push('SignIn')
            }
        }
    }

}

console.log()


</script>

<template>
    <p>
        you are not logged in 
    </p>
</template>
