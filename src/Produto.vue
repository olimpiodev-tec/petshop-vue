<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const produtos = ref([])
const image = 'pedigree.jpg'

onMounted(async () => {
  try {
    const response = await axios.get('https://api-petshop-cdzf.onrender.com/products') 
    produtos.value = response.data
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
  }
})
</script>

<template>
    <div class="product-card" v-for="produto in produtos" :key="produto.id">
            <img :src="image" alt="Ração para Cães" class="product-image">
            <div class="product-info">
                <h3 class="product-name">{{ produto.product_name }}</h3>
                <p class="product-description">{{ produto.product_description }}</p>
                <p class="product-price">R$ {{ produto.product_price }}</p>
                <router-link class="details-btn" :to="`/detalhes/${produto.id}`">Ver Detalhes</router-link>
            </div>
        </div>
</template>

<style scoped>
</style>