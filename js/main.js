$(function () {

    const vm = new Vue({
        el: '#app',
        data: {
            message: 'Hello world!',
            someInput: '',
            checked: [],
            count: 0,
            fact: null,
            loading: false,
            todos: [],
            newTodo: ''
        },
        computed: {
            negativeCount() {
                return this.count * -1
            },
            completedTodos() {
                return _.filter(this.todos, { complete: true }).length
            },
            incompleteTodos() {
                return _.filter(this.todos, { complete: false }).length
            }
        },
        methods: {
            incrementTheCount(by) {
                this.count = this.count + by
            },
            getChuckNorrisFact() {
                this.loading = true
                this.$http.get('https://api.chucknorris.io/jokes/random')
                    .then(resp => {
                        this.fact = resp.body
                        this.loading = false
                    })
            },
            addTodo() {
                this.todos.push({
                    complete: false,
                    text: this.newTodo
                })
                this.newTodo = ''
            }
        }
    })

})