<script setup>
import Filtros from './Filtros.vue';
import Produtos from './Produtos.vue';


</script>

<template>
    <header>
        <h1>Pet Shop Sempre Barato</h1>
    </header>
  
    <Filtros />

    <router-view />
</template>

<style scoped>

</style>
