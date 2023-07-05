import styles from "./styles.module.scss";
import Bmw from "./assets/BMW.jpg";
import TitleComp from "../TitleComp";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.content}>
      <div>
        <TitleComp title={"L'actualité"} />
      </div>
      <div className={styles.box}>
        <div className={styles.titleBox}>La marque bmw de retour</div>
        <div className={styles.description}>
          Bayerische Motoren Werke AG ou plus communément appelé BMW Group, est
          un groupe automobile allemand fondé en 1916 par Gustav Otto et Karl
          Friedrich Rapp, et basé à Munich en Bavière.
        </div>
        <div className={styles.image}>test</div>
      </div>
    </div>
  );
};

export default View;
