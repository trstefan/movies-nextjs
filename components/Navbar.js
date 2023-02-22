import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <Link href="https://www.themoviedb.org/" className={styles.link}>
          <li>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              alt=""
              height={50}
              width={80}
            />
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
        <Link href="/movies/genres" className={styles.link}>
          <li>Genres</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
