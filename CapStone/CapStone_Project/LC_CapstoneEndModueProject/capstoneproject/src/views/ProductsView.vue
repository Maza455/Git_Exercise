<template>
    <div class="container">
        <div class="sort-container">
            <button @click="sortBy('desc')">SortByDesc</button>
            <button @click="sortBy('asc')">SortByAsc</button>
        </div>
        <!-- <input type="text" placeholder="Search Product" v-model="searchQuery">
        <div class="search-results">
            <div class="product-card" v-for="product in filteredProducts" :key="product.prodID">
    </div> -->
        <div class="product-container">
            <div class="product-card" v-for="product in products" :key="product.prodID">

                <div class="image-container">
                    <img :src="product.imageURL" alt="Product Image" class="product-image">
                </div>
                <div class="content">
                    <h4>{{ product.prodName }}</h4>
                    <button @click="viewMore(product)">View More</button>
                    <div v-if="product.showDetails">
                        <p>Quantity: {{ product.prodQuantity }}</p>
                        <p>Amount: {{ product.prodAmount }}</p>
                        <p>Book_Size: {{ product.prodSize }}</p>
                        <p>Book_Color: {{ product.prodColor }}</p>
                        <p>Description: {{ product.prodDesc }}</p>
                        <button @click="back(product)">Back</button>
                    </div>
                    <button @click="purchase(product)">Purchase</button>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->

</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        filteredProducts() {
            return this.products.filter(product => product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()))
        },
        
    },
    methods: {
        viewMore(product) {
            product.showDetails = !product.showDetails;
        },
        back(product) {
            product.showDetails = !product.showDetails;
        },
        sortBy(sortType) {
            if (sortType === 'desc') {
                this.products.sort((a, b) => b.prodName.localeCompare(a.prodName))
            } else {
                this.products.sort((a, b) => a.prodName.localeCompare(b.prodName))
            }
        }

    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
}
</script>
<style scoped>
.product-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}

.product-card {
    background-color: #F0F0F0;
    padding: 20px;
}

.image-container {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
}

.product-card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
    flex-grow: 1;
}

button {
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    margin-right: 10px;
    border-radius: 20px;
    cursor: pointer;
    display: block;
    margin: 0 auto;
}

.sort-container {
    text-align: center;
}

button:last-child {
    margin-right: 0;
}

button:hover {
    background-color: #0056B3;
}
</style>