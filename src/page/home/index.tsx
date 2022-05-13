import React from "react";
import styles from './HomePage.module.scss';
import Container from "../../components/container";
import Table from '../../components/UI/table';
import Select from "../../components/UI/select";
import CardList from "../../components/CardList";
import SectionActive from "../../components/sectionActive";

const Home: React.FC = () => {
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles['main-body']}>
          <div className={styles['main-body__section_1']}>
            <Select />

            <CardList />
          </div>
          <div className={styles['main-body__section_2']}>
            <div className={styles['section-title']}>Title</div>

            <p>
              <b>Text 1</b>
              <span>Value 1</span>
            </p>
            <p>
              <b>Text 1</b>
              <span>Value 1</span>
            </p>

            <Table />

            <SectionActive />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home;
