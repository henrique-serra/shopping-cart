import styles from './Card.module.css';
import '../../../index.css';
import { Link } from 'react-router';
import BtnAddToCart from '../../BtnAddToCart/BtnAddToCart';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider';

export default function Card({ product }) {
    const { title, image, price, id } = product;
    const { cart, setCart } = useContext(ShoppingCartContext);

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

    function inputQtyChange(e) {
        e.preventDefault();
        const productQty = e.target.value;

        if (productQty < productCount) {
            const toSubtract = productCount - productQty;

            for (let i = 0; i < toSubtract; i++) {
                decreaseFromCartClick(product);
            }
        }
    }

    const productCount = cart.filter((p) => p.id === product.id).length;

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
                            <input type="text" value={productCount} onChange={inputQtyChange} />
                            <button onClick={() => sumToCartClick(product)}>+</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}