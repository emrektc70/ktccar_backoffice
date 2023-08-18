import MenuBar from "../MenuBar";
import SlidShow from "../SlideShow/View";
import styles from "./styles.module.scss";
import img1 from "./assets/bmw.png";
import img2 from "./assets/audi.png";
import img3 from "./assets/benz.png"
import img4 from "./assets/lambo.png"
import img5 from "./assets/renault.png"
import img6 from "./assets/fer.png"
import img7 from "./assets/bg.png"
import EventTable from "../EventTable";
import TitleComp from "../TitleComp";
import notEvent from './assets/notEvent.jpg'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Button } from "@mui/material";

type Props = {
  events: any[];
  isOpen: boolean;
  handleClickPopup: VoidFunction
};

const View: React.FC<Props> = ({ events, isOpen, handleClickPopup }) => {
  return (
    <div className={styles.event}>
      <MenuBar />
      <TitleComp title={'Événements '} icon onClick={handleClickPopup} />
      <div className={styles.contentpageEvent}>
        <SlidShow images={[img1, img2, img3, img4, img5, img6, img7]} />
      </div>
      {
        events.length !== 0 ?
          <div className={styles.boxEvent}>
            {
              events.map((event) =>
                < EventTable event={event} />
              )
            }
          </div> :
          <div>
            <div>
              <img src={notEvent} width={330} height={280} alt="" />
            </div>
            Il n'y a pas d'eventement disponible
          </div>
      }
      <div>
        <Dialog open={isOpen} onClose={handleClickPopup}>
          <DialogTitle>Information concernant les événements</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Découvrez les événements à venir. Si vous avez une proposition d'événement à partager, n'hésitez pas à nous contacter par e-mail.                       </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickPopup}>Fermer</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default View;
