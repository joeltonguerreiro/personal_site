import React, {ReactNode} from "react";

import styles from "./styles.module.scss";

type BoxProps = {
    children: ReactNode
}

const Box: React.FC<BoxProps> = ({ children }) => {
    return <div className={styles.box}>
        { children }
    </div>
}

export default Box;