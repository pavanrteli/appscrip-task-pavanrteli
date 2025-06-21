import Image from 'next/image';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={product.outOfStock ? `${styles.card} ${styles.disabled}` : styles.card}>
      {product.badge && <span className={styles.badge}>{product.badge}</span>}
      <div className={styles.imageWrapper}>
        <Image src={product.image} alt={product.name} className={styles.image} width={300} height={300} />
        {product.outOfStock && <span className={styles.outOfStock}>OUT OF STOCK</span>}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{product.price ? `$${product.price}` : ''}</p>
        <p className={styles.signIn}>Sign in or Create an account to see pricing</p>
        <button className={styles.wishlistBtn} aria-label="Add to wishlist">♡</button>
      </div>
    </div>
  );
}
