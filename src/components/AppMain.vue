<template>
    <main class="main">
        <div class="container">
            <div class="row">
                <Filters @onSearch="fetchCard" @onCardsChange="fetchCard"/>
            </div>
        </div>
        <div class="container">
            <ul class="cards">

                <Card v-for="card in cards" :key="card.id" :card="card"/>
                
            </ul>
        </div>

    </main>
</template>

<script>

    import axios from 'axios'

    import store from '../store'

    import Card from '/src/components/Card.vue'

    import Filters from '/src/components/Filters.vue'


    export default {
        components: {
            Card,
            Filters,
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
            },
        },
        methods: {
            fetchCard() {
            console.log('fetching data');

                const search = this.store.inputSearch
                console.log('input search= ', search)

                const numCard = this.store.selectedNumCard
                console.log('num card = ', numCard)

            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?&offset=0', {
                    params: {
                        fname: search,
                        num: numCard,
                    }
                })
                .then((res) => {
                    console.log(res.data)
                    this.store.cards = res.data.data

                });
            },
        },
        created() {
            console.log('store',this.store)
            this.fetchCard()
        },
        
    }
</script>

<style lang="scss" scoped>

    @use '/src/style/partials/_variables.scss' as *;

    .main {
    padding: 100px 0;
    background-image: url(https://wallpapercave.com/wp/wp2311074.png);
    background-size: cover;
    background-position: center;

    .container {
        background-color: white;
        padding: 30px;

        .row {
            text-align: center;
            justify-content: center;
            gap: 40px;

            
        }

        .cards {
            display: grid;
            gap: 40px;
            grid-template-columns: repeat(4,1fr);
        }
    }
    }

    
</style>