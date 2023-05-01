const MyNameApp = {
    data(){
        return {
            name: "Wallace",
            age: 22
        }
    }
}

Vue.createApp(MyNameApp).mount("#app")