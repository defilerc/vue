var app = new Vue({
    el: '#example',
    data: {
        msg: 'My Message in the bottle'
    },
    computed: {
        reversedMsg: function() {
            return this.msg.split('').reverse().join('');
        }
    }
});