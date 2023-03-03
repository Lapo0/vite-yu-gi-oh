<template>
    <li class="card">
        <img :src="srcImage" alt="">
        <div class="text">
            <h3 class="card__name">{{ name }}</h3>
            <p class="card__archetype"> {{ archetype }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
    // PASSO I SINGOLI DATI COME PROP

        srcImage: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        archetype: {
            type: String,
        },
        
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
    background-color: $brown;
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
    }
  }
  
}
    
</style>