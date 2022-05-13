import React from "react";
import styles from './Select.module.scss';

const Select: React.FC = () => {
  return (
    <div className={styles.filter}>
      <select>
        <option selected value="">Filter...</option>
        <option value="">One</option>
        <option value="">Two</option>
        <option value="">Three</option>
        <option value="">Four</option>
        <option value="">Five</option>
      </select>
    </div>
  )
}

export default Select;
