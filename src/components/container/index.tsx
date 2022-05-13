import React, {ReactNode} from "react";
import styles from './Container.module.scss';

const Container: React.FC<{ children: ReactNode | JSX.Element | JSX.Element[] }> = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default Container;
