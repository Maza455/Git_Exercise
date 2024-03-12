import Api from "./Api.js";

export default {
    checkUserName(userName) {
        return Api().get(`/api/user/checkUserName/${userName}`);
    },
    deleteAccount(userID) {
        return Api().delete(`/api/user/deleteAccount/${userID}`);
    },
    getUserList() {
        return Api().get("/api/user/getUserList");
    },
    updateUser(credentials) {
        return Api().post("/api/user/updateUser", credentials);
    },
    getUserById(userID) {
        return Api().get(`/api/user/getUserById/${userID}`);
    },
    getUserByEmail(email) {
        return Api().get(`/api/user/getUserByEmail/${email}`);
    },
};