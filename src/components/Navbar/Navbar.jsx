import styles from './Navbar.module.css';
import { Link } from 'react-router';
import '../../index.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={`container ${styles.navbarContainer}`}>
                <Link className={styles.navBarContainerLink} to="/">Home</Link>
                <Link className={styles.navBarContainerLink} to="shop">Shop</Link>
            </div>
        </div>
    )
}