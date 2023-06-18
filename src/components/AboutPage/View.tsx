import MenuBar from "../MenuBar";
import styles from "./styles.module.scss";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.aboutPage}>
      <div>
        <MenuBar />
      </div>
      <div className={styles.title}> Changé le nom</div>
    </div>
  );
};

export default View;
