import { defineStore } from 'pinia'
import { ref, computed } from 'vue' 
import { supabase } from '../supabase.js'



export const useUserStore = defineStore('user', {
  state: async () => {
    const { data, error } = await supabase.from('profiles').select()
    return {
      data:data,
      error:error 
    }
  },
})


