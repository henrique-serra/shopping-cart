import styles from './Card.module.css';
import '../../../index.css';
import { Link } from 'react-router';

export default function Card({ product }) {
    const { title, image, price, id } = product;

    return (
        <div className={`${styles.card}`}>
            <h4>{title}</h4>
            <Link to={`/product/${id}`} className={`${styles.imgContainer}`}><img className={`${styles.img}`} src={image} alt={title} /></Link>
            <div className={`${styles.buySection}`}>
                <p>${price}</p>
                <button className={`${styles.button}`}>Add to cart</button>
            </div>
        </div>
    )
}