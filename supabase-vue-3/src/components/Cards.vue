<template>
  <div class="flip-card" @mouseover="checkFav">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="img" :alt="altText" />
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
import { useMusicStore } from "../stores/musicStore";
import Button from "../components/Button.vue";
import { useUserStore } from "../stores/userStore";
import { supabase } from "../supabase";
import { onMounted, ref, computed } from "vue";

export default {
  name: "Cards",
  data() {
    return {
      musicStore: useMusicStore(),
      userStore: useUserStore(),
      toggled: false,
      altText: `${this.artist}'s album, ${this.title}`
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
    session: Object
  },
  methods: {
    checkFav: async function () {
      let user = this.userStore.data.filter(user => user.id === this.session.user.id)[0]
      if (user.favorites != null && user.favorites.includes(this.id)) {
        this.toggled = true
      };
    },
    toggleFav: async function () {
      if (this.toggled === false) {
        this.toggled = true;
        let user = this.userStore.data.filter(user => user.id === this.session.user.id)[0]
        if (user.favorites === null) {
          user.favorites = [this.id]
        } else {
          user.favorites.push(this.id)
        }
        console.log(user)
        const { data, error } = await supabase.from('profiles').update({favorites: user.favorites}).eq('id', user.id)
        console.log(data)
        console.log(error)
      } 
      else 
        {
          this.toggled = false; 
          let user = this.userStore.data.filter(user => user.id === this.session.user.id)[0]
          user.favorites.splice(user.favorites.indexOf(this.id), 1)
          console.log(user)
          const { data, error } = await supabase.from('profiles').update({favorites: user.favorites}).eq('id', user.id)
          console.log(data)
          console.log(error)
        }
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
