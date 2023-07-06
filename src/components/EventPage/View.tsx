import MenuBar from "../MenuBar";
import SlidShow from "../SlideShow/View";
import styles from "./styles.module.scss";
import img1 from "./assets/bmw.png";
import img2 from "./assets/room.jpg";
import img3 from "./assets/pg.jpg"
import img4 from "./assets/ratio.jpg"
import img5 from "./assets/bg.jpg"

type Props = {
  event: any[]
};

const View: React.FC<Props> = ({ event }) => {
  return (
    <div className={styles.event}>
      <MenuBar />
      {/*    <div >
        <TitleComp title={"evenement"} />
      </div> */}
      <div className={styles.contentpageEvent}>
        <SlidShow images={[img1, img2, img3, img4, img5]} />
      </div>

    </div>
  );
};
export default View;
