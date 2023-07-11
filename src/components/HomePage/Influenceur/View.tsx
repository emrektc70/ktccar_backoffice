import TitleComp from "../../TitleComp";
import styles from "./styles.module.scss";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.influence}>
      <TitleComp title={"Je veux crée mon groupe"} />
      <div className={styles.content}>
        <div className={styles.description}>
          Êtes-vous un influenceur ou possédez-vous une communauté et souhaitez-vous créer un groupe pour vos fans ?
          <div className={styles.etape}>
            C'est très simple, voici les étapes :
          </div>
        </div>
      </div>

    </div>
  )
};

export default View;
