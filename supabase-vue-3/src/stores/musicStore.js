import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { reactive } from "vue";
import { supabase } from "../supabase.js";



export const useMusicStore = defineStore("music", {
  state: async () => {
    const { data, error } = await supabase.from("store").select();
    return {
      data: data,
      error: error,
    };
  },
});

export const musicStore = reactive({
  albums: [],
});

data.forEach((e) => {
  musicStore.albums.push(e);
});

console.log(musicStore);
