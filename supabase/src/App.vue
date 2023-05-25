<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { supabase } from './supabase'

const id = ref([])
async function getId() {
  const { data } = await supabase.from('id').select()
  id.value = data
}
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
