import styles from './Product.module.css';
import '../../../index.css';

export default function Product({ product }) {
    return (
        <main>
            <div className="container">
                <h1>Title</h1>
                <img src="" alt="" />
                <p>Description</p>
                <p>Price</p>
                <p>Qty available</p>
                <button className={`button`}>Add to cart</button>
            </div>
        </main>
    )
}