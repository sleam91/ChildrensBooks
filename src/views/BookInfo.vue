<template>
    <div class="book-info">
        <router-link to="/">
            <img src="../assets/arrow.svg" alt />
        </router-link>
        <div class="current-book">
            <div class="white-background">
                <div class="big-book" v-bind:style="bookColor">
                    <div class="line"></div>
                    <div class="text">
                        <h1>{{getBook.title}}</h1>
                        <p>{{getBook.author}}</p>
                    </div>
                </div>
            </div>
            <div class="information">
                <h1 class="title">{{getBook.title}}</h1>
                <h3 class="author">By {{getBook.author}}</h3>
                <p class="plot">{{getBook.plot}}</p>
                <div class="info-box">
                    <p>
                        <span>Audience:</span>
                        {{getBook.audience}}
                    </p>
                    <p>
                        <span>Pages:</span>
                        {{getBook.pages}}
                    </p>
                    <p>
                        <span>First published:</span>
                        {{getBook.year}}
                    </p>
                    <p>
                        <span>Publisher:</span>
                        {{getBook.publisher}}
                    </p>
                </div>
                <h3 class="read-it">Oh, I want to read it!</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BookInfo",
    data() {
        return {
            bookColor: {
                backgroundImage:
                    "linear-gradient(to top right," +
                    this.$root.getBook(this.$route.params.id).color +
                    "," +
                    this.$root.getBook(this.$route.params.id).color +
                    "99)"
            }
        };
    },
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

.book-info {
    background: rgb(31, 31, 31);
    width: 100vw;
    height: 100vh;
    padding-top: 3rem;
    padding-left: 18rem;
    padding-right: 18rem;
    .current-book {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .white-background {
            background: white;
            border-radius: 0.2rem;
            .big-book {
                min-height: 75vh;
                min-width: 30vw;
                display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                color: rgba(0, 0, 0, 0.808);
                text-decoration: none;
                border-radius: 0.2rem;
                .line {
                    margin-left: 1.4rem;
                    border-left: 5px solid rgba(0, 0, 0, 0.432);
                    height: 75vh;
                }

                .text {
                    padding-left: 2rem;
                    padding-right: 1.5rem;
                    margin-bottom: 1.5rem;

                    h1 {
                        font-size: 2.8rem;
                        margin: 0;
                    }
                    p {
                        font-size: 1.4rem;
                        margin: 0;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
        .information {
            min-height: 75vh;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 0 3rem;
            .title {
                color: white;
                margin-bottom: 0;
                margin-top: 0;
                font-size: 2.8rem;
            }
            .author {
                margin-top: 0;
            }
            .author,
            p {
                color: rgba(255, 255, 255, 0.623);
                line-height: 1.6;
            }

            .info-box {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: space-between;
                max-height: 5rem;
                background: rgb(41, 41, 41);
                border-radius: 2%;
                margin-bottom: 1rem;
                p {
                    padding-top: 0.5rem;
                    margin-bottom: 0;
                    margin-top: 0;
                }
                span {
                    color: white;
                }
            }
            .read-it {
                color: black;
                background: white;
                padding: 1.2rem;
                border-radius: 8px;
                width: 50%;
            }
        }
    }
}
</style>
