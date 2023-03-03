<template>
    <li class="card">
        <img :src="srcImage" alt="">
        <h3 class="card__name">{{ name }}</h3>
        <p class="card__archetype"> {{ archetype }}</p>
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

.card {
  text-align: center;
  img {
    object-fit: cover;
    display: block;
    margin: 0 auto 24px;
    
  }
  .card__name {
    font-size: 24px;
  }
}
    
</style>