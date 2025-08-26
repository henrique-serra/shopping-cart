import styles from './Hero.module.css';
import { Link } from 'react-router';
import '../../index.css';

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <h1>The world on the palm of your hand!</h1>
                    <p>Plan your next trip with us!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi quo nisi optio eum unde. Laborum rerum impedit voluptates aspernatur ex minus dolores necessitatibus similique numquam, excepturi quis sit cupiditate.</p>
                </div>
                {/* <img className={styles.heroImg} src='https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg' /> */}
                <img className={styles.heroImg} src='../assets/globe.png' />
            </div>
        </div>
    )
}