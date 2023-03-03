<template>
    <main class="main">
        <div class="container">
            <ul class="cards">

                <Card v-for="element in store.card" :key="element.id" :srcImage="element.srcImage" :name="element.name" :archetype="element.archetype" />
                
            </ul>
        </div>

    </main>
</template>

<script>

    import axios from 'axios'

    import store from '../store'

    import Card from '/src/components/Card.vue'

    export default {
        components: {
            Card,
            
        },
        data() {
            return {
                store,
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
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((res) => {
                    const data = res.data.data;
                    const cards = [];
                    for (let i = 0; i < data.length; i++) {
                        const card = {};
                        card.srcImage = data[i].card_images[0].image_url;
                        card.name = data[i].name;
                        card.archetype = data[i].archetype;
                        cards.push(card);
                    }
                    this.store.card = cards;
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

.main {
  padding: 100px 0;
}
.cards {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(4,1fr);
}
    
</style>