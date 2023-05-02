<template>
    <h1>Olá, mundo!</h1>
    <FirstComponent />
    <DataInComponentVue />
    <Lifecycle_HooksVue />
    <Hierarquia_Component />
</template>

<style>
    /* CSS GLOBAL */
    div{
        padding: 10px;
        border: 1px solid #111111;
    }
    h1{
        color: #111111;
    }
</style>

<script>
    import FirstComponent from './components/FirstComponent.vue';
    import DataInComponentVue from './components/DataInComponent.vue';
    import Lifecycle_HooksVue from './components/Lifecycle_Hooks.vue';
    import Hierarquia_Component from './components/Hierarquia_Component.vue';

    export default{
        name: 'App',
        components: {
            FirstComponent,
            DataInComponentVue,
            Lifecycle_HooksVue,
            Hierarquia_Component
        },
    }
</script>