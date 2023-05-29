<script setup>

import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/auth.vue'
import { supabase } from './supabase'

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

async function getData(event) {
    if (event !== undefined) {
        event.preventDefault()
    }
    let URL = `https://the-cocktail-db.p.rapidapi.com/search.php`
    try {
        const response = await fetch(URL)
        if (response.status < 200 || response.status > 299) {
            console.log(response.status);
            throw error(response);
        } else {
            const data = await response.json();
            data.data.forEach((anime) => {
                    DOM.mangaSpace.insertAdjacentHTML(
                        "afterbegin",
                        `<div class="card">
                            <h2>${anime.title}</h2>
                            <img src="${anime.images.jpg.large_image_url}" alt="the popular anime ${anime.title}"
                        </div>`
                    );
                });
            };
        }
    catch (error) {
        console.log(error);
        console.log("womp womp")
        DOM.mangaSpace.textContent = "Sorry not available";
    }}
getData()
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <Auth v-else />
  </div>
</template>