import styles from "./styles.module.scss";

type Props = {
  title: string
};

const View: React.FC<Props> = ({ title }) => {
  return (
    <div className={styles.content}>
      <div className={styles.box}>
        <div className={styles.title}>{title} </div>
        <div className={styles.separator} />
      </div>
    </div>
  )
};

export default View;
