import React from "react";
import {Link} from "react-router-dom";
import styles from './AsideNav.module.scss';

import arrowRightSVG from '../../../../public/img/nav-icons/right-arrow.svg';
import pointSVG from '../../../../public/img/nav-icons/point-nav-item.svg';

interface INavItem {
  _id: string | number;
  title: string;
  dsc: string;
  to: string;
}

interface INavList extends INavItem{
  active: boolean;
  items?: INavItem[];
}

const AsideNav: React.FC = () => {
  const navList: INavList[] = [
    {
      _id: 1,
      title: 'products',
      dsc: 'arrow-right',
      to: '/products',
      active: false
    },
    {_id: 2, title: 'data', dsc: 'arrow-right', to: '/data', active: false},
    {
      _id: 3,
      title: 'manufacturing',
      dsc: 'arrow-right',
      to: '/manufacturing',
      active: true,
      items: [
        {
          _id: 31,
          title: 'item',
          dsc: 'arrow-right',
          to: '23t43feq214rrfdcwq',
        },
        {
          _id: 32,
          title: 'item 1',
          dsc: 'arrow-right',
          to: 'g34y5u34jh5b3434',
        }
      ]
    },
    {
      _id: 4,
      title: 'story',
      dsc: 'arrow-right',
      to: '/story',
      active: false,
      items: [
        {
          _id: 41,
          title: 'item',
          dsc: 'arrow-right',
          to: '23t43feq214rrfdcwq',
        },
        {
          _id: 42,
          title: 'item 1',
          dsc: 'arrow-right',
          to: 'g34y5u34jh5b3434',
        }
      ]},
  ]

  return(
    <nav className={styles.nav}>
      <ul className={styles['nav-list']}>
        { navList.length && navList.map((nav: INavList) => (
          <li
            key={nav._id}
            className={nav.active ? styles['nav-list-active']: ''}
          >
            <span>
              { nav.title }
              { nav.items && <img src={arrowRightSVG} alt="arrow-right"/> }
            </span>

            { nav.items && <ul className={!nav.active ? 'visually-hidden' : ''}>
              { nav.items.map((below: INavItem) => (
                <li key={below._id}>
                  <img src={pointSVG} alt="point"/>
                  <Link to={ nav.to + '/' + below.to }>
                    { below.title }
                  </Link>
                </li>
              )) }
            </ul>}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default AsideNav;
