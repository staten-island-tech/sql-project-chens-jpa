<template>
  <section class="container">
    <h1>Welcome {{ username }}!</h1>

    <div class="gallery">
      <Cards
        v-for="album in musicStore.albums"
        :key="album.title"
        :title="album.title"
        :artist="album.artist"
        :img="album.img"
        :id="album.id"
      />
    </div>
  </section>
</template>

<script>
import Cards from "../components/Cards.vue";
import { musicStore } from "../stores/musicStore";

export default {
  name: "Home",
  components: {
    Cards,
  },
  data() {
    return {
      musicStore,
    };
  },
};
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
