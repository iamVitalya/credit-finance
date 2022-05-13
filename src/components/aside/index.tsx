import React from "react";
import styles from './Aside.module.scss';
import AsideNav from "./nav";

const Aside: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <AsideNav />
    </aside>
  )
}

export default Aside;
