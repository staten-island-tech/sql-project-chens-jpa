<template>
  <div class="Cart total">
    Total: ${{ Store.total }}
    <br />
    Number of Items: {{ Store.numberItems }}
  </div>

  <div class="cart">
    <h1>Cart:</h1>
    <CartProducts
      v-for="album in Store.cart"
      :key="album.name"
      :name="album.name"
      :price="album.price"
    />
  </div>
</template>

<script>
import { useMusicStore } from "../musicStore.js";
</script>
