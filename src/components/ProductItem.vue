<template>
    <div class="product-item">
      <form class="add-form">
      <input type="text" class="input" placeholder="Add item" v-model="item">
  </form>
     
      <button @click="addToCart">Add</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps({
    product: {
      type: Object,
      required: true
    }
  });
  const item = ref('');

  const emit = defineEmits(['add-to-cart']);
  
  const addToCart = () => {
    emit('add-to-cart', item.value);
    item.value = ''
  };
  
  </script>
  
  <style scoped>
  /* Styles */
  </style>


  