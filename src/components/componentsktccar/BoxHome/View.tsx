import TitleComp from "../../TitleComp";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";


const boxHome = () => {
  return (
    <div className={styles.homeBoxPage}>
      <div className={styles.nameBox}>
        <TitleComp title={"A quoi sert notre site ?"} />
      </div>

      <div className={styles.boxContainers}>
        <div className={styles.box1}>
          <Link to={"/événement"} style={{ textDecoration: 'none' }}>
            <h3 className={styles.titleBox}> Les évenements</h3>
            <p className={styles.pBox}>
              Les événements représentent les actualités du monde de l'automobile, incluant les nouveaux arrivages, informations fraîches et nouvelles technologies. De plus, si vous possédez une communauté et que vous souhaitez organiser un rassemblement, vous pouvez contacter notre équipe afin que vous puissiez annoncer vos événements.
            </p>
          </Link>
        </div>
        <div className={styles.box2}>
          <Link to={"/chat"} style={{ textDecoration: 'none' }}>
            <h3 className={styles.titleBox}>Interagir avec les membres </h3>
            <p className={styles.pBox}>
              Notre application possède des groupes qui vous mettent en relation avec d'autres passionnés. Ces groupes sont ouverts afin que vous puissiez collaborer et communiquer entre vous tout en vous respectant.
            </p>
          </Link>
        </div>
        <div className={styles.box3}>
          <h3 className={styles.titleBox}>Règles à respecter. </h3>
          <p className={styles.pBox}>
            Respectez les autres membres en utilisant un langage approprié et respectueux. En cas de problème, n'hésitez pas à contacter notre équipe pour une résolution adéquate
          </p>
        </div>
      </div>
    </div>
  );
};

export default boxHome;
