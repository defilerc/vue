var app = new Vue({
    el: '#app',
    data: {
        msg: 'konstantinos'
    },
    filters: {
        capitalize: function (value) {
            return (!value) 
                ? '' 
                : value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});