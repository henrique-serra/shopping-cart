import styles from './Product.module.css';
import '../../../index.css';
import { useLoaderData } from 'react-router';
import BtnAddToCart from '../../BtnAddToCart/BtnAddToCart';

export default function Product() {
    const { product } = useLoaderData();
    const { title, image, description, price, category, rating } = product;

    return (
        <main>
            <div className={`container ${styles.productPage}`}>
                <h1>{title}</h1>
                <p>{category}</p>
                <img src={image} alt={title} />
                <p>{description}</p>
                <p>Rating: {rating.rate}</p>
                <p>Quantity available: {rating.count}</p>
                <p>${price}</p>
                <BtnAddToCart product={product} />
            </div>
        </main>
    )
}