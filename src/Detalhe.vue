<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const produto = ref({})
const id = ref(route.params.id)

onMounted(async () => {
  try {
    const response = await axios.get(`https://api-petshop-cdzf.onrender.com/products/${id.value}`)
    produto.value = response.data
  } catch (error) {
    console.error('Erro ao buscar produto:', error)
  }
})

</script>

<template>
<div class="product-card">
            <img src="/pedigree.jpg" alt="Ração para Cães" class="product-image">
            <div class="product-info">
                <h3 class="product-name">{{ produto.product_name }}</h3>
                <p class="product-description">{{ produto.product_description }}</p>
                <p class="product-price">R$ {{ produto.product_price }}</p>
                <router-link class="details-btn" to="/">Voltar</router-link>
            </div>
        </div>


</template>

<style scoped>

</style>