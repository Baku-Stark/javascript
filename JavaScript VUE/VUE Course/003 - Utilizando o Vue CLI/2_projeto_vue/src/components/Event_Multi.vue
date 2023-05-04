<template>
    <div>
        <button
            @click="primeiro($event), segundo($event)"
        >
            Ativar Múltiplos eventos
        </button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
    export default({
        name: "Event_Multi",
        data(){
            return{
                multiplos_eventos: ""
            }
        },
        methods:{
            primeiro(e){
                this.multiplos_eventos = "Primeiro Evento ativado!"
            },
            segundo(e){
                setTimeout(() => this.multiplos_eventos = "Segundo Evento ativado!", 500)
            }
        }
    })
</script>