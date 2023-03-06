<template>

    <input @keyup.enter="$emit('onSearch')" type="text" placeholder="Filtra per nome" v-model="store.inputSearch">
    
</template>

<script>
    import store from '../store'

    export default {
        data() {
            return {
                store,
            }
        },
    }
    
</script>

<style lang="scss" scoped>

</style>