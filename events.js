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

Vue.component('button-counter', {
  template: '<button @click="incrementme">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementme: function () {
      this.counter += 1;
      this.$emit('increment');
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1;
    }
  }
});