import React from "react";

import styles from "./styles.module.scss";
import ToggleTheme from "./ToggleTheme";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      {/* <div className={styles.language}>
        <span className={styles.languageOption}>en</span>
        {" | "}
        <span className={styles.languageOption}>pt</span>
      </div> */}
      <div>
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Header;
