<template>
    
    <li class="card">
        <img :src="card.card_images[0].image_url" alt="">
        <div class="text">
            <h3 class="card__name">{{ card.name }}</h3>
            <p class="card__archetype"> {{ card.archetype }}</p>
        </div>
    </li>
    
</template>

<script>
    export default {
        props: {
            // passo l'oggetto intero
            card: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>

    @use '/src/style/partials/_variables.scss' as *;

    .card {
    text-align: center;
    display: flex;
    flex-direction: column;

    img {
        object-fit: cover;
        display: block;
    }

    .text {
        background-image: url(https://whatsnewinpublishing.com/wp-content/uploads/2021/04/screen_2x-3-1170x780.jpg);
        background-size: cover;
        background-position: center;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 15px;

        .card__name {
            font-size: 20px;
            color: white;
            padding-bottom: 10px;
        }

        .card__archetype {
            font-size: 20px;
            color: white;
            font-family: 'Mynerve', cursive;
        }
    }
    
    }
    
</style>