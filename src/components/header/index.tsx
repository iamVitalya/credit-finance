import React from "react";
import styles from './Header.module.scss';
import logoSvg from '../../../public/img/logo.svg';
import HeaderNav from "./nav";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to={'/'}>
          <img src={logoSvg} alt="Logo"/>
        </Link>
      </div>

      <div className="header-links">
        <HeaderNav />
      </div>
    </header>
  )
}

export default Header;
