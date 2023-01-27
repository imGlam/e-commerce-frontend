import Payment from '../components/Payment/Payment';
import CheckoutLayout from '../layouts/CheckoutLayout/CheckoutLayout';
import DefaultLayout from '../layouts/DefaultLayout';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Backpacks from '../pages/Collections/Backpacks';
import CrossbodyBags from '../pages/Collections/CrossbodyBags';
import TotesAccessories from '../pages/Collections/TotesAccessories';
import Wallets from '../pages/Collections/Wallets';
import Home from '../pages/Home';
import ProductBuy from '../pages/ProductBuy';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/collection/backpacks',
        component: Backpacks,
        layout: DefaultLayout,
    },
    {
        path: '/collection/wallets',
        component: Wallets,
        layout: DefaultLayout,
    },
    {
        path: '/collection/tote-accessories',
        component: TotesAccessories,
        layout: DefaultLayout,
    },
    {
        path: '/collection/crossbody-bags',
        component: CrossbodyBags,
        layout: DefaultLayout,
    },
    {
        path: '/product/:name',
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
