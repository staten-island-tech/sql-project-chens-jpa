<template>
    <div class="cards">
      <h3>{{ title }}</h3>
      <h3>{{ artist }}</h3>
      <img :src="img" alt="" />
      <p><Button @click="addFav()" /></p>
    </div>
  </template>
  
  <script>
  import { musicStore } from "../stores/musicStore";
  import Button from "../components/Button.vue";
  
  export default {
    name: "AlbumCards",
    components: {
      Button,
    },
    props: {
      title: String,
      artist: String,
      img: String,
      id: Number,
    },
    data() {
      return {
        musicStore,
      };
    },
  };
  </script>
  
  <style scoped>
  .cards {
    background-color: #f9dce0;
    text-align: center;
    margin: 10px;
    height: 400px;
    width: 250px;
  }
  
  img {
    height: 200px;
    width: auto;
  }
  </style>
  