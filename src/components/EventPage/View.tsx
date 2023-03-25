import MenuBar from "../MenuBar/View";
import SlidShow from "../SlideShow/View";
import styles from "./styles.module.scss";
import img1 from "./assets/bmw.png";
import img2 from "./assets/room.jpg";
import EventTable from "../EventTable/View";

const eventPage = () => {
  return (
    <div className={styles.event}>
      <MenuBar />
      <div className={styles.contentpageEvent}>
        <SlidShow images={[img1, img2]} />
      </div>
      <div className={styles.eventTable}>
        <EventTable />
      </div>
    </div>
  );
};
export default eventPage;
