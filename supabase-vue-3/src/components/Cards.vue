<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="img" alt="album image" />
      </div>

      <div class="flip-card-back">
        <h1>{{ title }}</h1>
        <h2>{{ artist }}</h2>
        <div v-if="session">
          <Button v-if="toggled" @click="toggleFav" title="🖤" />
          <Button v-else @click="toggleFav" title="🤍" />
        </div>
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
      toggled: false,
      userStore: useUserStore(),
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
    session: Object,
  },
  methods: {
    toggleFav: async function () {
      if (this.toggled === false) {
        //supabase.from('Users.favorites').insert({ id: 1, name: 'Denmark' })
        this.toggled = true;
        console.log(this.session);
        let user = this.userStore.data.filter(
          (user) => user.id === this.session.user.id
        );
        supabase.from("profiles").select(`id ,${user.id}`);
        console.log(user[0]);
        //const { data, error } = await supabase.from('profiles').select().eq('id', `${user[0].id}`).insert({favorites: this.id})

        console.log(this.id);
        const { data, error } = await supabase
          .from("profiles")
          .select()
          .eq("id", `${user[0].id}`);
        console.log(data[0].favorites);
        console.log(error);
      } else {
        this.toggled = false;
      }
      console.log(supabase);
      console.log(this.session);
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
  margin: 3rem;
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
