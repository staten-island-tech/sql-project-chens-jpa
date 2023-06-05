import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { reactive } from "vue";
import { supabase } from "../supabase.js";

const { data, error } = await supabase.from("store").select();

export const useMusicStore = defineStore("music", {
  state: () => {
    return {
      data: data,
      error: error,
    };
  },
  actions: {
    getAlbums() {
      this.data = data;
    }
  }
});

// export const musicStore = reactive({
//   albums: [],
// });

// data.forEach((e) => {
//   musicStore.albums.push(e);
// });

// console.log(musicStore);
