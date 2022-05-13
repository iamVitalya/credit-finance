import React from "react";
import {Outlet} from "react-router-dom";
import Header from "../components/header";
import Aside from "../components/aside";
import styles from './Layout.module.scss'

const Layout: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <Aside />

      <Outlet />
    </div>
  )
}

export default Layout;
