import styles from "./styles.module.scss";
import MenuBar from "../MenuBar/View";

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
