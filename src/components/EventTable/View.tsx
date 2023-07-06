import styles from "./styles.module.scss";

type Props = {
  event: any
};

const View: React.FC<Props> = ({ event }) => {

  return (
    <div className={styles.content}>
      <div className={styles.content}>
        <div className={styles.left}>
          Image
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            {event.title}
          </div>
          <div className={styles.description}>
            dezdddddddddddddddddddddddddddddddddddddd
          </div>
          <div className={styles.date}>
            <div> date de debut </div>
            <div> date de fin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
