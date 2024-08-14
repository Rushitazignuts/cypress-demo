<template>
    <div class="product-list">
      <ProductItem  @add-to-cart="addToCart" :product="products" />
      <ul v-if="products.length">
      <li v-for="data in products" :key="data.id">
         {{ data.name }} {{ data.price }}
        <button class="remove" @click="remove(data.id)">remove</button>
      </li>
    </ul>
    <p v-else>nothing</p>
      <Cart :total="total" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import ProductItem from './ProductItem.vue';
  import Cart from './Cart.vue';

  const total = ref('')
  const products = ref([
   
    { id: 1, name: 'Product A', price: 150 },
    // { id: 3, name: 'Product C', price: 200 }
  ]);
  
  const addToCart = (product) => {
    console.log('Product added to cart:', product);
    products.value.push({
      id: Math.random(),
      name : product,
      price: 100
    })
  total.value = products.value.reduce((sum, product) => sum + product.price, 0);
  console.log('total.value: ', total.value);

  };

  
  // console.log('total.value: ', total.value);

  const remove = (id) => {
    products.value = products.value.filter((data) => data.id !== id);
};
  
  </script>
  
  <style scoped>
  /* Styles */
  </style>
  