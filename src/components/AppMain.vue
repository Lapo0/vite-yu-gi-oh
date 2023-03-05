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
            }
        },
        // per sostituire nel ciclo for nel template, al posto di mettere
        // tutto il percorso che deve fare, creo un computed per utilizzare solo
        // la parola chiave, utile soprattutto per quando i dati nello store
        // sono annidati in modo da renderla più semantica
        computed: {
            cards() {
                return this.store.cards
            }
        },
        methods: {
            fetchCharacters() {
            console.log('fetching data');
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=12&offset=0')
                .then((res) => {
                    console.log(res.data)
                    this.store.cards = res.data.data

                    const {numCard, pagesRemaining} = res.data.meta
                    console.log(res.data.meta)

                    this.store.numCard = numCard

                    this.store.pagesRemaining = pagesRemaining
                    console.log(pagesRemaining)
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

        .cards {
            display: grid;
            gap: 40px;
            grid-template-columns: repeat(4,1fr);
        }
    }
    }

    
</style>