import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { supabase } from "../supabase.js";

const { data, error } = await supabase.from("store").select();

export const useMusicStore = defineStore("storeId", {
  state: () => {
    return {
      music: data,
    };
  },
});
