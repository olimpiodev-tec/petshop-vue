<script setup>
</script>

<template>
        <div class="filters">
        <div class="search-container">
            <input type="text" placeholder="Pesquisar produtos..." disabled>
            <button disabled>Buscar</button>
        </div>
        
        <div class="sort-container">
            <select disabled>
                <option value="">Ordenar por</option>
                <option value="price-asc">Preço: Menor para Maior</option>
                <option value="price-desc">Preço: Maior para Menor</option>
            </select>
        </div>
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
		
		.search-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .sort-container {
            display: flex;
            align-items: center;
            gap: 10px;
        }
</style>