<script setup>

</script>

<template>
    <div class="products-container">
        <!-- Produto 1 -->
        <div class="product-card">
            <img src="https://source.unsplash.com/random/300x200/?dog,food" alt="Ração para Cães" class="product-image">
            <div class="product-info">
                <h3 class="product-name">Ração Premium para Cães</h3>
                <p class="product-description">Ração super premium para cães adultos, sabor frango e arroz, 15kg.</p>
                <p class="product-price">R$ 189,90</p>
                <button class="details-btn">Ver Detalhes</button>
            </div>
        </div>

        <!-- Produto 2 -->
        <div class="product-card">
            <img src="https://source.unsplash.com/random/300x200/?cat,toy" alt="Brinquedo para Gatos" class="product-image">
            <div class="product-info">
                <h3 class="product-name">Brinquedo para Gatos</h3>
                <p class="product-description">Varinha com penas para entreter seu gato por horas.</p>
                <p class="product-price">R$ 29,90</p>
                <button class="details-btn">Ver Detalhes</button>
            </div>
        </div>

        <!-- Produto 3 -->
        <div class="product-card">
            <img src="https://source.unsplash.com/random/300x200/?aquarium" alt="Aquário" class="product-image">
            <div class="product-info">
                <h3 class="product-name">Aquário 50 litros</h3>
                <p class="product-description">Aquário completo com filtro, termostato e iluminação LED.</p>
                <p class="product-price">R$ 349,90</p>
                <button class="details-btn">Ver Detalhes</button>
            </div>
        </div>

        <!-- Produto 4 -->
        <div class="product-card">
            <img src="https://source.unsplash.com/random/300x200/?dog,collar" alt="Coleira Antipulgas" class="product-image">
            <div class="product-info">
                <h3 class="product-name">Coleira Antipulgas</h3>
                <p class="product-description">Coleira para cães com proteção contra pulgas e carrapatos por 8 meses.</p>
                <p class="product-price">R$ 79,90</p>
                <button class="details-btn">Ver Detalhes</button>
            </div>
        </div>

        <!-- Produto 5 -->
        <div class="product-card">
            <img src="https://source.unsplash.com/random/300x200/?cat,litter" alt="Areia Sanitária" class="product-image">
            <div class="product-info">
                <h3 class="product-name">Areia Sanitária Premium</h3>
                <p class="product-description">Areia higiênica para gatos com controle de odor, 10kg.</p>
                <p class="product-price">R$ 59,90</p>
                <button class="details-btn">Ver Detalhes</button>
            </div>
        </div>

        <!-- Produto 6 -->
        <div class="product-card">
            <img src="https://source.unsplash.com/random/300x200/?dog,house" alt="Casinha para Cães" class="product-image">
            <div class="product-info">
                <h3 class="product-name">Casinha para Cães</h3>
                <p class="product-description">Casinha de plástico resistente para cães de médio porte.</p>
                <p class="product-price">R$ 199,90</p>
                <button class="details-btn">Ver Detalhes</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.products-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
        }

        .product-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }

        .product-card:hover {
            transform: translateY(-5px);
        }

        .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .product-info {
            padding: 15px;
        }

        .product-name {
            font-size: 1.2em;
            margin-bottom: 10px;
            color: #333;
        }

        .product-description {
            color: #666;
            margin-bottom: 15px;
            font-size: 0.9em;
        }

        .product-price {
            font-weight: bold;
            color: #4CAF50;
            font-size: 1.3em;
            margin-bottom: 15px;
        }

        .details-btn {
            display: inline-block;
            width: 100%;
            text-align: center;
            padding: 8px 0;
            text-decoration: none;
        }
</style>