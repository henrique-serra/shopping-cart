import styles from './Card.module.css';
import '../../../index.css';
import { Link } from 'react-router';
import BtnAddToCart from '../../BtnAddToCart/BtnAddToCart';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider';

export default function Card({ product }) {
    const { title, image, price, id } = product;
    const { cart, setCart } = useContext(ShoppingCartContext);
    const [inputValue, setInputValue] = useState('');

    function sumToCartClick(product) {
        setCart([...cart, product]);
    }

    function decreaseFromCartClick(product) {
        if (cart.length === 0) return;
        
        const cartCopy = [...cart];
        const firstIndexOfProduct = cartCopy.findIndex((p) => p.id === product.id);
        if (firstIndexOfProduct === -1) return;
        cartCopy.splice(firstIndexOfProduct, 1);
        setCart(cartCopy);
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
            
            const productsToAdd = Array(newQty).fill(product);
            
            cartCopy.splice(insertPosition, 0, ...productsToAdd);
        }

        setCart(cartCopy);
    }

    function handleInputChange(e) {
        const value = e.target.value;

        // Only numbers allowed
        if (!/^\d*$/.test(value)) return;

        setInputValue(value);
    }

    function handleInputBlur(e) {
        const value = parseInt(e.target.value) || 0;
        setCartQty(product, value);
        setInputValue('');
    }

    const productCount = cart.filter((p) => p.id === product.id).length;
    const displayValue = inputValue !== '' ? inputValue : productCount;

    return (
        <div className={`${styles.card}`}>
            <h4>{title}</h4>
            <Link to={`/product/${id}`} className={`${styles.imgContainer}`}><img className={`${styles.img}`} src={image} alt={title} /></Link>
            <div className={`${styles.buySection}`}>
                <p>${price}</p>
                {productCount === 0 ? (
                    <BtnAddToCart product={product} />
                    )
                    : (
                        <div className={styles.qtyBtnDiv}>
                            <button onClick={() => decreaseFromCartClick(product)}>-</button>
                            <input 
                                type="text" 
                                value={displayValue} 
                                onChange={handleInputChange} 
                                onBlur={handleInputBlur}
                            />
                            <button onClick={() => sumToCartClick(product)}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}