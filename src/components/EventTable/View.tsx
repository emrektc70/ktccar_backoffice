import styles from "./styles.module.scss";

type Props = {
  event: any;
  formattedDate: string;
  startDateFormated: string
};

const View: React.FC<Props> = ({ event, formattedDate, startDateFormated }) => {

  return (
    <div className={styles.content}>
      <div className={styles.content}>
        <div className={styles.left}>
          image
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            {event.title}

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
