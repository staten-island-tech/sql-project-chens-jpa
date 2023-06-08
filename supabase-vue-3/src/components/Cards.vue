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
<<<<<<< HEAD
      altText: `${this.artist}'s album, ${this.title}`,
=======
      userStore: useUserStore(),
>>>>>>> parent of 619a8f9 (All the logic for the favorites and cards is done.)
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
<<<<<<< HEAD
    checkFav: async function () {
      let user = this.userStore.data.filter(
        (user) => user.id === this.session.user.id
      )[0];
      if (user.favorites != null && user.favorites.includes(this.id)) {
        this.toggled = true;
      }
    },
=======
>>>>>>> parent of 619a8f9 (All the logic for the favorites and cards is done.)
    toggleFav: async function () {
      if (this.toggled === false) {
        //supabase.from('Users.favorites').insert({ id: 1, name: 'Denmark' })
        this.toggled = true;
<<<<<<< HEAD
        let user = this.userStore.data.filter(
          (user) => user.id === this.session.user.id
        )[0];
        if (user.favorites === null) {
          user.favorites = [this.id];
        } else {
          user.favorites.push(this.id);
        }
        console.log(user);
        const { data, error } = await supabase
          .from("profiles")
          .update({ favorites: user.favorites })
          .eq("id", user.id);
        console.log(data);
        console.log(error);
      } else {
        this.toggled = false;
        let user = this.userStore.data.filter(
          (user) => user.id === this.session.user.id
        )[0];
        user.favorites.splice(user.favorites.indexOf(this.id), 1);
        console.log(user);
        const { data, error } = await supabase
          .from("profiles")
          .update({ favorites: user.favorites })
          .eq("id", user.id);
        console.log(data);
        console.log(error);
      }
=======
        console.log(this.session)
        let user = this.userStore.data.filter(user => user.id === this.session.user.id)
        supabase.from('profiles').select(`id ,${user.id}`)
        console.log(user[0])
        //const { data, error } = await supabase.from('profiles').select().eq('id', `${user[0].id}`).insert({favorites: this.id})
        
        console.log(this.id)    
        const { data, error } = await supabase.from('profiles').select().eq('id', `${user[0].id}`)
        console.log(data[0].favorites)
        console.log(error)
      } 
      else 
        {
          this.toggled = false; 
        }
      console.log(supabase)
      console.log(this.session)
      
      
>>>>>>> parent of 619a8f9 (All the logic for the favorites and cards is done.)
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
  box-shadow: 0.5rem 0.5rem 1rem var(--black);
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
  box-shadow: 0.5rem 0.5rem 1rem var(--black);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0.5rem 0.5rem 1rem var(--black);
}

.flip-card-back {
  background-color: var(--green);
  transform: rotateY(180deg);
  padding: 6rem;
}
</style>
