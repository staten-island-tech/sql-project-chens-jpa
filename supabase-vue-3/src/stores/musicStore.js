import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { supabase } from "../supabase.js";
import { reactive } from "vue";

const { data, error } = await supabase.from("store").select();

export const useMusicStore = defineStore("storeId", {
  state: () => {
    return {
      music: data,
    };
  },
  cart: [],
  total: 0,
  numberItems: 0,
});
