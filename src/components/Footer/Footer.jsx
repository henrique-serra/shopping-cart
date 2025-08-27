import styles from './Footer.module.css';
import '../../index.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2025 Shopify. All rights reserved.</p>
            <a href="https://www.flaticon.com/free-icons/buy" title="buy icons">Buy icons created by Freepik - Flaticon</a>
        </footer>
    )
}