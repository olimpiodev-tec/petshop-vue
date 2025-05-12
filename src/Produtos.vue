<script setup>
import Produto from './Produto.vue';
</script>

<template>
    <div class="products-container">
        <Produto />
    </div>
</template>

<style scoped>
.products-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        
</style>