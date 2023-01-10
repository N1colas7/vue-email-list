const {
    createApp
} = Vue 

createApp({

    data() {
        return {
            mails: []
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risposta) => {
                this.mails.push(risposta.data.response)
            })
        }
    }

}).mount('#app');