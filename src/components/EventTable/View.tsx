import { EventOutputDto } from "../../types/EventOutputDto";
import styles from "./styles.module.scss";
import annonce from './assets/KTC.png'

type Props = {
  event: EventOutputDto;
  formattedDate: string;
  startDateFormated: string
};

const View: React.FC<Props> = ({ event, formattedDate, startDateFormated }) => {

  return (
    <div className={styles.content}>
      <div className={styles.content}>
        <div className={styles.left}>
          {event.image ?
            <img src={event.image} width={200} height={200} /> :

            <img src={annonce} width={150} />

          }
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            {event.name}
          </div>
          <div className={styles.description}>
            {event.description}
          </div>
          <div className={styles.date}>
            Du
            <div> {startDateFormated} </div>
            au
            <div> {formattedDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
