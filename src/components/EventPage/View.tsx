import MenuBar from "../MenuBar/View";
import SlidShow from "../SlideShow/View";
import styles from "./styles.module.scss";
import img1 from "./assets/bmw.png";
import img2 from "./assets/room.jpg";
import img3 from "./assets/pg.jpg"
import img4 from "./assets/ratio.jpg"
import img5 from "./assets/bg.jpg"
import EventTable from "../EventTable/View";

const eventPage = () => {
  return (
    <div className={styles.event}>
      <MenuBar />
      <div className={styles.title}>
        Événement
      </div>
      <div className={styles.contentpageEvent}>
        <SlidShow images={[img1, img2, img3, img4, img5]} />
      </div>
      <div className={styles.eventTable}>
        <EventTable />
      </div>
    </div>
  );
};
export default eventPage;
