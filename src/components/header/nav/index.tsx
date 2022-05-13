import React from "react";
import styles from './HeaderNav.module.scss';
import personSvg from '../../../../public/img/icons/person.svg';
import Button from "../../UI/button";

const HeaderNav: React.FC = () => {
  return(
    <nav className={styles['nav-header']}>
      <ul className={styles['nav-header-list']}>
        <li className={styles['nav-header-link-text']}>
          <a className={styles['nav-header-text-item']} href="#">
            Profile
            <img className={styles['nav-header-profile-img']} src={personSvg} alt="Profile"/>
          </a>
        </li>
        <li className={styles['nav-header-link-icon']}>
          <Button text={'Logout'} />
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav;
