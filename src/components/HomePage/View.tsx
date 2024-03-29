import MenuBar from "../MenuBar";
import styles from "./styles.module.scss";
import bmw from "./assets/bmw.png";
import BoxHome from "../componentsktccar/BoxHome/View";
import { Link } from "react-router-dom";
import Presentation from "./Presentation";
import Influenceur from "./Influenceur";

type Props = {
  tokenCheck: string;
  token: string | null
};


const View: React.FC<Props> = ({ tokenCheck, token }) => {

  return (
    <div className={styles.home}>
      <MenuBar />
      <div className={styles.contentpage}>
        <div className={styles.textContent}>
          <div className={styles.textStyle}>
            <h2 className={styles.textTitle}>KTC CAR</h2>
            <h3>Votre destination en ligne pour les passionnés d'automobiles.</h3>
          </div>
          {
            token ?
              <Link to={"/chat"} style={{ textDecoration: 'none' }}>
                <div className={styles.buttonRedirection}> {tokenCheck}</div>
              </Link>
              :
              <Link to={"/login"} style={{ textDecoration: 'none' }}>
                <div className={styles.buttonRedirection}>{tokenCheck}</div>
              </Link>
          }
        </div>
        <div className={styles.imageDetails}>
          <img className={styles.image} src={bmw} alt="" />
        </div>
      </div>
      <div className={styles.containerBox}>
        <Presentation />
      </div>
      <div className={[styles.containerBox, styles.box3].join(' ')}>
        <Influenceur />
      </div>
      <div className={[styles.containerBox, styles.box3].join(' ')}>
        <BoxHome />
      </div>
    </div>
  );
};
export default View;
