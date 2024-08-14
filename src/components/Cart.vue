<template>
    <div class="cart">
      <h3>Cart Total: {{ props.total }}</h3>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import { defineProps } from 'vue';
  
  const props = defineProps({
    total: {
      type: String,
      required: true
    }
  });
  const total1 = ref(props.total);
  console.log('total: ', total1);

  </script>
  
  <style scoped>
  /* Styles */
  </style>
  