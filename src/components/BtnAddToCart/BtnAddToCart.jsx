import '../../index.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartProvider';

export default function BtnAddToCart({ product }) {
    const { cart, setCart } = useContext(ShoppingCartContext);

    product.first = true;

    function handleAddToCartClick() {
        console.log(product);
        setCart([...cart, product]);
    }

    return (
        <>
            <button className={`button`} onClick={handleAddToCartClick}>Add to cart</button>
        </>
    )
}