<template>
    <!-- v-bind (resumido) -->
    <img :src="avatar" :alt="desc">
</template>

<script>
    export default{
        name: 'Picture',
        data(){
            return{
                avatar: "/img/avatar.png",
                desc: "Wallace"
            }
        }
    }
</script>