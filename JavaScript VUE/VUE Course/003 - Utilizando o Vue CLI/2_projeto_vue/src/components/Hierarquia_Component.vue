<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
        <Info
            compEmail="wallacemds@email.com" 
            :email="email"
        />
        <Form />
    </div>
</template>

<script>
    import Form from './Form.vue'
    import Info from './Info.vue'

    export default{
        components:{
            Info,
            Form
        },

        data(){
            return{
                nome: "Wallace",
                email: "wallace_mds@email.com"
            }
        }
    }
</script>