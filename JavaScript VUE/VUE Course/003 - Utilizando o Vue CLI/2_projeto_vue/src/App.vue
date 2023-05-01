<template>
    <h1>Olá, mundo!</h1>
    <FirstComponent />
    <DataInComponentVue />
</template>

<script>
    import FirstComponent from './components/FirstComponent.vue';
    import DataInComponentVue from './components/DataInComponent.vue';

    export default{
        name: 'App',
        components: {
            FirstComponent,
            DataInComponentVue
        },
    }
</script>