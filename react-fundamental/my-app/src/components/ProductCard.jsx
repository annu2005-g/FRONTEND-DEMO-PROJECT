import styles from "./ProductCard.module.css";

function ProductCard({ name, price, image, description }) {
  const handleAddToCart = () => {
    alert(`Added ${name} to cart!`);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${price}</span>
          <button className={styles.button} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;