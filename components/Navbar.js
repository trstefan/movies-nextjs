import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <Link href="/movies" className={styles.link}>
          <li>
            <h3>Movies NextJS</h3>
          </li>
        </Link>
        <Link href="/movies" className={styles.link}>
          <li>Popular</li>
        </Link>
        <Link href="/movies/playing" className={styles.link}>
          <li>Now Playing</li>
        </Link>
        <Link href="/movies/top" className={styles.link}>
          <li>Top Rated</li>
        </Link>
        <Link href="/movies/upcoming" className={styles.link}>
          <li>Upcoming</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
