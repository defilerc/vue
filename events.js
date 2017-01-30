var app = new Vue({
    el: '#example-1',
    data: {
        counter: 1
    },
    methods: {
        greet: function (event) {
            alert('counter is ' + this.counter + '!');

            if (event) {
                alert(event.target.tagName);
            }
        }
    }
});