<template>
    <div>
        <p v-if="In_job">Estou trabalhando no momento</p>
        <p v-else>Na procura de um emprego</p>
        <p>Utilizo as seguintes linguagens (Back-END):</p>
        <!-- Renderização de listas (v-for) -->
        <ul>
            <li
                v-for="(tech, ind) in backend_technologies"
                v-bind:key="ind"
            >
                {{ tech }}
            </li>
        </ul>
        <hr>
        <p>Utilizo as seguintes linguagens (Front-END):</p>
        <ul>
            <li
                v-for="tech in frontend_technologies"
                v-bind:key="tech.id"
            >
                {{ tech.lang }}
            </li>
        </ul>
        <div>
            <!-- Curso de Vue 3: #11 - Métodos -->
            <button @click="show">{{ button_value }}</button>
            <p v-show="show_email">Mande sua mensagem para: {{ email }}</p>
        </div>
        <p>Para acessar meu portfólio:
            <a v-bind:href="my_link" target="_blank">
                Clique aqui!
            </a>
        </p>
        <Picture />
    </div>
</template>

<script>
    import Picture from './src/Picture.vue'

    export default{
        name: 'Info',
        components:{
            Picture
        },
        data(){
            return{
                In_job: true,
                show_email: false,
                button_value: "Mostrar e-mail",
                email: "wallace@gmail.com",
                my_link: "https://google.com",
                backend_technologies: [
                    "C++",
                    "Python",
                    "TypeScript"
                ],
                frontend_technologies: [
                    {id: 1, lang: "SASS"},
                    {id: 2, lang: "Bootstrap"},
                    {id: 3, lang: "JavaScript"},
                ]
            }
        },
        methods:{
            show(){
                // shorthand
                this.show_email = this.show_email ? false : true

                if(this.show_email){
                        this.button_value = "Esconder e-mail"
                    }

                else{
                    this.button_value = "Mostrar e-mail"
                }
            }
        }
    }
</script>