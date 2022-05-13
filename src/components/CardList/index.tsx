import React from "react";
import styles from './CardList.module.scss';
import Card, {ICard} from "../UI/card";

interface ICardList extends ICard {
  _id: string | number
}

const CardList: React.FC = () => {
  const list: ICardList[] = [
    {
      _id: 'ad23rfui8923jrf',
      title: 'sunt aut facere repellat',
      subtitle: String(new Date().toUTCString()),
      text: 'quo et expedita modi cum officia vel magni ndoloribus qui repudiandae nvero nisi sit nquos veniam quod sed accusamus veritatis error'
    },
    {
      _id: 'ad23rfui8923jr2f',
      title: 'qui est esse',
      subtitle: String(new Date().toUTCString()),
      text: 'quia et suscipit nsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {
      _id: 'ad23rfui89234jrf',
      title: 'ea molestias quasi',
      subtitle: String(new Date().toUTCString()),
      text: 'et iusto sed quo iure nvoluptatem occaecati omnis eligendi aut ad nvoluptatem doloribus vel accusantium quis pariatur nmolestiae porro eius odio et labore et velit aut'
    },
    {
      _id: 'ad23rfui8923j1rf',
      title: 'ea molestias quasi',
      subtitle: String(new Date().toUTCString()),
      text: 'dolore placeat quibusdam ea quo vitae\\nmagni quis enim qui quis quo nemo aut saepe nquidem repellat excepturi ut quia nsunt ut sequi eos ea sed quas'
    },
  ]

  return (
    <div className='card-list'>
      <h2 className={styles['card-title']}>
        Posts
      </h2>

      { list.length && list.map(card => (
        <Card key={card._id} title={card.title} subtitle={card.subtitle} text={card.text} />
      ))}
    </div>
  )
}

export default CardList;
