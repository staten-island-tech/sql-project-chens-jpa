<template>
  <form id="form" @submit.prevent="handleLogin">
    <div class="sign-in">
      <h2>Sign in via magic link to your email!</h2>

      <input
        required
        type="email"
        placeholder="Your email"
        v-model="email"
        id="input-field"
      />
      <input
        id="submit-btn"
        type="submit"
        :value="loading ? 'Loading' : 'Send magic link'"
        :disabled="loading"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";

const loading = ref(false);
const email = ref("");

const handleLogin = async () => {
  try {
    loading.value = true;
    const { error } = await supabase.auth.signInWithOtp({
      email: email.value,
    });
    if (error) throw error;
    alert("Check your email for the login link!");
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
h2 {
  font-size: var(--med);
}

input {
  font-size: var(--small);
  margin: 2rem 0rem;
  padding: 0rem 1rem;
}

#input-field {
  width: 35rem;
  margin: 0rem 1rem;
}

.sign-in {
  text-align: center;
}
</style>
