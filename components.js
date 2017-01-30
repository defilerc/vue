Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});



// Vue.component('newsitem', {
//   props: ['newsit'],
//   template: '<h1>{{ newsit.title }}</h1><p>Body Here: {{ newsit.body }}</p>'
// });

new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

Vue.component('news-item', {
  props: ['title', 'body'],
  template: '<article><h1>{{title}}</h1><p>{{body}}</p></article>'
});

new Vue({
  el: '#app8',
  data: {
    hot: 5
  }
});

