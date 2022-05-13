import React from "react";
import styles from './SectionActive.module.scss';
import Button from "../UI/button";

const SectionActive: React.FC = () => {
  return (
    <div className={styles['section-active']}>
      <Button text={'Action 1'} />
      <Button text={'Action 2'} />
      <Button text={'Action 3'} />
    </div>
  )
}

export default SectionActive;
