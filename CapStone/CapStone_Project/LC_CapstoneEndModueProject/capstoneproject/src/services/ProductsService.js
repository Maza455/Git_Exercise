import Api from "./Api.js";

export default {
    getAllProducts() {
        return Api().get("/api/products/getAllProduc");
    },
    topSellProduct(limit) {
        return Api().get(`/api/products/topSellProduct/${limit}`);
    },
    newAddProduct(limit) {
        return Api().get(`/api/products/newAddProduct/${limit}`);
    },
    createProduct(credentials) {
        return Api().post("/api/products/createProduct", credentials);
    },
    updateProduct(credentials) {
        return Api().patch("/api/products/updateProduct", credentials);
    },
    deleteProduct(prodID) {
        return Api().delete(`/api/products/deleteProduct/${prodID}`);
    },
};