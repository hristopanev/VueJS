new Vue ({
    el: '#app',
    data: {
        name: 'Ivan',
        title: 'First Vue App',
        hasTodos: true,
        time: new Date(),
        todos: [
            'Do the dieshesh',
            'By groceries',
            'Make your bed',
        ]
    },

    methods: {
        updateTime() {
            this.time = new Date();
        }
    }
});