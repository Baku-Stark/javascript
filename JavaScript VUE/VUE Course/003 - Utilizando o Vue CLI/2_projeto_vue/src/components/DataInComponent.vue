<template>
    <div>
        <h1>Dados em componentes (data)</h1>
        <p>Seu nome é: <b>{{name}}</b></p>
        <p>Profissão: <b>{{profissao}}</b></p>
    </div>
</template>

<script>
    export default{
        name: 'DataInComponent',
        data(){
            return{
                name: "Wallace",
                profissao: "Developer"
            }
        }
    }
</script>