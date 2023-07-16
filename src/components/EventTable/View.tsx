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
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={event.image} width={170} height={170} className={styles.imgEvent} /> :
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={annonce} width={170} height={170} className={styles.imgEvent} />

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
