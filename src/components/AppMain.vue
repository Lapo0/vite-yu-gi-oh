<template>
    <main class="main">
        <div class="container">
            <ul class="cards">

                <Card v-for="card in cards" :key="card.id" :card="card"/>
                
            </ul>
        </div>

    </main>
</template>

<script>

    import axios from 'axios'

    import Card from '/src/components/Card.vue'

    import store from '../store'


    export default {
        components: {
            Card,
        },
        data() {
            return {
                store,
                cards: [],
            }
        },
        computed: {
            card() {
                return this.store.card
            }
        },
        methods: {
            fetchCharacters() {
            console.log('fetching data');
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0')
                .then((res) => {
                    console.log(res.data.data)
                    this.cards = res.data.data
                });
            },
        },
        created() {
            console.log('store',this.store)
            this.fetchCharacters()
        },
        
    }
</script>

<style lang="scss" scoped>

@use '/src/style/partials/_variables.scss' as *;

.main {
  padding: 100px 0;
  background-color: $brown;

  .container {
    background-color: white;
    padding: 30px;
  }
}
.cards {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4,1fr);

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
}
    
</style>