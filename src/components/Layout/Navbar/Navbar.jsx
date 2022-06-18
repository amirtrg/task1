import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = function () {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li className={styles.navbar_list_item}>
          <Link to="/">home</Link>
        </li>
        <li className={styles.navbar_list_item}>
          <Link to="/addusers">add user</Link>
        </li>
        <li className={styles.navbar_list_item}>
          <Link to="/addproduct">add product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
