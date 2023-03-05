<template>
    <footer>
        <div class="container">
            <div class="counter-card">
                <div class="num-cards">
                    <span>
                        PAGE
                    </span>
                    <span class="num">
                        {{ store.cards.length }}
                    </span>
                </div>
            </div>
            <div class="pages">
                <p class="pages-remaining">
                    {{ }}
                </p>
                <p class="current-page">
                    {{  }}
                </p>
            </div>
        </div>
    </footer>
    
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

@use '/src/style/partials/_variables.scss' as *;


.container {
    padding: 40px 0;

    .num-cards {
        display: inline-block;
        padding: 10px;
        border-radius: 10px;
        border: 2px solid $brown;

        &:hover {
            background-image: url(https://whatsnewinpublishing.com/wp-content/uploads/2021/04/screen_2x-3-1170x780.jpg);
            background-size: cover;
            background-position: center;
            color: white;
        }

        span.num{
            font-size: 35px;
        }
    }
    
}



    
</style>