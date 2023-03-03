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
                title: 'YU-GI-OH'
            }
        }
        
    }
</script>

<style lang="scss" scoped>

    .main-header {
    text-align: center;
    font-size: 2rem;
    background-color: red;
    padding: 1rem 0;
    }
    
</style>