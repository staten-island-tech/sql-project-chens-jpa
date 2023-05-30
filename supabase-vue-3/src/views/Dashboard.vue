<template>
  <div>
    <h1>Welcome to our Dashboard Page</h1>
    <img :scr="logo" />
    <button @click.prevent="signOut">Sign out</button>
    <p>Welcome: {{ userEmail }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: supabeats.jpg,
    };
  },
};
</script>
