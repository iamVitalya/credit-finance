import React from "react";
import styles from './Table.module.scss';

const Table: React.FC = () => {
  return (
    <table className={styles.table}>
      <thead>
      <tr>
        <th>Сolumn 1</th>
        <th>Сolumn 2</th>
        <th>Сolumn 3</th>
        <th>Сolumn 4</th>
        <th>Сolumn 5</th>
        <th>Сolumn 6</th>
        <th>Сolumn 7</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Line 1</td>
        <td>Line 1</td>
        <td>Line 1</td>
        <td>Line 1</td>
        <td>Line 1</td>
        <td>Line 1</td>
        <td>Line 1</td>
      </tr>
      <tr>
        <td>Line 2</td>
        <td>Line 2</td>
        <td>Line 2</td>
        <td>Line 2</td>
        <td>Line 2</td>
        <td>Line 2</td>
        <td>Line 2</td>
      </tr>
      <tr>
        <td>Line 3</td>
        <td>Line 3</td>
        <td>Line 3</td>
        <td>Line 3</td>
        <td>Line 3</td>
        <td>Line 3</td>
        <td>Line 3</td>
      </tr>
      <tr>
        <td>Line 4</td>
        <td>Line 4</td>
        <td>Line 4</td>
        <td>Line 4</td>
        <td>Line 4</td>
        <td>Line 4</td>
        <td>Line 4</td>
      </tr>
      <tr>
        <td>Line 5</td>
        <td>Line 5</td>
        <td>Line 5</td>
        <td>Line 5</td>
        <td>Line 5</td>
        <td>Line 5</td>
        <td>Line 5</td>
      </tr>
      <tr>
        <td>Line 6</td>
        <td>Line 6</td>
        <td>Line 6</td>
        <td>Line 6</td>
        <td>Line 6</td>
        <td>Line 6</td>
        <td>Line 6</td>
      </tr>
      <tr>
        <td>Line 7</td>
        <td>Line 7</td>
        <td>Line 7</td>
        <td>Line 7</td>
        <td>Line 7</td>
        <td>Line 7</td>
        <td>Line 7</td>
      </tr>
      </tbody>
    </table>
  )
}

export default Table;
