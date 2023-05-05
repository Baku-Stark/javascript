<template>
    <!-- v-bind (resumido) -->
    <img :src="avatar" :alt="desc">
    <Emit @mudar-imagem="mudarImagem"/>
</template>

<script>
    import Emit from '../Emit.vue';

    export default{
        name: 'Picture',
        components:{
            Emit
        },
        methods:{
            mudarImagem(){
                this.avatar = "/img/avatar_2.jpg"
            }
        },
        data(){
            return{
                avatar: "/img/avatar.png",
                desc: "Wallace"
            }
        }
    }
</script>