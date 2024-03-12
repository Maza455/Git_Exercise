import {
    createStore
} from 'vuex';
import CartModule from './Cart.js';
import CategoryModule from './Category.js';
import ProductsModule from './Products.js';
import CheckoutModule from './Checkout.js';
import CurrentUserModule from './CurrentUser.js';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    strict: true,
    plugins: [createPersistedState()],
    modules: {
        Cart: CartModule,
        Category: CategoryModule,
        Products: ProductsModule,
        Checkout: CheckoutModule,
        CurrentUser: CurrentUserModule,
    },
});

export {
    store
};