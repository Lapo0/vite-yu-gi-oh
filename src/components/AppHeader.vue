<template>
    <header class="header">
      <div class="container">
        <h1>{{ title }}</h1>
      </div>
  
    </header>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Yu-Gi-Oh API'
            }
        }
        
    }
</script>

<style lang="scss" scoped>

    .header {
    font-size: 2rem;
    padding: 1rem 0;
    padding: 30px;
    }

</style>