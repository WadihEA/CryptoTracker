import { Link } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.h1}>
          Crypto
        </h1>
      </div>
    </header>
  );
};

export default Header;
