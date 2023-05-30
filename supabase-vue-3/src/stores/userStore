import { defineStore } from 'pinia'
import { ref, computed } from 'vue' 
import { supabase } from '../supabase.js'

const { data, error } = await supabase.from('profiles').select()

export const useUserStore = defineStore('storeId', {
  state: () => {
    return {
      data 
    }
  },
})


