import React from "react";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return <div className={styles.header}>
    <div></div>
    <div className={styles.language}>
      <span>en</span>
      {" | "}
      <span>pt</span>
    </div>
  </div>
}

export default Header;