import styles from "./styles.module.scss";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.box}>
      <div className={styles.content}>
        <h3> Title: Bmw</h3>
        <p> Ce situe a Lyon avec plus de 600 personnes </p>
        <div className={styles.join}>Rejoindre</div>
      </div>
      <div className={styles.content}>
        <h3> Title: Audi</h3>
        <p> Ce situe a Lyon avec plus de 600 personnes </p>
        <div className={styles.join}>Rejoindre</div>
      </div>
      <div className={styles.content}>
        <h3> Title: Mercedes-Benz</h3>
        <p> Ce situe a Lyon avec plus de 600 personnes </p>
        <div className={styles.join}>Rejoindre</div>
      </div>
      <div className={styles.content}>
        <h3> Title: Bmw</h3>
        <p> Ce situe a Lyon avec plus de 600 personnes </p>
        <div className={styles.join}>Rejoindre</div>
      </div>
      <div className={styles.content}>
        <h3> Title: Audi</h3>
        <p> Ce situe a Lyon avec plus de 600 personnes </p>
        <div className={styles.join}>Rejoindre</div>
      </div>
      <div className={styles.content}>
        <h3> Title: Mercedes-Benz</h3>
        <p> Ce situe a Lyon avec plus de 600 personnes </p>
        <div className={styles.join}>Rejoindre</div>
      </div>
    </div>
  );
};

export default View;
