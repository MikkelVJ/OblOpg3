Vue.createApp({
    data() {
        return {
            word: null,
            results: []
        }
    },
    methods: {
        sayWord(word) {
            if (word)
                this.results[0] = word,
                this.results[1] = word.toUpperCase(),
                this.results[2] = word.toLowerCase()
            else
                this.results = "No word"
        }
    }
}).mount("#app")