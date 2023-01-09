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
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((results) => {
            this.email = results.data.response
        })
    }
}, ).mount('app')