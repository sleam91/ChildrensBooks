<template>
    <div class="home">
        <h1>8 Classic Childrens books</h1>
        <Book
            v-for="singleBook in this.$root.getBooks()"
            v-bind:key="singleBook.id"
            v-bind:book="singleBook"
        />
    </div>
</template>

<script>
import Book from "@/components/Book";

export default {
    name: "Home",

    components: {
        Book
    },
    data() {
        return {};
    },
    methods: {},
    computed: {}
};
</script>

<style lang="scss" scoped>
.home {
    padding: 5vh;
    display: grid;
    grid-template-areas:
        "title title title title"
        "book book book book";
    gap: 1rem;
}
h1 {
    font-size: 3rem;
    grid-area: title;
    margin: 0;
}

Book {
    grid-area: book;
}
</style>
