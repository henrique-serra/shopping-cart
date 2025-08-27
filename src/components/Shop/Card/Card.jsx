import styles from './Card.module.css';
import '../../../index.css';
import { Link } from 'react-router';
import BtnAddToCart from '../../BtnAddToCart/BtnAddToCart';

export default function Card({ product }) {
    const { title, image, price, id } = product;

    return (
        <div className={`${styles.card}`}>
            <h4>{title}</h4>
            <Link to={`/product/${id}`} className={`${styles.imgContainer}`}><img className={`${styles.img}`} src={image} alt={title} /></Link>
            <div className={`${styles.buySection}`}>
                <p>${price}</p>
                <BtnAddToCart product={product} />
            </div>
        </div>
    )
}