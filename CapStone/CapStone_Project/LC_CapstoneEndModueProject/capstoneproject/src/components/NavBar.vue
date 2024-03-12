<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background: indigo;">
        <div class="container-fluid">
            <router-link to="../index.html" class="navbar-brand">
                <img src="https://i.postimg.cc/HxFKfh56/Proctor.png" alt="logo" width="45" height="35"
                    class="d-inline-block align-text-top mr-2 navbar-logo">
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-capitalize">
                    <li class="nav-item">
                        <router-link to="../views/HomeView.vue" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="../views/AboutView.vue" class="nav-link active">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="../views" class="nav-link active">Product</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="./admin.html" class="nav-link active">Admin</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Category
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><router-link to="./career.html" class="dropdown-item">Careers</router-link></li>
                            <li><router-link to="./books.html" class="dropdown-item">Books</router-link></li>
                            <li><router-link to="./mobile.html" class="dropdown-item">Phones</router-link></li>
                            <!-- <hr class="dropdown-divider">
                            </hr> -->
                            <li><router-link to="./login.html" class="dropdown-item">Login/Signup</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link to="./cart.html" class="nav-link active">Checkout</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="./contact.html" class="nav-link active">Contact</router-link>
                    </li>
                </ul>

                <form class="d-flex">
                    <input class="form-control me-2" type="search" id="search-input" placeholder="Search"
                        aria-label="Search">
                    <button class="btn btn-outline-dark" id="search-button" type="submit">Search</button>
                </form>

                <!-- Additional Vue components can be added here for search functionality -->

            </div>
        </div>
    </nav>
</template>

<script>
export default {
    // Add any necessary logic or data bindings here
}
</script>

<style scoped>
.navbar-nav .nav-item .nav-link {
    color: white;
    /* Set text color to white */
}

</style>
