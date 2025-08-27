import styles from './Hero.module.css';
import { Link } from 'react-router';
import '../../index.css';

export default function Hero() {
    return (
        <main className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <h1 className='limelight-regular'>Shopify</h1>
                    <p>Your online store for the best deals</p>
                </div>
            </div>
            <div className="container">
                <div className={`${styles.heroImgDiv}`}>
                    <Link className={`${styles.heroLink}`} to={"shop"}>
                        <img className={`${styles.heroImg}`} src="/shopping-cart.jpg" alt="shopping cart" />
                    </Link>
                </div>
            </div>
        </main>
    )
}