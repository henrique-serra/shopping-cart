import '../../index.css';
import styles from './ShoppingCart.module.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartProvider';
import Input from './Input/Input';

export default function ShoppingCart() {
    const { cart, setCart } = useContext(ShoppingCartContext);    

    function sumToCartClick(product) {
        setCart([...cart, product]);
    }

    function decreaseFromCartClick(product) {
        if (cart.length === 0) return;
        
        const cartCopy = [...cart];
        const cartCopyReverse = [...cart];
        const lastIndexOfProduct = (cartCopyReverse.reverse().findIndex((p) => p.id === product.id) * -1) -1;
        cartCopy.splice(lastIndexOfProduct, 1);
        setCart(cartCopy);
    }

    function formatPrice(price) {
        return price.toLocaleString('en-US', { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
        })
    }

    const cartReduced = cart.reduce((acc, product) => {
        const existingProduct = acc.find((p) => p.id === product.id);

        if (existingProduct) {
            existingProduct.count++;
        } else {
            acc.push({ ...product, count: 1 });
        }

        return acc;
    }, []);

    const productCount = (product) => cart.filter((p) => p.id === product.id).length;

    const cartTotal = (cart.reduce((sum, product) => sum + product.price, 0)).toFixed(2);

    return (
        <main>
            <div className={`container ${styles.cartSection}`}>
                <h2>Shopping Cart</h2>
                <ul className={`${styles.cartList}`}>
                    {cartReduced.map((product) => {
                        return (
                            <li className={`${styles.cartProduct}`} key={product.id}>
                                <div className={styles.groupImgQty}>
                                    <img src={product.image} alt="" />
                                    <div className={styles.titleAndQty}>
                                        <h4>{product.title}</h4>
                                        <div className={styles.quantity}>
                                            <button onClick={() => decreaseFromCartClick(product)}>-</button>
                                            <Input product={product} />
                                            <button onClick={() => sumToCartClick(product)}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <p>${formatPrice(productCount(product) * product.price)}</p>
                            </li>
                        )
                    })}
                    <li className={styles.total}>
                        <h3>Total:</h3>
                        <h4>${formatPrice(Number(cartTotal))}</h4>
                    </li>
                </ul>
                <button className={`button ${styles.checkoutBtn}`}>Proceed to checkout</button>
            </div>
        </main>
    )
}