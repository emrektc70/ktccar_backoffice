import styles from "./styles.module.scss";
import MenuBar from "../../../MenuBar/View";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div>
      <MenuBar />
      <div className={styles.content}>Changé le nom</div>
      <div> salut test de message </div>
    </div>
  );
};

export default View;
