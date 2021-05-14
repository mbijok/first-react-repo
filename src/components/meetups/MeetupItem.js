import Card from '../ui/Card';

import styles from './MeetupItem.module.css';

function MeetupItem(props) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <article
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></article>
        </div>
        <div className={styles.actions}>
          <button>To favourites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
