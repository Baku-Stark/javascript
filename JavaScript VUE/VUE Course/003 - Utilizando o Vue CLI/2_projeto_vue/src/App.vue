<template>
    <Header />
    <h1 class="main-title">Olá, mundo!</h1>
    <FirstComponent />
    <DataInComponentVue />
    <Lifecycle_HooksVue />
    <Hierarquia_Component />
    <Event />
    <Event_Multi />
    <Emit/>
    <Footer />
</template>

<style>
    /* CSS GLOBAL */
    /* CSS Scoped e CSS global */
    body{
        background-color: #f0f8ff;
    }

    div{
        padding: 10px;
        border: 1px solid #111111;
    }

    h1{
        color: #111111;
    }
</style>

<script>
    // [PAGE]
    import Header from './components/page/Header.vue';
    import Footer from './components/page/Footer.vue';

    // [COMPONENTS]
    import FirstComponent from './components/FirstComponent.vue';
    import DataInComponentVue from './components/DataInComponent.vue';
    import Lifecycle_HooksVue from './components/Lifecycle_Hooks.vue';
    import Hierarquia_Component from './components/Hierarquia_Component.vue';
    import Event from './components/Event.vue';
    import Event_Multi from './components/Event_Multi.vue'
    import Emit from './components/Emit.vue';

    export default{
        name: 'App',
        components: {
            FirstComponent,
            DataInComponentVue,
            Lifecycle_HooksVue,
            Hierarquia_Component,
            Event,
            Event_Multi,
            Emit,
            Header,
            Footer
        },
    }
</script>