<template>
    <div class="current-book">
        <router-link to="/">
            <img src="../assets/arrow.svg" alt />
        </router-link>
        <h1 class="author">{{getBook.title}}</h1>
        <h2 class="author">By {{getBook.author}}</h2>
        <p class="plot">{{getBook.plot}}</p>
        <div class="info-box">
            <p>Audience: {{getBook.audience}}</p>
            <p>Pages: {{getBook.pages}}</p>
            <p>First published: {{getBook.year}}</p>
            <p>Publisher: {{getBook.publisher}}</p>
        </div>
        <h3 class="read-it">Oh, I want to read it!</h3>
    </div>
</template>

<script>
export default {
    name: "BookInfo",
    methods: {},
    computed: {
        getBook() {
            return this.$root.getBook(this.$route.params.id);
        }
    }
};
</script>

<style lang="scss" scoped>
img {
    width: 1.6rem;
    background: grey;
    padding: 0.25rem;
    border-radius: 50%;
}

.current-book {
    background: rgb(31, 31, 31);
    width: 100vw;
    height: 100vh;
    padding: 3rem;
}
</style>
