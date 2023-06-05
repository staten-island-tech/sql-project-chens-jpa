<template>
  <button>favorite</button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
button {
  padding: 10px;
  border: none;
  transition: 0.2s;
  background: none;
}

button:hover {
  transform: scale(1.1);
}
</style>
