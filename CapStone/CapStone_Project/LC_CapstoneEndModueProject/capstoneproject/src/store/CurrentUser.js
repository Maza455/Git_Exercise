export const currentUserModule = {
    namespaced: true,
    state() {
        return {
            token: "",
            user: {},
            admin: false,
            userId: 0,
            newUserEmail: "",
            newUserId: 0,
            userLoggedIn: false,
        };
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
            state.userLoggedIn = token !== "";
        },
        SET_USER(state, user) {
            state.user = user;
            if (Object.keys(user).length !== 0) {
                state.userId = user.id;
                state.admin = user.priority === 1;
            } else {
                state.admin = false;
                state.userId = 0;
            }
        },
        SET_NAME(state, {
            firstName,
            lastName
        }) {
            state.user.firstName = firstName;
            state.user.lastName = lastName;
        },
        SET_USERNAME(state, userName) {
            state.user.username = userName;
        },
        SET_NEW_USER_ID(state, id) {
            state.newUserId = id;
        },
        SET_NEW_USER_EMAIL(state, email) {
            state.newUserEmail = email;
        },
    },
    actions: {
        setToken({
            commit
        }, token) {
            commit("SET_TOKEN", token);
        },
        setUser({
            commit
        }, user) {
            commit("SET_USER", user);
        },
        setName({
            commit
        }, {
            firstName,
            lastName
        }) {
            commit("SET_NAME", {
                firstName,
                lastName
            });
        },
        setUserName({
            commit
        }, userName) {
            commit("SET_USERNAME", userName);
        },
        setNewUserId({
            commit
        }, id) {
            commit("SET_NEW_USER_ID", id);
        },
        setNewUserEmail({
            commit
        }, email) {
            commit("SET_NEW_USER_EMAIL", email);
        },
    },
};

export default currentUserModule;