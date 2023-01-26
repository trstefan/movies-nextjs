import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.main}>{children}</div>
    </>
  );
};

export default Layout;
