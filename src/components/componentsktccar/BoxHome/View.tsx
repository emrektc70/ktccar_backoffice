import styles from "./styles.module.scss";

const boxHome = () => {
  return (
    <div className={styles.homeBoxPage}>
      <h2 className={styles.nameBox}> A quoi sert notre site ? </h2>
      <div className={styles.boxContainers}>
        <div className={styles.box1}>
          <h3 className={styles.titleBox}> Les évenements</h3>
          <p className={styles.pBox}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            nostrum unde dolorum hic officia iure minus praesentium sit porro
            perspiciatis, asperiores natus laboriosam. Nulla officia, dolore
            ipsa voluptas optio nisi.
          </p>
        </div>
        <div className={styles.box2}>
          <h3 className={styles.titleBox}>Discuter des membres </h3>
          <p className={styles.pBox}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            doloremque beatae veniam fuga maxime sequi temporibus itaque.
            Consequatur reiciendis vitae dicta eum debitis. Amet dolorem esse
            labore, fugit magni laboriosam.
          </p>
        </div>
        <div className={styles.box3}>
          <h3 className={styles.titleBox}>Nous conatcter ici </h3>
          <p className={styles.pBox}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            sequi eveniet molestias laborum voluptatibus, corporis soluta.
            Fugiat neque mollitia vero unde in, est aut aperiam rem iste
            obcaecati vitae repudiandae!
          </p>
        </div>
      </div>
    </div>
  );
};

export default boxHome;
