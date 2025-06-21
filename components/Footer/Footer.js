import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.topRow}>
        <div className={styles.subscribeSection}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contactSection}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <div className={styles.currency}><img src="/usa.png" alt="us"/> USD</div>
          <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr className={styles.divider} />
      <div className={styles.bottomRow}>
        <div className={styles.linksSection}>
          <div>
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className={styles.socialSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <span>📷</span>
            <span>🔗</span>
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className={styles.payments}>
            <img src="/gpay.png" alt="Google Pay" />
            <img src="/mastercard.png" alt="Mastercard" />
            <img src="/paypal.png" alt="Paypal" />
            <img src="/amex.png" alt="Amex" />
            <img src="/apay.png" alt="Apple Pay" />
            <img src="/opay.png" alt="Pay" />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
}
