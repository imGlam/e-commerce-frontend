import Payment from '../components/Payment/Payment';
import CheckoutLayout from '../layouts/CheckoutLayout/CheckoutLayout';
import DefaultLayout from '../layouts/DefaultLayout';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Top from '../pages/Collections/Top';
import Accessories from '../pages/Collections/Accessories';
import Sneaker from '../pages/Collections/Sneaker';
import Bottom from '../pages/Collections/Bottom';
import Home from '../pages/Home';
import ProductBuy from '../pages/ProductBuy';
import Vans from '../pages/Collections/Sneaker/Vans';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/top',
        component: Top,
        layout: DefaultLayout,
    },
    {
        path: '/bottom',
        component: Bottom,
        layout: DefaultLayout,
    },
    {
        path: '/sneaker',
        component: Sneaker,
        layout: DefaultLayout,
    },
    {
        path: '/accessories',
        component: Accessories,
        layout: DefaultLayout,
    },
    {
        path: '/sneaker/vans',
        component: Vans,
        layout: DefaultLayout,
    },
    {
        path: '/product/:id',
        component: ProductBuy,
        layout: DefaultLayout,
    },
    {
        path: '/checkout/:name/payment',
        component: Payment,
        layout: CheckoutLayout,
    },
    {
        path: '/checkout/:name',
        component: Checkout,
        layout: CheckoutLayout,
    },
    {
        path: '/cart',
        component: Cart,
        layout: DefaultLayout,
    },
];

export { publicRoutes };
