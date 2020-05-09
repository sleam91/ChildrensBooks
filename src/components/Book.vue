<template>
    <router-link class="book" v-bind:to="'/' + book.id" v-bind:style="bookColor">
        <div class="line"></div>
        <div class="text">
            <h3>{{book.title}}</h3>
            <p>{{book.author}}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "Book",
    props: {
        book: Object
    },
    data() {
        return {
            bookColor: {
                // backgroundColor: this.book.color,
                backgroundImage:
                    "linear-gradient(to top right," +
                    this.book.color +
                    "," +
                    this.book.color +
                    "BF)"
            }
        };
    }
};
</script>

<style lang="scss" scoped>
.book {
    width: 14.6rem;
    height: 18rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    color: white;
    text-decoration: none;
    border-radius: 0.2rem;
}

.line {
    margin-left: 0.6rem;
    border-left: 4px solid rgba(0, 0, 0, 0.432);
    height: 100%;
}

.text {
    padding-left: 1rem;
    padding-right: 1.5rem;

    h3 {
        font-size: 1.3rem;
        margin: 0;
    }
    p {
        font-size: small;
        margin: 0;
        margin-bottom: 1rem;
    }
}
</style>