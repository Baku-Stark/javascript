<template>
    <div>
        <h1>Lifecyle Hooks</h1>
        <p>Meu nome é: {{ nome }}</p>
    </div>
</template>

<script>
    export default{
        name: 'Lifecycle',
        data(){
            return{
                nome: 'Ainda não sei.'
            }
        },
        created(){
            setTimeout(() => {
                this.nome = 'Wallace [created]'
            }, 1000)
        },
        mounted(){
            setTimeout(() => {
                this.nome = 'Tony [mounted]'
            }, 2000)

            this.lifeCycle()
        },
        methods:{
            lifeCycle(){
                console.log('Evento (lifeCycle) ativado!')
            }
        }
    }
</script>