import Vue from 'vue'
import App from './App.vue'
import router from './router'
import books from './assets/childrensbooks.json'
import store from './store'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      books: books.books
    }
  },

  methods: {
    getBook(id) {
      return this.books.find(book => book.id == id)
    },
    getBooks() {
      return this.books
    }
  },

  router,
  store,
  render: h => h(App)
}).$mount('#app')
