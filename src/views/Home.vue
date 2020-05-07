<template>
  <div class="home">
    
  </div>
  
</template>

<script>
// @ is an alias to /src

import books from '../assets/childrensbooks.json'

export default {
  name: 'Home',
  components: {
    

  },
  data(){
    return{
      books : books.books
    }
  }
}
</script>
