import styles from "./Slogan.module.css";

function Slogan() {
  return (
    <div className={styles.container}>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <img src="https://cdn.shopvnb.com/themes/images/policy_image_2.svg" />
        </div>
        <div className={styles.serviceContent}>
          <p>National shipping</p>
          <p>Cash on Delivery</p>
        </div>
      </div>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <img src="	https://cdn.shopvnb.com/themes/images/policy_image_1.svg" />
        </div>
        <div className={styles.serviceContent}>
          <p>Quality Assurance</p>
          <p>Return within 7 days</p>
        </div>
      </div>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <img src="https://cdn.shopvnb.com/themes/images/thanh_toan.svg" />
        </div>
        <div className={styles.serviceContent}>
          <p>Payment proceed</p>
          <p>With serveral method</p>
        </div>
      </div>
      <div className={styles.serviceItem}>
        <div className={styles.serviceIcon}>
          <img src="	https://cdn.shopvnb.com/themes/images/doi_san_pham.svg" />
        </div>
        <div className={styles.serviceContent}>
          <p>Many Promotion program</p>
          <p>Discount 20% RY Shop member</p>
        </div>
      </div>
    </div>
  );
}
export default Slogan;
