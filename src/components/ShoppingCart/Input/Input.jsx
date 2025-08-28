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

        const cartCopy = [...cart];
        
        // Encontra TODOS os índices do produto (de trás para frente para remoção segura)
        const productIndexes = [];
        for (let i = cartCopy.length - 1; i >= 0; i--) {
            if (cartCopy[i].id === product.id) {
                productIndexes.push(i);
            }
        }

        // Remove todos os produtos deste tipo (de trás para frente)
        productIndexes.forEach(index => {
            cartCopy.splice(index, 1);
        });

        // Se newQty > 0, adiciona os novos produtos na posição original
        if (newQty > 0) {
            // Usa a posição do primeiro produto que foi removido
            const insertPosition = productIndexes.length > 0 ? Math.min(...productIndexes) : cartCopy.length;
            
            // Remove o produto original das props (que tem .count) e usa o produto limpo
            const { count, ...cleanProduct } = product;
            const productsToAdd = Array(newQty).fill(cleanProduct);
            
            cartCopy.splice(insertPosition, 0, ...productsToAdd);
        }

        setCart(cartCopy);
    }

    function handleInputBlur(e, product) {
        const value = parseInt(e.target.value) || 0;
        setCartQty(product, value);
        setInputValue('');
    }

    return <input 
                className={styles.input}
                type="text" 
                value={inputValue === '' ? product.count : inputValue} 
                onChange={handleInputChange}
                onBlur={(e) => handleInputBlur(e, product)}
            />
}