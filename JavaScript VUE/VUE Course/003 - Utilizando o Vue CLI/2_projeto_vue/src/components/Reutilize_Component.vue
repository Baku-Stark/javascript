<template>
    <div>
        <button
            @click="ativar"
        >
            Ativar o v-show(Reutilize_Component)
        </button>
        <span v-show="ativou">
            Ativado!
        </span>
    </div>
</template>

<script>
    export default({
        name: "Reutilize_Component",
        data(){
            return{
                ativou: true
            }
        },
        methods:{
            ativar(){
                this.ativou = !this.ativou
            },
        }
    })
</script>