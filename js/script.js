const {
    createApp
} = Vue 

createApp({

    data() {
        return {
            email: null
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((results) => {
                this.email = results.data.response
            })
        }
    }

}, ).mount('#app')