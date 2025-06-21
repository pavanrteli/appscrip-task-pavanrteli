import Image from "next/image";
import styles from "./Header.module.css";
// import img from "../../public/Logo.png"; // Adjust the path as necessary

export default function Header() {
  return (
    <>
      <div className={styles.topBar}>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum dolor</span>
      </div>

      <header className={styles.header}>
        <div className={styles.logoSection}>
          <Image src="/Logo.png" alt="Logo" width={48} height={48} />
        </div>

        <h1 className={styles.logoSection1}>LOGO</h1>
        <div className={styles.headerIcons}>
          <button aria-label="Search">
            <Image src="/search-normal.png" alt="Search" width={20} height={20} />
          </button>
          <button aria-label="User">
            <Image src="/heart.png" alt="User" width={20} height={20} />
          </button>
          <button aria-label="Wishlist">
            <Image src="/shopping-bag.png" alt="Wishlist" width={20} height={20} />
          </button>
          <button aria-label="Cart">
            <Image src="/profile.png" alt="Cart" width={20} height={20} />
          </button>
          <select className={styles.langSelect} aria-label="Language">
            <option>ENG</option>
            <option>FRA</option>
          </select>
        </div>
      </header>
      <nav className={styles.navLinks}>
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </>
  );
}
