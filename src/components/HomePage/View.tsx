import MenuBar from "../MenuBar";
import styles from "./styles.module.scss";
import bmw from "./assets/bmw.png";
import BoxHome from "../componentsktccar/BoxHome/View";

const homePage = () => {
  return (
    <div className={styles.home}>
      <MenuBar />
      <div className={styles.contentpage}>
        <div className={styles.textContent}>
          <div className={styles.textStyle}>
            <h2 className={styles.textTitle}>KTC CAR</h2>
            <h3>KTC CAR, site pour les passionnés d'automobiles.</h3>
          </div>
          <div className={styles.buttonRedirection}>Cliquer ici</div>
        </div>
        <div className={styles.imageDetails}>
          <img className={styles.image} src={bmw} alt="image" />
        </div>
      </div>
      <div className={styles.containerBox}>
        <BoxHome />
      </div>
    </div>
  );
};
export default homePage;
