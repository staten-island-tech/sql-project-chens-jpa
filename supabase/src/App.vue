<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import { supabase } from './supabase'

const id = ref([])
async function getId() {
  const { data } = await supabase.from('id').select()
  id.value = data

  onMounted(() => {
    getCountries()
  })
}
</script>

<template>
  <ul>

    <li v-for="id in ids"></li>
  </ul>
</template>


