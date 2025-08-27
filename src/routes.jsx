import App from "./App";
import Error from './components/Error/Error';
import Shop from './components/Shop/Shop';
import Hero from './components/Hero/Hero';
import Product from "./components/Shop/Product/Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

async function productLoader({ params }) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!response.ok) {
            throw new Error('Product not found');
        }
        const product = await response.json();
        return { product };
    } catch (error) {
        throw new Error(`Error loading product: ${error.message}`);
    }
}

export const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                errorElement: <Error />,
                children: [
                    { index: true, element: <Hero /> },
                    {
                        path: 'shop',
                        element: <Shop />,
                    },
                    {
                        path: 'product/:id',
                        element: <Product />,
                        loader: productLoader,
                        errorElement: <Error />,
                    },
                    {
                        path: 'shopping-cart',
                        element: <ShoppingCart />
                    }
                ]
            }
        ]
    }
];