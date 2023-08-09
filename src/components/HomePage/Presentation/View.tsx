import TitleComp from "../../TitleComp";
import styles from "./styles.module.scss";
import passionne from "./assets/pasionné.jpg"
import { Link } from "react-router-dom";

type Props = {};

const View: React.FC<Props> = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.content}>
        <TitleComp title={"PASSIONNÉ D'AUTOMOBILE ?"} />
        <div className={styles.box}>
          <div className={styles.left}>
            <img src={passionne} className={styles.image} alt="" />
          </div>
          <div className={styles.separator} />
          <div className={styles.right}>
            <div className={styles.title}> La plateforme de communication automobile.</div>
            <div className={styles.decription}>
              Rejoignez-nous dès maintenant et connectez-vous à une communauté passionnée de l'automobile. <br />
              <br />
              Discutez, échangez des conseils et découvrez les dernières tendances. KTC, la plateforme idéale pour les passionnés de voitures
            </div>
            <Link to={"/chat"} style={{ textDecoration: 'none' }}>
              <div className={styles.buttonRedirection}> Commencer à parler</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default View;
