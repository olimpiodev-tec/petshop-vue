<script setup>

</script>

<template>
    <div class="sort-container">
            <select disabled>
                <option value="">Ordenar por</option>
                <option value="price-asc">Preço: Menor para Maior</option>
                <option value="price-desc">Preço: Maior para Menor</option>
            </select>
        </div>
</template>

<style scoped>
.sort-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }
</style>