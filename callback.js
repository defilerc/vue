var data = { a: 1 };

var vm = new Vue({
  el: '#example',
  data: data,
  created: function() {
      // lifetimehook 'created'. note: 'this' points to vm instance
      console.log('a is: ' + this.a);
  }
});

//vm.$data === data // -> true
//vm.$el === document.getElementById('example') // -> true

// $watch is an instance method
vm.$watch('a', function (newVal, oldVal) {
    alert('changed: ' + oldVal + ' to ' + newVal);
  // this callback will be called when `vm.a` changes
});