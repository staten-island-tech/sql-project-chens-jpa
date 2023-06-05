<script setup >

import { RouterLink } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import Auth from '../components/auth.vue'
import { supabase } from '../supabase'
import { useUserStore } from '../stores/userStore'
import { useMusicStore } from '../stores/musicStore'
import  AlbumCards  from '../components/AlbumCards.vue'


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

console.log(musicStore)

musicStore.getAlbums();

console.log(musicStore)


</script>

<template>
    <p v-if=!session>
        you are not logged in 
    </p>
    <p v-if=session>
        blah
    </p>
    <div >
       <AlbumCards v-for="(album, index) in musicStore.data" :id="album.id" 
       :artist="album.artist" :title="album.title" :img="album.img"
        >

       </AlbumCards>
    </div>
    
</template>
