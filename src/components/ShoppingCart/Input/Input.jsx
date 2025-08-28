import '../../../index.css';
import styles from './Input.module.css';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider';

export default function Input({ product }) {
    const { cart, setCart } = useContext(ShoppingCartContext);
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(e) {
        const value = e.target.value;

        // Only numbers allowed
        if (!/^\d*$/.test(value)) return;

        setInputValue(value);
    }

    function setCartQty(product, newQty) {
        if (newQty < 0) return;

        const cartWithoutProduct = cart.filter((p) => p.id !== product.id);
        const productsToAdd = Array(newQty).fill(product);

        setCart([...cartWithoutProduct, ...productsToAdd]);
    }

    function handleInputBlur(e, product) {
        const value = parseInt(e.target.value) || 0;
        setCartQty(product, value);
        setInputValue('');
    }

    return <input 
                type="text" 
                value={inputValue === '' ? product.count : inputValue} 
                onChange={handleInputChange}
                onBlur={(e) => handleInputBlur(e, product)}
            />
}