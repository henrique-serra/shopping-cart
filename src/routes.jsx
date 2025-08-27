import App from "./App";
import Error from './components/Error/Error';
import Shop from './components/Shop/Shop';
import Hero from './components/Hero/Hero';

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
                    }
                ]
            }
        ]
    }
];