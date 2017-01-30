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
        },
        warn: function (message, event) {
            // now we have access to the native event
            if (event) { 
                event.preventDefault();
            }
            alert(message);
        }
    }
});