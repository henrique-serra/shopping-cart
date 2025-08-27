import styles from './Navbar.module.css';
import { Link } from 'react-router';
import '../../index.css';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../contexts/ShoppingCartProvider';

export default function Navbar() {
    const { cart } = useContext(ShoppingCartContext);

    return (
        <div className={styles.navbar}>
            <div className={`container ${styles.navbarContainer}`}>
                <div className={`${styles.navbarLinks}`}>
                    <Link className={styles.navBarContainerLink} to="/">Home</Link>
                    <Link className={styles.navBarContainerLink} to="shop">Shop</Link>
                </div>
                <Link to={'shopping-cart'} className={`${styles.cart}`}>
                    <img src="/shopping-cart-icon.png" alt="" />
                    <h4>{cart.length}</h4>
                </Link>
            </div>
        </div>
    )
}