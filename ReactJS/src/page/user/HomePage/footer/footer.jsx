import styles from "../footer/footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.rowItem}>
          <div className={styles.footerAbout}>GENERAL INFORMATION</div>
          <ul className={styles.footerAboutList}>
            <li>
              <span>VNB sport</span> is a badminton store system with more than
              50 branches nationwide, providing wholesale and retail of
              badminton equipment from amateur to professional.
            </li>
            <li>
              <span>With the mission: </span> "VNB is committed to bringing the
              best quality products and services to serve sports players to
              improve their own health."
            </li>
            <li>
              <span>Vision: </span>"To become the largest sports distributor and
              manufacturer in Vietnam"
            </li>
          </ul>
        </div>
        <div className={styles.rowItem}>
          <div className={styles.contactInform}>CONTACT INFORM</div>
          <ul className={styles.contactList}>
            <li>
              <span>Store system: </span> 5 Premium shops and 62 stores
              nationwide
            </li>
            <li>
              <span>View all shop</span>
            </li>
            <li>
              <span>Hotline: </span> 09381234567
            </li>
            <li>
              Email: <span>RaymondWong@gmail.com</span>
            </li>
            <li>
              Cooperation <span>0901234567 Raymond Wong</span>
            </li>
            <li>
              Service complains <span>0901234567 Raymond Wong</span>
            </li>
            <li>
              Francis service <span>0901234567 Raymond Wong</span>
            </li>
          </ul>
        </div>
        <div className={styles.rowItem}>
          <div className={styles.policy}>POLICY</div>
          <ul className={styles.policyList}>
            <li>Return and refund policy</li>
            <li>Warranty Policy</li>
            <li>Complaint Handling Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Franchise Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
