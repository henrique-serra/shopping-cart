import '../../index.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartProvider';

export default function BtnAddToCart({ product }) {
    const { cart, setCart } = useContext(ShoppingCartContext);

    return (
        <>
            <button className={`button`} onClick={() => setCart([...cart, product])}>Add to cart</button>
        </>
    )
}