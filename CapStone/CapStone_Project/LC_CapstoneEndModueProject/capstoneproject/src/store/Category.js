import CategoryService from "@/services/CategoryService.js";
import {
    createStore
} from 'vuex';

export const categoryModule = {
    namespaced: true,
    state() {
        return {
            categoryList: [],
        };
    },
    mutations: {
        SET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList;
        },
    },
    actions: {
        async setCategoryList({
            commit
        }) {
            try {
                const categoryList = (await CategoryService.getCategoryList()).data;
                commit("SET_CATEGORY_LIST", categoryList);
            } catch (error) {
                console.log(error.response.data.error);
            }
        },
        async getCategoryList({
            state,
            dispatch
        }) {
            if (state.categoryList && state.categoryList.length === 0) {
                await dispatch("setCategoryList");
            }
            return state.categoryList;
        },
        async getCategoryName({
            state,
            dispatch
        }, categoryId) {
            const categoryList = await dispatch("getCategoryList");
            const index = categoryList.findIndex((obj) => obj.id === categoryId);
            return state.categoryList[index].name;
        },
    },
};

const store = createStore({
    modules: {
        category: categoryModule,
    },
});

export default store;