<script>
// import axios from "axios";
// import { onMounted, ref } from "vue";
// let products = ref([]);
// onMounted(async () => {
//     getProducts();
// });
// const getProducts = async () => {
//     console.log(1);
//     let response = await axios.get("http://localhost/vuejs-first/public/show");
//     console.log("products", response.data);
//     // products.value = response.data;
// };
</script>
<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/products" class="nav-link active"
                                >products</router-link
                            >
                        </li>
                        <li>
                            <router-link class="nav-link active" to="/unknown"
                                >not found</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view> </router-view>
    </div>
</template>
