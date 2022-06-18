import React from "react";
import styles from "./Layout.module.css";
import Navbar from "./Navbar/Navbar";
const Layout = function ({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
