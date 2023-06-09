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
const shownMusic = [];

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session;
    const user = userStore.data.filter(
      (user) => user.id === session.value.user.id
    )[0];
    user.favorites.forEach((favorite) => {
      shownMusic.push(
        musicStore.data.filter((album) => album.id === favorite)[0]
      );
    });
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>

<template>
  <div v-if="session" class="gallery">
    <Cards
      v-for="album in shownMusic"
      :key="album.title"
      :title="album.title"
      :artist="album.artist"
      :img="album.img"
      :id="album.id"
      :session="session"
    />
  </div>
</template>

<style scoped>
h1 {
  font-size: var(--med);
}
.gallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
