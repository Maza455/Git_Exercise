<template>
    <section class="deals">
        <h1 class="first">BOOK STORE</h1>
        <marquee width="100%" direction="left" height="100px" scrollamount="12">
            More Genre Will Be Added Soon !! Thanks for your patience.
        </marquee>
        <br>

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <!-- Front side of the card -->
                </div>
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a href="#"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <!-- Repeat the above structure for other cards -->

        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-back">
                    <h1>Best Sellers</h1>
                    <p class="text">Choose from thousands of<br>bestsellers.</p>
                    <a href="#"><button class="buybutton">Buy</button></a>
                </div>
            </div>
        </div>

        <!-- Fetch data from backend -->
        <div v-if="loading">
            Loading...
        </div>
        <div v-else>
            <div v-for="book in books" :key="book.id">
                <h1>{{ book.title }}</h1>
                <p class="text">{{ book.description }}</p>
                <a href="#"><button class="buybutton">Buy</button></a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            loading: true,
            books: []
        };
    },
    async created() {
        try {
            const response = await axios.get('/api/books');
            this.books = response.data;
            this.loading = false;
        } catch (error) {
            console.error(error);
            this.loading = false;
        }
    }
};
</script>

<style scoped>

/* Books styling */
@import url(https://fonts.googleapis.com/css?family=Oleo+Script);

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@media screen and (max-width: 500px) {
    .nav-link {
        font-size: 13px !important;
    }

    .dropdown-item {
        font-size: 13px !important;
    }

    .line-in {
        font-size: 13px !important;
    }

    .btn {
        font-size: 13px !important;
    }

    .img-sz {
        height: 150px !important;
    }

    .head-sz {
        font-size: 37px !important;
    }

    .mid-sz {
        font-size: 24px !important;
    }

    .mid1-sz {
        font-size: 15px !important;
    }

    .mid2-sz {
        font-size: 20px !important;
        padding-top: 45px !important;
        height: 150px !important;
        width: 150px !important;
        margin-left: 6px !important;
    }

    .mid3-sz {
        font-size: 13px !important;
        margin-top: 38px !important;
    }

    .mid4-sz {
        font-size: 26px !important;
    }

    .flip-card {
        height: 92px !important;
        width: 92px !important;
        margin: 10px 10px 30px 10px !important;
    }

    .flip-card img {
        height: 35px !important;
        margin-top: 10px !important;
    }

    .flip-card-front p {
        font-size: 10px !important;
        margin-top: 8px !important;
    }

    .flip-card-front {
        border: 2.5px solid rgb(67, 67, 163);
    }

    .md-sz {
        font-size: 13px !important;
        margin: 0 !important;
    }

    .text-white {
        font-size: 13px !important;
    }

    footer h5::before {
        padding-right: 2.5px !important;
    }

    .mb-4 {
        margin-bottom: 0.5rem !important;
    }

    #btnScrollToTop {
        width: 30px !important;
        height: 30px !important;
    }

    .material-icons {
        font-size: 19px !important;
    }
}

@media screen and (max-width: 425px) {
    .nav-link {
        font-size: 11px !important;
    }

    .dropdown-item {
        font-size: 11px !important;
    }

    .line-in {
        font-size: 11px !important;
    }

    .btn {
        font-size: 11px !important;
    }

    .img-sz {
        height: 130px !important;
    }

    .head-sz {
        font-size: 30px !important;
    }

    .mid-sz {
        font-size: 19px !important;
    }

    .mid1-sz {
        font-size: 13px !important;
    }

    .mid2-sz {
        font-size: 16px !important;
        padding-top: 35px !important;
        height: 130px !important;
        width: 130px !important;
        margin-left: 6px !important;
        margin-right: 6px !important;
    }

    .mid3-sz {
        font-size: 11px !important;
        margin-top: 32px !important;
    }

    .mid4-sz {
        font-size: 21px !important;
    }

    .flip-card {
        height: 77px !important;
        width: 77px !important;
        margin: 7.5px 7.5px 24px 7.5px !important;
    }

    .flip-card img {
        height: 28px !important;
        margin-top: 8px !important;
    }

    .flip-card-front p {
        font-size: 10px !important;
        margin-top: 8px !important;
    }

    .flip-card-front {
        border: 2.5px solid rgb(67, 67, 163);
    }

    .md-sz {
        font-size: 11px !important;
        margin: 0 !important;
    }

    .text-white {
        font-size: 11px !important;
    }

    footer h5::before {
        padding-right: 2.5px !important;
    }

    .mb-4 {
        margin-bottom: 0.5rem !important;
    }

    #btnScrollToTop {
        width: 25px !important;
        height: 25px !important;
    }

    .material-icons {
        font-size: 15px !important;
    }
}

/* FLIP CARD SECTION */

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    margin-left: 6%;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    background: url(https://www.flashfly.net/wp/wp-content/uploads/2021/09/Apple-September-Event-2021-Wallpapers.jpg);
    color: black;
    cursor: pointer;
}

.flip-card-back {
    background-color: #2980b9;
    color: white;
    transform: rotateY(180deg);
    cursor: pointer;
}

.flip-card-f {
    background: url(https://miro.medium.com/v2/resize:fit:1400/1*hATrZKA8SEHzRqSIUyMXew.jpeg);
    color: black;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

.flip-card-r {
    background: url(https://www.dealntech.com/wp-content/uploads/2022/05/iPhone-Wallpaper.jpg);
    color: black;
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

.flip-card-o {
    background: url(https://media.karousell.com/media/photos/products/2021/1/5/reference_book_for_computer_sc_1609847313_ac94430f_progressive) no-repeat;
    color: black;
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

.flip-card-x {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQWxhBcg5QrOamlNC0yDbcMJzGsUDHhL_Yw&usqp=CAU);
    color: black;
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

.flip-card-t {
    background: url(https://i.postimg.cc/7YBSjnM2/IMG-0371c-1024x734.jpg);
    color: black;
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

.flip-card-u {
    background: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyU3uVX2IOgS3ZnFCGHBnbAiuP1tccnlffpg&usqp=CAU);
    color: black;
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

.flip-card-v {
    background: url(https://i.postimg.cc/7YBSjnM2/IMG-0371c-1024x734.jpg);
    color: black;
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

.flip-card-w {
    background: url(https://static-01.daraz.com.np/p/8c743da84d5d36444047562300fac2ec.jpg);
    color: black;
    position: absolute;
    width: 100%;
    cursor: pointer;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border: 5.5px solid rgb(67, 67, 163);
}

@import url("https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Encode+Sans+SC&display=swap");

h1 {
    font-family: "Encode Sans SC", sans-serif;
}

.text {
    font-family: "Zen Tokyo Zoo", cursive;
}

.buybutton {
    margin-left: 30%;
    width: 40%;
    margin-top: 20px;
    text-transform: uppercase;
}

.buybutton:hover {
    transform: scale(1.12);
    transition: 0.5s all ease-in-out;
}

/* Cards */
.first {
    text-align: center;
    padding-top: 3%;
}

h1 {
    padding-top: 20px;
}

.best {
    width: 800px;
    height: 200px;
}

</style>