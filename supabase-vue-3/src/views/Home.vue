<template>
  <div>
    <h1>Welcome to our Home Page</h1>
  </div>

  <section>
    <div class="cardsGallery">
      <AlbumCards
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
import AlbumCards from "../components/AlbumCards.vue";
import { musicStore } from "../stores/musicStore";

export default {
  name: "Home",
  components: {
    AlbumCards,
  },
  data() {
    return {
      musicStore,
    };
  },
};
</script>

<style scoped>
.cardsGallery {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
