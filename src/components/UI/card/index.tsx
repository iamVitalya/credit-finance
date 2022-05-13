import React from "react";
import styles from './Card.module.scss';

export interface ICard {
  title: string;
  subtitle: string;
  text: string;
}

const Card: React.FC<ICard> = ({ text, title, subtitle }) => {
  return (
    <div className={styles.card}>
      <div className={styles['card-title']}>
        { title }
      </div>
      <div className={styles['card-subtitle']}>
        { subtitle }
      </div>
      <div className={styles['card-text']}>
        { text }
      </div>
    </div>
  )
}

export default Card;
