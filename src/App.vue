<script>
    import { def } from '@vue/shared';

    import AppHeader from '/src/components/AppHeader.vue'
    
    import AppMain from '/src/components/AppMain.vue'

    import AppFooter from '/src/components/AppFooter.vue'

    export default {
        components: {
        AppHeader,
        AppMain,
        AppFooter,
        }
    }

</script>

<template>

    <AppHeader />
    <AppMain />
    <AppFooter />

</template>

<style lang="scss">

@use '/src/style/general.scss';

</style>
