<template>

    <input @keyup.enter="$emit('onSearch')" type="text" placeholder="Filtra per nome" v-model="store.inputSearch">

    <select @change="$emit('onCardsChange')" v-model="store.selectedNumCard" id="">
        <option v-for="cards in cardsOption" :value="cards" :key="cards">
            {{ cards }}
        </option>
    </select>
    
</template>

<script>
    import store from '../store'

    export default {
        data() {
            return {
                store,
                cardsOption: [
                    '20',
                    '40',
                    '60',
                    '80',
                    '100',
                ],
            }
        },
    }
    
</script>

<style lang="scss" scoped>

    input {
        line-height: 40px;
        font-size: 25px;
    }

</style>