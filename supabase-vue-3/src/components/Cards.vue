<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="img" alt="album image" />
      </div>

      <div class="flip-card-back">
        <h1>{{ title }}</h1>
        <h2>{{ artist }}</h2>
        <Button v-if="toggled" @click="toggleFav" title="🖤" />
        <Button v-else @click="toggleFav" title="🤍" />
      </div>
    </div>
  </div>
</template>

<script>
import { musicStore } from "../stores/musicStore";
import Button from "../components/Button.vue";

export default {
  name: "Cards",
  data() {
    return {
      musicStore,
      toggled: false,
    };
  },
  components: {
    Button,
  },
  props: {
    title: String,
    artist: String,
    img: String,
    id: Number,
  },
  methods: {
    toggleFav: function () {
      if (this.toggled === false) {
        this.toggled = true;
      } else this.toggled = false;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: var(--med);
}

h1,
h2 {
  margin: 0rem 0rem 1rem 0rem;
}

img {
  height: 30rem;
  width: 30rem;
}

.flip-card {
  background-color: transparent;
  height: 30rem;
  width: 30rem;
  margin: 2rem;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: 1s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  background-color: var(--green);
  transform: rotateY(180deg);
  padding: 6rem;
}
</style>
