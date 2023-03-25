import styles from "./styles.module.scss";
import MenuBar from "../MenuBar/View";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.profilPage}>
      <div>
        <MenuBar />
      </div>
      <div className={styles.title}>
        <h2>Mon profil </h2>
      </div>
      <div className={styles.form}>
        <div className={styles.name}>
          <label className={styles.labelName}>Nom </label>
          <input type="text" className={styles.inputProfil} />
        </div>
        <div className={styles.firstName}>
          <label className={styles.labelName}>Prénom </label>
          <input type="text" className={styles.inputProfil} />
        </div>
        <div className={styles.email}>
          <label className={styles.labelName}>Email </label>
          <input type="text" className={styles.inputProfil} />
        </div>
      </div>
    </div>
  );
};

export default View;
