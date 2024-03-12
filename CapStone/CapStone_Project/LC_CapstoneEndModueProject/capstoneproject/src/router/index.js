import {
    createRouter,
    createWebHistory
} from 'vue-router';
import {
    useStore
} from 'vuex';

import HomeView from '@/views/HomeView.vue';
import CategoryProductsView from '@/views/CategoryProductsView.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue';
import OrderView from '@/views/OrderView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home | Kasi.eCo'
        }
    },
    {
        path: '/products/:category',
        name: 'category-products',
        component: CategoryProductsView,
        meta: {
            title: 'Products page | Kasi.eCo'
        }
    },
    {
        path: '/cart-view',
        name: 'cart-view',
        component: CartView,
        meta: {
            title: 'Cart | Kasi.eCo'
        }
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: CheckoutView,
        meta: {
            title: 'Checkout | Kasi.eCo'
        }
    },
    {
        path: '/order/:sessionId',
        name: 'order',
        component: OrderView,
        meta: {
            title: 'Order details | Kasi.eCo'
        }
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            title: 'About | Kasi.eCo'
        }
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: {
            title: 'Contact | Kasi.eCo'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    const store = useStore();

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const admin = store.state.CurrentUser.admin;

    if (requiresAuth && !admin) {
        next('/error/401');
    } else {
        next();
    }
});

export default router;
