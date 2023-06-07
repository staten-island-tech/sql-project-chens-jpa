<template>
  <section class="container">
    <h1>Welcome {{ username }}!</h1>

    <div class="gallery">
      <Cards
        v-for="album in musicStore.data"
        :key="album.title"
        :title="album.title"
        :artist="album.artist"
        :img="album.img"
        :id="album.id"
        :session="session"
      />
    </div>
  </section>
</template>

<script setup>
import Cards from "../components/Cards.vue";
import { onMounted, ref, computed } from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/userStore";
import { useMusicStore } from "../stores/musicStore";


const session = ref();
const userStore = useUserStore();
const musicStore = useMusicStore();
const pathname = window.location.pathname;
//const route = useRoute()
//const router = useRouter()


onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});


</script>

<style scoped>
h1 {
  font-size: var(--big);
}
.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
