<template>
    <div>
        <h2>Teste de Evento</h2>
        <form @submit="sendForm($event)">
            <input
                type="text"
                v-model="name"
                placeholder="Nome de usuário"
            >
            <input
                type="password"
                v-model="password"
                placeholder="Digite sua senha"
            >
            <input type="submit" value="Enviar evento">
        </form>
    </div>
</template>

<script>
    export default({
        name: "Event",
        data(){
            return{
                name: "",
                password: ""
            }
        },
        methods: {
            sendForm(e){
                e.preventDefault()
                const name = this.name
                const pass = this.password
                console.log("Formulário enviado!")
                console.log(
                    `USER: ${name}\nSENHA: ${pass}`
                )
            }
        }
    })
</script>