
import styles from './Products.module.css';

const products = [
  {
    name: 'Artisan Trail Mix',
    description: 'Premium nuts, dried fruits, and dark chocolate chunks',
    price: '$12.99',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    name: 'Gourmet Popcorn',
    description: 'Hand-crafted with real butter and sea salt',
    price: '$8.99',
    image: 'https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    name: 'Protein Energy Bites',
    description: 'Natural energy boost with dates and almonds',
    price: '$9.99',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    name: 'Veggie Chips',
    description: 'Crispy baked vegetables with herbs and spices',
    price: '$7.99',
    image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  }
];

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Featured Products
          </h2>
          <p className={styles.subtitle}>
            Discover our most popular snacks, carefully crafted to satisfy every craving.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={styles.productImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.productInfo}>
                <div className={styles.productHeader}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <span className={styles.productPrice}>{product.price}</span>
                </div>
                <p className={styles.productDescription}>{product.description}</p>
                <button className={styles.addToCartButton}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

