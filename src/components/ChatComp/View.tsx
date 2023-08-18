import styles from "./styles.module.scss";
import MenuBar from "../MenuBar";
import ChatBox from "../componentsktccar/chatBox";
import { TextField } from "@material-ui/core";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TitleComp from "../TitleComp";
import notGroupe from './assets/2810772.jpg'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Button } from "@mui/material";

type Props = {
  groupes: any[];
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredGroupes: any[];
  searchValue: string;
  isOpen: boolean;
  handleClickPopup: VoidFunction;
  sortByMembers: boolean;
  sortByAlphabet: boolean;
  setSortByMembers: any;
  setSortByAlphabet: any;
  handleClickNumberFilter: VoidFunction;
  handleClickAlphabetFilter: VoidFunction;
};

const View: React.FC<Props> = ({
  groupes,
  handleSearchChange,
  filteredGroupes,
  searchValue,
  isOpen,
  handleClickPopup,
  sortByMembers,
  sortByAlphabet,
  setSortByMembers,
  setSortByAlphabet,
  handleClickNumberFilter,
  handleClickAlphabetFilter
}) => {
  return (
    <div className={styles.chatBar}>
      <MenuBar />
      <div className={styles.chatPage}>
        <TitleComp title={"Groupe disponibles"} onClick={handleClickPopup} icon />
        <div className={styles.searchBar}>
          <TextField
            label="Recherche"
            variant="standard"
            value={searchValue}
            onChange={handleSearchChange}
            className={styles.search}
          />
        </div>
        <div>
          <Dialog open={isOpen} onClose={handleClickPopup}>
            <DialogTitle>Information Groupe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Les groupes sont créés pour favoriser une communication respectueuse. Si quelqu'un ne respecte pas cette règle, nous vous invitons à prendre des captures d'écran et à les envoyer par e-mail.                                     </DialogContentText>
              <DialogContentText className={styles.textPop}>
                Les messages sont sauvegardés pendant 24 heures, une fois ce délai écoulé, les messages seront supprimés.              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickPopup}>Fermer</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className={styles.boxCheckBox}>
          <label>
            <input
              type="checkbox"
              checked={sortByMembers}
              onChange={handleClickNumberFilter}
            />
            Trier par nombre de membres
          </label>
          <label>
            <input
              type="checkbox"
              checked={sortByAlphabet}
              onChange={handleClickAlphabetFilter}
            />
            Trier par ordre alphabétique
          </label>
        </div>
        {
          filteredGroupes.length !== 0 ?
            <div className={styles.boxGroup}>
              <ChatBox groupes={filteredGroupes} />
            </div>
            :
            <div className={styles.img}>
              <img src={notGroupe} width={400} height={300} className={styles.imgStyle} alt="" />
              <div className={styles.textStyle}>
                Pas de groupe a ce nom
              </div>
            </div>
        }

      </div>
    </div>
  );
};

export default View;

