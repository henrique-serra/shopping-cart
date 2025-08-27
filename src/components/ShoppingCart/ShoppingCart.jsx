import '../../index.css';
import styles from './ShoppingCart.module.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartProvider';

export default function ShoppingCart() {
    const { cart, setCart } = useContext(ShoppingCartContext);

    const cartReduced = cart.reduce((acc, product) => {
        const existingProduct = acc.find((p) => p.id === product.id);

        if (existingProduct) {
            existingProduct.count++;
        } else {
            acc.push({ ...product, count: 1 });
        }

        return acc;
    }, [])

    return (
        <main>
            <div className={`container ${styles.cartSection}`}>
                <ul className={`${styles.cartList}`}>
                    {cartReduced.map((product) => {
                        return (
                            <li className={`${styles.cartProduct}`} key={product.id}>
                                <div className={styles.groupImgQty}>
                                    <img src={product.image} alt="" />
                                    <div>
                                        <h4>{product.title}</h4>
                                        <div className={styles.quantity}>
                                            <span>-</span>
                                            <span>{product.count}</span>
                                            <span>+</span>
                                        </div>
                                    </div>
                                </div>
                                <h4>$109.45</h4>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}