<script setup>
import Busca from './Busca.vue';
import Ordena from './Ordena.vue';

</script>

<template>
    <div class="filters">
        
        <Busca />
        
        <Ordena />

    </div>
</template>

<style scoped>
.filters {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 15px;
            background: #fff;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
</style>