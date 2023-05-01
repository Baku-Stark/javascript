const MyNameApp = {
    data(){
        return {
            name: "",
            input_name: ""
        }
    },

    methods:{
        submitform(e){
            // impedir que o dado vá para o servidor
            e.preventDefault()
            
            /*
                this.input_name = valor do input
                this.name = Main Name
            */
            this.name = this.input_name
        }
    },
}

Vue.createApp(MyNameApp).mount("#app")