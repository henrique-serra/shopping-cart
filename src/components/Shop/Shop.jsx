import styles from './Shop.module.css';
import '../../index.css';
import Card from './Card/Card';
import { useState, useEffect } from 'react';

export default function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [])

    return (
        <main className={styles.content}>
            <div className={`container ${styles.shopGrid}`}>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </main>
    )
}