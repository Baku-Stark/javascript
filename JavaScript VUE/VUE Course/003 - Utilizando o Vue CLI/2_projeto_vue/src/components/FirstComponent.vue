<template>
    <h1>Olá, VUE!!</h1>
    <Reutilize_Component/>
</template>

<script>
    import Reutilize_Component from './Reutilize_Component.vue'

    export default{
        name: 'FirstComponente',
        components:{
            Reutilize_Component
        }
    }
</script>