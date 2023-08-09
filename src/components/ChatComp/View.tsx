import styles from "./styles.module.scss";
import MenuBar from "../MenuBar";
import ChatBox from "../componentsktccar/chatBox";
import { TextField } from "@material-ui/core";
import TitleComp from "../TitleComp";
import notGroupe from './assets/2810772.jpg'


type Props = {
  groupes: any[];
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredGroupes: any[];
  searchValue: string
};

const View: React.FC<Props> = ({
  groupes,
  handleSearchChange,
  filteredGroupes,
  searchValue
}) => {
  return (
    <div className={styles.chatBar}>
      <MenuBar />
      <div className={styles.chatPage}>
        <TitleComp title={"Groupe disponibles"} />
        <div className={styles.searchBar}>
          <TextField
            label="Recherche"
            variant="standard"
            value={searchValue}
            onChange={handleSearchChange}
            className={styles.search}
          />
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

